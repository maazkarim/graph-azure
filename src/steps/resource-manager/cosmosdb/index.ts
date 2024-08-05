import {
  createDirectRelationship,
  RelationshipClass,
} from '@jupiterone/integration-sdk-core';

import { createAzureWebLinker } from '../../../azure';
import { IntegrationStepContext, AzureIntegrationStep } from '../../../types';
import { getAccountEntity } from '../../active-directory';
import { STEP_AD_ACCOUNT } from '../../active-directory/constants';
import { CosmosDBClient } from './client';
import {
  RM_COSMOSDB_ACCOUNT_ENTITY_TYPE,
  STEP_RM_COSMOSDB_MONGODB_DATABASES,
  STEP_RM_COSMOSDB_SQL_DATABASES,
  STEP_RM_COSMOSDB_CASSANDRA_RESOURCES,
  cosmosDBEntities,
  cosmosDBRelationships,
  STEP_RM_COSMOSDB_CASSANDRA_CLUSTERS,
} from './constants';
import { createAccountEntity, createCassandraClusterEntity, createCassandraKeyspaceEntity, createCassandraTableEntity, createMongoDBDatabaseEntity, createSQLDatabaseEntity } from './converters';
import createResourceGroupResourceRelationship, {
  createResourceGroupResourceRelationshipMetadata,
} from '../utils/createResourceGroupResourceRelationship';
import { STEP_RM_RESOURCES_RESOURCE_GROUPS } from '../resources/constants';
import { INGESTION_SOURCE_IDS } from '../../../constants';

export async function fetchCosmosDBSqlDatabases(
  executionContext: IntegrationStepContext,
): Promise<void> {
  const { instance, logger, jobState } = executionContext;
  const client = new CosmosDBClient(instance.config, logger);

  const accountEntity = await getAccountEntity(jobState);
  const webLinker = createAzureWebLinker(accountEntity.defaultDomain as string);

  await client.iterateAccounts(instance.config, async (account) => {
    const dbAccountEntity = createAccountEntity(webLinker, account);
    await jobState.addEntity(dbAccountEntity);

    await createResourceGroupResourceRelationship(
      executionContext,
      dbAccountEntity,
    );

    await client.iterateSQLDatabases(account, instance.config, async (database) => {
      const dbEntity = createSQLDatabaseEntity(webLinker, account, database);
      await jobState.addEntity(dbEntity);
      await jobState.addRelationship(
        createDirectRelationship({
          _class: RelationshipClass.HAS,
          from: dbAccountEntity,
          to: dbEntity,
          properties: {
            dbAccountId: account.id,
          },
        }),
      );
    });
  });
}

export async function fetchCosmosDBMongoDBDatabases(
  executionContext: IntegrationStepContext,
): Promise<void> {
  const { instance, logger, jobState } = executionContext;
  const client = new CosmosDBClient(instance.config, logger);

  const accountEntity = await getAccountEntity(jobState);
  const webLinker = createAzureWebLinker(accountEntity.defaultDomain as string);

  await client.iterateAccounts(instance.config, async (account) => {
    const dbAccountEntity = createAccountEntity(webLinker, account);
    await jobState.addEntity(dbAccountEntity);

    await createResourceGroupResourceRelationship(
      executionContext,
      dbAccountEntity,
    );

    await client.iterateMongoDBDatabases(account, instance.config, async (database) => {
      const dbEntity = createMongoDBDatabaseEntity(webLinker, account, database);
      await jobState.addEntity(dbEntity);
      await jobState.addRelationship(
        createDirectRelationship({
          _class: RelationshipClass.HAS,
          from: dbAccountEntity,
          to: dbEntity,
          properties: {
            dbAccountId: account.id,
          },
        }),
      );
    });
  });
}

export async function fetchCosmosDBCassandraDatabases(
  executionContext: IntegrationStepContext,
): Promise<void> {
  const { instance, logger, jobState } = executionContext;
  const client = new CosmosDBClient(instance.config, logger);

  const accountEntity = await getAccountEntity(jobState);
  const webLinker = createAzureWebLinker(accountEntity.defaultDomain as string);



  await client.iterateAccounts(instance.config, async (account) => {
    console.log(`Processing account: ${account.name}`);
    const dbAccountEntity = createAccountEntity(webLinker, account);
    await jobState.addEntity(dbAccountEntity);

    await createResourceGroupResourceRelationship(
      executionContext,
      dbAccountEntity,
    );

    await client.iterateCassandraKeyspaces(account, instance.config, async (keyspace) => {
      const keyspaceEntity = createCassandraKeyspaceEntity(
        webLinker,
        account,
        keyspace,
      );
      await jobState.addEntity(keyspaceEntity);
      await jobState.addRelationship(
        createDirectRelationship({
          _class: RelationshipClass.HAS,
          from: dbAccountEntity,
          to: keyspaceEntity,
          properties: {
            dbAccountId: account.id,
          },
        }),
      );

      await client.iterateCassandraTables(account, keyspace.name!, instance.config, async (table) => {
        const tableEntity = createCassandraTableEntity(
          webLinker,
          account,
          keyspace,
          table,
        );
        await jobState.addEntity(tableEntity);
        await jobState.addRelationship(
          createDirectRelationship({
            _class: RelationshipClass.HAS,
            from: keyspaceEntity,
            to: tableEntity,
            properties: {
              keyspaceId: keyspace.id,
            },
          }),
        );
      });
    });
  });

  console.log('fetchCosmosDBCassandraDatabases function completed.');
}
export async function fetchCosmosDBCassandraClusters(
  executionContext: IntegrationStepContext,
): Promise<void> {
  const { instance, logger, jobState } = executionContext;
  const client = new CosmosDBClient(instance.config, logger);

  const accountEntity = await getAccountEntity(jobState);
  const webLinker = createAzureWebLinker(accountEntity.defaultDomain as string);

  await client.iterateCassandraClusters(instance.config, async (cluster) => {
    console.log(`Processing cluster: ${cluster.name}`);
    const clusterEntity = createCassandraClusterEntity(webLinker, cluster);
    await jobState.addEntity(clusterEntity);

    await createResourceGroupResourceRelationship(
      executionContext,
      clusterEntity,
    );
  });

  console.log('fetchCosmosDBCassandraClusters function completed.');
}





export const cosmosdbSteps: AzureIntegrationStep[] = [
  {
    id: STEP_RM_COSMOSDB_SQL_DATABASES,
    name: 'CosmosDB SQL Databases',
    entities: [
      cosmosDBEntities.COSMOSDB_ACCOUNT,
      cosmosDBEntities.COSMOSDB_SQL_DATABASE,
    ],
    relationships: [
      cosmosDBRelationships.COSMOSDB_HAS_SQL_DATABASE,
      createResourceGroupResourceRelationshipMetadata(
        RM_COSMOSDB_ACCOUNT_ENTITY_TYPE,
      ),
    ],
    dependsOn: [STEP_AD_ACCOUNT, STEP_RM_RESOURCES_RESOURCE_GROUPS],
    executionHandler: fetchCosmosDBSqlDatabases,
    rolePermissions: [
      'Microsoft.DocumentDB/databaseAccounts/read',
      'Microsoft.DocumentDB/databaseAccounts/sqlDatabases/read',
    ],
    ingestionSourceId: INGESTION_SOURCE_IDS.COSMOSDB,
  },
  {
    id: STEP_RM_COSMOSDB_MONGODB_DATABASES,
    name: 'CosmosDB MongoDB Databases',
    entities: [
      cosmosDBEntities.COSMOSDB_ACCOUNT,
      cosmosDBEntities.COSMOSDB_MONGODB_DATABASE,
    ],
    relationships: [
      cosmosDBRelationships.COSMOSDB_HAS_MONGODB_DATABASE,
      createResourceGroupResourceRelationshipMetadata(
        RM_COSMOSDB_ACCOUNT_ENTITY_TYPE,
      ),
    ],
    dependsOn: [STEP_AD_ACCOUNT, STEP_RM_RESOURCES_RESOURCE_GROUPS],
    executionHandler: fetchCosmosDBMongoDBDatabases,
    rolePermissions: [
      'Microsoft.DocumentDB/databaseAccounts/read',
      'Microsoft.DocumentDB/databaseAccounts/mongoDBDatabases/read',
    ],
    ingestionSourceId: INGESTION_SOURCE_IDS.COSMOSDB,
  },
  {
    id: STEP_RM_COSMOSDB_CASSANDRA_RESOURCES,
    name: 'CosmosDB Cassandra Keyspaces, and Tables',
    entities: [
      cosmosDBEntities.COSMOSDB_ACCOUNT,
      cosmosDBEntities.COSMOSDB_CASSANDRA_KEYSPACE,
      cosmosDBEntities.COSMOSDB_CASSANDRA_TABLE,
    ],
    relationships: [
      cosmosDBRelationships.COSMOSDB_HAS_CASSANDRA_KEYSPACE,
      cosmosDBRelationships.CASSANDRA_KEYSPACE_HAS_CASSANDRA_TABLE,
      createResourceGroupResourceRelationshipMetadata(
        RM_COSMOSDB_ACCOUNT_ENTITY_TYPE,
      ),
    ],
    dependsOn: [STEP_AD_ACCOUNT, STEP_RM_RESOURCES_RESOURCE_GROUPS],
    executionHandler: fetchCosmosDBCassandraDatabases,
    rolePermissions: [
      'Microsoft.DocumentDB/databaseAccounts/read',
      'Microsoft.DocumentDB/databaseAccounts/cassandraKeyspaces/read',
      'Microsoft.DocumentDB/databaseAccounts/cassandraKeyspaces/tables/read',
    ],
    ingestionSourceId: INGESTION_SOURCE_IDS.COSMOSDB,
  },
  {
    id: STEP_RM_COSMOSDB_CASSANDRA_CLUSTERS,
    name: 'CosmosDB Cassandra Clusters',
    entities: [
      cosmosDBEntities.COSMOSDB_ACCOUNT,
      cosmosDBEntities.COSMOSDB_CASSANDRA_CLUSTER,
    ],
    relationships: [
      cosmosDBRelationships.COSMOSDB_HAS_CASSANDRA_CLUSTER,
      createResourceGroupResourceRelationshipMetadata(
        RM_COSMOSDB_ACCOUNT_ENTITY_TYPE,
      ),
    ],
    dependsOn: [STEP_AD_ACCOUNT, STEP_RM_RESOURCES_RESOURCE_GROUPS],
    executionHandler: fetchCosmosDBCassandraClusters,
    rolePermissions: [
      'Microsoft.DocumentDB/cassandraClusters/read',
    ],
    ingestionSourceId: INGESTION_SOURCE_IDS.COSMOSDB,
  },

];

