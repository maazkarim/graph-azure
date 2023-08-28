import * as msRest from '@azure/ms-rest-js';

export const CloudError: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'CloudError',
    modelProperties: {
      error: {
        serializedName: 'error',
        type: {
          name: 'Composite',
          className: 'CloudErrorBody',
        },
      },
    },
  },
};

export const CloudErrorBody: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'CloudErrorBody',
    modelProperties: {
      code: {
        serializedName: 'code',
        type: {
          name: 'String',
        },
      },
      message: {
        serializedName: 'message',
        type: {
          name: 'String',
        },
      },
      target: {
        serializedName: 'target',
        type: {
          name: 'String',
        },
      },
      details: {
        serializedName: 'details',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'CloudErrorBody',
            },
          },
        },
      },
    },
  },
};

export const ApplicationGatewaySku: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ApplicationGatewaySku',
    modelProperties: {
      name: {
        serializedName: 'name',
        type: {
          name: 'String',
        },
      },
      tier: {
        serializedName: 'tier',
        type: {
          name: 'String',
        },
      },
      capacity: {
        serializedName: 'capacity',
        type: {
          name: 'Number',
        },
      },
    },
  },
};

export const ApplicationGatewaySslPolicy: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ApplicationGatewaySslPolicy',
    modelProperties: {
      disabledSslProtocols: {
        serializedName: 'disabledSslProtocols',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
      policyType: {
        serializedName: 'policyType',
        type: {
          name: 'String',
        },
      },
      policyName: {
        serializedName: 'policyName',
        type: {
          name: 'String',
        },
      },
      cipherSuites: {
        serializedName: 'cipherSuites',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
      minProtocolVersion: {
        serializedName: 'minProtocolVersion',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const SubResource: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'SubResource',
    modelProperties: {
      id: {
        serializedName: 'id',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const ApplicationGatewayProbeHealthResponseMatch: msRest.CompositeMapper =
  {
    type: {
      name: 'Composite',
      className: 'ApplicationGatewayProbeHealthResponseMatch',
      modelProperties: {
        body: {
          serializedName: 'body',
          type: {
            name: 'String',
          },
        },
        statusCodes: {
          serializedName: 'statusCodes',
          type: {
            name: 'Sequence',
            element: {
              type: {
                name: 'String',
              },
            },
          },
        },
      },
    },
  };

export const Resource: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'Resource',
    modelProperties: {
      id: {
        serializedName: 'id',
        type: {
          name: 'String',
        },
      },
      name: {
        serializedName: 'name',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      type: {
        serializedName: 'type',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      location: {
        serializedName: 'location',
        type: {
          name: 'String',
        },
      },
      tags: {
        serializedName: 'tags',
        type: {
          name: 'Dictionary',
          value: { type: { name: 'String' } },
        },
      },
    },
  },
};

export const ExtendedLocation: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ExtendedLocation',
    modelProperties: {
      name: {
        serializedName: 'name',
        type: {
          name: 'String',
        },
      },
      type: {
        serializedName: 'type',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const PrivateLinkServiceConnectionState: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'PrivateLinkServiceConnectionState',
    modelProperties: {
      status: {
        serializedName: 'status',
        type: {
          name: 'String',
        },
      },
      description: {
        serializedName: 'description',
        type: {
          name: 'String',
        },
      },
      actionsRequired: {
        serializedName: 'actionsRequired',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const CustomDnsConfigPropertiesFormat: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'CustomDnsConfigPropertiesFormat',
    modelProperties: {
      fqdn: {
        serializedName: 'fqdn',
        type: {
          name: 'String',
        },
      },
      ipAddresses: {
        serializedName: 'ipAddresses',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
    },
  },
};

export const PrivateEndpointIPConfiguration: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'PrivateEndpointIPConfiguration',
    modelProperties: {
      name: {
        serializedName: 'name',
        type: {
          name: 'String',
        },
      },
      type: {
        serializedName: 'type',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      etag: {
        serializedName: 'etag',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      groupId: {
        serializedName: 'properties.groupId',
        type: {
          name: 'String',
        },
      },
      memberName: {
        serializedName: 'properties.memberName',
        type: {
          name: 'String',
        },
      },
      privateIPAddress: {
        serializedName: 'properties.privateIPAddress',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const NetworkInterfaceDnsSettings: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'NetworkInterfaceDnsSettings',
    modelProperties: {
      dnsServers: {
        serializedName: 'dnsServers',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
      appliedDnsServers: {
        serializedName: 'appliedDnsServers',
        readOnly: true,
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
      internalDnsNameLabel: {
        serializedName: 'internalDnsNameLabel',
        type: {
          name: 'String',
        },
      },
      internalFqdn: {
        serializedName: 'internalFqdn',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      internalDomainNameSuffix: {
        serializedName: 'internalDomainNameSuffix',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const ResourceSet: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ResourceSet',
    modelProperties: {
      subscriptions: {
        serializedName: 'subscriptions',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
    },
  },
};

export const RetentionPolicyParameters: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'RetentionPolicyParameters',
    modelProperties: {
      days: {
        defaultValue: 0,
        serializedName: 'days',
        type: {
          name: 'Number',
        },
      },
      enabled: {
        defaultValue: false,
        serializedName: 'enabled',
        type: {
          name: 'Boolean',
        },
      },
    },
  },
};

export const FlowLogFormatParameters: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'FlowLogFormatParameters',
    modelProperties: {
      type: {
        serializedName: 'type',
        type: {
          name: 'String',
        },
      },
      version: {
        defaultValue: 0,
        serializedName: 'version',
        type: {
          name: 'Number',
        },
      },
    },
  },
};

export const TrafficAnalyticsProperties: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'TrafficAnalyticsProperties',
    modelProperties: {
      networkWatcherFlowAnalyticsConfiguration: {
        serializedName: 'networkWatcherFlowAnalyticsConfiguration',
        type: {
          name: 'Composite',
          className: 'TrafficAnalyticsConfigurationProperties',
        },
      },
    },
  },
};

export const TrafficAnalyticsConfigurationProperties: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'TrafficAnalyticsConfigurationProperties',
    modelProperties: {
      enabled: {
        serializedName: 'enabled',
        type: {
          name: 'Boolean',
        },
      },
      workspaceId: {
        serializedName: 'workspaceId',
        type: {
          name: 'String',
        },
      },
      workspaceRegion: {
        serializedName: 'workspaceRegion',
        type: {
          name: 'String',
        },
      },
      workspaceResourceId: {
        serializedName: 'workspaceResourceId',
        type: {
          name: 'String',
        },
      },
      trafficAnalyticsInterval: {
        serializedName: 'trafficAnalyticsInterval',
        type: {
          name: 'Number',
        },
      },
    },
  },
};

export const ServiceEndpointPropertiesFormat: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ServiceEndpointPropertiesFormat',
    modelProperties: {
      service: {
        serializedName: 'service',
        type: {
          name: 'String',
        },
      },
      locations: {
        serializedName: 'locations',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
      provisioningState: {
        serializedName: 'provisioningState',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const PublicIPAddressSku: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'PublicIPAddressSku',
    modelProperties: {
      name: {
        serializedName: 'name',
        type: {
          name: 'String',
        },
      },
      tier: {
        serializedName: 'tier',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const PublicIPAddressDnsSettings: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'PublicIPAddressDnsSettings',
    modelProperties: {
      domainNameLabel: {
        serializedName: 'domainNameLabel',
        type: {
          name: 'String',
        },
      },
      domainNameLabelScope: {
        serializedName: 'domainNameLabelScope',
        type: {
          name: 'Enum',
          allowedValues: [
            'TenantReuse',
            'SubscriptionReuse',
            'ResourceGroupReuse',
            'NoReuse',
          ],
        },
      },
      fqdn: {
        serializedName: 'fqdn',
        type: {
          name: 'String',
        },
      },
      reverseFqdn: {
        serializedName: 'reverseFqdn',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const DdosSettings: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'DdosSettings',
    modelProperties: {
      protectionMode: {
        serializedName: 'protectionMode',
        type: {
          name: 'String',
        },
      },
      ddosProtectionPlan: {
        serializedName: 'ddosProtectionPlan',
        type: {
          name: 'Composite',
          className: 'SubResource',
        },
      },
    },
  },
};

export const IpTag: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'IpTag',
    modelProperties: {
      ipTagType: {
        serializedName: 'ipTagType',
        type: {
          name: 'String',
        },
      },
      tag: {
        serializedName: 'tag',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const NatGatewaySku: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'NatGatewaySku',
    modelProperties: {
      name: {
        serializedName: 'name',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const GatewayLoadBalancerTunnelInterface: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'GatewayLoadBalancerTunnelInterface',
    modelProperties: {
      port: {
        serializedName: 'port',
        type: {
          name: 'Number',
        },
      },
      identifier: {
        serializedName: 'identifier',
        type: {
          name: 'Number',
        },
      },
      protocol: {
        serializedName: 'protocol',
        type: {
          name: 'String',
        },
      },
      type: {
        serializedName: 'type',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const LoadBalancerBackendAddress: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'LoadBalancerBackendAddress',
    modelProperties: {
      name: {
        serializedName: 'name',
        type: {
          name: 'String',
        },
      },
      virtualNetwork: {
        serializedName: 'properties.virtualNetwork',
        type: {
          name: 'Composite',
          className: 'SubResource',
        },
      },
      subnet: {
        serializedName: 'properties.subnet',
        type: {
          name: 'Composite',
          className: 'SubResource',
        },
      },
      ipAddress: {
        serializedName: 'properties.ipAddress',
        type: {
          name: 'String',
        },
      },
      networkInterfaceIPConfiguration: {
        serializedName: 'properties.networkInterfaceIPConfiguration',
        type: {
          name: 'Composite',
          className: 'SubResource',
        },
      },
      loadBalancerFrontendIPConfiguration: {
        serializedName: 'properties.loadBalancerFrontendIPConfiguration',
        type: {
          name: 'Composite',
          className: 'SubResource',
        },
      },
      inboundNatRulesPortMapping: {
        serializedName: 'properties.inboundNatRulesPortMapping',
        readOnly: true,
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'NatRulePortMapping',
            },
          },
        },
      },
      adminState: {
        serializedName: 'properties.adminState',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const NatRulePortMapping: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'NatRulePortMapping',
    modelProperties: {
      inboundNatRuleName: {
        serializedName: 'inboundNatRuleName',
        type: {
          name: 'String',
        },
      },
      frontendPort: {
        serializedName: 'frontendPort',
        type: {
          name: 'Number',
        },
      },
      backendPort: {
        serializedName: 'backendPort',
        type: {
          name: 'Number',
        },
      },
    },
  },
};

export const NetworkInterfaceIPConfigurationPrivateLinkConnectionProperties: msRest.CompositeMapper =
  {
    type: {
      name: 'Composite',
      className:
        'NetworkInterfaceIPConfigurationPrivateLinkConnectionProperties',
      modelProperties: {
        groupId: {
          serializedName: 'groupId',
          readOnly: true,
          type: {
            name: 'String',
          },
        },
        requiredMemberName: {
          serializedName: 'requiredMemberName',
          readOnly: true,
          type: {
            name: 'String',
          },
        },
        fqdns: {
          serializedName: 'fqdns',
          readOnly: true,
          type: {
            name: 'Sequence',
            element: {
              type: {
                name: 'String',
              },
            },
          },
        },
      },
    },
  };

export const ApplicationGatewayBackendAddress: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ApplicationGatewayBackendAddress',
    modelProperties: {
      fqdn: {
        serializedName: 'fqdn',
        type: {
          name: 'String',
        },
      },
      ipAddress: {
        serializedName: 'ipAddress',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const ApplicationGatewayConnectionDraining: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ApplicationGatewayConnectionDraining',
    modelProperties: {
      enabled: {
        serializedName: 'enabled',
        required: true,
        type: {
          name: 'Boolean',
        },
      },
      drainTimeoutInSec: {
        constraints: {
          InclusiveMaximum: 3600,
          InclusiveMinimum: 1,
        },
        serializedName: 'drainTimeoutInSec',
        required: true,
        type: {
          name: 'Number',
        },
      },
    },
  },
};

export const ApplicationGatewayCustomError: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ApplicationGatewayCustomError',
    modelProperties: {
      statusCode: {
        serializedName: 'statusCode',
        type: {
          name: 'String',
        },
      },
      customErrorPageUrl: {
        serializedName: 'customErrorPageUrl',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const ApplicationGatewayClientAuthConfiguration: msRest.CompositeMapper =
  {
    type: {
      name: 'Composite',
      className: 'ApplicationGatewayClientAuthConfiguration',
      modelProperties: {
        verifyClientCertIssuerDN: {
          serializedName: 'verifyClientCertIssuerDN',
          type: {
            name: 'Boolean',
          },
        },
        verifyClientRevocation: {
          serializedName: 'verifyClientRevocation',
          type: {
            name: 'String',
          },
        },
      },
    },
  };

export const ApplicationGatewayRewriteRule: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ApplicationGatewayRewriteRule',
    modelProperties: {
      name: {
        serializedName: 'name',
        type: {
          name: 'String',
        },
      },
      ruleSequence: {
        serializedName: 'ruleSequence',
        type: {
          name: 'Number',
        },
      },
      conditions: {
        serializedName: 'conditions',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'ApplicationGatewayRewriteRuleCondition',
            },
          },
        },
      },
      actionSet: {
        serializedName: 'actionSet',
        type: {
          name: 'Composite',
          className: 'ApplicationGatewayRewriteRuleActionSet',
        },
      },
    },
  },
};

export const ApplicationGatewayRewriteRuleCondition: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ApplicationGatewayRewriteRuleCondition',
    modelProperties: {
      variable: {
        serializedName: 'variable',
        type: {
          name: 'String',
        },
      },
      pattern: {
        serializedName: 'pattern',
        type: {
          name: 'String',
        },
      },
      ignoreCase: {
        serializedName: 'ignoreCase',
        type: {
          name: 'Boolean',
        },
      },
      negate: {
        serializedName: 'negate',
        type: {
          name: 'Boolean',
        },
      },
    },
  },
};

export const ApplicationGatewayRewriteRuleActionSet: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ApplicationGatewayRewriteRuleActionSet',
    modelProperties: {
      requestHeaderConfigurations: {
        serializedName: 'requestHeaderConfigurations',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'ApplicationGatewayHeaderConfiguration',
            },
          },
        },
      },
      responseHeaderConfigurations: {
        serializedName: 'responseHeaderConfigurations',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'ApplicationGatewayHeaderConfiguration',
            },
          },
        },
      },
      urlConfiguration: {
        serializedName: 'urlConfiguration',
        type: {
          name: 'Composite',
          className: 'ApplicationGatewayUrlConfiguration',
        },
      },
    },
  },
};

export const ApplicationGatewayHeaderConfiguration: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ApplicationGatewayHeaderConfiguration',
    modelProperties: {
      headerName: {
        serializedName: 'headerName',
        type: {
          name: 'String',
        },
      },
      headerValue: {
        serializedName: 'headerValue',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const ApplicationGatewayUrlConfiguration: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ApplicationGatewayUrlConfiguration',
    modelProperties: {
      modifiedPath: {
        serializedName: 'modifiedPath',
        type: {
          name: 'String',
        },
      },
      modifiedQueryString: {
        serializedName: 'modifiedQueryString',
        type: {
          name: 'String',
        },
      },
      reroute: {
        serializedName: 'reroute',
        type: {
          name: 'Boolean',
        },
      },
    },
  },
};

export const ApplicationGatewayWebApplicationFirewallConfiguration: msRest.CompositeMapper =
  {
    type: {
      name: 'Composite',
      className: 'ApplicationGatewayWebApplicationFirewallConfiguration',
      modelProperties: {
        enabled: {
          serializedName: 'enabled',
          required: true,
          type: {
            name: 'Boolean',
          },
        },
        firewallMode: {
          serializedName: 'firewallMode',
          required: true,
          type: {
            name: 'String',
          },
        },
        ruleSetType: {
          serializedName: 'ruleSetType',
          required: true,
          type: {
            name: 'String',
          },
        },
        ruleSetVersion: {
          serializedName: 'ruleSetVersion',
          required: true,
          type: {
            name: 'String',
          },
        },
        disabledRuleGroups: {
          serializedName: 'disabledRuleGroups',
          type: {
            name: 'Sequence',
            element: {
              type: {
                name: 'Composite',
                className: 'ApplicationGatewayFirewallDisabledRuleGroup',
              },
            },
          },
        },
        requestBodyCheck: {
          serializedName: 'requestBodyCheck',
          type: {
            name: 'Boolean',
          },
        },
        maxRequestBodySize: {
          constraints: {
            InclusiveMaximum: 128,
            InclusiveMinimum: 8,
          },
          serializedName: 'maxRequestBodySize',
          type: {
            name: 'Number',
          },
        },
        maxRequestBodySizeInKb: {
          constraints: {
            InclusiveMaximum: 128,
            InclusiveMinimum: 8,
          },
          serializedName: 'maxRequestBodySizeInKb',
          type: {
            name: 'Number',
          },
        },
        fileUploadLimitInMb: {
          constraints: {
            InclusiveMinimum: 0,
          },
          serializedName: 'fileUploadLimitInMb',
          type: {
            name: 'Number',
          },
        },
        exclusions: {
          serializedName: 'exclusions',
          type: {
            name: 'Sequence',
            element: {
              type: {
                name: 'Composite',
                className: 'ApplicationGatewayFirewallExclusion',
              },
            },
          },
        },
      },
    },
  };

export const ApplicationGatewayFirewallDisabledRuleGroup: msRest.CompositeMapper =
  {
    type: {
      name: 'Composite',
      className: 'ApplicationGatewayFirewallDisabledRuleGroup',
      modelProperties: {
        ruleGroupName: {
          serializedName: 'ruleGroupName',
          required: true,
          type: {
            name: 'String',
          },
        },
        rules: {
          serializedName: 'rules',
          type: {
            name: 'Sequence',
            element: {
              type: {
                name: 'Number',
              },
            },
          },
        },
      },
    },
  };

export const ApplicationGatewayFirewallExclusion: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ApplicationGatewayFirewallExclusion',
    modelProperties: {
      matchVariable: {
        serializedName: 'matchVariable',
        required: true,
        type: {
          name: 'String',
        },
      },
      selectorMatchOperator: {
        serializedName: 'selectorMatchOperator',
        required: true,
        type: {
          name: 'String',
        },
      },
      selector: {
        serializedName: 'selector',
        required: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const ApplicationGatewayAutoscaleConfiguration: msRest.CompositeMapper =
  {
    type: {
      name: 'Composite',
      className: 'ApplicationGatewayAutoscaleConfiguration',
      modelProperties: {
        minCapacity: {
          constraints: {
            InclusiveMinimum: 0,
          },
          serializedName: 'minCapacity',
          required: true,
          type: {
            name: 'Number',
          },
        },
        maxCapacity: {
          constraints: {
            InclusiveMinimum: 2,
          },
          serializedName: 'maxCapacity',
          type: {
            name: 'Number',
          },
        },
      },
    },
  };

export const ApplicationGatewayGlobalConfiguration: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ApplicationGatewayGlobalConfiguration',
    modelProperties: {
      enableRequestBuffering: {
        serializedName: 'enableRequestBuffering',
        type: {
          name: 'Boolean',
        },
      },
      enableResponseBuffering: {
        serializedName: 'enableResponseBuffering',
        type: {
          name: 'Boolean',
        },
      },
    },
  },
};

export const ManagedServiceIdentity: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ManagedServiceIdentity',
    modelProperties: {
      principalId: {
        serializedName: 'principalId',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      tenantId: {
        serializedName: 'tenantId',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      type: {
        serializedName: 'type',
        type: {
          name: 'Enum',
          allowedValues: [
            'SystemAssigned',
            'UserAssigned',
            'SystemAssigned, UserAssigned',
            'None',
          ],
        },
      },
      userAssignedIdentities: {
        serializedName: 'userAssignedIdentities',
        type: {
          name: 'Dictionary',
          value: {
            type: {
              name: 'Composite',
              className:
                'Components1Jq1T4ISchemasManagedserviceidentityPropertiesUserassignedidentitiesAdditionalproperties',
            },
          },
        },
      },
    },
  },
};

export const Components1Jq1T4ISchemasManagedserviceidentityPropertiesUserassignedidentitiesAdditionalproperties: msRest.CompositeMapper =
  {
    type: {
      name: 'Composite',
      className:
        'Components1Jq1T4ISchemasManagedserviceidentityPropertiesUserassignedidentitiesAdditionalproperties',
      modelProperties: {
        principalId: {
          serializedName: 'principalId',
          readOnly: true,
          type: {
            name: 'String',
          },
        },
        clientId: {
          serializedName: 'clientId',
          readOnly: true,
          type: {
            name: 'String',
          },
        },
      },
    },
  };

export const TagsObject: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'TagsObject',
    modelProperties: {
      tags: {
        serializedName: 'tags',
        type: {
          name: 'Dictionary',
          value: { type: { name: 'String' } },
        },
      },
    },
  },
};

export const ApplicationGatewayListResult: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ApplicationGatewayListResult',
    modelProperties: {
      value: {
        serializedName: 'value',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'ApplicationGateway',
            },
          },
        },
      },
      nextLink: {
        serializedName: 'nextLink',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const ApplicationGatewayBackendHealth: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ApplicationGatewayBackendHealth',
    modelProperties: {
      backendAddressPools: {
        serializedName: 'backendAddressPools',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'ApplicationGatewayBackendHealthPool',
            },
          },
        },
      },
    },
  },
};

export const ApplicationGatewayBackendHealthPool: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ApplicationGatewayBackendHealthPool',
    modelProperties: {
      backendAddressPool: {
        serializedName: 'backendAddressPool',
        type: {
          name: 'Composite',
          className: 'ApplicationGatewayBackendAddressPool',
        },
      },
      backendHttpSettingsCollection: {
        serializedName: 'backendHttpSettingsCollection',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'ApplicationGatewayBackendHealthHttpSettings',
            },
          },
        },
      },
    },
  },
};

export const ApplicationGatewayBackendHealthHttpSettings: msRest.CompositeMapper =
  {
    type: {
      name: 'Composite',
      className: 'ApplicationGatewayBackendHealthHttpSettings',
      modelProperties: {
        backendHttpSettings: {
          serializedName: 'backendHttpSettings',
          type: {
            name: 'Composite',
            className: 'ApplicationGatewayBackendHttpSettings',
          },
        },
        servers: {
          serializedName: 'servers',
          type: {
            name: 'Sequence',
            element: {
              type: {
                name: 'Composite',
                className: 'ApplicationGatewayBackendHealthServer',
              },
            },
          },
        },
      },
    },
  };

export const ApplicationGatewayBackendHealthServer: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ApplicationGatewayBackendHealthServer',
    modelProperties: {
      address: {
        serializedName: 'address',
        type: {
          name: 'String',
        },
      },
      ipConfiguration: {
        serializedName: 'ipConfiguration',
        type: {
          name: 'Composite',
          className: 'NetworkInterfaceIPConfiguration',
        },
      },
      health: {
        serializedName: 'health',
        type: {
          name: 'String',
        },
      },
      healthProbeLog: {
        serializedName: 'healthProbeLog',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const ApplicationGatewayOnDemandProbe: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ApplicationGatewayOnDemandProbe',
    modelProperties: {
      protocol: {
        serializedName: 'protocol',
        type: {
          name: 'String',
        },
      },
      host: {
        serializedName: 'host',
        type: {
          name: 'String',
        },
      },
      path: {
        serializedName: 'path',
        type: {
          name: 'String',
        },
      },
      timeout: {
        serializedName: 'timeout',
        type: {
          name: 'Number',
        },
      },
      pickHostNameFromBackendHttpSettings: {
        serializedName: 'pickHostNameFromBackendHttpSettings',
        type: {
          name: 'Boolean',
        },
      },
      match: {
        serializedName: 'match',
        type: {
          name: 'Composite',
          className: 'ApplicationGatewayProbeHealthResponseMatch',
        },
      },
      backendAddressPool: {
        serializedName: 'backendAddressPool',
        type: {
          name: 'Composite',
          className: 'SubResource',
        },
      },
      backendHttpSettings: {
        serializedName: 'backendHttpSettings',
        type: {
          name: 'Composite',
          className: 'SubResource',
        },
      },
    },
  },
};

export const ApplicationGatewayBackendHealthOnDemand: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ApplicationGatewayBackendHealthOnDemand',
    modelProperties: {
      backendAddressPool: {
        serializedName: 'backendAddressPool',
        type: {
          name: 'Composite',
          className: 'ApplicationGatewayBackendAddressPool',
        },
      },
      backendHealthHttpSettings: {
        serializedName: 'backendHealthHttpSettings',
        type: {
          name: 'Composite',
          className: 'ApplicationGatewayBackendHealthHttpSettings',
        },
      },
    },
  },
};

export const ApplicationGatewayPrivateLinkResourceListResult: msRest.CompositeMapper =
  {
    type: {
      name: 'Composite',
      className: 'ApplicationGatewayPrivateLinkResourceListResult',
      modelProperties: {
        value: {
          serializedName: 'value',
          type: {
            name: 'Sequence',
            element: {
              type: {
                name: 'Composite',
                className: 'ApplicationGatewayPrivateLinkResource',
              },
            },
          },
        },
        nextLink: {
          serializedName: 'nextLink',
          type: {
            name: 'String',
          },
        },
      },
    },
  };

export const ApplicationGatewayPrivateEndpointConnectionListResult: msRest.CompositeMapper =
  {
    type: {
      name: 'Composite',
      className: 'ApplicationGatewayPrivateEndpointConnectionListResult',
      modelProperties: {
        value: {
          serializedName: 'value',
          type: {
            name: 'Sequence',
            element: {
              type: {
                name: 'Composite',
                className: 'ApplicationGatewayPrivateEndpointConnection',
              },
            },
          },
        },
        nextLink: {
          serializedName: 'nextLink',
          type: {
            name: 'String',
          },
        },
      },
    },
  };

export const ErrorModel: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ErrorModel',
    modelProperties: {
      code: {
        serializedName: 'code',
        type: {
          name: 'String',
        },
      },
      message: {
        serializedName: 'message',
        type: {
          name: 'String',
        },
      },
      target: {
        serializedName: 'target',
        type: {
          name: 'String',
        },
      },
      details: {
        serializedName: 'details',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'ErrorDetails',
            },
          },
        },
      },
      innerError: {
        serializedName: 'innerError',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const ErrorDetails: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ErrorDetails',
    modelProperties: {
      code: {
        serializedName: 'code',
        type: {
          name: 'String',
        },
      },
      target: {
        serializedName: 'target',
        type: {
          name: 'String',
        },
      },
      message: {
        serializedName: 'message',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const ApplicationGatewayAvailableWafRuleSetsResult: msRest.CompositeMapper =
  {
    type: {
      name: 'Composite',
      className: 'ApplicationGatewayAvailableWafRuleSetsResult',
      modelProperties: {
        value: {
          serializedName: 'value',
          type: {
            name: 'Sequence',
            element: {
              type: {
                name: 'Composite',
                className: 'ApplicationGatewayFirewallRuleSet',
              },
            },
          },
        },
      },
    },
  };

export const ApplicationGatewayFirewallRuleGroup: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ApplicationGatewayFirewallRuleGroup',
    modelProperties: {
      ruleGroupName: {
        serializedName: 'ruleGroupName',
        required: true,
        type: {
          name: 'String',
        },
      },
      description: {
        serializedName: 'description',
        type: {
          name: 'String',
        },
      },
      rules: {
        serializedName: 'rules',
        required: true,
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'ApplicationGatewayFirewallRule',
            },
          },
        },
      },
    },
  },
};

export const ApplicationGatewayFirewallRule: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ApplicationGatewayFirewallRule',
    modelProperties: {
      ruleId: {
        serializedName: 'ruleId',
        required: true,
        type: {
          name: 'Number',
        },
      },
      ruleIdString: {
        serializedName: 'ruleIdString',
        type: {
          name: 'String',
        },
      },
      state: {
        serializedName: 'state',
        type: {
          name: 'String',
        },
      },
      action: {
        serializedName: 'action',
        type: {
          name: 'String',
        },
      },
      description: {
        serializedName: 'description',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const ApplicationGatewayAvailableSslPredefinedPolicies: msRest.CompositeMapper =
  {
    type: {
      name: 'Composite',
      className: 'ApplicationGatewayAvailableSslPredefinedPolicies',
      modelProperties: {
        value: {
          serializedName: 'value',
          type: {
            name: 'Sequence',
            element: {
              type: {
                name: 'Composite',
                className: 'ApplicationGatewaySslPredefinedPolicy',
              },
            },
          },
        },
        nextLink: {
          serializedName: 'nextLink',
          type: {
            name: 'String',
          },
        },
      },
    },
  };

export const ApplicationGatewayWafDynamicManifestResult: msRest.CompositeMapper =
  {
    type: {
      name: 'Composite',
      className: 'ApplicationGatewayWafDynamicManifestResult',
      modelProperties: {
        id: {
          serializedName: 'id',
          type: {
            name: 'String',
          },
        },
        name: {
          serializedName: 'name',
          readOnly: true,
          type: {
            name: 'String',
          },
        },
        type: {
          serializedName: 'type',
          readOnly: true,
          type: {
            name: 'String',
          },
        },
        availableRuleSets: {
          serializedName: 'properties.availableRuleSets',
          type: {
            name: 'Sequence',
            element: {
              type: {
                name: 'Composite',
                className: 'ApplicationGatewayFirewallManifestRuleSet',
              },
            },
          },
        },
        ruleSetType: {
          serializedName: 'properties.defaultRuleSet.ruleSetType',
          type: {
            name: 'String',
          },
        },
        ruleSetVersion: {
          serializedName: 'properties.defaultRuleSet.ruleSetVersion',
          type: {
            name: 'String',
          },
        },
      },
    },
  };

export const ApplicationGatewayFirewallManifestRuleSet: msRest.CompositeMapper =
  {
    type: {
      name: 'Composite',
      className: 'ApplicationGatewayFirewallManifestRuleSet',
      modelProperties: {
        ruleSetType: {
          serializedName: 'ruleSetType',
          required: true,
          type: {
            name: 'String',
          },
        },
        ruleSetVersion: {
          serializedName: 'ruleSetVersion',
          required: true,
          type: {
            name: 'String',
          },
        },
        status: {
          serializedName: 'status',
          type: {
            name: 'String',
          },
        },
        tiers: {
          serializedName: 'tiers',
          type: {
            name: 'Sequence',
            element: {
              type: {
                name: 'String',
              },
            },
          },
        },
        ruleGroups: {
          serializedName: 'ruleGroups',
          required: true,
          type: {
            name: 'Sequence',
            element: {
              type: {
                name: 'Composite',
                className: 'ApplicationGatewayFirewallRuleGroup',
              },
            },
          },
        },
      },
    },
  };

export const ApplicationGatewayWafDynamicManifestResultList: msRest.CompositeMapper =
  {
    type: {
      name: 'Composite',
      className: 'ApplicationGatewayWafDynamicManifestResultList',
      modelProperties: {
        value: {
          serializedName: 'value',
          type: {
            name: 'Sequence',
            element: {
              type: {
                name: 'Composite',
                className: 'ApplicationGatewayWafDynamicManifestResult',
              },
            },
          },
        },
        nextLink: {
          serializedName: 'nextLink',
          type: {
            name: 'String',
          },
        },
      },
    },
  };

export const ApplicationSecurityGroupListResult: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ApplicationSecurityGroupListResult',
    modelProperties: {
      value: {
        serializedName: 'value',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'ApplicationSecurityGroup',
            },
          },
        },
      },
      nextLink: {
        serializedName: 'nextLink',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const AvailableDelegationsResult: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'AvailableDelegationsResult',
    modelProperties: {
      value: {
        serializedName: 'value',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'AvailableDelegation',
            },
          },
        },
      },
      nextLink: {
        serializedName: 'nextLink',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const AvailableDelegation: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'AvailableDelegation',
    modelProperties: {
      name: {
        serializedName: 'name',
        type: {
          name: 'String',
        },
      },
      id: {
        serializedName: 'id',
        type: {
          name: 'String',
        },
      },
      type: {
        serializedName: 'type',
        type: {
          name: 'String',
        },
      },
      serviceName: {
        serializedName: 'serviceName',
        type: {
          name: 'String',
        },
      },
      actions: {
        serializedName: 'actions',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
    },
  },
};

export const AvailableServiceAliasesResult: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'AvailableServiceAliasesResult',
    modelProperties: {
      value: {
        serializedName: 'value',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'AvailableServiceAlias',
            },
          },
        },
      },
      nextLink: {
        serializedName: 'nextLink',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const AvailableServiceAlias: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'AvailableServiceAlias',
    modelProperties: {
      name: {
        serializedName: 'name',
        type: {
          name: 'String',
        },
      },
      id: {
        serializedName: 'id',
        type: {
          name: 'String',
        },
      },
      type: {
        serializedName: 'type',
        type: {
          name: 'String',
        },
      },
      resourceName: {
        serializedName: 'resourceName',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const AzureFirewallRCAction: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'AzureFirewallRCAction',
    modelProperties: {
      type: {
        serializedName: 'type',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const AzureFirewallApplicationRule: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'AzureFirewallApplicationRule',
    modelProperties: {
      name: {
        serializedName: 'name',
        type: {
          name: 'String',
        },
      },
      description: {
        serializedName: 'description',
        type: {
          name: 'String',
        },
      },
      sourceAddresses: {
        serializedName: 'sourceAddresses',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
      protocols: {
        serializedName: 'protocols',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'AzureFirewallApplicationRuleProtocol',
            },
          },
        },
      },
      targetFqdns: {
        serializedName: 'targetFqdns',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
      fqdnTags: {
        serializedName: 'fqdnTags',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
      sourceIpGroups: {
        serializedName: 'sourceIpGroups',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
    },
  },
};

export const AzureFirewallApplicationRuleProtocol: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'AzureFirewallApplicationRuleProtocol',
    modelProperties: {
      protocolType: {
        serializedName: 'protocolType',
        type: {
          name: 'String',
        },
      },
      port: {
        constraints: {
          InclusiveMaximum: 64000,
          InclusiveMinimum: 0,
        },
        serializedName: 'port',
        type: {
          name: 'Number',
        },
      },
    },
  },
};

export const AzureFirewallNatRCAction: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'AzureFirewallNatRCAction',
    modelProperties: {
      type: {
        serializedName: 'type',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const AzureFirewallNatRule: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'AzureFirewallNatRule',
    modelProperties: {
      name: {
        serializedName: 'name',
        type: {
          name: 'String',
        },
      },
      description: {
        serializedName: 'description',
        type: {
          name: 'String',
        },
      },
      sourceAddresses: {
        serializedName: 'sourceAddresses',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
      destinationAddresses: {
        serializedName: 'destinationAddresses',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
      destinationPorts: {
        serializedName: 'destinationPorts',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
      protocols: {
        serializedName: 'protocols',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
      translatedAddress: {
        serializedName: 'translatedAddress',
        type: {
          name: 'String',
        },
      },
      translatedPort: {
        serializedName: 'translatedPort',
        type: {
          name: 'String',
        },
      },
      translatedFqdn: {
        serializedName: 'translatedFqdn',
        type: {
          name: 'String',
        },
      },
      sourceIpGroups: {
        serializedName: 'sourceIpGroups',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
    },
  },
};

export const AzureFirewallNetworkRule: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'AzureFirewallNetworkRule',
    modelProperties: {
      name: {
        serializedName: 'name',
        type: {
          name: 'String',
        },
      },
      description: {
        serializedName: 'description',
        type: {
          name: 'String',
        },
      },
      protocols: {
        serializedName: 'protocols',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
      sourceAddresses: {
        serializedName: 'sourceAddresses',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
      destinationAddresses: {
        serializedName: 'destinationAddresses',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
      destinationPorts: {
        serializedName: 'destinationPorts',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
      destinationFqdns: {
        serializedName: 'destinationFqdns',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
      sourceIpGroups: {
        serializedName: 'sourceIpGroups',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
      destinationIpGroups: {
        serializedName: 'destinationIpGroups',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
    },
  },
};

export const HubIPAddresses: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'HubIPAddresses',
    modelProperties: {
      publicIPs: {
        serializedName: 'publicIPs',
        type: {
          name: 'Composite',
          className: 'HubPublicIPAddresses',
        },
      },
      privateIPAddress: {
        serializedName: 'privateIPAddress',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const HubPublicIPAddresses: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'HubPublicIPAddresses',
    modelProperties: {
      addresses: {
        serializedName: 'addresses',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'AzureFirewallPublicIPAddress',
            },
          },
        },
      },
      count: {
        serializedName: 'count',
        type: {
          name: 'Number',
        },
      },
    },
  },
};

export const AzureFirewallPublicIPAddress: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'AzureFirewallPublicIPAddress',
    modelProperties: {
      address: {
        serializedName: 'address',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const AzureFirewallIpGroups: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'AzureFirewallIpGroups',
    modelProperties: {
      id: {
        serializedName: 'id',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      changeNumber: {
        serializedName: 'changeNumber',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const AzureFirewallSku: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'AzureFirewallSku',
    modelProperties: {
      name: {
        serializedName: 'name',
        type: {
          name: 'String',
        },
      },
      tier: {
        serializedName: 'tier',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const AzureFirewallListResult: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'AzureFirewallListResult',
    modelProperties: {
      value: {
        serializedName: 'value',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'AzureFirewall',
            },
          },
        },
      },
      nextLink: {
        serializedName: 'nextLink',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const IPPrefixesList: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'IPPrefixesList',
    modelProperties: {
      ipPrefixes: {
        serializedName: 'ipPrefixes',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
    },
  },
};

export const AzureFirewallPacketCaptureFlags: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'AzureFirewallPacketCaptureFlags',
    modelProperties: {
      type: {
        serializedName: 'type',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const AzureFirewallPacketCaptureRule: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'AzureFirewallPacketCaptureRule',
    modelProperties: {
      sources: {
        serializedName: 'sources',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
      destinations: {
        serializedName: 'destinations',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
      destinationPorts: {
        serializedName: 'destinationPorts',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
    },
  },
};

export const AzureFirewallFqdnTagListResult: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'AzureFirewallFqdnTagListResult',
    modelProperties: {
      value: {
        serializedName: 'value',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'AzureFirewallFqdnTag',
            },
          },
        },
      },
      nextLink: {
        serializedName: 'nextLink',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const AzureWebCategory: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'AzureWebCategory',
    modelProperties: {
      id: {
        serializedName: 'id',
        type: {
          name: 'String',
        },
      },
      name: {
        serializedName: 'name',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      type: {
        serializedName: 'type',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      etag: {
        serializedName: 'etag',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      group: {
        serializedName: 'properties.group',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const AzureWebCategoryListResult: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'AzureWebCategoryListResult',
    modelProperties: {
      value: {
        serializedName: 'value',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'AzureWebCategory',
            },
          },
        },
      },
      nextLink: {
        serializedName: 'nextLink',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const Sku: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'Sku',
    modelProperties: {
      name: {
        defaultValue: 'Standard',
        serializedName: 'name',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const BastionHostListResult: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'BastionHostListResult',
    modelProperties: {
      value: {
        serializedName: 'value',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'BastionHost',
            },
          },
        },
      },
      nextLink: {
        serializedName: 'nextLink',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const BastionShareableLinkListRequest: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'BastionShareableLinkListRequest',
    modelProperties: {
      vms: {
        serializedName: 'vms',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'BastionShareableLink',
            },
          },
        },
      },
    },
  },
};

export const BastionShareableLink: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'BastionShareableLink',
    modelProperties: {
      vm: {
        serializedName: 'vm',
        type: {
          name: 'Composite',
          className: 'Vm',
        },
      },
      bsl: {
        serializedName: 'bsl',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      createdAt: {
        serializedName: 'createdAt',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      message: {
        serializedName: 'message',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const BastionShareableLinkListResult: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'BastionShareableLinkListResult',
    modelProperties: {
      value: {
        serializedName: 'value',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'BastionShareableLink',
            },
          },
        },
      },
      nextLink: {
        serializedName: 'nextLink',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const BastionActiveSessionListResult: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'BastionActiveSessionListResult',
    modelProperties: {
      value: {
        serializedName: 'value',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'BastionActiveSession',
            },
          },
        },
      },
      nextLink: {
        serializedName: 'nextLink',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const BastionActiveSession: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'BastionActiveSession',
    modelProperties: {
      sessionId: {
        serializedName: 'sessionId',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      startTime: {
        serializedName: 'startTime',
        readOnly: true,
        type: {
          name: 'Dictionary',
          value: { type: { name: 'any' } },
        },
      },
      targetSubscriptionId: {
        serializedName: 'targetSubscriptionId',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      resourceType: {
        serializedName: 'resourceType',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      targetHostName: {
        serializedName: 'targetHostName',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      targetResourceGroup: {
        serializedName: 'targetResourceGroup',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      userName: {
        serializedName: 'userName',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      targetIpAddress: {
        serializedName: 'targetIpAddress',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      protocol: {
        serializedName: 'protocol',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      targetResourceId: {
        serializedName: 'targetResourceId',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      sessionDurationInMins: {
        serializedName: 'sessionDurationInMins',
        readOnly: true,
        type: {
          name: 'Number',
        },
      },
    },
  },
};

export const SessionIds: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'SessionIds',
    modelProperties: {
      sessionIds: {
        serializedName: 'sessionIds',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
    },
  },
};

export const BastionSessionDeleteResult: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'BastionSessionDeleteResult',
    modelProperties: {
      value: {
        serializedName: 'value',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'BastionSessionState',
            },
          },
        },
      },
      nextLink: {
        serializedName: 'nextLink',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const BastionSessionState: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'BastionSessionState',
    modelProperties: {
      sessionId: {
        serializedName: 'sessionId',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      message: {
        serializedName: 'message',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      state: {
        serializedName: 'state',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const DnsNameAvailabilityResult: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'DnsNameAvailabilityResult',
    modelProperties: {
      available: {
        serializedName: 'available',
        type: {
          name: 'Boolean',
        },
      },
    },
  },
};

export const NetworkInterfaceListResult: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'NetworkInterfaceListResult',
    modelProperties: {
      value: {
        serializedName: 'value',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'NetworkInterface',
            },
          },
        },
      },
      nextLink: {
        serializedName: 'nextLink',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const PublicIPAddressListResult: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'PublicIPAddressListResult',
    modelProperties: {
      value: {
        serializedName: 'value',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'PublicIPAddress',
            },
          },
        },
      },
      nextLink: {
        serializedName: 'nextLink',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const SwapResource: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'SwapResource',
    modelProperties: {
      id: {
        serializedName: 'id',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      name: {
        serializedName: 'name',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      type: {
        serializedName: 'type',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      properties: {
        serializedName: 'properties',
        type: {
          name: 'Composite',
          className: 'SwapResourceProperties',
        },
      },
    },
  },
};

export const SwapResourceProperties: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'SwapResourceProperties',
    modelProperties: {
      slotType: {
        serializedName: 'slotType',
        type: {
          name: 'Enum',
          allowedValues: ['Production', 'Staging'],
        },
      },
    },
  },
};

export const SwapResourceListResult: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'SwapResourceListResult',
    modelProperties: {
      value: {
        serializedName: 'value',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'SwapResource',
            },
          },
        },
      },
    },
  },
};

export const CustomIpPrefixListResult: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'CustomIpPrefixListResult',
    modelProperties: {
      value: {
        serializedName: 'value',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'CustomIpPrefix',
            },
          },
        },
      },
      nextLink: {
        serializedName: 'nextLink',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const DdosProtectionPlan: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'DdosProtectionPlan',
    modelProperties: {
      id: {
        serializedName: 'id',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      name: {
        serializedName: 'name',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      type: {
        serializedName: 'type',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      location: {
        serializedName: 'location',
        type: {
          name: 'String',
        },
      },
      tags: {
        serializedName: 'tags',
        type: {
          name: 'Dictionary',
          value: { type: { name: 'String' } },
        },
      },
      etag: {
        serializedName: 'etag',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      resourceGuid: {
        serializedName: 'properties.resourceGuid',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      provisioningState: {
        serializedName: 'properties.provisioningState',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      publicIPAddresses: {
        serializedName: 'properties.publicIPAddresses',
        readOnly: true,
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'SubResource',
            },
          },
        },
      },
      virtualNetworks: {
        serializedName: 'properties.virtualNetworks',
        readOnly: true,
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'SubResource',
            },
          },
        },
      },
    },
  },
};

export const DdosProtectionPlanListResult: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'DdosProtectionPlanListResult',
    modelProperties: {
      value: {
        serializedName: 'value',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'DdosProtectionPlan',
            },
          },
        },
      },
      nextLink: {
        serializedName: 'nextLink',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const QosIpRange: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'QosIpRange',
    modelProperties: {
      startIP: {
        serializedName: 'startIP',
        type: {
          name: 'String',
        },
      },
      endIP: {
        serializedName: 'endIP',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const QosPortRange: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'QosPortRange',
    modelProperties: {
      start: {
        serializedName: 'start',
        type: {
          name: 'Number',
        },
      },
      end: {
        serializedName: 'end',
        type: {
          name: 'Number',
        },
      },
    },
  },
};

export const QosDefinition: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'QosDefinition',
    modelProperties: {
      markings: {
        serializedName: 'markings',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Number',
            },
          },
        },
      },
      sourceIpRanges: {
        serializedName: 'sourceIpRanges',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'QosIpRange',
            },
          },
        },
      },
      destinationIpRanges: {
        serializedName: 'destinationIpRanges',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'QosIpRange',
            },
          },
        },
      },
      sourcePortRanges: {
        serializedName: 'sourcePortRanges',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'QosPortRange',
            },
          },
        },
      },
      destinationPortRanges: {
        serializedName: 'destinationPortRanges',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'QosPortRange',
            },
          },
        },
      },
      protocol: {
        serializedName: 'protocol',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const DscpConfigurationListResult: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'DscpConfigurationListResult',
    modelProperties: {
      value: {
        serializedName: 'value',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'DscpConfiguration',
            },
          },
        },
      },
      nextLink: {
        serializedName: 'nextLink',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const EndpointServicesListResult: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'EndpointServicesListResult',
    modelProperties: {
      value: {
        serializedName: 'value',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'EndpointServiceResult',
            },
          },
        },
      },
      nextLink: {
        serializedName: 'nextLink',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const AuthorizationListResult: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'AuthorizationListResult',
    modelProperties: {
      value: {
        serializedName: 'value',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'ExpressRouteCircuitAuthorization',
            },
          },
        },
      },
      nextLink: {
        serializedName: 'nextLink',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const ExpressRouteCircuitPeeringConfig: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ExpressRouteCircuitPeeringConfig',
    modelProperties: {
      advertisedPublicPrefixes: {
        serializedName: 'advertisedPublicPrefixes',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
      advertisedCommunities: {
        serializedName: 'advertisedCommunities',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
      advertisedPublicPrefixesState: {
        serializedName: 'advertisedPublicPrefixesState',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      legacyMode: {
        serializedName: 'legacyMode',
        type: {
          name: 'Number',
        },
      },
      customerASN: {
        serializedName: 'customerASN',
        type: {
          name: 'Number',
        },
      },
      routingRegistryName: {
        serializedName: 'routingRegistryName',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const ExpressRouteCircuitStats: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ExpressRouteCircuitStats',
    modelProperties: {
      primarybytesIn: {
        serializedName: 'primarybytesIn',
        type: {
          name: 'Number',
        },
      },
      primarybytesOut: {
        serializedName: 'primarybytesOut',
        type: {
          name: 'Number',
        },
      },
      secondarybytesIn: {
        serializedName: 'secondarybytesIn',
        type: {
          name: 'Number',
        },
      },
      secondarybytesOut: {
        serializedName: 'secondarybytesOut',
        type: {
          name: 'Number',
        },
      },
    },
  },
};

export const Ipv6ExpressRouteCircuitPeeringConfig: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'Ipv6ExpressRouteCircuitPeeringConfig',
    modelProperties: {
      primaryPeerAddressPrefix: {
        serializedName: 'primaryPeerAddressPrefix',
        type: {
          name: 'String',
        },
      },
      secondaryPeerAddressPrefix: {
        serializedName: 'secondaryPeerAddressPrefix',
        type: {
          name: 'String',
        },
      },
      microsoftPeeringConfig: {
        serializedName: 'microsoftPeeringConfig',
        type: {
          name: 'Composite',
          className: 'ExpressRouteCircuitPeeringConfig',
        },
      },
      routeFilter: {
        serializedName: 'routeFilter',
        type: {
          name: 'Composite',
          className: 'SubResource',
        },
      },
      state: {
        serializedName: 'state',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const ExpressRouteConnectionId: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ExpressRouteConnectionId',
    modelProperties: {
      id: {
        serializedName: 'id',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const Ipv6CircuitConnectionConfig: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'Ipv6CircuitConnectionConfig',
    modelProperties: {
      addressPrefix: {
        serializedName: 'addressPrefix',
        type: {
          name: 'String',
        },
      },
      circuitConnectionStatus: {
        serializedName: 'circuitConnectionStatus',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const ExpressRouteCircuitPeeringListResult: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ExpressRouteCircuitPeeringListResult',
    modelProperties: {
      value: {
        serializedName: 'value',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'ExpressRouteCircuitPeering',
            },
          },
        },
      },
      nextLink: {
        serializedName: 'nextLink',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const ExpressRouteCircuitConnectionListResult: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ExpressRouteCircuitConnectionListResult',
    modelProperties: {
      value: {
        serializedName: 'value',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'ExpressRouteCircuitConnection',
            },
          },
        },
      },
      nextLink: {
        serializedName: 'nextLink',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const PeerExpressRouteCircuitConnectionListResult: msRest.CompositeMapper =
  {
    type: {
      name: 'Composite',
      className: 'PeerExpressRouteCircuitConnectionListResult',
      modelProperties: {
        value: {
          serializedName: 'value',
          type: {
            name: 'Sequence',
            element: {
              type: {
                name: 'Composite',
                className: 'PeerExpressRouteCircuitConnection',
              },
            },
          },
        },
        nextLink: {
          serializedName: 'nextLink',
          type: {
            name: 'String',
          },
        },
      },
    },
  };

export const ExpressRouteCircuitSku: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ExpressRouteCircuitSku',
    modelProperties: {
      name: {
        serializedName: 'name',
        type: {
          name: 'String',
        },
      },
      tier: {
        serializedName: 'tier',
        type: {
          name: 'String',
        },
      },
      family: {
        serializedName: 'family',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const ExpressRouteCircuitServiceProviderProperties: msRest.CompositeMapper =
  {
    type: {
      name: 'Composite',
      className: 'ExpressRouteCircuitServiceProviderProperties',
      modelProperties: {
        serviceProviderName: {
          serializedName: 'serviceProviderName',
          type: {
            name: 'String',
          },
        },
        peeringLocation: {
          serializedName: 'peeringLocation',
          type: {
            name: 'String',
          },
        },
        bandwidthInMbps: {
          serializedName: 'bandwidthInMbps',
          type: {
            name: 'Number',
          },
        },
      },
    },
  };

export const ExpressRouteCircuitsArpTableListResult: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ExpressRouteCircuitsArpTableListResult',
    modelProperties: {
      value: {
        serializedName: 'value',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'ExpressRouteCircuitArpTable',
            },
          },
        },
      },
      nextLink: {
        serializedName: 'nextLink',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const ExpressRouteCircuitArpTable: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ExpressRouteCircuitArpTable',
    modelProperties: {
      age: {
        serializedName: 'age',
        type: {
          name: 'Number',
        },
      },
      interface: {
        serializedName: 'interface',
        type: {
          name: 'String',
        },
      },
      ipAddress: {
        serializedName: 'ipAddress',
        type: {
          name: 'String',
        },
      },
      macAddress: {
        serializedName: 'macAddress',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const ExpressRouteCircuitsRoutesTableListResult: msRest.CompositeMapper =
  {
    type: {
      name: 'Composite',
      className: 'ExpressRouteCircuitsRoutesTableListResult',
      modelProperties: {
        value: {
          serializedName: 'value',
          type: {
            name: 'Sequence',
            element: {
              type: {
                name: 'Composite',
                className: 'ExpressRouteCircuitRoutesTable',
              },
            },
          },
        },
        nextLink: {
          serializedName: 'nextLink',
          type: {
            name: 'String',
          },
        },
      },
    },
  };

export const ExpressRouteCircuitRoutesTable: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ExpressRouteCircuitRoutesTable',
    modelProperties: {
      network: {
        serializedName: 'network',
        type: {
          name: 'String',
        },
      },
      nextHop: {
        serializedName: 'nextHop',
        type: {
          name: 'String',
        },
      },
      locPrf: {
        serializedName: 'locPrf',
        type: {
          name: 'String',
        },
      },
      weight: {
        serializedName: 'weight',
        type: {
          name: 'Number',
        },
      },
      path: {
        serializedName: 'path',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const ExpressRouteCircuitsRoutesTableSummaryListResult: msRest.CompositeMapper =
  {
    type: {
      name: 'Composite',
      className: 'ExpressRouteCircuitsRoutesTableSummaryListResult',
      modelProperties: {
        value: {
          serializedName: 'value',
          type: {
            name: 'Sequence',
            element: {
              type: {
                name: 'Composite',
                className: 'ExpressRouteCircuitRoutesTableSummary',
              },
            },
          },
        },
        nextLink: {
          serializedName: 'nextLink',
          type: {
            name: 'String',
          },
        },
      },
    },
  };

export const ExpressRouteCircuitRoutesTableSummary: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ExpressRouteCircuitRoutesTableSummary',
    modelProperties: {
      neighbor: {
        serializedName: 'neighbor',
        type: {
          name: 'String',
        },
      },
      v: {
        serializedName: 'v',
        type: {
          name: 'Number',
        },
      },
      as: {
        serializedName: 'as',
        type: {
          name: 'Number',
        },
      },
      upDown: {
        serializedName: 'upDown',
        type: {
          name: 'String',
        },
      },
      statePfxRcd: {
        serializedName: 'statePfxRcd',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const ExpressRouteCircuitListResult: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ExpressRouteCircuitListResult',
    modelProperties: {
      value: {
        serializedName: 'value',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'ExpressRouteCircuit',
            },
          },
        },
      },
      nextLink: {
        serializedName: 'nextLink',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const ExpressRouteServiceProviderListResult: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ExpressRouteServiceProviderListResult',
    modelProperties: {
      value: {
        serializedName: 'value',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'ExpressRouteServiceProvider',
            },
          },
        },
      },
      nextLink: {
        serializedName: 'nextLink',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const ExpressRouteServiceProviderBandwidthsOffered: msRest.CompositeMapper =
  {
    type: {
      name: 'Composite',
      className: 'ExpressRouteServiceProviderBandwidthsOffered',
      modelProperties: {
        offerName: {
          serializedName: 'offerName',
          type: {
            name: 'String',
          },
        },
        valueInMbps: {
          serializedName: 'valueInMbps',
          type: {
            name: 'Number',
          },
        },
      },
    },
  };

export const ExpressRouteCrossConnectionListResult: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ExpressRouteCrossConnectionListResult',
    modelProperties: {
      value: {
        serializedName: 'value',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'ExpressRouteCrossConnection',
            },
          },
        },
      },
      nextLink: {
        serializedName: 'nextLink',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const ExpressRouteCircuitReference: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ExpressRouteCircuitReference',
    modelProperties: {
      id: {
        serializedName: 'id',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const ExpressRouteCrossConnectionPeeringList: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ExpressRouteCrossConnectionPeeringList',
    modelProperties: {
      value: {
        serializedName: 'value',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'ExpressRouteCrossConnectionPeering',
            },
          },
        },
      },
      nextLink: {
        serializedName: 'nextLink',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const ExpressRouteCrossConnectionsRoutesTableSummaryListResult: msRest.CompositeMapper =
  {
    type: {
      name: 'Composite',
      className: 'ExpressRouteCrossConnectionsRoutesTableSummaryListResult',
      modelProperties: {
        value: {
          serializedName: 'value',
          type: {
            name: 'Sequence',
            element: {
              type: {
                name: 'Composite',
                className: 'ExpressRouteCrossConnectionRoutesTableSummary',
              },
            },
          },
        },
        nextLink: {
          serializedName: 'nextLink',
          readOnly: true,
          type: {
            name: 'String',
          },
        },
      },
    },
  };

export const ExpressRouteCrossConnectionRoutesTableSummary: msRest.CompositeMapper =
  {
    type: {
      name: 'Composite',
      className: 'ExpressRouteCrossConnectionRoutesTableSummary',
      modelProperties: {
        neighbor: {
          serializedName: 'neighbor',
          type: {
            name: 'String',
          },
        },
        asn: {
          serializedName: 'asn',
          type: {
            name: 'Number',
          },
        },
        upDown: {
          serializedName: 'upDown',
          type: {
            name: 'String',
          },
        },
        stateOrPrefixesReceived: {
          serializedName: 'stateOrPrefixesReceived',
          type: {
            name: 'String',
          },
        },
      },
    },
  };

export const ExpressRoutePortsLocationListResult: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ExpressRoutePortsLocationListResult',
    modelProperties: {
      value: {
        serializedName: 'value',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'ExpressRoutePortsLocation',
            },
          },
        },
      },
      nextLink: {
        serializedName: 'nextLink',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const ExpressRoutePortsLocationBandwidths: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ExpressRoutePortsLocationBandwidths',
    modelProperties: {
      offerName: {
        serializedName: 'offerName',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      valueInGbps: {
        serializedName: 'valueInGbps',
        readOnly: true,
        type: {
          name: 'Number',
        },
      },
    },
  },
};

export const ExpressRouteLinkMacSecConfig: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ExpressRouteLinkMacSecConfig',
    modelProperties: {
      cknSecretIdentifier: {
        serializedName: 'cknSecretIdentifier',
        type: {
          name: 'String',
        },
      },
      cakSecretIdentifier: {
        serializedName: 'cakSecretIdentifier',
        type: {
          name: 'String',
        },
      },
      cipher: {
        serializedName: 'cipher',
        type: {
          name: 'String',
        },
      },
      sciState: {
        serializedName: 'sciState',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const ExpressRoutePortListResult: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ExpressRoutePortListResult',
    modelProperties: {
      value: {
        serializedName: 'value',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'ExpressRoutePort',
            },
          },
        },
      },
      nextLink: {
        serializedName: 'nextLink',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const ExpressRouteLinkListResult: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ExpressRouteLinkListResult',
    modelProperties: {
      value: {
        serializedName: 'value',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'ExpressRouteLink',
            },
          },
        },
      },
      nextLink: {
        serializedName: 'nextLink',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const GenerateExpressRoutePortsLOARequest: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'GenerateExpressRoutePortsLOARequest',
    modelProperties: {
      customerName: {
        serializedName: 'customerName',
        required: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const GenerateExpressRoutePortsLOAResult: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'GenerateExpressRoutePortsLOAResult',
    modelProperties: {
      encodedContent: {
        serializedName: 'encodedContent',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const ExpressRoutePortAuthorizationListResult: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ExpressRoutePortAuthorizationListResult',
    modelProperties: {
      value: {
        serializedName: 'value',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'ExpressRoutePortAuthorization',
            },
          },
        },
      },
      nextLink: {
        serializedName: 'nextLink',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const ExpressRouteProviderPortListResult: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ExpressRouteProviderPortListResult',
    modelProperties: {
      value: {
        serializedName: 'value',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'ExpressRouteProviderPort',
            },
          },
        },
      },
      nextLink: {
        serializedName: 'nextLink',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const FirewallPolicyThreatIntelWhitelist: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'FirewallPolicyThreatIntelWhitelist',
    modelProperties: {
      ipAddresses: {
        serializedName: 'ipAddresses',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
      fqdns: {
        serializedName: 'fqdns',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
    },
  },
};

export const FirewallPolicyInsights: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'FirewallPolicyInsights',
    modelProperties: {
      isEnabled: {
        serializedName: 'isEnabled',
        type: {
          name: 'Boolean',
        },
      },
      retentionDays: {
        serializedName: 'retentionDays',
        type: {
          name: 'Number',
        },
      },
      logAnalyticsResources: {
        serializedName: 'logAnalyticsResources',
        type: {
          name: 'Composite',
          className: 'FirewallPolicyLogAnalyticsResources',
        },
      },
    },
  },
};

export const FirewallPolicyLogAnalyticsResources: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'FirewallPolicyLogAnalyticsResources',
    modelProperties: {
      workspaces: {
        serializedName: 'workspaces',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'FirewallPolicyLogAnalyticsWorkspace',
            },
          },
        },
      },
      defaultWorkspaceId: {
        serializedName: 'defaultWorkspaceId',
        type: {
          name: 'Composite',
          className: 'SubResource',
        },
      },
    },
  },
};

export const FirewallPolicyLogAnalyticsWorkspace: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'FirewallPolicyLogAnalyticsWorkspace',
    modelProperties: {
      region: {
        serializedName: 'region',
        type: {
          name: 'String',
        },
      },
      workspaceId: {
        serializedName: 'workspaceId',
        type: {
          name: 'Composite',
          className: 'SubResource',
        },
      },
    },
  },
};

export const FirewallPolicySnat: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'FirewallPolicySnat',
    modelProperties: {
      privateRanges: {
        serializedName: 'privateRanges',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
      autoLearnPrivateRanges: {
        serializedName: 'autoLearnPrivateRanges',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const FirewallPolicySQL: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'FirewallPolicySQL',
    modelProperties: {
      allowSqlRedirect: {
        serializedName: 'allowSqlRedirect',
        type: {
          name: 'Boolean',
        },
      },
    },
  },
};

export const DnsSettings: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'DnsSettings',
    modelProperties: {
      servers: {
        serializedName: 'servers',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
      enableProxy: {
        serializedName: 'enableProxy',
        type: {
          name: 'Boolean',
        },
      },
      requireProxyForNetworkRules: {
        serializedName: 'requireProxyForNetworkRules',
        nullable: true,
        type: {
          name: 'Boolean',
        },
      },
    },
  },
};

export const ExplicitProxy: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ExplicitProxy',
    modelProperties: {
      enableExplicitProxy: {
        serializedName: 'enableExplicitProxy',
        nullable: true,
        type: {
          name: 'Boolean',
        },
      },
      httpPort: {
        constraints: {
          InclusiveMaximum: 64000,
          InclusiveMinimum: 0,
        },
        serializedName: 'httpPort',
        type: {
          name: 'Number',
        },
      },
      httpsPort: {
        constraints: {
          InclusiveMaximum: 64000,
          InclusiveMinimum: 0,
        },
        serializedName: 'httpsPort',
        type: {
          name: 'Number',
        },
      },
      enablePacFile: {
        serializedName: 'enablePacFile',
        nullable: true,
        type: {
          name: 'Boolean',
        },
      },
      pacFilePort: {
        constraints: {
          InclusiveMaximum: 64000,
          InclusiveMinimum: 0,
        },
        serializedName: 'pacFilePort',
        type: {
          name: 'Number',
        },
      },
      pacFile: {
        serializedName: 'pacFile',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const FirewallPolicyIntrusionDetection: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'FirewallPolicyIntrusionDetection',
    modelProperties: {
      mode: {
        serializedName: 'mode',
        type: {
          name: 'String',
        },
      },
      configuration: {
        serializedName: 'configuration',
        type: {
          name: 'Composite',
          className: 'FirewallPolicyIntrusionDetectionConfiguration',
        },
      },
    },
  },
};

export const FirewallPolicyIntrusionDetectionConfiguration: msRest.CompositeMapper =
  {
    type: {
      name: 'Composite',
      className: 'FirewallPolicyIntrusionDetectionConfiguration',
      modelProperties: {
        signatureOverrides: {
          serializedName: 'signatureOverrides',
          type: {
            name: 'Sequence',
            element: {
              type: {
                name: 'Composite',
                className:
                  'FirewallPolicyIntrusionDetectionSignatureSpecification',
              },
            },
          },
        },
        bypassTrafficSettings: {
          serializedName: 'bypassTrafficSettings',
          type: {
            name: 'Sequence',
            element: {
              type: {
                name: 'Composite',
                className:
                  'FirewallPolicyIntrusionDetectionBypassTrafficSpecifications',
              },
            },
          },
        },
        privateRanges: {
          serializedName: 'privateRanges',
          type: {
            name: 'Sequence',
            element: {
              type: {
                name: 'String',
              },
            },
          },
        },
      },
    },
  };

export const FirewallPolicyIntrusionDetectionSignatureSpecification: msRest.CompositeMapper =
  {
    type: {
      name: 'Composite',
      className: 'FirewallPolicyIntrusionDetectionSignatureSpecification',
      modelProperties: {
        id: {
          serializedName: 'id',
          type: {
            name: 'String',
          },
        },
        mode: {
          serializedName: 'mode',
          type: {
            name: 'String',
          },
        },
      },
    },
  };

export const FirewallPolicyIntrusionDetectionBypassTrafficSpecifications: msRest.CompositeMapper =
  {
    type: {
      name: 'Composite',
      className: 'FirewallPolicyIntrusionDetectionBypassTrafficSpecifications',
      modelProperties: {
        name: {
          serializedName: 'name',
          type: {
            name: 'String',
          },
        },
        description: {
          serializedName: 'description',
          type: {
            name: 'String',
          },
        },
        protocol: {
          serializedName: 'protocol',
          type: {
            name: 'String',
          },
        },
        sourceAddresses: {
          serializedName: 'sourceAddresses',
          type: {
            name: 'Sequence',
            element: {
              type: {
                name: 'String',
              },
            },
          },
        },
        destinationAddresses: {
          serializedName: 'destinationAddresses',
          type: {
            name: 'Sequence',
            element: {
              type: {
                name: 'String',
              },
            },
          },
        },
        destinationPorts: {
          serializedName: 'destinationPorts',
          type: {
            name: 'Sequence',
            element: {
              type: {
                name: 'String',
              },
            },
          },
        },
        sourceIpGroups: {
          serializedName: 'sourceIpGroups',
          type: {
            name: 'Sequence',
            element: {
              type: {
                name: 'String',
              },
            },
          },
        },
        destinationIpGroups: {
          serializedName: 'destinationIpGroups',
          type: {
            name: 'Sequence',
            element: {
              type: {
                name: 'String',
              },
            },
          },
        },
      },
    },
  };

export const FirewallPolicyTransportSecurity: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'FirewallPolicyTransportSecurity',
    modelProperties: {
      certificateAuthority: {
        serializedName: 'certificateAuthority',
        type: {
          name: 'Composite',
          className: 'FirewallPolicyCertificateAuthority',
        },
      },
    },
  },
};

export const FirewallPolicyCertificateAuthority: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'FirewallPolicyCertificateAuthority',
    modelProperties: {
      keyVaultSecretId: {
        serializedName: 'keyVaultSecretId',
        type: {
          name: 'String',
        },
      },
      name: {
        serializedName: 'name',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const FirewallPolicySku: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'FirewallPolicySku',
    modelProperties: {
      tier: {
        serializedName: 'tier',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const FirewallPolicyListResult: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'FirewallPolicyListResult',
    modelProperties: {
      value: {
        serializedName: 'value',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'FirewallPolicy',
            },
          },
        },
      },
      nextLink: {
        serializedName: 'nextLink',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const FirewallPolicyRuleCollection: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'FirewallPolicyRuleCollection',
    uberParent: 'FirewallPolicyRuleCollection',
    polymorphicDiscriminator: {
      serializedName: 'ruleCollectionType',
      clientName: 'ruleCollectionType',
    },
    modelProperties: {
      ruleCollectionType: {
        serializedName: 'ruleCollectionType',
        required: true,
        type: {
          name: 'String',
        },
      },
      name: {
        serializedName: 'name',
        type: {
          name: 'String',
        },
      },
      priority: {
        constraints: {
          InclusiveMaximum: 65000,
          InclusiveMinimum: 100,
        },
        serializedName: 'priority',
        type: {
          name: 'Number',
        },
      },
    },
  },
};

export const FirewallPolicyRuleCollectionGroupListResult: msRest.CompositeMapper =
  {
    type: {
      name: 'Composite',
      className: 'FirewallPolicyRuleCollectionGroupListResult',
      modelProperties: {
        value: {
          serializedName: 'value',
          type: {
            name: 'Sequence',
            element: {
              type: {
                name: 'Composite',
                className: 'FirewallPolicyRuleCollectionGroup',
              },
            },
          },
        },
        nextLink: {
          serializedName: 'nextLink',
          type: {
            name: 'String',
          },
        },
      },
    },
  };

export const IdpsQueryObject: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'IdpsQueryObject',
    modelProperties: {
      filters: {
        serializedName: 'filters',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'FilterItems',
            },
          },
        },
      },
      search: {
        serializedName: 'search',
        type: {
          name: 'String',
        },
      },
      orderBy: {
        serializedName: 'orderBy',
        type: {
          name: 'Composite',
          className: 'OrderBy',
        },
      },
      resultsPerPage: {
        constraints: {
          InclusiveMaximum: 1000,
          InclusiveMinimum: 1,
        },
        serializedName: 'resultsPerPage',
        type: {
          name: 'Number',
        },
      },
      skip: {
        serializedName: 'skip',
        type: {
          name: 'Number',
        },
      },
    },
  },
};

export const FilterItems: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'FilterItems',
    modelProperties: {
      field: {
        serializedName: 'field',
        type: {
          name: 'String',
        },
      },
      values: {
        serializedName: 'values',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
    },
  },
};

export const OrderBy: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'OrderBy',
    modelProperties: {
      field: {
        serializedName: 'field',
        type: {
          name: 'String',
        },
      },
      order: {
        serializedName: 'order',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const QueryResults: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'QueryResults',
    modelProperties: {
      matchingRecordsCount: {
        serializedName: 'matchingRecordsCount',
        type: {
          name: 'Number',
        },
      },
      signatures: {
        serializedName: 'signatures',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'SingleQueryResult',
            },
          },
        },
      },
    },
  },
};

export const SingleQueryResult: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'SingleQueryResult',
    modelProperties: {
      signatureId: {
        serializedName: 'signatureId',
        type: {
          name: 'Number',
        },
      },
      mode: {
        serializedName: 'mode',
        type: {
          name: 'Enum',
          allowedValues: [0, 1, 2],
        },
      },
      severity: {
        serializedName: 'severity',
        type: {
          name: 'Enum',
          allowedValues: [1, 2, 3],
        },
      },
      direction: {
        serializedName: 'direction',
        type: {
          name: 'Enum',
          allowedValues: [0, 1, 2],
        },
      },
      group: {
        serializedName: 'group',
        type: {
          name: 'String',
        },
      },
      description: {
        serializedName: 'description',
        type: {
          name: 'String',
        },
      },
      protocol: {
        serializedName: 'protocol',
        type: {
          name: 'String',
        },
      },
      sourcePorts: {
        serializedName: 'sourcePorts',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
      destinationPorts: {
        serializedName: 'destinationPorts',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
      lastUpdated: {
        serializedName: 'lastUpdated',
        type: {
          name: 'String',
        },
      },
      inheritedFromParentPolicy: {
        serializedName: 'inheritedFromParentPolicy',
        type: {
          name: 'Boolean',
        },
      },
    },
  },
};

export const SignaturesOverrides: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'SignaturesOverrides',
    modelProperties: {
      name: {
        serializedName: 'name',
        type: {
          name: 'String',
        },
      },
      id: {
        serializedName: 'id',
        type: {
          name: 'String',
        },
      },
      type: {
        serializedName: 'type',
        type: {
          name: 'String',
        },
      },
      properties: {
        serializedName: 'properties',
        type: {
          name: 'Composite',
          className: 'SignaturesOverridesProperties',
        },
      },
    },
  },
};

export const SignaturesOverridesProperties: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'SignaturesOverridesProperties',
    modelProperties: {
      signatures: {
        serializedName: 'signatures',
        type: {
          name: 'Dictionary',
          value: { type: { name: 'String' } },
        },
      },
    },
  },
};

export const SignatureOverridesFilterValuesQuery: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'SignatureOverridesFilterValuesQuery',
    modelProperties: {
      filterName: {
        serializedName: 'filterName',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const SignatureOverridesFilterValuesResponse: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'SignatureOverridesFilterValuesResponse',
    modelProperties: {
      filterValues: {
        serializedName: 'filterValues',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
    },
  },
};

export const SignaturesOverridesList: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'SignaturesOverridesList',
    modelProperties: {
      value: {
        serializedName: 'value',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'SignaturesOverrides',
            },
          },
        },
      },
    },
  },
};

export const IpAllocationListResult: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'IpAllocationListResult',
    modelProperties: {
      value: {
        serializedName: 'value',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'IpAllocation',
            },
          },
        },
      },
      nextLink: {
        serializedName: 'nextLink',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const IpGroupListResult: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'IpGroupListResult',
    modelProperties: {
      value: {
        serializedName: 'value',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'IpGroup',
            },
          },
        },
      },
      nextLink: {
        serializedName: 'nextLink',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const LoadBalancerSku: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'LoadBalancerSku',
    modelProperties: {
      name: {
        serializedName: 'name',
        type: {
          name: 'String',
        },
      },
      tier: {
        serializedName: 'tier',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const LoadBalancerListResult: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'LoadBalancerListResult',
    modelProperties: {
      value: {
        serializedName: 'value',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'LoadBalancer',
            },
          },
        },
      },
      nextLink: {
        serializedName: 'nextLink',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const LoadBalancerBackendAddressPoolListResult: msRest.CompositeMapper =
  {
    type: {
      name: 'Composite',
      className: 'LoadBalancerBackendAddressPoolListResult',
      modelProperties: {
        value: {
          serializedName: 'value',
          type: {
            name: 'Sequence',
            element: {
              type: {
                name: 'Composite',
                className: 'BackendAddressPool',
              },
            },
          },
        },
        nextLink: {
          serializedName: 'nextLink',
          readOnly: true,
          type: {
            name: 'String',
          },
        },
      },
    },
  };

export const LoadBalancerFrontendIPConfigurationListResult: msRest.CompositeMapper =
  {
    type: {
      name: 'Composite',
      className: 'LoadBalancerFrontendIPConfigurationListResult',
      modelProperties: {
        value: {
          serializedName: 'value',
          type: {
            name: 'Sequence',
            element: {
              type: {
                name: 'Composite',
                className: 'FrontendIPConfiguration',
              },
            },
          },
        },
        nextLink: {
          serializedName: 'nextLink',
          readOnly: true,
          type: {
            name: 'String',
          },
        },
      },
    },
  };

export const InboundNatRuleListResult: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'InboundNatRuleListResult',
    modelProperties: {
      value: {
        serializedName: 'value',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'InboundNatRule',
            },
          },
        },
      },
      nextLink: {
        serializedName: 'nextLink',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const LoadBalancerLoadBalancingRuleListResult: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'LoadBalancerLoadBalancingRuleListResult',
    modelProperties: {
      value: {
        serializedName: 'value',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'LoadBalancingRule',
            },
          },
        },
      },
      nextLink: {
        serializedName: 'nextLink',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const LoadBalancerOutboundRuleListResult: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'LoadBalancerOutboundRuleListResult',
    modelProperties: {
      value: {
        serializedName: 'value',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'OutboundRule',
            },
          },
        },
      },
      nextLink: {
        serializedName: 'nextLink',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const LoadBalancerProbeListResult: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'LoadBalancerProbeListResult',
    modelProperties: {
      value: {
        serializedName: 'value',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'Probe',
            },
          },
        },
      },
      nextLink: {
        serializedName: 'nextLink',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const LoadBalancerVipSwapRequest: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'LoadBalancerVipSwapRequest',
    modelProperties: {
      frontendIPConfigurations: {
        serializedName: 'frontendIPConfigurations',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'LoadBalancerVipSwapRequestFrontendIPConfiguration',
            },
          },
        },
      },
    },
  },
};

export const LoadBalancerVipSwapRequestFrontendIPConfiguration: msRest.CompositeMapper =
  {
    type: {
      name: 'Composite',
      className: 'LoadBalancerVipSwapRequestFrontendIPConfiguration',
      modelProperties: {
        id: {
          serializedName: 'id',
          type: {
            name: 'String',
          },
        },
        publicIPAddress: {
          serializedName: 'properties.publicIPAddress',
          type: {
            name: 'Composite',
            className: 'SubResource',
          },
        },
      },
    },
  };

export const QueryInboundNatRulePortMappingRequest: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'QueryInboundNatRulePortMappingRequest',
    modelProperties: {
      ipConfiguration: {
        serializedName: 'ipConfiguration',
        type: {
          name: 'Composite',
          className: 'SubResource',
        },
      },
      ipAddress: {
        serializedName: 'ipAddress',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const BackendAddressInboundNatRulePortMappings: msRest.CompositeMapper =
  {
    type: {
      name: 'Composite',
      className: 'BackendAddressInboundNatRulePortMappings',
      modelProperties: {
        inboundNatRulePortMappings: {
          serializedName: 'inboundNatRulePortMappings',
          type: {
            name: 'Sequence',
            element: {
              type: {
                name: 'Composite',
                className: 'InboundNatRulePortMapping',
              },
            },
          },
        },
      },
    },
  };

export const InboundNatRulePortMapping: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'InboundNatRulePortMapping',
    modelProperties: {
      inboundNatRuleName: {
        serializedName: 'inboundNatRuleName',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      protocol: {
        serializedName: 'protocol',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      frontendPort: {
        serializedName: 'frontendPort',
        readOnly: true,
        type: {
          name: 'Number',
        },
      },
      backendPort: {
        serializedName: 'backendPort',
        readOnly: true,
        type: {
          name: 'Number',
        },
      },
    },
  },
};

export const MigrateLoadBalancerToIpBasedRequest: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'MigrateLoadBalancerToIpBasedRequest',
    modelProperties: {
      pools: {
        serializedName: 'pools',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
    },
  },
};

export const MigratedPools: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'MigratedPools',
    modelProperties: {
      migratedPools: {
        serializedName: 'migratedPools',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
    },
  },
};

export const NatGatewayListResult: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'NatGatewayListResult',
    modelProperties: {
      value: {
        serializedName: 'value',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'NatGateway',
            },
          },
        },
      },
      nextLink: {
        serializedName: 'nextLink',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const EffectiveRouteListResult: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'EffectiveRouteListResult',
    modelProperties: {
      value: {
        serializedName: 'value',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'EffectiveRoute',
            },
          },
        },
      },
      nextLink: {
        serializedName: 'nextLink',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const EffectiveRoute: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'EffectiveRoute',
    modelProperties: {
      name: {
        serializedName: 'name',
        type: {
          name: 'String',
        },
      },
      disableBgpRoutePropagation: {
        serializedName: 'disableBgpRoutePropagation',
        type: {
          name: 'Boolean',
        },
      },
      source: {
        serializedName: 'source',
        type: {
          name: 'String',
        },
      },
      state: {
        serializedName: 'state',
        type: {
          name: 'String',
        },
      },
      addressPrefix: {
        serializedName: 'addressPrefix',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
      nextHopIpAddress: {
        serializedName: 'nextHopIpAddress',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
      nextHopType: {
        serializedName: 'nextHopType',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const EffectiveNetworkSecurityGroupListResult: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'EffectiveNetworkSecurityGroupListResult',
    modelProperties: {
      value: {
        serializedName: 'value',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'EffectiveNetworkSecurityGroup',
            },
          },
        },
      },
      nextLink: {
        serializedName: 'nextLink',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const EffectiveNetworkSecurityGroup: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'EffectiveNetworkSecurityGroup',
    modelProperties: {
      networkSecurityGroup: {
        serializedName: 'networkSecurityGroup',
        type: {
          name: 'Composite',
          className: 'SubResource',
        },
      },
      association: {
        serializedName: 'association',
        type: {
          name: 'Composite',
          className: 'EffectiveNetworkSecurityGroupAssociation',
        },
      },
      effectiveSecurityRules: {
        serializedName: 'effectiveSecurityRules',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'EffectiveNetworkSecurityRule',
            },
          },
        },
      },
      tagMap: {
        serializedName: 'tagMap',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const EffectiveNetworkSecurityGroupAssociation: msRest.CompositeMapper =
  {
    type: {
      name: 'Composite',
      className: 'EffectiveNetworkSecurityGroupAssociation',
      modelProperties: {
        networkManager: {
          serializedName: 'networkManager',
          type: {
            name: 'Composite',
            className: 'SubResource',
          },
        },
        subnet: {
          serializedName: 'subnet',
          type: {
            name: 'Composite',
            className: 'SubResource',
          },
        },
        networkInterface: {
          serializedName: 'networkInterface',
          type: {
            name: 'Composite',
            className: 'SubResource',
          },
        },
      },
    },
  };

export const EffectiveNetworkSecurityRule: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'EffectiveNetworkSecurityRule',
    modelProperties: {
      name: {
        serializedName: 'name',
        type: {
          name: 'String',
        },
      },
      protocol: {
        serializedName: 'protocol',
        type: {
          name: 'String',
        },
      },
      sourcePortRange: {
        serializedName: 'sourcePortRange',
        type: {
          name: 'String',
        },
      },
      destinationPortRange: {
        serializedName: 'destinationPortRange',
        type: {
          name: 'String',
        },
      },
      sourcePortRanges: {
        serializedName: 'sourcePortRanges',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
      destinationPortRanges: {
        serializedName: 'destinationPortRanges',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
      sourceAddressPrefix: {
        serializedName: 'sourceAddressPrefix',
        type: {
          name: 'String',
        },
      },
      destinationAddressPrefix: {
        serializedName: 'destinationAddressPrefix',
        type: {
          name: 'String',
        },
      },
      sourceAddressPrefixes: {
        serializedName: 'sourceAddressPrefixes',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
      destinationAddressPrefixes: {
        serializedName: 'destinationAddressPrefixes',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
      expandedSourceAddressPrefix: {
        serializedName: 'expandedSourceAddressPrefix',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
      expandedDestinationAddressPrefix: {
        serializedName: 'expandedDestinationAddressPrefix',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
      access: {
        serializedName: 'access',
        type: {
          name: 'String',
        },
      },
      priority: {
        serializedName: 'priority',
        type: {
          name: 'Number',
        },
      },
      direction: {
        serializedName: 'direction',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const NetworkInterfaceIPConfigurationListResult: msRest.CompositeMapper =
  {
    type: {
      name: 'Composite',
      className: 'NetworkInterfaceIPConfigurationListResult',
      modelProperties: {
        value: {
          serializedName: 'value',
          type: {
            name: 'Sequence',
            element: {
              type: {
                name: 'Composite',
                className: 'NetworkInterfaceIPConfiguration',
              },
            },
          },
        },
        nextLink: {
          serializedName: 'nextLink',
          readOnly: true,
          type: {
            name: 'String',
          },
        },
      },
    },
  };

export const NetworkInterfaceLoadBalancerListResult: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'NetworkInterfaceLoadBalancerListResult',
    modelProperties: {
      value: {
        serializedName: 'value',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'LoadBalancer',
            },
          },
        },
      },
      nextLink: {
        serializedName: 'nextLink',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const NetworkInterfaceTapConfigurationListResult: msRest.CompositeMapper =
  {
    type: {
      name: 'Composite',
      className: 'NetworkInterfaceTapConfigurationListResult',
      modelProperties: {
        value: {
          serializedName: 'value',
          type: {
            name: 'Sequence',
            element: {
              type: {
                name: 'Composite',
                className: 'NetworkInterfaceTapConfiguration',
              },
            },
          },
        },
        nextLink: {
          serializedName: 'nextLink',
          readOnly: true,
          type: {
            name: 'String',
          },
        },
      },
    },
  };

export const NetworkManagerPropertiesNetworkManagerScopes: msRest.CompositeMapper =
  {
    type: {
      name: 'Composite',
      className: 'NetworkManagerPropertiesNetworkManagerScopes',
      modelProperties: {
        managementGroups: {
          serializedName: 'managementGroups',
          type: {
            name: 'Sequence',
            element: {
              type: {
                name: 'String',
              },
            },
          },
        },
        subscriptions: {
          serializedName: 'subscriptions',
          type: {
            name: 'Sequence',
            element: {
              type: {
                name: 'String',
              },
            },
          },
        },
        crossTenantScopes: {
          serializedName: 'crossTenantScopes',
          readOnly: true,
          type: {
            name: 'Sequence',
            element: {
              type: {
                name: 'Composite',
                className: 'CrossTenantScopes',
              },
            },
          },
        },
      },
    },
  };

export const CrossTenantScopes: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'CrossTenantScopes',
    modelProperties: {
      tenantId: {
        serializedName: 'tenantId',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      managementGroups: {
        serializedName: 'managementGroups',
        readOnly: true,
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
      subscriptions: {
        serializedName: 'subscriptions',
        readOnly: true,
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
    },
  },
};

export const SystemData: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'SystemData',
    modelProperties: {
      createdBy: {
        serializedName: 'createdBy',
        type: {
          name: 'String',
        },
      },
      createdByType: {
        serializedName: 'createdByType',
        type: {
          name: 'String',
        },
      },
      createdAt: {
        serializedName: 'createdAt',
        type: {
          name: 'DateTime',
        },
      },
      lastModifiedBy: {
        serializedName: 'lastModifiedBy',
        type: {
          name: 'String',
        },
      },
      lastModifiedByType: {
        serializedName: 'lastModifiedByType',
        type: {
          name: 'String',
        },
      },
      lastModifiedAt: {
        serializedName: 'lastModifiedAt',
        type: {
          name: 'DateTime',
        },
      },
    },
  },
};

export const PatchObject: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'PatchObject',
    modelProperties: {
      tags: {
        serializedName: 'tags',
        type: {
          name: 'Dictionary',
          value: { type: { name: 'String' } },
        },
      },
    },
  },
};

export const NetworkManagerCommit: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'NetworkManagerCommit',
    modelProperties: {
      commitId: {
        serializedName: 'commitId',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      targetLocations: {
        serializedName: 'targetLocations',
        required: true,
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
      configurationIds: {
        serializedName: 'configurationIds',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
      commitType: {
        serializedName: 'commitType',
        required: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const NetworkManagerDeploymentStatusParameter: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'NetworkManagerDeploymentStatusParameter',
    modelProperties: {
      regions: {
        serializedName: 'regions',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
      deploymentTypes: {
        serializedName: 'deploymentTypes',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
      skipToken: {
        serializedName: 'skipToken',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const NetworkManagerDeploymentStatusListResult: msRest.CompositeMapper =
  {
    type: {
      name: 'Composite',
      className: 'NetworkManagerDeploymentStatusListResult',
      modelProperties: {
        value: {
          serializedName: 'value',
          type: {
            name: 'Sequence',
            element: {
              type: {
                name: 'Composite',
                className: 'NetworkManagerDeploymentStatus',
              },
            },
          },
        },
        skipToken: {
          serializedName: 'skipToken',
          type: {
            name: 'String',
          },
        },
      },
    },
  };

export const NetworkManagerDeploymentStatus: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'NetworkManagerDeploymentStatus',
    modelProperties: {
      commitTime: {
        serializedName: 'commitTime',
        type: {
          name: 'DateTime',
        },
      },
      region: {
        serializedName: 'region',
        type: {
          name: 'String',
        },
      },
      deploymentStatus: {
        serializedName: 'deploymentStatus',
        type: {
          name: 'String',
        },
      },
      configurationIds: {
        serializedName: 'configurationIds',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
      deploymentType: {
        serializedName: 'deploymentType',
        type: {
          name: 'String',
        },
      },
      errorMessage: {
        serializedName: 'errorMessage',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const NetworkManagerListResult: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'NetworkManagerListResult',
    modelProperties: {
      value: {
        serializedName: 'value',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'NetworkManager',
            },
          },
        },
      },
      nextLink: {
        serializedName: 'nextLink',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const ActiveConfigurationParameter: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ActiveConfigurationParameter',
    modelProperties: {
      regions: {
        serializedName: 'regions',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
      skipToken: {
        serializedName: 'skipToken',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const ActiveConnectivityConfigurationsListResult: msRest.CompositeMapper =
  {
    type: {
      name: 'Composite',
      className: 'ActiveConnectivityConfigurationsListResult',
      modelProperties: {
        value: {
          serializedName: 'value',
          type: {
            name: 'Sequence',
            element: {
              type: {
                name: 'Composite',
                className: 'ActiveConnectivityConfiguration',
              },
            },
          },
        },
        skipToken: {
          serializedName: 'skipToken',
          type: {
            name: 'String',
          },
        },
      },
    },
  };

export const EffectiveConnectivityConfiguration: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'EffectiveConnectivityConfiguration',
    modelProperties: {
      id: {
        serializedName: 'id',
        type: {
          name: 'String',
        },
      },
      configurationGroups: {
        serializedName: 'configurationGroups',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'ConfigurationGroup',
            },
          },
        },
      },
      description: {
        serializedName: 'properties.description',
        type: {
          name: 'String',
        },
      },
      connectivityTopology: {
        serializedName: 'properties.connectivityTopology',
        type: {
          name: 'String',
        },
      },
      hubs: {
        serializedName: 'properties.hubs',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'Hub',
            },
          },
        },
      },
      isGlobal: {
        serializedName: 'properties.isGlobal',
        type: {
          name: 'String',
        },
      },
      appliesToGroups: {
        serializedName: 'properties.appliesToGroups',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'ConnectivityGroupItem',
            },
          },
        },
      },
      provisioningState: {
        serializedName: 'properties.provisioningState',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      deleteExistingPeering: {
        serializedName: 'properties.deleteExistingPeering',
        type: {
          name: 'String',
        },
      },
      resourceGuid: {
        serializedName: 'properties.resourceGuid',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const Hub: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'Hub',
    modelProperties: {
      resourceId: {
        serializedName: 'resourceId',
        type: {
          name: 'String',
        },
      },
      resourceType: {
        serializedName: 'resourceType',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const ConnectivityGroupItem: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ConnectivityGroupItem',
    modelProperties: {
      networkGroupId: {
        serializedName: 'networkGroupId',
        required: true,
        type: {
          name: 'String',
        },
      },
      useHubGateway: {
        serializedName: 'useHubGateway',
        type: {
          name: 'String',
        },
      },
      isGlobal: {
        serializedName: 'isGlobal',
        type: {
          name: 'String',
        },
      },
      groupConnectivity: {
        serializedName: 'groupConnectivity',
        required: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const ConfigurationGroup: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ConfigurationGroup',
    modelProperties: {
      id: {
        serializedName: 'id',
        type: {
          name: 'String',
        },
      },
      description: {
        serializedName: 'properties.description',
        type: {
          name: 'String',
        },
      },
      provisioningState: {
        serializedName: 'properties.provisioningState',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      resourceGuid: {
        serializedName: 'properties.resourceGuid',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const ActiveSecurityAdminRulesListResult: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ActiveSecurityAdminRulesListResult',
    modelProperties: {
      value: {
        serializedName: 'value',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'ActiveBaseSecurityAdminRule',
            },
          },
        },
      },
      skipToken: {
        serializedName: 'skipToken',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const ActiveBaseSecurityAdminRule: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ActiveBaseSecurityAdminRule',
    uberParent: 'ActiveBaseSecurityAdminRule',
    polymorphicDiscriminator: {
      serializedName: 'kind',
      clientName: 'kind',
    },
    modelProperties: {
      id: {
        serializedName: 'id',
        type: {
          name: 'String',
        },
      },
      commitTime: {
        serializedName: 'commitTime',
        type: {
          name: 'DateTime',
        },
      },
      region: {
        serializedName: 'region',
        type: {
          name: 'String',
        },
      },
      configurationDescription: {
        serializedName: 'configurationDescription',
        type: {
          name: 'String',
        },
      },
      ruleCollectionDescription: {
        serializedName: 'ruleCollectionDescription',
        type: {
          name: 'String',
        },
      },
      ruleCollectionAppliesToGroups: {
        serializedName: 'ruleCollectionAppliesToGroups',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'NetworkManagerSecurityGroupItem',
            },
          },
        },
      },
      ruleGroups: {
        serializedName: 'ruleGroups',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'ConfigurationGroup',
            },
          },
        },
      },
      kind: {
        serializedName: 'kind',
        required: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const NetworkManagerSecurityGroupItem: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'NetworkManagerSecurityGroupItem',
    modelProperties: {
      networkGroupId: {
        serializedName: 'networkGroupId',
        required: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const ChildResource: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ChildResource',
    modelProperties: {
      id: {
        serializedName: 'id',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      name: {
        serializedName: 'name',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      type: {
        serializedName: 'type',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      etag: {
        serializedName: 'etag',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const NetworkManagerConnectionListResult: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'NetworkManagerConnectionListResult',
    modelProperties: {
      value: {
        serializedName: 'value',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'NetworkManagerConnection',
            },
          },
        },
      },
      nextLink: {
        serializedName: 'nextLink',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const ConnectivityConfigurationListResult: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ConnectivityConfigurationListResult',
    modelProperties: {
      value: {
        serializedName: 'value',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'ConnectivityConfiguration',
            },
          },
        },
      },
      nextLink: {
        serializedName: 'nextLink',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const QueryRequestOptions: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'QueryRequestOptions',
    modelProperties: {
      skipToken: {
        serializedName: 'skipToken',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const NetworkManagerEffectiveConnectivityConfigurationListResult: msRest.CompositeMapper =
  {
    type: {
      name: 'Composite',
      className: 'NetworkManagerEffectiveConnectivityConfigurationListResult',
      modelProperties: {
        value: {
          serializedName: 'value',
          type: {
            name: 'Sequence',
            element: {
              type: {
                name: 'Composite',
                className: 'EffectiveConnectivityConfiguration',
              },
            },
          },
        },
        skipToken: {
          serializedName: 'skipToken',
          type: {
            name: 'String',
          },
        },
      },
    },
  };

export const NetworkManagerEffectiveSecurityAdminRulesListResult: msRest.CompositeMapper =
  {
    type: {
      name: 'Composite',
      className: 'NetworkManagerEffectiveSecurityAdminRulesListResult',
      modelProperties: {
        value: {
          serializedName: 'value',
          type: {
            name: 'Sequence',
            element: {
              type: {
                name: 'Composite',
                className: 'EffectiveBaseSecurityAdminRule',
              },
            },
          },
        },
        skipToken: {
          serializedName: 'skipToken',
          type: {
            name: 'String',
          },
        },
      },
    },
  };

export const EffectiveBaseSecurityAdminRule: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'EffectiveBaseSecurityAdminRule',
    uberParent: 'EffectiveBaseSecurityAdminRule',
    polymorphicDiscriminator: {
      serializedName: 'kind',
      clientName: 'kind',
    },
    modelProperties: {
      id: {
        serializedName: 'id',
        type: {
          name: 'String',
        },
      },
      configurationDescription: {
        serializedName: 'configurationDescription',
        type: {
          name: 'String',
        },
      },
      ruleCollectionDescription: {
        serializedName: 'ruleCollectionDescription',
        type: {
          name: 'String',
        },
      },
      ruleCollectionAppliesToGroups: {
        serializedName: 'ruleCollectionAppliesToGroups',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'NetworkManagerSecurityGroupItem',
            },
          },
        },
      },
      ruleGroups: {
        serializedName: 'ruleGroups',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'ConfigurationGroup',
            },
          },
        },
      },
      kind: {
        serializedName: 'kind',
        required: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const NetworkGroupListResult: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'NetworkGroupListResult',
    modelProperties: {
      value: {
        serializedName: 'value',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'NetworkGroup',
            },
          },
        },
      },
      nextLink: {
        serializedName: 'nextLink',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const StaticMemberListResult: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'StaticMemberListResult',
    modelProperties: {
      value: {
        serializedName: 'value',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'StaticMember',
            },
          },
        },
      },
      nextLink: {
        serializedName: 'nextLink',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const ScopeConnectionListResult: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ScopeConnectionListResult',
    modelProperties: {
      value: {
        serializedName: 'value',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'ScopeConnection',
            },
          },
        },
      },
      nextLink: {
        serializedName: 'nextLink',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const SecurityAdminConfigurationListResult: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'SecurityAdminConfigurationListResult',
    modelProperties: {
      value: {
        serializedName: 'value',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'SecurityAdminConfiguration',
            },
          },
        },
      },
      nextLink: {
        serializedName: 'nextLink',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const AdminRuleCollectionListResult: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'AdminRuleCollectionListResult',
    modelProperties: {
      value: {
        serializedName: 'value',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'AdminRuleCollection',
            },
          },
        },
      },
      nextLink: {
        serializedName: 'nextLink',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const AdminRuleListResult: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'AdminRuleListResult',
    modelProperties: {
      value: {
        serializedName: 'value',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'BaseAdminRule',
            },
          },
        },
      },
      nextLink: {
        serializedName: 'nextLink',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const ContainerNetworkInterfaceIpConfiguration: msRest.CompositeMapper =
  {
    type: {
      name: 'Composite',
      className: 'ContainerNetworkInterfaceIpConfiguration',
      modelProperties: {
        name: {
          serializedName: 'name',
          type: {
            name: 'String',
          },
        },
        type: {
          serializedName: 'type',
          readOnly: true,
          type: {
            name: 'String',
          },
        },
        etag: {
          serializedName: 'etag',
          readOnly: true,
          type: {
            name: 'String',
          },
        },
        provisioningState: {
          serializedName: 'properties.provisioningState',
          readOnly: true,
          type: {
            name: 'String',
          },
        },
      },
    },
  };

export const NetworkProfileListResult: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'NetworkProfileListResult',
    modelProperties: {
      value: {
        serializedName: 'value',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'NetworkProfile',
            },
          },
        },
      },
      nextLink: {
        serializedName: 'nextLink',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const NetworkSecurityGroupListResult: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'NetworkSecurityGroupListResult',
    modelProperties: {
      value: {
        serializedName: 'value',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'NetworkSecurityGroup',
            },
          },
        },
      },
      nextLink: {
        serializedName: 'nextLink',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const SecurityRuleListResult: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'SecurityRuleListResult',
    modelProperties: {
      value: {
        serializedName: 'value',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'SecurityRule',
            },
          },
        },
      },
      nextLink: {
        serializedName: 'nextLink',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const VirtualApplianceSkuProperties: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'VirtualApplianceSkuProperties',
    modelProperties: {
      vendor: {
        serializedName: 'vendor',
        type: {
          name: 'String',
        },
      },
      bundledScaleUnit: {
        serializedName: 'bundledScaleUnit',
        type: {
          name: 'String',
        },
      },
      marketPlaceVersion: {
        serializedName: 'marketPlaceVersion',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const VirtualApplianceNicProperties: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'VirtualApplianceNicProperties',
    modelProperties: {
      name: {
        serializedName: 'name',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      publicIpAddress: {
        serializedName: 'publicIpAddress',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      privateIpAddress: {
        serializedName: 'privateIpAddress',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      instanceName: {
        serializedName: 'instanceName',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const VirtualApplianceAdditionalNicProperties: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'VirtualApplianceAdditionalNicProperties',
    modelProperties: {
      name: {
        serializedName: 'name',
        type: {
          name: 'String',
        },
      },
      hasPublicIp: {
        serializedName: 'hasPublicIp',
        type: {
          name: 'Boolean',
        },
      },
    },
  },
};

export const DelegationProperties: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'DelegationProperties',
    modelProperties: {
      serviceName: {
        serializedName: 'serviceName',
        type: {
          name: 'String',
        },
      },
      provisioningState: {
        serializedName: 'provisioningState',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const PartnerManagedResourceProperties: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'PartnerManagedResourceProperties',
    modelProperties: {
      id: {
        serializedName: 'id',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      internalLoadBalancerId: {
        serializedName: 'internalLoadBalancerId',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      standardLoadBalancerId: {
        serializedName: 'standardLoadBalancerId',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const NetworkVirtualApplianceListResult: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'NetworkVirtualApplianceListResult',
    modelProperties: {
      value: {
        serializedName: 'value',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'NetworkVirtualAppliance',
            },
          },
        },
      },
      nextLink: {
        serializedName: 'nextLink',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const Office365PolicyProperties: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'Office365PolicyProperties',
    modelProperties: {
      breakOutCategories: {
        serializedName: 'breakOutCategories',
        type: {
          name: 'Composite',
          className: 'BreakOutCategoryPolicies',
        },
      },
    },
  },
};

export const BreakOutCategoryPolicies: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'BreakOutCategoryPolicies',
    modelProperties: {
      allow: {
        serializedName: 'allow',
        type: {
          name: 'Boolean',
        },
      },
      optimize: {
        serializedName: 'optimize',
        type: {
          name: 'Boolean',
        },
      },
      default: {
        serializedName: 'default',
        type: {
          name: 'Boolean',
        },
      },
    },
  },
};

export const NetworkVirtualApplianceSiteListResult: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'NetworkVirtualApplianceSiteListResult',
    modelProperties: {
      value: {
        serializedName: 'value',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'VirtualApplianceSite',
            },
          },
        },
      },
      nextLink: {
        serializedName: 'nextLink',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const NetworkVirtualApplianceSkuListResult: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'NetworkVirtualApplianceSkuListResult',
    modelProperties: {
      value: {
        serializedName: 'value',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'NetworkVirtualApplianceSku',
            },
          },
        },
      },
      nextLink: {
        serializedName: 'nextLink',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const NetworkVirtualApplianceSkuInstances: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'NetworkVirtualApplianceSkuInstances',
    modelProperties: {
      scaleUnit: {
        serializedName: 'scaleUnit',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      instanceCount: {
        serializedName: 'instanceCount',
        readOnly: true,
        type: {
          name: 'Number',
        },
      },
    },
  },
};

export const InboundSecurityRules: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'InboundSecurityRules',
    modelProperties: {
      protocol: {
        serializedName: 'protocol',
        type: {
          name: 'String',
        },
      },
      sourceAddressPrefix: {
        serializedName: 'sourceAddressPrefix',
        type: {
          name: 'String',
        },
      },
      destinationPortRange: {
        constraints: {
          InclusiveMaximum: 65535,
          InclusiveMinimum: 0,
        },
        serializedName: 'destinationPortRange',
        type: {
          name: 'Number',
        },
      },
    },
  },
};

export const ErrorResponse: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ErrorResponse',
    modelProperties: {
      error: {
        serializedName: 'error',
        type: {
          name: 'Composite',
          className: 'ErrorDetails',
        },
      },
    },
  },
};

export const NetworkWatcherListResult: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'NetworkWatcherListResult',
    modelProperties: {
      value: {
        serializedName: 'value',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'NetworkWatcher',
            },
          },
        },
      },
    },
  },
};

export const TopologyParameters: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'TopologyParameters',
    modelProperties: {
      targetResourceGroupName: {
        serializedName: 'targetResourceGroupName',
        type: {
          name: 'String',
        },
      },
      targetVirtualNetwork: {
        serializedName: 'targetVirtualNetwork',
        type: {
          name: 'Composite',
          className: 'SubResource',
        },
      },
      targetSubnet: {
        serializedName: 'targetSubnet',
        type: {
          name: 'Composite',
          className: 'SubResource',
        },
      },
    },
  },
};

export const Topology: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'Topology',
    modelProperties: {
      id: {
        serializedName: 'id',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      createdDateTime: {
        serializedName: 'createdDateTime',
        readOnly: true,
        type: {
          name: 'DateTime',
        },
      },
      lastModified: {
        serializedName: 'lastModified',
        readOnly: true,
        type: {
          name: 'DateTime',
        },
      },
      resources: {
        serializedName: 'resources',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'TopologyResource',
            },
          },
        },
      },
    },
  },
};

export const TopologyResource: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'TopologyResource',
    modelProperties: {
      name: {
        serializedName: 'name',
        type: {
          name: 'String',
        },
      },
      id: {
        serializedName: 'id',
        type: {
          name: 'String',
        },
      },
      location: {
        serializedName: 'location',
        type: {
          name: 'String',
        },
      },
      associations: {
        serializedName: 'associations',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'TopologyAssociation',
            },
          },
        },
      },
    },
  },
};

export const TopologyAssociation: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'TopologyAssociation',
    modelProperties: {
      name: {
        serializedName: 'name',
        type: {
          name: 'String',
        },
      },
      resourceId: {
        serializedName: 'resourceId',
        type: {
          name: 'String',
        },
      },
      associationType: {
        serializedName: 'associationType',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const VerificationIPFlowParameters: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'VerificationIPFlowParameters',
    modelProperties: {
      targetResourceId: {
        serializedName: 'targetResourceId',
        required: true,
        type: {
          name: 'String',
        },
      },
      direction: {
        serializedName: 'direction',
        required: true,
        type: {
          name: 'String',
        },
      },
      protocol: {
        serializedName: 'protocol',
        required: true,
        type: {
          name: 'String',
        },
      },
      localPort: {
        serializedName: 'localPort',
        required: true,
        type: {
          name: 'String',
        },
      },
      remotePort: {
        serializedName: 'remotePort',
        required: true,
        type: {
          name: 'String',
        },
      },
      localIPAddress: {
        serializedName: 'localIPAddress',
        required: true,
        type: {
          name: 'String',
        },
      },
      remoteIPAddress: {
        serializedName: 'remoteIPAddress',
        required: true,
        type: {
          name: 'String',
        },
      },
      targetNicResourceId: {
        serializedName: 'targetNicResourceId',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const VerificationIPFlowResult: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'VerificationIPFlowResult',
    modelProperties: {
      access: {
        serializedName: 'access',
        type: {
          name: 'String',
        },
      },
      ruleName: {
        serializedName: 'ruleName',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const NextHopParameters: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'NextHopParameters',
    modelProperties: {
      targetResourceId: {
        serializedName: 'targetResourceId',
        required: true,
        type: {
          name: 'String',
        },
      },
      sourceIPAddress: {
        serializedName: 'sourceIPAddress',
        required: true,
        type: {
          name: 'String',
        },
      },
      destinationIPAddress: {
        serializedName: 'destinationIPAddress',
        required: true,
        type: {
          name: 'String',
        },
      },
      targetNicResourceId: {
        serializedName: 'targetNicResourceId',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const NextHopResult: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'NextHopResult',
    modelProperties: {
      nextHopType: {
        serializedName: 'nextHopType',
        type: {
          name: 'String',
        },
      },
      nextHopIpAddress: {
        serializedName: 'nextHopIpAddress',
        type: {
          name: 'String',
        },
      },
      routeTableId: {
        serializedName: 'routeTableId',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const SecurityGroupViewParameters: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'SecurityGroupViewParameters',
    modelProperties: {
      targetResourceId: {
        serializedName: 'targetResourceId',
        required: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const SecurityGroupViewResult: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'SecurityGroupViewResult',
    modelProperties: {
      networkInterfaces: {
        serializedName: 'networkInterfaces',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'SecurityGroupNetworkInterface',
            },
          },
        },
      },
    },
  },
};

export const SecurityGroupNetworkInterface: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'SecurityGroupNetworkInterface',
    modelProperties: {
      id: {
        serializedName: 'id',
        type: {
          name: 'String',
        },
      },
      securityRuleAssociations: {
        serializedName: 'securityRuleAssociations',
        type: {
          name: 'Composite',
          className: 'SecurityRuleAssociations',
        },
      },
    },
  },
};

export const SecurityRuleAssociations: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'SecurityRuleAssociations',
    modelProperties: {
      networkInterfaceAssociation: {
        serializedName: 'networkInterfaceAssociation',
        type: {
          name: 'Composite',
          className: 'NetworkInterfaceAssociation',
        },
      },
      subnetAssociation: {
        serializedName: 'subnetAssociation',
        type: {
          name: 'Composite',
          className: 'SubnetAssociation',
        },
      },
      defaultSecurityRules: {
        serializedName: 'defaultSecurityRules',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'SecurityRule',
            },
          },
        },
      },
      effectiveSecurityRules: {
        serializedName: 'effectiveSecurityRules',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'EffectiveNetworkSecurityRule',
            },
          },
        },
      },
    },
  },
};

export const NetworkInterfaceAssociation: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'NetworkInterfaceAssociation',
    modelProperties: {
      id: {
        serializedName: 'id',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      securityRules: {
        serializedName: 'securityRules',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'SecurityRule',
            },
          },
        },
      },
    },
  },
};

export const SubnetAssociation: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'SubnetAssociation',
    modelProperties: {
      id: {
        serializedName: 'id',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      securityRules: {
        serializedName: 'securityRules',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'SecurityRule',
            },
          },
        },
      },
    },
  },
};

export const PacketCapture: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'PacketCapture',
    modelProperties: {
      target: {
        serializedName: 'properties.target',
        required: true,
        type: {
          name: 'String',
        },
      },
      scope: {
        serializedName: 'properties.scope',
        type: {
          name: 'Composite',
          className: 'PacketCaptureMachineScope',
        },
      },
      targetType: {
        serializedName: 'properties.targetType',
        type: {
          name: 'Enum',
          allowedValues: ['AzureVM', 'AzureVMSS'],
        },
      },
      bytesToCapturePerPacket: {
        defaultValue: 0,
        constraints: {
          InclusiveMaximum: 4294967295,
          InclusiveMinimum: 0,
        },
        serializedName: 'properties.bytesToCapturePerPacket',
        type: {
          name: 'Number',
        },
      },
      totalBytesPerSession: {
        defaultValue: 1073741824,
        constraints: {
          InclusiveMaximum: 4294967295,
          InclusiveMinimum: 0,
        },
        serializedName: 'properties.totalBytesPerSession',
        type: {
          name: 'Number',
        },
      },
      timeLimitInSeconds: {
        defaultValue: 18000,
        constraints: {
          InclusiveMaximum: 18000,
          InclusiveMinimum: 0,
        },
        serializedName: 'properties.timeLimitInSeconds',
        type: {
          name: 'Number',
        },
      },
      storageLocation: {
        serializedName: 'properties.storageLocation',
        type: {
          name: 'Composite',
          className: 'PacketCaptureStorageLocation',
        },
      },
      filters: {
        serializedName: 'properties.filters',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'PacketCaptureFilter',
            },
          },
        },
      },
    },
  },
};

export const PacketCaptureParameters: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'PacketCaptureParameters',
    modelProperties: {
      target: {
        serializedName: 'target',
        required: true,
        type: {
          name: 'String',
        },
      },
      scope: {
        serializedName: 'scope',
        type: {
          name: 'Composite',
          className: 'PacketCaptureMachineScope',
        },
      },
      targetType: {
        serializedName: 'targetType',
        type: {
          name: 'Enum',
          allowedValues: ['AzureVM', 'AzureVMSS'],
        },
      },
      bytesToCapturePerPacket: {
        defaultValue: 0,
        constraints: {
          InclusiveMaximum: 4294967295,
          InclusiveMinimum: 0,
        },
        serializedName: 'bytesToCapturePerPacket',
        type: {
          name: 'Number',
        },
      },
      totalBytesPerSession: {
        defaultValue: 1073741824,
        constraints: {
          InclusiveMaximum: 4294967295,
          InclusiveMinimum: 0,
        },
        serializedName: 'totalBytesPerSession',
        type: {
          name: 'Number',
        },
      },
      timeLimitInSeconds: {
        defaultValue: 18000,
        constraints: {
          InclusiveMaximum: 18000,
          InclusiveMinimum: 0,
        },
        serializedName: 'timeLimitInSeconds',
        type: {
          name: 'Number',
        },
      },
      storageLocation: {
        serializedName: 'storageLocation',
        type: {
          name: 'Composite',
          className: 'PacketCaptureStorageLocation',
        },
      },
      filters: {
        serializedName: 'filters',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'PacketCaptureFilter',
            },
          },
        },
      },
    },
  },
};

export const PacketCaptureMachineScope: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'PacketCaptureMachineScope',
    modelProperties: {
      include: {
        serializedName: 'include',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
      exclude: {
        serializedName: 'exclude',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
    },
  },
};

export const PacketCaptureStorageLocation: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'PacketCaptureStorageLocation',
    modelProperties: {
      storageId: {
        serializedName: 'storageId',
        type: {
          name: 'String',
        },
      },
      storagePath: {
        serializedName: 'storagePath',
        type: {
          name: 'String',
        },
      },
      filePath: {
        serializedName: 'filePath',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const PacketCaptureFilter: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'PacketCaptureFilter',
    modelProperties: {
      protocol: {
        defaultValue: 'Any',
        serializedName: 'protocol',
        type: {
          name: 'String',
        },
      },
      localIPAddress: {
        serializedName: 'localIPAddress',
        type: {
          name: 'String',
        },
      },
      remoteIPAddress: {
        serializedName: 'remoteIPAddress',
        type: {
          name: 'String',
        },
      },
      localPort: {
        serializedName: 'localPort',
        type: {
          name: 'String',
        },
      },
      remotePort: {
        serializedName: 'remotePort',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const PacketCaptureResult: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'PacketCaptureResult',
    modelProperties: {
      name: {
        serializedName: 'name',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      id: {
        serializedName: 'id',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      etag: {
        serializedName: 'etag',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      target: {
        serializedName: 'properties.target',
        type: {
          name: 'String',
        },
      },
      scope: {
        serializedName: 'properties.scope',
        type: {
          name: 'Composite',
          className: 'PacketCaptureMachineScope',
        },
      },
      targetType: {
        serializedName: 'properties.targetType',
        type: {
          name: 'Enum',
          allowedValues: ['AzureVM', 'AzureVMSS'],
        },
      },
      bytesToCapturePerPacket: {
        defaultValue: 0,
        constraints: {
          InclusiveMaximum: 4294967295,
          InclusiveMinimum: 0,
        },
        serializedName: 'properties.bytesToCapturePerPacket',
        type: {
          name: 'Number',
        },
      },
      totalBytesPerSession: {
        defaultValue: 1073741824,
        constraints: {
          InclusiveMaximum: 4294967295,
          InclusiveMinimum: 0,
        },
        serializedName: 'properties.totalBytesPerSession',
        type: {
          name: 'Number',
        },
      },
      timeLimitInSeconds: {
        defaultValue: 18000,
        constraints: {
          InclusiveMaximum: 18000,
          InclusiveMinimum: 0,
        },
        serializedName: 'properties.timeLimitInSeconds',
        type: {
          name: 'Number',
        },
      },
      storageLocation: {
        serializedName: 'properties.storageLocation',
        type: {
          name: 'Composite',
          className: 'PacketCaptureStorageLocation',
        },
      },
      filters: {
        serializedName: 'properties.filters',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'PacketCaptureFilter',
            },
          },
        },
      },
      provisioningState: {
        serializedName: 'properties.provisioningState',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const PacketCaptureQueryStatusResult: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'PacketCaptureQueryStatusResult',
    modelProperties: {
      name: {
        serializedName: 'name',
        type: {
          name: 'String',
        },
      },
      id: {
        serializedName: 'id',
        type: {
          name: 'String',
        },
      },
      captureStartTime: {
        serializedName: 'captureStartTime',
        type: {
          name: 'DateTime',
        },
      },
      packetCaptureStatus: {
        serializedName: 'packetCaptureStatus',
        type: {
          name: 'String',
        },
      },
      stopReason: {
        serializedName: 'stopReason',
        type: {
          name: 'String',
        },
      },
      packetCaptureError: {
        serializedName: 'packetCaptureError',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
    },
  },
};

export const PacketCaptureListResult: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'PacketCaptureListResult',
    modelProperties: {
      value: {
        serializedName: 'value',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'PacketCaptureResult',
            },
          },
        },
      },
    },
  },
};

export const TroubleshootingParameters: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'TroubleshootingParameters',
    modelProperties: {
      targetResourceId: {
        serializedName: 'targetResourceId',
        required: true,
        type: {
          name: 'String',
        },
      },
      storageId: {
        serializedName: 'properties.storageId',
        required: true,
        type: {
          name: 'String',
        },
      },
      storagePath: {
        serializedName: 'properties.storagePath',
        required: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const TroubleshootingResult: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'TroubleshootingResult',
    modelProperties: {
      startTime: {
        serializedName: 'startTime',
        type: {
          name: 'DateTime',
        },
      },
      endTime: {
        serializedName: 'endTime',
        type: {
          name: 'DateTime',
        },
      },
      code: {
        serializedName: 'code',
        type: {
          name: 'String',
        },
      },
      results: {
        serializedName: 'results',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'TroubleshootingDetails',
            },
          },
        },
      },
    },
  },
};

export const TroubleshootingDetails: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'TroubleshootingDetails',
    modelProperties: {
      id: {
        serializedName: 'id',
        type: {
          name: 'String',
        },
      },
      reasonType: {
        serializedName: 'reasonType',
        type: {
          name: 'String',
        },
      },
      summary: {
        serializedName: 'summary',
        type: {
          name: 'String',
        },
      },
      detail: {
        serializedName: 'detail',
        type: {
          name: 'String',
        },
      },
      recommendedActions: {
        serializedName: 'recommendedActions',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'TroubleshootingRecommendedActions',
            },
          },
        },
      },
    },
  },
};

export const TroubleshootingRecommendedActions: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'TroubleshootingRecommendedActions',
    modelProperties: {
      actionId: {
        serializedName: 'actionId',
        type: {
          name: 'String',
        },
      },
      actionText: {
        serializedName: 'actionText',
        type: {
          name: 'String',
        },
      },
      actionUri: {
        serializedName: 'actionUri',
        type: {
          name: 'String',
        },
      },
      actionUriText: {
        serializedName: 'actionUriText',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const QueryTroubleshootingParameters: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'QueryTroubleshootingParameters',
    modelProperties: {
      targetResourceId: {
        serializedName: 'targetResourceId',
        required: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const FlowLogInformation: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'FlowLogInformation',
    modelProperties: {
      targetResourceId: {
        serializedName: 'targetResourceId',
        required: true,
        type: {
          name: 'String',
        },
      },
      flowAnalyticsConfiguration: {
        serializedName: 'flowAnalyticsConfiguration',
        type: {
          name: 'Composite',
          className: 'TrafficAnalyticsProperties',
        },
      },
      storageId: {
        serializedName: 'properties.storageId',
        required: true,
        type: {
          name: 'String',
        },
      },
      enabled: {
        serializedName: 'properties.enabled',
        required: true,
        type: {
          name: 'Boolean',
        },
      },
      retentionPolicy: {
        serializedName: 'properties.retentionPolicy',
        type: {
          name: 'Composite',
          className: 'RetentionPolicyParameters',
        },
      },
      format: {
        serializedName: 'properties.format',
        type: {
          name: 'Composite',
          className: 'FlowLogFormatParameters',
        },
      },
    },
  },
};

export const FlowLogStatusParameters: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'FlowLogStatusParameters',
    modelProperties: {
      targetResourceId: {
        serializedName: 'targetResourceId',
        required: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const ConnectivityParameters: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ConnectivityParameters',
    modelProperties: {
      source: {
        serializedName: 'source',
        type: {
          name: 'Composite',
          className: 'ConnectivitySource',
        },
      },
      destination: {
        serializedName: 'destination',
        type: {
          name: 'Composite',
          className: 'ConnectivityDestination',
        },
      },
      protocol: {
        serializedName: 'protocol',
        type: {
          name: 'String',
        },
      },
      protocolConfiguration: {
        serializedName: 'protocolConfiguration',
        type: {
          name: 'Composite',
          className: 'ProtocolConfiguration',
        },
      },
      preferredIPVersion: {
        serializedName: 'preferredIPVersion',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const ConnectivitySource: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ConnectivitySource',
    modelProperties: {
      resourceId: {
        serializedName: 'resourceId',
        required: true,
        type: {
          name: 'String',
        },
      },
      port: {
        constraints: {
          InclusiveMaximum: 65535,
          InclusiveMinimum: 0,
        },
        serializedName: 'port',
        type: {
          name: 'Number',
        },
      },
    },
  },
};

export const ConnectivityDestination: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ConnectivityDestination',
    modelProperties: {
      resourceId: {
        serializedName: 'resourceId',
        type: {
          name: 'String',
        },
      },
      address: {
        serializedName: 'address',
        type: {
          name: 'String',
        },
      },
      port: {
        constraints: {
          InclusiveMaximum: 65535,
          InclusiveMinimum: 0,
        },
        serializedName: 'port',
        type: {
          name: 'Number',
        },
      },
    },
  },
};

export const ProtocolConfiguration: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ProtocolConfiguration',
    modelProperties: {
      httpConfiguration: {
        serializedName: 'HTTPConfiguration',
        type: {
          name: 'Composite',
          className: 'HttpConfiguration',
        },
      },
    },
  },
};

export const HttpConfiguration: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'HttpConfiguration',
    modelProperties: {
      method: {
        serializedName: 'method',
        type: {
          name: 'String',
        },
      },
      headers: {
        serializedName: 'headers',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'HttpHeader',
            },
          },
        },
      },
      validStatusCodes: {
        serializedName: 'validStatusCodes',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Number',
            },
          },
        },
      },
    },
  },
};

export const HttpHeader: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'HttpHeader',
    modelProperties: {
      name: {
        serializedName: 'name',
        type: {
          name: 'String',
        },
      },
      value: {
        serializedName: 'value',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const ConnectivityInformation: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ConnectivityInformation',
    modelProperties: {
      hops: {
        serializedName: 'hops',
        readOnly: true,
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'ConnectivityHop',
            },
          },
        },
      },
      connectionStatus: {
        serializedName: 'connectionStatus',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      avgLatencyInMs: {
        serializedName: 'avgLatencyInMs',
        readOnly: true,
        type: {
          name: 'Number',
        },
      },
      minLatencyInMs: {
        serializedName: 'minLatencyInMs',
        readOnly: true,
        type: {
          name: 'Number',
        },
      },
      maxLatencyInMs: {
        serializedName: 'maxLatencyInMs',
        readOnly: true,
        type: {
          name: 'Number',
        },
      },
      probesSent: {
        serializedName: 'probesSent',
        readOnly: true,
        type: {
          name: 'Number',
        },
      },
      probesFailed: {
        serializedName: 'probesFailed',
        readOnly: true,
        type: {
          name: 'Number',
        },
      },
    },
  },
};

export const ConnectivityHop: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ConnectivityHop',
    modelProperties: {
      type: {
        serializedName: 'type',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      id: {
        serializedName: 'id',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      address: {
        serializedName: 'address',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      resourceId: {
        serializedName: 'resourceId',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      nextHopIds: {
        serializedName: 'nextHopIds',
        readOnly: true,
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
      previousHopIds: {
        serializedName: 'previousHopIds',
        readOnly: true,
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
      links: {
        serializedName: 'links',
        readOnly: true,
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'HopLink',
            },
          },
        },
      },
      previousLinks: {
        serializedName: 'previousLinks',
        readOnly: true,
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'HopLink',
            },
          },
        },
      },
      issues: {
        serializedName: 'issues',
        readOnly: true,
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'ConnectivityIssue',
            },
          },
        },
      },
    },
  },
};

export const HopLink: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'HopLink',
    modelProperties: {
      nextHopId: {
        serializedName: 'nextHopId',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      linkType: {
        serializedName: 'linkType',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      issues: {
        serializedName: 'issues',
        readOnly: true,
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'ConnectivityIssue',
            },
          },
        },
      },
      context: {
        serializedName: 'context',
        readOnly: true,
        type: {
          name: 'Dictionary',
          value: { type: { name: 'String' } },
        },
      },
      resourceId: {
        serializedName: 'resourceId',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      roundTripTimeMin: {
        constraints: {
          InclusiveMaximum: 4294967295,
          InclusiveMinimum: 0,
        },
        serializedName: 'properties.roundTripTimeMin',
        readOnly: true,
        type: {
          name: 'Number',
        },
      },
      roundTripTimeAvg: {
        constraints: {
          InclusiveMaximum: 4294967295,
          InclusiveMinimum: 0,
        },
        serializedName: 'properties.roundTripTimeAvg',
        readOnly: true,
        type: {
          name: 'Number',
        },
      },
      roundTripTimeMax: {
        constraints: {
          InclusiveMaximum: 4294967295,
          InclusiveMinimum: 0,
        },
        serializedName: 'properties.roundTripTimeMax',
        readOnly: true,
        type: {
          name: 'Number',
        },
      },
    },
  },
};

export const ConnectivityIssue: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ConnectivityIssue',
    modelProperties: {
      origin: {
        serializedName: 'origin',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      severity: {
        serializedName: 'severity',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      type: {
        serializedName: 'type',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      context: {
        serializedName: 'context',
        readOnly: true,
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Dictionary',
              value: { type: { name: 'String' } },
            },
          },
        },
      },
    },
  },
};

export const AzureReachabilityReportParameters: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'AzureReachabilityReportParameters',
    modelProperties: {
      providerLocation: {
        serializedName: 'providerLocation',
        type: {
          name: 'Composite',
          className: 'AzureReachabilityReportLocation',
        },
      },
      providers: {
        serializedName: 'providers',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
      azureLocations: {
        serializedName: 'azureLocations',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
      startTime: {
        serializedName: 'startTime',
        required: true,
        type: {
          name: 'DateTime',
        },
      },
      endTime: {
        serializedName: 'endTime',
        required: true,
        type: {
          name: 'DateTime',
        },
      },
    },
  },
};

export const AzureReachabilityReportLocation: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'AzureReachabilityReportLocation',
    modelProperties: {
      country: {
        serializedName: 'country',
        required: true,
        type: {
          name: 'String',
        },
      },
      state: {
        serializedName: 'state',
        type: {
          name: 'String',
        },
      },
      city: {
        serializedName: 'city',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const AzureReachabilityReport: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'AzureReachabilityReport',
    modelProperties: {
      aggregationLevel: {
        serializedName: 'aggregationLevel',
        required: true,
        type: {
          name: 'String',
        },
      },
      providerLocation: {
        serializedName: 'providerLocation',
        type: {
          name: 'Composite',
          className: 'AzureReachabilityReportLocation',
        },
      },
      reachabilityReport: {
        serializedName: 'reachabilityReport',
        required: true,
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'AzureReachabilityReportItem',
            },
          },
        },
      },
    },
  },
};

export const AzureReachabilityReportItem: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'AzureReachabilityReportItem',
    modelProperties: {
      provider: {
        serializedName: 'provider',
        type: {
          name: 'String',
        },
      },
      azureLocation: {
        serializedName: 'azureLocation',
        type: {
          name: 'String',
        },
      },
      latencies: {
        serializedName: 'latencies',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'AzureReachabilityReportLatencyInfo',
            },
          },
        },
      },
    },
  },
};

export const AzureReachabilityReportLatencyInfo: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'AzureReachabilityReportLatencyInfo',
    modelProperties: {
      timeStamp: {
        serializedName: 'timeStamp',
        type: {
          name: 'DateTime',
        },
      },
      score: {
        constraints: {
          InclusiveMaximum: 100,
          InclusiveMinimum: 1,
        },
        serializedName: 'score',
        type: {
          name: 'Number',
        },
      },
    },
  },
};

export const AvailableProvidersListParameters: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'AvailableProvidersListParameters',
    modelProperties: {
      azureLocations: {
        serializedName: 'azureLocations',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
      country: {
        serializedName: 'country',
        type: {
          name: 'String',
        },
      },
      state: {
        serializedName: 'state',
        type: {
          name: 'String',
        },
      },
      city: {
        serializedName: 'city',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const AvailableProvidersList: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'AvailableProvidersList',
    modelProperties: {
      countries: {
        serializedName: 'countries',
        required: true,
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'AvailableProvidersListCountry',
            },
          },
        },
      },
    },
  },
};

export const AvailableProvidersListCountry: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'AvailableProvidersListCountry',
    modelProperties: {
      countryName: {
        serializedName: 'countryName',
        type: {
          name: 'String',
        },
      },
      providers: {
        serializedName: 'providers',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
      states: {
        serializedName: 'states',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'AvailableProvidersListState',
            },
          },
        },
      },
    },
  },
};

export const AvailableProvidersListState: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'AvailableProvidersListState',
    modelProperties: {
      stateName: {
        serializedName: 'stateName',
        type: {
          name: 'String',
        },
      },
      providers: {
        serializedName: 'providers',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
      cities: {
        serializedName: 'cities',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'AvailableProvidersListCity',
            },
          },
        },
      },
    },
  },
};

export const AvailableProvidersListCity: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'AvailableProvidersListCity',
    modelProperties: {
      cityName: {
        serializedName: 'cityName',
        type: {
          name: 'String',
        },
      },
      providers: {
        serializedName: 'providers',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
    },
  },
};

export const NetworkConfigurationDiagnosticParameters: msRest.CompositeMapper =
  {
    type: {
      name: 'Composite',
      className: 'NetworkConfigurationDiagnosticParameters',
      modelProperties: {
        targetResourceId: {
          serializedName: 'targetResourceId',
          required: true,
          type: {
            name: 'String',
          },
        },
        verbosityLevel: {
          serializedName: 'verbosityLevel',
          type: {
            name: 'String',
          },
        },
        profiles: {
          serializedName: 'profiles',
          required: true,
          type: {
            name: 'Sequence',
            element: {
              type: {
                name: 'Composite',
                className: 'NetworkConfigurationDiagnosticProfile',
              },
            },
          },
        },
      },
    },
  };

export const NetworkConfigurationDiagnosticProfile: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'NetworkConfigurationDiagnosticProfile',
    modelProperties: {
      direction: {
        serializedName: 'direction',
        required: true,
        type: {
          name: 'String',
        },
      },
      protocol: {
        serializedName: 'protocol',
        required: true,
        type: {
          name: 'String',
        },
      },
      source: {
        serializedName: 'source',
        required: true,
        type: {
          name: 'String',
        },
      },
      destination: {
        serializedName: 'destination',
        required: true,
        type: {
          name: 'String',
        },
      },
      destinationPort: {
        serializedName: 'destinationPort',
        required: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const NetworkConfigurationDiagnosticResponse: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'NetworkConfigurationDiagnosticResponse',
    modelProperties: {
      results: {
        serializedName: 'results',
        readOnly: true,
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'NetworkConfigurationDiagnosticResult',
            },
          },
        },
      },
    },
  },
};

export const NetworkConfigurationDiagnosticResult: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'NetworkConfigurationDiagnosticResult',
    modelProperties: {
      profile: {
        serializedName: 'profile',
        type: {
          name: 'Composite',
          className: 'NetworkConfigurationDiagnosticProfile',
        },
      },
      networkSecurityGroupResult: {
        serializedName: 'networkSecurityGroupResult',
        type: {
          name: 'Composite',
          className: 'NetworkSecurityGroupResult',
        },
      },
    },
  },
};

export const NetworkSecurityGroupResult: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'NetworkSecurityGroupResult',
    modelProperties: {
      securityRuleAccessResult: {
        serializedName: 'securityRuleAccessResult',
        type: {
          name: 'String',
        },
      },
      evaluatedNetworkSecurityGroups: {
        serializedName: 'evaluatedNetworkSecurityGroups',
        readOnly: true,
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'EvaluatedNetworkSecurityGroup',
            },
          },
        },
      },
    },
  },
};

export const EvaluatedNetworkSecurityGroup: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'EvaluatedNetworkSecurityGroup',
    modelProperties: {
      networkSecurityGroupId: {
        serializedName: 'networkSecurityGroupId',
        type: {
          name: 'String',
        },
      },
      appliedTo: {
        serializedName: 'appliedTo',
        type: {
          name: 'String',
        },
      },
      matchedRule: {
        serializedName: 'matchedRule',
        type: {
          name: 'Composite',
          className: 'MatchedRule',
        },
      },
      rulesEvaluationResult: {
        serializedName: 'rulesEvaluationResult',
        readOnly: true,
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'NetworkSecurityRulesEvaluationResult',
            },
          },
        },
      },
    },
  },
};

export const MatchedRule: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'MatchedRule',
    modelProperties: {
      ruleName: {
        serializedName: 'ruleName',
        type: {
          name: 'String',
        },
      },
      action: {
        serializedName: 'action',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const NetworkSecurityRulesEvaluationResult: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'NetworkSecurityRulesEvaluationResult',
    modelProperties: {
      name: {
        serializedName: 'name',
        type: {
          name: 'String',
        },
      },
      protocolMatched: {
        serializedName: 'protocolMatched',
        type: {
          name: 'Boolean',
        },
      },
      sourceMatched: {
        serializedName: 'sourceMatched',
        type: {
          name: 'Boolean',
        },
      },
      sourcePortMatched: {
        serializedName: 'sourcePortMatched',
        type: {
          name: 'Boolean',
        },
      },
      destinationMatched: {
        serializedName: 'destinationMatched',
        type: {
          name: 'Boolean',
        },
      },
      destinationPortMatched: {
        serializedName: 'destinationPortMatched',
        type: {
          name: 'Boolean',
        },
      },
    },
  },
};

export const ConnectionMonitor: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ConnectionMonitor',
    modelProperties: {
      location: {
        serializedName: 'location',
        type: {
          name: 'String',
        },
      },
      tags: {
        serializedName: 'tags',
        type: {
          name: 'Dictionary',
          value: { type: { name: 'String' } },
        },
      },
      source: {
        serializedName: 'properties.source',
        type: {
          name: 'Composite',
          className: 'ConnectionMonitorSource',
        },
      },
      destination: {
        serializedName: 'properties.destination',
        type: {
          name: 'Composite',
          className: 'ConnectionMonitorDestination',
        },
      },
      autoStart: {
        defaultValue: true,
        serializedName: 'properties.autoStart',
        type: {
          name: 'Boolean',
        },
      },
      monitoringIntervalInSeconds: {
        defaultValue: 60,
        constraints: {
          InclusiveMaximum: 1800,
          InclusiveMinimum: 30,
        },
        serializedName: 'properties.monitoringIntervalInSeconds',
        type: {
          name: 'Number',
        },
      },
      endpoints: {
        serializedName: 'properties.endpoints',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'ConnectionMonitorEndpoint',
            },
          },
        },
      },
      testConfigurations: {
        serializedName: 'properties.testConfigurations',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'ConnectionMonitorTestConfiguration',
            },
          },
        },
      },
      testGroups: {
        serializedName: 'properties.testGroups',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'ConnectionMonitorTestGroup',
            },
          },
        },
      },
      outputs: {
        serializedName: 'properties.outputs',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'ConnectionMonitorOutput',
            },
          },
        },
      },
      notes: {
        serializedName: 'properties.notes',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const ConnectionMonitorParameters: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ConnectionMonitorParameters',
    modelProperties: {
      source: {
        serializedName: 'source',
        type: {
          name: 'Composite',
          className: 'ConnectionMonitorSource',
        },
      },
      destination: {
        serializedName: 'destination',
        type: {
          name: 'Composite',
          className: 'ConnectionMonitorDestination',
        },
      },
      autoStart: {
        defaultValue: true,
        serializedName: 'autoStart',
        type: {
          name: 'Boolean',
        },
      },
      monitoringIntervalInSeconds: {
        defaultValue: 60,
        constraints: {
          InclusiveMaximum: 1800,
          InclusiveMinimum: 30,
        },
        serializedName: 'monitoringIntervalInSeconds',
        type: {
          name: 'Number',
        },
      },
      endpoints: {
        serializedName: 'endpoints',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'ConnectionMonitorEndpoint',
            },
          },
        },
      },
      testConfigurations: {
        serializedName: 'testConfigurations',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'ConnectionMonitorTestConfiguration',
            },
          },
        },
      },
      testGroups: {
        serializedName: 'testGroups',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'ConnectionMonitorTestGroup',
            },
          },
        },
      },
      outputs: {
        serializedName: 'outputs',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'ConnectionMonitorOutput',
            },
          },
        },
      },
      notes: {
        serializedName: 'notes',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const ConnectionMonitorSource: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ConnectionMonitorSource',
    modelProperties: {
      resourceId: {
        serializedName: 'resourceId',
        required: true,
        type: {
          name: 'String',
        },
      },
      port: {
        constraints: {
          InclusiveMaximum: 65535,
          InclusiveMinimum: 0,
        },
        serializedName: 'port',
        type: {
          name: 'Number',
        },
      },
    },
  },
};

export const ConnectionMonitorDestination: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ConnectionMonitorDestination',
    modelProperties: {
      resourceId: {
        serializedName: 'resourceId',
        type: {
          name: 'String',
        },
      },
      address: {
        serializedName: 'address',
        type: {
          name: 'String',
        },
      },
      port: {
        constraints: {
          InclusiveMaximum: 65535,
          InclusiveMinimum: 0,
        },
        serializedName: 'port',
        type: {
          name: 'Number',
        },
      },
    },
  },
};

export const ConnectionMonitorEndpoint: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ConnectionMonitorEndpoint',
    modelProperties: {
      name: {
        serializedName: 'name',
        required: true,
        type: {
          name: 'String',
        },
      },
      type: {
        serializedName: 'type',
        type: {
          name: 'String',
        },
      },
      resourceId: {
        serializedName: 'resourceId',
        type: {
          name: 'String',
        },
      },
      address: {
        serializedName: 'address',
        type: {
          name: 'String',
        },
      },
      filter: {
        serializedName: 'filter',
        type: {
          name: 'Composite',
          className: 'ConnectionMonitorEndpointFilter',
        },
      },
      scope: {
        serializedName: 'scope',
        type: {
          name: 'Composite',
          className: 'ConnectionMonitorEndpointScope',
        },
      },
      coverageLevel: {
        serializedName: 'coverageLevel',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const ConnectionMonitorEndpointFilter: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ConnectionMonitorEndpointFilter',
    modelProperties: {
      type: {
        serializedName: 'type',
        type: {
          name: 'String',
        },
      },
      items: {
        serializedName: 'items',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'ConnectionMonitorEndpointFilterItem',
            },
          },
        },
      },
    },
  },
};

export const ConnectionMonitorEndpointFilterItem: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ConnectionMonitorEndpointFilterItem',
    modelProperties: {
      type: {
        serializedName: 'type',
        type: {
          name: 'String',
        },
      },
      address: {
        serializedName: 'address',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const ConnectionMonitorEndpointScope: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ConnectionMonitorEndpointScope',
    modelProperties: {
      include: {
        serializedName: 'include',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'ConnectionMonitorEndpointScopeItem',
            },
          },
        },
      },
      exclude: {
        serializedName: 'exclude',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'ConnectionMonitorEndpointScopeItem',
            },
          },
        },
      },
    },
  },
};

export const ConnectionMonitorEndpointScopeItem: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ConnectionMonitorEndpointScopeItem',
    modelProperties: {
      address: {
        serializedName: 'address',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const ConnectionMonitorTestConfiguration: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ConnectionMonitorTestConfiguration',
    modelProperties: {
      name: {
        serializedName: 'name',
        required: true,
        type: {
          name: 'String',
        },
      },
      testFrequencySec: {
        serializedName: 'testFrequencySec',
        type: {
          name: 'Number',
        },
      },
      protocol: {
        serializedName: 'protocol',
        required: true,
        type: {
          name: 'String',
        },
      },
      preferredIPVersion: {
        serializedName: 'preferredIPVersion',
        type: {
          name: 'String',
        },
      },
      httpConfiguration: {
        serializedName: 'httpConfiguration',
        type: {
          name: 'Composite',
          className: 'ConnectionMonitorHttpConfiguration',
        },
      },
      tcpConfiguration: {
        serializedName: 'tcpConfiguration',
        type: {
          name: 'Composite',
          className: 'ConnectionMonitorTcpConfiguration',
        },
      },
      icmpConfiguration: {
        serializedName: 'icmpConfiguration',
        type: {
          name: 'Composite',
          className: 'ConnectionMonitorIcmpConfiguration',
        },
      },
      successThreshold: {
        serializedName: 'successThreshold',
        type: {
          name: 'Composite',
          className: 'ConnectionMonitorSuccessThreshold',
        },
      },
    },
  },
};

export const ConnectionMonitorHttpConfiguration: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ConnectionMonitorHttpConfiguration',
    modelProperties: {
      port: {
        constraints: {
          InclusiveMaximum: 65535,
          InclusiveMinimum: 0,
        },
        serializedName: 'port',
        type: {
          name: 'Number',
        },
      },
      method: {
        serializedName: 'method',
        type: {
          name: 'String',
        },
      },
      path: {
        serializedName: 'path',
        type: {
          name: 'String',
        },
      },
      requestHeaders: {
        serializedName: 'requestHeaders',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'HttpHeader',
            },
          },
        },
      },
      validStatusCodeRanges: {
        serializedName: 'validStatusCodeRanges',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
      preferHttps: {
        serializedName: 'preferHTTPS',
        type: {
          name: 'Boolean',
        },
      },
    },
  },
};

export const ConnectionMonitorTcpConfiguration: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ConnectionMonitorTcpConfiguration',
    modelProperties: {
      port: {
        constraints: {
          InclusiveMaximum: 65535,
          InclusiveMinimum: 0,
        },
        serializedName: 'port',
        type: {
          name: 'Number',
        },
      },
      disableTraceRoute: {
        serializedName: 'disableTraceRoute',
        type: {
          name: 'Boolean',
        },
      },
      destinationPortBehavior: {
        serializedName: 'destinationPortBehavior',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const ConnectionMonitorIcmpConfiguration: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ConnectionMonitorIcmpConfiguration',
    modelProperties: {
      disableTraceRoute: {
        serializedName: 'disableTraceRoute',
        type: {
          name: 'Boolean',
        },
      },
    },
  },
};

export const ConnectionMonitorSuccessThreshold: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ConnectionMonitorSuccessThreshold',
    modelProperties: {
      checksFailedPercent: {
        serializedName: 'checksFailedPercent',
        type: {
          name: 'Number',
        },
      },
      roundTripTimeMs: {
        serializedName: 'roundTripTimeMs',
        type: {
          name: 'Number',
        },
      },
    },
  },
};

export const ConnectionMonitorTestGroup: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ConnectionMonitorTestGroup',
    modelProperties: {
      name: {
        serializedName: 'name',
        required: true,
        type: {
          name: 'String',
        },
      },
      disable: {
        serializedName: 'disable',
        type: {
          name: 'Boolean',
        },
      },
      testConfigurations: {
        serializedName: 'testConfigurations',
        required: true,
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
      sources: {
        serializedName: 'sources',
        required: true,
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
      destinations: {
        serializedName: 'destinations',
        required: true,
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
    },
  },
};

export const ConnectionMonitorOutput: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ConnectionMonitorOutput',
    modelProperties: {
      type: {
        serializedName: 'type',
        type: {
          name: 'String',
        },
      },
      workspaceSettings: {
        serializedName: 'workspaceSettings',
        type: {
          name: 'Composite',
          className: 'ConnectionMonitorWorkspaceSettings',
        },
      },
    },
  },
};

export const ConnectionMonitorWorkspaceSettings: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ConnectionMonitorWorkspaceSettings',
    modelProperties: {
      workspaceResourceId: {
        serializedName: 'workspaceResourceId',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const ConnectionMonitorResult: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ConnectionMonitorResult',
    modelProperties: {
      name: {
        serializedName: 'name',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      id: {
        serializedName: 'id',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      etag: {
        serializedName: 'etag',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      type: {
        serializedName: 'type',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      location: {
        serializedName: 'location',
        type: {
          name: 'String',
        },
      },
      tags: {
        serializedName: 'tags',
        type: {
          name: 'Dictionary',
          value: { type: { name: 'String' } },
        },
      },
      source: {
        serializedName: 'properties.source',
        type: {
          name: 'Composite',
          className: 'ConnectionMonitorSource',
        },
      },
      destination: {
        serializedName: 'properties.destination',
        type: {
          name: 'Composite',
          className: 'ConnectionMonitorDestination',
        },
      },
      autoStart: {
        defaultValue: true,
        serializedName: 'properties.autoStart',
        type: {
          name: 'Boolean',
        },
      },
      monitoringIntervalInSeconds: {
        defaultValue: 60,
        constraints: {
          InclusiveMaximum: 1800,
          InclusiveMinimum: 30,
        },
        serializedName: 'properties.monitoringIntervalInSeconds',
        type: {
          name: 'Number',
        },
      },
      endpoints: {
        serializedName: 'properties.endpoints',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'ConnectionMonitorEndpoint',
            },
          },
        },
      },
      testConfigurations: {
        serializedName: 'properties.testConfigurations',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'ConnectionMonitorTestConfiguration',
            },
          },
        },
      },
      testGroups: {
        serializedName: 'properties.testGroups',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'ConnectionMonitorTestGroup',
            },
          },
        },
      },
      outputs: {
        serializedName: 'properties.outputs',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'ConnectionMonitorOutput',
            },
          },
        },
      },
      notes: {
        serializedName: 'properties.notes',
        type: {
          name: 'String',
        },
      },
      provisioningState: {
        serializedName: 'properties.provisioningState',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      startTime: {
        serializedName: 'properties.startTime',
        readOnly: true,
        type: {
          name: 'DateTime',
        },
      },
      monitoringStatus: {
        serializedName: 'properties.monitoringStatus',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      connectionMonitorType: {
        serializedName: 'properties.connectionMonitorType',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const ConnectionMonitorQueryResult: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ConnectionMonitorQueryResult',
    modelProperties: {
      sourceStatus: {
        serializedName: 'sourceStatus',
        type: {
          name: 'String',
        },
      },
      states: {
        serializedName: 'states',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'ConnectionStateSnapshot',
            },
          },
        },
      },
    },
  },
};

export const ConnectionStateSnapshot: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ConnectionStateSnapshot',
    modelProperties: {
      connectionState: {
        serializedName: 'connectionState',
        type: {
          name: 'String',
        },
      },
      startTime: {
        serializedName: 'startTime',
        type: {
          name: 'DateTime',
        },
      },
      endTime: {
        serializedName: 'endTime',
        type: {
          name: 'DateTime',
        },
      },
      evaluationState: {
        serializedName: 'evaluationState',
        type: {
          name: 'String',
        },
      },
      avgLatencyInMs: {
        constraints: {
          InclusiveMaximum: 4294967295,
          InclusiveMinimum: 0,
        },
        serializedName: 'avgLatencyInMs',
        type: {
          name: 'Number',
        },
      },
      minLatencyInMs: {
        constraints: {
          InclusiveMaximum: 4294967295,
          InclusiveMinimum: 0,
        },
        serializedName: 'minLatencyInMs',
        type: {
          name: 'Number',
        },
      },
      maxLatencyInMs: {
        constraints: {
          InclusiveMaximum: 4294967295,
          InclusiveMinimum: 0,
        },
        serializedName: 'maxLatencyInMs',
        type: {
          name: 'Number',
        },
      },
      probesSent: {
        constraints: {
          InclusiveMaximum: 4294967295,
          InclusiveMinimum: 0,
        },
        serializedName: 'probesSent',
        type: {
          name: 'Number',
        },
      },
      probesFailed: {
        constraints: {
          InclusiveMaximum: 4294967295,
          InclusiveMinimum: 0,
        },
        serializedName: 'probesFailed',
        type: {
          name: 'Number',
        },
      },
      hops: {
        serializedName: 'hops',
        readOnly: true,
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'ConnectivityHop',
            },
          },
        },
      },
    },
  },
};

export const ConnectionMonitorListResult: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ConnectionMonitorListResult',
    modelProperties: {
      value: {
        serializedName: 'value',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'ConnectionMonitorResult',
            },
          },
        },
      },
    },
  },
};

export const FlowLogListResult: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'FlowLogListResult',
    modelProperties: {
      value: {
        serializedName: 'value',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'FlowLog',
            },
          },
        },
      },
      nextLink: {
        serializedName: 'nextLink',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const OperationListResult: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'OperationListResult',
    modelProperties: {
      value: {
        serializedName: 'value',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'Operation',
            },
          },
        },
      },
      nextLink: {
        serializedName: 'nextLink',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const Operation: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'Operation',
    modelProperties: {
      name: {
        serializedName: 'name',
        type: {
          name: 'String',
        },
      },
      display: {
        serializedName: 'display',
        type: {
          name: 'Composite',
          className: 'OperationDisplay',
        },
      },
      origin: {
        serializedName: 'origin',
        type: {
          name: 'String',
        },
      },
      serviceSpecification: {
        serializedName: 'properties.serviceSpecification',
        type: {
          name: 'Composite',
          className: 'OperationPropertiesFormatServiceSpecification',
        },
      },
    },
  },
};

export const OperationDisplay: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'OperationDisplay',
    modelProperties: {
      provider: {
        serializedName: 'provider',
        type: {
          name: 'String',
        },
      },
      resource: {
        serializedName: 'resource',
        type: {
          name: 'String',
        },
      },
      operation: {
        serializedName: 'operation',
        type: {
          name: 'String',
        },
      },
      description: {
        serializedName: 'description',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const OperationPropertiesFormatServiceSpecification: msRest.CompositeMapper =
  {
    type: {
      name: 'Composite',
      className: 'OperationPropertiesFormatServiceSpecification',
      modelProperties: {
        metricSpecifications: {
          serializedName: 'metricSpecifications',
          type: {
            name: 'Sequence',
            element: {
              type: {
                name: 'Composite',
                className: 'MetricSpecification',
              },
            },
          },
        },
        logSpecifications: {
          serializedName: 'logSpecifications',
          type: {
            name: 'Sequence',
            element: {
              type: {
                name: 'Composite',
                className: 'LogSpecification',
              },
            },
          },
        },
      },
    },
  };

export const MetricSpecification: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'MetricSpecification',
    modelProperties: {
      name: {
        serializedName: 'name',
        type: {
          name: 'String',
        },
      },
      displayName: {
        serializedName: 'displayName',
        type: {
          name: 'String',
        },
      },
      displayDescription: {
        serializedName: 'displayDescription',
        type: {
          name: 'String',
        },
      },
      unit: {
        serializedName: 'unit',
        type: {
          name: 'String',
        },
      },
      aggregationType: {
        serializedName: 'aggregationType',
        type: {
          name: 'String',
        },
      },
      availabilities: {
        serializedName: 'availabilities',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'Availability',
            },
          },
        },
      },
      enableRegionalMdmAccount: {
        serializedName: 'enableRegionalMdmAccount',
        type: {
          name: 'Boolean',
        },
      },
      fillGapWithZero: {
        serializedName: 'fillGapWithZero',
        type: {
          name: 'Boolean',
        },
      },
      metricFilterPattern: {
        serializedName: 'metricFilterPattern',
        type: {
          name: 'String',
        },
      },
      dimensions: {
        serializedName: 'dimensions',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'Dimension',
            },
          },
        },
      },
      isInternal: {
        serializedName: 'isInternal',
        type: {
          name: 'Boolean',
        },
      },
      sourceMdmAccount: {
        serializedName: 'sourceMdmAccount',
        type: {
          name: 'String',
        },
      },
      sourceMdmNamespace: {
        serializedName: 'sourceMdmNamespace',
        type: {
          name: 'String',
        },
      },
      resourceIdDimensionNameOverride: {
        serializedName: 'resourceIdDimensionNameOverride',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const Availability: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'Availability',
    modelProperties: {
      timeGrain: {
        serializedName: 'timeGrain',
        type: {
          name: 'String',
        },
      },
      retention: {
        serializedName: 'retention',
        type: {
          name: 'String',
        },
      },
      blobDuration: {
        serializedName: 'blobDuration',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const Dimension: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'Dimension',
    modelProperties: {
      name: {
        serializedName: 'name',
        type: {
          name: 'String',
        },
      },
      displayName: {
        serializedName: 'displayName',
        type: {
          name: 'String',
        },
      },
      internalName: {
        serializedName: 'internalName',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const LogSpecification: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'LogSpecification',
    modelProperties: {
      name: {
        serializedName: 'name',
        type: {
          name: 'String',
        },
      },
      displayName: {
        serializedName: 'displayName',
        type: {
          name: 'String',
        },
      },
      blobDuration: {
        serializedName: 'blobDuration',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const PrivateEndpointListResult: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'PrivateEndpointListResult',
    modelProperties: {
      value: {
        serializedName: 'value',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'PrivateEndpoint',
            },
          },
        },
      },
      nextLink: {
        serializedName: 'nextLink',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const AvailablePrivateEndpointTypesResult: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'AvailablePrivateEndpointTypesResult',
    modelProperties: {
      value: {
        serializedName: 'value',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'AvailablePrivateEndpointType',
            },
          },
        },
      },
      nextLink: {
        serializedName: 'nextLink',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const AvailablePrivateEndpointType: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'AvailablePrivateEndpointType',
    modelProperties: {
      name: {
        serializedName: 'name',
        type: {
          name: 'String',
        },
      },
      id: {
        serializedName: 'id',
        type: {
          name: 'String',
        },
      },
      type: {
        serializedName: 'type',
        type: {
          name: 'String',
        },
      },
      resourceName: {
        serializedName: 'resourceName',
        type: {
          name: 'String',
        },
      },
      displayName: {
        serializedName: 'displayName',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const PrivateDnsZoneConfig: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'PrivateDnsZoneConfig',
    modelProperties: {
      name: {
        serializedName: 'name',
        type: {
          name: 'String',
        },
      },
      privateDnsZoneId: {
        serializedName: 'properties.privateDnsZoneId',
        type: {
          name: 'String',
        },
      },
      recordSets: {
        serializedName: 'properties.recordSets',
        readOnly: true,
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'RecordSet',
            },
          },
        },
      },
    },
  },
};

export const RecordSet: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'RecordSet',
    modelProperties: {
      recordType: {
        serializedName: 'recordType',
        type: {
          name: 'String',
        },
      },
      recordSetName: {
        serializedName: 'recordSetName',
        type: {
          name: 'String',
        },
      },
      fqdn: {
        serializedName: 'fqdn',
        type: {
          name: 'String',
        },
      },
      provisioningState: {
        serializedName: 'provisioningState',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      ttl: {
        serializedName: 'ttl',
        type: {
          name: 'Number',
        },
      },
      ipAddresses: {
        serializedName: 'ipAddresses',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
    },
  },
};

export const PrivateDnsZoneGroupListResult: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'PrivateDnsZoneGroupListResult',
    modelProperties: {
      value: {
        serializedName: 'value',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'PrivateDnsZoneGroup',
            },
          },
        },
      },
      nextLink: {
        serializedName: 'nextLink',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const PrivateLinkServiceListResult: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'PrivateLinkServiceListResult',
    modelProperties: {
      value: {
        serializedName: 'value',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'PrivateLinkService',
            },
          },
        },
      },
      nextLink: {
        serializedName: 'nextLink',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const PrivateEndpointConnectionListResult: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'PrivateEndpointConnectionListResult',
    modelProperties: {
      value: {
        serializedName: 'value',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'PrivateEndpointConnection',
            },
          },
        },
      },
      nextLink: {
        serializedName: 'nextLink',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const CheckPrivateLinkServiceVisibilityRequest: msRest.CompositeMapper =
  {
    type: {
      name: 'Composite',
      className: 'CheckPrivateLinkServiceVisibilityRequest',
      modelProperties: {
        privateLinkServiceAlias: {
          serializedName: 'privateLinkServiceAlias',
          type: {
            name: 'String',
          },
        },
      },
    },
  };

export const PrivateLinkServiceVisibility: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'PrivateLinkServiceVisibility',
    modelProperties: {
      visible: {
        serializedName: 'visible',
        type: {
          name: 'Boolean',
        },
      },
    },
  },
};

export const AutoApprovedPrivateLinkServicesResult: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'AutoApprovedPrivateLinkServicesResult',
    modelProperties: {
      value: {
        serializedName: 'value',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'AutoApprovedPrivateLinkService',
            },
          },
        },
      },
      nextLink: {
        serializedName: 'nextLink',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const AutoApprovedPrivateLinkService: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'AutoApprovedPrivateLinkService',
    modelProperties: {
      privateLinkService: {
        serializedName: 'privateLinkService',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const PublicIpDdosProtectionStatusResult: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'PublicIpDdosProtectionStatusResult',
    modelProperties: {
      publicIpAddressId: {
        serializedName: 'publicIpAddressId',
        type: {
          name: 'String',
        },
      },
      publicIpAddress: {
        serializedName: 'publicIpAddress',
        type: {
          name: 'String',
        },
      },
      isWorkloadProtected: {
        serializedName: 'isWorkloadProtected',
        type: {
          name: 'String',
        },
      },
      ddosProtectionPlanId: {
        serializedName: 'ddosProtectionPlanId',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const PublicIPPrefixSku: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'PublicIPPrefixSku',
    modelProperties: {
      name: {
        serializedName: 'name',
        type: {
          name: 'String',
        },
      },
      tier: {
        serializedName: 'tier',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const ReferencedPublicIpAddress: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ReferencedPublicIpAddress',
    modelProperties: {
      id: {
        serializedName: 'id',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const PublicIPPrefixListResult: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'PublicIPPrefixListResult',
    modelProperties: {
      value: {
        serializedName: 'value',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'PublicIPPrefix',
            },
          },
        },
      },
      nextLink: {
        serializedName: 'nextLink',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const RouteFilterListResult: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'RouteFilterListResult',
    modelProperties: {
      value: {
        serializedName: 'value',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'RouteFilter',
            },
          },
        },
      },
      nextLink: {
        serializedName: 'nextLink',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const RouteFilterRuleListResult: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'RouteFilterRuleListResult',
    modelProperties: {
      value: {
        serializedName: 'value',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'RouteFilterRule',
            },
          },
        },
      },
      nextLink: {
        serializedName: 'nextLink',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const RouteTableListResult: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'RouteTableListResult',
    modelProperties: {
      value: {
        serializedName: 'value',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'RouteTable',
            },
          },
        },
      },
      nextLink: {
        serializedName: 'nextLink',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const RouteListResult: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'RouteListResult',
    modelProperties: {
      value: {
        serializedName: 'value',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'Route',
            },
          },
        },
      },
      nextLink: {
        serializedName: 'nextLink',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const SecurityPartnerProviderListResult: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'SecurityPartnerProviderListResult',
    modelProperties: {
      value: {
        serializedName: 'value',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'SecurityPartnerProvider',
            },
          },
        },
      },
      nextLink: {
        serializedName: 'nextLink',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const BgpServiceCommunityListResult: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'BgpServiceCommunityListResult',
    modelProperties: {
      value: {
        serializedName: 'value',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'BgpServiceCommunity',
            },
          },
        },
      },
      nextLink: {
        serializedName: 'nextLink',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const BGPCommunity: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'BGPCommunity',
    modelProperties: {
      serviceSupportedRegion: {
        serializedName: 'serviceSupportedRegion',
        type: {
          name: 'String',
        },
      },
      communityName: {
        serializedName: 'communityName',
        type: {
          name: 'String',
        },
      },
      communityValue: {
        serializedName: 'communityValue',
        type: {
          name: 'String',
        },
      },
      communityPrefixes: {
        serializedName: 'communityPrefixes',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
      isAuthorizedToUse: {
        serializedName: 'isAuthorizedToUse',
        type: {
          name: 'Boolean',
        },
      },
      serviceGroup: {
        serializedName: 'serviceGroup',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const ServiceEndpointPolicyListResult: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ServiceEndpointPolicyListResult',
    modelProperties: {
      value: {
        serializedName: 'value',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'ServiceEndpointPolicy',
            },
          },
        },
      },
      nextLink: {
        serializedName: 'nextLink',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const ServiceEndpointPolicyDefinitionListResult: msRest.CompositeMapper =
  {
    type: {
      name: 'Composite',
      className: 'ServiceEndpointPolicyDefinitionListResult',
      modelProperties: {
        value: {
          serializedName: 'value',
          type: {
            name: 'Sequence',
            element: {
              type: {
                name: 'Composite',
                className: 'ServiceEndpointPolicyDefinition',
              },
            },
          },
        },
        nextLink: {
          serializedName: 'nextLink',
          type: {
            name: 'String',
          },
        },
      },
    },
  };

export const ServiceTagsListResult: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ServiceTagsListResult',
    modelProperties: {
      name: {
        serializedName: 'name',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      id: {
        serializedName: 'id',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      type: {
        serializedName: 'type',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      changeNumber: {
        serializedName: 'changeNumber',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      cloud: {
        serializedName: 'cloud',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      values: {
        serializedName: 'values',
        readOnly: true,
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'ServiceTagInformation',
            },
          },
        },
      },
      nextLink: {
        serializedName: 'nextLink',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const ServiceTagInformation: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ServiceTagInformation',
    modelProperties: {
      properties: {
        serializedName: 'properties',
        type: {
          name: 'Composite',
          className: 'ServiceTagInformationPropertiesFormat',
        },
      },
      name: {
        serializedName: 'name',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      id: {
        serializedName: 'id',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      serviceTagChangeNumber: {
        serializedName: 'serviceTagChangeNumber',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const ServiceTagInformationPropertiesFormat: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ServiceTagInformationPropertiesFormat',
    modelProperties: {
      changeNumber: {
        serializedName: 'changeNumber',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      region: {
        serializedName: 'region',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      systemService: {
        serializedName: 'systemService',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      addressPrefixes: {
        serializedName: 'addressPrefixes',
        readOnly: true,
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
      state: {
        serializedName: 'state',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const ServiceTagInformationListResult: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ServiceTagInformationListResult',
    modelProperties: {
      value: {
        serializedName: 'value',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'ServiceTagInformation',
            },
          },
        },
      },
      nextLink: {
        serializedName: 'nextLink',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const UsagesListResult: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'UsagesListResult',
    modelProperties: {
      value: {
        serializedName: 'value',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'Usage',
            },
          },
        },
      },
      nextLink: {
        serializedName: 'nextLink',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const Usage: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'Usage',
    modelProperties: {
      id: {
        serializedName: 'id',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      unit: {
        serializedName: 'unit',
        required: true,
        type: {
          name: 'String',
        },
      },
      currentValue: {
        serializedName: 'currentValue',
        required: true,
        type: {
          name: 'Number',
        },
      },
      limit: {
        serializedName: 'limit',
        required: true,
        type: {
          name: 'Number',
        },
      },
      name: {
        serializedName: 'name',
        type: {
          name: 'Composite',
          className: 'UsageName',
        },
      },
    },
  },
};

export const UsageName: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'UsageName',
    modelProperties: {
      value: {
        serializedName: 'value',
        type: {
          name: 'String',
        },
      },
      localizedValue: {
        serializedName: 'localizedValue',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const AddressSpace: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'AddressSpace',
    modelProperties: {
      addressPrefixes: {
        serializedName: 'addressPrefixes',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
    },
  },
};

export const DhcpOptions: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'DhcpOptions',
    modelProperties: {
      dnsServers: {
        serializedName: 'dnsServers',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
    },
  },
};

export const VirtualNetworkBgpCommunities: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'VirtualNetworkBgpCommunities',
    modelProperties: {
      virtualNetworkCommunity: {
        serializedName: 'virtualNetworkCommunity',
        required: true,
        type: {
          name: 'String',
        },
      },
      regionalCommunity: {
        serializedName: 'regionalCommunity',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const VirtualNetworkEncryption: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'VirtualNetworkEncryption',
    modelProperties: {
      enabled: {
        serializedName: 'enabled',
        required: true,
        type: {
          name: 'Boolean',
        },
      },
      enforcement: {
        serializedName: 'enforcement',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const VirtualNetworkListResult: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'VirtualNetworkListResult',
    modelProperties: {
      value: {
        serializedName: 'value',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'VirtualNetwork',
            },
          },
        },
      },
      nextLink: {
        serializedName: 'nextLink',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const PrepareNetworkPoliciesRequest: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'PrepareNetworkPoliciesRequest',
    modelProperties: {
      serviceName: {
        serializedName: 'serviceName',
        type: {
          name: 'String',
        },
      },
      networkIntentPolicyConfigurations: {
        serializedName: 'networkIntentPolicyConfigurations',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'NetworkIntentPolicyConfiguration',
            },
          },
        },
      },
    },
  },
};

export const NetworkIntentPolicyConfiguration: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'NetworkIntentPolicyConfiguration',
    modelProperties: {
      networkIntentPolicyName: {
        serializedName: 'networkIntentPolicyName',
        type: {
          name: 'String',
        },
      },
      sourceNetworkIntentPolicy: {
        serializedName: 'sourceNetworkIntentPolicy',
        type: {
          name: 'Composite',
          className: 'NetworkIntentPolicy',
        },
      },
    },
  },
};

export const UnprepareNetworkPoliciesRequest: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'UnprepareNetworkPoliciesRequest',
    modelProperties: {
      serviceName: {
        serializedName: 'serviceName',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const ResourceNavigationLinksListResult: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ResourceNavigationLinksListResult',
    modelProperties: {
      value: {
        serializedName: 'value',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'ResourceNavigationLink',
            },
          },
        },
      },
      nextLink: {
        serializedName: 'nextLink',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const ServiceAssociationLinksListResult: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ServiceAssociationLinksListResult',
    modelProperties: {
      value: {
        serializedName: 'value',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'ServiceAssociationLink',
            },
          },
        },
      },
      nextLink: {
        serializedName: 'nextLink',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const SubnetListResult: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'SubnetListResult',
    modelProperties: {
      value: {
        serializedName: 'value',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'Subnet',
            },
          },
        },
      },
      nextLink: {
        serializedName: 'nextLink',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const VirtualNetworkPeeringListResult: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'VirtualNetworkPeeringListResult',
    modelProperties: {
      value: {
        serializedName: 'value',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'VirtualNetworkPeering',
            },
          },
        },
      },
      nextLink: {
        serializedName: 'nextLink',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const IPAddressAvailabilityResult: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'IPAddressAvailabilityResult',
    modelProperties: {
      available: {
        serializedName: 'available',
        type: {
          name: 'Boolean',
        },
      },
      availableIPAddresses: {
        serializedName: 'availableIPAddresses',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
      isPlatformReserved: {
        serializedName: 'isPlatformReserved',
        type: {
          name: 'Boolean',
        },
      },
    },
  },
};

export const VirtualNetworkListUsageResult: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'VirtualNetworkListUsageResult',
    modelProperties: {
      value: {
        serializedName: 'value',
        readOnly: true,
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'VirtualNetworkUsage',
            },
          },
        },
      },
      nextLink: {
        serializedName: 'nextLink',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const VirtualNetworkUsage: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'VirtualNetworkUsage',
    modelProperties: {
      currentValue: {
        serializedName: 'currentValue',
        readOnly: true,
        type: {
          name: 'Number',
        },
      },
      id: {
        serializedName: 'id',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      limit: {
        serializedName: 'limit',
        readOnly: true,
        type: {
          name: 'Number',
        },
      },
      name: {
        serializedName: 'name',
        type: {
          name: 'Composite',
          className: 'VirtualNetworkUsageName',
        },
      },
      unit: {
        serializedName: 'unit',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const VirtualNetworkUsageName: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'VirtualNetworkUsageName',
    modelProperties: {
      localizedValue: {
        serializedName: 'localizedValue',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      value: {
        serializedName: 'value',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const VirtualNetworkDdosProtectionStatusResult: msRest.CompositeMapper =
  {
    type: {
      name: 'Composite',
      className: 'VirtualNetworkDdosProtectionStatusResult',
      modelProperties: {
        value: {
          serializedName: 'value',
          type: {
            name: 'Sequence',
            element: {
              type: {
                name: 'Composite',
                className: 'PublicIpDdosProtectionStatusResult',
              },
            },
          },
        },
        nextLink: {
          serializedName: 'nextLink',
          type: {
            name: 'String',
          },
        },
      },
    },
  };

export const VirtualNetworkGatewaySku: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'VirtualNetworkGatewaySku',
    modelProperties: {
      name: {
        serializedName: 'name',
        type: {
          name: 'String',
        },
      },
      tier: {
        serializedName: 'tier',
        type: {
          name: 'String',
        },
      },
      capacity: {
        serializedName: 'capacity',
        readOnly: true,
        type: {
          name: 'Number',
        },
      },
    },
  },
};

export const VpnClientConfiguration: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'VpnClientConfiguration',
    modelProperties: {
      vpnClientAddressPool: {
        serializedName: 'vpnClientAddressPool',
        type: {
          name: 'Composite',
          className: 'AddressSpace',
        },
      },
      vpnClientRootCertificates: {
        serializedName: 'vpnClientRootCertificates',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'VpnClientRootCertificate',
            },
          },
        },
      },
      vpnClientRevokedCertificates: {
        serializedName: 'vpnClientRevokedCertificates',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'VpnClientRevokedCertificate',
            },
          },
        },
      },
      vpnClientProtocols: {
        serializedName: 'vpnClientProtocols',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
      vpnAuthenticationTypes: {
        serializedName: 'vpnAuthenticationTypes',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
      vpnClientIpsecPolicies: {
        serializedName: 'vpnClientIpsecPolicies',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'IpsecPolicy',
            },
          },
        },
      },
      radiusServerAddress: {
        serializedName: 'radiusServerAddress',
        type: {
          name: 'String',
        },
      },
      radiusServerSecret: {
        serializedName: 'radiusServerSecret',
        type: {
          name: 'String',
        },
      },
      radiusServers: {
        serializedName: 'radiusServers',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'RadiusServer',
            },
          },
        },
      },
      aadTenant: {
        serializedName: 'aadTenant',
        type: {
          name: 'String',
        },
      },
      aadAudience: {
        serializedName: 'aadAudience',
        type: {
          name: 'String',
        },
      },
      aadIssuer: {
        serializedName: 'aadIssuer',
        type: {
          name: 'String',
        },
      },
      vngClientConnectionConfigurations: {
        serializedName: 'vngClientConnectionConfigurations',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'VngClientConnectionConfiguration',
            },
          },
        },
      },
    },
  },
};

export const IpsecPolicy: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'IpsecPolicy',
    modelProperties: {
      saLifeTimeSeconds: {
        serializedName: 'saLifeTimeSeconds',
        required: true,
        type: {
          name: 'Number',
        },
      },
      saDataSizeKilobytes: {
        serializedName: 'saDataSizeKilobytes',
        required: true,
        type: {
          name: 'Number',
        },
      },
      ipsecEncryption: {
        serializedName: 'ipsecEncryption',
        required: true,
        type: {
          name: 'String',
        },
      },
      ipsecIntegrity: {
        serializedName: 'ipsecIntegrity',
        required: true,
        type: {
          name: 'String',
        },
      },
      ikeEncryption: {
        serializedName: 'ikeEncryption',
        required: true,
        type: {
          name: 'String',
        },
      },
      ikeIntegrity: {
        serializedName: 'ikeIntegrity',
        required: true,
        type: {
          name: 'String',
        },
      },
      dhGroup: {
        serializedName: 'dhGroup',
        required: true,
        type: {
          name: 'String',
        },
      },
      pfsGroup: {
        serializedName: 'pfsGroup',
        required: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const RadiusServer: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'RadiusServer',
    modelProperties: {
      radiusServerAddress: {
        serializedName: 'radiusServerAddress',
        required: true,
        type: {
          name: 'String',
        },
      },
      radiusServerScore: {
        serializedName: 'radiusServerScore',
        type: {
          name: 'Number',
        },
      },
      radiusServerSecret: {
        serializedName: 'radiusServerSecret',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const VirtualNetworkGatewayPolicyGroupMember: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'VirtualNetworkGatewayPolicyGroupMember',
    modelProperties: {
      name: {
        serializedName: 'name',
        type: {
          name: 'String',
        },
      },
      attributeType: {
        serializedName: 'attributeType',
        type: {
          name: 'String',
        },
      },
      attributeValue: {
        serializedName: 'attributeValue',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const BgpSettings: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'BgpSettings',
    modelProperties: {
      asn: {
        constraints: {
          InclusiveMaximum: 4294967295,
          InclusiveMinimum: 0,
        },
        serializedName: 'asn',
        type: {
          name: 'Number',
        },
      },
      bgpPeeringAddress: {
        serializedName: 'bgpPeeringAddress',
        type: {
          name: 'String',
        },
      },
      peerWeight: {
        serializedName: 'peerWeight',
        type: {
          name: 'Number',
        },
      },
      bgpPeeringAddresses: {
        serializedName: 'bgpPeeringAddresses',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'IPConfigurationBgpPeeringAddress',
            },
          },
        },
      },
    },
  },
};

export const IPConfigurationBgpPeeringAddress: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'IPConfigurationBgpPeeringAddress',
    modelProperties: {
      ipconfigurationId: {
        serializedName: 'ipconfigurationId',
        type: {
          name: 'String',
        },
      },
      defaultBgpIpAddresses: {
        serializedName: 'defaultBgpIpAddresses',
        readOnly: true,
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
      customBgpIpAddresses: {
        serializedName: 'customBgpIpAddresses',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
      tunnelIpAddresses: {
        serializedName: 'tunnelIpAddresses',
        readOnly: true,
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
    },
  },
};

export const VpnNatRuleMapping: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'VpnNatRuleMapping',
    modelProperties: {
      addressSpace: {
        serializedName: 'addressSpace',
        type: {
          name: 'String',
        },
      },
      portRange: {
        serializedName: 'portRange',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const VirtualNetworkGatewayListResult: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'VirtualNetworkGatewayListResult',
    modelProperties: {
      value: {
        serializedName: 'value',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'VirtualNetworkGateway',
            },
          },
        },
      },
      nextLink: {
        serializedName: 'nextLink',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const VirtualNetworkGatewayListConnectionsResult: msRest.CompositeMapper =
  {
    type: {
      name: 'Composite',
      className: 'VirtualNetworkGatewayListConnectionsResult',
      modelProperties: {
        value: {
          serializedName: 'value',
          type: {
            name: 'Sequence',
            element: {
              type: {
                name: 'Composite',
                className: 'VirtualNetworkGatewayConnectionListEntity',
              },
            },
          },
        },
        nextLink: {
          serializedName: 'nextLink',
          readOnly: true,
          type: {
            name: 'String',
          },
        },
      },
    },
  };

export const VirtualNetworkConnectionGatewayReference: msRest.CompositeMapper =
  {
    type: {
      name: 'Composite',
      className: 'VirtualNetworkConnectionGatewayReference',
      modelProperties: {
        id: {
          serializedName: 'id',
          required: true,
          type: {
            name: 'String',
          },
        },
      },
    },
  };

export const TunnelConnectionHealth: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'TunnelConnectionHealth',
    modelProperties: {
      tunnel: {
        serializedName: 'tunnel',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      connectionStatus: {
        serializedName: 'connectionStatus',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      ingressBytesTransferred: {
        serializedName: 'ingressBytesTransferred',
        readOnly: true,
        type: {
          name: 'Number',
        },
      },
      egressBytesTransferred: {
        serializedName: 'egressBytesTransferred',
        readOnly: true,
        type: {
          name: 'Number',
        },
      },
      lastConnectionEstablishedUtcTime: {
        serializedName: 'lastConnectionEstablishedUtcTime',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const GatewayCustomBgpIpAddressIpConfiguration: msRest.CompositeMapper =
  {
    type: {
      name: 'Composite',
      className: 'GatewayCustomBgpIpAddressIpConfiguration',
      modelProperties: {
        ipConfigurationId: {
          serializedName: 'ipConfigurationId',
          required: true,
          type: {
            name: 'String',
          },
        },
        customBgpIpAddress: {
          serializedName: 'customBgpIpAddress',
          required: true,
          type: {
            name: 'String',
          },
        },
      },
    },
  };

export const TrafficSelectorPolicy: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'TrafficSelectorPolicy',
    modelProperties: {
      localAddressRanges: {
        serializedName: 'localAddressRanges',
        required: true,
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
      remoteAddressRanges: {
        serializedName: 'remoteAddressRanges',
        required: true,
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
    },
  },
};

export const VpnClientParameters: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'VpnClientParameters',
    modelProperties: {
      processorArchitecture: {
        serializedName: 'processorArchitecture',
        type: {
          name: 'String',
        },
      },
      authenticationMethod: {
        serializedName: 'authenticationMethod',
        type: {
          name: 'String',
        },
      },
      radiusServerAuthCertificate: {
        serializedName: 'radiusServerAuthCertificate',
        type: {
          name: 'String',
        },
      },
      clientRootCertificates: {
        serializedName: 'clientRootCertificates',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
    },
  },
};

export const BgpPeerStatusListResult: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'BgpPeerStatusListResult',
    modelProperties: {
      value: {
        serializedName: 'value',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'BgpPeerStatus',
            },
          },
        },
      },
    },
  },
};

export const BgpPeerStatus: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'BgpPeerStatus',
    modelProperties: {
      localAddress: {
        serializedName: 'localAddress',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      neighbor: {
        serializedName: 'neighbor',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      asn: {
        constraints: {
          InclusiveMaximum: 4294967295,
          InclusiveMinimum: 0,
        },
        serializedName: 'asn',
        readOnly: true,
        type: {
          name: 'Number',
        },
      },
      state: {
        serializedName: 'state',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      connectedDuration: {
        serializedName: 'connectedDuration',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      routesReceived: {
        serializedName: 'routesReceived',
        readOnly: true,
        type: {
          name: 'Number',
        },
      },
      messagesSent: {
        serializedName: 'messagesSent',
        readOnly: true,
        type: {
          name: 'Number',
        },
      },
      messagesReceived: {
        serializedName: 'messagesReceived',
        readOnly: true,
        type: {
          name: 'Number',
        },
      },
    },
  },
};

export const GatewayRouteListResult: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'GatewayRouteListResult',
    modelProperties: {
      value: {
        serializedName: 'value',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'GatewayRoute',
            },
          },
        },
      },
    },
  },
};

export const GatewayRoute: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'GatewayRoute',
    modelProperties: {
      localAddress: {
        serializedName: 'localAddress',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      network: {
        serializedName: 'network',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      nextHop: {
        serializedName: 'nextHop',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      sourcePeer: {
        serializedName: 'sourcePeer',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      origin: {
        serializedName: 'origin',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      asPath: {
        serializedName: 'asPath',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      weight: {
        serializedName: 'weight',
        readOnly: true,
        type: {
          name: 'Number',
        },
      },
    },
  },
};

export const VpnClientIPsecParameters: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'VpnClientIPsecParameters',
    modelProperties: {
      saLifeTimeSeconds: {
        serializedName: 'saLifeTimeSeconds',
        required: true,
        type: {
          name: 'Number',
        },
      },
      saDataSizeKilobytes: {
        serializedName: 'saDataSizeKilobytes',
        required: true,
        type: {
          name: 'Number',
        },
      },
      ipsecEncryption: {
        serializedName: 'ipsecEncryption',
        required: true,
        type: {
          name: 'String',
        },
      },
      ipsecIntegrity: {
        serializedName: 'ipsecIntegrity',
        required: true,
        type: {
          name: 'String',
        },
      },
      ikeEncryption: {
        serializedName: 'ikeEncryption',
        required: true,
        type: {
          name: 'String',
        },
      },
      ikeIntegrity: {
        serializedName: 'ikeIntegrity',
        required: true,
        type: {
          name: 'String',
        },
      },
      dhGroup: {
        serializedName: 'dhGroup',
        required: true,
        type: {
          name: 'String',
        },
      },
      pfsGroup: {
        serializedName: 'pfsGroup',
        required: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const VpnDeviceScriptParameters: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'VpnDeviceScriptParameters',
    modelProperties: {
      vendor: {
        serializedName: 'vendor',
        type: {
          name: 'String',
        },
      },
      deviceFamily: {
        serializedName: 'deviceFamily',
        type: {
          name: 'String',
        },
      },
      firmwareVersion: {
        serializedName: 'firmwareVersion',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const VpnPacketCaptureStartParameters: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'VpnPacketCaptureStartParameters',
    modelProperties: {
      filterData: {
        serializedName: 'filterData',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const VpnPacketCaptureStopParameters: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'VpnPacketCaptureStopParameters',
    modelProperties: {
      sasUrl: {
        serializedName: 'sasUrl',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const VirtualNetworkGatewayConnectionListResult: msRest.CompositeMapper =
  {
    type: {
      name: 'Composite',
      className: 'VirtualNetworkGatewayConnectionListResult',
      modelProperties: {
        value: {
          serializedName: 'value',
          type: {
            name: 'Sequence',
            element: {
              type: {
                name: 'Composite',
                className: 'VirtualNetworkGatewayConnection',
              },
            },
          },
        },
        nextLink: {
          serializedName: 'nextLink',
          readOnly: true,
          type: {
            name: 'String',
          },
        },
      },
    },
  };

export const ConnectionResetSharedKey: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ConnectionResetSharedKey',
    modelProperties: {
      keyLength: {
        constraints: {
          InclusiveMaximum: 128,
          InclusiveMinimum: 1,
        },
        serializedName: 'keyLength',
        required: true,
        type: {
          name: 'Number',
        },
      },
    },
  },
};

export const LocalNetworkGatewayListResult: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'LocalNetworkGatewayListResult',
    modelProperties: {
      value: {
        serializedName: 'value',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'LocalNetworkGateway',
            },
          },
        },
      },
      nextLink: {
        serializedName: 'nextLink',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const VpnClientConnectionHealthDetailListResult: msRest.CompositeMapper =
  {
    type: {
      name: 'Composite',
      className: 'VpnClientConnectionHealthDetailListResult',
      modelProperties: {
        value: {
          serializedName: 'value',
          type: {
            name: 'Sequence',
            element: {
              type: {
                name: 'Composite',
                className: 'VpnClientConnectionHealthDetail',
              },
            },
          },
        },
      },
    },
  };

export const VpnClientConnectionHealthDetail: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'VpnClientConnectionHealthDetail',
    modelProperties: {
      vpnConnectionId: {
        serializedName: 'vpnConnectionId',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      vpnConnectionDuration: {
        serializedName: 'vpnConnectionDuration',
        readOnly: true,
        type: {
          name: 'Number',
        },
      },
      vpnConnectionTime: {
        serializedName: 'vpnConnectionTime',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      publicIpAddress: {
        serializedName: 'publicIpAddress',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      privateIpAddress: {
        serializedName: 'privateIpAddress',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      vpnUserName: {
        serializedName: 'vpnUserName',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      maxBandwidth: {
        serializedName: 'maxBandwidth',
        readOnly: true,
        type: {
          name: 'Number',
        },
      },
      egressPacketsTransferred: {
        serializedName: 'egressPacketsTransferred',
        readOnly: true,
        type: {
          name: 'Number',
        },
      },
      egressBytesTransferred: {
        serializedName: 'egressBytesTransferred',
        readOnly: true,
        type: {
          name: 'Number',
        },
      },
      ingressPacketsTransferred: {
        serializedName: 'ingressPacketsTransferred',
        readOnly: true,
        type: {
          name: 'Number',
        },
      },
      ingressBytesTransferred: {
        serializedName: 'ingressBytesTransferred',
        readOnly: true,
        type: {
          name: 'Number',
        },
      },
      maxPacketsPerSecond: {
        serializedName: 'maxPacketsPerSecond',
        readOnly: true,
        type: {
          name: 'Number',
        },
      },
    },
  },
};

export const P2SVpnConnectionRequest: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'P2SVpnConnectionRequest',
    modelProperties: {
      vpnConnectionIds: {
        serializedName: 'vpnConnectionIds',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
    },
  },
};

export const ListVirtualNetworkGatewayNatRulesResult: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ListVirtualNetworkGatewayNatRulesResult',
    modelProperties: {
      value: {
        serializedName: 'value',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'VirtualNetworkGatewayNatRule',
            },
          },
        },
      },
      nextLink: {
        serializedName: 'nextLink',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const VirtualNetworkTapListResult: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'VirtualNetworkTapListResult',
    modelProperties: {
      value: {
        serializedName: 'value',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'VirtualNetworkTap',
            },
          },
        },
      },
      nextLink: {
        serializedName: 'nextLink',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const VirtualRouterListResult: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'VirtualRouterListResult',
    modelProperties: {
      value: {
        serializedName: 'value',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'VirtualRouter',
            },
          },
        },
      },
      nextLink: {
        serializedName: 'nextLink',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const VirtualRouterPeeringListResult: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'VirtualRouterPeeringListResult',
    modelProperties: {
      value: {
        serializedName: 'value',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'VirtualRouterPeering',
            },
          },
        },
      },
      nextLink: {
        serializedName: 'nextLink',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const ListVirtualWANsResult: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ListVirtualWANsResult',
    modelProperties: {
      value: {
        serializedName: 'value',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'VirtualWAN',
            },
          },
        },
      },
      nextLink: {
        serializedName: 'nextLink',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const DeviceProperties: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'DeviceProperties',
    modelProperties: {
      deviceVendor: {
        serializedName: 'deviceVendor',
        type: {
          name: 'String',
        },
      },
      deviceModel: {
        serializedName: 'deviceModel',
        type: {
          name: 'String',
        },
      },
      linkSpeedInMbps: {
        serializedName: 'linkSpeedInMbps',
        type: {
          name: 'Number',
        },
      },
    },
  },
};

export const VpnLinkProviderProperties: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'VpnLinkProviderProperties',
    modelProperties: {
      linkProviderName: {
        serializedName: 'linkProviderName',
        type: {
          name: 'String',
        },
      },
      linkSpeedInMbps: {
        serializedName: 'linkSpeedInMbps',
        type: {
          name: 'Number',
        },
      },
    },
  },
};

export const VpnLinkBgpSettings: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'VpnLinkBgpSettings',
    modelProperties: {
      asn: {
        serializedName: 'asn',
        type: {
          name: 'Number',
        },
      },
      bgpPeeringAddress: {
        serializedName: 'bgpPeeringAddress',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const O365PolicyProperties: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'O365PolicyProperties',
    modelProperties: {
      breakOutCategories: {
        serializedName: 'breakOutCategories',
        type: {
          name: 'Composite',
          className: 'O365BreakOutCategoryPolicies',
        },
      },
    },
  },
};

export const O365BreakOutCategoryPolicies: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'O365BreakOutCategoryPolicies',
    modelProperties: {
      allow: {
        serializedName: 'allow',
        type: {
          name: 'Boolean',
        },
      },
      optimize: {
        serializedName: 'optimize',
        type: {
          name: 'Boolean',
        },
      },
      default: {
        serializedName: 'default',
        type: {
          name: 'Boolean',
        },
      },
    },
  },
};

export const ListVpnSitesResult: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ListVpnSitesResult',
    modelProperties: {
      value: {
        serializedName: 'value',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'VpnSite',
            },
          },
        },
      },
      nextLink: {
        serializedName: 'nextLink',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const ListVpnSiteLinksResult: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ListVpnSiteLinksResult',
    modelProperties: {
      value: {
        serializedName: 'value',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'VpnSiteLink',
            },
          },
        },
      },
      nextLink: {
        serializedName: 'nextLink',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const GetVpnSitesConfigurationRequest: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'GetVpnSitesConfigurationRequest',
    modelProperties: {
      vpnSites: {
        serializedName: 'vpnSites',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
      outputBlobSasUrl: {
        serializedName: 'outputBlobSasUrl',
        required: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const VirtualWanSecurityProviders: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'VirtualWanSecurityProviders',
    modelProperties: {
      supportedProviders: {
        serializedName: 'supportedProviders',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'VirtualWanSecurityProvider',
            },
          },
        },
      },
    },
  },
};

export const VirtualWanSecurityProvider: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'VirtualWanSecurityProvider',
    modelProperties: {
      name: {
        serializedName: 'name',
        type: {
          name: 'String',
        },
      },
      url: {
        serializedName: 'url',
        type: {
          name: 'String',
        },
      },
      type: {
        serializedName: 'type',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const VpnServerConfigVpnClientRootCertificate: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'VpnServerConfigVpnClientRootCertificate',
    modelProperties: {
      name: {
        serializedName: 'name',
        type: {
          name: 'String',
        },
      },
      publicCertData: {
        serializedName: 'publicCertData',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const VpnServerConfigVpnClientRevokedCertificate: msRest.CompositeMapper =
  {
    type: {
      name: 'Composite',
      className: 'VpnServerConfigVpnClientRevokedCertificate',
      modelProperties: {
        name: {
          serializedName: 'name',
          type: {
            name: 'String',
          },
        },
        thumbprint: {
          serializedName: 'thumbprint',
          type: {
            name: 'String',
          },
        },
      },
    },
  };

export const VpnServerConfigRadiusServerRootCertificate: msRest.CompositeMapper =
  {
    type: {
      name: 'Composite',
      className: 'VpnServerConfigRadiusServerRootCertificate',
      modelProperties: {
        name: {
          serializedName: 'name',
          type: {
            name: 'String',
          },
        },
        publicCertData: {
          serializedName: 'publicCertData',
          type: {
            name: 'String',
          },
        },
      },
    },
  };

export const VpnServerConfigRadiusClientRootCertificate: msRest.CompositeMapper =
  {
    type: {
      name: 'Composite',
      className: 'VpnServerConfigRadiusClientRootCertificate',
      modelProperties: {
        name: {
          serializedName: 'name',
          type: {
            name: 'String',
          },
        },
        thumbprint: {
          serializedName: 'thumbprint',
          type: {
            name: 'String',
          },
        },
      },
    },
  };

export const AadAuthenticationParameters: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'AadAuthenticationParameters',
    modelProperties: {
      aadTenant: {
        serializedName: 'aadTenant',
        type: {
          name: 'String',
        },
      },
      aadAudience: {
        serializedName: 'aadAudience',
        type: {
          name: 'String',
        },
      },
      aadIssuer: {
        serializedName: 'aadIssuer',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const RoutingConfiguration: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'RoutingConfiguration',
    modelProperties: {
      associatedRouteTable: {
        serializedName: 'associatedRouteTable',
        type: {
          name: 'Composite',
          className: 'SubResource',
        },
      },
      propagatedRouteTables: {
        serializedName: 'propagatedRouteTables',
        type: {
          name: 'Composite',
          className: 'PropagatedRouteTable',
        },
      },
      vnetRoutes: {
        serializedName: 'vnetRoutes',
        type: {
          name: 'Composite',
          className: 'VnetRoute',
        },
      },
      inboundRouteMap: {
        serializedName: 'inboundRouteMap',
        type: {
          name: 'Composite',
          className: 'SubResource',
        },
      },
      outboundRouteMap: {
        serializedName: 'outboundRouteMap',
        type: {
          name: 'Composite',
          className: 'SubResource',
        },
      },
    },
  },
};

export const PropagatedRouteTable: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'PropagatedRouteTable',
    modelProperties: {
      labels: {
        serializedName: 'labels',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
      ids: {
        serializedName: 'ids',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'SubResource',
            },
          },
        },
      },
    },
  },
};

export const VnetRoute: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'VnetRoute',
    modelProperties: {
      staticRoutesConfig: {
        serializedName: 'staticRoutesConfig',
        type: {
          name: 'Composite',
          className: 'StaticRoutesConfig',
        },
      },
      staticRoutes: {
        serializedName: 'staticRoutes',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'StaticRoute',
            },
          },
        },
      },
      bgpConnections: {
        serializedName: 'bgpConnections',
        readOnly: true,
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'SubResource',
            },
          },
        },
      },
    },
  },
};

export const StaticRoutesConfig: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'StaticRoutesConfig',
    modelProperties: {
      propagateStaticRoutes: {
        serializedName: 'propagateStaticRoutes',
        readOnly: true,
        type: {
          name: 'Boolean',
        },
      },
      vnetLocalRouteOverrideCriteria: {
        serializedName: 'vnetLocalRouteOverrideCriteria',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const StaticRoute: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'StaticRoute',
    modelProperties: {
      name: {
        serializedName: 'name',
        type: {
          name: 'String',
        },
      },
      addressPrefixes: {
        serializedName: 'addressPrefixes',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
      nextHopIpAddress: {
        serializedName: 'nextHopIpAddress',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const VpnServerConfigurationPolicyGroupMember: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'VpnServerConfigurationPolicyGroupMember',
    modelProperties: {
      name: {
        serializedName: 'name',
        type: {
          name: 'String',
        },
      },
      attributeType: {
        serializedName: 'attributeType',
        type: {
          name: 'String',
        },
      },
      attributeValue: {
        serializedName: 'attributeValue',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const VpnClientConnectionHealth: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'VpnClientConnectionHealth',
    modelProperties: {
      totalIngressBytesTransferred: {
        serializedName: 'totalIngressBytesTransferred',
        readOnly: true,
        type: {
          name: 'Number',
        },
      },
      totalEgressBytesTransferred: {
        serializedName: 'totalEgressBytesTransferred',
        readOnly: true,
        type: {
          name: 'Number',
        },
      },
      vpnClientConnectionsCount: {
        serializedName: 'vpnClientConnectionsCount',
        type: {
          name: 'Number',
        },
      },
      allocatedIpAddresses: {
        serializedName: 'allocatedIpAddresses',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
    },
  },
};

export const ListVpnServerConfigurationsResult: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ListVpnServerConfigurationsResult',
    modelProperties: {
      value: {
        serializedName: 'value',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'VpnServerConfiguration',
            },
          },
        },
      },
      nextLink: {
        serializedName: 'nextLink',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const ListVpnServerConfigurationPolicyGroupsResult: msRest.CompositeMapper =
  {
    type: {
      name: 'Composite',
      className: 'ListVpnServerConfigurationPolicyGroupsResult',
      modelProperties: {
        value: {
          serializedName: 'value',
          type: {
            name: 'Sequence',
            element: {
              type: {
                name: 'Composite',
                className: 'VpnServerConfigurationPolicyGroup',
              },
            },
          },
        },
        nextLink: {
          serializedName: 'nextLink',
          type: {
            name: 'String',
          },
        },
      },
    },
  };

export const VirtualHubRouteTable: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'VirtualHubRouteTable',
    modelProperties: {
      routes: {
        serializedName: 'routes',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'VirtualHubRoute',
            },
          },
        },
      },
    },
  },
};

export const VirtualHubRoute: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'VirtualHubRoute',
    modelProperties: {
      addressPrefixes: {
        serializedName: 'addressPrefixes',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
      nextHopIpAddress: {
        serializedName: 'nextHopIpAddress',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const VirtualHubRouteV2: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'VirtualHubRouteV2',
    modelProperties: {
      destinationType: {
        serializedName: 'destinationType',
        type: {
          name: 'String',
        },
      },
      destinations: {
        serializedName: 'destinations',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
      nextHopType: {
        serializedName: 'nextHopType',
        type: {
          name: 'String',
        },
      },
      nextHops: {
        serializedName: 'nextHops',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
    },
  },
};

export const VirtualRouterAutoScaleConfiguration: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'VirtualRouterAutoScaleConfiguration',
    modelProperties: {
      minCapacity: {
        constraints: {
          InclusiveMinimum: 0,
        },
        serializedName: 'minCapacity',
        type: {
          name: 'Number',
        },
      },
    },
  },
};

export const ListVirtualHubsResult: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ListVirtualHubsResult',
    modelProperties: {
      value: {
        serializedName: 'value',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'VirtualHub',
            },
          },
        },
      },
      nextLink: {
        serializedName: 'nextLink',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const RouteMapRule: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'RouteMapRule',
    modelProperties: {
      name: {
        serializedName: 'name',
        type: {
          name: 'String',
        },
      },
      matchCriteria: {
        serializedName: 'matchCriteria',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'Criterion',
            },
          },
        },
      },
      actions: {
        serializedName: 'actions',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'Action',
            },
          },
        },
      },
      nextStepIfMatched: {
        serializedName: 'nextStepIfMatched',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const Criterion: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'Criterion',
    modelProperties: {
      routePrefix: {
        serializedName: 'routePrefix',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
      community: {
        serializedName: 'community',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
      asPath: {
        serializedName: 'asPath',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
      matchCondition: {
        serializedName: 'matchCondition',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const Action: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'Action',
    modelProperties: {
      type: {
        serializedName: 'type',
        type: {
          name: 'String',
        },
      },
      parameters: {
        serializedName: 'parameters',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'Parameter',
            },
          },
        },
      },
    },
  },
};

export const Parameter: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'Parameter',
    modelProperties: {
      routePrefix: {
        serializedName: 'routePrefix',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
      community: {
        serializedName: 'community',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
      asPath: {
        serializedName: 'asPath',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
    },
  },
};

export const ListRouteMapsResult: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ListRouteMapsResult',
    modelProperties: {
      value: {
        serializedName: 'value',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'RouteMap',
            },
          },
        },
      },
      nextLink: {
        serializedName: 'nextLink',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const ListHubVirtualNetworkConnectionsResult: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ListHubVirtualNetworkConnectionsResult',
    modelProperties: {
      value: {
        serializedName: 'value',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'HubVirtualNetworkConnection',
            },
          },
        },
      },
      nextLink: {
        serializedName: 'nextLink',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const VpnGatewayIpConfiguration: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'VpnGatewayIpConfiguration',
    modelProperties: {
      id: {
        serializedName: 'id',
        type: {
          name: 'String',
        },
      },
      publicIpAddress: {
        serializedName: 'publicIpAddress',
        type: {
          name: 'String',
        },
      },
      privateIpAddress: {
        serializedName: 'privateIpAddress',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const VpnGatewayPacketCaptureStartParameters: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'VpnGatewayPacketCaptureStartParameters',
    modelProperties: {
      filterData: {
        serializedName: 'filterData',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const VpnGatewayPacketCaptureStopParameters: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'VpnGatewayPacketCaptureStopParameters',
    modelProperties: {
      sasUrl: {
        serializedName: 'sasUrl',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const ListVpnGatewaysResult: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ListVpnGatewaysResult',
    modelProperties: {
      value: {
        serializedName: 'value',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'VpnGateway',
            },
          },
        },
      },
      nextLink: {
        serializedName: 'nextLink',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const VpnConnectionPacketCaptureStartParameters: msRest.CompositeMapper =
  {
    type: {
      name: 'Composite',
      className: 'VpnConnectionPacketCaptureStartParameters',
      modelProperties: {
        filterData: {
          serializedName: 'filterData',
          type: {
            name: 'String',
          },
        },
        linkConnectionNames: {
          serializedName: 'linkConnectionNames',
          type: {
            name: 'Sequence',
            element: {
              type: {
                name: 'String',
              },
            },
          },
        },
      },
    },
  };

export const VpnConnectionPacketCaptureStopParameters: msRest.CompositeMapper =
  {
    type: {
      name: 'Composite',
      className: 'VpnConnectionPacketCaptureStopParameters',
      modelProperties: {
        sasUrl: {
          serializedName: 'sasUrl',
          type: {
            name: 'String',
          },
        },
        linkConnectionNames: {
          serializedName: 'linkConnectionNames',
          type: {
            name: 'Sequence',
            element: {
              type: {
                name: 'String',
              },
            },
          },
        },
      },
    },
  };

export const ListVpnConnectionsResult: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ListVpnConnectionsResult',
    modelProperties: {
      value: {
        serializedName: 'value',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'VpnConnection',
            },
          },
        },
      },
      nextLink: {
        serializedName: 'nextLink',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const ListVpnSiteLinkConnectionsResult: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ListVpnSiteLinkConnectionsResult',
    modelProperties: {
      value: {
        serializedName: 'value',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'VpnSiteLinkConnection',
            },
          },
        },
      },
      nextLink: {
        serializedName: 'nextLink',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const ListVpnGatewayNatRulesResult: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ListVpnGatewayNatRulesResult',
    modelProperties: {
      value: {
        serializedName: 'value',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'VpnGatewayNatRule',
            },
          },
        },
      },
      nextLink: {
        serializedName: 'nextLink',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const ListP2SVpnGatewaysResult: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ListP2SVpnGatewaysResult',
    modelProperties: {
      value: {
        serializedName: 'value',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'P2SVpnGateway',
            },
          },
        },
      },
      nextLink: {
        serializedName: 'nextLink',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const P2SVpnProfileParameters: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'P2SVpnProfileParameters',
    modelProperties: {
      authenticationMethod: {
        serializedName: 'authenticationMethod',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const VpnProfileResponse: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'VpnProfileResponse',
    modelProperties: {
      profileUrl: {
        serializedName: 'profileUrl',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const P2SVpnConnectionHealthRequest: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'P2SVpnConnectionHealthRequest',
    modelProperties: {
      vpnUserNamesFilter: {
        serializedName: 'vpnUserNamesFilter',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
      outputBlobSasUrl: {
        serializedName: 'outputBlobSasUrl',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const P2SVpnConnectionHealth: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'P2SVpnConnectionHealth',
    modelProperties: {
      sasUrl: {
        serializedName: 'sasUrl',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const VpnServerConfigurationsResponse: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'VpnServerConfigurationsResponse',
    modelProperties: {
      vpnServerConfigurationResourceIds: {
        serializedName: 'vpnServerConfigurationResourceIds',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
    },
  },
};

export const VirtualWanVpnProfileParameters: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'VirtualWanVpnProfileParameters',
    modelProperties: {
      vpnServerConfigurationResourceId: {
        serializedName: 'vpnServerConfigurationResourceId',
        type: {
          name: 'String',
        },
      },
      authenticationMethod: {
        serializedName: 'authenticationMethod',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const ListVirtualHubRouteTableV2SResult: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ListVirtualHubRouteTableV2SResult',
    modelProperties: {
      value: {
        serializedName: 'value',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'VirtualHubRouteTableV2',
            },
          },
        },
      },
      nextLink: {
        serializedName: 'nextLink',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const ExpressRouteGatewayList: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ExpressRouteGatewayList',
    modelProperties: {
      value: {
        serializedName: 'value',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'ExpressRouteGateway',
            },
          },
        },
      },
    },
  },
};

export const ExpressRouteGatewayPropertiesAutoScaleConfiguration: msRest.CompositeMapper =
  {
    type: {
      name: 'Composite',
      className: 'ExpressRouteGatewayPropertiesAutoScaleConfiguration',
      modelProperties: {
        bounds: {
          serializedName: 'bounds',
          type: {
            name: 'Composite',
            className:
              'ExpressRouteGatewayPropertiesAutoScaleConfigurationBounds',
          },
        },
      },
    },
  };

export const ExpressRouteGatewayPropertiesAutoScaleConfigurationBounds: msRest.CompositeMapper =
  {
    type: {
      name: 'Composite',
      className: 'ExpressRouteGatewayPropertiesAutoScaleConfigurationBounds',
      modelProperties: {
        min: {
          serializedName: 'min',
          type: {
            name: 'Number',
          },
        },
        max: {
          serializedName: 'max',
          type: {
            name: 'Number',
          },
        },
      },
    },
  };

export const ExpressRouteCircuitPeeringId: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ExpressRouteCircuitPeeringId',
    modelProperties: {
      id: {
        serializedName: 'id',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const VirtualHubId: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'VirtualHubId',
    modelProperties: {
      id: {
        serializedName: 'id',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const ExpressRouteConnectionList: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ExpressRouteConnectionList',
    modelProperties: {
      value: {
        serializedName: 'value',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'ExpressRouteConnection',
            },
          },
        },
      },
    },
  },
};

export const RoutingConfigurationNfv: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'RoutingConfigurationNfv',
    modelProperties: {
      associatedRouteTable: {
        serializedName: 'associatedRouteTable',
        type: {
          name: 'Composite',
          className: 'RoutingConfigurationNfvSubResource',
        },
      },
      propagatedRouteTables: {
        serializedName: 'propagatedRouteTables',
        type: {
          name: 'Composite',
          className: 'PropagatedRouteTableNfv',
        },
      },
      inboundRouteMap: {
        serializedName: 'inboundRouteMap',
        type: {
          name: 'Composite',
          className: 'RoutingConfigurationNfvSubResource',
        },
      },
      outboundRouteMap: {
        serializedName: 'outboundRouteMap',
        type: {
          name: 'Composite',
          className: 'RoutingConfigurationNfvSubResource',
        },
      },
    },
  },
};

export const RoutingConfigurationNfvSubResource: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'RoutingConfigurationNfvSubResource',
    modelProperties: {
      resourceUri: {
        serializedName: 'resourceUri',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const PropagatedRouteTableNfv: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'PropagatedRouteTableNfv',
    modelProperties: {
      labels: {
        serializedName: 'labels',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
      ids: {
        serializedName: 'ids',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'RoutingConfigurationNfvSubResource',
            },
          },
        },
      },
    },
  },
};

export const NetworkVirtualApplianceConnectionList: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'NetworkVirtualApplianceConnectionList',
    modelProperties: {
      value: {
        serializedName: 'value',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'NetworkVirtualApplianceConnection',
            },
          },
        },
      },
      nextLink: {
        serializedName: 'nextLink',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const ListVirtualHubBgpConnectionResults: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ListVirtualHubBgpConnectionResults',
    modelProperties: {
      value: {
        serializedName: 'value',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'BgpConnection',
            },
          },
        },
      },
      nextLink: {
        serializedName: 'nextLink',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const PeerRoute: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'PeerRoute',
    modelProperties: {
      localAddress: {
        serializedName: 'localAddress',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      network: {
        serializedName: 'network',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      nextHop: {
        serializedName: 'nextHop',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      sourcePeer: {
        serializedName: 'sourcePeer',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      origin: {
        serializedName: 'origin',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      asPath: {
        serializedName: 'asPath',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      weight: {
        serializedName: 'weight',
        readOnly: true,
        type: {
          name: 'Number',
        },
      },
    },
  },
};

export const ListVirtualHubIpConfigurationResults: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ListVirtualHubIpConfigurationResults',
    modelProperties: {
      value: {
        serializedName: 'value',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'HubIpConfiguration',
            },
          },
        },
      },
      nextLink: {
        serializedName: 'nextLink',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const HubRoute: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'HubRoute',
    modelProperties: {
      name: {
        serializedName: 'name',
        required: true,
        type: {
          name: 'String',
        },
      },
      destinationType: {
        serializedName: 'destinationType',
        required: true,
        type: {
          name: 'String',
        },
      },
      destinations: {
        serializedName: 'destinations',
        required: true,
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
      nextHopType: {
        serializedName: 'nextHopType',
        required: true,
        type: {
          name: 'String',
        },
      },
      nextHop: {
        serializedName: 'nextHop',
        required: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const ListHubRouteTablesResult: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ListHubRouteTablesResult',
    modelProperties: {
      value: {
        serializedName: 'value',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'HubRouteTable',
            },
          },
        },
      },
      nextLink: {
        serializedName: 'nextLink',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const EffectiveRoutesParameters: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'EffectiveRoutesParameters',
    modelProperties: {
      resourceId: {
        serializedName: 'resourceId',
        type: {
          name: 'String',
        },
      },
      virtualWanResourceType: {
        serializedName: 'virtualWanResourceType',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const VirtualHubEffectiveRouteList: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'VirtualHubEffectiveRouteList',
    modelProperties: {
      value: {
        serializedName: 'value',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'VirtualHubEffectiveRoute',
            },
          },
        },
      },
    },
  },
};

export const VirtualHubEffectiveRoute: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'VirtualHubEffectiveRoute',
    modelProperties: {
      addressPrefixes: {
        serializedName: 'addressPrefixes',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
      nextHops: {
        serializedName: 'nextHops',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
      nextHopType: {
        serializedName: 'nextHopType',
        type: {
          name: 'String',
        },
      },
      asPath: {
        serializedName: 'asPath',
        type: {
          name: 'String',
        },
      },
      routeOrigin: {
        serializedName: 'routeOrigin',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const GetInboundRoutesParameters: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'GetInboundRoutesParameters',
    modelProperties: {
      resourceUri: {
        serializedName: 'resourceUri',
        type: {
          name: 'String',
        },
      },
      connectionType: {
        serializedName: 'connectionType',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const EffectiveRouteMapRouteList: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'EffectiveRouteMapRouteList',
    modelProperties: {
      value: {
        serializedName: 'value',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'EffectiveRouteMapRoute',
            },
          },
        },
      },
    },
  },
};

export const EffectiveRouteMapRoute: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'EffectiveRouteMapRoute',
    modelProperties: {
      prefix: {
        serializedName: 'prefix',
        type: {
          name: 'String',
        },
      },
      bgpCommunities: {
        serializedName: 'bgpCommunities',
        type: {
          name: 'String',
        },
      },
      asPath: {
        serializedName: 'asPath',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const GetOutboundRoutesParameters: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'GetOutboundRoutesParameters',
    modelProperties: {
      resourceUri: {
        serializedName: 'resourceUri',
        type: {
          name: 'String',
        },
      },
      connectionType: {
        serializedName: 'connectionType',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const RoutingPolicy: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'RoutingPolicy',
    modelProperties: {
      name: {
        serializedName: 'name',
        required: true,
        type: {
          name: 'String',
        },
      },
      destinations: {
        serializedName: 'destinations',
        required: true,
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
      nextHop: {
        serializedName: 'nextHop',
        required: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const ListRoutingIntentResult: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ListRoutingIntentResult',
    modelProperties: {
      value: {
        serializedName: 'value',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'RoutingIntent',
            },
          },
        },
      },
      nextLink: {
        serializedName: 'nextLink',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const WebApplicationFirewallPolicyListResult: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'WebApplicationFirewallPolicyListResult',
    modelProperties: {
      value: {
        serializedName: 'value',
        readOnly: true,
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'WebApplicationFirewallPolicy',
            },
          },
        },
      },
      nextLink: {
        serializedName: 'nextLink',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const PolicySettings: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'PolicySettings',
    modelProperties: {
      state: {
        serializedName: 'state',
        type: {
          name: 'String',
        },
      },
      mode: {
        serializedName: 'mode',
        type: {
          name: 'String',
        },
      },
      requestBodyCheck: {
        serializedName: 'requestBodyCheck',
        type: {
          name: 'Boolean',
        },
      },
      requestBodyInspectLimitInKB: {
        serializedName: 'requestBodyInspectLimitInKB',
        type: {
          name: 'Number',
        },
      },
      requestBodyEnforcement: {
        defaultValue: true,
        serializedName: 'requestBodyEnforcement',
        type: {
          name: 'Boolean',
        },
      },
      maxRequestBodySizeInKb: {
        constraints: {
          InclusiveMinimum: 8,
        },
        serializedName: 'maxRequestBodySizeInKb',
        type: {
          name: 'Number',
        },
      },
      fileUploadEnforcement: {
        defaultValue: true,
        serializedName: 'fileUploadEnforcement',
        type: {
          name: 'Boolean',
        },
      },
      fileUploadLimitInMb: {
        constraints: {
          InclusiveMinimum: 0,
        },
        serializedName: 'fileUploadLimitInMb',
        type: {
          name: 'Number',
        },
      },
      customBlockResponseStatusCode: {
        constraints: {
          InclusiveMinimum: 0,
        },
        serializedName: 'customBlockResponseStatusCode',
        type: {
          name: 'Number',
        },
      },
      customBlockResponseBody: {
        constraints: {
          Pattern: new RegExp(
            '^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{4})$',
          ),
          MaxLength: 32768,
        },
        serializedName: 'customBlockResponseBody',
        type: {
          name: 'String',
        },
      },
      logScrubbing: {
        serializedName: 'logScrubbing',
        type: {
          name: 'Composite',
          className: 'PolicySettingsLogScrubbing',
        },
      },
    },
  },
};

export const PolicySettingsLogScrubbing: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'PolicySettingsLogScrubbing',
    modelProperties: {
      state: {
        serializedName: 'state',
        type: {
          name: 'String',
        },
      },
      scrubbingRules: {
        serializedName: 'scrubbingRules',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'WebApplicationFirewallScrubbingRules',
            },
          },
        },
      },
    },
  },
};

export const WebApplicationFirewallScrubbingRules: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'WebApplicationFirewallScrubbingRules',
    modelProperties: {
      matchVariable: {
        serializedName: 'matchVariable',
        required: true,
        type: {
          name: 'String',
        },
      },
      selectorMatchOperator: {
        serializedName: 'selectorMatchOperator',
        required: true,
        type: {
          name: 'String',
        },
      },
      selector: {
        serializedName: 'selector',
        type: {
          name: 'String',
        },
      },
      state: {
        serializedName: 'state',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const WebApplicationFirewallCustomRule: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'WebApplicationFirewallCustomRule',
    modelProperties: {
      name: {
        constraints: {
          MaxLength: 128,
        },
        serializedName: 'name',
        type: {
          name: 'String',
        },
      },
      etag: {
        serializedName: 'etag',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      priority: {
        serializedName: 'priority',
        required: true,
        type: {
          name: 'Number',
        },
      },
      state: {
        serializedName: 'state',
        type: {
          name: 'String',
        },
      },
      rateLimitDuration: {
        serializedName: 'rateLimitDuration',
        type: {
          name: 'String',
        },
      },
      rateLimitThreshold: {
        serializedName: 'rateLimitThreshold',
        type: {
          name: 'Number',
        },
      },
      ruleType: {
        serializedName: 'ruleType',
        required: true,
        type: {
          name: 'String',
        },
      },
      matchConditions: {
        serializedName: 'matchConditions',
        required: true,
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'MatchCondition',
            },
          },
        },
      },
      groupByUserSession: {
        serializedName: 'groupByUserSession',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'GroupByUserSession',
            },
          },
        },
      },
      action: {
        serializedName: 'action',
        required: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const MatchCondition: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'MatchCondition',
    modelProperties: {
      matchVariables: {
        serializedName: 'matchVariables',
        required: true,
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'MatchVariable',
            },
          },
        },
      },
      operator: {
        serializedName: 'operator',
        required: true,
        type: {
          name: 'String',
        },
      },
      negationConditon: {
        serializedName: 'negationConditon',
        type: {
          name: 'Boolean',
        },
      },
      matchValues: {
        serializedName: 'matchValues',
        required: true,
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
      transforms: {
        serializedName: 'transforms',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
    },
  },
};

export const MatchVariable: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'MatchVariable',
    modelProperties: {
      variableName: {
        serializedName: 'variableName',
        required: true,
        type: {
          name: 'String',
        },
      },
      selector: {
        serializedName: 'selector',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const GroupByUserSession: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'GroupByUserSession',
    modelProperties: {
      groupByVariables: {
        serializedName: 'groupByVariables',
        required: true,
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'GroupByVariable',
            },
          },
        },
      },
    },
  },
};

export const GroupByVariable: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'GroupByVariable',
    modelProperties: {
      variableName: {
        serializedName: 'variableName',
        required: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const ManagedRulesDefinition: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ManagedRulesDefinition',
    modelProperties: {
      exclusions: {
        serializedName: 'exclusions',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'OwaspCrsExclusionEntry',
            },
          },
        },
      },
      managedRuleSets: {
        serializedName: 'managedRuleSets',
        required: true,
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'ManagedRuleSet',
            },
          },
        },
      },
    },
  },
};

export const OwaspCrsExclusionEntry: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'OwaspCrsExclusionEntry',
    modelProperties: {
      matchVariable: {
        serializedName: 'matchVariable',
        required: true,
        type: {
          name: 'String',
        },
      },
      selectorMatchOperator: {
        serializedName: 'selectorMatchOperator',
        required: true,
        type: {
          name: 'String',
        },
      },
      selector: {
        serializedName: 'selector',
        required: true,
        type: {
          name: 'String',
        },
      },
      exclusionManagedRuleSets: {
        serializedName: 'exclusionManagedRuleSets',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'ExclusionManagedRuleSet',
            },
          },
        },
      },
    },
  },
};

export const ExclusionManagedRuleSet: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ExclusionManagedRuleSet',
    modelProperties: {
      ruleSetType: {
        serializedName: 'ruleSetType',
        required: true,
        type: {
          name: 'String',
        },
      },
      ruleSetVersion: {
        serializedName: 'ruleSetVersion',
        required: true,
        type: {
          name: 'String',
        },
      },
      ruleGroups: {
        serializedName: 'ruleGroups',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'ExclusionManagedRuleGroup',
            },
          },
        },
      },
    },
  },
};

export const ExclusionManagedRuleGroup: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ExclusionManagedRuleGroup',
    modelProperties: {
      ruleGroupName: {
        serializedName: 'ruleGroupName',
        required: true,
        type: {
          name: 'String',
        },
      },
      rules: {
        serializedName: 'rules',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'ExclusionManagedRule',
            },
          },
        },
      },
    },
  },
};

export const ExclusionManagedRule: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ExclusionManagedRule',
    modelProperties: {
      ruleId: {
        serializedName: 'ruleId',
        required: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const ManagedRuleSet: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ManagedRuleSet',
    modelProperties: {
      ruleSetType: {
        serializedName: 'ruleSetType',
        required: true,
        type: {
          name: 'String',
        },
      },
      ruleSetVersion: {
        serializedName: 'ruleSetVersion',
        required: true,
        type: {
          name: 'String',
        },
      },
      ruleGroupOverrides: {
        serializedName: 'ruleGroupOverrides',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'ManagedRuleGroupOverride',
            },
          },
        },
      },
    },
  },
};

export const ManagedRuleGroupOverride: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ManagedRuleGroupOverride',
    modelProperties: {
      ruleGroupName: {
        serializedName: 'ruleGroupName',
        required: true,
        type: {
          name: 'String',
        },
      },
      rules: {
        serializedName: 'rules',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'ManagedRuleOverride',
            },
          },
        },
      },
    },
  },
};

export const ManagedRuleOverride: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ManagedRuleOverride',
    modelProperties: {
      ruleId: {
        serializedName: 'ruleId',
        required: true,
        type: {
          name: 'String',
        },
      },
      state: {
        serializedName: 'state',
        type: {
          name: 'String',
        },
      },
      action: {
        serializedName: 'action',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const FirewallPolicyNatRuleCollectionAction: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'FirewallPolicyNatRuleCollectionAction',
    modelProperties: {
      type: {
        serializedName: 'type',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const FirewallPolicyRule: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'FirewallPolicyRule',
    uberParent: 'FirewallPolicyRule',
    polymorphicDiscriminator: {
      serializedName: 'ruleType',
      clientName: 'ruleType',
    },
    modelProperties: {
      name: {
        serializedName: 'name',
        type: {
          name: 'String',
        },
      },
      description: {
        serializedName: 'description',
        type: {
          name: 'String',
        },
      },
      ruleType: {
        serializedName: 'ruleType',
        required: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const FirewallPolicyFilterRuleCollectionAction: msRest.CompositeMapper =
  {
    type: {
      name: 'Composite',
      className: 'FirewallPolicyFilterRuleCollectionAction',
      modelProperties: {
        type: {
          serializedName: 'type',
          type: {
            name: 'String',
          },
        },
      },
    },
  };

export const FirewallPolicyRuleApplicationProtocol: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'FirewallPolicyRuleApplicationProtocol',
    modelProperties: {
      protocolType: {
        serializedName: 'protocolType',
        type: {
          name: 'String',
        },
      },
      port: {
        constraints: {
          InclusiveMaximum: 64000,
          InclusiveMinimum: 0,
        },
        serializedName: 'port',
        type: {
          name: 'Number',
        },
      },
    },
  },
};

export const FirewallPolicyHttpHeaderToInsert: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'FirewallPolicyHttpHeaderToInsert',
    modelProperties: {
      headerName: {
        serializedName: 'headerName',
        type: {
          name: 'String',
        },
      },
      headerValue: {
        serializedName: 'headerValue',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const AzureAsyncOperationResult: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'AzureAsyncOperationResult',
    modelProperties: {
      status: {
        serializedName: 'status',
        type: {
          name: 'String',
        },
      },
      error: {
        serializedName: 'error',
        type: {
          name: 'Composite',
          className: 'ErrorModel',
        },
      },
    },
  },
};

export const AddressPrefixItem: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'AddressPrefixItem',
    modelProperties: {
      addressPrefix: {
        serializedName: 'addressPrefix',
        type: {
          name: 'String',
        },
      },
      addressPrefixType: {
        serializedName: 'addressPrefixType',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const VpnSiteId: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'VpnSiteId',
    modelProperties: {
      vpnSite: {
        serializedName: 'vpnSite',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const ApplicationGatewayIPConfiguration: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ApplicationGatewayIPConfiguration',
    modelProperties: {
      ...SubResource.type.modelProperties,
      name: {
        serializedName: 'name',
        type: {
          name: 'String',
        },
      },
      etag: {
        serializedName: 'etag',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      type: {
        serializedName: 'type',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      subnet: {
        serializedName: 'properties.subnet',
        type: {
          name: 'Composite',
          className: 'SubResource',
        },
      },
      provisioningState: {
        serializedName: 'properties.provisioningState',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const ApplicationGatewayAuthenticationCertificate: msRest.CompositeMapper =
  {
    type: {
      name: 'Composite',
      className: 'ApplicationGatewayAuthenticationCertificate',
      modelProperties: {
        ...SubResource.type.modelProperties,
        name: {
          serializedName: 'name',
          type: {
            name: 'String',
          },
        },
        etag: {
          serializedName: 'etag',
          readOnly: true,
          type: {
            name: 'String',
          },
        },
        type: {
          serializedName: 'type',
          readOnly: true,
          type: {
            name: 'String',
          },
        },
        data: {
          serializedName: 'properties.data',
          type: {
            name: 'String',
          },
        },
        provisioningState: {
          serializedName: 'properties.provisioningState',
          readOnly: true,
          type: {
            name: 'String',
          },
        },
      },
    },
  };

export const ApplicationGatewayTrustedRootCertificate: msRest.CompositeMapper =
  {
    type: {
      name: 'Composite',
      className: 'ApplicationGatewayTrustedRootCertificate',
      modelProperties: {
        ...SubResource.type.modelProperties,
        name: {
          serializedName: 'name',
          type: {
            name: 'String',
          },
        },
        etag: {
          serializedName: 'etag',
          readOnly: true,
          type: {
            name: 'String',
          },
        },
        type: {
          serializedName: 'type',
          readOnly: true,
          type: {
            name: 'String',
          },
        },
        data: {
          serializedName: 'properties.data',
          type: {
            name: 'String',
          },
        },
        keyVaultSecretId: {
          serializedName: 'properties.keyVaultSecretId',
          type: {
            name: 'String',
          },
        },
        provisioningState: {
          serializedName: 'properties.provisioningState',
          readOnly: true,
          type: {
            name: 'String',
          },
        },
      },
    },
  };

export const ApplicationGatewayTrustedClientCertificate: msRest.CompositeMapper =
  {
    type: {
      name: 'Composite',
      className: 'ApplicationGatewayTrustedClientCertificate',
      modelProperties: {
        ...SubResource.type.modelProperties,
        name: {
          serializedName: 'name',
          type: {
            name: 'String',
          },
        },
        etag: {
          serializedName: 'etag',
          readOnly: true,
          type: {
            name: 'String',
          },
        },
        type: {
          serializedName: 'type',
          readOnly: true,
          type: {
            name: 'String',
          },
        },
        data: {
          serializedName: 'properties.data',
          type: {
            name: 'String',
          },
        },
        validatedCertData: {
          serializedName: 'properties.validatedCertData',
          readOnly: true,
          type: {
            name: 'String',
          },
        },
        clientCertIssuerDN: {
          serializedName: 'properties.clientCertIssuerDN',
          readOnly: true,
          type: {
            name: 'String',
          },
        },
        provisioningState: {
          serializedName: 'properties.provisioningState',
          readOnly: true,
          type: {
            name: 'String',
          },
        },
      },
    },
  };

export const ApplicationGatewaySslCertificate: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ApplicationGatewaySslCertificate',
    modelProperties: {
      ...SubResource.type.modelProperties,
      name: {
        serializedName: 'name',
        type: {
          name: 'String',
        },
      },
      etag: {
        serializedName: 'etag',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      type: {
        serializedName: 'type',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      data: {
        serializedName: 'properties.data',
        type: {
          name: 'String',
        },
      },
      password: {
        serializedName: 'properties.password',
        type: {
          name: 'String',
        },
      },
      publicCertData: {
        serializedName: 'properties.publicCertData',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      keyVaultSecretId: {
        serializedName: 'properties.keyVaultSecretId',
        type: {
          name: 'String',
        },
      },
      provisioningState: {
        serializedName: 'properties.provisioningState',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const ApplicationGatewayFrontendIPConfiguration: msRest.CompositeMapper =
  {
    type: {
      name: 'Composite',
      className: 'ApplicationGatewayFrontendIPConfiguration',
      modelProperties: {
        ...SubResource.type.modelProperties,
        name: {
          serializedName: 'name',
          type: {
            name: 'String',
          },
        },
        etag: {
          serializedName: 'etag',
          readOnly: true,
          type: {
            name: 'String',
          },
        },
        type: {
          serializedName: 'type',
          readOnly: true,
          type: {
            name: 'String',
          },
        },
        privateIPAddress: {
          serializedName: 'properties.privateIPAddress',
          type: {
            name: 'String',
          },
        },
        privateIPAllocationMethod: {
          serializedName: 'properties.privateIPAllocationMethod',
          type: {
            name: 'String',
          },
        },
        subnet: {
          serializedName: 'properties.subnet',
          type: {
            name: 'Composite',
            className: 'SubResource',
          },
        },
        publicIPAddress: {
          serializedName: 'properties.publicIPAddress',
          type: {
            name: 'Composite',
            className: 'SubResource',
          },
        },
        privateLinkConfiguration: {
          serializedName: 'properties.privateLinkConfiguration',
          type: {
            name: 'Composite',
            className: 'SubResource',
          },
        },
        provisioningState: {
          serializedName: 'properties.provisioningState',
          readOnly: true,
          type: {
            name: 'String',
          },
        },
      },
    },
  };

export const ApplicationGatewayFrontendPort: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ApplicationGatewayFrontendPort',
    modelProperties: {
      ...SubResource.type.modelProperties,
      name: {
        serializedName: 'name',
        type: {
          name: 'String',
        },
      },
      etag: {
        serializedName: 'etag',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      type: {
        serializedName: 'type',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      port: {
        serializedName: 'properties.port',
        type: {
          name: 'Number',
        },
      },
      provisioningState: {
        serializedName: 'properties.provisioningState',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const ApplicationGatewayProbe: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ApplicationGatewayProbe',
    modelProperties: {
      ...SubResource.type.modelProperties,
      name: {
        serializedName: 'name',
        type: {
          name: 'String',
        },
      },
      etag: {
        serializedName: 'etag',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      type: {
        serializedName: 'type',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      protocol: {
        serializedName: 'properties.protocol',
        type: {
          name: 'String',
        },
      },
      host: {
        serializedName: 'properties.host',
        type: {
          name: 'String',
        },
      },
      path: {
        serializedName: 'properties.path',
        type: {
          name: 'String',
        },
      },
      interval: {
        serializedName: 'properties.interval',
        type: {
          name: 'Number',
        },
      },
      timeout: {
        serializedName: 'properties.timeout',
        type: {
          name: 'Number',
        },
      },
      unhealthyThreshold: {
        serializedName: 'properties.unhealthyThreshold',
        type: {
          name: 'Number',
        },
      },
      pickHostNameFromBackendHttpSettings: {
        serializedName: 'properties.pickHostNameFromBackendHttpSettings',
        type: {
          name: 'Boolean',
        },
      },
      pickHostNameFromBackendSettings: {
        serializedName: 'properties.pickHostNameFromBackendSettings',
        type: {
          name: 'Boolean',
        },
      },
      minServers: {
        serializedName: 'properties.minServers',
        type: {
          name: 'Number',
        },
      },
      match: {
        serializedName: 'properties.match',
        type: {
          name: 'Composite',
          className: 'ApplicationGatewayProbeHealthResponseMatch',
        },
      },
      provisioningState: {
        serializedName: 'properties.provisioningState',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      port: {
        constraints: {
          InclusiveMaximum: 65535,
          InclusiveMinimum: 1,
        },
        serializedName: 'properties.port',
        type: {
          name: 'Number',
        },
      },
    },
  },
};

export const NetworkInterfaceTapConfiguration: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'NetworkInterfaceTapConfiguration',
    modelProperties: {
      ...SubResource.type.modelProperties,
      name: {
        serializedName: 'name',
        type: {
          name: 'String',
        },
      },
      etag: {
        serializedName: 'etag',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      type: {
        serializedName: 'type',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      virtualNetworkTap: {
        serializedName: 'properties.virtualNetworkTap',
        type: {
          name: 'Composite',
          className: 'VirtualNetworkTap',
        },
      },
      provisioningState: {
        serializedName: 'properties.provisioningState',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const SecurityRule: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'SecurityRule',
    modelProperties: {
      ...SubResource.type.modelProperties,
      name: {
        serializedName: 'name',
        type: {
          name: 'String',
        },
      },
      etag: {
        serializedName: 'etag',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      type: {
        serializedName: 'type',
        type: {
          name: 'String',
        },
      },
      description: {
        serializedName: 'properties.description',
        type: {
          name: 'String',
        },
      },
      protocol: {
        serializedName: 'properties.protocol',
        type: {
          name: 'String',
        },
      },
      sourcePortRange: {
        serializedName: 'properties.sourcePortRange',
        type: {
          name: 'String',
        },
      },
      destinationPortRange: {
        serializedName: 'properties.destinationPortRange',
        type: {
          name: 'String',
        },
      },
      sourceAddressPrefix: {
        serializedName: 'properties.sourceAddressPrefix',
        type: {
          name: 'String',
        },
      },
      sourceAddressPrefixes: {
        serializedName: 'properties.sourceAddressPrefixes',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
      sourceApplicationSecurityGroups: {
        serializedName: 'properties.sourceApplicationSecurityGroups',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'ApplicationSecurityGroup',
            },
          },
        },
      },
      destinationAddressPrefix: {
        serializedName: 'properties.destinationAddressPrefix',
        type: {
          name: 'String',
        },
      },
      destinationAddressPrefixes: {
        serializedName: 'properties.destinationAddressPrefixes',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
      destinationApplicationSecurityGroups: {
        serializedName: 'properties.destinationApplicationSecurityGroups',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'ApplicationSecurityGroup',
            },
          },
        },
      },
      sourcePortRanges: {
        serializedName: 'properties.sourcePortRanges',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
      destinationPortRanges: {
        serializedName: 'properties.destinationPortRanges',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
      access: {
        serializedName: 'properties.access',
        type: {
          name: 'String',
        },
      },
      priority: {
        serializedName: 'properties.priority',
        type: {
          name: 'Number',
        },
      },
      direction: {
        serializedName: 'properties.direction',
        type: {
          name: 'String',
        },
      },
      provisioningState: {
        serializedName: 'properties.provisioningState',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const PrivateLinkServiceConnection: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'PrivateLinkServiceConnection',
    modelProperties: {
      ...SubResource.type.modelProperties,
      name: {
        serializedName: 'name',
        type: {
          name: 'String',
        },
      },
      type: {
        serializedName: 'type',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      etag: {
        serializedName: 'etag',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      provisioningState: {
        serializedName: 'properties.provisioningState',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      privateLinkServiceId: {
        serializedName: 'properties.privateLinkServiceId',
        type: {
          name: 'String',
        },
      },
      groupIds: {
        serializedName: 'properties.groupIds',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
      requestMessage: {
        serializedName: 'properties.requestMessage',
        type: {
          name: 'String',
        },
      },
      privateLinkServiceConnectionState: {
        serializedName: 'properties.privateLinkServiceConnectionState',
        type: {
          name: 'Composite',
          className: 'PrivateLinkServiceConnectionState',
        },
      },
    },
  },
};

export const PrivateLinkServiceIpConfiguration: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'PrivateLinkServiceIpConfiguration',
    modelProperties: {
      ...SubResource.type.modelProperties,
      name: {
        serializedName: 'name',
        type: {
          name: 'String',
        },
      },
      etag: {
        serializedName: 'etag',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      type: {
        serializedName: 'type',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      privateIPAddress: {
        serializedName: 'properties.privateIPAddress',
        type: {
          name: 'String',
        },
      },
      privateIPAllocationMethod: {
        serializedName: 'properties.privateIPAllocationMethod',
        type: {
          name: 'String',
        },
      },
      subnet: {
        serializedName: 'properties.subnet',
        type: {
          name: 'Composite',
          className: 'Subnet',
        },
      },
      primary: {
        serializedName: 'properties.primary',
        type: {
          name: 'Boolean',
        },
      },
      provisioningState: {
        serializedName: 'properties.provisioningState',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      privateIPAddressVersion: {
        serializedName: 'properties.privateIPAddressVersion',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const PrivateEndpointConnection: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'PrivateEndpointConnection',
    modelProperties: {
      ...SubResource.type.modelProperties,
      name: {
        serializedName: 'name',
        type: {
          name: 'String',
        },
      },
      type: {
        serializedName: 'type',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      etag: {
        serializedName: 'etag',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      privateEndpoint: {
        serializedName: 'properties.privateEndpoint',
        type: {
          name: 'Composite',
          className: 'PrivateEndpoint',
        },
      },
      privateLinkServiceConnectionState: {
        serializedName: 'properties.privateLinkServiceConnectionState',
        type: {
          name: 'Composite',
          className: 'PrivateLinkServiceConnectionState',
        },
      },
      provisioningState: {
        serializedName: 'properties.provisioningState',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      linkIdentifier: {
        serializedName: 'properties.linkIdentifier',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      privateEndpointLocation: {
        serializedName: 'properties.privateEndpointLocation',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const Route: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'Route',
    modelProperties: {
      ...SubResource.type.modelProperties,
      name: {
        serializedName: 'name',
        type: {
          name: 'String',
        },
      },
      etag: {
        serializedName: 'etag',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      type: {
        serializedName: 'type',
        type: {
          name: 'String',
        },
      },
      addressPrefix: {
        serializedName: 'properties.addressPrefix',
        type: {
          name: 'String',
        },
      },
      nextHopType: {
        serializedName: 'properties.nextHopType',
        type: {
          name: 'String',
        },
      },
      nextHopIpAddress: {
        serializedName: 'properties.nextHopIpAddress',
        type: {
          name: 'String',
        },
      },
      provisioningState: {
        serializedName: 'properties.provisioningState',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      hasBgpOverride: {
        serializedName: 'properties.hasBgpOverride',
        type: {
          name: 'Boolean',
        },
      },
    },
  },
};

export const ServiceEndpointPolicyDefinition: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ServiceEndpointPolicyDefinition',
    modelProperties: {
      ...SubResource.type.modelProperties,
      name: {
        serializedName: 'name',
        type: {
          name: 'String',
        },
      },
      etag: {
        serializedName: 'etag',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      type: {
        serializedName: 'type',
        type: {
          name: 'String',
        },
      },
      description: {
        serializedName: 'properties.description',
        type: {
          name: 'String',
        },
      },
      service: {
        serializedName: 'properties.service',
        type: {
          name: 'String',
        },
      },
      serviceResources: {
        serializedName: 'properties.serviceResources',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
      provisioningState: {
        serializedName: 'properties.provisioningState',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const IPConfiguration: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'IPConfiguration',
    modelProperties: {
      ...SubResource.type.modelProperties,
      name: {
        serializedName: 'name',
        type: {
          name: 'String',
        },
      },
      etag: {
        serializedName: 'etag',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      privateIPAddress: {
        serializedName: 'properties.privateIPAddress',
        type: {
          name: 'String',
        },
      },
      privateIPAllocationMethod: {
        serializedName: 'properties.privateIPAllocationMethod',
        type: {
          name: 'String',
        },
      },
      subnet: {
        serializedName: 'properties.subnet',
        type: {
          name: 'Composite',
          className: 'Subnet',
        },
      },
      publicIPAddress: {
        serializedName: 'properties.publicIPAddress',
        type: {
          name: 'Composite',
          className: 'PublicIPAddress',
        },
      },
      provisioningState: {
        serializedName: 'properties.provisioningState',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const IPConfigurationProfile: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'IPConfigurationProfile',
    modelProperties: {
      ...SubResource.type.modelProperties,
      name: {
        serializedName: 'name',
        type: {
          name: 'String',
        },
      },
      type: {
        serializedName: 'type',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      etag: {
        serializedName: 'etag',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      subnet: {
        serializedName: 'properties.subnet',
        type: {
          name: 'Composite',
          className: 'Subnet',
        },
      },
      provisioningState: {
        serializedName: 'properties.provisioningState',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const ResourceNavigationLink: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ResourceNavigationLink',
    modelProperties: {
      ...SubResource.type.modelProperties,
      name: {
        serializedName: 'name',
        type: {
          name: 'String',
        },
      },
      etag: {
        serializedName: 'etag',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      type: {
        serializedName: 'type',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      linkedResourceType: {
        serializedName: 'properties.linkedResourceType',
        type: {
          name: 'String',
        },
      },
      link: {
        serializedName: 'properties.link',
        type: {
          name: 'String',
        },
      },
      provisioningState: {
        serializedName: 'properties.provisioningState',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const ServiceAssociationLink: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ServiceAssociationLink',
    modelProperties: {
      ...SubResource.type.modelProperties,
      name: {
        serializedName: 'name',
        type: {
          name: 'String',
        },
      },
      etag: {
        serializedName: 'etag',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      type: {
        serializedName: 'type',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      linkedResourceType: {
        serializedName: 'properties.linkedResourceType',
        type: {
          name: 'String',
        },
      },
      link: {
        serializedName: 'properties.link',
        type: {
          name: 'String',
        },
      },
      provisioningState: {
        serializedName: 'properties.provisioningState',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      allowDelete: {
        serializedName: 'properties.allowDelete',
        type: {
          name: 'Boolean',
        },
      },
      locations: {
        serializedName: 'properties.locations',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
    },
  },
};

export const Delegation: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'Delegation',
    modelProperties: {
      ...SubResource.type.modelProperties,
      name: {
        serializedName: 'name',
        type: {
          name: 'String',
        },
      },
      etag: {
        serializedName: 'etag',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      type: {
        serializedName: 'type',
        type: {
          name: 'String',
        },
      },
      serviceName: {
        serializedName: 'properties.serviceName',
        type: {
          name: 'String',
        },
      },
      actions: {
        serializedName: 'properties.actions',
        readOnly: true,
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
      provisioningState: {
        serializedName: 'properties.provisioningState',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const Subnet: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'Subnet',
    modelProperties: {
      ...SubResource.type.modelProperties,
      name: {
        serializedName: 'name',
        type: {
          name: 'String',
        },
      },
      etag: {
        serializedName: 'etag',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      type: {
        serializedName: 'type',
        type: {
          name: 'String',
        },
      },
      addressPrefix: {
        serializedName: 'properties.addressPrefix',
        type: {
          name: 'String',
        },
      },
      addressPrefixes: {
        serializedName: 'properties.addressPrefixes',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
      networkSecurityGroup: {
        serializedName: 'properties.networkSecurityGroup',
        type: {
          name: 'Composite',
          className: 'NetworkSecurityGroup',
        },
      },
      routeTable: {
        serializedName: 'properties.routeTable',
        type: {
          name: 'Composite',
          className: 'RouteTable',
        },
      },
      natGateway: {
        serializedName: 'properties.natGateway',
        type: {
          name: 'Composite',
          className: 'SubResource',
        },
      },
      serviceEndpoints: {
        serializedName: 'properties.serviceEndpoints',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'ServiceEndpointPropertiesFormat',
            },
          },
        },
      },
      serviceEndpointPolicies: {
        serializedName: 'properties.serviceEndpointPolicies',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'ServiceEndpointPolicy',
            },
          },
        },
      },
      privateEndpoints: {
        serializedName: 'properties.privateEndpoints',
        readOnly: true,
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'PrivateEndpoint',
            },
          },
        },
      },
      ipConfigurations: {
        serializedName: 'properties.ipConfigurations',
        readOnly: true,
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'IPConfiguration',
            },
          },
        },
      },
      ipConfigurationProfiles: {
        serializedName: 'properties.ipConfigurationProfiles',
        readOnly: true,
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'IPConfigurationProfile',
            },
          },
        },
      },
      ipAllocations: {
        serializedName: 'properties.ipAllocations',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'SubResource',
            },
          },
        },
      },
      resourceNavigationLinks: {
        serializedName: 'properties.resourceNavigationLinks',
        readOnly: true,
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'ResourceNavigationLink',
            },
          },
        },
      },
      serviceAssociationLinks: {
        serializedName: 'properties.serviceAssociationLinks',
        readOnly: true,
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'ServiceAssociationLink',
            },
          },
        },
      },
      delegations: {
        serializedName: 'properties.delegations',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'Delegation',
            },
          },
        },
      },
      purpose: {
        serializedName: 'properties.purpose',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      provisioningState: {
        serializedName: 'properties.provisioningState',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      privateEndpointNetworkPolicies: {
        defaultValue: 'Disabled',
        serializedName: 'properties.privateEndpointNetworkPolicies',
        type: {
          name: 'String',
        },
      },
      privateLinkServiceNetworkPolicies: {
        defaultValue: 'Enabled',
        serializedName: 'properties.privateLinkServiceNetworkPolicies',
        type: {
          name: 'String',
        },
      },
      applicationGatewayIPConfigurations: {
        serializedName: 'properties.applicationGatewayIPConfigurations',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'ApplicationGatewayIPConfiguration',
            },
          },
        },
      },
    },
  },
};

export const FrontendIPConfiguration: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'FrontendIPConfiguration',
    modelProperties: {
      ...SubResource.type.modelProperties,
      name: {
        serializedName: 'name',
        type: {
          name: 'String',
        },
      },
      etag: {
        serializedName: 'etag',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      type: {
        serializedName: 'type',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      zones: {
        serializedName: 'zones',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
      inboundNatRules: {
        serializedName: 'properties.inboundNatRules',
        readOnly: true,
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'SubResource',
            },
          },
        },
      },
      inboundNatPools: {
        serializedName: 'properties.inboundNatPools',
        readOnly: true,
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'SubResource',
            },
          },
        },
      },
      outboundRules: {
        serializedName: 'properties.outboundRules',
        readOnly: true,
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'SubResource',
            },
          },
        },
      },
      loadBalancingRules: {
        serializedName: 'properties.loadBalancingRules',
        readOnly: true,
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'SubResource',
            },
          },
        },
      },
      privateIPAddress: {
        serializedName: 'properties.privateIPAddress',
        type: {
          name: 'String',
        },
      },
      privateIPAllocationMethod: {
        serializedName: 'properties.privateIPAllocationMethod',
        type: {
          name: 'String',
        },
      },
      privateIPAddressVersion: {
        serializedName: 'properties.privateIPAddressVersion',
        type: {
          name: 'String',
        },
      },
      subnet: {
        serializedName: 'properties.subnet',
        type: {
          name: 'Composite',
          className: 'Subnet',
        },
      },
      publicIPAddress: {
        serializedName: 'properties.publicIPAddress',
        type: {
          name: 'Composite',
          className: 'PublicIPAddress',
        },
      },
      publicIPPrefix: {
        serializedName: 'properties.publicIPPrefix',
        type: {
          name: 'Composite',
          className: 'SubResource',
        },
      },
      gatewayLoadBalancer: {
        serializedName: 'properties.gatewayLoadBalancer',
        type: {
          name: 'Composite',
          className: 'SubResource',
        },
      },
      provisioningState: {
        serializedName: 'properties.provisioningState',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const BackendAddressPool: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'BackendAddressPool',
    modelProperties: {
      ...SubResource.type.modelProperties,
      name: {
        serializedName: 'name',
        type: {
          name: 'String',
        },
      },
      etag: {
        serializedName: 'etag',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      type: {
        serializedName: 'type',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      location: {
        serializedName: 'properties.location',
        type: {
          name: 'String',
        },
      },
      tunnelInterfaces: {
        serializedName: 'properties.tunnelInterfaces',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'GatewayLoadBalancerTunnelInterface',
            },
          },
        },
      },
      loadBalancerBackendAddresses: {
        serializedName: 'properties.loadBalancerBackendAddresses',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'LoadBalancerBackendAddress',
            },
          },
        },
      },
      backendIPConfigurations: {
        serializedName: 'properties.backendIPConfigurations',
        readOnly: true,
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'NetworkInterfaceIPConfiguration',
            },
          },
        },
      },
      loadBalancingRules: {
        serializedName: 'properties.loadBalancingRules',
        readOnly: true,
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'SubResource',
            },
          },
        },
      },
      outboundRule: {
        serializedName: 'properties.outboundRule',
        type: {
          name: 'Composite',
          className: 'SubResource',
        },
      },
      outboundRules: {
        serializedName: 'properties.outboundRules',
        readOnly: true,
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'SubResource',
            },
          },
        },
      },
      inboundNatRules: {
        serializedName: 'properties.inboundNatRules',
        readOnly: true,
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'SubResource',
            },
          },
        },
      },
      provisioningState: {
        serializedName: 'properties.provisioningState',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      drainPeriodInSeconds: {
        serializedName: 'properties.drainPeriodInSeconds',
        type: {
          name: 'Number',
        },
      },
      virtualNetwork: {
        serializedName: 'properties.virtualNetwork',
        type: {
          name: 'Composite',
          className: 'SubResource',
        },
      },
      syncMode: {
        serializedName: 'properties.syncMode',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const InboundNatRule: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'InboundNatRule',
    modelProperties: {
      ...SubResource.type.modelProperties,
      name: {
        serializedName: 'name',
        type: {
          name: 'String',
        },
      },
      etag: {
        serializedName: 'etag',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      type: {
        serializedName: 'type',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      frontendIPConfiguration: {
        serializedName: 'properties.frontendIPConfiguration',
        type: {
          name: 'Composite',
          className: 'SubResource',
        },
      },
      backendIPConfiguration: {
        serializedName: 'properties.backendIPConfiguration',
        type: {
          name: 'Composite',
          className: 'NetworkInterfaceIPConfiguration',
        },
      },
      protocol: {
        serializedName: 'properties.protocol',
        type: {
          name: 'String',
        },
      },
      frontendPort: {
        serializedName: 'properties.frontendPort',
        type: {
          name: 'Number',
        },
      },
      backendPort: {
        serializedName: 'properties.backendPort',
        type: {
          name: 'Number',
        },
      },
      idleTimeoutInMinutes: {
        serializedName: 'properties.idleTimeoutInMinutes',
        type: {
          name: 'Number',
        },
      },
      enableFloatingIP: {
        serializedName: 'properties.enableFloatingIP',
        type: {
          name: 'Boolean',
        },
      },
      enableTcpReset: {
        serializedName: 'properties.enableTcpReset',
        type: {
          name: 'Boolean',
        },
      },
      frontendPortRangeStart: {
        serializedName: 'properties.frontendPortRangeStart',
        type: {
          name: 'Number',
        },
      },
      frontendPortRangeEnd: {
        serializedName: 'properties.frontendPortRangeEnd',
        type: {
          name: 'Number',
        },
      },
      backendAddressPool: {
        serializedName: 'properties.backendAddressPool',
        type: {
          name: 'Composite',
          className: 'SubResource',
        },
      },
      provisioningState: {
        serializedName: 'properties.provisioningState',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const NetworkInterfaceIPConfiguration: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'NetworkInterfaceIPConfiguration',
    modelProperties: {
      ...SubResource.type.modelProperties,
      name: {
        serializedName: 'name',
        type: {
          name: 'String',
        },
      },
      etag: {
        serializedName: 'etag',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      type: {
        serializedName: 'type',
        type: {
          name: 'String',
        },
      },
      gatewayLoadBalancer: {
        serializedName: 'properties.gatewayLoadBalancer',
        type: {
          name: 'Composite',
          className: 'SubResource',
        },
      },
      virtualNetworkTaps: {
        serializedName: 'properties.virtualNetworkTaps',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'VirtualNetworkTap',
            },
          },
        },
      },
      applicationGatewayBackendAddressPools: {
        serializedName: 'properties.applicationGatewayBackendAddressPools',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'ApplicationGatewayBackendAddressPool',
            },
          },
        },
      },
      loadBalancerBackendAddressPools: {
        serializedName: 'properties.loadBalancerBackendAddressPools',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'BackendAddressPool',
            },
          },
        },
      },
      loadBalancerInboundNatRules: {
        serializedName: 'properties.loadBalancerInboundNatRules',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'InboundNatRule',
            },
          },
        },
      },
      privateIPAddress: {
        serializedName: 'properties.privateIPAddress',
        type: {
          name: 'String',
        },
      },
      privateIPAllocationMethod: {
        serializedName: 'properties.privateIPAllocationMethod',
        type: {
          name: 'String',
        },
      },
      privateIPAddressVersion: {
        serializedName: 'properties.privateIPAddressVersion',
        type: {
          name: 'String',
        },
      },
      subnet: {
        serializedName: 'properties.subnet',
        type: {
          name: 'Composite',
          className: 'Subnet',
        },
      },
      primary: {
        serializedName: 'properties.primary',
        type: {
          name: 'Boolean',
        },
      },
      publicIPAddress: {
        serializedName: 'properties.publicIPAddress',
        type: {
          name: 'Composite',
          className: 'PublicIPAddress',
        },
      },
      applicationSecurityGroups: {
        serializedName: 'properties.applicationSecurityGroups',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'ApplicationSecurityGroup',
            },
          },
        },
      },
      provisioningState: {
        serializedName: 'properties.provisioningState',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      privateLinkConnectionProperties: {
        serializedName: 'properties.privateLinkConnectionProperties',
        type: {
          name: 'Composite',
          className:
            'NetworkInterfaceIPConfigurationPrivateLinkConnectionProperties',
        },
      },
    },
  },
};

export const ApplicationGatewayBackendAddressPool: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ApplicationGatewayBackendAddressPool',
    modelProperties: {
      ...SubResource.type.modelProperties,
      name: {
        serializedName: 'name',
        type: {
          name: 'String',
        },
      },
      etag: {
        serializedName: 'etag',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      type: {
        serializedName: 'type',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      backendIPConfigurations: {
        serializedName: 'properties.backendIPConfigurations',
        readOnly: true,
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'NetworkInterfaceIPConfiguration',
            },
          },
        },
      },
      backendAddresses: {
        serializedName: 'properties.backendAddresses',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'ApplicationGatewayBackendAddress',
            },
          },
        },
      },
      provisioningState: {
        serializedName: 'properties.provisioningState',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const ApplicationGatewayBackendHttpSettings: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ApplicationGatewayBackendHttpSettings',
    modelProperties: {
      ...SubResource.type.modelProperties,
      name: {
        serializedName: 'name',
        type: {
          name: 'String',
        },
      },
      etag: {
        serializedName: 'etag',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      type: {
        serializedName: 'type',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      port: {
        serializedName: 'properties.port',
        type: {
          name: 'Number',
        },
      },
      protocol: {
        serializedName: 'properties.protocol',
        type: {
          name: 'String',
        },
      },
      cookieBasedAffinity: {
        serializedName: 'properties.cookieBasedAffinity',
        type: {
          name: 'String',
        },
      },
      requestTimeout: {
        serializedName: 'properties.requestTimeout',
        type: {
          name: 'Number',
        },
      },
      probe: {
        serializedName: 'properties.probe',
        type: {
          name: 'Composite',
          className: 'SubResource',
        },
      },
      authenticationCertificates: {
        serializedName: 'properties.authenticationCertificates',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'SubResource',
            },
          },
        },
      },
      trustedRootCertificates: {
        serializedName: 'properties.trustedRootCertificates',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'SubResource',
            },
          },
        },
      },
      connectionDraining: {
        serializedName: 'properties.connectionDraining',
        type: {
          name: 'Composite',
          className: 'ApplicationGatewayConnectionDraining',
        },
      },
      hostName: {
        serializedName: 'properties.hostName',
        type: {
          name: 'String',
        },
      },
      pickHostNameFromBackendAddress: {
        serializedName: 'properties.pickHostNameFromBackendAddress',
        type: {
          name: 'Boolean',
        },
      },
      affinityCookieName: {
        serializedName: 'properties.affinityCookieName',
        type: {
          name: 'String',
        },
      },
      probeEnabled: {
        serializedName: 'properties.probeEnabled',
        type: {
          name: 'Boolean',
        },
      },
      path: {
        serializedName: 'properties.path',
        type: {
          name: 'String',
        },
      },
      provisioningState: {
        serializedName: 'properties.provisioningState',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const ApplicationGatewayBackendSettings: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ApplicationGatewayBackendSettings',
    modelProperties: {
      ...SubResource.type.modelProperties,
      name: {
        serializedName: 'name',
        type: {
          name: 'String',
        },
      },
      etag: {
        serializedName: 'etag',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      type: {
        serializedName: 'type',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      port: {
        serializedName: 'properties.port',
        type: {
          name: 'Number',
        },
      },
      protocol: {
        serializedName: 'properties.protocol',
        type: {
          name: 'String',
        },
      },
      timeout: {
        serializedName: 'properties.timeout',
        type: {
          name: 'Number',
        },
      },
      probe: {
        serializedName: 'properties.probe',
        type: {
          name: 'Composite',
          className: 'SubResource',
        },
      },
      trustedRootCertificates: {
        serializedName: 'properties.trustedRootCertificates',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'SubResource',
            },
          },
        },
      },
      hostName: {
        serializedName: 'properties.hostName',
        type: {
          name: 'String',
        },
      },
      pickHostNameFromBackendAddress: {
        serializedName: 'properties.pickHostNameFromBackendAddress',
        type: {
          name: 'Boolean',
        },
      },
      provisioningState: {
        serializedName: 'properties.provisioningState',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const ApplicationGatewayHttpListener: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ApplicationGatewayHttpListener',
    modelProperties: {
      ...SubResource.type.modelProperties,
      name: {
        serializedName: 'name',
        type: {
          name: 'String',
        },
      },
      etag: {
        serializedName: 'etag',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      type: {
        serializedName: 'type',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      frontendIPConfiguration: {
        serializedName: 'properties.frontendIPConfiguration',
        type: {
          name: 'Composite',
          className: 'SubResource',
        },
      },
      frontendPort: {
        serializedName: 'properties.frontendPort',
        type: {
          name: 'Composite',
          className: 'SubResource',
        },
      },
      protocol: {
        serializedName: 'properties.protocol',
        type: {
          name: 'String',
        },
      },
      hostName: {
        serializedName: 'properties.hostName',
        type: {
          name: 'String',
        },
      },
      sslCertificate: {
        serializedName: 'properties.sslCertificate',
        type: {
          name: 'Composite',
          className: 'SubResource',
        },
      },
      sslProfile: {
        serializedName: 'properties.sslProfile',
        type: {
          name: 'Composite',
          className: 'SubResource',
        },
      },
      requireServerNameIndication: {
        serializedName: 'properties.requireServerNameIndication',
        type: {
          name: 'Boolean',
        },
      },
      provisioningState: {
        serializedName: 'properties.provisioningState',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      customErrorConfigurations: {
        serializedName: 'properties.customErrorConfigurations',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'ApplicationGatewayCustomError',
            },
          },
        },
      },
      firewallPolicy: {
        serializedName: 'properties.firewallPolicy',
        type: {
          name: 'Composite',
          className: 'SubResource',
        },
      },
      hostNames: {
        serializedName: 'properties.hostNames',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
    },
  },
};

export const ApplicationGatewayListener: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ApplicationGatewayListener',
    modelProperties: {
      ...SubResource.type.modelProperties,
      name: {
        serializedName: 'name',
        type: {
          name: 'String',
        },
      },
      etag: {
        serializedName: 'etag',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      type: {
        serializedName: 'type',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      frontendIPConfiguration: {
        serializedName: 'properties.frontendIPConfiguration',
        type: {
          name: 'Composite',
          className: 'SubResource',
        },
      },
      frontendPort: {
        serializedName: 'properties.frontendPort',
        type: {
          name: 'Composite',
          className: 'SubResource',
        },
      },
      protocol: {
        serializedName: 'properties.protocol',
        type: {
          name: 'String',
        },
      },
      sslCertificate: {
        serializedName: 'properties.sslCertificate',
        type: {
          name: 'Composite',
          className: 'SubResource',
        },
      },
      sslProfile: {
        serializedName: 'properties.sslProfile',
        type: {
          name: 'Composite',
          className: 'SubResource',
        },
      },
      provisioningState: {
        serializedName: 'properties.provisioningState',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const ApplicationGatewaySslProfile: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ApplicationGatewaySslProfile',
    modelProperties: {
      ...SubResource.type.modelProperties,
      name: {
        serializedName: 'name',
        type: {
          name: 'String',
        },
      },
      etag: {
        serializedName: 'etag',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      type: {
        serializedName: 'type',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      trustedClientCertificates: {
        serializedName: 'properties.trustedClientCertificates',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'SubResource',
            },
          },
        },
      },
      sslPolicy: {
        serializedName: 'properties.sslPolicy',
        type: {
          name: 'Composite',
          className: 'ApplicationGatewaySslPolicy',
        },
      },
      clientAuthConfiguration: {
        serializedName: 'properties.clientAuthConfiguration',
        type: {
          name: 'Composite',
          className: 'ApplicationGatewayClientAuthConfiguration',
        },
      },
      provisioningState: {
        serializedName: 'properties.provisioningState',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const ApplicationGatewayPathRule: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ApplicationGatewayPathRule',
    modelProperties: {
      ...SubResource.type.modelProperties,
      name: {
        serializedName: 'name',
        type: {
          name: 'String',
        },
      },
      etag: {
        serializedName: 'etag',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      type: {
        serializedName: 'type',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      paths: {
        serializedName: 'properties.paths',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
      backendAddressPool: {
        serializedName: 'properties.backendAddressPool',
        type: {
          name: 'Composite',
          className: 'SubResource',
        },
      },
      backendHttpSettings: {
        serializedName: 'properties.backendHttpSettings',
        type: {
          name: 'Composite',
          className: 'SubResource',
        },
      },
      redirectConfiguration: {
        serializedName: 'properties.redirectConfiguration',
        type: {
          name: 'Composite',
          className: 'SubResource',
        },
      },
      rewriteRuleSet: {
        serializedName: 'properties.rewriteRuleSet',
        type: {
          name: 'Composite',
          className: 'SubResource',
        },
      },
      loadDistributionPolicy: {
        serializedName: 'properties.loadDistributionPolicy',
        type: {
          name: 'Composite',
          className: 'SubResource',
        },
      },
      provisioningState: {
        serializedName: 'properties.provisioningState',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      firewallPolicy: {
        serializedName: 'properties.firewallPolicy',
        type: {
          name: 'Composite',
          className: 'SubResource',
        },
      },
    },
  },
};

export const ApplicationGatewayUrlPathMap: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ApplicationGatewayUrlPathMap',
    modelProperties: {
      ...SubResource.type.modelProperties,
      name: {
        serializedName: 'name',
        type: {
          name: 'String',
        },
      },
      etag: {
        serializedName: 'etag',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      type: {
        serializedName: 'type',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      defaultBackendAddressPool: {
        serializedName: 'properties.defaultBackendAddressPool',
        type: {
          name: 'Composite',
          className: 'SubResource',
        },
      },
      defaultBackendHttpSettings: {
        serializedName: 'properties.defaultBackendHttpSettings',
        type: {
          name: 'Composite',
          className: 'SubResource',
        },
      },
      defaultRewriteRuleSet: {
        serializedName: 'properties.defaultRewriteRuleSet',
        type: {
          name: 'Composite',
          className: 'SubResource',
        },
      },
      defaultRedirectConfiguration: {
        serializedName: 'properties.defaultRedirectConfiguration',
        type: {
          name: 'Composite',
          className: 'SubResource',
        },
      },
      defaultLoadDistributionPolicy: {
        serializedName: 'properties.defaultLoadDistributionPolicy',
        type: {
          name: 'Composite',
          className: 'SubResource',
        },
      },
      pathRules: {
        serializedName: 'properties.pathRules',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'ApplicationGatewayPathRule',
            },
          },
        },
      },
      provisioningState: {
        serializedName: 'properties.provisioningState',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const ApplicationGatewayRequestRoutingRule: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ApplicationGatewayRequestRoutingRule',
    modelProperties: {
      ...SubResource.type.modelProperties,
      name: {
        serializedName: 'name',
        type: {
          name: 'String',
        },
      },
      etag: {
        serializedName: 'etag',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      type: {
        serializedName: 'type',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      ruleType: {
        serializedName: 'properties.ruleType',
        type: {
          name: 'String',
        },
      },
      priority: {
        constraints: {
          InclusiveMaximum: 20000,
          InclusiveMinimum: 1,
        },
        serializedName: 'properties.priority',
        type: {
          name: 'Number',
        },
      },
      backendAddressPool: {
        serializedName: 'properties.backendAddressPool',
        type: {
          name: 'Composite',
          className: 'SubResource',
        },
      },
      backendHttpSettings: {
        serializedName: 'properties.backendHttpSettings',
        type: {
          name: 'Composite',
          className: 'SubResource',
        },
      },
      httpListener: {
        serializedName: 'properties.httpListener',
        type: {
          name: 'Composite',
          className: 'SubResource',
        },
      },
      urlPathMap: {
        serializedName: 'properties.urlPathMap',
        type: {
          name: 'Composite',
          className: 'SubResource',
        },
      },
      rewriteRuleSet: {
        serializedName: 'properties.rewriteRuleSet',
        type: {
          name: 'Composite',
          className: 'SubResource',
        },
      },
      redirectConfiguration: {
        serializedName: 'properties.redirectConfiguration',
        type: {
          name: 'Composite',
          className: 'SubResource',
        },
      },
      loadDistributionPolicy: {
        serializedName: 'properties.loadDistributionPolicy',
        type: {
          name: 'Composite',
          className: 'SubResource',
        },
      },
      provisioningState: {
        serializedName: 'properties.provisioningState',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const ApplicationGatewayRoutingRule: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ApplicationGatewayRoutingRule',
    modelProperties: {
      ...SubResource.type.modelProperties,
      name: {
        serializedName: 'name',
        type: {
          name: 'String',
        },
      },
      etag: {
        serializedName: 'etag',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      type: {
        serializedName: 'type',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      ruleType: {
        serializedName: 'properties.ruleType',
        type: {
          name: 'String',
        },
      },
      priority: {
        constraints: {
          InclusiveMaximum: 20000,
          InclusiveMinimum: 1,
        },
        serializedName: 'properties.priority',
        type: {
          name: 'Number',
        },
      },
      backendAddressPool: {
        serializedName: 'properties.backendAddressPool',
        type: {
          name: 'Composite',
          className: 'SubResource',
        },
      },
      backendSettings: {
        serializedName: 'properties.backendSettings',
        type: {
          name: 'Composite',
          className: 'SubResource',
        },
      },
      listener: {
        serializedName: 'properties.listener',
        type: {
          name: 'Composite',
          className: 'SubResource',
        },
      },
      provisioningState: {
        serializedName: 'properties.provisioningState',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const ApplicationGatewayRewriteRuleSet: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ApplicationGatewayRewriteRuleSet',
    modelProperties: {
      ...SubResource.type.modelProperties,
      name: {
        serializedName: 'name',
        type: {
          name: 'String',
        },
      },
      etag: {
        serializedName: 'etag',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      rewriteRules: {
        serializedName: 'properties.rewriteRules',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'ApplicationGatewayRewriteRule',
            },
          },
        },
      },
      provisioningState: {
        serializedName: 'properties.provisioningState',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const ApplicationGatewayRedirectConfiguration: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ApplicationGatewayRedirectConfiguration',
    modelProperties: {
      ...SubResource.type.modelProperties,
      name: {
        serializedName: 'name',
        type: {
          name: 'String',
        },
      },
      etag: {
        serializedName: 'etag',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      type: {
        serializedName: 'type',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      redirectType: {
        serializedName: 'properties.redirectType',
        type: {
          name: 'String',
        },
      },
      targetListener: {
        serializedName: 'properties.targetListener',
        type: {
          name: 'Composite',
          className: 'SubResource',
        },
      },
      targetUrl: {
        serializedName: 'properties.targetUrl',
        type: {
          name: 'String',
        },
      },
      includePath: {
        serializedName: 'properties.includePath',
        type: {
          name: 'Boolean',
        },
      },
      includeQueryString: {
        serializedName: 'properties.includeQueryString',
        type: {
          name: 'Boolean',
        },
      },
      requestRoutingRules: {
        serializedName: 'properties.requestRoutingRules',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'SubResource',
            },
          },
        },
      },
      urlPathMaps: {
        serializedName: 'properties.urlPathMaps',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'SubResource',
            },
          },
        },
      },
      pathRules: {
        serializedName: 'properties.pathRules',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'SubResource',
            },
          },
        },
      },
    },
  },
};

export const ApplicationGatewayPrivateLinkIpConfiguration: msRest.CompositeMapper =
  {
    type: {
      name: 'Composite',
      className: 'ApplicationGatewayPrivateLinkIpConfiguration',
      modelProperties: {
        ...SubResource.type.modelProperties,
        name: {
          serializedName: 'name',
          type: {
            name: 'String',
          },
        },
        etag: {
          serializedName: 'etag',
          readOnly: true,
          type: {
            name: 'String',
          },
        },
        type: {
          serializedName: 'type',
          readOnly: true,
          type: {
            name: 'String',
          },
        },
        privateIPAddress: {
          serializedName: 'properties.privateIPAddress',
          type: {
            name: 'String',
          },
        },
        privateIPAllocationMethod: {
          serializedName: 'properties.privateIPAllocationMethod',
          type: {
            name: 'String',
          },
        },
        subnet: {
          serializedName: 'properties.subnet',
          type: {
            name: 'Composite',
            className: 'SubResource',
          },
        },
        primary: {
          serializedName: 'properties.primary',
          type: {
            name: 'Boolean',
          },
        },
        provisioningState: {
          serializedName: 'properties.provisioningState',
          readOnly: true,
          type: {
            name: 'String',
          },
        },
      },
    },
  };

export const ApplicationGatewayPrivateLinkConfiguration: msRest.CompositeMapper =
  {
    type: {
      name: 'Composite',
      className: 'ApplicationGatewayPrivateLinkConfiguration',
      modelProperties: {
        ...SubResource.type.modelProperties,
        name: {
          serializedName: 'name',
          type: {
            name: 'String',
          },
        },
        etag: {
          serializedName: 'etag',
          readOnly: true,
          type: {
            name: 'String',
          },
        },
        type: {
          serializedName: 'type',
          readOnly: true,
          type: {
            name: 'String',
          },
        },
        ipConfigurations: {
          serializedName: 'properties.ipConfigurations',
          type: {
            name: 'Sequence',
            element: {
              type: {
                name: 'Composite',
                className: 'ApplicationGatewayPrivateLinkIpConfiguration',
              },
            },
          },
        },
        provisioningState: {
          serializedName: 'properties.provisioningState',
          readOnly: true,
          type: {
            name: 'String',
          },
        },
      },
    },
  };

export const ApplicationGatewayPrivateEndpointConnection: msRest.CompositeMapper =
  {
    type: {
      name: 'Composite',
      className: 'ApplicationGatewayPrivateEndpointConnection',
      modelProperties: {
        ...SubResource.type.modelProperties,
        name: {
          serializedName: 'name',
          type: {
            name: 'String',
          },
        },
        etag: {
          serializedName: 'etag',
          readOnly: true,
          type: {
            name: 'String',
          },
        },
        type: {
          serializedName: 'type',
          readOnly: true,
          type: {
            name: 'String',
          },
        },
        privateEndpoint: {
          serializedName: 'properties.privateEndpoint',
          type: {
            name: 'Composite',
            className: 'PrivateEndpoint',
          },
        },
        privateLinkServiceConnectionState: {
          serializedName: 'properties.privateLinkServiceConnectionState',
          type: {
            name: 'Composite',
            className: 'PrivateLinkServiceConnectionState',
          },
        },
        provisioningState: {
          serializedName: 'properties.provisioningState',
          readOnly: true,
          type: {
            name: 'String',
          },
        },
        linkIdentifier: {
          serializedName: 'properties.linkIdentifier',
          readOnly: true,
          type: {
            name: 'String',
          },
        },
      },
    },
  };

export const ApplicationGatewayLoadDistributionTarget: msRest.CompositeMapper =
  {
    type: {
      name: 'Composite',
      className: 'ApplicationGatewayLoadDistributionTarget',
      modelProperties: {
        ...SubResource.type.modelProperties,
        name: {
          serializedName: 'name',
          type: {
            name: 'String',
          },
        },
        etag: {
          serializedName: 'etag',
          readOnly: true,
          type: {
            name: 'String',
          },
        },
        type: {
          serializedName: 'type',
          readOnly: true,
          type: {
            name: 'String',
          },
        },
        weightPerServer: {
          constraints: {
            InclusiveMaximum: 100,
            InclusiveMinimum: 1,
          },
          serializedName: 'properties.weightPerServer',
          type: {
            name: 'Number',
          },
        },
        backendAddressPool: {
          serializedName: 'properties.backendAddressPool',
          type: {
            name: 'Composite',
            className: 'SubResource',
          },
        },
      },
    },
  };

export const ApplicationGatewayLoadDistributionPolicy: msRest.CompositeMapper =
  {
    type: {
      name: 'Composite',
      className: 'ApplicationGatewayLoadDistributionPolicy',
      modelProperties: {
        ...SubResource.type.modelProperties,
        name: {
          serializedName: 'name',
          type: {
            name: 'String',
          },
        },
        etag: {
          serializedName: 'etag',
          readOnly: true,
          type: {
            name: 'String',
          },
        },
        type: {
          serializedName: 'type',
          readOnly: true,
          type: {
            name: 'String',
          },
        },
        loadDistributionTargets: {
          serializedName: 'properties.loadDistributionTargets',
          type: {
            name: 'Sequence',
            element: {
              type: {
                name: 'Composite',
                className: 'ApplicationGatewayLoadDistributionTarget',
              },
            },
          },
        },
        loadDistributionAlgorithm: {
          serializedName: 'properties.loadDistributionAlgorithm',
          type: {
            name: 'String',
          },
        },
        provisioningState: {
          serializedName: 'properties.provisioningState',
          readOnly: true,
          type: {
            name: 'String',
          },
        },
      },
    },
  };

export const ApplicationGatewayPrivateLinkResource: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ApplicationGatewayPrivateLinkResource',
    modelProperties: {
      ...SubResource.type.modelProperties,
      name: {
        serializedName: 'name',
        type: {
          name: 'String',
        },
      },
      etag: {
        serializedName: 'etag',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      type: {
        serializedName: 'type',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      groupId: {
        serializedName: 'properties.groupId',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      requiredMembers: {
        serializedName: 'properties.requiredMembers',
        readOnly: true,
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
      requiredZoneNames: {
        serializedName: 'properties.requiredZoneNames',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
    },
  },
};

export const ApplicationGatewaySslPredefinedPolicy: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ApplicationGatewaySslPredefinedPolicy',
    modelProperties: {
      ...SubResource.type.modelProperties,
      name: {
        serializedName: 'name',
        type: {
          name: 'String',
        },
      },
      cipherSuites: {
        serializedName: 'properties.cipherSuites',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
      minProtocolVersion: {
        serializedName: 'properties.minProtocolVersion',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const AzureFirewallApplicationRuleCollection: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'AzureFirewallApplicationRuleCollection',
    modelProperties: {
      ...SubResource.type.modelProperties,
      name: {
        serializedName: 'name',
        type: {
          name: 'String',
        },
      },
      etag: {
        serializedName: 'etag',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      priority: {
        constraints: {
          InclusiveMaximum: 65000,
          InclusiveMinimum: 100,
        },
        serializedName: 'properties.priority',
        type: {
          name: 'Number',
        },
      },
      action: {
        serializedName: 'properties.action',
        type: {
          name: 'Composite',
          className: 'AzureFirewallRCAction',
        },
      },
      rules: {
        serializedName: 'properties.rules',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'AzureFirewallApplicationRule',
            },
          },
        },
      },
      provisioningState: {
        serializedName: 'properties.provisioningState',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const AzureFirewallNatRuleCollection: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'AzureFirewallNatRuleCollection',
    modelProperties: {
      ...SubResource.type.modelProperties,
      name: {
        serializedName: 'name',
        type: {
          name: 'String',
        },
      },
      etag: {
        serializedName: 'etag',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      priority: {
        constraints: {
          InclusiveMaximum: 65000,
          InclusiveMinimum: 100,
        },
        serializedName: 'properties.priority',
        type: {
          name: 'Number',
        },
      },
      action: {
        serializedName: 'properties.action',
        type: {
          name: 'Composite',
          className: 'AzureFirewallNatRCAction',
        },
      },
      rules: {
        serializedName: 'properties.rules',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'AzureFirewallNatRule',
            },
          },
        },
      },
      provisioningState: {
        serializedName: 'properties.provisioningState',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const AzureFirewallNetworkRuleCollection: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'AzureFirewallNetworkRuleCollection',
    modelProperties: {
      ...SubResource.type.modelProperties,
      name: {
        serializedName: 'name',
        type: {
          name: 'String',
        },
      },
      etag: {
        serializedName: 'etag',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      priority: {
        constraints: {
          InclusiveMaximum: 65000,
          InclusiveMinimum: 100,
        },
        serializedName: 'properties.priority',
        type: {
          name: 'Number',
        },
      },
      action: {
        serializedName: 'properties.action',
        type: {
          name: 'Composite',
          className: 'AzureFirewallRCAction',
        },
      },
      rules: {
        serializedName: 'properties.rules',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'AzureFirewallNetworkRule',
            },
          },
        },
      },
      provisioningState: {
        serializedName: 'properties.provisioningState',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const AzureFirewallIPConfiguration: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'AzureFirewallIPConfiguration',
    modelProperties: {
      ...SubResource.type.modelProperties,
      name: {
        serializedName: 'name',
        type: {
          name: 'String',
        },
      },
      etag: {
        serializedName: 'etag',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      type: {
        serializedName: 'type',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      privateIPAddress: {
        serializedName: 'properties.privateIPAddress',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      subnet: {
        serializedName: 'properties.subnet',
        type: {
          name: 'Composite',
          className: 'SubResource',
        },
      },
      publicIPAddress: {
        serializedName: 'properties.publicIPAddress',
        type: {
          name: 'Composite',
          className: 'SubResource',
        },
      },
      provisioningState: {
        serializedName: 'properties.provisioningState',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const FirewallPacketCaptureParameters: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'FirewallPacketCaptureParameters',
    modelProperties: {
      ...SubResource.type.modelProperties,
      durationInSeconds: {
        constraints: {
          InclusiveMaximum: 1800,
          InclusiveMinimum: 30,
        },
        serializedName: 'properties.durationInSeconds',
        type: {
          name: 'Number',
        },
      },
      numberOfPacketsToCapture: {
        constraints: {
          InclusiveMaximum: 90000,
          InclusiveMinimum: 100,
        },
        serializedName: 'properties.numberOfPacketsToCapture',
        type: {
          name: 'Number',
        },
      },
      sasUrl: {
        serializedName: 'properties.sasUrl',
        type: {
          name: 'String',
        },
      },
      fileName: {
        serializedName: 'properties.fileName',
        type: {
          name: 'String',
        },
      },
      protocol: {
        serializedName: 'properties.protocol',
        type: {
          name: 'String',
        },
      },
      flags: {
        serializedName: 'properties.flags',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'AzureFirewallPacketCaptureFlags',
            },
          },
        },
      },
      filters: {
        serializedName: 'properties.filters',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'AzureFirewallPacketCaptureRule',
            },
          },
        },
      },
    },
  },
};

export const BastionHostIPConfiguration: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'BastionHostIPConfiguration',
    modelProperties: {
      ...SubResource.type.modelProperties,
      name: {
        serializedName: 'name',
        type: {
          name: 'String',
        },
      },
      etag: {
        serializedName: 'etag',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      type: {
        serializedName: 'type',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      subnet: {
        serializedName: 'properties.subnet',
        type: {
          name: 'Composite',
          className: 'SubResource',
        },
      },
      publicIPAddress: {
        serializedName: 'properties.publicIPAddress',
        type: {
          name: 'Composite',
          className: 'SubResource',
        },
      },
      provisioningState: {
        serializedName: 'properties.provisioningState',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      privateIPAllocationMethod: {
        serializedName: 'properties.privateIPAllocationMethod',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const EndpointServiceResult: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'EndpointServiceResult',
    modelProperties: {
      ...SubResource.type.modelProperties,
      name: {
        serializedName: 'name',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      type: {
        serializedName: 'type',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const ExpressRouteCircuitAuthorization: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ExpressRouteCircuitAuthorization',
    modelProperties: {
      ...SubResource.type.modelProperties,
      name: {
        serializedName: 'name',
        type: {
          name: 'String',
        },
      },
      etag: {
        serializedName: 'etag',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      type: {
        serializedName: 'type',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      authorizationKey: {
        serializedName: 'properties.authorizationKey',
        type: {
          name: 'String',
        },
      },
      authorizationUseStatus: {
        serializedName: 'properties.authorizationUseStatus',
        type: {
          name: 'String',
        },
      },
      provisioningState: {
        serializedName: 'properties.provisioningState',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const ExpressRouteCircuitConnection: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ExpressRouteCircuitConnection',
    modelProperties: {
      ...SubResource.type.modelProperties,
      name: {
        serializedName: 'name',
        type: {
          name: 'String',
        },
      },
      etag: {
        serializedName: 'etag',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      type: {
        serializedName: 'type',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      expressRouteCircuitPeering: {
        serializedName: 'properties.expressRouteCircuitPeering',
        type: {
          name: 'Composite',
          className: 'SubResource',
        },
      },
      peerExpressRouteCircuitPeering: {
        serializedName: 'properties.peerExpressRouteCircuitPeering',
        type: {
          name: 'Composite',
          className: 'SubResource',
        },
      },
      addressPrefix: {
        serializedName: 'properties.addressPrefix',
        type: {
          name: 'String',
        },
      },
      authorizationKey: {
        serializedName: 'properties.authorizationKey',
        type: {
          name: 'String',
        },
      },
      ipv6CircuitConnectionConfig: {
        serializedName: 'properties.ipv6CircuitConnectionConfig',
        type: {
          name: 'Composite',
          className: 'Ipv6CircuitConnectionConfig',
        },
      },
      circuitConnectionStatus: {
        serializedName: 'properties.circuitConnectionStatus',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      provisioningState: {
        serializedName: 'properties.provisioningState',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const PeerExpressRouteCircuitConnection: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'PeerExpressRouteCircuitConnection',
    modelProperties: {
      ...SubResource.type.modelProperties,
      name: {
        serializedName: 'name',
        type: {
          name: 'String',
        },
      },
      etag: {
        serializedName: 'etag',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      type: {
        serializedName: 'type',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      expressRouteCircuitPeering: {
        serializedName: 'properties.expressRouteCircuitPeering',
        type: {
          name: 'Composite',
          className: 'SubResource',
        },
      },
      peerExpressRouteCircuitPeering: {
        serializedName: 'properties.peerExpressRouteCircuitPeering',
        type: {
          name: 'Composite',
          className: 'SubResource',
        },
      },
      addressPrefix: {
        serializedName: 'properties.addressPrefix',
        type: {
          name: 'String',
        },
      },
      circuitConnectionStatus: {
        serializedName: 'properties.circuitConnectionStatus',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      connectionName: {
        serializedName: 'properties.connectionName',
        type: {
          name: 'String',
        },
      },
      authResourceGuid: {
        serializedName: 'properties.authResourceGuid',
        type: {
          name: 'String',
        },
      },
      provisioningState: {
        serializedName: 'properties.provisioningState',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const ExpressRouteCircuitPeering: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ExpressRouteCircuitPeering',
    modelProperties: {
      ...SubResource.type.modelProperties,
      name: {
        serializedName: 'name',
        type: {
          name: 'String',
        },
      },
      etag: {
        serializedName: 'etag',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      type: {
        serializedName: 'type',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      peeringType: {
        serializedName: 'properties.peeringType',
        type: {
          name: 'String',
        },
      },
      state: {
        serializedName: 'properties.state',
        type: {
          name: 'String',
        },
      },
      azureASN: {
        serializedName: 'properties.azureASN',
        type: {
          name: 'Number',
        },
      },
      peerASN: {
        constraints: {
          InclusiveMaximum: 4294967295,
          InclusiveMinimum: 1,
        },
        serializedName: 'properties.peerASN',
        type: {
          name: 'Number',
        },
      },
      primaryPeerAddressPrefix: {
        serializedName: 'properties.primaryPeerAddressPrefix',
        type: {
          name: 'String',
        },
      },
      secondaryPeerAddressPrefix: {
        serializedName: 'properties.secondaryPeerAddressPrefix',
        type: {
          name: 'String',
        },
      },
      primaryAzurePort: {
        serializedName: 'properties.primaryAzurePort',
        type: {
          name: 'String',
        },
      },
      secondaryAzurePort: {
        serializedName: 'properties.secondaryAzurePort',
        type: {
          name: 'String',
        },
      },
      sharedKey: {
        serializedName: 'properties.sharedKey',
        type: {
          name: 'String',
        },
      },
      vlanId: {
        serializedName: 'properties.vlanId',
        type: {
          name: 'Number',
        },
      },
      microsoftPeeringConfig: {
        serializedName: 'properties.microsoftPeeringConfig',
        type: {
          name: 'Composite',
          className: 'ExpressRouteCircuitPeeringConfig',
        },
      },
      stats: {
        serializedName: 'properties.stats',
        type: {
          name: 'Composite',
          className: 'ExpressRouteCircuitStats',
        },
      },
      provisioningState: {
        serializedName: 'properties.provisioningState',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      gatewayManagerEtag: {
        serializedName: 'properties.gatewayManagerEtag',
        type: {
          name: 'String',
        },
      },
      lastModifiedBy: {
        serializedName: 'properties.lastModifiedBy',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      routeFilter: {
        serializedName: 'properties.routeFilter',
        type: {
          name: 'Composite',
          className: 'SubResource',
        },
      },
      ipv6PeeringConfig: {
        serializedName: 'properties.ipv6PeeringConfig',
        type: {
          name: 'Composite',
          className: 'Ipv6ExpressRouteCircuitPeeringConfig',
        },
      },
      expressRouteConnection: {
        serializedName: 'properties.expressRouteConnection',
        type: {
          name: 'Composite',
          className: 'ExpressRouteConnectionId',
        },
      },
      connections: {
        serializedName: 'properties.connections',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'ExpressRouteCircuitConnection',
            },
          },
        },
      },
      peeredConnections: {
        serializedName: 'properties.peeredConnections',
        readOnly: true,
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'PeerExpressRouteCircuitConnection',
            },
          },
        },
      },
    },
  },
};

export const ExpressRouteCrossConnectionPeering: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ExpressRouteCrossConnectionPeering',
    modelProperties: {
      ...SubResource.type.modelProperties,
      name: {
        serializedName: 'name',
        type: {
          name: 'String',
        },
      },
      etag: {
        serializedName: 'etag',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      peeringType: {
        serializedName: 'properties.peeringType',
        type: {
          name: 'String',
        },
      },
      state: {
        serializedName: 'properties.state',
        type: {
          name: 'String',
        },
      },
      azureASN: {
        serializedName: 'properties.azureASN',
        readOnly: true,
        type: {
          name: 'Number',
        },
      },
      peerASN: {
        constraints: {
          InclusiveMaximum: 4294967295,
          InclusiveMinimum: 1,
        },
        serializedName: 'properties.peerASN',
        type: {
          name: 'Number',
        },
      },
      primaryPeerAddressPrefix: {
        serializedName: 'properties.primaryPeerAddressPrefix',
        type: {
          name: 'String',
        },
      },
      secondaryPeerAddressPrefix: {
        serializedName: 'properties.secondaryPeerAddressPrefix',
        type: {
          name: 'String',
        },
      },
      primaryAzurePort: {
        serializedName: 'properties.primaryAzurePort',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      secondaryAzurePort: {
        serializedName: 'properties.secondaryAzurePort',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      sharedKey: {
        serializedName: 'properties.sharedKey',
        type: {
          name: 'String',
        },
      },
      vlanId: {
        serializedName: 'properties.vlanId',
        type: {
          name: 'Number',
        },
      },
      microsoftPeeringConfig: {
        serializedName: 'properties.microsoftPeeringConfig',
        type: {
          name: 'Composite',
          className: 'ExpressRouteCircuitPeeringConfig',
        },
      },
      provisioningState: {
        serializedName: 'properties.provisioningState',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      gatewayManagerEtag: {
        serializedName: 'properties.gatewayManagerEtag',
        type: {
          name: 'String',
        },
      },
      lastModifiedBy: {
        serializedName: 'properties.lastModifiedBy',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      ipv6PeeringConfig: {
        serializedName: 'properties.ipv6PeeringConfig',
        type: {
          name: 'Composite',
          className: 'Ipv6ExpressRouteCircuitPeeringConfig',
        },
      },
    },
  },
};

export const ExpressRouteLink: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ExpressRouteLink',
    modelProperties: {
      ...SubResource.type.modelProperties,
      name: {
        serializedName: 'name',
        type: {
          name: 'String',
        },
      },
      etag: {
        serializedName: 'etag',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      routerName: {
        serializedName: 'properties.routerName',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      interfaceName: {
        serializedName: 'properties.interfaceName',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      patchPanelId: {
        serializedName: 'properties.patchPanelId',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      rackId: {
        serializedName: 'properties.rackId',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      coloLocation: {
        serializedName: 'properties.coloLocation',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      connectorType: {
        serializedName: 'properties.connectorType',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      adminState: {
        serializedName: 'properties.adminState',
        type: {
          name: 'String',
        },
      },
      provisioningState: {
        serializedName: 'properties.provisioningState',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      macSecConfig: {
        serializedName: 'properties.macSecConfig',
        type: {
          name: 'Composite',
          className: 'ExpressRouteLinkMacSecConfig',
        },
      },
    },
  },
};

export const ExpressRoutePortAuthorization: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ExpressRoutePortAuthorization',
    modelProperties: {
      ...SubResource.type.modelProperties,
      name: {
        serializedName: 'name',
        type: {
          name: 'String',
        },
      },
      etag: {
        serializedName: 'etag',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      type: {
        serializedName: 'type',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      authorizationKey: {
        serializedName: 'properties.authorizationKey',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      authorizationUseStatus: {
        serializedName: 'properties.authorizationUseStatus',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      circuitResourceUri: {
        serializedName: 'properties.circuitResourceUri',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      provisioningState: {
        serializedName: 'properties.provisioningState',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const FirewallPolicyRuleCollectionGroup: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'FirewallPolicyRuleCollectionGroup',
    modelProperties: {
      ...SubResource.type.modelProperties,
      name: {
        serializedName: 'name',
        type: {
          name: 'String',
        },
      },
      etag: {
        serializedName: 'etag',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      type: {
        serializedName: 'type',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      priority: {
        constraints: {
          InclusiveMaximum: 65000,
          InclusiveMinimum: 100,
        },
        serializedName: 'properties.priority',
        type: {
          name: 'Number',
        },
      },
      ruleCollections: {
        serializedName: 'properties.ruleCollections',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'FirewallPolicyRuleCollection',
            },
          },
        },
      },
      provisioningState: {
        serializedName: 'properties.provisioningState',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const LoadBalancingRule: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'LoadBalancingRule',
    modelProperties: {
      ...SubResource.type.modelProperties,
      name: {
        serializedName: 'name',
        type: {
          name: 'String',
        },
      },
      etag: {
        serializedName: 'etag',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      type: {
        serializedName: 'type',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      frontendIPConfiguration: {
        serializedName: 'properties.frontendIPConfiguration',
        type: {
          name: 'Composite',
          className: 'SubResource',
        },
      },
      backendAddressPool: {
        serializedName: 'properties.backendAddressPool',
        type: {
          name: 'Composite',
          className: 'SubResource',
        },
      },
      backendAddressPools: {
        serializedName: 'properties.backendAddressPools',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'SubResource',
            },
          },
        },
      },
      probe: {
        serializedName: 'properties.probe',
        type: {
          name: 'Composite',
          className: 'SubResource',
        },
      },
      protocol: {
        serializedName: 'properties.protocol',
        type: {
          name: 'String',
        },
      },
      loadDistribution: {
        serializedName: 'properties.loadDistribution',
        type: {
          name: 'String',
        },
      },
      frontendPort: {
        serializedName: 'properties.frontendPort',
        type: {
          name: 'Number',
        },
      },
      backendPort: {
        serializedName: 'properties.backendPort',
        type: {
          name: 'Number',
        },
      },
      idleTimeoutInMinutes: {
        serializedName: 'properties.idleTimeoutInMinutes',
        type: {
          name: 'Number',
        },
      },
      enableFloatingIP: {
        serializedName: 'properties.enableFloatingIP',
        type: {
          name: 'Boolean',
        },
      },
      enableTcpReset: {
        serializedName: 'properties.enableTcpReset',
        type: {
          name: 'Boolean',
        },
      },
      disableOutboundSnat: {
        serializedName: 'properties.disableOutboundSnat',
        type: {
          name: 'Boolean',
        },
      },
      provisioningState: {
        serializedName: 'properties.provisioningState',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const Probe: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'Probe',
    modelProperties: {
      ...SubResource.type.modelProperties,
      name: {
        serializedName: 'name',
        type: {
          name: 'String',
        },
      },
      etag: {
        serializedName: 'etag',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      type: {
        serializedName: 'type',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      loadBalancingRules: {
        serializedName: 'properties.loadBalancingRules',
        readOnly: true,
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'SubResource',
            },
          },
        },
      },
      protocol: {
        serializedName: 'properties.protocol',
        type: {
          name: 'String',
        },
      },
      port: {
        serializedName: 'properties.port',
        type: {
          name: 'Number',
        },
      },
      intervalInSeconds: {
        serializedName: 'properties.intervalInSeconds',
        type: {
          name: 'Number',
        },
      },
      numberOfProbes: {
        serializedName: 'properties.numberOfProbes',
        type: {
          name: 'Number',
        },
      },
      probeThreshold: {
        serializedName: 'properties.probeThreshold',
        type: {
          name: 'Number',
        },
      },
      requestPath: {
        serializedName: 'properties.requestPath',
        type: {
          name: 'String',
        },
      },
      provisioningState: {
        serializedName: 'properties.provisioningState',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const InboundNatPool: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'InboundNatPool',
    modelProperties: {
      ...SubResource.type.modelProperties,
      name: {
        serializedName: 'name',
        type: {
          name: 'String',
        },
      },
      etag: {
        serializedName: 'etag',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      type: {
        serializedName: 'type',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      frontendIPConfiguration: {
        serializedName: 'properties.frontendIPConfiguration',
        type: {
          name: 'Composite',
          className: 'SubResource',
        },
      },
      protocol: {
        serializedName: 'properties.protocol',
        type: {
          name: 'String',
        },
      },
      frontendPortRangeStart: {
        serializedName: 'properties.frontendPortRangeStart',
        type: {
          name: 'Number',
        },
      },
      frontendPortRangeEnd: {
        serializedName: 'properties.frontendPortRangeEnd',
        type: {
          name: 'Number',
        },
      },
      backendPort: {
        serializedName: 'properties.backendPort',
        type: {
          name: 'Number',
        },
      },
      idleTimeoutInMinutes: {
        serializedName: 'properties.idleTimeoutInMinutes',
        type: {
          name: 'Number',
        },
      },
      enableFloatingIP: {
        serializedName: 'properties.enableFloatingIP',
        type: {
          name: 'Boolean',
        },
      },
      enableTcpReset: {
        serializedName: 'properties.enableTcpReset',
        type: {
          name: 'Boolean',
        },
      },
      provisioningState: {
        serializedName: 'properties.provisioningState',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const OutboundRule: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'OutboundRule',
    modelProperties: {
      ...SubResource.type.modelProperties,
      name: {
        serializedName: 'name',
        type: {
          name: 'String',
        },
      },
      etag: {
        serializedName: 'etag',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      type: {
        serializedName: 'type',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      allocatedOutboundPorts: {
        serializedName: 'properties.allocatedOutboundPorts',
        type: {
          name: 'Number',
        },
      },
      frontendIPConfigurations: {
        serializedName: 'properties.frontendIPConfigurations',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'SubResource',
            },
          },
        },
      },
      backendAddressPool: {
        serializedName: 'properties.backendAddressPool',
        type: {
          name: 'Composite',
          className: 'SubResource',
        },
      },
      provisioningState: {
        serializedName: 'properties.provisioningState',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      protocol: {
        serializedName: 'properties.protocol',
        type: {
          name: 'String',
        },
      },
      enableTcpReset: {
        serializedName: 'properties.enableTcpReset',
        type: {
          name: 'Boolean',
        },
      },
      idleTimeoutInMinutes: {
        serializedName: 'properties.idleTimeoutInMinutes',
        type: {
          name: 'Number',
        },
      },
    },
  },
};

export const ContainerNetworkInterfaceConfiguration: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ContainerNetworkInterfaceConfiguration',
    modelProperties: {
      ...SubResource.type.modelProperties,
      name: {
        serializedName: 'name',
        type: {
          name: 'String',
        },
      },
      type: {
        serializedName: 'type',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      etag: {
        serializedName: 'etag',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      ipConfigurations: {
        serializedName: 'properties.ipConfigurations',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'IPConfigurationProfile',
            },
          },
        },
      },
      containerNetworkInterfaces: {
        serializedName: 'properties.containerNetworkInterfaces',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'SubResource',
            },
          },
        },
      },
      provisioningState: {
        serializedName: 'properties.provisioningState',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const Container: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'Container',
    modelProperties: {
      ...SubResource.type.modelProperties,
    },
  },
};

export const ContainerNetworkInterface: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ContainerNetworkInterface',
    modelProperties: {
      ...SubResource.type.modelProperties,
      name: {
        serializedName: 'name',
        type: {
          name: 'String',
        },
      },
      type: {
        serializedName: 'type',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      etag: {
        serializedName: 'etag',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      containerNetworkInterfaceConfiguration: {
        serializedName: 'properties.containerNetworkInterfaceConfiguration',
        type: {
          name: 'Composite',
          className: 'ContainerNetworkInterfaceConfiguration',
        },
      },
      container: {
        serializedName: 'properties.container',
        type: {
          name: 'Composite',
          className: 'Container',
        },
      },
      ipConfigurations: {
        serializedName: 'properties.ipConfigurations',
        readOnly: true,
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'ContainerNetworkInterfaceIpConfiguration',
            },
          },
        },
      },
      provisioningState: {
        serializedName: 'properties.provisioningState',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const VirtualApplianceSite: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'VirtualApplianceSite',
    modelProperties: {
      ...SubResource.type.modelProperties,
      name: {
        serializedName: 'name',
        type: {
          name: 'String',
        },
      },
      etag: {
        serializedName: 'etag',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      type: {
        serializedName: 'type',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      addressPrefix: {
        serializedName: 'properties.addressPrefix',
        type: {
          name: 'String',
        },
      },
      o365Policy: {
        serializedName: 'properties.o365Policy',
        type: {
          name: 'Composite',
          className: 'Office365PolicyProperties',
        },
      },
      provisioningState: {
        serializedName: 'properties.provisioningState',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const InboundSecurityRule: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'InboundSecurityRule',
    modelProperties: {
      ...SubResource.type.modelProperties,
      name: {
        serializedName: 'name',
        type: {
          name: 'String',
        },
      },
      etag: {
        serializedName: 'etag',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      type: {
        serializedName: 'type',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      rules: {
        serializedName: 'properties.rules',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'InboundSecurityRules',
            },
          },
        },
      },
      provisioningState: {
        serializedName: 'properties.provisioningState',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const PrivateDnsZoneGroup: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'PrivateDnsZoneGroup',
    modelProperties: {
      ...SubResource.type.modelProperties,
      name: {
        serializedName: 'name',
        type: {
          name: 'String',
        },
      },
      etag: {
        serializedName: 'etag',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      provisioningState: {
        serializedName: 'properties.provisioningState',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      privateDnsZoneConfigs: {
        serializedName: 'properties.privateDnsZoneConfigs',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'PrivateDnsZoneConfig',
            },
          },
        },
      },
    },
  },
};

export const RouteFilterRule: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'RouteFilterRule',
    modelProperties: {
      ...SubResource.type.modelProperties,
      name: {
        serializedName: 'name',
        type: {
          name: 'String',
        },
      },
      location: {
        serializedName: 'location',
        type: {
          name: 'String',
        },
      },
      etag: {
        serializedName: 'etag',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      access: {
        serializedName: 'properties.access',
        type: {
          name: 'String',
        },
      },
      routeFilterRuleType: {
        serializedName: 'properties.routeFilterRuleType',
        type: {
          name: 'String',
        },
      },
      communities: {
        serializedName: 'properties.communities',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
      provisioningState: {
        serializedName: 'properties.provisioningState',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const VirtualNetworkPeering: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'VirtualNetworkPeering',
    modelProperties: {
      ...SubResource.type.modelProperties,
      name: {
        serializedName: 'name',
        type: {
          name: 'String',
        },
      },
      etag: {
        serializedName: 'etag',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      type: {
        serializedName: 'type',
        type: {
          name: 'String',
        },
      },
      allowVirtualNetworkAccess: {
        serializedName: 'properties.allowVirtualNetworkAccess',
        type: {
          name: 'Boolean',
        },
      },
      allowForwardedTraffic: {
        serializedName: 'properties.allowForwardedTraffic',
        type: {
          name: 'Boolean',
        },
      },
      allowGatewayTransit: {
        serializedName: 'properties.allowGatewayTransit',
        type: {
          name: 'Boolean',
        },
      },
      useRemoteGateways: {
        serializedName: 'properties.useRemoteGateways',
        type: {
          name: 'Boolean',
        },
      },
      remoteVirtualNetwork: {
        serializedName: 'properties.remoteVirtualNetwork',
        type: {
          name: 'Composite',
          className: 'SubResource',
        },
      },
      remoteAddressSpace: {
        serializedName: 'properties.remoteAddressSpace',
        type: {
          name: 'Composite',
          className: 'AddressSpace',
        },
      },
      remoteVirtualNetworkAddressSpace: {
        serializedName: 'properties.remoteVirtualNetworkAddressSpace',
        type: {
          name: 'Composite',
          className: 'AddressSpace',
        },
      },
      remoteBgpCommunities: {
        serializedName: 'properties.remoteBgpCommunities',
        type: {
          name: 'Composite',
          className: 'VirtualNetworkBgpCommunities',
        },
      },
      remoteVirtualNetworkEncryption: {
        serializedName: 'properties.remoteVirtualNetworkEncryption',
        type: {
          name: 'Composite',
          className: 'VirtualNetworkEncryption',
        },
      },
      peeringState: {
        serializedName: 'properties.peeringState',
        type: {
          name: 'String',
        },
      },
      peeringSyncLevel: {
        serializedName: 'properties.peeringSyncLevel',
        type: {
          name: 'String',
        },
      },
      provisioningState: {
        serializedName: 'properties.provisioningState',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      doNotVerifyRemoteGateways: {
        serializedName: 'properties.doNotVerifyRemoteGateways',
        type: {
          name: 'Boolean',
        },
      },
      resourceGuid: {
        serializedName: 'properties.resourceGuid',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const VirtualNetworkGatewayIPConfiguration: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'VirtualNetworkGatewayIPConfiguration',
    modelProperties: {
      ...SubResource.type.modelProperties,
      name: {
        serializedName: 'name',
        type: {
          name: 'String',
        },
      },
      etag: {
        serializedName: 'etag',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      privateIPAllocationMethod: {
        serializedName: 'properties.privateIPAllocationMethod',
        type: {
          name: 'String',
        },
      },
      subnet: {
        serializedName: 'properties.subnet',
        type: {
          name: 'Composite',
          className: 'SubResource',
        },
      },
      publicIPAddress: {
        serializedName: 'properties.publicIPAddress',
        type: {
          name: 'Composite',
          className: 'SubResource',
        },
      },
      privateIPAddress: {
        serializedName: 'properties.privateIPAddress',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      provisioningState: {
        serializedName: 'properties.provisioningState',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const VpnClientRootCertificate: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'VpnClientRootCertificate',
    modelProperties: {
      ...SubResource.type.modelProperties,
      name: {
        serializedName: 'name',
        type: {
          name: 'String',
        },
      },
      etag: {
        serializedName: 'etag',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      publicCertData: {
        serializedName: 'properties.publicCertData',
        required: true,
        type: {
          name: 'String',
        },
      },
      provisioningState: {
        serializedName: 'properties.provisioningState',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const VpnClientRevokedCertificate: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'VpnClientRevokedCertificate',
    modelProperties: {
      ...SubResource.type.modelProperties,
      name: {
        serializedName: 'name',
        type: {
          name: 'String',
        },
      },
      etag: {
        serializedName: 'etag',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      thumbprint: {
        serializedName: 'properties.thumbprint',
        type: {
          name: 'String',
        },
      },
      provisioningState: {
        serializedName: 'properties.provisioningState',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const VngClientConnectionConfiguration: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'VngClientConnectionConfiguration',
    modelProperties: {
      ...SubResource.type.modelProperties,
      name: {
        serializedName: 'name',
        type: {
          name: 'String',
        },
      },
      etag: {
        serializedName: 'etag',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      vpnClientAddressPool: {
        serializedName: 'properties.vpnClientAddressPool',
        type: {
          name: 'Composite',
          className: 'AddressSpace',
        },
      },
      virtualNetworkGatewayPolicyGroups: {
        serializedName: 'properties.virtualNetworkGatewayPolicyGroups',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'SubResource',
            },
          },
        },
      },
      provisioningState: {
        serializedName: 'properties.provisioningState',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const VirtualNetworkGatewayPolicyGroup: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'VirtualNetworkGatewayPolicyGroup',
    modelProperties: {
      ...SubResource.type.modelProperties,
      name: {
        serializedName: 'name',
        type: {
          name: 'String',
        },
      },
      etag: {
        serializedName: 'etag',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      isDefault: {
        serializedName: 'properties.isDefault',
        type: {
          name: 'Boolean',
        },
      },
      priority: {
        serializedName: 'properties.priority',
        type: {
          name: 'Number',
        },
      },
      policyMembers: {
        serializedName: 'properties.policyMembers',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'VirtualNetworkGatewayPolicyGroupMember',
            },
          },
        },
      },
      vngClientConnectionConfigurations: {
        serializedName: 'properties.vngClientConnectionConfigurations',
        readOnly: true,
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'SubResource',
            },
          },
        },
      },
      provisioningState: {
        serializedName: 'properties.provisioningState',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const VirtualNetworkGatewayNatRule: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'VirtualNetworkGatewayNatRule',
    modelProperties: {
      ...SubResource.type.modelProperties,
      name: {
        serializedName: 'name',
        type: {
          name: 'String',
        },
      },
      etag: {
        serializedName: 'etag',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      type: {
        serializedName: 'type',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      provisioningState: {
        serializedName: 'properties.provisioningState',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      typePropertiesType: {
        serializedName: 'properties.type',
        type: {
          name: 'String',
        },
      },
      mode: {
        serializedName: 'properties.mode',
        type: {
          name: 'String',
        },
      },
      internalMappings: {
        serializedName: 'properties.internalMappings',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'VpnNatRuleMapping',
            },
          },
        },
      },
      externalMappings: {
        serializedName: 'properties.externalMappings',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'VpnNatRuleMapping',
            },
          },
        },
      },
      ipConfigurationId: {
        serializedName: 'properties.ipConfigurationId',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const ConnectionSharedKey: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ConnectionSharedKey',
    modelProperties: {
      ...SubResource.type.modelProperties,
      value: {
        serializedName: 'value',
        required: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const VirtualRouterPeering: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'VirtualRouterPeering',
    modelProperties: {
      ...SubResource.type.modelProperties,
      name: {
        serializedName: 'name',
        type: {
          name: 'String',
        },
      },
      etag: {
        serializedName: 'etag',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      type: {
        serializedName: 'type',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      peerAsn: {
        constraints: {
          InclusiveMaximum: 4294967295,
          InclusiveMinimum: 0,
        },
        serializedName: 'properties.peerAsn',
        type: {
          name: 'Number',
        },
      },
      peerIp: {
        serializedName: 'properties.peerIp',
        type: {
          name: 'String',
        },
      },
      provisioningState: {
        serializedName: 'properties.provisioningState',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const VpnSiteLink: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'VpnSiteLink',
    modelProperties: {
      ...SubResource.type.modelProperties,
      etag: {
        serializedName: 'etag',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      name: {
        serializedName: 'name',
        type: {
          name: 'String',
        },
      },
      type: {
        serializedName: 'type',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      linkProperties: {
        serializedName: 'properties.linkProperties',
        type: {
          name: 'Composite',
          className: 'VpnLinkProviderProperties',
        },
      },
      ipAddress: {
        serializedName: 'properties.ipAddress',
        type: {
          name: 'String',
        },
      },
      fqdn: {
        serializedName: 'properties.fqdn',
        type: {
          name: 'String',
        },
      },
      bgpProperties: {
        serializedName: 'properties.bgpProperties',
        type: {
          name: 'Composite',
          className: 'VpnLinkBgpSettings',
        },
      },
      provisioningState: {
        serializedName: 'properties.provisioningState',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const VpnServerConfigurationPolicyGroup: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'VpnServerConfigurationPolicyGroup',
    modelProperties: {
      ...SubResource.type.modelProperties,
      etag: {
        serializedName: 'etag',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      name: {
        serializedName: 'name',
        type: {
          name: 'String',
        },
      },
      type: {
        serializedName: 'type',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      isDefault: {
        serializedName: 'properties.isDefault',
        type: {
          name: 'Boolean',
        },
      },
      priority: {
        serializedName: 'properties.priority',
        type: {
          name: 'Number',
        },
      },
      policyMembers: {
        serializedName: 'properties.policyMembers',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'VpnServerConfigurationPolicyGroupMember',
            },
          },
        },
      },
      p2SConnectionConfigurations: {
        serializedName: 'properties.p2SConnectionConfigurations',
        readOnly: true,
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'SubResource',
            },
          },
        },
      },
      provisioningState: {
        serializedName: 'properties.provisioningState',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const P2SConnectionConfiguration: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'P2SConnectionConfiguration',
    modelProperties: {
      ...SubResource.type.modelProperties,
      name: {
        serializedName: 'name',
        type: {
          name: 'String',
        },
      },
      etag: {
        serializedName: 'etag',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      vpnClientAddressPool: {
        serializedName: 'properties.vpnClientAddressPool',
        type: {
          name: 'Composite',
          className: 'AddressSpace',
        },
      },
      routingConfiguration: {
        serializedName: 'properties.routingConfiguration',
        type: {
          name: 'Composite',
          className: 'RoutingConfiguration',
        },
      },
      enableInternetSecurity: {
        serializedName: 'properties.enableInternetSecurity',
        type: {
          name: 'Boolean',
        },
      },
      configurationPolicyGroupAssociations: {
        serializedName: 'properties.configurationPolicyGroupAssociations',
        readOnly: true,
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'SubResource',
            },
          },
        },
      },
      previousConfigurationPolicyGroupAssociations: {
        serializedName:
          'properties.previousConfigurationPolicyGroupAssociations',
        readOnly: true,
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'VpnServerConfigurationPolicyGroup',
            },
          },
        },
      },
      provisioningState: {
        serializedName: 'properties.provisioningState',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const VirtualHubRouteTableV2: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'VirtualHubRouteTableV2',
    modelProperties: {
      ...SubResource.type.modelProperties,
      name: {
        serializedName: 'name',
        type: {
          name: 'String',
        },
      },
      etag: {
        serializedName: 'etag',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      routes: {
        serializedName: 'properties.routes',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'VirtualHubRouteV2',
            },
          },
        },
      },
      attachedConnections: {
        serializedName: 'properties.attachedConnections',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
      provisioningState: {
        serializedName: 'properties.provisioningState',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const RouteMap: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'RouteMap',
    modelProperties: {
      ...SubResource.type.modelProperties,
      name: {
        serializedName: 'name',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      etag: {
        serializedName: 'etag',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      type: {
        serializedName: 'type',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      associatedInboundConnections: {
        serializedName: 'properties.associatedInboundConnections',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
      associatedOutboundConnections: {
        serializedName: 'properties.associatedOutboundConnections',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
      rules: {
        serializedName: 'properties.rules',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'RouteMapRule',
            },
          },
        },
      },
      provisioningState: {
        serializedName: 'properties.provisioningState',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const HubVirtualNetworkConnection: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'HubVirtualNetworkConnection',
    modelProperties: {
      ...SubResource.type.modelProperties,
      name: {
        serializedName: 'name',
        type: {
          name: 'String',
        },
      },
      etag: {
        serializedName: 'etag',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      remoteVirtualNetwork: {
        serializedName: 'properties.remoteVirtualNetwork',
        type: {
          name: 'Composite',
          className: 'SubResource',
        },
      },
      allowHubToRemoteVnetTransit: {
        serializedName: 'properties.allowHubToRemoteVnetTransit',
        type: {
          name: 'Boolean',
        },
      },
      allowRemoteVnetToUseHubVnetGateways: {
        serializedName: 'properties.allowRemoteVnetToUseHubVnetGateways',
        type: {
          name: 'Boolean',
        },
      },
      enableInternetSecurity: {
        serializedName: 'properties.enableInternetSecurity',
        type: {
          name: 'Boolean',
        },
      },
      routingConfiguration: {
        serializedName: 'properties.routingConfiguration',
        type: {
          name: 'Composite',
          className: 'RoutingConfiguration',
        },
      },
      provisioningState: {
        serializedName: 'properties.provisioningState',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const VpnSiteLinkConnection: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'VpnSiteLinkConnection',
    modelProperties: {
      ...SubResource.type.modelProperties,
      name: {
        serializedName: 'name',
        type: {
          name: 'String',
        },
      },
      etag: {
        serializedName: 'etag',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      type: {
        serializedName: 'type',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      vpnSiteLink: {
        serializedName: 'properties.vpnSiteLink',
        type: {
          name: 'Composite',
          className: 'SubResource',
        },
      },
      routingWeight: {
        serializedName: 'properties.routingWeight',
        type: {
          name: 'Number',
        },
      },
      vpnLinkConnectionMode: {
        serializedName: 'properties.vpnLinkConnectionMode',
        type: {
          name: 'String',
        },
      },
      connectionStatus: {
        serializedName: 'properties.connectionStatus',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      vpnConnectionProtocolType: {
        serializedName: 'properties.vpnConnectionProtocolType',
        type: {
          name: 'String',
        },
      },
      ingressBytesTransferred: {
        serializedName: 'properties.ingressBytesTransferred',
        readOnly: true,
        type: {
          name: 'Number',
        },
      },
      egressBytesTransferred: {
        serializedName: 'properties.egressBytesTransferred',
        readOnly: true,
        type: {
          name: 'Number',
        },
      },
      connectionBandwidth: {
        serializedName: 'properties.connectionBandwidth',
        type: {
          name: 'Number',
        },
      },
      sharedKey: {
        serializedName: 'properties.sharedKey',
        type: {
          name: 'String',
        },
      },
      enableBgp: {
        serializedName: 'properties.enableBgp',
        type: {
          name: 'Boolean',
        },
      },
      vpnGatewayCustomBgpAddresses: {
        serializedName: 'properties.vpnGatewayCustomBgpAddresses',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'GatewayCustomBgpIpAddressIpConfiguration',
            },
          },
        },
      },
      usePolicyBasedTrafficSelectors: {
        serializedName: 'properties.usePolicyBasedTrafficSelectors',
        type: {
          name: 'Boolean',
        },
      },
      ipsecPolicies: {
        serializedName: 'properties.ipsecPolicies',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'IpsecPolicy',
            },
          },
        },
      },
      enableRateLimiting: {
        serializedName: 'properties.enableRateLimiting',
        type: {
          name: 'Boolean',
        },
      },
      useLocalAzureIpAddress: {
        serializedName: 'properties.useLocalAzureIpAddress',
        type: {
          name: 'Boolean',
        },
      },
      provisioningState: {
        serializedName: 'properties.provisioningState',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      ingressNatRules: {
        serializedName: 'properties.ingressNatRules',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'SubResource',
            },
          },
        },
      },
      egressNatRules: {
        serializedName: 'properties.egressNatRules',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'SubResource',
            },
          },
        },
      },
    },
  },
};

export const VpnConnection: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'VpnConnection',
    modelProperties: {
      ...SubResource.type.modelProperties,
      name: {
        serializedName: 'name',
        type: {
          name: 'String',
        },
      },
      etag: {
        serializedName: 'etag',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      remoteVpnSite: {
        serializedName: 'properties.remoteVpnSite',
        type: {
          name: 'Composite',
          className: 'SubResource',
        },
      },
      routingWeight: {
        serializedName: 'properties.routingWeight',
        type: {
          name: 'Number',
        },
      },
      dpdTimeoutSeconds: {
        serializedName: 'properties.dpdTimeoutSeconds',
        type: {
          name: 'Number',
        },
      },
      connectionStatus: {
        serializedName: 'properties.connectionStatus',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      vpnConnectionProtocolType: {
        serializedName: 'properties.vpnConnectionProtocolType',
        type: {
          name: 'String',
        },
      },
      ingressBytesTransferred: {
        serializedName: 'properties.ingressBytesTransferred',
        readOnly: true,
        type: {
          name: 'Number',
        },
      },
      egressBytesTransferred: {
        serializedName: 'properties.egressBytesTransferred',
        readOnly: true,
        type: {
          name: 'Number',
        },
      },
      connectionBandwidth: {
        serializedName: 'properties.connectionBandwidth',
        type: {
          name: 'Number',
        },
      },
      sharedKey: {
        serializedName: 'properties.sharedKey',
        type: {
          name: 'String',
        },
      },
      enableBgp: {
        serializedName: 'properties.enableBgp',
        type: {
          name: 'Boolean',
        },
      },
      usePolicyBasedTrafficSelectors: {
        serializedName: 'properties.usePolicyBasedTrafficSelectors',
        type: {
          name: 'Boolean',
        },
      },
      ipsecPolicies: {
        serializedName: 'properties.ipsecPolicies',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'IpsecPolicy',
            },
          },
        },
      },
      trafficSelectorPolicies: {
        serializedName: 'properties.trafficSelectorPolicies',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'TrafficSelectorPolicy',
            },
          },
        },
      },
      enableRateLimiting: {
        serializedName: 'properties.enableRateLimiting',
        type: {
          name: 'Boolean',
        },
      },
      enableInternetSecurity: {
        serializedName: 'properties.enableInternetSecurity',
        type: {
          name: 'Boolean',
        },
      },
      useLocalAzureIpAddress: {
        serializedName: 'properties.useLocalAzureIpAddress',
        type: {
          name: 'Boolean',
        },
      },
      provisioningState: {
        serializedName: 'properties.provisioningState',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      vpnLinkConnections: {
        serializedName: 'properties.vpnLinkConnections',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'VpnSiteLinkConnection',
            },
          },
        },
      },
      routingConfiguration: {
        serializedName: 'properties.routingConfiguration',
        type: {
          name: 'Composite',
          className: 'RoutingConfiguration',
        },
      },
    },
  },
};

export const VpnGatewayNatRule: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'VpnGatewayNatRule',
    modelProperties: {
      ...SubResource.type.modelProperties,
      name: {
        serializedName: 'name',
        type: {
          name: 'String',
        },
      },
      etag: {
        serializedName: 'etag',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      type: {
        serializedName: 'type',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      provisioningState: {
        serializedName: 'properties.provisioningState',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      typePropertiesType: {
        serializedName: 'properties.type',
        type: {
          name: 'String',
        },
      },
      mode: {
        serializedName: 'properties.mode',
        type: {
          name: 'String',
        },
      },
      internalMappings: {
        serializedName: 'properties.internalMappings',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'VpnNatRuleMapping',
            },
          },
        },
      },
      externalMappings: {
        serializedName: 'properties.externalMappings',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'VpnNatRuleMapping',
            },
          },
        },
      },
      ipConfigurationId: {
        serializedName: 'properties.ipConfigurationId',
        type: {
          name: 'String',
        },
      },
      egressVpnSiteLinkConnections: {
        serializedName: 'properties.egressVpnSiteLinkConnections',
        readOnly: true,
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'SubResource',
            },
          },
        },
      },
      ingressVpnSiteLinkConnections: {
        serializedName: 'properties.ingressVpnSiteLinkConnections',
        readOnly: true,
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'SubResource',
            },
          },
        },
      },
    },
  },
};

export const ExpressRouteConnection: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ExpressRouteConnection',
    modelProperties: {
      ...SubResource.type.modelProperties,
      name: {
        serializedName: 'name',
        required: true,
        type: {
          name: 'String',
        },
      },
      provisioningState: {
        serializedName: 'properties.provisioningState',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      expressRouteCircuitPeering: {
        serializedName: 'properties.expressRouteCircuitPeering',
        type: {
          name: 'Composite',
          className: 'ExpressRouteCircuitPeeringId',
        },
      },
      authorizationKey: {
        serializedName: 'properties.authorizationKey',
        type: {
          name: 'String',
        },
      },
      routingWeight: {
        serializedName: 'properties.routingWeight',
        type: {
          name: 'Number',
        },
      },
      enableInternetSecurity: {
        serializedName: 'properties.enableInternetSecurity',
        type: {
          name: 'Boolean',
        },
      },
      expressRouteGatewayBypass: {
        serializedName: 'properties.expressRouteGatewayBypass',
        type: {
          name: 'Boolean',
        },
      },
      enablePrivateLinkFastPath: {
        serializedName: 'properties.enablePrivateLinkFastPath',
        type: {
          name: 'Boolean',
        },
      },
      routingConfiguration: {
        serializedName: 'properties.routingConfiguration',
        type: {
          name: 'Composite',
          className: 'RoutingConfiguration',
        },
      },
    },
  },
};

export const NetworkVirtualApplianceConnection: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'NetworkVirtualApplianceConnection',
    modelProperties: {
      ...SubResource.type.modelProperties,
      name: {
        serializedName: 'name',
        type: {
          name: 'String',
        },
      },
      namePropertiesName: {
        serializedName: 'properties.name',
        type: {
          name: 'String',
        },
      },
      provisioningState: {
        serializedName: 'properties.provisioningState',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      asn: {
        constraints: {
          InclusiveMaximum: 4294967295,
          InclusiveMinimum: 0,
        },
        serializedName: 'properties.asn',
        type: {
          name: 'Number',
        },
      },
      tunnelIdentifier: {
        constraints: {
          InclusiveMaximum: 4294967295,
          InclusiveMinimum: 0,
        },
        serializedName: 'properties.tunnelIdentifier',
        type: {
          name: 'Number',
        },
      },
      bgpPeerAddress: {
        serializedName: 'properties.bgpPeerAddress',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
      enableInternetSecurity: {
        serializedName: 'properties.enableInternetSecurity',
        type: {
          name: 'Boolean',
        },
      },
      routingConfiguration: {
        serializedName: 'properties.routingConfiguration',
        type: {
          name: 'Composite',
          className: 'RoutingConfigurationNfv',
        },
      },
    },
  },
};

export const BgpConnection: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'BgpConnection',
    modelProperties: {
      ...SubResource.type.modelProperties,
      name: {
        serializedName: 'name',
        type: {
          name: 'String',
        },
      },
      etag: {
        serializedName: 'etag',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      type: {
        serializedName: 'type',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      peerAsn: {
        constraints: {
          InclusiveMaximum: 4294967295,
          InclusiveMinimum: 0,
        },
        serializedName: 'properties.peerAsn',
        type: {
          name: 'Number',
        },
      },
      peerIp: {
        serializedName: 'properties.peerIp',
        type: {
          name: 'String',
        },
      },
      hubVirtualNetworkConnection: {
        serializedName: 'properties.hubVirtualNetworkConnection',
        type: {
          name: 'Composite',
          className: 'SubResource',
        },
      },
      provisioningState: {
        serializedName: 'properties.provisioningState',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      connectionState: {
        serializedName: 'properties.connectionState',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const HubIpConfiguration: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'HubIpConfiguration',
    modelProperties: {
      ...SubResource.type.modelProperties,
      name: {
        serializedName: 'name',
        type: {
          name: 'String',
        },
      },
      etag: {
        serializedName: 'etag',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      type: {
        serializedName: 'type',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      privateIPAddress: {
        serializedName: 'properties.privateIPAddress',
        type: {
          name: 'String',
        },
      },
      privateIPAllocationMethod: {
        serializedName: 'properties.privateIPAllocationMethod',
        type: {
          name: 'String',
        },
      },
      subnet: {
        serializedName: 'properties.subnet',
        type: {
          name: 'Composite',
          className: 'Subnet',
        },
      },
      publicIPAddress: {
        serializedName: 'properties.publicIPAddress',
        type: {
          name: 'Composite',
          className: 'PublicIPAddress',
        },
      },
      provisioningState: {
        serializedName: 'properties.provisioningState',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const HubRouteTable: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'HubRouteTable',
    modelProperties: {
      ...SubResource.type.modelProperties,
      name: {
        serializedName: 'name',
        type: {
          name: 'String',
        },
      },
      etag: {
        serializedName: 'etag',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      type: {
        serializedName: 'type',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      routes: {
        serializedName: 'properties.routes',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'HubRoute',
            },
          },
        },
      },
      labels: {
        serializedName: 'properties.labels',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
      associatedConnections: {
        serializedName: 'properties.associatedConnections',
        readOnly: true,
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
      propagatingConnections: {
        serializedName: 'properties.propagatingConnections',
        readOnly: true,
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
      provisioningState: {
        serializedName: 'properties.provisioningState',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const RoutingIntent: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'RoutingIntent',
    modelProperties: {
      ...SubResource.type.modelProperties,
      name: {
        serializedName: 'name',
        type: {
          name: 'String',
        },
      },
      etag: {
        serializedName: 'etag',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      type: {
        serializedName: 'type',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      routingPolicies: {
        serializedName: 'properties.routingPolicies',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'RoutingPolicy',
            },
          },
        },
      },
      provisioningState: {
        serializedName: 'properties.provisioningState',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const PatchRouteFilterRule: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'PatchRouteFilterRule',
    modelProperties: {
      ...SubResource.type.modelProperties,
      name: {
        serializedName: 'name',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      etag: {
        serializedName: 'etag',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      access: {
        serializedName: 'properties.access',
        type: {
          name: 'String',
        },
      },
      routeFilterRuleType: {
        serializedName: 'properties.routeFilterRuleType',
        type: {
          name: 'String',
        },
      },
      communities: {
        serializedName: 'properties.communities',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
      provisioningState: {
        serializedName: 'properties.provisioningState',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const PatchRouteFilter: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'PatchRouteFilter',
    modelProperties: {
      ...SubResource.type.modelProperties,
      name: {
        serializedName: 'name',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      etag: {
        serializedName: 'etag',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      type: {
        serializedName: 'type',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      tags: {
        serializedName: 'tags',
        type: {
          name: 'Dictionary',
          value: { type: { name: 'String' } },
        },
      },
      rules: {
        serializedName: 'properties.rules',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'RouteFilterRule',
            },
          },
        },
      },
      peerings: {
        serializedName: 'properties.peerings',
        readOnly: true,
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'ExpressRouteCircuitPeering',
            },
          },
        },
      },
      ipv6Peerings: {
        serializedName: 'properties.ipv6Peerings',
        readOnly: true,
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'ExpressRouteCircuitPeering',
            },
          },
        },
      },
      provisioningState: {
        serializedName: 'properties.provisioningState',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const ApplicationSecurityGroup: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ApplicationSecurityGroup',
    modelProperties: {
      ...Resource.type.modelProperties,
      etag: {
        serializedName: 'etag',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      resourceGuid: {
        serializedName: 'properties.resourceGuid',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      provisioningState: {
        serializedName: 'properties.provisioningState',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const PrivateEndpoint: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'PrivateEndpoint',
    modelProperties: {
      ...Resource.type.modelProperties,
      extendedLocation: {
        serializedName: 'extendedLocation',
        type: {
          name: 'Composite',
          className: 'ExtendedLocation',
        },
      },
      etag: {
        serializedName: 'etag',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      subnet: {
        serializedName: 'properties.subnet',
        type: {
          name: 'Composite',
          className: 'Subnet',
        },
      },
      networkInterfaces: {
        serializedName: 'properties.networkInterfaces',
        readOnly: true,
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'NetworkInterface',
            },
          },
        },
      },
      provisioningState: {
        serializedName: 'properties.provisioningState',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      privateLinkServiceConnections: {
        serializedName: 'properties.privateLinkServiceConnections',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'PrivateLinkServiceConnection',
            },
          },
        },
      },
      manualPrivateLinkServiceConnections: {
        serializedName: 'properties.manualPrivateLinkServiceConnections',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'PrivateLinkServiceConnection',
            },
          },
        },
      },
      customDnsConfigs: {
        serializedName: 'properties.customDnsConfigs',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'CustomDnsConfigPropertiesFormat',
            },
          },
        },
      },
      applicationSecurityGroups: {
        serializedName: 'properties.applicationSecurityGroups',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'ApplicationSecurityGroup',
            },
          },
        },
      },
      ipConfigurations: {
        serializedName: 'properties.ipConfigurations',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'PrivateEndpointIPConfiguration',
            },
          },
        },
      },
      customNetworkInterfaceName: {
        serializedName: 'properties.customNetworkInterfaceName',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const PrivateLinkService: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'PrivateLinkService',
    modelProperties: {
      ...Resource.type.modelProperties,
      extendedLocation: {
        serializedName: 'extendedLocation',
        type: {
          name: 'Composite',
          className: 'ExtendedLocation',
        },
      },
      etag: {
        serializedName: 'etag',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      loadBalancerFrontendIpConfigurations: {
        serializedName: 'properties.loadBalancerFrontendIpConfigurations',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'FrontendIPConfiguration',
            },
          },
        },
      },
      ipConfigurations: {
        serializedName: 'properties.ipConfigurations',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'PrivateLinkServiceIpConfiguration',
            },
          },
        },
      },
      networkInterfaces: {
        serializedName: 'properties.networkInterfaces',
        readOnly: true,
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'NetworkInterface',
            },
          },
        },
      },
      provisioningState: {
        serializedName: 'properties.provisioningState',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      privateEndpointConnections: {
        serializedName: 'properties.privateEndpointConnections',
        readOnly: true,
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'PrivateEndpointConnection',
            },
          },
        },
      },
      visibility: {
        serializedName: 'properties.visibility',
        type: {
          name: 'Composite',
          className: 'PrivateLinkServicePropertiesVisibility',
        },
      },
      autoApproval: {
        serializedName: 'properties.autoApproval',
        type: {
          name: 'Composite',
          className: 'PrivateLinkServicePropertiesAutoApproval',
        },
      },
      fqdns: {
        serializedName: 'properties.fqdns',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
      alias: {
        serializedName: 'properties.alias',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      enableProxyProtocol: {
        serializedName: 'properties.enableProxyProtocol',
        type: {
          name: 'Boolean',
        },
      },
    },
  },
};

export const NetworkInterface: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'NetworkInterface',
    modelProperties: {
      ...Resource.type.modelProperties,
      extendedLocation: {
        serializedName: 'extendedLocation',
        type: {
          name: 'Composite',
          className: 'ExtendedLocation',
        },
      },
      etag: {
        serializedName: 'etag',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      virtualMachine: {
        serializedName: 'properties.virtualMachine',
        type: {
          name: 'Composite',
          className: 'SubResource',
        },
      },
      networkSecurityGroup: {
        serializedName: 'properties.networkSecurityGroup',
        type: {
          name: 'Composite',
          className: 'NetworkSecurityGroup',
        },
      },
      privateEndpoint: {
        serializedName: 'properties.privateEndpoint',
        type: {
          name: 'Composite',
          className: 'PrivateEndpoint',
        },
      },
      ipConfigurations: {
        serializedName: 'properties.ipConfigurations',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'NetworkInterfaceIPConfiguration',
            },
          },
        },
      },
      tapConfigurations: {
        serializedName: 'properties.tapConfigurations',
        readOnly: true,
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'NetworkInterfaceTapConfiguration',
            },
          },
        },
      },
      dnsSettings: {
        serializedName: 'properties.dnsSettings',
        type: {
          name: 'Composite',
          className: 'NetworkInterfaceDnsSettings',
        },
      },
      macAddress: {
        serializedName: 'properties.macAddress',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      primary: {
        serializedName: 'properties.primary',
        readOnly: true,
        type: {
          name: 'Boolean',
        },
      },
      vnetEncryptionSupported: {
        serializedName: 'properties.vnetEncryptionSupported',
        readOnly: true,
        type: {
          name: 'Boolean',
        },
      },
      enableAcceleratedNetworking: {
        serializedName: 'properties.enableAcceleratedNetworking',
        type: {
          name: 'Boolean',
        },
      },
      disableTcpStateTracking: {
        serializedName: 'properties.disableTcpStateTracking',
        type: {
          name: 'Boolean',
        },
      },
      enableIPForwarding: {
        serializedName: 'properties.enableIPForwarding',
        type: {
          name: 'Boolean',
        },
      },
      hostedWorkloads: {
        serializedName: 'properties.hostedWorkloads',
        readOnly: true,
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
      dscpConfiguration: {
        serializedName: 'properties.dscpConfiguration',
        type: {
          name: 'Composite',
          className: 'SubResource',
        },
      },
      resourceGuid: {
        serializedName: 'properties.resourceGuid',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      provisioningState: {
        serializedName: 'properties.provisioningState',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      workloadType: {
        serializedName: 'properties.workloadType',
        type: {
          name: 'String',
        },
      },
      nicType: {
        serializedName: 'properties.nicType',
        type: {
          name: 'String',
        },
      },
      privateLinkService: {
        serializedName: 'properties.privateLinkService',
        type: {
          name: 'Composite',
          className: 'PrivateLinkService',
        },
      },
      migrationPhase: {
        serializedName: 'properties.migrationPhase',
        type: {
          name: 'String',
        },
      },
      auxiliaryMode: {
        serializedName: 'properties.auxiliaryMode',
        type: {
          name: 'String',
        },
      },
      auxiliarySku: {
        serializedName: 'properties.auxiliarySku',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const FlowLog: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'FlowLog',
    modelProperties: {
      ...Resource.type.modelProperties,
      etag: {
        serializedName: 'etag',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      targetResourceId: {
        serializedName: 'properties.targetResourceId',
        type: {
          name: 'String',
        },
      },
      targetResourceGuid: {
        serializedName: 'properties.targetResourceGuid',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      storageId: {
        serializedName: 'properties.storageId',
        type: {
          name: 'String',
        },
      },
      enabled: {
        serializedName: 'properties.enabled',
        type: {
          name: 'Boolean',
        },
      },
      retentionPolicy: {
        serializedName: 'properties.retentionPolicy',
        type: {
          name: 'Composite',
          className: 'RetentionPolicyParameters',
        },
      },
      format: {
        serializedName: 'properties.format',
        type: {
          name: 'Composite',
          className: 'FlowLogFormatParameters',
        },
      },
      flowAnalyticsConfiguration: {
        serializedName: 'properties.flowAnalyticsConfiguration',
        type: {
          name: 'Composite',
          className: 'TrafficAnalyticsProperties',
        },
      },
      provisioningState: {
        serializedName: 'properties.provisioningState',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const NetworkSecurityGroup: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'NetworkSecurityGroup',
    modelProperties: {
      ...Resource.type.modelProperties,
      etag: {
        serializedName: 'etag',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      flushConnection: {
        serializedName: 'properties.flushConnection',
        type: {
          name: 'Boolean',
        },
      },
      securityRules: {
        serializedName: 'properties.securityRules',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'SecurityRule',
            },
          },
        },
      },
      defaultSecurityRules: {
        serializedName: 'properties.defaultSecurityRules',
        readOnly: true,
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'SecurityRule',
            },
          },
        },
      },
      networkInterfaces: {
        serializedName: 'properties.networkInterfaces',
        readOnly: true,
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'NetworkInterface',
            },
          },
        },
      },
      subnets: {
        serializedName: 'properties.subnets',
        readOnly: true,
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'Subnet',
            },
          },
        },
      },
      flowLogs: {
        serializedName: 'properties.flowLogs',
        readOnly: true,
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'FlowLog',
            },
          },
        },
      },
      resourceGuid: {
        serializedName: 'properties.resourceGuid',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      provisioningState: {
        serializedName: 'properties.provisioningState',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const RouteTable: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'RouteTable',
    modelProperties: {
      ...Resource.type.modelProperties,
      etag: {
        serializedName: 'etag',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      routes: {
        serializedName: 'properties.routes',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'Route',
            },
          },
        },
      },
      subnets: {
        serializedName: 'properties.subnets',
        readOnly: true,
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'Subnet',
            },
          },
        },
      },
      disableBgpRoutePropagation: {
        serializedName: 'properties.disableBgpRoutePropagation',
        type: {
          name: 'Boolean',
        },
      },
      provisioningState: {
        serializedName: 'properties.provisioningState',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      resourceGuid: {
        serializedName: 'properties.resourceGuid',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const ServiceEndpointPolicy: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ServiceEndpointPolicy',
    modelProperties: {
      ...Resource.type.modelProperties,
      etag: {
        serializedName: 'etag',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      kind: {
        serializedName: 'kind',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      serviceEndpointPolicyDefinitions: {
        serializedName: 'properties.serviceEndpointPolicyDefinitions',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'ServiceEndpointPolicyDefinition',
            },
          },
        },
      },
      subnets: {
        serializedName: 'properties.subnets',
        readOnly: true,
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'Subnet',
            },
          },
        },
      },
      resourceGuid: {
        serializedName: 'properties.resourceGuid',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      provisioningState: {
        serializedName: 'properties.provisioningState',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      serviceAlias: {
        serializedName: 'properties.serviceAlias',
        type: {
          name: 'String',
        },
      },
      contextualServiceEndpointPolicies: {
        serializedName: 'properties.contextualServiceEndpointPolicies',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
    },
  },
};

export const NatGateway: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'NatGateway',
    modelProperties: {
      ...Resource.type.modelProperties,
      sku: {
        serializedName: 'sku',
        type: {
          name: 'Composite',
          className: 'NatGatewaySku',
        },
      },
      zones: {
        serializedName: 'zones',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
      etag: {
        serializedName: 'etag',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      idleTimeoutInMinutes: {
        serializedName: 'properties.idleTimeoutInMinutes',
        type: {
          name: 'Number',
        },
      },
      publicIpAddresses: {
        serializedName: 'properties.publicIpAddresses',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'SubResource',
            },
          },
        },
      },
      publicIpPrefixes: {
        serializedName: 'properties.publicIpPrefixes',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'SubResource',
            },
          },
        },
      },
      subnets: {
        serializedName: 'properties.subnets',
        readOnly: true,
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'SubResource',
            },
          },
        },
      },
      resourceGuid: {
        serializedName: 'properties.resourceGuid',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      provisioningState: {
        serializedName: 'properties.provisioningState',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const PublicIPAddress: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'PublicIPAddress',
    modelProperties: {
      ...Resource.type.modelProperties,
      extendedLocation: {
        serializedName: 'extendedLocation',
        type: {
          name: 'Composite',
          className: 'ExtendedLocation',
        },
      },
      sku: {
        serializedName: 'sku',
        type: {
          name: 'Composite',
          className: 'PublicIPAddressSku',
        },
      },
      etag: {
        serializedName: 'etag',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      zones: {
        serializedName: 'zones',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
      publicIPAllocationMethod: {
        serializedName: 'properties.publicIPAllocationMethod',
        type: {
          name: 'String',
        },
      },
      publicIPAddressVersion: {
        serializedName: 'properties.publicIPAddressVersion',
        type: {
          name: 'String',
        },
      },
      ipConfiguration: {
        serializedName: 'properties.ipConfiguration',
        type: {
          name: 'Composite',
          className: 'IPConfiguration',
        },
      },
      dnsSettings: {
        serializedName: 'properties.dnsSettings',
        type: {
          name: 'Composite',
          className: 'PublicIPAddressDnsSettings',
        },
      },
      ddosSettings: {
        serializedName: 'properties.ddosSettings',
        type: {
          name: 'Composite',
          className: 'DdosSettings',
        },
      },
      ipTags: {
        serializedName: 'properties.ipTags',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'IpTag',
            },
          },
        },
      },
      ipAddress: {
        serializedName: 'properties.ipAddress',
        type: {
          name: 'String',
        },
      },
      publicIPPrefix: {
        serializedName: 'properties.publicIPPrefix',
        type: {
          name: 'Composite',
          className: 'SubResource',
        },
      },
      idleTimeoutInMinutes: {
        serializedName: 'properties.idleTimeoutInMinutes',
        type: {
          name: 'Number',
        },
      },
      resourceGuid: {
        serializedName: 'properties.resourceGuid',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      provisioningState: {
        serializedName: 'properties.provisioningState',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      servicePublicIPAddress: {
        serializedName: 'properties.servicePublicIPAddress',
        type: {
          name: 'Composite',
          className: 'PublicIPAddress',
        },
      },
      natGateway: {
        serializedName: 'properties.natGateway',
        type: {
          name: 'Composite',
          className: 'NatGateway',
        },
      },
      migrationPhase: {
        serializedName: 'properties.migrationPhase',
        type: {
          name: 'String',
        },
      },
      linkedPublicIPAddress: {
        serializedName: 'properties.linkedPublicIPAddress',
        type: {
          name: 'Composite',
          className: 'PublicIPAddress',
        },
      },
      deleteOption: {
        serializedName: 'properties.deleteOption',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const VirtualNetworkTap: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'VirtualNetworkTap',
    modelProperties: {
      ...Resource.type.modelProperties,
      etag: {
        serializedName: 'etag',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      networkInterfaceTapConfigurations: {
        serializedName: 'properties.networkInterfaceTapConfigurations',
        readOnly: true,
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'NetworkInterfaceTapConfiguration',
            },
          },
        },
      },
      resourceGuid: {
        serializedName: 'properties.resourceGuid',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      provisioningState: {
        serializedName: 'properties.provisioningState',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      destinationNetworkInterfaceIPConfiguration: {
        serializedName: 'properties.destinationNetworkInterfaceIPConfiguration',
        type: {
          name: 'Composite',
          className: 'NetworkInterfaceIPConfiguration',
        },
      },
      destinationLoadBalancerFrontEndIPConfiguration: {
        serializedName:
          'properties.destinationLoadBalancerFrontEndIPConfiguration',
        type: {
          name: 'Composite',
          className: 'FrontendIPConfiguration',
        },
      },
      destinationPort: {
        serializedName: 'properties.destinationPort',
        type: {
          name: 'Number',
        },
      },
    },
  },
};

export const ApplicationGateway: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ApplicationGateway',
    modelProperties: {
      ...Resource.type.modelProperties,
      etag: {
        serializedName: 'etag',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      zones: {
        serializedName: 'zones',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
      identity: {
        serializedName: 'identity',
        type: {
          name: 'Composite',
          className: 'ManagedServiceIdentity',
        },
      },
      sku: {
        serializedName: 'properties.sku',
        type: {
          name: 'Composite',
          className: 'ApplicationGatewaySku',
        },
      },
      sslPolicy: {
        serializedName: 'properties.sslPolicy',
        type: {
          name: 'Composite',
          className: 'ApplicationGatewaySslPolicy',
        },
      },
      operationalState: {
        serializedName: 'properties.operationalState',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      gatewayIPConfigurations: {
        serializedName: 'properties.gatewayIPConfigurations',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'ApplicationGatewayIPConfiguration',
            },
          },
        },
      },
      authenticationCertificates: {
        serializedName: 'properties.authenticationCertificates',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'ApplicationGatewayAuthenticationCertificate',
            },
          },
        },
      },
      trustedRootCertificates: {
        serializedName: 'properties.trustedRootCertificates',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'ApplicationGatewayTrustedRootCertificate',
            },
          },
        },
      },
      trustedClientCertificates: {
        serializedName: 'properties.trustedClientCertificates',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'ApplicationGatewayTrustedClientCertificate',
            },
          },
        },
      },
      sslCertificates: {
        serializedName: 'properties.sslCertificates',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'ApplicationGatewaySslCertificate',
            },
          },
        },
      },
      frontendIPConfigurations: {
        serializedName: 'properties.frontendIPConfigurations',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'ApplicationGatewayFrontendIPConfiguration',
            },
          },
        },
      },
      frontendPorts: {
        serializedName: 'properties.frontendPorts',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'ApplicationGatewayFrontendPort',
            },
          },
        },
      },
      probes: {
        serializedName: 'properties.probes',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'ApplicationGatewayProbe',
            },
          },
        },
      },
      backendAddressPools: {
        serializedName: 'properties.backendAddressPools',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'ApplicationGatewayBackendAddressPool',
            },
          },
        },
      },
      backendHttpSettingsCollection: {
        serializedName: 'properties.backendHttpSettingsCollection',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'ApplicationGatewayBackendHttpSettings',
            },
          },
        },
      },
      backendSettingsCollection: {
        serializedName: 'properties.backendSettingsCollection',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'ApplicationGatewayBackendSettings',
            },
          },
        },
      },
      httpListeners: {
        serializedName: 'properties.httpListeners',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'ApplicationGatewayHttpListener',
            },
          },
        },
      },
      listeners: {
        serializedName: 'properties.listeners',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'ApplicationGatewayListener',
            },
          },
        },
      },
      sslProfiles: {
        serializedName: 'properties.sslProfiles',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'ApplicationGatewaySslProfile',
            },
          },
        },
      },
      urlPathMaps: {
        serializedName: 'properties.urlPathMaps',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'ApplicationGatewayUrlPathMap',
            },
          },
        },
      },
      requestRoutingRules: {
        serializedName: 'properties.requestRoutingRules',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'ApplicationGatewayRequestRoutingRule',
            },
          },
        },
      },
      routingRules: {
        serializedName: 'properties.routingRules',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'ApplicationGatewayRoutingRule',
            },
          },
        },
      },
      rewriteRuleSets: {
        serializedName: 'properties.rewriteRuleSets',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'ApplicationGatewayRewriteRuleSet',
            },
          },
        },
      },
      redirectConfigurations: {
        serializedName: 'properties.redirectConfigurations',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'ApplicationGatewayRedirectConfiguration',
            },
          },
        },
      },
      webApplicationFirewallConfiguration: {
        serializedName: 'properties.webApplicationFirewallConfiguration',
        type: {
          name: 'Composite',
          className: 'ApplicationGatewayWebApplicationFirewallConfiguration',
        },
      },
      firewallPolicy: {
        serializedName: 'properties.firewallPolicy',
        type: {
          name: 'Composite',
          className: 'SubResource',
        },
      },
      enableHttp2: {
        serializedName: 'properties.enableHttp2',
        type: {
          name: 'Boolean',
        },
      },
      enableFips: {
        serializedName: 'properties.enableFips',
        type: {
          name: 'Boolean',
        },
      },
      autoscaleConfiguration: {
        serializedName: 'properties.autoscaleConfiguration',
        type: {
          name: 'Composite',
          className: 'ApplicationGatewayAutoscaleConfiguration',
        },
      },
      privateLinkConfigurations: {
        serializedName: 'properties.privateLinkConfigurations',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'ApplicationGatewayPrivateLinkConfiguration',
            },
          },
        },
      },
      privateEndpointConnections: {
        serializedName: 'properties.privateEndpointConnections',
        readOnly: true,
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'ApplicationGatewayPrivateEndpointConnection',
            },
          },
        },
      },
      resourceGuid: {
        serializedName: 'properties.resourceGuid',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      provisioningState: {
        serializedName: 'properties.provisioningState',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      customErrorConfigurations: {
        serializedName: 'properties.customErrorConfigurations',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'ApplicationGatewayCustomError',
            },
          },
        },
      },
      forceFirewallPolicyAssociation: {
        serializedName: 'properties.forceFirewallPolicyAssociation',
        type: {
          name: 'Boolean',
        },
      },
      loadDistributionPolicies: {
        serializedName: 'properties.loadDistributionPolicies',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'ApplicationGatewayLoadDistributionPolicy',
            },
          },
        },
      },
      globalConfiguration: {
        serializedName: 'properties.globalConfiguration',
        type: {
          name: 'Composite',
          className: 'ApplicationGatewayGlobalConfiguration',
        },
      },
      defaultPredefinedSslPolicy: {
        serializedName: 'properties.defaultPredefinedSslPolicy',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const ApplicationGatewayFirewallRuleSet: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ApplicationGatewayFirewallRuleSet',
    modelProperties: {
      ...Resource.type.modelProperties,
      provisioningState: {
        serializedName: 'properties.provisioningState',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      ruleSetType: {
        serializedName: 'properties.ruleSetType',
        type: {
          name: 'String',
        },
      },
      ruleSetVersion: {
        serializedName: 'properties.ruleSetVersion',
        type: {
          name: 'String',
        },
      },
      ruleGroups: {
        serializedName: 'properties.ruleGroups',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'ApplicationGatewayFirewallRuleGroup',
            },
          },
        },
      },
      tiers: {
        serializedName: 'properties.tiers',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
    },
  },
};

export const ApplicationGatewayAvailableSslOptions: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ApplicationGatewayAvailableSslOptions',
    modelProperties: {
      ...Resource.type.modelProperties,
      predefinedPolicies: {
        serializedName: 'properties.predefinedPolicies',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'SubResource',
            },
          },
        },
      },
      defaultPolicy: {
        serializedName: 'properties.defaultPolicy',
        type: {
          name: 'String',
        },
      },
      availableCipherSuites: {
        serializedName: 'properties.availableCipherSuites',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
      availableProtocols: {
        serializedName: 'properties.availableProtocols',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
    },
  },
};

export const AzureFirewall: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'AzureFirewall',
    modelProperties: {
      ...Resource.type.modelProperties,
      zones: {
        serializedName: 'zones',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
      etag: {
        serializedName: 'etag',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      applicationRuleCollections: {
        serializedName: 'properties.applicationRuleCollections',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'AzureFirewallApplicationRuleCollection',
            },
          },
        },
      },
      natRuleCollections: {
        serializedName: 'properties.natRuleCollections',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'AzureFirewallNatRuleCollection',
            },
          },
        },
      },
      networkRuleCollections: {
        serializedName: 'properties.networkRuleCollections',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'AzureFirewallNetworkRuleCollection',
            },
          },
        },
      },
      ipConfigurations: {
        serializedName: 'properties.ipConfigurations',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'AzureFirewallIPConfiguration',
            },
          },
        },
      },
      managementIpConfiguration: {
        serializedName: 'properties.managementIpConfiguration',
        type: {
          name: 'Composite',
          className: 'AzureFirewallIPConfiguration',
        },
      },
      provisioningState: {
        serializedName: 'properties.provisioningState',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      threatIntelMode: {
        serializedName: 'properties.threatIntelMode',
        type: {
          name: 'String',
        },
      },
      virtualHub: {
        serializedName: 'properties.virtualHub',
        type: {
          name: 'Composite',
          className: 'SubResource',
        },
      },
      firewallPolicy: {
        serializedName: 'properties.firewallPolicy',
        type: {
          name: 'Composite',
          className: 'SubResource',
        },
      },
      hubIPAddresses: {
        serializedName: 'properties.hubIPAddresses',
        type: {
          name: 'Composite',
          className: 'HubIPAddresses',
        },
      },
      ipGroups: {
        serializedName: 'properties.ipGroups',
        readOnly: true,
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'AzureFirewallIpGroups',
            },
          },
        },
      },
      sku: {
        serializedName: 'properties.sku',
        type: {
          name: 'Composite',
          className: 'AzureFirewallSku',
        },
      },
      additionalProperties: {
        serializedName: 'properties.additionalProperties',
        type: {
          name: 'Dictionary',
          value: { type: { name: 'String' } },
        },
      },
    },
  },
};

export const AzureFirewallFqdnTag: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'AzureFirewallFqdnTag',
    modelProperties: {
      ...Resource.type.modelProperties,
      etag: {
        serializedName: 'etag',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      provisioningState: {
        serializedName: 'properties.provisioningState',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      fqdnTagName: {
        serializedName: 'properties.fqdnTagName',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const BastionHost: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'BastionHost',
    modelProperties: {
      ...Resource.type.modelProperties,
      etag: {
        serializedName: 'etag',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      sku: {
        serializedName: 'sku',
        type: {
          name: 'Composite',
          className: 'Sku',
        },
      },
      ipConfigurations: {
        serializedName: 'properties.ipConfigurations',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'BastionHostIPConfiguration',
            },
          },
        },
      },
      dnsName: {
        serializedName: 'properties.dnsName',
        type: {
          name: 'String',
        },
      },
      provisioningState: {
        serializedName: 'properties.provisioningState',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      scaleUnits: {
        constraints: {
          InclusiveMaximum: 50,
          InclusiveMinimum: 2,
        },
        serializedName: 'properties.scaleUnits',
        type: {
          name: 'Number',
        },
      },
      disableCopyPaste: {
        defaultValue: false,
        serializedName: 'properties.disableCopyPaste',
        type: {
          name: 'Boolean',
        },
      },
      enableFileCopy: {
        defaultValue: false,
        serializedName: 'properties.enableFileCopy',
        type: {
          name: 'Boolean',
        },
      },
      enableIpConnect: {
        defaultValue: false,
        serializedName: 'properties.enableIpConnect',
        type: {
          name: 'Boolean',
        },
      },
      enableShareableLink: {
        defaultValue: false,
        serializedName: 'properties.enableShareableLink',
        type: {
          name: 'Boolean',
        },
      },
      enableTunneling: {
        defaultValue: false,
        serializedName: 'properties.enableTunneling',
        type: {
          name: 'Boolean',
        },
      },
      enableKerberos: {
        defaultValue: false,
        serializedName: 'properties.enableKerberos',
        type: {
          name: 'Boolean',
        },
      },
    },
  },
};

export const Vm: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'Vm',
    modelProperties: {
      ...Resource.type.modelProperties,
    },
  },
};

export const CustomIpPrefix: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'CustomIpPrefix',
    modelProperties: {
      ...Resource.type.modelProperties,
      extendedLocation: {
        serializedName: 'extendedLocation',
        type: {
          name: 'Composite',
          className: 'ExtendedLocation',
        },
      },
      etag: {
        serializedName: 'etag',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      zones: {
        serializedName: 'zones',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
      asn: {
        serializedName: 'properties.asn',
        type: {
          name: 'String',
        },
      },
      cidr: {
        serializedName: 'properties.cidr',
        type: {
          name: 'String',
        },
      },
      signedMessage: {
        serializedName: 'properties.signedMessage',
        type: {
          name: 'String',
        },
      },
      authorizationMessage: {
        serializedName: 'properties.authorizationMessage',
        type: {
          name: 'String',
        },
      },
      customIpPrefixParent: {
        serializedName: 'properties.customIpPrefixParent',
        type: {
          name: 'Composite',
          className: 'SubResource',
        },
      },
      childCustomIpPrefixes: {
        serializedName: 'properties.childCustomIpPrefixes',
        readOnly: true,
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'SubResource',
            },
          },
        },
      },
      commissionedState: {
        serializedName: 'properties.commissionedState',
        type: {
          name: 'String',
        },
      },
      expressRouteAdvertise: {
        serializedName: 'properties.expressRouteAdvertise',
        type: {
          name: 'Boolean',
        },
      },
      geo: {
        serializedName: 'properties.geo',
        type: {
          name: 'String',
        },
      },
      noInternetAdvertise: {
        serializedName: 'properties.noInternetAdvertise',
        type: {
          name: 'Boolean',
        },
      },
      prefixType: {
        serializedName: 'properties.prefixType',
        type: {
          name: 'String',
        },
      },
      publicIpPrefixes: {
        serializedName: 'properties.publicIpPrefixes',
        readOnly: true,
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'SubResource',
            },
          },
        },
      },
      resourceGuid: {
        serializedName: 'properties.resourceGuid',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      failedReason: {
        serializedName: 'properties.failedReason',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      provisioningState: {
        serializedName: 'properties.provisioningState',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const DdosCustomPolicy: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'DdosCustomPolicy',
    modelProperties: {
      ...Resource.type.modelProperties,
      etag: {
        serializedName: 'etag',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      resourceGuid: {
        serializedName: 'properties.resourceGuid',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      provisioningState: {
        serializedName: 'properties.provisioningState',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const DscpConfiguration: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'DscpConfiguration',
    modelProperties: {
      ...Resource.type.modelProperties,
      etag: {
        serializedName: 'etag',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      markings: {
        serializedName: 'properties.markings',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Number',
            },
          },
        },
      },
      sourceIpRanges: {
        serializedName: 'properties.sourceIpRanges',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'QosIpRange',
            },
          },
        },
      },
      destinationIpRanges: {
        serializedName: 'properties.destinationIpRanges',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'QosIpRange',
            },
          },
        },
      },
      sourcePortRanges: {
        serializedName: 'properties.sourcePortRanges',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'QosPortRange',
            },
          },
        },
      },
      destinationPortRanges: {
        serializedName: 'properties.destinationPortRanges',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'QosPortRange',
            },
          },
        },
      },
      protocol: {
        serializedName: 'properties.protocol',
        type: {
          name: 'String',
        },
      },
      qosDefinitionCollection: {
        serializedName: 'properties.qosDefinitionCollection',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'QosDefinition',
            },
          },
        },
      },
      qosCollectionId: {
        serializedName: 'properties.qosCollectionId',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      associatedNetworkInterfaces: {
        serializedName: 'properties.associatedNetworkInterfaces',
        readOnly: true,
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'NetworkInterface',
            },
          },
        },
      },
      resourceGuid: {
        serializedName: 'properties.resourceGuid',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      provisioningState: {
        serializedName: 'properties.provisioningState',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const ExpressRouteCircuit: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ExpressRouteCircuit',
    modelProperties: {
      ...Resource.type.modelProperties,
      sku: {
        serializedName: 'sku',
        type: {
          name: 'Composite',
          className: 'ExpressRouteCircuitSku',
        },
      },
      etag: {
        serializedName: 'etag',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      allowClassicOperations: {
        serializedName: 'properties.allowClassicOperations',
        type: {
          name: 'Boolean',
        },
      },
      circuitProvisioningState: {
        serializedName: 'properties.circuitProvisioningState',
        type: {
          name: 'String',
        },
      },
      serviceProviderProvisioningState: {
        serializedName: 'properties.serviceProviderProvisioningState',
        type: {
          name: 'String',
        },
      },
      authorizations: {
        serializedName: 'properties.authorizations',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'ExpressRouteCircuitAuthorization',
            },
          },
        },
      },
      peerings: {
        serializedName: 'properties.peerings',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'ExpressRouteCircuitPeering',
            },
          },
        },
      },
      serviceKey: {
        serializedName: 'properties.serviceKey',
        type: {
          name: 'String',
        },
      },
      serviceProviderNotes: {
        serializedName: 'properties.serviceProviderNotes',
        type: {
          name: 'String',
        },
      },
      serviceProviderProperties: {
        serializedName: 'properties.serviceProviderProperties',
        type: {
          name: 'Composite',
          className: 'ExpressRouteCircuitServiceProviderProperties',
        },
      },
      expressRoutePort: {
        serializedName: 'properties.expressRoutePort',
        type: {
          name: 'Composite',
          className: 'SubResource',
        },
      },
      bandwidthInGbps: {
        serializedName: 'properties.bandwidthInGbps',
        type: {
          name: 'Number',
        },
      },
      stag: {
        serializedName: 'properties.stag',
        readOnly: true,
        type: {
          name: 'Number',
        },
      },
      provisioningState: {
        serializedName: 'properties.provisioningState',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      gatewayManagerEtag: {
        serializedName: 'properties.gatewayManagerEtag',
        type: {
          name: 'String',
        },
      },
      globalReachEnabled: {
        serializedName: 'properties.globalReachEnabled',
        type: {
          name: 'Boolean',
        },
      },
      authorizationKey: {
        serializedName: 'properties.authorizationKey',
        type: {
          name: 'String',
        },
      },
      authorizationStatus: {
        serializedName: 'properties.authorizationStatus',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const ExpressRouteServiceProvider: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ExpressRouteServiceProvider',
    modelProperties: {
      ...Resource.type.modelProperties,
      peeringLocations: {
        serializedName: 'properties.peeringLocations',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
      bandwidthsOffered: {
        serializedName: 'properties.bandwidthsOffered',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'ExpressRouteServiceProviderBandwidthsOffered',
            },
          },
        },
      },
      provisioningState: {
        serializedName: 'properties.provisioningState',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const ExpressRouteCrossConnection: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ExpressRouteCrossConnection',
    modelProperties: {
      ...Resource.type.modelProperties,
      etag: {
        serializedName: 'etag',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      primaryAzurePort: {
        serializedName: 'properties.primaryAzurePort',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      secondaryAzurePort: {
        serializedName: 'properties.secondaryAzurePort',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      sTag: {
        serializedName: 'properties.sTag',
        readOnly: true,
        type: {
          name: 'Number',
        },
      },
      peeringLocation: {
        serializedName: 'properties.peeringLocation',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      bandwidthInMbps: {
        serializedName: 'properties.bandwidthInMbps',
        readOnly: true,
        type: {
          name: 'Number',
        },
      },
      expressRouteCircuit: {
        serializedName: 'properties.expressRouteCircuit',
        type: {
          name: 'Composite',
          className: 'ExpressRouteCircuitReference',
        },
      },
      serviceProviderProvisioningState: {
        serializedName: 'properties.serviceProviderProvisioningState',
        type: {
          name: 'String',
        },
      },
      serviceProviderNotes: {
        serializedName: 'properties.serviceProviderNotes',
        type: {
          name: 'String',
        },
      },
      provisioningState: {
        serializedName: 'properties.provisioningState',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      peerings: {
        serializedName: 'properties.peerings',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'ExpressRouteCrossConnectionPeering',
            },
          },
        },
      },
    },
  },
};

export const ExpressRoutePortsLocation: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ExpressRoutePortsLocation',
    modelProperties: {
      ...Resource.type.modelProperties,
      address: {
        serializedName: 'properties.address',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      contact: {
        serializedName: 'properties.contact',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      availableBandwidths: {
        serializedName: 'properties.availableBandwidths',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'ExpressRoutePortsLocationBandwidths',
            },
          },
        },
      },
      provisioningState: {
        serializedName: 'properties.provisioningState',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const ExpressRoutePort: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ExpressRoutePort',
    modelProperties: {
      ...Resource.type.modelProperties,
      etag: {
        serializedName: 'etag',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      identity: {
        serializedName: 'identity',
        type: {
          name: 'Composite',
          className: 'ManagedServiceIdentity',
        },
      },
      peeringLocation: {
        serializedName: 'properties.peeringLocation',
        type: {
          name: 'String',
        },
      },
      bandwidthInGbps: {
        serializedName: 'properties.bandwidthInGbps',
        type: {
          name: 'Number',
        },
      },
      provisionedBandwidthInGbps: {
        serializedName: 'properties.provisionedBandwidthInGbps',
        readOnly: true,
        type: {
          name: 'Number',
        },
      },
      mtu: {
        serializedName: 'properties.mtu',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      encapsulation: {
        serializedName: 'properties.encapsulation',
        type: {
          name: 'String',
        },
      },
      etherType: {
        serializedName: 'properties.etherType',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      allocationDate: {
        serializedName: 'properties.allocationDate',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      links: {
        serializedName: 'properties.links',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'ExpressRouteLink',
            },
          },
        },
      },
      circuits: {
        serializedName: 'properties.circuits',
        readOnly: true,
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'SubResource',
            },
          },
        },
      },
      provisioningState: {
        serializedName: 'properties.provisioningState',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      resourceGuid: {
        serializedName: 'properties.resourceGuid',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      billingType: {
        serializedName: 'properties.billingType',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const ExpressRouteProviderPort: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ExpressRouteProviderPort',
    modelProperties: {
      ...Resource.type.modelProperties,
      etag: {
        serializedName: 'etag',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      portPairDescriptor: {
        serializedName: 'properties.portPairDescriptor',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      primaryAzurePort: {
        serializedName: 'properties.primaryAzurePort',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      secondaryAzurePort: {
        serializedName: 'properties.secondaryAzurePort',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      peeringLocation: {
        serializedName: 'properties.peeringLocation',
        type: {
          name: 'String',
        },
      },
      overprovisionFactor: {
        serializedName: 'properties.overprovisionFactor',
        type: {
          name: 'Number',
        },
      },
      portBandwidthInMbps: {
        serializedName: 'properties.portBandwidthInMbps',
        type: {
          name: 'Number',
        },
      },
      usedBandwidthInMbps: {
        serializedName: 'properties.usedBandwidthInMbps',
        type: {
          name: 'Number',
        },
      },
      remainingBandwidthInMbps: {
        serializedName: 'properties.remainingBandwidthInMbps',
        type: {
          name: 'Number',
        },
      },
    },
  },
};

export const FirewallPolicy: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'FirewallPolicy',
    modelProperties: {
      ...Resource.type.modelProperties,
      etag: {
        serializedName: 'etag',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      identity: {
        serializedName: 'identity',
        type: {
          name: 'Composite',
          className: 'ManagedServiceIdentity',
        },
      },
      ruleCollectionGroups: {
        serializedName: 'properties.ruleCollectionGroups',
        readOnly: true,
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'SubResource',
            },
          },
        },
      },
      provisioningState: {
        serializedName: 'properties.provisioningState',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      basePolicy: {
        serializedName: 'properties.basePolicy',
        type: {
          name: 'Composite',
          className: 'SubResource',
        },
      },
      firewalls: {
        serializedName: 'properties.firewalls',
        readOnly: true,
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'SubResource',
            },
          },
        },
      },
      childPolicies: {
        serializedName: 'properties.childPolicies',
        readOnly: true,
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'SubResource',
            },
          },
        },
      },
      threatIntelMode: {
        serializedName: 'properties.threatIntelMode',
        type: {
          name: 'String',
        },
      },
      threatIntelWhitelist: {
        serializedName: 'properties.threatIntelWhitelist',
        type: {
          name: 'Composite',
          className: 'FirewallPolicyThreatIntelWhitelist',
        },
      },
      insights: {
        serializedName: 'properties.insights',
        type: {
          name: 'Composite',
          className: 'FirewallPolicyInsights',
        },
      },
      snat: {
        serializedName: 'properties.snat',
        type: {
          name: 'Composite',
          className: 'FirewallPolicySnat',
        },
      },
      sql: {
        serializedName: 'properties.sql',
        type: {
          name: 'Composite',
          className: 'FirewallPolicySQL',
        },
      },
      dnsSettings: {
        serializedName: 'properties.dnsSettings',
        type: {
          name: 'Composite',
          className: 'DnsSettings',
        },
      },
      explicitProxy: {
        serializedName: 'properties.explicitProxy',
        type: {
          name: 'Composite',
          className: 'ExplicitProxy',
        },
      },
      intrusionDetection: {
        serializedName: 'properties.intrusionDetection',
        type: {
          name: 'Composite',
          className: 'FirewallPolicyIntrusionDetection',
        },
      },
      transportSecurity: {
        serializedName: 'properties.transportSecurity',
        type: {
          name: 'Composite',
          className: 'FirewallPolicyTransportSecurity',
        },
      },
      sku: {
        serializedName: 'properties.sku',
        type: {
          name: 'Composite',
          className: 'FirewallPolicySku',
        },
      },
    },
  },
};

export const IpAllocation: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'IpAllocation',
    modelProperties: {
      ...Resource.type.modelProperties,
      etag: {
        serializedName: 'etag',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      subnet: {
        serializedName: 'properties.subnet',
        type: {
          name: 'Composite',
          className: 'SubResource',
        },
      },
      virtualNetwork: {
        serializedName: 'properties.virtualNetwork',
        type: {
          name: 'Composite',
          className: 'SubResource',
        },
      },
      typePropertiesType: {
        serializedName: 'properties.type',
        type: {
          name: 'String',
        },
      },
      prefix: {
        serializedName: 'properties.prefix',
        type: {
          name: 'String',
        },
      },
      prefixLength: {
        defaultValue: 0,
        serializedName: 'properties.prefixLength',
        nullable: true,
        type: {
          name: 'Number',
        },
      },
      prefixType: {
        serializedName: 'properties.prefixType',
        type: {
          name: 'String',
        },
      },
      ipamAllocationId: {
        serializedName: 'properties.ipamAllocationId',
        type: {
          name: 'String',
        },
      },
      allocationTags: {
        serializedName: 'properties.allocationTags',
        type: {
          name: 'Dictionary',
          value: { type: { name: 'String' } },
        },
      },
    },
  },
};

export const IpGroup: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'IpGroup',
    modelProperties: {
      ...Resource.type.modelProperties,
      etag: {
        serializedName: 'etag',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      provisioningState: {
        serializedName: 'properties.provisioningState',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      ipAddresses: {
        serializedName: 'properties.ipAddresses',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
      firewalls: {
        serializedName: 'properties.firewalls',
        readOnly: true,
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'SubResource',
            },
          },
        },
      },
      firewallPolicies: {
        serializedName: 'properties.firewallPolicies',
        readOnly: true,
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'SubResource',
            },
          },
        },
      },
    },
  },
};

export const LoadBalancer: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'LoadBalancer',
    modelProperties: {
      ...Resource.type.modelProperties,
      extendedLocation: {
        serializedName: 'extendedLocation',
        type: {
          name: 'Composite',
          className: 'ExtendedLocation',
        },
      },
      sku: {
        serializedName: 'sku',
        type: {
          name: 'Composite',
          className: 'LoadBalancerSku',
        },
      },
      etag: {
        serializedName: 'etag',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      frontendIPConfigurations: {
        serializedName: 'properties.frontendIPConfigurations',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'FrontendIPConfiguration',
            },
          },
        },
      },
      backendAddressPools: {
        serializedName: 'properties.backendAddressPools',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'BackendAddressPool',
            },
          },
        },
      },
      loadBalancingRules: {
        serializedName: 'properties.loadBalancingRules',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'LoadBalancingRule',
            },
          },
        },
      },
      probes: {
        serializedName: 'properties.probes',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'Probe',
            },
          },
        },
      },
      inboundNatRules: {
        serializedName: 'properties.inboundNatRules',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'InboundNatRule',
            },
          },
        },
      },
      inboundNatPools: {
        serializedName: 'properties.inboundNatPools',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'InboundNatPool',
            },
          },
        },
      },
      outboundRules: {
        serializedName: 'properties.outboundRules',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'OutboundRule',
            },
          },
        },
      },
      resourceGuid: {
        serializedName: 'properties.resourceGuid',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      provisioningState: {
        serializedName: 'properties.provisioningState',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const NetworkManager: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'NetworkManager',
    modelProperties: {
      ...Resource.type.modelProperties,
      etag: {
        serializedName: 'etag',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      systemData: {
        serializedName: 'systemData',
        type: {
          name: 'Composite',
          className: 'SystemData',
        },
      },
      description: {
        serializedName: 'properties.description',
        type: {
          name: 'String',
        },
      },
      networkManagerScopes: {
        serializedName: 'properties.networkManagerScopes',
        type: {
          name: 'Composite',
          className: 'NetworkManagerPropertiesNetworkManagerScopes',
        },
      },
      networkManagerScopeAccesses: {
        serializedName: 'properties.networkManagerScopeAccesses',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
      provisioningState: {
        serializedName: 'properties.provisioningState',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      resourceGuid: {
        serializedName: 'properties.resourceGuid',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const NetworkProfile: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'NetworkProfile',
    modelProperties: {
      ...Resource.type.modelProperties,
      etag: {
        serializedName: 'etag',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      containerNetworkInterfaces: {
        serializedName: 'properties.containerNetworkInterfaces',
        readOnly: true,
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'ContainerNetworkInterface',
            },
          },
        },
      },
      containerNetworkInterfaceConfigurations: {
        serializedName: 'properties.containerNetworkInterfaceConfigurations',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'ContainerNetworkInterfaceConfiguration',
            },
          },
        },
      },
      resourceGuid: {
        serializedName: 'properties.resourceGuid',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      provisioningState: {
        serializedName: 'properties.provisioningState',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const NetworkVirtualAppliance: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'NetworkVirtualAppliance',
    modelProperties: {
      ...Resource.type.modelProperties,
      identity: {
        serializedName: 'identity',
        type: {
          name: 'Composite',
          className: 'ManagedServiceIdentity',
        },
      },
      etag: {
        serializedName: 'etag',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      nvaSku: {
        serializedName: 'properties.nvaSku',
        type: {
          name: 'Composite',
          className: 'VirtualApplianceSkuProperties',
        },
      },
      addressPrefix: {
        serializedName: 'properties.addressPrefix',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      bootStrapConfigurationBlobs: {
        serializedName: 'properties.bootStrapConfigurationBlobs',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
      virtualHub: {
        serializedName: 'properties.virtualHub',
        type: {
          name: 'Composite',
          className: 'SubResource',
        },
      },
      cloudInitConfigurationBlobs: {
        serializedName: 'properties.cloudInitConfigurationBlobs',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
      cloudInitConfiguration: {
        serializedName: 'properties.cloudInitConfiguration',
        type: {
          name: 'String',
        },
      },
      virtualApplianceAsn: {
        constraints: {
          InclusiveMaximum: 4294967295,
          InclusiveMinimum: 0,
        },
        serializedName: 'properties.virtualApplianceAsn',
        type: {
          name: 'Number',
        },
      },
      sshPublicKey: {
        serializedName: 'properties.sshPublicKey',
        type: {
          name: 'String',
        },
      },
      virtualApplianceNics: {
        serializedName: 'properties.virtualApplianceNics',
        readOnly: true,
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'VirtualApplianceNicProperties',
            },
          },
        },
      },
      additionalNics: {
        serializedName: 'properties.additionalNics',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'VirtualApplianceAdditionalNicProperties',
            },
          },
        },
      },
      virtualApplianceSites: {
        serializedName: 'properties.virtualApplianceSites',
        readOnly: true,
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'SubResource',
            },
          },
        },
      },
      virtualApplianceConnections: {
        serializedName: 'properties.virtualApplianceConnections',
        readOnly: true,
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'SubResource',
            },
          },
        },
      },
      inboundSecurityRules: {
        serializedName: 'properties.inboundSecurityRules',
        readOnly: true,
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'SubResource',
            },
          },
        },
      },
      provisioningState: {
        serializedName: 'properties.provisioningState',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      deploymentType: {
        serializedName: 'properties.deploymentType',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      delegation: {
        serializedName: 'properties.delegation',
        type: {
          name: 'Composite',
          className: 'DelegationProperties',
        },
      },
      partnerManagedResource: {
        serializedName: 'properties.partnerManagedResource',
        type: {
          name: 'Composite',
          className: 'PartnerManagedResourceProperties',
        },
      },
    },
  },
};

export const NetworkVirtualApplianceSku: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'NetworkVirtualApplianceSku',
    modelProperties: {
      ...Resource.type.modelProperties,
      etag: {
        serializedName: 'etag',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      vendor: {
        serializedName: 'properties.vendor',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      availableVersions: {
        serializedName: 'properties.availableVersions',
        readOnly: true,
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
      availableScaleUnits: {
        serializedName: 'properties.availableScaleUnits',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'NetworkVirtualApplianceSkuInstances',
            },
          },
        },
      },
    },
  },
};

export const NetworkWatcher: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'NetworkWatcher',
    modelProperties: {
      ...Resource.type.modelProperties,
      etag: {
        serializedName: 'etag',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      provisioningState: {
        serializedName: 'properties.provisioningState',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const PublicIPPrefix: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'PublicIPPrefix',
    modelProperties: {
      ...Resource.type.modelProperties,
      extendedLocation: {
        serializedName: 'extendedLocation',
        type: {
          name: 'Composite',
          className: 'ExtendedLocation',
        },
      },
      sku: {
        serializedName: 'sku',
        type: {
          name: 'Composite',
          className: 'PublicIPPrefixSku',
        },
      },
      etag: {
        serializedName: 'etag',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      zones: {
        serializedName: 'zones',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
      publicIPAddressVersion: {
        serializedName: 'properties.publicIPAddressVersion',
        type: {
          name: 'String',
        },
      },
      ipTags: {
        serializedName: 'properties.ipTags',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'IpTag',
            },
          },
        },
      },
      prefixLength: {
        serializedName: 'properties.prefixLength',
        type: {
          name: 'Number',
        },
      },
      ipPrefix: {
        serializedName: 'properties.ipPrefix',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      publicIPAddresses: {
        serializedName: 'properties.publicIPAddresses',
        readOnly: true,
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'ReferencedPublicIpAddress',
            },
          },
        },
      },
      loadBalancerFrontendIpConfiguration: {
        serializedName: 'properties.loadBalancerFrontendIpConfiguration',
        type: {
          name: 'Composite',
          className: 'SubResource',
        },
      },
      customIPPrefix: {
        serializedName: 'properties.customIPPrefix',
        type: {
          name: 'Composite',
          className: 'SubResource',
        },
      },
      resourceGuid: {
        serializedName: 'properties.resourceGuid',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      provisioningState: {
        serializedName: 'properties.provisioningState',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      natGateway: {
        serializedName: 'properties.natGateway',
        type: {
          name: 'Composite',
          className: 'NatGateway',
        },
      },
    },
  },
};

export const RouteFilter: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'RouteFilter',
    modelProperties: {
      ...Resource.type.modelProperties,
      etag: {
        serializedName: 'etag',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      rules: {
        serializedName: 'properties.rules',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'RouteFilterRule',
            },
          },
        },
      },
      peerings: {
        serializedName: 'properties.peerings',
        readOnly: true,
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'ExpressRouteCircuitPeering',
            },
          },
        },
      },
      ipv6Peerings: {
        serializedName: 'properties.ipv6Peerings',
        readOnly: true,
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'ExpressRouteCircuitPeering',
            },
          },
        },
      },
      provisioningState: {
        serializedName: 'properties.provisioningState',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const SecurityPartnerProvider: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'SecurityPartnerProvider',
    modelProperties: {
      ...Resource.type.modelProperties,
      etag: {
        serializedName: 'etag',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      provisioningState: {
        serializedName: 'properties.provisioningState',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      securityProviderName: {
        serializedName: 'properties.securityProviderName',
        type: {
          name: 'String',
        },
      },
      connectionStatus: {
        serializedName: 'properties.connectionStatus',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      virtualHub: {
        serializedName: 'properties.virtualHub',
        type: {
          name: 'Composite',
          className: 'SubResource',
        },
      },
    },
  },
};

export const BgpServiceCommunity: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'BgpServiceCommunity',
    modelProperties: {
      ...Resource.type.modelProperties,
      serviceName: {
        serializedName: 'properties.serviceName',
        type: {
          name: 'String',
        },
      },
      bgpCommunities: {
        serializedName: 'properties.bgpCommunities',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'BGPCommunity',
            },
          },
        },
      },
    },
  },
};

export const VirtualNetwork: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'VirtualNetwork',
    modelProperties: {
      ...Resource.type.modelProperties,
      extendedLocation: {
        serializedName: 'extendedLocation',
        type: {
          name: 'Composite',
          className: 'ExtendedLocation',
        },
      },
      etag: {
        serializedName: 'etag',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      addressSpace: {
        serializedName: 'properties.addressSpace',
        type: {
          name: 'Composite',
          className: 'AddressSpace',
        },
      },
      dhcpOptions: {
        serializedName: 'properties.dhcpOptions',
        type: {
          name: 'Composite',
          className: 'DhcpOptions',
        },
      },
      flowTimeoutInMinutes: {
        serializedName: 'properties.flowTimeoutInMinutes',
        type: {
          name: 'Number',
        },
      },
      subnets: {
        serializedName: 'properties.subnets',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'Subnet',
            },
          },
        },
      },
      virtualNetworkPeerings: {
        serializedName: 'properties.virtualNetworkPeerings',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'VirtualNetworkPeering',
            },
          },
        },
      },
      resourceGuid: {
        serializedName: 'properties.resourceGuid',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      provisioningState: {
        serializedName: 'properties.provisioningState',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      enableDdosProtection: {
        defaultValue: false,
        serializedName: 'properties.enableDdosProtection',
        type: {
          name: 'Boolean',
        },
      },
      enableVmProtection: {
        defaultValue: false,
        serializedName: 'properties.enableVmProtection',
        type: {
          name: 'Boolean',
        },
      },
      ddosProtectionPlan: {
        serializedName: 'properties.ddosProtectionPlan',
        type: {
          name: 'Composite',
          className: 'SubResource',
        },
      },
      bgpCommunities: {
        serializedName: 'properties.bgpCommunities',
        type: {
          name: 'Composite',
          className: 'VirtualNetworkBgpCommunities',
        },
      },
      encryption: {
        serializedName: 'properties.encryption',
        type: {
          name: 'Composite',
          className: 'VirtualNetworkEncryption',
        },
      },
      ipAllocations: {
        serializedName: 'properties.ipAllocations',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'SubResource',
            },
          },
        },
      },
      flowLogs: {
        serializedName: 'properties.flowLogs',
        readOnly: true,
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'FlowLog',
            },
          },
        },
      },
    },
  },
};

export const NetworkIntentPolicy: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'NetworkIntentPolicy',
    modelProperties: {
      ...Resource.type.modelProperties,
      etag: {
        serializedName: 'etag',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const VirtualNetworkGateway: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'VirtualNetworkGateway',
    modelProperties: {
      ...Resource.type.modelProperties,
      extendedLocation: {
        serializedName: 'extendedLocation',
        type: {
          name: 'Composite',
          className: 'ExtendedLocation',
        },
      },
      etag: {
        serializedName: 'etag',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      ipConfigurations: {
        serializedName: 'properties.ipConfigurations',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'VirtualNetworkGatewayIPConfiguration',
            },
          },
        },
      },
      gatewayType: {
        serializedName: 'properties.gatewayType',
        type: {
          name: 'String',
        },
      },
      vpnType: {
        serializedName: 'properties.vpnType',
        type: {
          name: 'String',
        },
      },
      vpnGatewayGeneration: {
        serializedName: 'properties.vpnGatewayGeneration',
        type: {
          name: 'String',
        },
      },
      enableBgp: {
        serializedName: 'properties.enableBgp',
        type: {
          name: 'Boolean',
        },
      },
      enablePrivateIpAddress: {
        serializedName: 'properties.enablePrivateIpAddress',
        type: {
          name: 'Boolean',
        },
      },
      active: {
        serializedName: 'properties.activeActive',
        type: {
          name: 'Boolean',
        },
      },
      disableIPSecReplayProtection: {
        serializedName: 'properties.disableIPSecReplayProtection',
        type: {
          name: 'Boolean',
        },
      },
      gatewayDefaultSite: {
        serializedName: 'properties.gatewayDefaultSite',
        type: {
          name: 'Composite',
          className: 'SubResource',
        },
      },
      sku: {
        serializedName: 'properties.sku',
        type: {
          name: 'Composite',
          className: 'VirtualNetworkGatewaySku',
        },
      },
      vpnClientConfiguration: {
        serializedName: 'properties.vpnClientConfiguration',
        type: {
          name: 'Composite',
          className: 'VpnClientConfiguration',
        },
      },
      virtualNetworkGatewayPolicyGroups: {
        serializedName: 'properties.virtualNetworkGatewayPolicyGroups',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'VirtualNetworkGatewayPolicyGroup',
            },
          },
        },
      },
      bgpSettings: {
        serializedName: 'properties.bgpSettings',
        type: {
          name: 'Composite',
          className: 'BgpSettings',
        },
      },
      customRoutes: {
        serializedName: 'properties.customRoutes',
        type: {
          name: 'Composite',
          className: 'AddressSpace',
        },
      },
      resourceGuid: {
        serializedName: 'properties.resourceGuid',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      provisioningState: {
        serializedName: 'properties.provisioningState',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      enableDnsForwarding: {
        serializedName: 'properties.enableDnsForwarding',
        type: {
          name: 'Boolean',
        },
      },
      inboundDnsForwardingEndpoint: {
        serializedName: 'properties.inboundDnsForwardingEndpoint',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      vNetExtendedLocationResourceId: {
        serializedName: 'properties.vNetExtendedLocationResourceId',
        type: {
          name: 'String',
        },
      },
      natRules: {
        serializedName: 'properties.natRules',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'VirtualNetworkGatewayNatRule',
            },
          },
        },
      },
      enableBgpRouteTranslationForNat: {
        serializedName: 'properties.enableBgpRouteTranslationForNat',
        type: {
          name: 'Boolean',
        },
      },
      allowVirtualWanTraffic: {
        serializedName: 'properties.allowVirtualWanTraffic',
        type: {
          name: 'Boolean',
        },
      },
      allowRemoteVnetTraffic: {
        serializedName: 'properties.allowRemoteVnetTraffic',
        type: {
          name: 'Boolean',
        },
      },
      adminState: {
        serializedName: 'properties.adminState',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const VirtualNetworkGatewayConnectionListEntity: msRest.CompositeMapper =
  {
    type: {
      name: 'Composite',
      className: 'VirtualNetworkGatewayConnectionListEntity',
      modelProperties: {
        ...Resource.type.modelProperties,
        etag: {
          serializedName: 'etag',
          readOnly: true,
          type: {
            name: 'String',
          },
        },
        authorizationKey: {
          serializedName: 'properties.authorizationKey',
          type: {
            name: 'String',
          },
        },
        virtualNetworkGateway1: {
          serializedName: 'properties.virtualNetworkGateway1',
          type: {
            name: 'Composite',
            className: 'VirtualNetworkConnectionGatewayReference',
          },
        },
        virtualNetworkGateway2: {
          serializedName: 'properties.virtualNetworkGateway2',
          type: {
            name: 'Composite',
            className: 'VirtualNetworkConnectionGatewayReference',
          },
        },
        localNetworkGateway2: {
          serializedName: 'properties.localNetworkGateway2',
          type: {
            name: 'Composite',
            className: 'VirtualNetworkConnectionGatewayReference',
          },
        },
        connectionType: {
          serializedName: 'properties.connectionType',
          required: true,
          type: {
            name: 'String',
          },
        },
        connectionProtocol: {
          serializedName: 'properties.connectionProtocol',
          type: {
            name: 'String',
          },
        },
        routingWeight: {
          serializedName: 'properties.routingWeight',
          type: {
            name: 'Number',
          },
        },
        connectionMode: {
          serializedName: 'properties.connectionMode',
          type: {
            name: 'String',
          },
        },
        sharedKey: {
          serializedName: 'properties.sharedKey',
          type: {
            name: 'String',
          },
        },
        connectionStatus: {
          serializedName: 'properties.connectionStatus',
          readOnly: true,
          type: {
            name: 'String',
          },
        },
        tunnelConnectionStatus: {
          serializedName: 'properties.tunnelConnectionStatus',
          readOnly: true,
          type: {
            name: 'Sequence',
            element: {
              type: {
                name: 'Composite',
                className: 'TunnelConnectionHealth',
              },
            },
          },
        },
        egressBytesTransferred: {
          serializedName: 'properties.egressBytesTransferred',
          readOnly: true,
          type: {
            name: 'Number',
          },
        },
        ingressBytesTransferred: {
          serializedName: 'properties.ingressBytesTransferred',
          readOnly: true,
          type: {
            name: 'Number',
          },
        },
        peer: {
          serializedName: 'properties.peer',
          type: {
            name: 'Composite',
            className: 'SubResource',
          },
        },
        enableBgp: {
          serializedName: 'properties.enableBgp',
          type: {
            name: 'Boolean',
          },
        },
        gatewayCustomBgpIpAddresses: {
          serializedName: 'properties.gatewayCustomBgpIpAddresses',
          type: {
            name: 'Sequence',
            element: {
              type: {
                name: 'Composite',
                className: 'GatewayCustomBgpIpAddressIpConfiguration',
              },
            },
          },
        },
        usePolicyBasedTrafficSelectors: {
          serializedName: 'properties.usePolicyBasedTrafficSelectors',
          type: {
            name: 'Boolean',
          },
        },
        ipsecPolicies: {
          serializedName: 'properties.ipsecPolicies',
          type: {
            name: 'Sequence',
            element: {
              type: {
                name: 'Composite',
                className: 'IpsecPolicy',
              },
            },
          },
        },
        trafficSelectorPolicies: {
          serializedName: 'properties.trafficSelectorPolicies',
          type: {
            name: 'Sequence',
            element: {
              type: {
                name: 'Composite',
                className: 'TrafficSelectorPolicy',
              },
            },
          },
        },
        resourceGuid: {
          serializedName: 'properties.resourceGuid',
          readOnly: true,
          type: {
            name: 'String',
          },
        },
        provisioningState: {
          serializedName: 'properties.provisioningState',
          readOnly: true,
          type: {
            name: 'String',
          },
        },
        expressRouteGatewayBypass: {
          serializedName: 'properties.expressRouteGatewayBypass',
          type: {
            name: 'Boolean',
          },
        },
        enablePrivateLinkFastPath: {
          serializedName: 'properties.enablePrivateLinkFastPath',
          type: {
            name: 'Boolean',
          },
        },
      },
    },
  };

export const LocalNetworkGateway: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'LocalNetworkGateway',
    modelProperties: {
      ...Resource.type.modelProperties,
      etag: {
        serializedName: 'etag',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      localNetworkAddressSpace: {
        serializedName: 'properties.localNetworkAddressSpace',
        type: {
          name: 'Composite',
          className: 'AddressSpace',
        },
      },
      gatewayIpAddress: {
        serializedName: 'properties.gatewayIpAddress',
        type: {
          name: 'String',
        },
      },
      fqdn: {
        serializedName: 'properties.fqdn',
        type: {
          name: 'String',
        },
      },
      bgpSettings: {
        serializedName: 'properties.bgpSettings',
        type: {
          name: 'Composite',
          className: 'BgpSettings',
        },
      },
      resourceGuid: {
        serializedName: 'properties.resourceGuid',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      provisioningState: {
        serializedName: 'properties.provisioningState',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const VirtualNetworkGatewayConnection: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'VirtualNetworkGatewayConnection',
    modelProperties: {
      ...Resource.type.modelProperties,
      etag: {
        serializedName: 'etag',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      authorizationKey: {
        serializedName: 'properties.authorizationKey',
        type: {
          name: 'String',
        },
      },
      virtualNetworkGateway1: {
        serializedName: 'properties.virtualNetworkGateway1',
        type: {
          name: 'Composite',
          className: 'VirtualNetworkGateway',
        },
      },
      virtualNetworkGateway2: {
        serializedName: 'properties.virtualNetworkGateway2',
        type: {
          name: 'Composite',
          className: 'VirtualNetworkGateway',
        },
      },
      localNetworkGateway2: {
        serializedName: 'properties.localNetworkGateway2',
        type: {
          name: 'Composite',
          className: 'LocalNetworkGateway',
        },
      },
      ingressNatRules: {
        serializedName: 'properties.ingressNatRules',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'SubResource',
            },
          },
        },
      },
      egressNatRules: {
        serializedName: 'properties.egressNatRules',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'SubResource',
            },
          },
        },
      },
      connectionType: {
        serializedName: 'properties.connectionType',
        required: true,
        type: {
          name: 'String',
        },
      },
      connectionProtocol: {
        serializedName: 'properties.connectionProtocol',
        type: {
          name: 'String',
        },
      },
      routingWeight: {
        serializedName: 'properties.routingWeight',
        type: {
          name: 'Number',
        },
      },
      dpdTimeoutSeconds: {
        serializedName: 'properties.dpdTimeoutSeconds',
        type: {
          name: 'Number',
        },
      },
      connectionMode: {
        serializedName: 'properties.connectionMode',
        type: {
          name: 'String',
        },
      },
      sharedKey: {
        serializedName: 'properties.sharedKey',
        type: {
          name: 'String',
        },
      },
      connectionStatus: {
        serializedName: 'properties.connectionStatus',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      tunnelConnectionStatus: {
        serializedName: 'properties.tunnelConnectionStatus',
        readOnly: true,
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'TunnelConnectionHealth',
            },
          },
        },
      },
      egressBytesTransferred: {
        serializedName: 'properties.egressBytesTransferred',
        readOnly: true,
        type: {
          name: 'Number',
        },
      },
      ingressBytesTransferred: {
        serializedName: 'properties.ingressBytesTransferred',
        readOnly: true,
        type: {
          name: 'Number',
        },
      },
      peer: {
        serializedName: 'properties.peer',
        type: {
          name: 'Composite',
          className: 'SubResource',
        },
      },
      enableBgp: {
        serializedName: 'properties.enableBgp',
        type: {
          name: 'Boolean',
        },
      },
      gatewayCustomBgpIpAddresses: {
        serializedName: 'properties.gatewayCustomBgpIpAddresses',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'GatewayCustomBgpIpAddressIpConfiguration',
            },
          },
        },
      },
      useLocalAzureIpAddress: {
        serializedName: 'properties.useLocalAzureIpAddress',
        type: {
          name: 'Boolean',
        },
      },
      usePolicyBasedTrafficSelectors: {
        serializedName: 'properties.usePolicyBasedTrafficSelectors',
        type: {
          name: 'Boolean',
        },
      },
      ipsecPolicies: {
        serializedName: 'properties.ipsecPolicies',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'IpsecPolicy',
            },
          },
        },
      },
      trafficSelectorPolicies: {
        serializedName: 'properties.trafficSelectorPolicies',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'TrafficSelectorPolicy',
            },
          },
        },
      },
      resourceGuid: {
        serializedName: 'properties.resourceGuid',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      provisioningState: {
        serializedName: 'properties.provisioningState',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      expressRouteGatewayBypass: {
        serializedName: 'properties.expressRouteGatewayBypass',
        type: {
          name: 'Boolean',
        },
      },
      enablePrivateLinkFastPath: {
        serializedName: 'properties.enablePrivateLinkFastPath',
        type: {
          name: 'Boolean',
        },
      },
    },
  },
};

export const VirtualRouter: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'VirtualRouter',
    modelProperties: {
      ...Resource.type.modelProperties,
      etag: {
        serializedName: 'etag',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      virtualRouterAsn: {
        constraints: {
          InclusiveMaximum: 4294967295,
          InclusiveMinimum: 0,
        },
        serializedName: 'properties.virtualRouterAsn',
        type: {
          name: 'Number',
        },
      },
      virtualRouterIps: {
        serializedName: 'properties.virtualRouterIps',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
      hostedSubnet: {
        serializedName: 'properties.hostedSubnet',
        type: {
          name: 'Composite',
          className: 'SubResource',
        },
      },
      hostedGateway: {
        serializedName: 'properties.hostedGateway',
        type: {
          name: 'Composite',
          className: 'SubResource',
        },
      },
      peerings: {
        serializedName: 'properties.peerings',
        readOnly: true,
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'SubResource',
            },
          },
        },
      },
      provisioningState: {
        serializedName: 'properties.provisioningState',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const VirtualWAN: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'VirtualWAN',
    modelProperties: {
      ...Resource.type.modelProperties,
      etag: {
        serializedName: 'etag',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      disableVpnEncryption: {
        serializedName: 'properties.disableVpnEncryption',
        type: {
          name: 'Boolean',
        },
      },
      virtualHubs: {
        serializedName: 'properties.virtualHubs',
        readOnly: true,
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'SubResource',
            },
          },
        },
      },
      vpnSites: {
        serializedName: 'properties.vpnSites',
        readOnly: true,
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'SubResource',
            },
          },
        },
      },
      allowBranchToBranchTraffic: {
        serializedName: 'properties.allowBranchToBranchTraffic',
        type: {
          name: 'Boolean',
        },
      },
      allowVnetToVnetTraffic: {
        serializedName: 'properties.allowVnetToVnetTraffic',
        type: {
          name: 'Boolean',
        },
      },
      office365LocalBreakoutCategory: {
        serializedName: 'properties.office365LocalBreakoutCategory',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      provisioningState: {
        serializedName: 'properties.provisioningState',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      typePropertiesType: {
        serializedName: 'properties.type',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const VpnSite: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'VpnSite',
    modelProperties: {
      ...Resource.type.modelProperties,
      etag: {
        serializedName: 'etag',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      virtualWan: {
        serializedName: 'properties.virtualWan',
        type: {
          name: 'Composite',
          className: 'SubResource',
        },
      },
      deviceProperties: {
        serializedName: 'properties.deviceProperties',
        type: {
          name: 'Composite',
          className: 'DeviceProperties',
        },
      },
      ipAddress: {
        serializedName: 'properties.ipAddress',
        type: {
          name: 'String',
        },
      },
      siteKey: {
        serializedName: 'properties.siteKey',
        type: {
          name: 'String',
        },
      },
      addressSpace: {
        serializedName: 'properties.addressSpace',
        type: {
          name: 'Composite',
          className: 'AddressSpace',
        },
      },
      bgpProperties: {
        serializedName: 'properties.bgpProperties',
        type: {
          name: 'Composite',
          className: 'BgpSettings',
        },
      },
      provisioningState: {
        serializedName: 'properties.provisioningState',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      isSecuritySite: {
        serializedName: 'properties.isSecuritySite',
        type: {
          name: 'Boolean',
        },
      },
      vpnSiteLinks: {
        serializedName: 'properties.vpnSiteLinks',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'VpnSiteLink',
            },
          },
        },
      },
      o365Policy: {
        serializedName: 'properties.o365Policy',
        type: {
          name: 'Composite',
          className: 'O365PolicyProperties',
        },
      },
    },
  },
};

export const P2SVpnGateway: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'P2SVpnGateway',
    modelProperties: {
      ...Resource.type.modelProperties,
      etag: {
        serializedName: 'etag',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      virtualHub: {
        serializedName: 'properties.virtualHub',
        type: {
          name: 'Composite',
          className: 'SubResource',
        },
      },
      p2SConnectionConfigurations: {
        serializedName: 'properties.p2SConnectionConfigurations',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'P2SConnectionConfiguration',
            },
          },
        },
      },
      provisioningState: {
        serializedName: 'properties.provisioningState',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      vpnGatewayScaleUnit: {
        serializedName: 'properties.vpnGatewayScaleUnit',
        type: {
          name: 'Number',
        },
      },
      vpnServerConfiguration: {
        serializedName: 'properties.vpnServerConfiguration',
        type: {
          name: 'Composite',
          className: 'SubResource',
        },
      },
      vpnClientConnectionHealth: {
        serializedName: 'properties.vpnClientConnectionHealth',
        type: {
          name: 'Composite',
          className: 'VpnClientConnectionHealth',
        },
      },
      customDnsServers: {
        serializedName: 'properties.customDnsServers',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
      isRoutingPreferenceInternet: {
        serializedName: 'properties.isRoutingPreferenceInternet',
        type: {
          name: 'Boolean',
        },
      },
    },
  },
};

export const VpnServerConfiguration: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'VpnServerConfiguration',
    modelProperties: {
      ...Resource.type.modelProperties,
      etag: {
        serializedName: 'etag',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      namePropertiesName: {
        serializedName: 'properties.name',
        type: {
          name: 'String',
        },
      },
      vpnProtocols: {
        serializedName: 'properties.vpnProtocols',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
      vpnAuthenticationTypes: {
        serializedName: 'properties.vpnAuthenticationTypes',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
      vpnClientRootCertificates: {
        serializedName: 'properties.vpnClientRootCertificates',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'VpnServerConfigVpnClientRootCertificate',
            },
          },
        },
      },
      vpnClientRevokedCertificates: {
        serializedName: 'properties.vpnClientRevokedCertificates',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'VpnServerConfigVpnClientRevokedCertificate',
            },
          },
        },
      },
      radiusServerRootCertificates: {
        serializedName: 'properties.radiusServerRootCertificates',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'VpnServerConfigRadiusServerRootCertificate',
            },
          },
        },
      },
      radiusClientRootCertificates: {
        serializedName: 'properties.radiusClientRootCertificates',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'VpnServerConfigRadiusClientRootCertificate',
            },
          },
        },
      },
      vpnClientIpsecPolicies: {
        serializedName: 'properties.vpnClientIpsecPolicies',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'IpsecPolicy',
            },
          },
        },
      },
      radiusServerAddress: {
        serializedName: 'properties.radiusServerAddress',
        type: {
          name: 'String',
        },
      },
      radiusServerSecret: {
        serializedName: 'properties.radiusServerSecret',
        type: {
          name: 'String',
        },
      },
      radiusServers: {
        serializedName: 'properties.radiusServers',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'RadiusServer',
            },
          },
        },
      },
      aadAuthenticationParameters: {
        serializedName: 'properties.aadAuthenticationParameters',
        type: {
          name: 'Composite',
          className: 'AadAuthenticationParameters',
        },
      },
      provisioningState: {
        serializedName: 'properties.provisioningState',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      p2SVpnGateways: {
        serializedName: 'properties.p2SVpnGateways',
        readOnly: true,
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'P2SVpnGateway',
            },
          },
        },
      },
      configurationPolicyGroups: {
        serializedName: 'properties.configurationPolicyGroups',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'VpnServerConfigurationPolicyGroup',
            },
          },
        },
      },
      etagPropertiesEtag: {
        serializedName: 'properties.etag',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const VirtualHub: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'VirtualHub',
    modelProperties: {
      ...Resource.type.modelProperties,
      etag: {
        serializedName: 'etag',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      kind: {
        serializedName: 'kind',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      virtualWan: {
        serializedName: 'properties.virtualWan',
        type: {
          name: 'Composite',
          className: 'SubResource',
        },
      },
      vpnGateway: {
        serializedName: 'properties.vpnGateway',
        type: {
          name: 'Composite',
          className: 'SubResource',
        },
      },
      p2SVpnGateway: {
        serializedName: 'properties.p2SVpnGateway',
        type: {
          name: 'Composite',
          className: 'SubResource',
        },
      },
      expressRouteGateway: {
        serializedName: 'properties.expressRouteGateway',
        type: {
          name: 'Composite',
          className: 'SubResource',
        },
      },
      azureFirewall: {
        serializedName: 'properties.azureFirewall',
        type: {
          name: 'Composite',
          className: 'SubResource',
        },
      },
      securityPartnerProvider: {
        serializedName: 'properties.securityPartnerProvider',
        type: {
          name: 'Composite',
          className: 'SubResource',
        },
      },
      addressPrefix: {
        serializedName: 'properties.addressPrefix',
        type: {
          name: 'String',
        },
      },
      routeTable: {
        serializedName: 'properties.routeTable',
        type: {
          name: 'Composite',
          className: 'VirtualHubRouteTable',
        },
      },
      provisioningState: {
        serializedName: 'properties.provisioningState',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      securityProviderName: {
        serializedName: 'properties.securityProviderName',
        type: {
          name: 'String',
        },
      },
      virtualHubRouteTableV2S: {
        serializedName: 'properties.virtualHubRouteTableV2s',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'VirtualHubRouteTableV2',
            },
          },
        },
      },
      sku: {
        serializedName: 'properties.sku',
        type: {
          name: 'String',
        },
      },
      routingState: {
        serializedName: 'properties.routingState',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      bgpConnections: {
        serializedName: 'properties.bgpConnections',
        readOnly: true,
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'SubResource',
            },
          },
        },
      },
      ipConfigurations: {
        serializedName: 'properties.ipConfigurations',
        readOnly: true,
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'SubResource',
            },
          },
        },
      },
      routeMaps: {
        serializedName: 'properties.routeMaps',
        readOnly: true,
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'SubResource',
            },
          },
        },
      },
      virtualRouterAsn: {
        constraints: {
          InclusiveMaximum: 4294967295,
          InclusiveMinimum: 0,
        },
        serializedName: 'properties.virtualRouterAsn',
        type: {
          name: 'Number',
        },
      },
      virtualRouterIps: {
        serializedName: 'properties.virtualRouterIps',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
      allowBranchToBranchTraffic: {
        serializedName: 'properties.allowBranchToBranchTraffic',
        type: {
          name: 'Boolean',
        },
      },
      preferredRoutingGateway: {
        serializedName: 'properties.preferredRoutingGateway',
        type: {
          name: 'String',
        },
      },
      hubRoutingPreference: {
        serializedName: 'properties.hubRoutingPreference',
        type: {
          name: 'String',
        },
      },
      virtualRouterAutoScaleConfiguration: {
        serializedName: 'properties.virtualRouterAutoScaleConfiguration',
        type: {
          name: 'Composite',
          className: 'VirtualRouterAutoScaleConfiguration',
        },
      },
    },
  },
};

export const VpnGateway: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'VpnGateway',
    modelProperties: {
      ...Resource.type.modelProperties,
      etag: {
        serializedName: 'etag',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      virtualHub: {
        serializedName: 'properties.virtualHub',
        type: {
          name: 'Composite',
          className: 'SubResource',
        },
      },
      connections: {
        serializedName: 'properties.connections',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'VpnConnection',
            },
          },
        },
      },
      bgpSettings: {
        serializedName: 'properties.bgpSettings',
        type: {
          name: 'Composite',
          className: 'BgpSettings',
        },
      },
      provisioningState: {
        serializedName: 'properties.provisioningState',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      vpnGatewayScaleUnit: {
        serializedName: 'properties.vpnGatewayScaleUnit',
        type: {
          name: 'Number',
        },
      },
      ipConfigurations: {
        serializedName: 'properties.ipConfigurations',
        readOnly: true,
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'VpnGatewayIpConfiguration',
            },
          },
        },
      },
      enableBgpRouteTranslationForNat: {
        serializedName: 'properties.enableBgpRouteTranslationForNat',
        type: {
          name: 'Boolean',
        },
      },
      isRoutingPreferenceInternet: {
        serializedName: 'properties.isRoutingPreferenceInternet',
        type: {
          name: 'Boolean',
        },
      },
      natRules: {
        serializedName: 'properties.natRules',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'VpnGatewayNatRule',
            },
          },
        },
      },
    },
  },
};

export const ExpressRouteGateway: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ExpressRouteGateway',
    modelProperties: {
      ...Resource.type.modelProperties,
      etag: {
        serializedName: 'etag',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      autoScaleConfiguration: {
        serializedName: 'properties.autoScaleConfiguration',
        type: {
          name: 'Composite',
          className: 'ExpressRouteGatewayPropertiesAutoScaleConfiguration',
        },
      },
      expressRouteConnections: {
        serializedName: 'properties.expressRouteConnections',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'ExpressRouteConnection',
            },
          },
        },
      },
      provisioningState: {
        serializedName: 'properties.provisioningState',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      virtualHub: {
        serializedName: 'properties.virtualHub',
        type: {
          name: 'Composite',
          className: 'VirtualHubId',
        },
      },
      allowNonVirtualWanTraffic: {
        serializedName: 'properties.allowNonVirtualWanTraffic',
        type: {
          name: 'Boolean',
        },
      },
    },
  },
};

export const WebApplicationFirewallPolicy: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'WebApplicationFirewallPolicy',
    modelProperties: {
      ...Resource.type.modelProperties,
      etag: {
        serializedName: 'etag',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      policySettings: {
        serializedName: 'properties.policySettings',
        type: {
          name: 'Composite',
          className: 'PolicySettings',
        },
      },
      customRules: {
        serializedName: 'properties.customRules',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'WebApplicationFirewallCustomRule',
            },
          },
        },
      },
      applicationGateways: {
        serializedName: 'properties.applicationGateways',
        readOnly: true,
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'ApplicationGateway',
            },
          },
        },
      },
      provisioningState: {
        serializedName: 'properties.provisioningState',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      resourceState: {
        serializedName: 'properties.resourceState',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      managedRules: {
        serializedName: 'properties.managedRules',
        type: {
          name: 'Composite',
          className: 'ManagedRulesDefinition',
        },
      },
      httpListeners: {
        serializedName: 'properties.httpListeners',
        readOnly: true,
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'SubResource',
            },
          },
        },
      },
      pathBasedRules: {
        serializedName: 'properties.pathBasedRules',
        readOnly: true,
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'SubResource',
            },
          },
        },
      },
    },
  },
};

export const PrivateLinkServicePropertiesVisibility: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'PrivateLinkServicePropertiesVisibility',
    modelProperties: {
      ...ResourceSet.type.modelProperties,
    },
  },
};

export const PrivateLinkServicePropertiesAutoApproval: msRest.CompositeMapper =
  {
    type: {
      name: 'Composite',
      className: 'PrivateLinkServicePropertiesAutoApproval',
      modelProperties: {
        ...ResourceSet.type.modelProperties,
      },
    },
  };

export const FirewallPolicyNatRuleCollection: msRest.CompositeMapper = {
  serializedName: 'FirewallPolicyNatRuleCollection',
  type: {
    name: 'Composite',
    className: 'FirewallPolicyNatRuleCollection',
    uberParent: 'FirewallPolicyRuleCollection',
    polymorphicDiscriminator:
      FirewallPolicyRuleCollection.type.polymorphicDiscriminator,
    modelProperties: {
      ...FirewallPolicyRuleCollection.type.modelProperties,
      action: {
        serializedName: 'action',
        type: {
          name: 'Composite',
          className: 'FirewallPolicyNatRuleCollectionAction',
        },
      },
      rules: {
        serializedName: 'rules',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'FirewallPolicyRule',
            },
          },
        },
      },
    },
  },
};

export const FirewallPolicyFilterRuleCollection: msRest.CompositeMapper = {
  serializedName: 'FirewallPolicyFilterRuleCollection',
  type: {
    name: 'Composite',
    className: 'FirewallPolicyFilterRuleCollection',
    uberParent: 'FirewallPolicyRuleCollection',
    polymorphicDiscriminator:
      FirewallPolicyRuleCollection.type.polymorphicDiscriminator,
    modelProperties: {
      ...FirewallPolicyRuleCollection.type.modelProperties,
      action: {
        serializedName: 'action',
        type: {
          name: 'Composite',
          className: 'FirewallPolicyFilterRuleCollectionAction',
        },
      },
      rules: {
        serializedName: 'rules',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'FirewallPolicyRule',
            },
          },
        },
      },
    },
  },
};

export const ActiveConnectivityConfiguration: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ActiveConnectivityConfiguration',
    modelProperties: {
      ...EffectiveConnectivityConfiguration.type.modelProperties,
      commitTime: {
        serializedName: 'commitTime',
        type: {
          name: 'DateTime',
        },
      },
      region: {
        serializedName: 'region',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const ActiveSecurityAdminRule: msRest.CompositeMapper = {
  serializedName: 'Custom',
  type: {
    name: 'Composite',
    className: 'ActiveSecurityAdminRule',
    uberParent: 'ActiveBaseSecurityAdminRule',
    polymorphicDiscriminator:
      ActiveBaseSecurityAdminRule.type.polymorphicDiscriminator,
    modelProperties: {
      ...ActiveBaseSecurityAdminRule.type.modelProperties,
      description: {
        serializedName: 'properties.description',
        type: {
          name: 'String',
        },
      },
      protocol: {
        serializedName: 'properties.protocol',
        type: {
          name: 'String',
        },
      },
      sources: {
        serializedName: 'properties.sources',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'AddressPrefixItem',
            },
          },
        },
      },
      destinations: {
        serializedName: 'properties.destinations',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'AddressPrefixItem',
            },
          },
        },
      },
      sourcePortRanges: {
        serializedName: 'properties.sourcePortRanges',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
      destinationPortRanges: {
        serializedName: 'properties.destinationPortRanges',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
      access: {
        serializedName: 'properties.access',
        type: {
          name: 'String',
        },
      },
      priority: {
        constraints: {
          InclusiveMaximum: 4096,
          InclusiveMinimum: 1,
        },
        serializedName: 'properties.priority',
        type: {
          name: 'Number',
        },
      },
      direction: {
        serializedName: 'properties.direction',
        type: {
          name: 'String',
        },
      },
      provisioningState: {
        serializedName: 'properties.provisioningState',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      resourceGuid: {
        serializedName: 'properties.resourceGuid',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const ActiveDefaultSecurityAdminRule: msRest.CompositeMapper = {
  serializedName: 'Default',
  type: {
    name: 'Composite',
    className: 'ActiveDefaultSecurityAdminRule',
    uberParent: 'ActiveBaseSecurityAdminRule',
    polymorphicDiscriminator:
      ActiveBaseSecurityAdminRule.type.polymorphicDiscriminator,
    modelProperties: {
      ...ActiveBaseSecurityAdminRule.type.modelProperties,
      description: {
        serializedName: 'properties.description',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      flag: {
        serializedName: 'properties.flag',
        type: {
          name: 'String',
        },
      },
      protocol: {
        serializedName: 'properties.protocol',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      sources: {
        serializedName: 'properties.sources',
        readOnly: true,
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'AddressPrefixItem',
            },
          },
        },
      },
      destinations: {
        serializedName: 'properties.destinations',
        readOnly: true,
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'AddressPrefixItem',
            },
          },
        },
      },
      sourcePortRanges: {
        serializedName: 'properties.sourcePortRanges',
        readOnly: true,
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
      destinationPortRanges: {
        serializedName: 'properties.destinationPortRanges',
        readOnly: true,
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
      access: {
        serializedName: 'properties.access',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      priority: {
        serializedName: 'properties.priority',
        readOnly: true,
        type: {
          name: 'Number',
        },
      },
      direction: {
        serializedName: 'properties.direction',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      provisioningState: {
        serializedName: 'properties.provisioningState',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      resourceGuid: {
        serializedName: 'properties.resourceGuid',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const NetworkManagerConnection: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'NetworkManagerConnection',
    modelProperties: {
      ...ChildResource.type.modelProperties,
      systemData: {
        serializedName: 'systemData',
        type: {
          name: 'Composite',
          className: 'SystemData',
        },
      },
      networkManagerId: {
        serializedName: 'properties.networkManagerId',
        type: {
          name: 'String',
        },
      },
      connectionState: {
        serializedName: 'properties.connectionState',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      description: {
        serializedName: 'properties.description',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const ConnectivityConfiguration: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ConnectivityConfiguration',
    modelProperties: {
      ...ChildResource.type.modelProperties,
      systemData: {
        serializedName: 'systemData',
        type: {
          name: 'Composite',
          className: 'SystemData',
        },
      },
      description: {
        serializedName: 'properties.description',
        type: {
          name: 'String',
        },
      },
      connectivityTopology: {
        serializedName: 'properties.connectivityTopology',
        type: {
          name: 'String',
        },
      },
      hubs: {
        serializedName: 'properties.hubs',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'Hub',
            },
          },
        },
      },
      isGlobal: {
        serializedName: 'properties.isGlobal',
        type: {
          name: 'String',
        },
      },
      appliesToGroups: {
        serializedName: 'properties.appliesToGroups',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'ConnectivityGroupItem',
            },
          },
        },
      },
      provisioningState: {
        serializedName: 'properties.provisioningState',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      deleteExistingPeering: {
        serializedName: 'properties.deleteExistingPeering',
        type: {
          name: 'String',
        },
      },
      resourceGuid: {
        serializedName: 'properties.resourceGuid',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const NetworkGroup: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'NetworkGroup',
    modelProperties: {
      ...ChildResource.type.modelProperties,
      systemData: {
        serializedName: 'systemData',
        type: {
          name: 'Composite',
          className: 'SystemData',
        },
      },
      description: {
        serializedName: 'properties.description',
        type: {
          name: 'String',
        },
      },
      provisioningState: {
        serializedName: 'properties.provisioningState',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      resourceGuid: {
        serializedName: 'properties.resourceGuid',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const StaticMember: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'StaticMember',
    modelProperties: {
      ...ChildResource.type.modelProperties,
      systemData: {
        serializedName: 'systemData',
        type: {
          name: 'Composite',
          className: 'SystemData',
        },
      },
      resourceId: {
        serializedName: 'properties.resourceId',
        type: {
          name: 'String',
        },
      },
      region: {
        serializedName: 'properties.region',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      provisioningState: {
        serializedName: 'properties.provisioningState',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const ScopeConnection: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ScopeConnection',
    modelProperties: {
      ...ChildResource.type.modelProperties,
      systemData: {
        serializedName: 'systemData',
        type: {
          name: 'Composite',
          className: 'SystemData',
        },
      },
      tenantId: {
        serializedName: 'properties.tenantId',
        type: {
          name: 'String',
        },
      },
      resourceId: {
        serializedName: 'properties.resourceId',
        type: {
          name: 'String',
        },
      },
      connectionState: {
        serializedName: 'properties.connectionState',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      description: {
        serializedName: 'properties.description',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const SecurityAdminConfiguration: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'SecurityAdminConfiguration',
    modelProperties: {
      ...ChildResource.type.modelProperties,
      systemData: {
        serializedName: 'systemData',
        type: {
          name: 'Composite',
          className: 'SystemData',
        },
      },
      description: {
        serializedName: 'properties.description',
        type: {
          name: 'String',
        },
      },
      applyOnNetworkIntentPolicyBasedServices: {
        serializedName: 'properties.applyOnNetworkIntentPolicyBasedServices',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
      provisioningState: {
        serializedName: 'properties.provisioningState',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      resourceGuid: {
        serializedName: 'properties.resourceGuid',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const AdminRuleCollection: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'AdminRuleCollection',
    modelProperties: {
      ...ChildResource.type.modelProperties,
      systemData: {
        serializedName: 'systemData',
        type: {
          name: 'Composite',
          className: 'SystemData',
        },
      },
      description: {
        serializedName: 'properties.description',
        type: {
          name: 'String',
        },
      },
      appliesToGroups: {
        serializedName: 'properties.appliesToGroups',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'NetworkManagerSecurityGroupItem',
            },
          },
        },
      },
      provisioningState: {
        serializedName: 'properties.provisioningState',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      resourceGuid: {
        serializedName: 'properties.resourceGuid',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const BaseAdminRule: msRest.CompositeMapper = {
  serializedName: 'BaseAdminRule',
  type: {
    name: 'Composite',
    className: 'BaseAdminRule',
    uberParent: 'ChildResource',
    polymorphicDiscriminator: {
      serializedName: 'kind',
      clientName: 'kind',
    },
    modelProperties: {
      ...ChildResource.type.modelProperties,
      kind: {
        serializedName: 'kind',
        required: true,
        type: {
          name: 'String',
        },
      },
      systemData: {
        serializedName: 'systemData',
        type: {
          name: 'Composite',
          className: 'SystemData',
        },
      },
    },
  },
};

export const EffectiveSecurityAdminRule: msRest.CompositeMapper = {
  serializedName: 'Custom',
  type: {
    name: 'Composite',
    className: 'EffectiveSecurityAdminRule',
    uberParent: 'EffectiveBaseSecurityAdminRule',
    polymorphicDiscriminator:
      EffectiveBaseSecurityAdminRule.type.polymorphicDiscriminator,
    modelProperties: {
      ...EffectiveBaseSecurityAdminRule.type.modelProperties,
      description: {
        serializedName: 'properties.description',
        type: {
          name: 'String',
        },
      },
      protocol: {
        serializedName: 'properties.protocol',
        type: {
          name: 'String',
        },
      },
      sources: {
        serializedName: 'properties.sources',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'AddressPrefixItem',
            },
          },
        },
      },
      destinations: {
        serializedName: 'properties.destinations',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'AddressPrefixItem',
            },
          },
        },
      },
      sourcePortRanges: {
        serializedName: 'properties.sourcePortRanges',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
      destinationPortRanges: {
        serializedName: 'properties.destinationPortRanges',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
      access: {
        serializedName: 'properties.access',
        type: {
          name: 'String',
        },
      },
      priority: {
        constraints: {
          InclusiveMaximum: 4096,
          InclusiveMinimum: 1,
        },
        serializedName: 'properties.priority',
        type: {
          name: 'Number',
        },
      },
      direction: {
        serializedName: 'properties.direction',
        type: {
          name: 'String',
        },
      },
      provisioningState: {
        serializedName: 'properties.provisioningState',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      resourceGuid: {
        serializedName: 'properties.resourceGuid',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const EffectiveDefaultSecurityAdminRule: msRest.CompositeMapper = {
  serializedName: 'Default',
  type: {
    name: 'Composite',
    className: 'EffectiveDefaultSecurityAdminRule',
    uberParent: 'EffectiveBaseSecurityAdminRule',
    polymorphicDiscriminator:
      EffectiveBaseSecurityAdminRule.type.polymorphicDiscriminator,
    modelProperties: {
      ...EffectiveBaseSecurityAdminRule.type.modelProperties,
      description: {
        serializedName: 'properties.description',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      flag: {
        serializedName: 'properties.flag',
        type: {
          name: 'String',
        },
      },
      protocol: {
        serializedName: 'properties.protocol',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      sources: {
        serializedName: 'properties.sources',
        readOnly: true,
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'AddressPrefixItem',
            },
          },
        },
      },
      destinations: {
        serializedName: 'properties.destinations',
        readOnly: true,
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'AddressPrefixItem',
            },
          },
        },
      },
      sourcePortRanges: {
        serializedName: 'properties.sourcePortRanges',
        readOnly: true,
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
      destinationPortRanges: {
        serializedName: 'properties.destinationPortRanges',
        readOnly: true,
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
      access: {
        serializedName: 'properties.access',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      priority: {
        serializedName: 'properties.priority',
        readOnly: true,
        type: {
          name: 'Number',
        },
      },
      direction: {
        serializedName: 'properties.direction',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      provisioningState: {
        serializedName: 'properties.provisioningState',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      resourceGuid: {
        serializedName: 'properties.resourceGuid',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const PacketCaptureResultProperties: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'PacketCaptureResultProperties',
    modelProperties: {
      ...PacketCaptureParameters.type.modelProperties,
      provisioningState: {
        serializedName: 'provisioningState',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const ConnectionMonitorResultProperties: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ConnectionMonitorResultProperties',
    modelProperties: {
      ...ConnectionMonitorParameters.type.modelProperties,
      provisioningState: {
        serializedName: 'provisioningState',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      startTime: {
        serializedName: 'startTime',
        readOnly: true,
        type: {
          name: 'DateTime',
        },
      },
      monitoringStatus: {
        serializedName: 'monitoringStatus',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      connectionMonitorType: {
        serializedName: 'connectionMonitorType',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const ApplicationRule: msRest.CompositeMapper = {
  serializedName: 'ApplicationRule',
  type: {
    name: 'Composite',
    className: 'ApplicationRule',
    uberParent: 'FirewallPolicyRule',
    polymorphicDiscriminator: FirewallPolicyRule.type.polymorphicDiscriminator,
    modelProperties: {
      ...FirewallPolicyRule.type.modelProperties,
      sourceAddresses: {
        serializedName: 'sourceAddresses',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
      destinationAddresses: {
        serializedName: 'destinationAddresses',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
      protocols: {
        serializedName: 'protocols',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'FirewallPolicyRuleApplicationProtocol',
            },
          },
        },
      },
      targetFqdns: {
        serializedName: 'targetFqdns',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
      targetUrls: {
        serializedName: 'targetUrls',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
      fqdnTags: {
        serializedName: 'fqdnTags',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
      sourceIpGroups: {
        serializedName: 'sourceIpGroups',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
      terminateTLS: {
        serializedName: 'terminateTLS',
        type: {
          name: 'Boolean',
        },
      },
      webCategories: {
        serializedName: 'webCategories',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
      httpHeadersToInsert: {
        serializedName: 'httpHeadersToInsert',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'FirewallPolicyHttpHeaderToInsert',
            },
          },
        },
      },
    },
  },
};

export const NatRule: msRest.CompositeMapper = {
  serializedName: 'NatRule',
  type: {
    name: 'Composite',
    className: 'NatRule',
    uberParent: 'FirewallPolicyRule',
    polymorphicDiscriminator: FirewallPolicyRule.type.polymorphicDiscriminator,
    modelProperties: {
      ...FirewallPolicyRule.type.modelProperties,
      ipProtocols: {
        serializedName: 'ipProtocols',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
      sourceAddresses: {
        serializedName: 'sourceAddresses',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
      destinationAddresses: {
        serializedName: 'destinationAddresses',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
      destinationPorts: {
        serializedName: 'destinationPorts',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
      translatedAddress: {
        serializedName: 'translatedAddress',
        type: {
          name: 'String',
        },
      },
      translatedPort: {
        serializedName: 'translatedPort',
        type: {
          name: 'String',
        },
      },
      sourceIpGroups: {
        serializedName: 'sourceIpGroups',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
      translatedFqdn: {
        serializedName: 'translatedFqdn',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const NetworkRule: msRest.CompositeMapper = {
  serializedName: 'NetworkRule',
  type: {
    name: 'Composite',
    className: 'NetworkRule',
    uberParent: 'FirewallPolicyRule',
    polymorphicDiscriminator: FirewallPolicyRule.type.polymorphicDiscriminator,
    modelProperties: {
      ...FirewallPolicyRule.type.modelProperties,
      ipProtocols: {
        serializedName: 'ipProtocols',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
      sourceAddresses: {
        serializedName: 'sourceAddresses',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
      destinationAddresses: {
        serializedName: 'destinationAddresses',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
      destinationPorts: {
        serializedName: 'destinationPorts',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
      sourceIpGroups: {
        serializedName: 'sourceIpGroups',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
      destinationIpGroups: {
        serializedName: 'destinationIpGroups',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
      destinationFqdns: {
        serializedName: 'destinationFqdns',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
    },
  },
};

export const AdminRule: msRest.CompositeMapper = {
  serializedName: 'Custom',
  type: {
    name: 'Composite',
    className: 'AdminRule',
    uberParent: 'BaseAdminRule',
    polymorphicDiscriminator: BaseAdminRule.type.polymorphicDiscriminator,
    modelProperties: {
      ...BaseAdminRule.type.modelProperties,
      description: {
        serializedName: 'properties.description',
        type: {
          name: 'String',
        },
      },
      protocol: {
        serializedName: 'properties.protocol',
        type: {
          name: 'String',
        },
      },
      sources: {
        serializedName: 'properties.sources',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'AddressPrefixItem',
            },
          },
        },
      },
      destinations: {
        serializedName: 'properties.destinations',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'AddressPrefixItem',
            },
          },
        },
      },
      sourcePortRanges: {
        serializedName: 'properties.sourcePortRanges',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
      destinationPortRanges: {
        serializedName: 'properties.destinationPortRanges',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
      access: {
        serializedName: 'properties.access',
        type: {
          name: 'String',
        },
      },
      priority: {
        constraints: {
          InclusiveMaximum: 4096,
          InclusiveMinimum: 1,
        },
        serializedName: 'properties.priority',
        type: {
          name: 'Number',
        },
      },
      direction: {
        serializedName: 'properties.direction',
        type: {
          name: 'String',
        },
      },
      provisioningState: {
        serializedName: 'properties.provisioningState',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      resourceGuid: {
        serializedName: 'properties.resourceGuid',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const DefaultAdminRule: msRest.CompositeMapper = {
  serializedName: 'Default',
  type: {
    name: 'Composite',
    className: 'DefaultAdminRule',
    uberParent: 'BaseAdminRule',
    polymorphicDiscriminator: BaseAdminRule.type.polymorphicDiscriminator,
    modelProperties: {
      ...BaseAdminRule.type.modelProperties,
      description: {
        serializedName: 'properties.description',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      flag: {
        serializedName: 'properties.flag',
        type: {
          name: 'String',
        },
      },
      protocol: {
        serializedName: 'properties.protocol',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      sources: {
        serializedName: 'properties.sources',
        readOnly: true,
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'AddressPrefixItem',
            },
          },
        },
      },
      destinations: {
        serializedName: 'properties.destinations',
        readOnly: true,
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'AddressPrefixItem',
            },
          },
        },
      },
      sourcePortRanges: {
        serializedName: 'properties.sourcePortRanges',
        readOnly: true,
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
      destinationPortRanges: {
        serializedName: 'properties.destinationPortRanges',
        readOnly: true,
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
      access: {
        serializedName: 'properties.access',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      priority: {
        serializedName: 'properties.priority',
        readOnly: true,
        type: {
          name: 'Number',
        },
      },
      direction: {
        serializedName: 'properties.direction',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      provisioningState: {
        serializedName: 'properties.provisioningState',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
      resourceGuid: {
        serializedName: 'properties.resourceGuid',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const AzureFirewallsPacketCaptureHeaders: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'AzureFirewallsPacketCaptureHeaders',
    modelProperties: {
      location: {
        serializedName: 'location',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const PublicIPAddressesDeleteHeaders: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'PublicIPAddressesDeleteHeaders',
    modelProperties: {
      location: {
        serializedName: 'location',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const PublicIPAddressesDdosProtectionStatusHeaders: msRest.CompositeMapper =
  {
    type: {
      name: 'Composite',
      className: 'PublicIPAddressesDdosProtectionStatusHeaders',
      modelProperties: {
        location: {
          serializedName: 'location',
          type: {
            name: 'String',
          },
        },
      },
    },
  };

export const DdosProtectionPlansDeleteHeaders: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'DdosProtectionPlansDeleteHeaders',
    modelProperties: {
      location: {
        serializedName: 'location',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const NetworkManagersDeleteHeaders: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'NetworkManagersDeleteHeaders',
    modelProperties: {
      location: {
        serializedName: 'location',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const NetworkManagerCommitsPostHeaders: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'NetworkManagerCommitsPostHeaders',
    modelProperties: {
      location: {
        serializedName: 'location',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const ConnectivityConfigurationsDeleteHeaders: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ConnectivityConfigurationsDeleteHeaders',
    modelProperties: {
      location: {
        serializedName: 'location',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const NetworkGroupsCreateOrUpdateHeaders: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'NetworkGroupsCreateOrUpdateHeaders',
    modelProperties: {
      eTag: {
        serializedName: 'etag',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const NetworkGroupsDeleteHeaders: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'NetworkGroupsDeleteHeaders',
    modelProperties: {
      location: {
        serializedName: 'location',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const SecurityAdminConfigurationsDeleteHeaders: msRest.CompositeMapper =
  {
    type: {
      name: 'Composite',
      className: 'SecurityAdminConfigurationsDeleteHeaders',
      modelProperties: {
        location: {
          serializedName: 'location',
          type: {
            name: 'String',
          },
        },
      },
    },
  };

export const AdminRuleCollectionsDeleteHeaders: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'AdminRuleCollectionsDeleteHeaders',
    modelProperties: {
      location: {
        serializedName: 'location',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const AdminRulesDeleteHeaders: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'AdminRulesDeleteHeaders',
    modelProperties: {
      location: {
        serializedName: 'location',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const NetworkVirtualAppliancesDeleteHeaders: msRest.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'NetworkVirtualAppliancesDeleteHeaders',
    modelProperties: {
      location: {
        serializedName: 'location',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const NetworkVirtualAppliancesCreateOrUpdateHeaders: msRest.CompositeMapper =
  {
    type: {
      name: 'Composite',
      className: 'NetworkVirtualAppliancesCreateOrUpdateHeaders',
      modelProperties: {
        location: {
          serializedName: 'location',
          type: {
            name: 'String',
          },
        },
      },
    },
  };

export const NetworkVirtualApplianceConnectionsDeleteHeaders: msRest.CompositeMapper =
  {
    type: {
      name: 'Composite',
      className: 'NetworkVirtualApplianceConnectionsDeleteHeaders',
      modelProperties: {
        location: {
          serializedName: 'location',
          type: {
            name: 'String',
          },
        },
      },
    },
  };

// eslint-disable-next-line prefer-const
export let discriminators = {
  FirewallPolicyRuleCollection: FirewallPolicyRuleCollection,
  ActiveBaseSecurityAdminRule: ActiveBaseSecurityAdminRule,
  EffectiveBaseSecurityAdminRule: EffectiveBaseSecurityAdminRule,
  FirewallPolicyRule: FirewallPolicyRule,
  'FirewallPolicyRuleCollection.FirewallPolicyNatRuleCollection':
    FirewallPolicyNatRuleCollection,
  'FirewallPolicyRuleCollection.FirewallPolicyFilterRuleCollection':
    FirewallPolicyFilterRuleCollection,
  'ActiveBaseSecurityAdminRule.Custom': ActiveSecurityAdminRule,
  'ActiveBaseSecurityAdminRule.Default': ActiveDefaultSecurityAdminRule,
  'ChildResource.BaseAdminRule': BaseAdminRule,
  'EffectiveBaseSecurityAdminRule.Custom': EffectiveSecurityAdminRule,
  'EffectiveBaseSecurityAdminRule.Default': EffectiveDefaultSecurityAdminRule,
  'FirewallPolicyRule.ApplicationRule': ApplicationRule,
  'FirewallPolicyRule.NatRule': NatRule,
  'FirewallPolicyRule.NetworkRule': NetworkRule,
  'BaseAdminRule.Custom': AdminRule,
  'BaseAdminRule.Default': DefaultAdminRule,
};
