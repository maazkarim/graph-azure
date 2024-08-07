import { AuthorizationManagementClient } from '@azure/arm-authorization';
import {
  RoleDefinition,
  RoleAssignment,
  ClassicAdministrator,
} from '@azure/arm-authorization/esm/models';
import {
  Client,
  DEFAULT_MAX_RETRIES,
  FIVE_MINUTES,
  iterateAllResources,
} from '../../../azure/resource-manager/client';
import { IntegrationProviderAPIError } from '@jupiterone/integration-sdk-core';
import ErrorLogger from '../../../../errorLogger';

export class AuthorizationClient extends Client {
  errorLogger = ErrorLogger.getInstance();
  public async iterateRoleDefinitions(
    subscriptionId: string,
    callback: (rd: RoleDefinition) => void | Promise<void>,
  ): Promise<void> {
    const serviceClient = await this.getAuthenticatedServiceClient(
      AuthorizationManagementClient,
    );

    await iterateAllResources({
      serviceClient,
      resourceEndpoint: {
        list: async () => {
          return serviceClient.roleDefinitions.list(subscriptionId);
        },
        listNext: serviceClient.roleDefinitions.listNext,
      },
      resourceDescription: 'authorization.roleDefinitions',
      logger: this.logger,
      callback,
      endpointRatePeriod: FIVE_MINUTES,
      maxRetryAttempts: 4 * DEFAULT_MAX_RETRIES,
    });
  }

  public async iterateRoleAssignments(
    callback: (ra: RoleAssignment) => void | Promise<void>,
  ): Promise<void> {
    const serviceClient = await this.getAuthenticatedServiceClient(
      AuthorizationManagementClient,
    );
    try {
      const items = await serviceClient.roleAssignments.list();
      for (const item of items) {
        await callback(item);
      }
    } catch (err) {
      this.errorLogger.logError("resource-manager", err.message);
      /* istanbul ignore else */
      if (err.statusCode === 404) {
        this.logger.warn({ error: err.message }, 'Resources not found');
      } else {
        throw new IntegrationProviderAPIError({
          cause: err.statusText,
          endpoint: 'authorization.roleAssignments',
          status: err.statusCode,
          statusText: err.statusText,
        });
      }
    }
  }

  public async iterateClassicAdministrators(
    callback: (ca: ClassicAdministrator) => void | Promise<void>,
  ): Promise<void> {
    const serviceClient = await this.getAuthenticatedServiceClient(
      AuthorizationManagementClient,
    );
    try {
      const items = await serviceClient.classicAdministrators.list();
      for (const item of items) {
        await callback(item);
      }
    } catch (err) {
      
      this.errorLogger.logError("resource-manager", err.message);

      /* istanbul ignore else */
      if (err.statusCode === 404) {
        this.logger.warn({ error: err.message }, 'Resources not found');
      } else {
        throw new IntegrationProviderAPIError({
          cause: err.statusText,
          endpoint: 'authorization.classicAdministrators',
          status: err.statusCode,
          statusText: err.statusText,
        });
      }
    }
  }
}
