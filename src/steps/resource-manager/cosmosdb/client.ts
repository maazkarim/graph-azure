import { ClusterResource, CosmosDBManagementClient } from '@azure/arm-cosmosdb';
import {
  DatabaseAccountGetResults,
  SqlDatabaseGetResults,
  MongoDBDatabaseGetResults,
  CassandraTableGetResults,
  CassandraKeyspaceGetResults
} from '@azure/arm-cosmosdb/src/models';

import {
  Client,
} from '../../../azure/resource-manager/client';
import { resourceGroupName } from '../../../azure/utils';

export class CosmosDBClient extends Client {
  
  public async iterateAccounts(
    config, 
    callback: (
      resource: DatabaseAccountGetResults,
      serviceClient: CosmosDBManagementClient,
    ) => void | Promise<void>,
  ): Promise<void> {
    const serviceClient = new CosmosDBManagementClient(
      this.getClientSecretCredentials(),
      config.subscriptionId??'',
    );

    const accounts = serviceClient.databaseAccounts.list();
    for await (const account of accounts){
      callback(account, serviceClient);
    }
  }

  /* eslint-disable @typescript-eslint/no-non-null-assertion */
  public async iterateSQLDatabases(
    dbAccount: DatabaseAccountGetResults,
    config, 
    callback: (
      resource: SqlDatabaseGetResults,
      serviceClient: CosmosDBManagementClient,
    ) => void | Promise<void>,
  ): Promise<void> {
    const serviceClient = new CosmosDBManagementClient(
      this.getClientSecretCredentials(),
      config.subscriptionId??'',
    );

    const groupName = resourceGroupName(dbAccount.id, true)!;
    const accountName = dbAccount.name!;
    // console.log("these accounts are successfully being iterated");

    const accounts = serviceClient.sqlResources.listSqlDatabases(groupName, accountName);
    for await (const account of accounts){
      callback(account, serviceClient);
    }
  }

  /* eslint-disable @typescript-eslint/no-non-null-assertion */
  public async iterateMongoDBDatabases(
    dbAccount: DatabaseAccountGetResults,
    config,
    callback: (
      resource: MongoDBDatabaseGetResults,
      serviceClient: CosmosDBManagementClient,
    ) => void | Promise<void>,
  ): Promise<void> {
    const serviceClient = new CosmosDBManagementClient(
      this.getClientSecretCredentials(),
      config.subscriptionId??'',
    );

    const groupName = resourceGroupName(dbAccount.id, true)!;
    const accountName = dbAccount.name!;

    const databases = serviceClient.mongoDBResources.listMongoDBDatabases(groupName, accountName);
    for await (const database of databases){
      callback(database, serviceClient);
    }
  }
  
  public async iterateCassandraClusters(
    config, 
    callback: (
      resource: ClusterResource,
      serviceClient: CosmosDBManagementClient,
    ) => void | Promise<void>,
  ): Promise<void> {
    const serviceClient = new CosmosDBManagementClient(
      this.getClientSecretCredentials(),
      config.subscriptionId??'',
    );

    const clusters = serviceClient.cassandraClusters.listBySubscription();
    for await (const cluster of clusters){
      callback(cluster, serviceClient);
    }
  }

  public async iterateCassandraKeyspaces(
    dbAccount: DatabaseAccountGetResults,
    config, 
    callback: (
      resource: CassandraKeyspaceGetResults,
      serviceClient: CosmosDBManagementClient,
    ) => void | Promise<void>,
  ): Promise<void> {
    const serviceClient = new CosmosDBManagementClient(
      this.getClientSecretCredentials(),
      config.subscriptionId??'',
    );
  
    const groupName = resourceGroupName(dbAccount.id, true)!;
    const accountName = dbAccount.name!;


    const keySpaces = serviceClient.cassandraResources.listCassandraKeyspaces(groupName, accountName);
    for await (const keySpace of keySpaces){
      callback(keySpace, serviceClient);
    }
  }
  
  public async iterateCassandraTables(
    dbAccount: DatabaseAccountGetResults,
    keyspaceName: string,
    config, 
    callback: (
      resource: CassandraTableGetResults,
      serviceClient: CosmosDBManagementClient,
    ) => void | Promise<void>,
  ): Promise<void> {
    const serviceClient = new CosmosDBManagementClient(
      this.getClientSecretCredentials(),
      config.subscriptionId??'',
    );
  
    const groupName = resourceGroupName(dbAccount.id, true)!;
    const accountName = dbAccount.name!;

    const tables = serviceClient.cassandraResources.listCassandraTables(groupName, accountName, keyspaceName);
    for await (const table of tables){
      callback(table, serviceClient);
    }
  }
  

}
