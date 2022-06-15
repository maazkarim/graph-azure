import { RelationshipClass } from '@jupiterone/integration-sdk-core';
import { createResourceGroupResourceRelationshipMetadata } from '../utils/createResourceGroupResourceRelationship';

export const FrontDoorStepIds = {
  FETCH_FRONTDOORS: 'rm-fetch-frontdoors',
  FETCH_RULES_ENGINES: 'rm-fetch-frontdoor-rules-engines',
  FETCH_ROUTING_RULES: 'rm-fetch-frontdoor-routing-rules',
};

export const FrontDoorEntities = {
  FRONTDOOR: {
    resourceName: 'FrontDoor',
    _class: ['Service'],
    _type: 'azure_frontdoor',
  },
  RULES_ENGINE: {
    resourceName: 'FrontDoor Rules Engine',
    _class: ['Ruleset'],
    _type: 'azure_frontdoor_rules_engine',
  },
  ROUTING_RULE: {
    resourceName: 'FrontDoor Routing Rule',
    _class: ['Route'],
    _type: 'azure_frontdoor_routing_rule',
  },
};

export const FrontDoorRelationships = {
  RESOURCE_GROUP_HAS_FRONTDOOR: createResourceGroupResourceRelationshipMetadata(
    FrontDoorEntities.FRONTDOOR._type,
  ),
  FRONTDOOR_HAS_RULES_ENGINE: {
    _type: 'azure_frontdoor_has_rules_engine',
    sourceType: FrontDoorEntities.FRONTDOOR._type,
    _class: RelationshipClass.HAS,
    targetType: FrontDoorEntities.RULES_ENGINE._type,
  },
  FRONTDOOR_HAS_ROUTING_RULE: {
    _type: 'azure_frontdoor_has_routing_rule',
    sourceType: FrontDoorEntities.FRONTDOOR._type,
    _class: RelationshipClass.HAS,
    targetType: FrontDoorEntities.ROUTING_RULE._type,
  },
};
