import {
  Entity,
  RelationshipClass,
  JobState,
  IntegrationError,
  createDirectRelationship,
} from '@jupiterone/integration-sdk-core';

import { IntegrationStepContext, AzureIntegrationStep } from '../../types';
import {
  CredentialUserRegistrationDetails,
  DirectoryGraphClient,
} from './client';
import {
  ACCOUNT_ENTITY_TYPE,
  STEP_AD_ACCOUNT,
  STEP_AD_GROUP_MEMBERS,
  STEP_AD_GROUPS,
  STEP_AD_USERS,
  GROUP_ENTITY_TYPE,
  STEP_AD_SERVICE_PRINCIPALS,
  STEP_AD_USER_REGISTRATION_DETAILS,
  ADEntities,
  ADRelationships,
} from './constants';
import {
  createAccountEntity,
  createAccountEntityWithOrganization,
  createAccountGroupRelationship,
  createAccountUserRelationship,
  createGroupEntity,
  createUserEntity,
  createServicePrincipalEntity,
} from './converters';

export async function getAccountEntity(jobState: JobState): Promise<Entity> {
  const accountEntity = await jobState.getData<Entity>(ACCOUNT_ENTITY_TYPE);

  if (!accountEntity) {
    throw new IntegrationError({
      message: 'Could not find account entity in job state',
      code: 'ACCOUNT_ENTITY_NOT_FOUND',
      fatal: true,
    });
  }

  return accountEntity;
}

export async function fetchAccount(
  executionContext: IntegrationStepContext,
): Promise<void> {
  const { logger, instance, jobState } = executionContext;
  const graphClient = new DirectoryGraphClient(logger, instance.config);

  let accountEntity: Entity;
  try {
    const organization = await graphClient.fetchOrganization();
    const securityDefaults = await graphClient.fetchIdentitySecurityDefaultsEnforcementPolicy();
    accountEntity = createAccountEntityWithOrganization(
      instance,
      organization,
      securityDefaults,
    );
  } catch (err) {
    // TODO logger.authError()
    accountEntity = createAccountEntity(instance);
  }

  await jobState.addEntity(accountEntity);
  await jobState.setData(ACCOUNT_ENTITY_TYPE, accountEntity);
}

export async function fetchUserRegistrationDetails(
  executionContext: IntegrationStepContext,
): Promise<void> {
  const { logger, instance, jobState } = executionContext;
  const graphClient = new DirectoryGraphClient(logger, instance.config);

  const userRegistrationDetailsMap = new Map<
    string,
    CredentialUserRegistrationDetails
  >();
  await graphClient.iterateCredentialUserRegistrationDetails(
    (registrationDetails) => {
      if (registrationDetails.id) {
        userRegistrationDetailsMap.set(
          registrationDetails.id,
          registrationDetails,
        );
      }
    },
  );

  await jobState.setData(
    'userRegistrationDetailsMap',
    userRegistrationDetailsMap,
  );
}

export async function fetchUsers(
  executionContext: IntegrationStepContext,
): Promise<void> {
  const { logger, instance, jobState } = executionContext;
  const graphClient = new DirectoryGraphClient(logger, instance.config);

  const accountEntity = await getAccountEntity(jobState);
  const userRegistrationDetailsMap = await jobState.getData<
    Map<string, CredentialUserRegistrationDetails>
  >('userRegistrationDetailsMap');

  await graphClient.iterateUsers(async (user) => {
    const userEntity = createUserEntity(
      user,
      userRegistrationDetailsMap?.get(user.id as string),
    );
    await jobState.addEntity(userEntity);
    await jobState.addRelationship(
      createAccountUserRelationship(accountEntity, userEntity),
    );
  });
}

export async function fetchGroups(
  executionContext: IntegrationStepContext,
): Promise<void> {
  const { logger, instance, jobState } = executionContext;
  logger.debug('Initializing directory graph client');
  const graphClient = new DirectoryGraphClient(logger, instance.config);

  const accountEntity = await getAccountEntity(jobState);
  logger.debug('Iterating groups');
  await graphClient.iterateGroups(async (group) => {
    logger.debug({ id: group.id }, 'Creating graph objects for group');
    const groupEntity = createGroupEntity(group);
    await jobState.addEntity(groupEntity);
    await jobState.addRelationship(
      createAccountGroupRelationship(accountEntity, groupEntity),
    );
  });
}

export async function fetchGroupMembers(
  executionContext: IntegrationStepContext,
): Promise<void> {
  const { logger, instance, jobState } = executionContext;
  const graphClient = new DirectoryGraphClient(logger, instance.config);

  await jobState.iterateEntities(
    { _type: GROUP_ENTITY_TYPE },
    async (groupEntity) => {
      await graphClient.iterateGroupMembers(
        { groupId: groupEntity.id as string },
        async (groupMember) => {
          const memberEntity = await jobState.findEntity(groupMember.id!);

          if (!memberEntity) {
            logger.warn(
              {
                groupId: groupEntity.id,
                groupMemberId: groupMember.id,
                groupMemberDisplayName: groupMember.displayName,
              },
              'Could not find group member',
            );
            return;
          }
          await jobState.addRelationship(
            createDirectRelationship({
              from: groupEntity,
              _class: RelationshipClass.HAS,
              to: memberEntity,
            }),
          );
        },
      );
    },
  );
}

export async function fetchServicePrincipals(
  executionContext: IntegrationStepContext,
): Promise<void> {
  const { logger, instance, jobState } = executionContext;
  const graphClient = new DirectoryGraphClient(logger, instance.config);

  await graphClient.iterateServicePrincipals(async (sp) => {
    const servicePrincipalEntity = createServicePrincipalEntity(sp);
    await jobState.addEntity(servicePrincipalEntity);
  });
}

export const activeDirectorySteps: AzureIntegrationStep[] = [
  {
    id: STEP_AD_ACCOUNT,
    name: 'Active Directory Info',
    entities: [ADEntities.ACCOUNT],
    relationships: [],
    executionHandler: fetchAccount,
    apiPermissions: ['Directory.Read.All', 'Policy.Read.All'],
  },
  {
    id: STEP_AD_USER_REGISTRATION_DETAILS,
    name: 'Active Directory User Registration Details',
    entities: [],
    relationships: [],
    dependsOn: [],
    executionHandler: fetchUserRegistrationDetails,
    apiPermissions: ['Reports.Read.All'],
  },
  {
    id: STEP_AD_USERS,
    name: 'Active Directory Users',
    entities: [ADEntities.USER],
    relationships: [ADRelationships.ACCOUNT_HAS_USER],
    dependsOn: [STEP_AD_ACCOUNT, STEP_AD_USER_REGISTRATION_DETAILS],
    executionHandler: fetchUsers,
    apiPermissions: ['Directory.Read.All'],
  },
  {
    id: STEP_AD_GROUPS,
    name: 'Active Directory Groups',
    entities: [ADEntities.USER_GROUP],
    relationships: [ADRelationships.ACCOUNT_HAS_GROUP],
    dependsOn: [STEP_AD_ACCOUNT],
    executionHandler: fetchGroups,
    apiPermissions: ['Directory.Read.All'],
  },
  {
    id: STEP_AD_GROUP_MEMBERS,
    name: 'Active Directory Group Members',
    entities: [ADEntities.GROUP_MEMBER],
    relationships: [
      ADRelationships.GROUP_HAS_USER,
      ADRelationships.GROUP_HAS_GROUP,
      ADRelationships.GROUP_HAS_MEMBER,
    ],
    dependsOn: [STEP_AD_GROUPS, STEP_AD_USERS],
    executionHandler: fetchGroupMembers,
    apiPermissions: ['Directory.Read.All'],
  },
  {
    id: STEP_AD_SERVICE_PRINCIPALS,
    name: 'Active Directory Service Principals',
    entities: [ADEntities.SERVICE_PRINCIPAL],
    relationships: [],
    dependsOn: [STEP_AD_ACCOUNT],
    executionHandler: fetchServicePrincipals,
    apiPermissions: ['Directory.Read.All'],
  },
];
