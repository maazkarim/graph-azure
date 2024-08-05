import {
  generateRelationshipType,
  RelationshipClass,
} from '@jupiterone/integration-sdk-core';

// Step IDs
export const STEP_RM_COSMOSDB_SQL_DATABASES = 'rm-cosmosdb-sql-databases';
export const STEP_RM_COSMOSDB_MONGODB_DATABASES = 'rm-cosmosdb-mongodb-databases';
export const STEP_RM_COSMOSDB_CASSANDRA_RESOURCES = 'rm-cosmosdb-cassandra-resources';
export const STEP_RM_COSMOSDB_CASSANDRA_CLUSTERS = 'rm-cosmosdb-cassandra-clusters';

// Graph objects
export const RM_COSMOSDB_ACCOUNT_ENTITY_TYPE = 'azure_cosmosdb_account';
export const RM_COSMOSDB_ACCOUNT_ENTITY_CLASS = ['Account', 'Service'];

export const RM_COSMOSDB_SQL_DATABASE_ENTITY_TYPE = 'azure_cosmosdb_sql_database';
export const RM_COSMOSDB_SQL_DATABASE_ENTITY_CLASS = ['Database', 'DataStore'];

export const RM_COSMOSDB_MONGODB_DATABASE_ENTITY_TYPE = 'azure_cosmosdb_mongodb_database';
export const RM_COSMOSDB_MONGODB_DATABASE_ENTITY_CLASS = ['Database', 'DataStore'];

export const RM_COSMOSDB_CASSANDRA_CLUSTER_ENTITY_TYPE = 'azure_cosmosdb_cassandra_cluster';
export const RM_COSMOSDB_CASSANDRA_CLUSTER_ENTITY_CLASS = ['Cluster', 'Database'];
export const RM_COSMOSDB_CASSANDRA_KEYSPACE_ENTITY_TYPE = 'azure_cosmosdb_cassandra_keyspace';
export const RM_COSMOSDB_CASSANDRA_KEYSPACE_ENTITY_CLASS = ['Keyspace', 'Database'];
export const RM_COSMOSDB_CASSANDRA_TABLE_ENTITY_TYPE = 'azure_cosmosdb_cassandra_table';
export const RM_COSMOSDB_CASSANDRA_TABLE_ENTITY_CLASS = ['Table', 'DataStore'];

export const RM_COSMOSDB_ACCOUNT_SQL_DATABASE_RELATIONSHIP_CLASS = RelationshipClass.HAS;
export const RM_COSMOSDB_ACCOUNT_SQL_DATABASE_RELATIONSHIP_TYPE = generateRelationshipType(
  RM_COSMOSDB_ACCOUNT_SQL_DATABASE_RELATIONSHIP_CLASS,
  RM_COSMOSDB_ACCOUNT_ENTITY_TYPE,
  RM_COSMOSDB_SQL_DATABASE_ENTITY_TYPE,
);

export const RM_COSMOSDB_ACCOUNT_MONGODB_DATABASE_RELATIONSHIP_CLASS = RelationshipClass.HAS;
export const RM_COSMOSDB_ACCOUNT_MONGODB_DATABASE_RELATIONSHIP_TYPE = generateRelationshipType(
  RM_COSMOSDB_ACCOUNT_MONGODB_DATABASE_RELATIONSHIP_CLASS,
  RM_COSMOSDB_ACCOUNT_ENTITY_TYPE,
  RM_COSMOSDB_MONGODB_DATABASE_ENTITY_TYPE,
);

export const cosmosDBEntities = {
  COSMOSDB_ACCOUNT: {
    resourceName: '[RM] Cosmos DB Account',
    _type: RM_COSMOSDB_ACCOUNT_ENTITY_TYPE,
    _class: RM_COSMOSDB_ACCOUNT_ENTITY_CLASS,
  },
  COSMOSDB_SQL_DATABASE: {
    resourceName: '[RM] Cosmos DB SQL Database',
    _type: RM_COSMOSDB_SQL_DATABASE_ENTITY_TYPE,
    _class: RM_COSMOSDB_SQL_DATABASE_ENTITY_CLASS,
  },
  COSMOSDB_MONGODB_DATABASE: {
    resourceName: '[RM] Cosmos DB MongoDB Database',
    _type: RM_COSMOSDB_MONGODB_DATABASE_ENTITY_TYPE,
    _class: RM_COSMOSDB_MONGODB_DATABASE_ENTITY_CLASS,
  },
  COSMOSDB_CASSANDRA_CLUSTER: {
    resourceName: '[RM] Cosmos DB Cassandra Cluster',
    _type: RM_COSMOSDB_CASSANDRA_CLUSTER_ENTITY_TYPE,
    _class: RM_COSMOSDB_CASSANDRA_CLUSTER_ENTITY_CLASS,
  },
  COSMOSDB_CASSANDRA_KEYSPACE: {
    resourceName: '[RM] Cosmos DB Cassandra Keyspace',
    _type: RM_COSMOSDB_CASSANDRA_KEYSPACE_ENTITY_TYPE,
    _class: RM_COSMOSDB_CASSANDRA_KEYSPACE_ENTITY_CLASS,
  },
  COSMOSDB_CASSANDRA_TABLE: {
    resourceName: '[RM] Cosmos DB Cassandra Table',
    _type: RM_COSMOSDB_CASSANDRA_TABLE_ENTITY_TYPE,
    _class: RM_COSMOSDB_CASSANDRA_TABLE_ENTITY_CLASS,
  }
};

export const cosmosDBRelationships = {
  COSMOSDB_HAS_SQL_DATABASE: {
    _type: RM_COSMOSDB_ACCOUNT_SQL_DATABASE_RELATIONSHIP_TYPE,
    sourceType: RM_COSMOSDB_ACCOUNT_ENTITY_TYPE,
    _class: RM_COSMOSDB_ACCOUNT_SQL_DATABASE_RELATIONSHIP_CLASS,
    targetType: RM_COSMOSDB_SQL_DATABASE_ENTITY_TYPE,
  },
  COSMOSDB_HAS_MONGODB_DATABASE: {
    _type: RM_COSMOSDB_ACCOUNT_MONGODB_DATABASE_RELATIONSHIP_TYPE,
    sourceType: RM_COSMOSDB_ACCOUNT_ENTITY_TYPE,
    _class: RM_COSMOSDB_ACCOUNT_MONGODB_DATABASE_RELATIONSHIP_CLASS,
    targetType: RM_COSMOSDB_MONGODB_DATABASE_ENTITY_TYPE,
  },
  COSMOSDB_HAS_CASSANDRA_KEYSPACE: {
    _type: generateRelationshipType(RelationshipClass.HAS, RM_COSMOSDB_ACCOUNT_ENTITY_TYPE, RM_COSMOSDB_CASSANDRA_KEYSPACE_ENTITY_TYPE),
    sourceType: RM_COSMOSDB_ACCOUNT_ENTITY_TYPE,
    _class: RelationshipClass.HAS,
    targetType: RM_COSMOSDB_CASSANDRA_KEYSPACE_ENTITY_TYPE,
  },
  CASSANDRA_KEYSPACE_HAS_CASSANDRA_TABLE: {
    _type: generateRelationshipType(RelationshipClass.HAS, RM_COSMOSDB_CASSANDRA_KEYSPACE_ENTITY_TYPE, RM_COSMOSDB_CASSANDRA_TABLE_ENTITY_TYPE),
    sourceType: RM_COSMOSDB_CASSANDRA_KEYSPACE_ENTITY_TYPE,
    _class: RelationshipClass.HAS,
    targetType: RM_COSMOSDB_CASSANDRA_TABLE_ENTITY_TYPE,
  },
  COSMOSDB_HAS_CASSANDRA_CLUSTER: {
    _type: generateRelationshipType(RelationshipClass.HAS, RM_COSMOSDB_ACCOUNT_ENTITY_TYPE, RM_COSMOSDB_CASSANDRA_CLUSTER_ENTITY_TYPE),
    sourceType: RM_COSMOSDB_ACCOUNT_ENTITY_TYPE,
    _class: RelationshipClass.HAS,
    targetType: RM_COSMOSDB_CASSANDRA_CLUSTER_ENTITY_TYPE,
  },
};
