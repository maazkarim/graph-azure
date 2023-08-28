import {
  RelationshipClass,
  generateRelationshipType,
  StepMappedRelationshipMetadata,
  RelationshipDirection,
} from '@jupiterone/integration-sdk-core';
import { ANY_RESOURCE } from '../constants';
import { entities as storageEntities } from '../storage/constants';
import { entities as subscriptionEntities } from '../subscriptions/constants';
import { createResourceGroupResourceRelationshipMetadata } from '../utils/createResourceGroupResourceRelationship';
import { INTERNET } from '@jupiterone/data-model';

// Keys for data in memory
export const FIREWALL_POLICY_PARENT_CHILDREN_MAP =
  'firewall-policy-parent-children-map';
export const POLICY_INCLUDED_IN_FIREWALLS_MAP =
  'policy-included-in-firewalls-map';

// Step IDs
export const STEP_RM_NETWORK_PUBLIC_IP_ADDRESSES = 'rm-network-ip-addresses';
export const STEP_RM_NETWORK_INTERFACES = 'rm-network-interfaces';
export const STEP_RM_NETWORK_SECURITY_GROUPS = 'rm-network-security-groups';
export const STEP_RM_NETWORK_FIREWALL_RULE_RELATIONSHIPS =
  'rm-network-firewall-rule-relationships';
export const STEP_RM_NETWORK_SECURITY_GROUP_RULE_RELATIONSHIPS =
  'rm-network-security-group-rules';
export const STEP_RM_NETWORK_FIREWALL_POLICY_RELATIONSHIPS =
  'rm-network-firewall-policy-relationships';
export const STEP_RM_NETWORK_VIRTUAL_NETWORKS = 'rm-network-virtual-networks';
export const STEP_RM_NETWORK_LOAD_BALANCERS = 'rm-network-load-balancers';
export const STEP_RM_NETWORK_FIREWALLS = 'rm-network-firewalls';
export const STEP_RM_NETWORK_FIREWALL_POLICIES = 'rm-network-firewall-policies';
export const STEP_RM_NETWORK_WATCHERS = 'rm-network-watchers';
export const STEP_RM_NETWORK_FLOW_LOGS = 'rm-network-flow-logs';
export const STEP_RM_NETWORK_PRIVATE_ENDPOINTS = 'rm-network-private-endpoints';
export const STEP_RM_NETWORK_PRIVATE_ENDPOINT_SUBNET_RELATIONSHIPS =
  'rm-network-private-endpoint-subnet-relationships';
export const STEP_RM_NETWORK_PRIVATE_ENDPOINTS_NIC_RELATIONSHIPS =
  'rm-network-private-endpoint-nic-relationships';
export const STEP_RM_NETWORK_PRIVATE_ENDPOINTS_RESOURCE_RELATIONSHIPS =
  'rm-network-private-endpoint-resource-relationships';
export const STEP_RM_NETWORK_LOCATION_WATCHERS =
  'rm-network-location-watcher-relationships';

// Graph objects
export const NetworkEntities = {
  AZURE_FIREWALL: {
    _type: 'azure_network_firewall',
    _class: ['Firewall'],
    resourceName: '[RM] Network Firewall',
  },
  FIREWALL_POLICY: {
    _type: 'azure_network_firewall_policy',
    _class: ['Policy'],
    resourceName: '[RM] Firewall Policy',
    schema: {
      additionalProperties: true,
      properties: {
        id: { type: 'string' },
        displayName: { type: 'string' },
        region: { type: 'string' },
        webLink: { type: 'string' },
        provisioningState: { type: 'string' },
        threatIntelMode: { type: 'string' },
        type: { type: 'string' },
      },
      required: ['displayName', 'region', 'webLink'],
    },
    disableClassMatch: true,
  },
  FIREWALL_RULE_GROUP: {
    _type: 'azure_network_firewall_rule_group',
    _class: ['Ruleset'],
    resourceName: '[RM] Firewall Rule Group',
  },
  VIRTUAL_NETWORK: {
    _type: 'azure_vnet',
    _class: ['Network'],
    resourceName: '[RM] Virtual Network',
  },
  SECURITY_GROUP: {
    _type: 'azure_security_group',
    _class: ['Firewall'],
    resourceName: '[RM] Security Group',
  },
  PUBLIC_IP_ADDRESS: {
    _type: 'azure_public_ip',
    _class: 'IpAddress',
    resourceName: '[RM] Public IP Address',
  },
  SUBNET: {
    _type: 'azure_subnet',
    _class: 'Network',
    resourceName: '[RM] Subnet',
  },
  NETWORK_INTERFACE: {
    _type: 'azure_nic',
    _class: 'NetworkInterface',
    resourceName: '[RM] Network Interface',
  },
  LOAD_BALANCER: {
    _type: 'azure_lb',
    _class: ['Gateway'],
    resourceName: '[RM] Load Balancer',
  },
  NETWORK_WATCHER: {
    _type: 'azure_network_watcher',
    _class: ['Resource'],
    resourceName: '[RM] Network Watcher',
  },
  SECURITY_GROUP_FLOW_LOGS: {
    _type: 'azure_security_group_flow_logs',
    _class: ['Logs'],
    resourceName: '[RM] Security Group Flow Logs',
  },
  PRIVATE_ENDPOINT: {
    _type: 'azure_private_endpoint',
    _class: ['NetworkEndpoint'],
    resourceName: '[RM] Private Endpoint',
  },
};

export const SECURITY_GROUP_RULE_RELATIONSHIP_TYPE =
  'azure_security_group_rule';
export const FIREWALL_RULE_RELATIONSHIP_TYPE = 'azure_network_firewall_rule';

// Relationships
export const NetworkRelationships = {
  RESOURCE_GROUP_HAS_NETWORK_AZURE_FIREWALL:
    createResourceGroupResourceRelationshipMetadata(
      NetworkEntities.AZURE_FIREWALL._type,
    ),
  RESOURCE_GROUP_HAS_NETWORK_PUBLIC_IP_ADDRESS:
    createResourceGroupResourceRelationshipMetadata(
      NetworkEntities.PUBLIC_IP_ADDRESS._type,
    ),
  RESOURCE_GROUP_HAS_NETWORK_NETWORK_INTERFACE:
    createResourceGroupResourceRelationshipMetadata(
      NetworkEntities.NETWORK_INTERFACE._type,
    ),
  RESOURCE_GROUP_HAS_NETWORK_VIRTUAL_NETWORK:
    createResourceGroupResourceRelationshipMetadata(
      NetworkEntities.VIRTUAL_NETWORK._type,
    ),
  RESOURCE_GROUP_HAS_NETWORK_SECURITY_GROUP:
    createResourceGroupResourceRelationshipMetadata(
      NetworkEntities.SECURITY_GROUP._type,
    ),
  RESOURCE_GROUP_HAS_NETWORK_LOAD_BALANCER:
    createResourceGroupResourceRelationshipMetadata(
      NetworkEntities.LOAD_BALANCER._type,
    ),
  RESOURCE_GROUP_HAS_NETWORK_WATCHER:
    createResourceGroupResourceRelationshipMetadata(
      NetworkEntities.NETWORK_WATCHER._type,
    ),
  RESOURCE_GROUP_HAS_PRIVATE_ENDPOINT:
    createResourceGroupResourceRelationshipMetadata(
      NetworkEntities.PRIVATE_ENDPOINT._type,
    ),
  NETWORK_AZURE_FIREWALL_HAS_FIREWALL_POLICY: {
    _type: generateRelationshipType(
      RelationshipClass.HAS,
      NetworkEntities.AZURE_FIREWALL._type,
      NetworkEntities.FIREWALL_POLICY._type,
    ),
    sourceType: NetworkEntities.AZURE_FIREWALL._type,
    _class: RelationshipClass.HAS,
    targetType: NetworkEntities.FIREWALL_POLICY._type,
  },
  NETWORK_FIREWALL_POLICY_EXTENDS_FIREWALL_POLICY: {
    _type: generateRelationshipType(
      RelationshipClass.EXTENDS,
      NetworkEntities.FIREWALL_POLICY._type,
      NetworkEntities.FIREWALL_POLICY._type,
    ),
    sourceType: NetworkEntities.FIREWALL_POLICY._type,
    _class: RelationshipClass.EXTENDS,
    targetType: NetworkEntities.FIREWALL_POLICY._type,
  },
  NETWORK_VIRTUAL_NETWORK_CONTAINS_NETWORK_SUBNET: {
    _type: generateRelationshipType(
      RelationshipClass.CONTAINS,
      NetworkEntities.VIRTUAL_NETWORK._type,
      NetworkEntities.SUBNET._type,
    ),
    sourceType: NetworkEntities.VIRTUAL_NETWORK._type,
    _class: RelationshipClass.CONTAINS,
    targetType: NetworkEntities.SUBNET._type,
  },
  NETWORK_SECURITY_GROUP_PROTECTS_NETWORK_SUBNET: {
    _type: generateRelationshipType(
      RelationshipClass.PROTECTS,
      NetworkEntities.SECURITY_GROUP._type,
      NetworkEntities.SUBNET._type,
    ),
    sourceType: NetworkEntities.SECURITY_GROUP._type,
    _class: RelationshipClass.PROTECTS,
    targetType: NetworkEntities.SUBNET._type,
  },
  NETWORK_SECURITY_GROUP_PROTECTS_NETWORK_INTERFACE: {
    _type: generateRelationshipType(
      RelationshipClass.PROTECTS,
      NetworkEntities.SECURITY_GROUP._type,
      NetworkEntities.NETWORK_INTERFACE._type,
    ),
    sourceType: NetworkEntities.SECURITY_GROUP._type,
    _class: RelationshipClass.PROTECTS,
    targetType: NetworkEntities.NETWORK_INTERFACE._type,
  },
  NETWORK_LOAD_BALANCER_CONNECTS_NETWORK_INTERFACE: {
    _type: generateRelationshipType(
      RelationshipClass.CONNECTS,
      NetworkEntities.LOAD_BALANCER._type,
      NetworkEntities.NETWORK_INTERFACE._type,
    ),
    sourceType: NetworkEntities.LOAD_BALANCER._type,
    _class: RelationshipClass.CONNECTS,
    targetType: NetworkEntities.NETWORK_INTERFACE._type,
  },
  NETWORK_SECURITY_GROUP_ALLOWS_NETWORK_SUBNET: {
    _type: SECURITY_GROUP_RULE_RELATIONSHIP_TYPE,
    sourceType: NetworkEntities.SECURITY_GROUP._type,
    _class: RelationshipClass.ALLOWS,
    targetType: NetworkEntities.SUBNET._type,
  },
  NETWORK_SUBNET_ALLOWS_NETWORK_SECURITY_GROUP: {
    _type: SECURITY_GROUP_RULE_RELATIONSHIP_TYPE,
    sourceType: NetworkEntities.SUBNET._type,
    _class: RelationshipClass.ALLOWS,
    targetType: NetworkEntities.SECURITY_GROUP._type,
  },
  NETWORK_SECURITY_GROUP_DENIES_NETWORK_SUBNET: {
    _type: SECURITY_GROUP_RULE_RELATIONSHIP_TYPE,
    sourceType: NetworkEntities.SECURITY_GROUP._type,
    _class: RelationshipClass.DENIES,
    targetType: NetworkEntities.SUBNET._type,
  },
  NETWORK_SUBNET_DENIES_NETWORK_SECURITY_GROUP: {
    _type: SECURITY_GROUP_RULE_RELATIONSHIP_TYPE,
    sourceType: NetworkEntities.SUBNET._type,
    _class: RelationshipClass.DENIES,
    targetType: NetworkEntities.SECURITY_GROUP._type,
  },
  NETWORK_WATCHER_HAS_FLOW_LOGS: {
    _type: 'azure_network_watcher_has_security_group_flow_logs',
    sourceType: NetworkEntities.NETWORK_WATCHER._type,
    _class: RelationshipClass.HAS,
    targetType: NetworkEntities.SECURITY_GROUP_FLOW_LOGS._type,
  },
  NETWORK_SECURITY_GROUP_HAS_FLOW_LOGS: {
    _type: 'azure_security_group_has_flow_logs',
    sourceType: NetworkEntities.SECURITY_GROUP._type,
    _class: RelationshipClass.HAS,
    targetType: NetworkEntities.SECURITY_GROUP_FLOW_LOGS._type,
  },
  NETWORK_SECURITY_GROUP_FLOW_LOGS_USES_STORAGE_ACCOUNT: {
    _type: 'azure_security_group_flow_logs_uses_storage_account',
    sourceType: NetworkEntities.SECURITY_GROUP_FLOW_LOGS._type,
    _class: RelationshipClass.USES,
    targetType: storageEntities.STORAGE_ACCOUNT._type,
  },
  NETWORK_SUBNET_HAS_PRIVATE_ENDPOINT: {
    _type: 'azure_subnet_has_private_endpoint',
    sourceType: NetworkEntities.SUBNET._type,
    _class: RelationshipClass.HAS,
    targetType: NetworkEntities.PRIVATE_ENDPOINT._type,
  },
  PRIVATE_ENDPOINT_USES_NIC: {
    _type: 'azure_private_endpoint_uses_nic',
    sourceType: NetworkEntities.PRIVATE_ENDPOINT._type,
    _class: RelationshipClass.USES,
    targetType: NetworkEntities.NETWORK_INTERFACE._type,
  },
  PRIVATE_ENDPOINT_CONNECTS_RESOURCE: {
    _type: 'azure_private_endpoint_connects_resource',
    sourceType: NetworkEntities.PRIVATE_ENDPOINT._type,
    _class: RelationshipClass.CONNECTS,
    targetType: ANY_RESOURCE,
  },
};

export const NetworkMappedRelationships: Record<
  | 'LOCATION_HAS_NETWORK_WATCHER'
  | 'FIREWALL_ALLOWS_INTERNET_FORWARD'
  | 'FIREWALL_ALLOWS_INTERNET_REVERSE'
  | 'FIREWALL_DENIES_INTERNET_FORWARD'
  | 'FIREWALL_DENIES_INTERNET_REVERSE',
  StepMappedRelationshipMetadata
> = {
  LOCATION_HAS_NETWORK_WATCHER: {
    _type: 'azure_location_has_network_watcher',
    sourceType: NetworkEntities.NETWORK_WATCHER._type,
    _class: RelationshipClass.HAS,
    targetType: subscriptionEntities.LOCATION._type,
    direction: RelationshipDirection.REVERSE,
  },
  FIREWALL_ALLOWS_INTERNET_FORWARD: {
    _type: FIREWALL_RULE_RELATIONSHIP_TYPE,
    _class: RelationshipClass.ALLOWS,
    sourceType: NetworkEntities.AZURE_FIREWALL._type,
    targetType: INTERNET._type,
    direction: RelationshipDirection.FORWARD,
    schema: {
      additionalProperties: true,
    },
  },
  FIREWALL_ALLOWS_INTERNET_REVERSE: {
    _type: FIREWALL_RULE_RELATIONSHIP_TYPE,
    _class: RelationshipClass.ALLOWS,
    sourceType: NetworkEntities.AZURE_FIREWALL._type,
    targetType: INTERNET._type,
    direction: RelationshipDirection.REVERSE,
    schema: {
      additionalProperties: true,
    },
  },
  FIREWALL_DENIES_INTERNET_FORWARD: {
    _type: FIREWALL_RULE_RELATIONSHIP_TYPE,
    _class: RelationshipClass.DENIES,
    sourceType: NetworkEntities.AZURE_FIREWALL._type,
    targetType: INTERNET._type,
    direction: RelationshipDirection.FORWARD,
    schema: {
      additionalProperties: true,
    },
  },
  FIREWALL_DENIES_INTERNET_REVERSE: {
    _type: FIREWALL_RULE_RELATIONSHIP_TYPE,
    _class: RelationshipClass.DENIES,
    sourceType: NetworkEntities.AZURE_FIREWALL._type,
    targetType: INTERNET._type,
    direction: RelationshipDirection.REVERSE,
    schema: {
      additionalProperties: true,
    },
  },
};
