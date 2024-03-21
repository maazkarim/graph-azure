import {
  createDirectRelationship,
  RelationshipClass,
} from '@jupiterone/integration-sdk-core';
import { createAzureWebLinker } from '../../../azure';
import { IntegrationStepContext, AzureIntegrationStep } from '../../../types';
import { getAccountEntity } from '../../active-directory';
import { STEP_AD_ACCOUNT } from '../../active-directory/constants';
import {
  RESOURCE_GROUP_ENTITY,
  STEP_RM_RESOURCES_RESOURCE_GROUPS,
} from '../resources/constants';
import createResourceGroupResourceRelationship from '../utils/createResourceGroupResourceRelationship';
import { ExpressRouteClient } from './client';
import {
  ExpressRouteRelationships,
  ExpressRouteEntities,
  STEP_AZURE_EXPRESS_ROUTE_CIRCUIT,
  STEP_AZURE_APPLICATION_GATEWAY,
  STEP_AZURE_BGP_SERVICE_COMMUNITIES,
  STEP_AZURE_EXPRESS_ROUTE,
  STEP_AZURE_EXPRESS_ROUTE_CIRCUIT_CONNECTION,
  STEP_AZURE_EXPRESS_ROUTE_CROSS_CONNECTION,
  STEP_AZURE_PEER_EXPRESS_ROUTE_CONNECTION,
} from './constants';
import {
  createAzureApplicationGatewayEntity,
  createAzureBgpServiceCommunitiesEntity,
  createAzureExpressRouteCircuitConnectionEntity,
  createAzureExpressRouteCircuitEntity,
  createAzureExpressRouteCrossConnectionEntity,
  createAzureExpressRouteEntity,
  createAzurePeerExpressRouteCircuitConnectionEntity,
} from './converters';
import { resourceGroupName } from '../../../azure/utils';
import {
  createDiagnosticSettingsEntitiesAndRelationshipsForResource,
  diagnosticSettingsEntitiesForResource,
  getDiagnosticSettingsRelationshipsForResource,
} from '../utils/createDiagnosticSettingsEntitiesAndRelationshipsForResource';
import { INGESTION_SOURCE_IDS } from '../../../constants';
import { steps as storageSteps } from '../storage/constants';

export async function fetchAzureExpressRouteCircuit(
  executionContext: IntegrationStepContext,
): Promise<void> {
  const { instance, logger, jobState } = executionContext;
  const accountEntity = await getAccountEntity(jobState);
  const webLinker = createAzureWebLinker(accountEntity.defaultDomain as string);

  const client = new ExpressRouteClient(instance.config, logger);

  // Fetch all expressRouteCircuits
  await client.iterateExpressRouteCircuit(async (expressRouteCircuit) => {
    console.log('expressRouteCircuit===========', expressRouteCircuit);
    const expressRouteCircuitEntity = createAzureExpressRouteCircuitEntity(
      webLinker,
      expressRouteCircuit,
    );
    await jobState.addEntity(expressRouteCircuitEntity);
  });
}

export async function fetchAzureExpressRoute(
  executionContext: IntegrationStepContext,
): Promise<void> {
  const { instance, logger, jobState } = executionContext;
  const accountEntity = await getAccountEntity(jobState);
  const webLinker = createAzureWebLinker(accountEntity.defaultDomain as string);
}

export async function fetchAzureExpressRouteCircuitConnection(
  executionContext: IntegrationStepContext,
): Promise<void> {
  const { instance, logger, jobState } = executionContext;
  const accountEntity = await getAccountEntity(jobState);
  const webLinker = createAzureWebLinker(accountEntity.defaultDomain as string);
  const client = new ExpressRouteClient(instance.config, logger);

  // Fetch all AzureExpressRoute CircuitConnection
  await client.iterateExpressRouteCircuitConnection(
    async (routeCircuitConnection) => {
      const routeCircuitConnectionEntity =
        createAzureExpressRouteCircuitConnectionEntity(
          webLinker,
          routeCircuitConnection,
        );
      await jobState.addEntity(routeCircuitConnectionEntity);
    },
  );
}

export async function fetchAzureExpressRouteCrossConnection(
  executionContext: IntegrationStepContext,
): Promise<void> {
  const { instance, logger, jobState } = executionContext;
  const accountEntity = await getAccountEntity(jobState);
  const webLinker = createAzureWebLinker(accountEntity.defaultDomain as string);
  const client = new ExpressRouteClient(instance.config, logger);

  // Fetch all EventHub namespaces
  await client.iterateExpressRouteCrossConnection(
    async (expressRouteCrossConnection) => {
      const expressRouteCrossConnectionEntity =
        createAzureExpressRouteCrossConnectionEntity(
          webLinker,
          expressRouteCrossConnection,
        );
      await jobState.addEntity(expressRouteCrossConnectionEntity);
    },
  );
}

export async function fetchAzurePeerExpressRouteConnection(
  executionContext: IntegrationStepContext,
): Promise<void> {
  const { instance, logger, jobState } = executionContext;
  const accountEntity = await getAccountEntity(jobState);
  const webLinker = createAzureWebLinker(accountEntity.defaultDomain as string);
  const client = new ExpressRouteClient(instance.config, logger);

  // Fetch all EventHub namespaces
  await client.iteratePeerExpressRouteConnection(async (namespace) => {
    const namespaceEntity = createAzurePeerExpressRouteCircuitConnectionEntity(
      webLinker,
      namespace,
    );
    await jobState.addEntity(namespaceEntity);
  });
}

export async function fetchAzureBgpServiceCommunities(
  executionContext: IntegrationStepContext,
): Promise<void> {
  const { instance, logger, jobState } = executionContext;
  const accountEntity = await getAccountEntity(jobState);
  const webLinker = createAzureWebLinker(accountEntity.defaultDomain as string);
  const client = new ExpressRouteClient(instance.config, logger);

  // Fetch all EventHub namespaces
  await client.iterateBgpServiceCommunities(async (bgpServiceCommunity) => {
    const bgpServiceCommunityEntity = createAzureBgpServiceCommunitiesEntity(
      webLinker,
      bgpServiceCommunity,
    );
    await jobState.addEntity(bgpServiceCommunityEntity);
  });
}

export async function fetchAzureApplicationGateway(
  executionContext: IntegrationStepContext,
): Promise<void> {
  const { instance, logger, jobState } = executionContext;
  const accountEntity = await getAccountEntity(jobState);
  const webLinker = createAzureWebLinker(accountEntity.defaultDomain as string);
  const client = new ExpressRouteClient(instance.config, logger);

  // Fetch all EventHub namespaces
  await client.iterateApplicationGateway(async (applicationGateway) => {
    console.log('=========applicationGateway========', applicationGateway);
    const applicationGatewayEntity = createAzureApplicationGatewayEntity(
      webLinker,
      applicationGateway,
    );
    await jobState.addEntity(applicationGatewayEntity);
  });
}

export const expressRouteSteps: AzureIntegrationStep[] = [
  // {
  //   id: STEP_AZURE_EXPRESS_ROUTE_CIRCUIT,
  //   name: 'Express Route Circuit',
  //   entities: [ExpressRouteEntities.AZURE_EXPRESS_ROUTE_CIRCUIT],
  //   relationships: [
  //     // ExpressRouteRelationships.AZURE_EXPRESS_ROUTE_CIRCUIT_HAS_AZURE_EXPRESS_ROUTE_CIRCUIT_CONNECTION,
  //     // ExpressRouteRelationships.AZURE_EXPRESS_ROUTE_CIRCUIT_HAS_AZURE_PEER_EXPRESS_ROUTE_CONNECTION
  //   ],
  //   dependsOn: [],
  //   executionHandler: fetchAzureExpressRouteCircuit,
  //   ingestionSourceId: INGESTION_SOURCE_IDS.EXPRESS_ROUTE
  // },
  // {
  //   id: STEP_AZURE_EXPRESS_ROUTE,
  //   name: 'Azure Express Route',
  //   entities: [ExpressRouteEntities.AZURE_EXPRESS_ROUTE],
  //   relationships: [
  //     ExpressRouteRelationships.AZURE_EXPRESS_ROUTE_HAS_AZURE_EXPRESS_ROUTE_CIRCUIT,
  //     ExpressRouteRelationships.AZURE_EXPRESS_ROUTE_HAS_AZURE_EXPRESS_ROUTE_CIRCUIT_CONNECTION,
  //     ExpressRouteRelationships.AZURE_EXPRESS_ROUTE_HAS_AZURE_EXPRESS_ROUTE_CROSS_CONNECTION,
  //     ExpressRouteRelationships.AZURE_EXPRESS_ROUTE_HAS_AZURE_PEER_EXPRESS_ROUTE_CONNECTION,
  //     ExpressRouteRelationships.AZURE_EXPRESS_ROUTE_HAS_AZURE_APPLICATION_GATEWAY
  //   ],
  //   dependsOn: [STEP_AD_ACCOUNT],
  //   executionHandler: fetchAzureExpressRoute,
  //   ingestionSourceId: INGESTION_SOURCE_IDS.EXPRESS_ROUTE
  // },
  // {
  //   id: STEP_AZURE_EXPRESS_ROUTE_CIRCUIT_CONNECTION,
  //   name: 'Express Route Circuit Connection',
  //   entities: [ExpressRouteEntities.AZURE_EXPRESS_ROUTE_CIRCUIT_CONNECTION],
  //   relationships: [],
  //   dependsOn: [STEP_AD_ACCOUNT],
  //   executionHandler: fetchAzureExpressRouteCircuitConnection,
  //   ingestionSourceId: INGESTION_SOURCE_IDS.EXPRESS_ROUTE
  // },
  // {
  //   id: STEP_AZURE_EXPRESS_ROUTE_CROSS_CONNECTION,
  //   name: 'Express Route Cross Circuit',
  //   entities: [ExpressRouteEntities.AZURE_EXPRESS_ROUTE_CROSS_CONNECTION],
  //   relationships: [],
  //   dependsOn: [STEP_AD_ACCOUNT],
  //   executionHandler: fetchAzureExpressRouteCrossConnection,
  //   ingestionSourceId: INGESTION_SOURCE_IDS.EXPRESS_ROUTE
  // },
  {
    id: STEP_AZURE_PEER_EXPRESS_ROUTE_CONNECTION,
    name: 'Azure Peer Express Route Connection',
    entities: [ExpressRouteEntities.AZURE_PEER_EXPRESS_ROUTE_CONNECTION],
    relationships: [],
    dependsOn: [STEP_AD_ACCOUNT],
    executionHandler: fetchAzurePeerExpressRouteConnection,
    ingestionSourceId: INGESTION_SOURCE_IDS.EXPRESS_ROUTE,
  },
  {
    id: STEP_AZURE_BGP_SERVICE_COMMUNITIES,
    name: 'Azure Bgp Service Communities',
    entities: [ExpressRouteEntities.AZURE_BGP_SERVICE_COMMUNITIES],
    relationships: [
      ExpressRouteRelationships.AZURE_BGP_SERVICE_COMMUNITIES_HAS_AZURE_EXPRESS_ROUTE,
    ],
    dependsOn: [],
    executionHandler: fetchAzureBgpServiceCommunities,
    ingestionSourceId: INGESTION_SOURCE_IDS.EXPRESS_ROUTE,
  },
  {
    id: STEP_AZURE_APPLICATION_GATEWAY,
    name: 'Azure Application Gateway',
    entities: [ExpressRouteEntities.AZURE_APPLICATION_GATEWAY],
    relationships: [],
    dependsOn: [],
    executionHandler: fetchAzureApplicationGateway,
    ingestionSourceId: INGESTION_SOURCE_IDS.EXPRESS_ROUTE,
  },
];
