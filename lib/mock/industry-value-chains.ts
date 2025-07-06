import { IndustryValueChainData } from '../types/value-chain';

export const industryValueChains: IndustryValueChainData[] = [
  {
    industry: 'MFG',
    label: 'Manufacturing',
    industryChain: {
      id: 'industry-mfg',
      name: 'Manufacturing Industry Value Chain',
      type: 'industry',
      industry: 'MFG',
      blocks: [
        {
          id: 'plan',
          name: 'Plan',
          description: 'Planning processes for demand, production, and inventory.',
          accentColor: '#007CC2',
          heat: 80,
          percent: 20,
          modules: [
            { id: 'demand-forecasting', name: 'Demand Forecasting', description: '', heat: 80 },
            { id: 'production-planning', name: 'Production Planning', description: '', heat: 85 },
            { id: 'inventory-planning', name: 'Inventory Planning', description: '', heat: 75 }
          ],
          mappedTo: ['plan-to-produce'],
          painPoints: ['Forecast accuracy', 'Production scheduling complexity', 'Inventory optimization'],
          useCases: ['Demand planning', 'Production scheduling', 'Inventory management'],
          kpis: ['Forecast accuracy %', 'Production plan adherence', 'Inventory turnover'],
          adoptionStats: '85% adoption',
          metadataSummary: 'Core planning processes'
        },
        {
          id: 'source',
          name: 'Source',
          description: 'Sourcing and procurement of materials and components.',
          accentColor: '#FF6B35',
          heat: 75,
          percent: 20,
          modules: [
            { id: 'supplier-management', name: 'Supplier Management', description: '', heat: 75 },
            { id: 'procurement', name: 'Procurement', description: '', heat: 80 },
            { id: 'contract-management', name: 'Contract Management', description: '', heat: 70 }
          ],
          mappedTo: ['source-to-pay'],
          painPoints: ['Supplier performance', 'Cost optimization', 'Contract compliance'],
          useCases: ['Supplier evaluation', 'Purchase order management', 'Contract tracking'],
          kpis: ['Supplier performance score', 'Cost savings %', 'Contract compliance %'],
          adoptionStats: '78% adoption',
          metadataSummary: 'Strategic sourcing processes'
        },
        {
          id: 'make',
          name: 'Make',
          description: 'Production execution and manufacturing processes.',
          accentColor: '#4CAF50',
          heat: 90,
          percent: 20,
          modules: [
            { id: 'production-execution', name: 'Production Execution', description: '', heat: 90 },
            { id: 'quality-management', name: 'Quality Management', description: '', heat: 85 },
            { id: 'asset-management', name: 'Asset Management', description: '', heat: 80 }
          ],
          mappedTo: ['design-to-operate'],
          painPoints: ['Production efficiency', 'Quality control', 'Equipment maintenance'],
          useCases: ['Production monitoring', 'Quality inspection', 'Preventive maintenance'],
          kpis: ['OEE (Overall Equipment Effectiveness)', 'Quality yield %', 'Maintenance cost'],
          adoptionStats: '92% adoption',
          metadataSummary: 'Core manufacturing processes'
        },
        {
          id: 'deliver',
          name: 'Deliver',
          description: 'Warehouse management and order fulfillment.',
          accentColor: '#9C27B0',
          heat: 70,
          percent: 20,
          modules: [
            { id: 'warehouse-management', name: 'Warehouse Management', description: '', heat: 70 },
            { id: 'transportation-management', name: 'Transportation Management', description: '', heat: 65 },
            { id: 'order-fulfillment', name: 'Order Fulfillment', description: '', heat: 75 }
          ],
          mappedTo: ['lead-to-cash'],
          painPoints: ['Warehouse efficiency', 'Transportation costs', 'Order accuracy'],
          useCases: ['Inventory tracking', 'Route optimization', 'Order processing'],
          kpis: ['Warehouse utilization %', 'Transportation cost per unit', 'Order accuracy %'],
          adoptionStats: '73% adoption',
          metadataSummary: 'Logistics and fulfillment'
        },
        {
          id: 'service',
          name: 'Service',
          description: 'After-sales support and service management.',
          accentColor: '#FF9800',
          heat: 60,
          percent: 20,
          modules: [
            { id: 'after-sales-support', name: 'After-sales Support', description: '', heat: 60 },
            { id: 'warranty-management', name: 'Warranty Management', description: '', heat: 65 },
            { id: 'field-service-management', name: 'Field Service Management', description: '', heat: 55 }
          ],
          mappedTo: ['service-management'],
          painPoints: ['Service response time', 'Warranty processing', 'Field service efficiency'],
          useCases: ['Service ticket management', 'Warranty claims', 'Field service scheduling'],
          kpis: ['Service response time', 'Warranty cost %', 'Customer satisfaction'],
          adoptionStats: '68% adoption',
          metadataSummary: 'Customer service processes'
        }
      ]
    },
    sapChain: {
      id: 'sap-mfg',
      name: 'SAP Value Chain (MFG)',
      type: 'sap',
      industry: 'MFG',
      blocks: [
        {
          id: 'plan-to-produce',
          name: 'Plan to Produce',
          description: 'Integrated business planning and manufacturing execution.',
          accentColor: '#007CC2',
          heat: 85,
          percent: 20,
          modules: [
            { id: 'ibp', name: 'Integrated Business Planning (IBP)', description: '', heat: 85 },
            { id: 'mes', name: 'Manufacturing Execution (MES)', description: '', heat: 80 }
          ],
          mappedTo: ['plan', 'make'],
          painPoints: ['Planning accuracy', 'Production execution', 'Real-time visibility'],
          useCases: ['Demand planning', 'Production scheduling', 'Real-time monitoring'],
          kpis: ['Planning accuracy %', 'Production efficiency', 'Real-time data availability'],
          adoptionStats: '82% adoption',
          metadataSummary: 'SAP planning and execution'
        },
        {
          id: 'source-to-pay',
          name: 'Source to Pay',
          description: 'Supplier collaboration and spend management.',
          accentColor: '#FF6B35',
          heat: 78,
          percent: 20,
          modules: [
            { id: 'ariba', name: 'Supplier Network Collaboration (Ariba)', description: '', heat: 78 },
            { id: 'spend-management', name: 'Spend Management', description: '', heat: 75 }
          ],
          mappedTo: ['source'],
          painPoints: ['Supplier collaboration', 'Spend visibility', 'Process efficiency'],
          useCases: ['Supplier onboarding', 'Purchase requisition', 'Invoice processing'],
          kpis: ['Supplier collaboration score', 'Spend under management %', 'Process efficiency'],
          adoptionStats: '76% adoption',
          metadataSummary: 'SAP procurement processes'
        },
        {
          id: 'design-to-operate',
          name: 'Design to Operate',
          description: 'Asset management and quality control.',
          accentColor: '#4CAF50',
          heat: 88,
          percent: 20,
          modules: [
            { id: 'eam', name: 'Asset Management (EAM)', description: '', heat: 88 },
            { id: 'quality-control', name: 'Quality Control', description: '', heat: 85 }
          ],
          mappedTo: ['make'],
          painPoints: ['Asset performance', 'Quality management', 'Maintenance optimization'],
          useCases: ['Asset monitoring', 'Quality inspection', 'Preventive maintenance'],
          kpis: ['Asset uptime %', 'Quality yield %', 'Maintenance efficiency'],
          adoptionStats: '86% adoption',
          metadataSummary: 'SAP asset and quality management'
        },
        {
          id: 'lead-to-cash',
          name: 'Lead to Cash',
          description: 'Order management and logistics execution.',
          accentColor: '#9C27B0',
          heat: 72,
          percent: 20,
          modules: [
            { id: 'sd', name: 'Order Management (SD)', description: '', heat: 72 },
            { id: 'le', name: 'Logistics Execution (LE)', description: '', heat: 70 }
          ],
          mappedTo: ['deliver'],
          painPoints: ['Order processing', 'Logistics efficiency', 'Customer satisfaction'],
          useCases: ['Sales order management', 'Warehouse operations', 'Transportation'],
          kpis: ['Order processing time', 'Logistics cost %', 'Customer satisfaction score'],
          adoptionStats: '71% adoption',
          metadataSummary: 'SAP sales and logistics'
        },
        {
          id: 'service-management',
          name: 'Service Management',
          description: 'Field service and warranty management.',
          accentColor: '#FF9800',
          heat: 65,
          percent: 20,
          modules: [
            { id: 'field-service', name: 'Field Service Management', description: '', heat: 65 },
            { id: 'warranty-processing', name: 'Warranty Processing', description: '', heat: 68 }
          ],
          mappedTo: ['service'],
          painPoints: ['Service delivery', 'Warranty processing', 'Customer experience'],
          useCases: ['Service ticket management', 'Warranty claims', 'Field service scheduling'],
          kpis: ['Service response time', 'Warranty cost %', 'Customer satisfaction'],
          adoptionStats: '66% adoption',
          metadataSummary: 'SAP service management'
        }
      ]
    }
  },
  {
    industry: 'CRL',
    label: 'Retail & Consumer Products',
    industryChain: {
      id: 'industry-crl',
      name: 'Retail & Consumer Products Value Chain',
      type: 'industry',
      industry: 'CRL',
      blocks: [
        {
          id: 'plan',
          name: 'Plan',
          description: 'Assortment planning and demand forecasting.',
          accentColor: '#007CC2',
          heat: 85,
          percent: 16.67,
          modules: [
            { id: 'assortment-planning', name: 'Assortment Planning', description: '', heat: 85 },
            { id: 'demand-forecasting', name: 'Demand Forecasting', description: '', heat: 80 },
            { id: 'promotion-planning', name: 'Promotion Planning', description: '', heat: 75 }
          ],
          mappedTo: ['plan-to-inventory'],
          painPoints: ['Assortment optimization', 'Forecast accuracy', 'Promotion effectiveness'],
          useCases: ['Product assortment planning', 'Demand forecasting', 'Promotion planning'],
          kpis: ['Assortment performance', 'Forecast accuracy %', 'Promotion ROI'],
          adoptionStats: '88% adoption',
          metadataSummary: 'Retail planning processes'
        },
        {
          id: 'source',
          name: 'Source',
          description: 'Supplier negotiations and merchandise sourcing.',
          accentColor: '#FF6B35',
          heat: 78,
          percent: 16.67,
          modules: [
            { id: 'supplier-negotiations', name: 'Supplier Negotiations', description: '', heat: 78 },
            { id: 'procurement', name: 'Procurement', description: '', heat: 75 },
            { id: 'merchandise-sourcing', name: 'Merchandise Sourcing', description: '', heat: 80 }
          ],
          mappedTo: ['source-to-pay'],
          painPoints: ['Supplier relationships', 'Cost optimization', 'Product availability'],
          useCases: ['Supplier evaluation', 'Purchase order management', 'Product sourcing'],
          kpis: ['Supplier performance', 'Cost savings %', 'Product availability %'],
          adoptionStats: '81% adoption',
          metadataSummary: 'Retail sourcing processes'
        },
        {
          id: 'buy',
          name: 'Buy',
          description: 'Inventory management and merchandise allocation.',
          accentColor: '#4CAF50',
          heat: 82,
          percent: 16.67,
          modules: [
            { id: 'inventory-management', name: 'Inventory Management', description: '', heat: 82 },
            { id: 'merchandise-allocation', name: 'Merchandise Allocation', description: '', heat: 78 }
          ],
          mappedTo: ['plan-to-inventory'],
          painPoints: ['Inventory optimization', 'Allocation efficiency', 'Stock availability'],
          useCases: ['Inventory tracking', 'Store allocation', 'Stock replenishment'],
          kpis: ['Inventory turnover', 'Allocation accuracy %', 'Stock availability %'],
          adoptionStats: '85% adoption',
          metadataSummary: 'Retail buying processes'
        },
        {
          id: 'deliver',
          name: 'Deliver',
          description: 'Distribution, logistics, and store fulfillment.',
          accentColor: '#9C27B0',
          heat: 75,
          percent: 16.67,
          modules: [
            { id: 'distribution-logistics', name: 'Distribution & Logistics', description: '', heat: 75 },
            { id: 'store-fulfillment', name: 'Store Fulfillment', description: '', heat: 78 },
            { id: 'ecommerce-fulfillment', name: 'E-commerce Fulfillment', description: '', heat: 80 }
          ],
          mappedTo: ['order-to-cash'],
          painPoints: ['Distribution efficiency', 'Store fulfillment', 'E-commerce delivery'],
          useCases: ['Warehouse operations', 'Store delivery', 'Online order fulfillment'],
          kpis: ['Distribution cost %', 'Store fulfillment time', 'E-commerce delivery time'],
          adoptionStats: '77% adoption',
          metadataSummary: 'Retail delivery processes'
        },
        {
          id: 'sell',
          name: 'Sell',
          description: 'Store operations and omnichannel sales.',
          accentColor: '#FF9800',
          heat: 88,
          percent: 16.67,
          modules: [
            { id: 'store-operations', name: 'Store Operations', description: '', heat: 88 },
            { id: 'omnichannel-sales', name: 'Omnichannel Sales', description: '', heat: 85 },
            { id: 'pos-management', name: 'POS Management', description: '', heat: 90 }
          ],
          mappedTo: ['order-to-cash'],
          painPoints: ['Store performance', 'Omnichannel integration', 'POS efficiency'],
          useCases: ['Store management', 'Cross-channel sales', 'Point of sale operations'],
          kpis: ['Store sales per sq ft', 'Omnichannel conversion %', 'POS transaction time'],
          adoptionStats: '87% adoption',
          metadataSummary: 'Retail sales processes'
        },
        {
          id: 'service',
          name: 'Service',
          description: 'Returns management and customer support.',
          accentColor: '#E91E63',
          heat: 70,
          percent: 16.67,
          modules: [
            { id: 'returns-management', name: 'Returns Management', description: '', heat: 70 },
            { id: 'customer-support', name: 'Customer Support', description: '', heat: 75 },
            { id: 'loyalty-programs', name: 'Loyalty Programs', description: '', heat: 80 }
          ],
          mappedTo: ['return-to-restock', 'lead-to-loyalty'],
          painPoints: ['Returns processing', 'Customer satisfaction', 'Loyalty program effectiveness'],
          useCases: ['Return processing', 'Customer service', 'Loyalty management'],
          kpis: ['Return rate %', 'Customer satisfaction score', 'Loyalty program engagement'],
          adoptionStats: '75% adoption',
          metadataSummary: 'Retail service processes'
        }
      ]
    },
    sapChain: {
      id: 'sap-crl',
      name: 'SAP Value Chain (CRL)',
      type: 'sap',
      industry: 'CRL',
      blocks: [
        {
          id: 'plan-to-inventory',
          name: 'Plan to Inventory',
          description: 'Assortment management and inventory optimization.',
          accentColor: '#007CC2',
          heat: 86,
          percent: 20,
          modules: [
            { id: 'assortment-management', name: 'Assortment Management', description: '', heat: 86 },
            { id: 'inventory-optimization', name: 'Inventory Optimization', description: '', heat: 82 }
          ],
          mappedTo: ['plan', 'buy'],
          painPoints: ['Assortment planning', 'Inventory optimization', 'Demand forecasting'],
          useCases: ['Product assortment planning', 'Inventory management', 'Demand forecasting'],
          kpis: ['Assortment performance', 'Inventory turnover', 'Forecast accuracy %'],
          adoptionStats: '84% adoption',
          metadataSummary: 'SAP retail planning'
        },
        {
          id: 'source-to-pay',
          name: 'Source to Pay',
          description: 'Merchandise procurement and supplier collaboration.',
          accentColor: '#FF6B35',
          heat: 79,
          percent: 20,
          modules: [
            { id: 'merchandise-procurement', name: 'Merchandise Procurement', description: '', heat: 79 },
            { id: 'ariba', name: 'Supplier Collaboration (Ariba)', description: '', heat: 76 }
          ],
          mappedTo: ['source'],
          painPoints: ['Supplier collaboration', 'Procurement efficiency', 'Cost optimization'],
          useCases: ['Supplier management', 'Purchase order processing', 'Cost analysis'],
          kpis: ['Supplier performance', 'Procurement efficiency', 'Cost savings %'],
          adoptionStats: '77% adoption',
          metadataSummary: 'SAP retail procurement'
        },
        {
          id: 'order-to-cash',
          name: 'Order to Cash',
          description: 'Sales order management and omnichannel commerce.',
          accentColor: '#9C27B0',
          heat: 83,
          percent: 20,
          modules: [
            { id: 'sales-order-management', name: 'Sales Order Management', description: '', heat: 83 },
            { id: 'omnichannel-commerce', name: 'Omnichannel Commerce', description: '', heat: 85 }
          ],
          mappedTo: ['deliver', 'sell'],
          painPoints: ['Order processing', 'Omnichannel integration', 'Customer experience'],
          useCases: ['Sales order processing', 'Cross-channel sales', 'Customer management'],
          kpis: ['Order processing time', 'Omnichannel conversion %', 'Customer satisfaction'],
          adoptionStats: '84% adoption',
          metadataSummary: 'SAP retail sales'
        },
        {
          id: 'return-to-restock',
          name: 'Return to Restock',
          description: 'Returns processing and reverse logistics.',
          accentColor: '#E91E63',
          heat: 72,
          percent: 20,
          modules: [
            { id: 'returns-processing', name: 'Returns Processing', description: '', heat: 72 },
            { id: 'reverse-logistics', name: 'Reverse Logistics', description: '', heat: 70 }
          ],
          mappedTo: ['service'],
          painPoints: ['Returns processing', 'Reverse logistics', 'Inventory reconciliation'],
          useCases: ['Return authorization', 'Return processing', 'Inventory restocking'],
          kpis: ['Return processing time', 'Reverse logistics cost', 'Restock efficiency'],
          adoptionStats: '71% adoption',
          metadataSummary: 'SAP retail returns'
        },
        {
          id: 'lead-to-loyalty',
          name: 'Lead to Loyalty',
          description: 'Customer experience and loyalty programs.',
          accentColor: '#FF9800',
          heat: 78,
          percent: 20,
          modules: [
            { id: 'customer-experience', name: 'Customer Experience (CX)', description: '', heat: 78 },
            { id: 'loyalty-retention', name: 'Loyalty & Retention Programs', description: '', heat: 80 }
          ],
          mappedTo: ['service'],
          painPoints: ['Customer experience', 'Loyalty program management', 'Customer retention'],
          useCases: ['Customer service', 'Loyalty program management', 'Customer analytics'],
          kpis: ['Customer satisfaction score', 'Loyalty program engagement', 'Customer retention %'],
          adoptionStats: '79% adoption',
          metadataSummary: 'SAP retail customer experience'
        }
      ]
    }
  },
  {
    industry: 'SURE',
    label: 'Services, Utilities & Energy',
    industryChain: {
      id: 'industry-sure',
      name: 'Services, Utilities & Energy Value Chain',
      type: 'industry',
      industry: 'SURE',
      blocks: [
        {
          id: 'plan',
          name: 'Plan',
          description: 'Demand management and asset investment planning.',
          accentColor: '#007CC2',
          heat: 82,
          percent: 16.67,
          modules: [
            { id: 'demand-management', name: 'Demand Management', description: '', heat: 82 },
            { id: 'asset-investment-planning', name: 'Asset Investment Planning', description: '', heat: 85 },
            { id: 'network-planning', name: 'Network Planning', description: '', heat: 78 }
          ],
          mappedTo: ['plan-to-operate'],
          painPoints: ['Demand forecasting', 'Asset investment decisions', 'Network optimization'],
          useCases: ['Load forecasting', 'Capital planning', 'Network design'],
          kpis: ['Forecast accuracy %', 'Asset utilization %', 'Network efficiency'],
          adoptionStats: '84% adoption',
          metadataSummary: 'Utility planning processes'
        },
        {
          id: 'source',
          name: 'Source',
          description: 'Vendor management and materials procurement.',
          accentColor: '#FF6B35',
          heat: 75,
          percent: 16.67,
          modules: [
            { id: 'vendor-management', name: 'Vendor Management', description: '', heat: 75 },
            { id: 'materials-procurement', name: 'Materials Procurement', description: '', heat: 78 },
            { id: 'service-procurement', name: 'Service Procurement', description: '', heat: 72 }
          ],
          mappedTo: ['source-to-pay'],
          painPoints: ['Vendor performance', 'Cost optimization', 'Service quality'],
          useCases: ['Vendor evaluation', 'Contract management', 'Service procurement'],
          kpis: ['Vendor performance score', 'Cost savings %', 'Service quality score'],
          adoptionStats: '76% adoption',
          metadataSummary: 'Utility sourcing processes'
        },
        {
          id: 'build',
          name: 'Build',
          description: 'Asset construction and project management.',
          accentColor: '#4CAF50',
          heat: 88,
          percent: 16.67,
          modules: [
            { id: 'asset-construction', name: 'Asset Construction', description: '', heat: 88 },
            { id: 'project-management', name: 'Project Management', description: '', heat: 85 },
            { id: 'quality-assurance', name: 'Quality Assurance', description: '', heat: 82 }
          ],
          mappedTo: ['design-to-operate'],
          painPoints: ['Project delivery', 'Cost control', 'Quality management'],
          useCases: ['Construction management', 'Project tracking', 'Quality control'],
          kpis: ['Project completion time', 'Cost variance %', 'Quality score'],
          adoptionStats: '86% adoption',
          metadataSummary: 'Utility construction processes'
        },
        {
          id: 'operate',
          name: 'Operate',
          description: 'Asset operations and maintenance.',
          accentColor: '#9C27B0',
          heat: 90,
          percent: 16.67,
          modules: [
            { id: 'asset-operations', name: 'Asset Operations', description: '', heat: 90 },
            { id: 'maintenance-management', name: 'Maintenance Management', description: '', heat: 88 },
            { id: 'performance-monitoring', name: 'Performance Monitoring', description: '', heat: 85 }
          ],
          mappedTo: ['design-to-operate'],
          painPoints: ['Operational efficiency', 'Maintenance optimization', 'Performance monitoring'],
          useCases: ['Asset monitoring', 'Preventive maintenance', 'Performance analysis'],
          kpis: ['Asset uptime %', 'Maintenance cost', 'Performance efficiency'],
          adoptionStats: '89% adoption',
          metadataSummary: 'Utility operations processes'
        },
        {
          id: 'deliver',
          name: 'Deliver',
          description: 'Service delivery and customer management.',
          accentColor: '#FF9800',
          heat: 78,
          percent: 16.67,
          modules: [
            { id: 'service-delivery', name: 'Service Delivery', description: '', heat: 78 },
            { id: 'customer-management', name: 'Customer Management', description: '', heat: 82 },
            { id: 'billing-management', name: 'Billing Management', description: '', heat: 85 }
          ],
          mappedTo: ['lead-to-cash'],
          painPoints: ['Service quality', 'Customer satisfaction', 'Billing accuracy'],
          useCases: ['Service provisioning', 'Customer support', 'Billing processing'],
          kpis: ['Service quality score', 'Customer satisfaction', 'Billing accuracy %'],
          adoptionStats: '81% adoption',
          metadataSummary: 'Utility service delivery'
        },
        {
          id: 'service',
          name: 'Service',
          description: 'Customer service and support.',
          accentColor: '#E91E63',
          heat: 72,
          percent: 16.67,
          modules: [
            { id: 'customer-service', name: 'Customer Service', description: '', heat: 72 },
            { id: 'field-service', name: 'Field Service', description: '', heat: 75 },
            { id: 'support-management', name: 'Support Management', description: '', heat: 70 }
          ],
          mappedTo: ['service-management'],
          painPoints: ['Service response time', 'Field service efficiency', 'Support quality'],
          useCases: ['Customer support', 'Field service scheduling', 'Issue resolution'],
          kpis: ['Service response time', 'Field service efficiency', 'Support satisfaction'],
          adoptionStats: '72% adoption',
          metadataSummary: 'Utility service processes'
        }
      ]
    },
    sapChain: {
      id: 'sap-sure',
      name: 'SAP Value Chain (SURE)',
      type: 'sap',
      industry: 'SURE',
      blocks: [
        {
          id: 'plan-to-operate',
          name: 'Plan to Operate',
          description: 'Integrated planning and operations management.',
          accentColor: '#007CC2',
          heat: 86,
          percent: 20,
          modules: [
            { id: 'integrated-planning', name: 'Integrated Planning', description: '', heat: 86 },
            { id: 'operations-management', name: 'Operations Management', description: '', heat: 88 }
          ],
          mappedTo: ['plan', 'operate'],
          painPoints: ['Planning accuracy', 'Operational efficiency', 'Real-time visibility'],
          useCases: ['Load forecasting', 'Asset operations', 'Performance monitoring'],
          kpis: ['Planning accuracy %', 'Operational efficiency', 'Real-time data availability'],
          adoptionStats: '87% adoption',
          metadataSummary: 'SAP utility planning and operations'
        },
        {
          id: 'source-to-pay',
          name: 'Source to Pay',
          description: 'Vendor collaboration and procurement management.',
          accentColor: '#FF6B35',
          heat: 77,
          percent: 20,
          modules: [
            { id: 'vendor-collaboration', name: 'Vendor Collaboration', description: '', heat: 77 },
            { id: 'procurement-management', name: 'Procurement Management', description: '', heat: 75 }
          ],
          mappedTo: ['source'],
          painPoints: ['Vendor collaboration', 'Procurement efficiency', 'Cost optimization'],
          useCases: ['Vendor management', 'Purchase order processing', 'Contract management'],
          kpis: ['Vendor performance', 'Procurement efficiency', 'Cost savings %'],
          adoptionStats: '76% adoption',
          metadataSummary: 'SAP utility procurement'
        },
        {
          id: 'design-to-operate',
          name: 'Design to Operate',
          description: 'Asset lifecycle management and operations.',
          accentColor: '#4CAF50',
          heat: 89,
          percent: 20,
          modules: [
            { id: 'asset-lifecycle', name: 'Asset Lifecycle Management', description: '', heat: 89 },
            { id: 'operations-execution', name: 'Operations Execution', description: '', heat: 87 }
          ],
          mappedTo: ['build', 'operate'],
          painPoints: ['Asset performance', 'Lifecycle management', 'Operational efficiency'],
          useCases: ['Asset construction', 'Operations monitoring', 'Maintenance management'],
          kpis: ['Asset uptime %', 'Lifecycle cost', 'Operational efficiency'],
          adoptionStats: '88% adoption',
          metadataSummary: 'SAP utility asset management'
        },
        {
          id: 'lead-to-cash',
          name: 'Lead to Cash',
          description: 'Customer management and billing.',
          accentColor: '#FF9800',
          heat: 80,
          percent: 20,
          modules: [
            { id: 'customer-management', name: 'Customer Management', description: '', heat: 80 },
            { id: 'billing-management', name: 'Billing Management', description: '', heat: 83 }
          ],
          mappedTo: ['deliver'],
          painPoints: ['Customer experience', 'Billing accuracy', 'Service delivery'],
          useCases: ['Customer onboarding', 'Billing processing', 'Service provisioning'],
          kpis: ['Customer satisfaction', 'Billing accuracy %', 'Service delivery time'],
          adoptionStats: '81% adoption',
          metadataSummary: 'SAP utility customer management'
        },
        {
          id: 'service-management',
          name: 'Service Management',
          description: 'Customer service and field service management.',
          accentColor: '#E91E63',
          heat: 74,
          percent: 20,
          modules: [
            { id: 'customer-service', name: 'Customer Service', description: '', heat: 74 },
            { id: 'field-service', name: 'Field Service Management', description: '', heat: 76 }
          ],
          mappedTo: ['service'],
          painPoints: ['Service delivery', 'Field service efficiency', 'Customer satisfaction'],
          useCases: ['Customer support', 'Field service scheduling', 'Issue resolution'],
          kpis: ['Service response time', 'Field service efficiency', 'Customer satisfaction'],
          adoptionStats: '75% adoption',
          metadataSummary: 'SAP utility service management'
        }
      ]
    }
  },
  {
    industry: 'FS',
    label: 'Financial Services',
    industryChain: {
      id: 'industry-fs',
      name: 'Financial Services Value Chain',
      type: 'industry',
      industry: 'FS',
      blocks: [
        {
          id: 'plan',
          name: 'Plan',
          description: 'Risk management and portfolio planning.',
          accentColor: '#007CC2',
          heat: 85,
          percent: 16.67,
          modules: [
            { id: 'risk-management', name: 'Risk Management', description: '', heat: 85 },
            { id: 'portfolio-planning', name: 'Portfolio Planning', description: '', heat: 82 },
            { id: 'compliance-planning', name: 'Compliance Planning', description: '', heat: 88 }
          ],
          mappedTo: ['plan-to-risk'],
          painPoints: ['Risk assessment', 'Portfolio optimization', 'Regulatory compliance'],
          useCases: ['Risk modeling', 'Portfolio analysis', 'Compliance monitoring'],
          kpis: ['Risk-adjusted returns', 'Portfolio performance', 'Compliance score'],
          adoptionStats: '87% adoption',
          metadataSummary: 'Financial planning processes'
        },
        {
          id: 'source',
          name: 'Source',
          description: 'Capital sourcing and funding management.',
          accentColor: '#FF6B35',
          heat: 78,
          percent: 16.67,
          modules: [
            { id: 'capital-sourcing', name: 'Capital Sourcing', description: '', heat: 78 },
            { id: 'funding-management', name: 'Funding Management', description: '', heat: 82 },
            { id: 'liquidity-management', name: 'Liquidity Management', description: '', heat: 80 }
          ],
          mappedTo: ['source-to-fund'],
          painPoints: ['Capital availability', 'Funding costs', 'Liquidity optimization'],
          useCases: ['Capital raising', 'Funding allocation', 'Liquidity planning'],
          kpis: ['Capital cost %', 'Funding efficiency', 'Liquidity ratio'],
          adoptionStats: '80% adoption',
          metadataSummary: 'Financial sourcing processes'
        },
        {
          id: 'originate',
          name: 'Originate',
          description: 'Loan origination and product development.',
          accentColor: '#4CAF50',
          heat: 88,
          percent: 16.67,
          modules: [
            { id: 'loan-origination', name: 'Loan Origination', description: '', heat: 88 },
            { id: 'product-development', name: 'Product Development', description: '', heat: 85 },
            { id: 'underwriting', name: 'Underwriting', description: '', heat: 90 }
          ],
          mappedTo: ['originate-to-serve'],
          painPoints: ['Origination efficiency', 'Product innovation', 'Underwriting accuracy'],
          useCases: ['Loan processing', 'Product design', 'Credit assessment'],
          kpis: ['Origination time', 'Product adoption rate', 'Underwriting accuracy %'],
          adoptionStats: '89% adoption',
          metadataSummary: 'Financial origination processes'
        },
        {
          id: 'serve',
          name: 'Serve',
          description: 'Customer service and account management.',
          accentColor: '#9C27B0',
          heat: 82,
          percent: 16.67,
          modules: [
            { id: 'customer-service', name: 'Customer Service', description: '', heat: 82 },
            { id: 'account-management', name: 'Account Management', description: '', heat: 85 },
            { id: 'transaction-processing', name: 'Transaction Processing', description: '', heat: 88 }
          ],
          mappedTo: ['originate-to-serve'],
          painPoints: ['Service quality', 'Account management', 'Transaction efficiency'],
          useCases: ['Customer support', 'Account maintenance', 'Payment processing'],
          kpis: ['Customer satisfaction', 'Account retention %', 'Transaction success rate'],
          adoptionStats: '85% adoption',
          metadataSummary: 'Financial service processes'
        },
        {
          id: 'collect',
          name: 'Collect',
          description: 'Collections and recovery management.',
          accentColor: '#FF9800',
          heat: 75,
          percent: 16.67,
          modules: [
            { id: 'collections', name: 'Collections', description: '', heat: 75 },
            { id: 'recovery-management', name: 'Recovery Management', description: '', heat: 72 },
            { id: 'debt-management', name: 'Debt Management', description: '', heat: 78 }
          ],
          mappedTo: ['collect-to-recover'],
          painPoints: ['Collection efficiency', 'Recovery rates', 'Debt management'],
          useCases: ['Payment collection', 'Recovery strategies', 'Debt restructuring'],
          kpis: ['Collection rate %', 'Recovery efficiency', 'Debt resolution time'],
          adoptionStats: '75% adoption',
          metadataSummary: 'Financial collection processes'
        },
        {
          id: 'report',
          name: 'Report',
          description: 'Financial reporting and analytics.',
          accentColor: '#E91E63',
          heat: 90,
          percent: 16.67,
          modules: [
            { id: 'financial-reporting', name: 'Financial Reporting', description: '', heat: 90 },
            { id: 'regulatory-reporting', name: 'Regulatory Reporting', description: '', heat: 88 },
            { id: 'analytics', name: 'Analytics', description: '', heat: 85 }
          ],
          mappedTo: ['report-to-comply'],
          painPoints: ['Reporting accuracy', 'Regulatory compliance', 'Data analytics'],
          useCases: ['Financial statements', 'Regulatory filings', 'Performance analytics'],
          kpis: ['Reporting accuracy %', 'Compliance score', 'Analytics insights'],
          adoptionStats: '89% adoption',
          metadataSummary: 'Financial reporting processes'
        }
      ]
    },
    sapChain: {
      id: 'sap-fs',
      name: 'SAP Value Chain (FS)',
      type: 'sap',
      industry: 'FS',
      blocks: [
        {
          id: 'plan-to-risk',
          name: 'Plan to Risk',
          description: 'Risk management and portfolio planning.',
          accentColor: '#007CC2',
          heat: 86,
          percent: 20,
          modules: [
            { id: 'risk-management', name: 'Risk Management', description: '', heat: 86 },
            { id: 'portfolio-planning', name: 'Portfolio Planning', description: '', heat: 84 }
          ],
          mappedTo: ['plan'],
          painPoints: ['Risk assessment', 'Portfolio optimization', 'Regulatory compliance'],
          useCases: ['Risk modeling', 'Portfolio analysis', 'Compliance monitoring'],
          kpis: ['Risk-adjusted returns', 'Portfolio performance', 'Compliance score'],
          adoptionStats: '85% adoption',
          metadataSummary: 'SAP financial planning'
        },
        {
          id: 'source-to-fund',
          name: 'Source to Fund',
          description: 'Capital sourcing and funding management.',
          accentColor: '#FF6B35',
          heat: 80,
          percent: 20,
          modules: [
            { id: 'capital-sourcing', name: 'Capital Sourcing', description: '', heat: 80 },
            { id: 'funding-management', name: 'Funding Management', description: '', heat: 78 }
          ],
          mappedTo: ['source'],
          painPoints: ['Capital availability', 'Funding costs', 'Liquidity optimization'],
          useCases: ['Capital raising', 'Funding allocation', 'Liquidity planning'],
          kpis: ['Capital cost %', 'Funding efficiency', 'Liquidity ratio'],
          adoptionStats: '79% adoption',
          metadataSummary: 'SAP financial sourcing'
        },
        {
          id: 'originate-to-serve',
          name: 'Originate to Serve',
          description: 'Loan origination and customer service.',
          accentColor: '#4CAF50',
          heat: 87,
          percent: 20,
          modules: [
            { id: 'loan-origination', name: 'Loan Origination', description: '', heat: 87 },
            { id: 'customer-service', name: 'Customer Service', description: '', heat: 85 }
          ],
          mappedTo: ['originate', 'serve'],
          painPoints: ['Origination efficiency', 'Service quality', 'Customer experience'],
          useCases: ['Loan processing', 'Customer support', 'Account management'],
          kpis: ['Origination time', 'Customer satisfaction', 'Service efficiency'],
          adoptionStats: '86% adoption',
          metadataSummary: 'SAP financial origination and service'
        },
        {
          id: 'collect-to-recover',
          name: 'Collect to Recover',
          description: 'Collections and recovery management.',
          accentColor: '#FF9800',
          heat: 76,
          percent: 20,
          modules: [
            { id: 'collections', name: 'Collections', description: '', heat: 76 },
            { id: 'recovery-management', name: 'Recovery Management', description: '', heat: 74 }
          ],
          mappedTo: ['collect'],
          painPoints: ['Collection efficiency', 'Recovery rates', 'Debt management'],
          useCases: ['Payment collection', 'Recovery strategies', 'Debt restructuring'],
          kpis: ['Collection rate %', 'Recovery efficiency', 'Debt resolution time'],
          adoptionStats: '75% adoption',
          metadataSummary: 'SAP financial collections'
        },
        {
          id: 'report-to-comply',
          name: 'Report to Comply',
          description: 'Financial reporting and regulatory compliance.',
          accentColor: '#E91E63',
          heat: 89,
          percent: 20,
          modules: [
            { id: 'financial-reporting', name: 'Financial Reporting', description: '', heat: 89 },
            { id: 'regulatory-compliance', name: 'Regulatory Compliance', description: '', heat: 87 }
          ],
          mappedTo: ['report'],
          painPoints: ['Reporting accuracy', 'Regulatory compliance', 'Data analytics'],
          useCases: ['Financial statements', 'Regulatory filings', 'Performance analytics'],
          kpis: ['Reporting accuracy %', 'Compliance score', 'Analytics insights'],
          adoptionStats: '88% adoption',
          metadataSummary: 'SAP financial reporting and compliance'
        }
      ]
    }
  },
  {
    industry: 'HIL',
    label: 'Healthcare & Life Sciences',
    industryChain: {
      id: 'industry-hil',
      name: 'Healthcare & Life Sciences Value Chain',
      type: 'industry',
      industry: 'HIL',
      blocks: [
        {
          id: 'discover',
          name: 'Discover',
          description: 'Research and drug discovery.',
          accentColor: '#007CC2',
          heat: 85,
          percent: 16.67,
          modules: [
            { id: 'research', name: 'Research', description: '', heat: 85 },
            { id: 'drug-discovery', name: 'Drug Discovery', description: '', heat: 88 },
            { id: 'clinical-trials', name: 'Clinical Trials', description: '', heat: 82 }
          ],
          mappedTo: ['discover-to-develop'],
          painPoints: ['Research efficiency', 'Drug discovery success', 'Clinical trial management'],
          useCases: ['Research collaboration', 'Drug screening', 'Trial management'],
          kpis: ['Research productivity', 'Discovery success rate', 'Trial completion %'],
          adoptionStats: '86% adoption',
          metadataSummary: 'Healthcare discovery processes'
        },
        {
          id: 'develop',
          name: 'Develop',
          description: 'Drug development and regulatory approval.',
          accentColor: '#FF6B35',
          heat: 88,
          percent: 16.67,
          modules: [
            { id: 'drug-development', name: 'Drug Development', description: '', heat: 88 },
            { id: 'regulatory-approval', name: 'Regulatory Approval', description: '', heat: 85 },
            { id: 'manufacturing-setup', name: 'Manufacturing Setup', description: '', heat: 82 }
          ],
          mappedTo: ['discover-to-develop'],
          painPoints: ['Development timeline', 'Regulatory compliance', 'Manufacturing readiness'],
          useCases: ['Development planning', 'Regulatory submissions', 'Manufacturing preparation'],
          kpis: ['Development time', 'Approval success rate', 'Manufacturing readiness'],
          adoptionStats: '85% adoption',
          metadataSummary: 'Healthcare development processes'
        },
        {
          id: 'manufacture',
          name: 'Manufacture',
          description: 'Drug manufacturing and quality control.',
          accentColor: '#4CAF50',
          heat: 90,
          percent: 16.67,
          modules: [
            { id: 'drug-manufacturing', name: 'Drug Manufacturing', description: '', heat: 90 },
            { id: 'quality-control', name: 'Quality Control', description: '', heat: 92 },
            { id: 'supply-chain', name: 'Supply Chain', description: '', heat: 85 }
          ],
          mappedTo: ['manufacture-to-deliver'],
          painPoints: ['Manufacturing efficiency', 'Quality assurance', 'Supply chain management'],
          useCases: ['Production planning', 'Quality testing', 'Supply chain optimization'],
          kpis: ['Manufacturing yield %', 'Quality compliance', 'Supply chain efficiency'],
          adoptionStats: '89% adoption',
          metadataSummary: 'Healthcare manufacturing processes'
        },
        {
          id: 'deliver',
          name: 'Deliver',
          description: 'Distribution and logistics.',
          accentColor: '#9C27B0',
          heat: 78,
          percent: 16.67,
          modules: [
            { id: 'distribution', name: 'Distribution', description: '', heat: 78 },
            { id: 'logistics', name: 'Logistics', description: '', heat: 80 },
            { id: 'inventory-management', name: 'Inventory Management', description: '', heat: 75 }
          ],
          mappedTo: ['manufacture-to-deliver'],
          painPoints: ['Distribution efficiency', 'Logistics optimization', 'Inventory management'],
          useCases: ['Distribution planning', 'Logistics coordination', 'Inventory tracking'],
          kpis: ['Distribution time', 'Logistics cost', 'Inventory turnover'],
          adoptionStats: '78% adoption',
          metadataSummary: 'Healthcare delivery processes'
        },
        {
          id: 'prescribe',
          name: 'Prescribe',
          description: 'Prescription and patient care.',
          accentColor: '#FF9800',
          heat: 85,
          percent: 16.67,
          modules: [
            { id: 'prescription-management', name: 'Prescription Management', description: '', heat: 85 },
            { id: 'patient-care', name: 'Patient Care', description: '', heat: 88 },
            { id: 'clinical-decision-support', name: 'Clinical Decision Support', description: '', heat: 82 }
          ],
          mappedTo: ['prescribe-to-care'],
          painPoints: ['Prescription accuracy', 'Patient outcomes', 'Clinical decision making'],
          useCases: ['Prescription processing', 'Patient monitoring', 'Clinical support'],
          kpis: ['Prescription accuracy %', 'Patient outcomes', 'Clinical efficiency'],
          adoptionStats: '85% adoption',
          metadataSummary: 'Healthcare prescription processes'
        },
        {
          id: 'monitor',
          name: 'Monitor',
          description: 'Patient monitoring and outcomes tracking.',
          accentColor: '#E91E63',
          heat: 82,
          percent: 16.67,
          modules: [
            { id: 'patient-monitoring', name: 'Patient Monitoring', description: '', heat: 82 },
            { id: 'outcomes-tracking', name: 'Outcomes Tracking', description: '', heat: 85 },
            { id: 'safety-monitoring', name: 'Safety Monitoring', description: '', heat: 88 }
          ],
          mappedTo: ['prescribe-to-care'],
          painPoints: ['Patient monitoring', 'Outcomes measurement', 'Safety surveillance'],
          useCases: ['Patient tracking', 'Outcomes analysis', 'Safety reporting'],
          kpis: ['Monitoring compliance', 'Outcomes quality', 'Safety incidents'],
          adoptionStats: '85% adoption',
          metadataSummary: 'Healthcare monitoring processes'
        }
      ]
    },
    sapChain: {
      id: 'sap-hil',
      name: 'SAP Value Chain (HIL)',
      type: 'sap',
      industry: 'HIL',
      blocks: [
        {
          id: 'discover-to-develop',
          name: 'Discover to Develop',
          description: 'Research and drug development.',
          accentColor: '#007CC2',
          heat: 86,
          percent: 20,
          modules: [
            { id: 'research-management', name: 'Research Management', description: '', heat: 86 },
            { id: 'development-planning', name: 'Development Planning', description: '', heat: 84 }
          ],
          mappedTo: ['discover', 'develop'],
          painPoints: ['Research efficiency', 'Development timeline', 'Regulatory compliance'],
          useCases: ['Research collaboration', 'Development planning', 'Regulatory submissions'],
          kpis: ['Research productivity', 'Development time', 'Approval success rate'],
          adoptionStats: '85% adoption',
          metadataSummary: 'SAP healthcare discovery and development'
        },
        {
          id: 'manufacture-to-deliver',
          name: 'Manufacture to Deliver',
          description: 'Manufacturing and distribution.',
          accentColor: '#4CAF50',
          heat: 88,
          percent: 20,
          modules: [
            { id: 'manufacturing-execution', name: 'Manufacturing Execution', description: '', heat: 88 },
            { id: 'distribution-management', name: 'Distribution Management', description: '', heat: 85 }
          ],
          mappedTo: ['manufacture', 'deliver'],
          painPoints: ['Manufacturing efficiency', 'Quality assurance', 'Distribution optimization'],
          useCases: ['Production planning', 'Quality control', 'Distribution coordination'],
          kpis: ['Manufacturing yield %', 'Quality compliance', 'Distribution efficiency'],
          adoptionStats: '86% adoption',
          metadataSummary: 'SAP healthcare manufacturing and delivery'
        },
        {
          id: 'prescribe-to-care',
          name: 'Prescribe to Care',
          description: 'Prescription and patient care.',
          accentColor: '#FF9800',
          heat: 84,
          percent: 20,
          modules: [
            { id: 'prescription-management', name: 'Prescription Management', description: '', heat: 84 },
            { id: 'patient-care', name: 'Patient Care', description: '', heat: 86 }
          ],
          mappedTo: ['prescribe', 'monitor'],
          painPoints: ['Prescription accuracy', 'Patient outcomes', 'Clinical efficiency'],
          useCases: ['Prescription processing', 'Patient monitoring', 'Clinical support'],
          kpis: ['Prescription accuracy %', 'Patient outcomes', 'Clinical efficiency'],
          adoptionStats: '85% adoption',
          metadataSummary: 'SAP healthcare prescription and care'
        },
        {
          id: 'quality-to-comply',
          name: 'Quality to Comply',
          description: 'Quality management and regulatory compliance.',
          accentColor: '#E91E63',
          heat: 90,
          percent: 20,
          modules: [
            { id: 'quality-management', name: 'Quality Management', description: '', heat: 90 },
            { id: 'regulatory-compliance', name: 'Regulatory Compliance', description: '', heat: 88 }
          ],
          mappedTo: ['manufacture', 'monitor'],
          painPoints: ['Quality assurance', 'Regulatory compliance', 'Safety monitoring'],
          useCases: ['Quality control', 'Regulatory reporting', 'Safety surveillance'],
          kpis: ['Quality compliance %', 'Regulatory score', 'Safety incidents'],
          adoptionStats: '89% adoption',
          metadataSummary: 'SAP healthcare quality and compliance'
        },
        {
          id: 'insight-to-innovate',
          name: 'Insight to Innovate',
          description: 'Analytics and innovation management.',
          accentColor: '#9C27B0',
          heat: 82,
          percent: 20,
          modules: [
            { id: 'analytics', name: 'Analytics', description: '', heat: 82 },
            { id: 'innovation-management', name: 'Innovation Management', description: '', heat: 80 }
          ],
          mappedTo: ['discover', 'monitor'],
          painPoints: ['Data analytics', 'Innovation pipeline', 'Research insights'],
          useCases: ['Performance analytics', 'Innovation tracking', 'Research insights'],
          kpis: ['Analytics insights', 'Innovation pipeline', 'Research productivity'],
          adoptionStats: '81% adoption',
          metadataSummary: 'SAP healthcare analytics and innovation'
        }
      ]
    }
  },
  {
    industry: 'CMT',
    label: 'Communications, Media & Technology',
    industryChain: {
      id: 'industry-cmt',
      name: 'Communications, Media & Technology Value Chain',
      type: 'industry',
      industry: 'CMT',
      blocks: [
        {
          id: 'innovate',
          name: 'Innovate',
          description: 'Product innovation and R&D.',
          accentColor: '#007CC2',
          heat: 88,
          percent: 16.67,
          modules: [
            { id: 'product-innovation', name: 'Product Innovation', description: '', heat: 88 },
            { id: 'research-development', name: 'Research & Development', description: '', heat: 85 },
            { id: 'prototyping', name: 'Prototyping', description: '', heat: 82 }
          ],
          mappedTo: ['innovate-to-develop'],
          painPoints: ['Innovation speed', 'R&D efficiency', 'Prototype validation'],
          useCases: ['Product ideation', 'Research collaboration', 'Prototype testing'],
          kpis: ['Innovation pipeline', 'R&D productivity', 'Prototype success rate'],
          adoptionStats: '87% adoption',
          metadataSummary: 'Technology innovation processes'
        },
        {
          id: 'develop',
          name: 'Develop',
          description: 'Software development and engineering.',
          accentColor: '#FF6B35',
          heat: 90,
          percent: 16.67,
          modules: [
            { id: 'software-development', name: 'Software Development', description: '', heat: 90 },
            { id: 'engineering', name: 'Engineering', description: '', heat: 88 },
            { id: 'testing', name: 'Testing', description: '', heat: 85 }
          ],
          mappedTo: ['innovate-to-develop'],
          painPoints: ['Development speed', 'Code quality', 'Testing efficiency'],
          useCases: ['Agile development', 'Code review', 'Automated testing'],
          kpis: ['Development velocity', 'Code quality score', 'Test coverage %'],
          adoptionStats: '89% adoption',
          metadataSummary: 'Technology development processes'
        },
        {
          id: 'deploy',
          name: 'Deploy',
          description: 'Infrastructure deployment and operations.',
          accentColor: '#4CAF50',
          heat: 85,
          percent: 16.67,
          modules: [
            { id: 'infrastructure-deployment', name: 'Infrastructure Deployment', description: '', heat: 85 },
            { id: 'devops', name: 'DevOps', description: '', heat: 88 },
            { id: 'cloud-operations', name: 'Cloud Operations', description: '', heat: 82 }
          ],
          mappedTo: ['deploy-to-operate'],
          painPoints: ['Deployment efficiency', 'Infrastructure management', 'Cloud optimization'],
          useCases: ['CI/CD pipelines', 'Infrastructure automation', 'Cloud management'],
          kpis: ['Deployment frequency', 'Infrastructure uptime', 'Cloud cost optimization'],
          adoptionStats: '85% adoption',
          metadataSummary: 'Technology deployment processes'
        },
        {
          id: 'operate',
          name: 'Operate',
          description: 'Service operations and maintenance.',
          accentColor: '#9C27B0',
          heat: 87,
          percent: 16.67,
          modules: [
            { id: 'service-operations', name: 'Service Operations', description: '', heat: 87 },
            { id: 'maintenance', name: 'Maintenance', description: '', heat: 85 },
            { id: 'monitoring', name: 'Monitoring', description: '', heat: 90 }
          ],
          mappedTo: ['deploy-to-operate'],
          painPoints: ['Service availability', 'Maintenance efficiency', 'Performance monitoring'],
          useCases: ['Service management', 'Preventive maintenance', 'Performance monitoring'],
          kpis: ['Service uptime %', 'Maintenance efficiency', 'Performance metrics'],
          adoptionStats: '87% adoption',
          metadataSummary: 'Technology operations processes'
        },
        {
          id: 'deliver',
          name: 'Deliver',
          description: 'Content delivery and customer experience.',
          accentColor: '#FF9800',
          heat: 83,
          percent: 16.67,
          modules: [
            { id: 'content-delivery', name: 'Content Delivery', description: '', heat: 83 },
            { id: 'customer-experience', name: 'Customer Experience', description: '', heat: 85 },
            { id: 'digital-commerce', name: 'Digital Commerce', description: '', heat: 80 }
          ],
          mappedTo: ['deliver-to-monetize'],
          painPoints: ['Content delivery', 'Customer experience', 'Digital commerce'],
          useCases: ['Content management', 'UX optimization', 'E-commerce platforms'],
          kpis: ['Content delivery speed', 'Customer satisfaction', 'Conversion rate'],
          adoptionStats: '83% adoption',
          metadataSummary: 'Technology delivery processes'
        },
        {
          id: 'monetize',
          name: 'Monetize',
          description: 'Revenue generation and analytics.',
          accentColor: '#E91E63',
          heat: 80,
          percent: 16.67,
          modules: [
            { id: 'revenue-generation', name: 'Revenue Generation', description: '', heat: 80 },
            { id: 'analytics', name: 'Analytics', description: '', heat: 85 },
            { id: 'subscription-management', name: 'Subscription Management', description: '', heat: 82 }
          ],
          mappedTo: ['deliver-to-monetize'],
          painPoints: ['Revenue optimization', 'Data analytics', 'Subscription management'],
          useCases: ['Revenue tracking', 'Performance analytics', 'Subscription services'],
          kpis: ['Revenue growth %', 'Analytics insights', 'Subscription retention'],
          adoptionStats: '82% adoption',
          metadataSummary: 'Technology monetization processes'
        }
      ]
    },
    sapChain: {
      id: 'sap-cmt',
      name: 'SAP Value Chain (CMT)',
      type: 'sap',
      industry: 'CMT',
      blocks: [
        {
          id: 'innovate-to-develop',
          name: 'Innovate to Develop',
          description: 'Product innovation and development.',
          accentColor: '#007CC2',
          heat: 88,
          percent: 20,
          modules: [
            { id: 'innovation-management', name: 'Innovation Management', description: '', heat: 88 },
            { id: 'development-execution', name: 'Development Execution', description: '', heat: 86 }
          ],
          mappedTo: ['innovate', 'develop'],
          painPoints: ['Innovation speed', 'Development efficiency', 'Product quality'],
          useCases: ['Product ideation', 'Agile development', 'Quality assurance'],
          kpis: ['Innovation pipeline', 'Development velocity', 'Product quality score'],
          adoptionStats: '87% adoption',
          metadataSummary: 'SAP technology innovation and development'
        },
        {
          id: 'deploy-to-operate',
          name: 'Deploy to Operate',
          description: 'Infrastructure deployment and operations.',
          accentColor: '#4CAF50',
          heat: 86,
          percent: 20,
          modules: [
            { id: 'deployment-automation', name: 'Deployment Automation', description: '', heat: 86 },
            { id: 'operations-management', name: 'Operations Management', description: '', heat: 84 }
          ],
          mappedTo: ['deploy', 'operate'],
          painPoints: ['Deployment efficiency', 'Operations management', 'Service availability'],
          useCases: ['CI/CD automation', 'Service management', 'Performance monitoring'],
          kpis: ['Deployment frequency', 'Service uptime %', 'Operations efficiency'],
          adoptionStats: '85% adoption',
          metadataSummary: 'SAP technology deployment and operations'
        },
        {
          id: 'deliver-to-monetize',
          name: 'Deliver to Monetize',
          description: 'Content delivery and revenue generation.',
          accentColor: '#FF9800',
          heat: 82,
          percent: 20,
          modules: [
            { id: 'content-management', name: 'Content Management', description: '', heat: 82 },
            { id: 'revenue-management', name: 'Revenue Management', description: '', heat: 80 }
          ],
          mappedTo: ['deliver', 'monetize'],
          painPoints: ['Content delivery', 'Customer experience', 'Revenue optimization'],
          useCases: ['Content delivery', 'Customer experience', 'Revenue tracking'],
          kpis: ['Content delivery speed', 'Customer satisfaction', 'Revenue growth %'],
          adoptionStats: '81% adoption',
          metadataSummary: 'SAP technology delivery and monetization'
        },
        {
          id: 'insight-to-optimize',
          name: 'Insight to Optimize',
          description: 'Analytics and optimization.',
          accentColor: '#E91E63',
          heat: 84,
          percent: 20,
          modules: [
            { id: 'analytics-platform', name: 'Analytics Platform', description: '', heat: 84 },
            { id: 'optimization-engine', name: 'Optimization Engine', description: '', heat: 82 }
          ],
          mappedTo: ['operate', 'monetize'],
          painPoints: ['Data analytics', 'Performance optimization', 'Business insights'],
          useCases: ['Performance analytics', 'Business intelligence', 'Optimization strategies'],
          kpis: ['Analytics insights', 'Performance improvement', 'Business optimization'],
          adoptionStats: '83% adoption',
          metadataSummary: 'SAP technology analytics and optimization'
        },
        {
          id: 'scale-to-grow',
          name: 'Scale to Grow',
          description: 'Scalability and growth management.',
          accentColor: '#9C27B0',
          heat: 80,
          percent: 20,
          modules: [
            { id: 'scalability-management', name: 'Scalability Management', description: '', heat: 80 },
            { id: 'growth-strategy', name: 'Growth Strategy', description: '', heat: 78 }
          ],
          mappedTo: ['innovate', 'monetize'],
          painPoints: ['Scalability planning', 'Growth strategy', 'Market expansion'],
          useCases: ['Scalability planning', 'Growth analytics', 'Market expansion'],
          kpis: ['Scalability metrics', 'Growth rate %', 'Market expansion'],
          adoptionStats: '79% adoption',
          metadataSummary: 'SAP technology scalability and growth'
        }
      ]
    }
  }
]; 