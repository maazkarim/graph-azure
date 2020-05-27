import {
  createIntegrationRelationship,
  Entity,
} from '@jupiterone/integration-sdk';

import { createAzureWebLinker } from '../../../../azure';
import { IntegrationStepContext } from '../../../../types';
import { ACCOUNT_ENTITY_TYPE } from '../../../active-directory';
import { createDatabaseEntity, createDbServerEntity } from '../converters';
import { MySQLClient } from './client';
import {
  RM_MYSQL_DATABASE_ENTITY_TYPE,
  RM_MYSQL_SERVER_ENTITY_TYPE,
} from './constants';

export * from './constants';

export async function fetchMySQLDatabases(
  executionContext: IntegrationStepContext,
): Promise<void> {
  const { instance, logger, jobState } = executionContext;
  const accountEntity = await jobState.getData<Entity>(ACCOUNT_ENTITY_TYPE);

  const webLinker = createAzureWebLinker(accountEntity.defaultDomain as string);
  const client = new MySQLClient(instance.config, logger);

  await client.iterateServers(async (server) => {
    const serverEntity = createDbServerEntity(
      webLinker,
      server,
      RM_MYSQL_SERVER_ENTITY_TYPE,
    );
    await jobState.addEntity(serverEntity);

    try {
      await client.iterateDatabases(server, async (e) => {
        const databaseEntity = createDatabaseEntity(
          webLinker,
          e,
          RM_MYSQL_DATABASE_ENTITY_TYPE,
        );
        await jobState.addEntity(databaseEntity);
        await jobState.addRelationship(
          createIntegrationRelationship({
            _class: 'HAS',
            from: serverEntity,
            to: databaseEntity,
          }),
        );
      });
    } catch (err) {
      logger.warn(
        { err, server: { id: server.id, type: server.type } },
        'Failure fetching databases for server',
      );
      // In the case this is a transient failure, ideally we would avoid
      // deleting previously ingested databases for this server. That would
      // require that we process each server independently, and have a way
      // to communicate to the synchronizer that only a subset is partial.
    }
  });
}
