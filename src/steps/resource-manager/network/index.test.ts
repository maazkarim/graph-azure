import {
  Entity,
  Relationship,
  RelationshipDirection,
} from '@jupiterone/integration-sdk-core';
import { Recording } from '@jupiterone/integration-sdk-testing';

import { setupAzureRecording } from '../../../../test/helpers/recording';
import { fetchAccount } from '../../active-directory';
import {
  buildSecurityGroupRuleRelationships,
  fetchLoadBalancers,
  fetchNetworkInterfaces,
  fetchNetworkSecurityGroups,
  fetchPublicIPAddresses,
  fetchVirtualNetworks,
} from './';
import { createMockAzureStepExecutionContext } from '../../../../test/createMockAzureStepExecutionContext';
import { MonitorEntities } from '../monitor/constants';
import { IntegrationConfig } from '../../../types';
import { ACCOUNT_ENTITY_TYPE } from '../../active-directory';

const GUID_REGEX = new RegExp(
  /(\{){0,1}[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}(\}){0,1}/,
  'g',
);

expect.extend({
  toContainGraphObject<T extends Entity | Relationship>(
    received: Array<T>,
    expected: T,
  ) {
    const found = received.find(
      (e) => e._type === expected._type && e._key === expected._key,
    );

    if (found) {
      try {
        expect(found).toMatchObject(expected);
        return {
          message: () => 'unexpected object in collection',
          pass: true,
        };
      } catch (err) {
        return {
          message: () => err,
          pass: false,
        };
      }
    } else {
      return {
        message: () =>
          `expected object to be in collection, received: \n\n  - ${received
            .map((e) => e._key)
            .sort()
            .join('\n  - ')}`,
        pass: false,
      };
    }
  },

  toContainOnlyGraphObjects<T extends Entity | Relationship>(
    received: Array<T>,
    ...expected: T[]
  ) {
    const receivedKeys = received.map((e) => e._key).sort();
    const expectedKeys = expected.map((e) => e._key).sort();

    try {
      expect(receivedKeys).toEqual(expectedKeys);
    } catch (err) {
      return {
        message: () => err,
        pass: false,
      };
    }

    for (const obj of expected) {
      try {
        expect(received).toContainGraphObject(obj);
      } catch (err) {
        return {
          message: () => err,
          pass: false,
        };
      }
    }

    return {
      message: () => 'found all objects',
      pass: true,
    };
  },
});

let recording: Recording;
let instanceConfig: IntegrationConfig;

afterEach(async () => {
  await recording.stop();
});

test('network steps', async () => {
  instanceConfig = {
    clientId: process.env.CLIENT_ID || 'clientId',
    clientSecret: process.env.CLIENT_SECRET || 'clientSecret',
    directoryId: 'bcd90474-9b62-4040-9d7b-8af257b1427d',
    subscriptionId: '40474ebe-55a2-4071-8fa8-b610acdd8e56',
    developerId: 'keionned',
  };

  recording = setupAzureRecording({
    directory: __dirname,
    name: 'network-steps',
  });

  const resouceGroupEntity: Entity = {
    _key: `/subscriptions/${instanceConfig.subscriptionId}/resourceGroups/j1dev`,
    _type: 'azure_resource_group',
    _class: ['Group'],
  };

  const context = createMockAzureStepExecutionContext({
    instanceConfig,
    entities: [resouceGroupEntity],
    setData: {
      [ACCOUNT_ENTITY_TYPE]: {
        defaultDomain: 'www.fake-domain.com',
        _type: ACCOUNT_ENTITY_TYPE,
        _key: 'azure_account_id',
        id: 'azure_account_id',
      },
    },
  });

  // Simulates dependency order of execution
  await fetchAccount(context);
  await fetchPublicIPAddresses(context);
  await fetchNetworkInterfaces(context);
  await fetchNetworkSecurityGroups(context);
  await fetchVirtualNetworks(context);
  await fetchLoadBalancers(context);
  await buildSecurityGroupRuleRelationships(context);

  expect(context.jobState.collectedEntities).toContainOnlyGraphObjects(
    {
      _class: ['Account'],
      _key: 'local-integration-instance',
      _rawData: [expect.objectContaining({ name: 'default' })],
      _type: 'azure_account',
      createdOn: undefined,
      defaultDomain: expect.any(String),
      displayName: 'Local Integration',
      id: instanceConfig.directoryId,
      name: 'Default Directory',
      organizationName: 'Default Directory',
      verifiedDomains: expect.any(Array),
    },

    // VPC default, eastus
    {
      CIDR: '10.0.0.0/16',
      _class: ['Network'],
      _key: `/subscriptions/${instanceConfig.subscriptionId}/resourceGroups/j1dev/providers/Microsoft.Network/virtualNetworks/j1dev`,
      _rawData: [expect.objectContaining({ name: 'default' })],
      _type: 'azure_vnet',
      createdOn: undefined,
      displayName: 'j1dev (10.0.0.0/16)',
      environment: 'j1dev',
      id: `/subscriptions/${instanceConfig.subscriptionId}/resourceGroups/j1dev/providers/Microsoft.Network/virtualNetworks/j1dev`,
      internal: true,
      name: 'j1dev',
      public: false,
      region: 'eastus',
      resourceGroup: 'j1dev',
      'tag.environment': 'j1dev',
      webLink: `https://portal.azure.com/#@kanddventurepartnersgmail.onmicrosoft.com/resource/subscriptions/${instanceConfig.subscriptionId}/resourceGroups/j1dev/providers/Microsoft.Network/virtualNetworks/j1dev`,
    },
    {
      CIDR: '10.0.2.0/24',
      _class: ['Network'],
      _key: `/subscriptions/${instanceConfig.subscriptionId}/resourceGroups/j1dev/providers/Microsoft.Network/virtualNetworks/j1dev/subnets/j1dev`,
      _rawData: [expect.objectContaining({ name: 'default' })],
      _type: 'azure_subnet',
      createdOn: undefined,
      displayName: 'j1dev (10.0.2.0/24)',
      environment: 'j1dev',
      id: `/subscriptions/${instanceConfig.subscriptionId}/resourceGroups/j1dev/providers/Microsoft.Network/virtualNetworks/j1dev/subnets/j1dev`,
      internal: true,
      name: 'j1dev',
      public: false,
      region: 'eastus',
      resourceGroup: 'j1dev',
      webLink: `https://portal.azure.com/#@kanddventurepartnersgmail.onmicrosoft.com/resource/subscriptions/${instanceConfig.subscriptionId}/resourceGroups/j1dev/providers/Microsoft.Network/virtualNetworks/j1dev/subnets/j1dev`,
    },
    {
      CIDR: '10.0.3.0/24',
      _class: ['Network'],
      _key: `/subscriptions/${instanceConfig.subscriptionId}/resourceGroups/j1dev/providers/Microsoft.Network/virtualNetworks/j1dev/subnets/j1dev_priv_one`,
      _rawData: [expect.objectContaining({ name: 'default' })],
      _type: 'azure_subnet',
      createdOn: undefined,
      displayName: 'j1dev_priv_one (10.0.3.0/24)',
      environment: 'j1dev',
      id: `/subscriptions/${instanceConfig.subscriptionId}/resourceGroups/j1dev/providers/Microsoft.Network/virtualNetworks/j1dev/subnets/j1dev_priv_one`,
      internal: true,
      name: 'j1dev_priv_one',
      public: false,
      region: 'eastus',
      resourceGroup: 'j1dev',
      webLink: `https://portal.azure.com/#@kanddventurepartnersgmail.onmicrosoft.com/resource/subscriptions/${instanceConfig.subscriptionId}/resourceGroups/j1dev/providers/Microsoft.Network/virtualNetworks/j1dev/subnets/j1dev_priv_one`,
    },
    {
      _class: 'IpAddress',
      _key: `/subscriptions/${instanceConfig.subscriptionId}/resourceGroups/j1dev/providers/Microsoft.Network/publicIPAddresses/j1dev`,
      _rawData: [expect.objectContaining({ name: 'default' })],
      _type: 'azure_public_ip',
      displayName: 'j1dev',
      id: `/subscriptions/${instanceConfig.subscriptionId}/resourceGroups/j1dev/providers/Microsoft.Network/publicIPAddresses/j1dev`,
      public: true,
      // Dynamic address may be undefined when the address is not bound to anything
      // publicIp: '52.188.119.30',
      // publicIpAddress: '52.188.119.30',
      region: 'eastus',
      resourceGroup: 'j1dev',
      resourceGuid: expect.stringMatching(GUID_REGEX),
      sku: 'Basic',
      'tag.environment': 'j1dev',
      type: 'Microsoft.Network/publicIPAddresses',
      webLink: `https://portal.azure.com/#@kanddventurepartnersgmail.onmicrosoft.com/resource/subscriptions/${instanceConfig.subscriptionId}/resourceGroups/j1dev/providers/Microsoft.Network/publicIPAddresses/j1dev`,
    },
    {
      _class: 'NetworkInterface',
      _key: `/subscriptions/${instanceConfig.subscriptionId}/resourceGroups/j1dev/providers/Microsoft.Network/networkInterfaces/j1dev`,
      _rawData: [expect.objectContaining({ name: 'default' })],
      _type: 'azure_nic',
      displayName: 'j1dev',
      id: `/subscriptions/${instanceConfig.subscriptionId}/resourceGroups/j1dev/providers/Microsoft.Network/networkInterfaces/j1dev`,
      ipForwarding: false,
      macAddress: undefined,
      privateIp: ['10.0.2.4'],
      privateIpAddress: ['10.0.2.4'],
      publicIp: expect.any(Array),
      publicIpAddress: expect.any(Array),
      region: 'eastus',
      resourceGroup: 'j1dev',
      resourceGuid: expect.stringMatching(GUID_REGEX),
      securityGroupId: `/subscriptions/${instanceConfig.subscriptionId}/resourceGroups/j1dev/providers/Microsoft.Network/networkSecurityGroups/j1dev`,
      'tag.environment': 'j1dev',
      type: 'Microsoft.Network/networkInterfaces',
      // Only defined when bound to a VM
      // virtualMachineId:
      //   `/subscriptions/${instanceConfig.subscriptionId}/resourceGroups/j1dev/providers/Microsoft.Compute/virtualMachines/j1dev`,
      webLink: `https://portal.azure.com/#@kanddventurepartnersgmail.onmicrosoft.com/resource/subscriptions/${instanceConfig.subscriptionId}/resourceGroups/j1dev/providers/Microsoft.Network/networkInterfaces/j1dev`,
    },
    {
      _class: ['Firewall'],
      _key: `/subscriptions/${instanceConfig.subscriptionId}/resourceGroups/j1dev/providers/Microsoft.Network/networkSecurityGroups/j1dev`,
      _rawData: [expect.objectContaining({ name: 'default' })],
      _type: 'azure_security_group',
      category: ['network', 'host'],
      createdOn: undefined,
      displayName: 'j1dev',
      environment: 'j1dev',
      id: `/subscriptions/${instanceConfig.subscriptionId}/resourceGroups/j1dev/providers/Microsoft.Network/networkSecurityGroups/j1dev`,
      isWideOpen: false,
      name: 'j1dev',
      region: 'eastus',
      resourceGroup: 'j1dev',
      'tag.environment': 'j1dev',
      webLink: `https://portal.azure.com/#@kanddventurepartnersgmail.onmicrosoft.com/resource/subscriptions/${instanceConfig.subscriptionId}/resourceGroups/j1dev/providers/Microsoft.Network/networkSecurityGroups/j1dev`,
    },

    // VPC default, westus
    {
      CIDR: '10.0.0.0/16',
      _class: ['Network'],
      _key: `/subscriptions/${instanceConfig.subscriptionId}/resourceGroups/j1dev/providers/Microsoft.Network/virtualNetworks/j1dev_two`,
      _rawData: [expect.objectContaining({ name: 'default' })],
      _type: 'azure_vnet',
      createdOn: undefined,
      displayName: 'j1dev_two (10.0.0.0/16)',
      environment: 'j1dev',
      id: `/subscriptions/${instanceConfig.subscriptionId}/resourceGroups/j1dev/providers/Microsoft.Network/virtualNetworks/j1dev_two`,
      internal: true,
      name: 'j1dev_two',
      public: false,
      region: 'westus',
      resourceGroup: 'j1dev',
      'tag.environment': 'j1dev',
      webLink: `https://portal.azure.com/#@kanddventurepartnersgmail.onmicrosoft.com/resource/subscriptions/${instanceConfig.subscriptionId}/resourceGroups/j1dev/providers/Microsoft.Network/virtualNetworks/j1dev_two`,
    },
    {
      CIDR: '10.0.3.0/24',
      _class: ['Network'],
      _key: `/subscriptions/${instanceConfig.subscriptionId}/resourceGroups/j1dev/providers/Microsoft.Network/virtualNetworks/j1dev_two/subnets/j1dev_priv_two`,
      _rawData: [expect.objectContaining({ name: 'default' })],
      _type: 'azure_subnet',
      createdOn: undefined,
      displayName: 'j1dev_priv_two (10.0.3.0/24)',
      environment: 'j1dev',
      id: `/subscriptions/${instanceConfig.subscriptionId}/resourceGroups/j1dev/providers/Microsoft.Network/virtualNetworks/j1dev_two/subnets/j1dev_priv_two`,
      internal: true,
      name: 'j1dev_priv_two',
      public: false,
      region: 'westus',
      resourceGroup: 'j1dev',
      webLink: `https://portal.azure.com/#@kanddventurepartnersgmail.onmicrosoft.com/resource/subscriptions/${instanceConfig.subscriptionId}/resourceGroups/j1dev/providers/Microsoft.Network/virtualNetworks/j1dev_two/subnets/j1dev_priv_two`,
    },
    // Diagnostic Settings
    {
      _class: MonitorEntities.DIAGNOSTIC_LOG_SETTING._class,
      _key: `/subscriptions/${instanceConfig.subscriptionId}/resourcegroups/j1dev/providers/microsoft.network/networksecuritygroups/j1dev/providers/microsoft.insights/diagnosticSettings/j1dev_net_sec_grp_set/logs/NetworkSecurityGroupRuleCounter/true/1/true`,
      _type: MonitorEntities.DIAGNOSTIC_LOG_SETTING._type,
      _rawData: [expect.objectContaining({ name: 'default' })],
      category: 'NetworkSecurityGroupRuleCounter',
      displayName: 'j1dev_net_sec_grp_set',
      enabled: true,
      eventHubAuthorizationRuleId: null,
      eventHubName: null,
      id: `/subscriptions/${instanceConfig.subscriptionId}/resourcegroups/j1dev/providers/microsoft.network/networksecuritygroups/j1dev/providers/microsoft.insights/diagnosticSettings/j1dev_net_sec_grp_set/logs/NetworkSecurityGroupRuleCounter/true/1/true`,
      logAnalyticsDestinationType: null,
      name: 'j1dev_net_sec_grp_set',
      'retentionPolicy.days': 1,
      'retentionPolicy.enabled': true,
      serviceBusRuleId: null,
      storageAccountId: `/subscriptions/${instanceConfig.subscriptionId}/resourceGroups/j1dev/providers/Microsoft.Storage/storageAccounts/${instanceConfig.developerId}j1dev`,
      webLink: `https://portal.azure.com/#@kanddventurepartnersgmail.onmicrosoft.com/resource/subscriptions/${instanceConfig.subscriptionId}/resourcegroups/j1dev/providers/microsoft.network/networksecuritygroups/j1dev/providers/microsoft.insights/diagnosticSettings/j1dev_net_sec_grp_set`,
      workspaceId: null,
    },
    {
      _class: MonitorEntities.DIAGNOSTIC_LOG_SETTING._class,
      _key: `/subscriptions/${instanceConfig.subscriptionId}/resourcegroups/j1dev/providers/microsoft.network/networksecuritygroups/j1dev/providers/microsoft.insights/diagnosticSettings/j1dev_net_sec_grp_set/logs/NetworkSecurityGroupEvent/true/1/true`,
      _type: MonitorEntities.DIAGNOSTIC_LOG_SETTING._type,
      _rawData: [expect.objectContaining({ name: 'default' })],
      category: 'NetworkSecurityGroupEvent',
      displayName: 'j1dev_net_sec_grp_set',
      enabled: true,
      eventHubAuthorizationRuleId: null,
      eventHubName: null,
      id: `/subscriptions/${instanceConfig.subscriptionId}/resourcegroups/j1dev/providers/microsoft.network/networksecuritygroups/j1dev/providers/microsoft.insights/diagnosticSettings/j1dev_net_sec_grp_set/logs/NetworkSecurityGroupEvent/true/1/true`,
      logAnalyticsDestinationType: null,
      name: 'j1dev_net_sec_grp_set',
      'retentionPolicy.days': 1,
      'retentionPolicy.enabled': true,
      serviceBusRuleId: null,
      storageAccountId: `/subscriptions/${instanceConfig.subscriptionId}/resourceGroups/j1dev/providers/Microsoft.Storage/storageAccounts/${instanceConfig.developerId}j1dev`,
      webLink: `https://portal.azure.com/#@kanddventurepartnersgmail.onmicrosoft.com/resource/subscriptions/${instanceConfig.subscriptionId}/resourcegroups/j1dev/providers/microsoft.network/networksecuritygroups/j1dev/providers/microsoft.insights/diagnosticSettings/j1dev_net_sec_grp_set`,
      workspaceId: null,
    },
  );

  expect(context.jobState.collectedRelationships).toContainOnlyGraphObjects(
    // VPC default, eastus
    {
      _class: 'CONTAINS',
      _fromEntityKey: `/subscriptions/${instanceConfig.subscriptionId}/resourceGroups/j1dev/providers/Microsoft.Network/virtualNetworks/j1dev`,
      _key: `/subscriptions/${instanceConfig.subscriptionId}/resourceGroups/j1dev/providers/Microsoft.Network/virtualNetworks/j1dev|contains|/subscriptions/${instanceConfig.subscriptionId}/resourceGroups/j1dev/providers/Microsoft.Network/virtualNetworks/j1dev/subnets/j1dev`,
      _toEntityKey: `/subscriptions/${instanceConfig.subscriptionId}/resourceGroups/j1dev/providers/Microsoft.Network/virtualNetworks/j1dev/subnets/j1dev`,
      _type: 'azure_vnet_contains_subnet',
      displayName: 'CONTAINS',
    },
    {
      _class: 'CONTAINS',
      _fromEntityKey: `/subscriptions/${instanceConfig.subscriptionId}/resourceGroups/j1dev/providers/Microsoft.Network/virtualNetworks/j1dev`,
      _key: `/subscriptions/${instanceConfig.subscriptionId}/resourceGroups/j1dev/providers/Microsoft.Network/virtualNetworks/j1dev|contains|/subscriptions/${instanceConfig.subscriptionId}/resourceGroups/j1dev/providers/Microsoft.Network/virtualNetworks/j1dev/subnets/j1dev_priv_one`,
      _toEntityKey: `/subscriptions/${instanceConfig.subscriptionId}/resourceGroups/j1dev/providers/Microsoft.Network/virtualNetworks/j1dev/subnets/j1dev_priv_one`,
      _type: 'azure_vnet_contains_subnet',
      displayName: 'CONTAINS',
    },
    {
      _class: 'PROTECTS',
      _fromEntityKey: `/subscriptions/${instanceConfig.subscriptionId}/resourceGroups/j1dev/providers/Microsoft.Network/networkSecurityGroups/j1dev`,
      _key: `/subscriptions/${instanceConfig.subscriptionId}/resourceGroups/j1dev/providers/Microsoft.Network/networkSecurityGroups/j1dev|protects|/subscriptions/${instanceConfig.subscriptionId}/resourceGroups/j1dev/providers/Microsoft.Network/virtualNetworks/j1dev/subnets/j1dev`,
      _toEntityKey: `/subscriptions/${instanceConfig.subscriptionId}/resourceGroups/j1dev/providers/Microsoft.Network/virtualNetworks/j1dev/subnets/j1dev`,
      _type: 'azure_security_group_protects_subnet',
      displayName: 'PROTECTS',
    },
    {
      _class: 'PROTECTS',
      _fromEntityKey: `/subscriptions/${instanceConfig.subscriptionId}/resourceGroups/j1dev/providers/Microsoft.Network/networkSecurityGroups/j1dev`,
      _key: `/subscriptions/${instanceConfig.subscriptionId}/resourceGroups/j1dev/providers/Microsoft.Network/networkSecurityGroups/j1dev|protects|/subscriptions/${instanceConfig.subscriptionId}/resourceGroups/j1dev/providers/Microsoft.Network/networkInterfaces/j1dev`,
      _toEntityKey: `/subscriptions/${instanceConfig.subscriptionId}/resourceGroups/j1dev/providers/Microsoft.Network/networkInterfaces/j1dev`,
      _type: 'azure_security_group_protects_nic',
      displayName: 'PROTECTS',
    },
    {
      _class: 'ALLOWS',
      _key: `azure_security_group_rule:/subscriptions/${instanceConfig.subscriptionId}/resourceGroups/j1dev/providers/Microsoft.Network/networkSecurityGroups/j1dev/securityRules/priv_one:22:/subscriptions/${instanceConfig.subscriptionId}/resourceGroups/j1dev/providers/Microsoft.Network/virtualNetworks/j1dev/subnets/j1dev_priv_one`,
      _fromEntityKey: `/subscriptions/${instanceConfig.subscriptionId}/resourceGroups/j1dev/providers/Microsoft.Network/virtualNetworks/j1dev/subnets/j1dev_priv_one`,
      _toEntityKey: `/subscriptions/${instanceConfig.subscriptionId}/resourceGroups/j1dev/providers/Microsoft.Network/networkSecurityGroups/j1dev`,
      _type: 'azure_security_group_rule',
      access: 'Allow',
      destinationAddressPrefix: '*',
      destinationPortRange: '22',
      direction: 'Inbound',
      displayName: 'ALLOWS',
      egress: false,
      etag: expect.any(String),
      fromPort: 22,
      id: `/subscriptions/${instanceConfig.subscriptionId}/resourceGroups/j1dev/providers/Microsoft.Network/networkSecurityGroups/j1dev/securityRules/priv_one`,
      inbound: true,
      ingress: true,
      ipProtocol: 'tcp',
      name: 'priv_one',
      outbound: false,
      portRange: '22',
      priority: 1002,
      protocol: 'tcp',
      provisioningState: 'Succeeded',
      ruleNumber: 1002,
      sourceAddressPrefix: '10.0.3.0/24',
      sourcePortRange: '*',
      toPort: 22,
      type: 'Microsoft.Network/networkSecurityGroups/securityRules',
    },
    {
      _class: 'ALLOWS',
      _key: `azure_security_group_rule:/subscriptions/${instanceConfig.subscriptionId}/resourceGroups/j1dev/providers/Microsoft.Network/networkSecurityGroups/j1dev/securityRules/priv_one:22:/subscriptions/${instanceConfig.subscriptionId}/resourceGroups/j1dev/providers/Microsoft.Network/virtualNetworks/j1dev_two/subnets/j1dev_priv_two`,
      _fromEntityKey: `/subscriptions/${instanceConfig.subscriptionId}/resourceGroups/j1dev/providers/Microsoft.Network/virtualNetworks/j1dev_two/subnets/j1dev_priv_two`,
      _toEntityKey: `/subscriptions/${instanceConfig.subscriptionId}/resourceGroups/j1dev/providers/Microsoft.Network/networkSecurityGroups/j1dev`,
      _type: 'azure_security_group_rule',
      access: 'Allow',
      destinationAddressPrefix: '*',
      destinationPortRange: '22',
      direction: 'Inbound',
      displayName: 'ALLOWS',
      egress: false,
      etag: expect.any(String),
      fromPort: 22,
      id: `/subscriptions/${instanceConfig.subscriptionId}/resourceGroups/j1dev/providers/Microsoft.Network/networkSecurityGroups/j1dev/securityRules/priv_one`,
      inbound: true,
      ingress: true,
      ipProtocol: 'tcp',
      name: 'priv_one',
      outbound: false,
      portRange: '22',
      priority: 1002,
      protocol: 'tcp',
      provisioningState: 'Succeeded',
      ruleNumber: 1002,
      sourceAddressPrefix: '10.0.3.0/24',
      sourcePortRange: '*',
      toPort: 22,
      type: 'Microsoft.Network/networkSecurityGroups/securityRules',
    },
    {
      _class: 'ALLOWS',
      _key: `azure_security_group_rule:/subscriptions/${instanceConfig.subscriptionId}/resourceGroups/j1dev/providers/Microsoft.Network/networkSecurityGroups/j1dev/defaultSecurityRules/AllowVnetInBound:*:Service:azure_virtual_network:VirtualNetwork`,
      _mapping: {
        relationshipDirection: RelationshipDirection.REVERSE,
        skipTargetCreation: false,
        sourceEntityKey: `/subscriptions/${instanceConfig.subscriptionId}/resourceGroups/j1dev/providers/Microsoft.Network/networkSecurityGroups/j1dev`,
        targetEntity: {
          _class: 'Service',
          _type: 'azure_virtual_network',
          displayName: 'VirtualNetwork',
        },
        targetFilterKeys: [['_class', '_type', 'displayName']],
      },
      _type: 'azure_security_group_rule',
      access: 'Allow',
      description: 'Allow inbound traffic from all VMs in VNET',
      destinationAddressPrefix: 'VirtualNetwork',
      destinationPortRange: '*',
      direction: 'Inbound',
      displayName: 'ALLOWS',
      egress: false,
      etag: expect.any(String),
      fromPort: 0,
      id: `/subscriptions/${instanceConfig.subscriptionId}/resourceGroups/j1dev/providers/Microsoft.Network/networkSecurityGroups/j1dev/defaultSecurityRules/AllowVnetInBound`,
      inbound: true,
      ingress: true,
      ipProtocol: '*',
      name: 'AllowVnetInBound',
      outbound: false,
      portRange: '*',
      priority: 65000,
      protocol: '*',
      provisioningState: 'Succeeded',
      ruleNumber: 65000,
      sourceAddressPrefix: 'VirtualNetwork',
      sourcePortRange: '*',
      toPort: 65535,
      type: 'Microsoft.Network/networkSecurityGroups/defaultSecurityRules',
    },
    {
      _class: 'ALLOWS',
      _key: `azure_security_group_rule:/subscriptions/${instanceConfig.subscriptionId}/resourceGroups/j1dev/providers/Microsoft.Network/networkSecurityGroups/j1dev/defaultSecurityRules/AllowAzureLoadBalancerInBound:*:Service:azure_load_balancer:AzureLoadBalancer`,
      _mapping: {
        relationshipDirection: RelationshipDirection.REVERSE,
        skipTargetCreation: false,
        sourceEntityKey: `/subscriptions/${instanceConfig.subscriptionId}/resourceGroups/j1dev/providers/Microsoft.Network/networkSecurityGroups/j1dev`,
        targetEntity: {
          _class: 'Service',
          _type: 'azure_load_balancer',
          displayName: 'AzureLoadBalancer',
        },
        targetFilterKeys: [['_class', '_type', 'displayName']],
      },
      _type: 'azure_security_group_rule',
      access: 'Allow',
      description: 'Allow inbound traffic from azure load balancer',
      destinationAddressPrefix: '*',
      destinationPortRange: '*',
      direction: 'Inbound',
      displayName: 'ALLOWS',
      egress: false,
      etag: expect.any(String),
      fromPort: 0,
      id: `/subscriptions/${instanceConfig.subscriptionId}/resourceGroups/j1dev/providers/Microsoft.Network/networkSecurityGroups/j1dev/defaultSecurityRules/AllowAzureLoadBalancerInBound`,
      inbound: true,
      ingress: true,
      ipProtocol: '*',
      name: 'AllowAzureLoadBalancerInBound',
      outbound: false,
      portRange: '*',
      priority: 65001,
      protocol: '*',
      provisioningState: 'Succeeded',
      ruleNumber: 65001,
      sourceAddressPrefix: 'AzureLoadBalancer',
      sourcePortRange: '*',
      toPort: 65535,
      type: 'Microsoft.Network/networkSecurityGroups/defaultSecurityRules',
    },
    {
      _class: 'DENIES',
      _key: `azure_security_group_rule:/subscriptions/${instanceConfig.subscriptionId}/resourceGroups/j1dev/providers/Microsoft.Network/networkSecurityGroups/j1dev/defaultSecurityRules/DenyAllInBound:*:internet`,
      _mapping: {
        relationshipDirection: RelationshipDirection.REVERSE,
        skipTargetCreation: false,
        sourceEntityKey: `/subscriptions/${instanceConfig.subscriptionId}/resourceGroups/j1dev/providers/Microsoft.Network/networkSecurityGroups/j1dev`,
        targetEntity: {
          CIDR: '0.0.0.0/0',
          CIDRv6: '::/0',
          _class: ['Internet', 'Network'],
          _key: 'global:internet',
          _type: 'internet',
          displayName: 'Internet',
          public: true,
        },
        targetFilterKeys: [['_key']],
      },
      _type: 'azure_security_group_rule',
      access: 'Deny',
      description: 'Deny all inbound traffic',
      destinationAddressPrefix: '*',
      destinationPortRange: '*',
      direction: 'Inbound',
      displayName: 'DENIES',
      egress: false,
      etag: expect.any(String),
      fromPort: 0,
      id: `/subscriptions/${instanceConfig.subscriptionId}/resourceGroups/j1dev/providers/Microsoft.Network/networkSecurityGroups/j1dev/defaultSecurityRules/DenyAllInBound`,
      inbound: true,
      ingress: true,
      ipProtocol: '*',
      name: 'DenyAllInBound',
      outbound: false,
      portRange: '*',
      priority: 65500,
      protocol: '*',
      provisioningState: 'Succeeded',
      ruleNumber: 65500,
      sourceAddressPrefix: '*',
      sourcePortRange: '*',
      toPort: 65535,
      type: 'Microsoft.Network/networkSecurityGroups/defaultSecurityRules',
    },
    {
      _class: 'ALLOWS',
      _key: `azure_security_group_rule:/subscriptions/${instanceConfig.subscriptionId}/resourceGroups/j1dev/providers/Microsoft.Network/networkSecurityGroups/j1dev/defaultSecurityRules/AllowVnetOutBound:*:Service:azure_virtual_network:VirtualNetwork`,
      _mapping: {
        relationshipDirection: RelationshipDirection.FORWARD,
        skipTargetCreation: false,
        sourceEntityKey: `/subscriptions/${instanceConfig.subscriptionId}/resourceGroups/j1dev/providers/Microsoft.Network/networkSecurityGroups/j1dev`,
        targetEntity: {
          _class: 'Service',
          _type: 'azure_virtual_network',
          displayName: 'VirtualNetwork',
        },
        targetFilterKeys: [['_class', '_type', 'displayName']],
      },
      _type: 'azure_security_group_rule',
      access: 'Allow',
      description: 'Allow outbound traffic from all VMs to all VMs in VNET',
      destinationAddressPrefix: 'VirtualNetwork',
      destinationPortRange: '*',
      direction: 'Outbound',
      displayName: 'ALLOWS',
      egress: true,
      etag: expect.any(String),
      fromPort: 0,
      id: `/subscriptions/${instanceConfig.subscriptionId}/resourceGroups/j1dev/providers/Microsoft.Network/networkSecurityGroups/j1dev/defaultSecurityRules/AllowVnetOutBound`,
      inbound: false,
      ingress: false,
      ipProtocol: '*',
      name: 'AllowVnetOutBound',
      outbound: true,
      portRange: '*',
      priority: 65000,
      protocol: '*',
      provisioningState: 'Succeeded',
      ruleNumber: 65000,
      sourceAddressPrefix: 'VirtualNetwork',
      sourcePortRange: '*',
      toPort: 65535,
      type: 'Microsoft.Network/networkSecurityGroups/defaultSecurityRules',
    },
    {
      _class: 'ALLOWS',
      _key: `azure_security_group_rule:/subscriptions/${instanceConfig.subscriptionId}/resourceGroups/j1dev/providers/Microsoft.Network/networkSecurityGroups/j1dev/defaultSecurityRules/AllowInternetOutBound:*:internet`,
      _mapping: {
        relationshipDirection: RelationshipDirection.FORWARD,
        skipTargetCreation: false,
        sourceEntityKey: `/subscriptions/${instanceConfig.subscriptionId}/resourceGroups/j1dev/providers/Microsoft.Network/networkSecurityGroups/j1dev`,
        targetEntity: {
          CIDR: '0.0.0.0/0',
          CIDRv6: '::/0',
          _class: ['Internet', 'Network'],
          _key: 'global:internet',
          _type: 'internet',
          displayName: 'Internet',
          public: true,
        },
        targetFilterKeys: [['_key']],
      },
      _type: 'azure_security_group_rule',
      access: 'Allow',
      description: 'Allow outbound traffic from all VMs to Internet',
      destinationAddressPrefix: 'Internet',
      destinationPortRange: '*',
      direction: 'Outbound',
      displayName: 'ALLOWS',
      egress: true,
      etag: expect.any(String),
      fromPort: 0,
      id: `/subscriptions/${instanceConfig.subscriptionId}/resourceGroups/j1dev/providers/Microsoft.Network/networkSecurityGroups/j1dev/defaultSecurityRules/AllowInternetOutBound`,
      inbound: false,
      ingress: false,
      ipProtocol: '*',
      name: 'AllowInternetOutBound',
      outbound: true,
      portRange: '*',
      priority: 65001,
      protocol: '*',
      provisioningState: 'Succeeded',
      ruleNumber: 65001,
      sourceAddressPrefix: '*',
      sourcePortRange: '*',
      toPort: 65535,
      type: 'Microsoft.Network/networkSecurityGroups/defaultSecurityRules',
    },
    {
      _class: 'DENIES',
      _key: `azure_security_group_rule:/subscriptions/${instanceConfig.subscriptionId}/resourceGroups/j1dev/providers/Microsoft.Network/networkSecurityGroups/j1dev/defaultSecurityRules/DenyAllOutBound:*:internet`,
      _mapping: {
        relationshipDirection: RelationshipDirection.FORWARD,
        skipTargetCreation: false,
        sourceEntityKey: `/subscriptions/${instanceConfig.subscriptionId}/resourceGroups/j1dev/providers/Microsoft.Network/networkSecurityGroups/j1dev`,
        targetEntity: {
          CIDR: '0.0.0.0/0',
          CIDRv6: '::/0',
          _class: ['Internet', 'Network'],
          _key: 'global:internet',
          _type: 'internet',
          displayName: 'Internet',
          public: true,
        },
        targetFilterKeys: [['_key']],
      },
      _type: 'azure_security_group_rule',
      access: 'Deny',
      description: 'Deny all outbound traffic',
      destinationAddressPrefix: '*',
      destinationPortRange: '*',
      direction: 'Outbound',
      displayName: 'DENIES',
      egress: true,
      etag: expect.any(String),
      fromPort: 0,
      id: `/subscriptions/${instanceConfig.subscriptionId}/resourceGroups/j1dev/providers/Microsoft.Network/networkSecurityGroups/j1dev/defaultSecurityRules/DenyAllOutBound`,
      inbound: false,
      ingress: false,
      ipProtocol: '*',
      name: 'DenyAllOutBound',
      outbound: true,
      portRange: '*',
      priority: 65500,
      protocol: '*',
      provisioningState: 'Succeeded',
      ruleNumber: 65500,
      sourceAddressPrefix: '*',
      sourcePortRange: '*',
      toPort: 65535,
      type: 'Microsoft.Network/networkSecurityGroups/defaultSecurityRules',
    },
    {
      _class: 'ALLOWS',
      _key: `azure_security_group_rule:/subscriptions/${instanceConfig.subscriptionId}/resourceGroups/j1dev/providers/Microsoft.Network/networkSecurityGroups/j1dev/securityRules/SSH:22:internet`,
      _mapping: {
        relationshipDirection: RelationshipDirection.REVERSE,
        skipTargetCreation: false,
        sourceEntityKey: `/subscriptions/${instanceConfig.subscriptionId}/resourceGroups/j1dev/providers/Microsoft.Network/networkSecurityGroups/j1dev`,
        targetEntity: {
          CIDR: '0.0.0.0/0',
          CIDRv6: '::/0',
          _class: ['Internet', 'Network'],
          _key: 'global:internet',
          _type: 'internet',
          displayName: 'Internet',
          public: true,
        },
        targetFilterKeys: [['_key']],
      },
      _type: 'azure_security_group_rule',
      access: 'Allow',
      destinationAddressPrefix: '*',
      destinationPortRange: '22',
      direction: 'Inbound',
      displayName: 'ALLOWS',
      egress: false,
      etag: expect.any(String),
      fromPort: 22,
      id: `/subscriptions/${instanceConfig.subscriptionId}/resourceGroups/j1dev/providers/Microsoft.Network/networkSecurityGroups/j1dev/securityRules/SSH`,
      inbound: true,
      ingress: true,
      ipProtocol: 'tcp',
      name: 'SSH',
      outbound: false,
      portRange: '22',
      priority: 1001,
      protocol: 'tcp',
      provisioningState: 'Succeeded',
      ruleNumber: 1001,
      sourceAddressPrefix: '*',
      sourcePortRange: '*',
      toPort: 22,
      type: 'Microsoft.Network/networkSecurityGroups/securityRules',
    },

    // VPC default, westus
    {
      _class: 'CONTAINS',
      _fromEntityKey: `/subscriptions/${instanceConfig.subscriptionId}/resourceGroups/j1dev/providers/Microsoft.Network/virtualNetworks/j1dev_two`,
      _key: `/subscriptions/${instanceConfig.subscriptionId}/resourceGroups/j1dev/providers/Microsoft.Network/virtualNetworks/j1dev_two|contains|/subscriptions/${instanceConfig.subscriptionId}/resourceGroups/j1dev/providers/Microsoft.Network/virtualNetworks/j1dev_two/subnets/j1dev_priv_two`,
      _toEntityKey: `/subscriptions/${instanceConfig.subscriptionId}/resourceGroups/j1dev/providers/Microsoft.Network/virtualNetworks/j1dev_two/subnets/j1dev_priv_two`,
      _type: 'azure_vnet_contains_subnet',
      displayName: 'CONTAINS',
    },

    // Resource Group
    {
      _key: `/subscriptions/${instanceConfig.subscriptionId}/resourceGroups/j1dev|has|/subscriptions/${instanceConfig.subscriptionId}/resourceGroups/j1dev/providers/Microsoft.Network/networkInterfaces/j1dev`,
      _type: 'azure_resource_group_has_nic',
      _class: 'HAS',
      _fromEntityKey: `/subscriptions/${instanceConfig.subscriptionId}/resourceGroups/j1dev`,
      _toEntityKey: `/subscriptions/${instanceConfig.subscriptionId}/resourceGroups/j1dev/providers/Microsoft.Network/networkInterfaces/j1dev`,
      displayName: 'HAS',
    },
    {
      _key: `/subscriptions/${instanceConfig.subscriptionId}/resourceGroups/j1dev|has|/subscriptions/${instanceConfig.subscriptionId}/resourceGroups/j1dev/providers/Microsoft.Network/publicIPAddresses/j1dev`,
      _type: 'azure_resource_group_has_public_ip',
      _class: 'HAS',
      _fromEntityKey: `/subscriptions/${instanceConfig.subscriptionId}/resourceGroups/j1dev`,
      _toEntityKey: `/subscriptions/${instanceConfig.subscriptionId}/resourceGroups/j1dev/providers/Microsoft.Network/publicIPAddresses/j1dev`,
      displayName: 'HAS',
    },
    {
      _key: `/subscriptions/${instanceConfig.subscriptionId}/resourceGroups/j1dev|has|/subscriptions/${instanceConfig.subscriptionId}/resourceGroups/j1dev/providers/Microsoft.Network/networkSecurityGroups/j1dev`,
      _type: 'azure_resource_group_has_security_group',
      _class: 'HAS',
      _fromEntityKey: `/subscriptions/${instanceConfig.subscriptionId}/resourceGroups/j1dev`,
      _toEntityKey: `/subscriptions/${instanceConfig.subscriptionId}/resourceGroups/j1dev/providers/Microsoft.Network/networkSecurityGroups/j1dev`,
      displayName: 'HAS',
    },
    {
      _key: `/subscriptions/${instanceConfig.subscriptionId}/resourceGroups/j1dev|has|/subscriptions/${instanceConfig.subscriptionId}/resourceGroups/j1dev/providers/Microsoft.Network/virtualNetworks/j1dev`,
      _type: 'azure_resource_group_has_vnet',
      _class: 'HAS',
      _fromEntityKey: `/subscriptions/${instanceConfig.subscriptionId}/resourceGroups/j1dev`,
      _toEntityKey: `/subscriptions/${instanceConfig.subscriptionId}/resourceGroups/j1dev/providers/Microsoft.Network/virtualNetworks/j1dev`,
      displayName: 'HAS',
    },
    {
      _key: `/subscriptions/${instanceConfig.subscriptionId}/resourceGroups/j1dev|has|/subscriptions/${instanceConfig.subscriptionId}/resourceGroups/j1dev/providers/Microsoft.Network/virtualNetworks/j1dev_two`,
      _type: 'azure_resource_group_has_vnet',
      _class: 'HAS',
      _fromEntityKey: `/subscriptions/${instanceConfig.subscriptionId}/resourceGroups/j1dev`,
      _toEntityKey: `/subscriptions/${instanceConfig.subscriptionId}/resourceGroups/j1dev/providers/Microsoft.Network/virtualNetworks/j1dev_two`,
      displayName: 'HAS',
    },
    // Diagnostic Settings
    {
      _class: 'HAS',
      _fromEntityKey: `/subscriptions/${instanceConfig.subscriptionId}/resourceGroups/j1dev/providers/Microsoft.Network/networkSecurityGroups/j1dev`,
      _key: `/subscriptions/${instanceConfig.subscriptionId}/resourceGroups/j1dev/providers/Microsoft.Network/networkSecurityGroups/j1dev|has|/subscriptions/${instanceConfig.subscriptionId}/resourcegroups/j1dev/providers/microsoft.network/networksecuritygroups/j1dev/providers/microsoft.insights/diagnosticSettings/j1dev_net_sec_grp_set/logs/NetworkSecurityGroupRuleCounter/true/1/true`,
      _toEntityKey: `/subscriptions/${instanceConfig.subscriptionId}/resourcegroups/j1dev/providers/microsoft.network/networksecuritygroups/j1dev/providers/microsoft.insights/diagnosticSettings/j1dev_net_sec_grp_set/logs/NetworkSecurityGroupRuleCounter/true/1/true`,
      _type: 'azure_resource_has_diagnostic_log_setting',
      displayName: 'HAS',
    },
    {
      _class: 'HAS',
      _fromEntityKey: `/subscriptions/${instanceConfig.subscriptionId}/resourceGroups/j1dev/providers/Microsoft.Network/networkSecurityGroups/j1dev`,
      _key: `/subscriptions/${instanceConfig.subscriptionId}/resourceGroups/j1dev/providers/Microsoft.Network/networkSecurityGroups/j1dev|has|/subscriptions/${instanceConfig.subscriptionId}/resourcegroups/j1dev/providers/microsoft.network/networksecuritygroups/j1dev/providers/microsoft.insights/diagnosticSettings/j1dev_net_sec_grp_set/logs/NetworkSecurityGroupEvent/true/1/true`,
      _toEntityKey: `/subscriptions/${instanceConfig.subscriptionId}/resourcegroups/j1dev/providers/microsoft.network/networksecuritygroups/j1dev/providers/microsoft.insights/diagnosticSettings/j1dev_net_sec_grp_set/logs/NetworkSecurityGroupEvent/true/1/true`,
      _type: 'azure_resource_has_diagnostic_log_setting',
      displayName: 'HAS',
    },
    {
      _class: 'USES',
      _fromEntityKey: `/subscriptions/${instanceConfig.subscriptionId}/resourcegroups/j1dev/providers/microsoft.network/networksecuritygroups/j1dev/providers/microsoft.insights/diagnosticSettings/j1dev_net_sec_grp_set/logs/NetworkSecurityGroupRuleCounter/true/1/true`,
      _key: `/subscriptions/${instanceConfig.subscriptionId}/resourcegroups/j1dev/providers/microsoft.network/networksecuritygroups/j1dev/providers/microsoft.insights/diagnosticSettings/j1dev_net_sec_grp_set/logs/NetworkSecurityGroupRuleCounter/true/1/true|uses|/subscriptions/${instanceConfig.subscriptionId}/resourceGroups/j1dev/providers/Microsoft.Storage/storageAccounts/${instanceConfig.developerId}j1dev`,
      _toEntityKey: `/subscriptions/${instanceConfig.subscriptionId}/resourceGroups/j1dev/providers/Microsoft.Storage/storageAccounts/${instanceConfig.developerId}j1dev`,
      _type: 'azure_diagnostic_log_setting_uses_storage_account',
      displayName: 'USES',
    },
    {
      _class: 'USES',
      _fromEntityKey: `/subscriptions/${instanceConfig.subscriptionId}/resourcegroups/j1dev/providers/microsoft.network/networksecuritygroups/j1dev/providers/microsoft.insights/diagnosticSettings/j1dev_net_sec_grp_set/logs/NetworkSecurityGroupEvent/true/1/true`,
      _key: `/subscriptions/${instanceConfig.subscriptionId}/resourcegroups/j1dev/providers/microsoft.network/networksecuritygroups/j1dev/providers/microsoft.insights/diagnosticSettings/j1dev_net_sec_grp_set/logs/NetworkSecurityGroupEvent/true/1/true|uses|/subscriptions/${instanceConfig.subscriptionId}/resourceGroups/j1dev/providers/Microsoft.Storage/storageAccounts/${instanceConfig.developerId}j1dev`,
      _toEntityKey: `/subscriptions/${instanceConfig.subscriptionId}/resourceGroups/j1dev/providers/Microsoft.Storage/storageAccounts/${instanceConfig.developerId}j1dev`,
      _type: 'azure_diagnostic_log_setting_uses_storage_account',
      displayName: 'USES',
    },
  );
}, 120000);
