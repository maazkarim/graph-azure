import { fetchStorageQueues, fetchStorageTables } from '.';
import {
  createMockStepExecutionContext,
  Recording,
} from '@jupiterone/integration-sdk-testing';
import { IntegrationConfig } from '../../../types';
import { setupAzureRecording } from '../../../../test/helpers/recording';
let recording: Recording;

afterEach(async () => {
  if (recording) {
    await recording.stop();
  }
});

test('step - storage queues', async () => {
  const instanceConfig: IntegrationConfig = {
    clientId: process.env.CLIENT_ID || 'clientId',
    clientSecret: process.env.CLIENT_SECRET || 'clientSecret',
    directoryId: '992d7bbe-b367-459c-a10f-cf3fd16103ab',
    subscriptionId: 'd3803fd6-2ba4-4286-80aa-f3d613ad59a7',
  };

  recording = setupAzureRecording({
    directory: __dirname,
    name: 'resource-manager-step-storage-queues',
  });

  const context = createMockStepExecutionContext<IntegrationConfig>({
    instanceConfig,
    entities: [
      {
        _class: ['Service'],
        _type: 'azure_storage_account',
        _key: `/subscriptions/dccea45f-7035-4a17-8731-1fd46aaa74a0/resourceGroups/j1dev/providers/Microsoft.Storage/storageAccounts/ndowmon1j1dev`,
        id: `/subscriptions/dccea45f-7035-4a17-8731-1fd46aaa74a0/resourceGroups/j1dev/providers/Microsoft.Storage/storageAccounts/ndowmon1j1dev`,
        name: `ndowmon1j1dev`,
        kind: 'StorageV2',
      },
      {
        _class: ['Service'],
        _type: 'azure_storage_account',
        _key: `/subscriptions/dccea45f-7035-4a17-8731-1fd46aaa74a0/resourceGroups/j1dev/providers/Microsoft.Storage/storageAccounts/ndowmon1j1devblobstorage`,
        id: `/subscriptions/dccea45f-7035-4a17-8731-1fd46aaa74a0/resourceGroups/j1dev/providers/Microsoft.Storage/storageAccounts/ndowmon1j1devblobstorage`,
        name: `ndowmon1j1devblobstorage`,
        kind: 'BlockBlobStorage',
      },
    ],
  });

  context.jobState.getData = jest.fn().mockResolvedValue({
    defaultDomain: 'www.fake-domain.com',
  });

  await fetchStorageQueues(context);

  expect(context.jobState.collectedEntities.length).toBeGreaterThan(0);
  expect(context.jobState.collectedEntities).toMatchGraphObjectSchema({
    _class: 'Queue',
    schema: {
      additionalProperties: false,
      properties: {
        _type: { const: 'azure_storage_queue' },
        _key: { type: 'string' },
        _class: { type: 'array', items: { const: 'Queue' } },
        id: { type: 'string' },
        name: { type: 'string' },
        displayName: { type: 'string' },
        type: { type: 'string' },
        resourceGroup: { type: 'string' },
        encrypted: { type: 'boolean' },
        _rawData: { type: 'array', items: { type: 'object' } },
      },
    },
  });
  expect(context.jobState.collectedRelationships.length).toEqual(1);
  expect(context.jobState.collectedRelationships).toEqual([
    {
      _key:
        '/subscriptions/dccea45f-7035-4a17-8731-1fd46aaa74a0/resourceGroups/j1dev/providers/Microsoft.Storage/storageAccounts/ndowmon1j1dev|has|/subscriptions/d3803fd6-2ba4-4286-80aa-f3d613ad59a7/resourceGroups/j1dev/providers/Microsoft.Storage/storageAccounts/ndowmon1j1dev/queueServices/default/queues/j1dev',
      _type: 'azure_storage_account_has_queue',
      _class: 'HAS',
      _fromEntityKey:
        '/subscriptions/dccea45f-7035-4a17-8731-1fd46aaa74a0/resourceGroups/j1dev/providers/Microsoft.Storage/storageAccounts/ndowmon1j1dev',
      _toEntityKey:
        '/subscriptions/d3803fd6-2ba4-4286-80aa-f3d613ad59a7/resourceGroups/j1dev/providers/Microsoft.Storage/storageAccounts/ndowmon1j1dev/queueServices/default/queues/j1dev',
      displayName: 'HAS',
    },
  ]);
});

test('step - storage tables', async () => {
  const instanceConfig: IntegrationConfig = {
    clientId: process.env.CLIENT_ID || 'clientId',
    clientSecret: process.env.CLIENT_SECRET || 'clientSecret',
    directoryId: '992d7bbe-b367-459c-a10f-cf3fd16103ab',
    subscriptionId: 'd3803fd6-2ba4-4286-80aa-f3d613ad59a7',
  };

  recording = setupAzureRecording({
    directory: __dirname,
    name: 'resource-manager-step-storage-tables',
    options: {
      recordFailedRequests: true,
    },
  });

  const context = createMockStepExecutionContext<IntegrationConfig>({
    instanceConfig,
    entities: [
      {
        _class: ['Service'],
        _type: 'azure_storage_account',
        _key: `/subscriptions/dccea45f-7035-4a17-8731-1fd46aaa74a0/resourceGroups/j1dev/providers/Microsoft.Storage/storageAccounts/ndowmon1j1dev`,
        id: `/subscriptions/dccea45f-7035-4a17-8731-1fd46aaa74a0/resourceGroups/j1dev/providers/Microsoft.Storage/storageAccounts/ndowmon1j1dev`,
        name: `ndowmon1j1dev`,
      },
      {
        _class: ['Service'],
        _type: 'azure_storage_account',
        _key: `/subscriptions/dccea45f-7035-4a17-8731-1fd46aaa74a0/resourceGroups/j1dev/providers/Microsoft.Storage/storageAccounts/ndowmon1j1devblobstorage`,
        id: `/subscriptions/dccea45f-7035-4a17-8731-1fd46aaa74a0/resourceGroups/j1dev/providers/Microsoft.Storage/storageAccounts/ndowmon1j1devblobstorage`,
        name: `ndowmon1j1devblobstorage`,
      },
    ],
  });

  context.jobState.getData = jest.fn().mockResolvedValue({
    defaultDomain: 'www.fake-domain.com',
  });

  await fetchStorageTables(context);

  expect(context.jobState.collectedEntities.length).toBeGreaterThan(0);
  expect(context.jobState.collectedEntities).toMatchGraphObjectSchema({
    _class: ['DataStore', 'Database'],
    schema: {
      additionalProperties: false,
      properties: {
        _type: { const: 'azure_storage_table' },
        _key: { type: 'string' },
        _class: { type: 'array', items: { const: ['DataStore', 'Database'] } },
        id: { type: 'string' },
        name: { type: 'string' },
        displayName: { type: 'string' },
        tableName: { type: 'string' },
        type: { type: 'string' },
        resourceGroup: { type: 'string' },
        classification: { type: 'null' },
        encrypted: { type: 'boolean' },
        _rawData: { type: 'array', items: { type: 'object' } },
      },
    },
  });
  expect(context.jobState.collectedRelationships.length).toEqual(1);
  expect(context.jobState.collectedRelationships).toEqual([
    {
      _key:
        '/subscriptions/dccea45f-7035-4a17-8731-1fd46aaa74a0/resourceGroups/j1dev/providers/Microsoft.Storage/storageAccounts/ndowmon1j1dev|has|/subscriptions/d3803fd6-2ba4-4286-80aa-f3d613ad59a7/resourceGroups/j1dev/providers/Microsoft.Storage/storageAccounts/ndowmon1j1dev/tableServices/default/tables/j1dev',
      _type: 'azure_storage_account_has_table',
      _class: 'HAS',
      _fromEntityKey:
        '/subscriptions/dccea45f-7035-4a17-8731-1fd46aaa74a0/resourceGroups/j1dev/providers/Microsoft.Storage/storageAccounts/ndowmon1j1dev',
      _toEntityKey:
        '/subscriptions/d3803fd6-2ba4-4286-80aa-f3d613ad59a7/resourceGroups/j1dev/providers/Microsoft.Storage/storageAccounts/ndowmon1j1dev/tableServices/default/tables/j1dev',
      displayName: 'HAS',
    },
  ]);
});
