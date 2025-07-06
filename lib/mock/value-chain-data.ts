import { ValueChain, ValueChainBlock, ProcessModule } from '../types/value-chain';

export const industryValueChain: ValueChain = {
  id: 'industry-mckinsey',
  name: 'McKinsey Value Chain',
  type: 'industry',
  blocks: [
    {
      id: 'research-development',
      name: 'Research & Development',
      description: 'Innovation and product development processes',
      accentColor: '#007CC2',
      heat: 85,
      mappedTo: ['lead-to-cash'],
      painPoints: ['Long development cycles', 'High R&D costs', 'Technology uncertainty'],
      useCases: ['Product innovation', 'Technology assessment', 'Patent management'],
      kpis: ['Time to market', 'R&D ROI', 'Patent portfolio size'],
      adoptionStats: '78% adoption',
      metadataSummary: 'High innovation focus',
      modules: [
        {
          id: 'product-innovation',
          name: 'Product Innovation',
          description: 'End-to-end product development lifecycle',
          heat: 90,
          painPoints: ['Market validation', 'Resource allocation', 'Cross-functional coordination'],
          useCases: ['MVP development', 'Market research', 'Prototype testing'],
          personas: ['Product Manager', 'R&D Engineer', 'UX Designer'],
          kpis: ['Innovation pipeline', 'Success rate', 'Time to market'],
          mappedTo: 'order-to-fulfill',
          demoVideoUrl: 'https://example.com/product-innovation-demo',
          sourceUrls: ['mckinsey.com', 'hbr.org'],
          sapProducts: ['SAP PLM', 'SAP S/4HANA'],
          opportunities: ['Automated market analysis', 'AI-driven insights', 'Collaborative platforms'],
          adoptionStats: '85% adoption',
          metadataSummary: 'Leading innovation practices'
        },
        {
          id: 'technology-assessment',
          name: 'Technology Assessment',
          description: 'Evaluation and selection of emerging technologies',
          heat: 75,
          painPoints: ['Technology complexity', 'Integration challenges', 'Vendor evaluation'],
          useCases: ['Technology roadmapping', 'Vendor assessment', 'Integration planning'],
          personas: ['CTO', 'Technology Architect', 'IT Manager'],
          kpis: ['Technology adoption rate', 'Integration success', 'ROI metrics'],
          mappedTo: 'procure-to-pay',
          sourceUrls: ['gartner.com', 'forrester.com'],
          sapProducts: ['SAP BTP', 'SAP Analytics Cloud'],
          opportunities: ['AI/ML integration', 'Cloud migration', 'Digital transformation'],
          adoptionStats: '72% adoption',
          metadataSummary: 'Strategic technology focus'
        }
      ]
    },
    {
      id: 'procurement',
      name: 'Procurement',
      description: 'Strategic sourcing and supplier management',
      accentColor: '#E48400',
      heat: 92,
      mappedTo: ['procure-to-pay'],
      painPoints: ['Supplier complexity', 'Cost optimization', 'Risk management'],
      useCases: ['Strategic sourcing', 'Supplier evaluation', 'Contract management'],
      kpis: ['Cost savings', 'Supplier performance', 'Risk mitigation'],
      adoptionStats: '92% adoption',
      metadataSummary: 'High efficiency focus',
      modules: [
        {
          id: 'strategic-sourcing',
          name: 'Strategic Sourcing',
          description: 'End-to-end procurement optimization',
          heat: 95,
          painPoints: ['Supplier diversity', 'Cost transparency', 'Compliance management'],
          useCases: ['Supplier selection', 'Negotiation support', 'Performance monitoring'],
          personas: ['Procurement Manager', 'Category Manager', 'Supplier'],
          kpis: ['Cost reduction', 'Supplier satisfaction', 'Compliance rate'],
          mappedTo: 'invoice-to-cash',
          demoVideoUrl: 'https://example.com/strategic-sourcing-demo',
          sourceUrls: ['sap.com', 'ariba.com'],
          sapProducts: ['SAP Ariba', 'SAP S/4HANA'],
          opportunities: ['AI-powered sourcing', 'Blockchain transparency', 'Predictive analytics'],
          adoptionStats: '95% adoption',
          metadataSummary: 'Leading procurement practices'
        }
      ]
    },
    {
      id: 'operations',
      name: 'Operations',
      description: 'Core business operations and process optimization',
      accentColor: '#2A9D8F',
      heat: 88,
      mappedTo: ['order-to-fulfill'],
      painPoints: ['Process inefficiency', 'Quality control', 'Resource optimization'],
      useCases: ['Process automation', 'Quality management', 'Resource planning'],
      kpis: ['Operational efficiency', 'Quality metrics', 'Cost per unit'],
      adoptionStats: '88% adoption',
      metadataSummary: 'Operational excellence',
      modules: [
        {
          id: 'process-automation',
          name: 'Process Automation',
          description: 'End-to-end process optimization and automation',
          heat: 90,
          painPoints: ['Legacy system integration', 'Change management', 'ROI measurement'],
          useCases: ['Workflow automation', 'System integration', 'Performance monitoring'],
          personas: ['Operations Manager', 'Process Engineer', 'Business Analyst'],
          kpis: ['Process efficiency', 'Automation rate', 'Cost savings'],
          mappedTo: 'recruit-to-retire',
          demoVideoUrl: 'https://example.com/process-automation-demo',
          sourceUrls: ['sap.com', 'automation.com'],
          sapProducts: ['SAP RPA', 'SAP Process Mining'],
          opportunities: ['RPA implementation', 'AI process optimization', 'Digital workflows'],
          adoptionStats: '90% adoption',
          metadataSummary: 'High automation focus'
        }
      ]
    },
    {
      id: 'marketing-sales',
      name: 'Marketing & Sales',
      description: 'Customer acquisition and revenue generation',
      accentColor: '#007CC2',
      heat: 95,
      mappedTo: ['lead-to-cash'],
      painPoints: ['Lead quality', 'Sales cycle length', 'Customer retention'],
      useCases: ['Lead generation', 'Sales automation', 'Customer analytics'],
      kpis: ['Conversion rate', 'Sales cycle', 'Customer lifetime value'],
      adoptionStats: '95% adoption',
      metadataSummary: 'Revenue growth focus',
      modules: [
        {
          id: 'lead-generation',
          name: 'Lead Generation',
          description: 'Automated lead generation and qualification',
          heat: 98,
          painPoints: ['Lead quality', 'Nurturing complexity', 'ROI measurement'],
          useCases: ['Campaign management', 'Lead scoring', 'Nurturing automation'],
          personas: ['Marketing Manager', 'Sales Rep', 'Marketing Analyst'],
          kpis: ['Lead quality score', 'Conversion rate', 'Marketing ROI'],
          mappedTo: 'lead-to-cash',
          demoVideoUrl: 'https://example.com/lead-generation-demo',
          sourceUrls: ['salesforce.com', 'hubspot.com'],
          sapProducts: ['SAP C/4HANA', 'SAP Marketing Cloud'],
          opportunities: ['AI-powered lead scoring', 'Predictive analytics', 'Omnichannel campaigns'],
          adoptionStats: '98% adoption',
          metadataSummary: 'Leading marketing practices'
        }
      ]
    },
    {
      id: 'customer-service',
      name: 'Customer Service',
      description: 'Customer support and relationship management',
      accentColor: '#E48400',
      heat: 82,
      mappedTo: ['lead-to-cash'],
      painPoints: ['Response time', 'Customer satisfaction', 'Issue resolution'],
      useCases: ['Case management', 'Knowledge base', 'Customer analytics'],
      kpis: ['Customer satisfaction', 'Response time', 'Resolution rate'],
      adoptionStats: '82% adoption',
      metadataSummary: 'Customer experience focus',
      modules: [
        {
          id: 'case-management',
          name: 'Case Management',
          description: 'End-to-end customer case handling',
          heat: 85,
          painPoints: ['Case complexity', 'Agent productivity', 'Knowledge sharing'],
          useCases: ['Case routing', 'Knowledge management', 'Performance analytics'],
          personas: ['Customer Service Rep', 'Team Lead', 'Customer'],
          kpis: ['Case resolution time', 'Customer satisfaction', 'Agent productivity'],
          mappedTo: 'lead-to-cash',
          sourceUrls: ['sap.com', 'servicecloud.com'],
          sapProducts: ['SAP Service Cloud', 'SAP C/4HANA'],
          opportunities: ['AI-powered routing', 'Predictive case management', 'Self-service portals'],
          adoptionStats: '85% adoption',
          metadataSummary: 'High service focus'
        }
      ]
    }
  ]
};

export const sapValueChain: ValueChain = {
  id: 'sap-e2e',
  name: 'SAP E2E Value Chain',
  type: 'sap',
  blocks: [
    {
      id: 'lead-to-cash',
      name: 'Lead to Cash',
      description: 'End-to-end customer journey from lead to revenue',
      accentColor: '#007CC2',
      heat: 90,
      mappedTo: ['marketing-sales', 'customer-service'],
      painPoints: ['Lead quality', 'Sales cycle', 'Revenue recognition'],
      useCases: ['Lead management', 'Sales automation', 'Revenue recognition'],
      kpis: ['Conversion rate', 'Sales cycle', 'Revenue growth'],
      adoptionStats: '90% adoption',
      metadataSummary: 'Revenue optimization',
      modules: [
        {
          id: 'lead-management',
          name: 'Lead Management',
          description: 'Comprehensive lead lifecycle management',
          heat: 92,
          painPoints: ['Lead quality', 'Nurturing complexity', 'ROI measurement'],
          useCases: ['Lead scoring', 'Campaign management', 'Analytics'],
          personas: ['Sales Manager', 'Marketing Manager', 'Sales Rep'],
          kpis: ['Lead quality score', 'Conversion rate', 'Pipeline velocity'],
          mappedTo: 'lead-generation',
          demoVideoUrl: 'https://example.com/lead-management-demo',
          sourceUrls: ['sap.com', 'c4hana.com'],
          sapProducts: ['SAP C/4HANA', 'SAP Marketing Cloud'],
          opportunities: ['AI lead scoring', 'Predictive analytics', 'Automated nurturing'],
          adoptionStats: '92% adoption',
          metadataSummary: 'Leading sales practices'
        },
        {
          id: 'order-to-fulfill',
          name: 'Order to Fulfill',
          description: 'Complete order processing and fulfillment',
          heat: 88,
          painPoints: ['Order complexity', 'Fulfillment efficiency', 'Customer satisfaction'],
          useCases: ['Order processing', 'Inventory management', 'Fulfillment tracking'],
          personas: ['Order Manager', 'Warehouse Manager', 'Customer'],
          kpis: ['Order accuracy', 'Fulfillment time', 'Customer satisfaction'],
          mappedTo: 'process-automation',
          sourceUrls: ['sap.com', 's4hana.com'],
          sapProducts: ['SAP S/4HANA', 'SAP EWM'],
          opportunities: ['AI order routing', 'Predictive fulfillment', 'Real-time tracking'],
          adoptionStats: '88% adoption',
          metadataSummary: 'High efficiency focus'
        }
      ]
    },
    {
      id: 'procure-to-pay',
      name: 'Procure to Pay',
      description: 'End-to-end procurement and payment processes',
      accentColor: '#E48400',
      heat: 95,
      mappedTo: ['procurement'],
      painPoints: ['Process complexity', 'Cost optimization', 'Compliance management'],
      useCases: ['Strategic sourcing', 'Invoice processing', 'Payment automation'],
      kpis: ['Cost savings', 'Process efficiency', 'Compliance rate'],
      adoptionStats: '95% adoption',
      metadataSummary: 'High efficiency focus',
      modules: [
        {
          id: 'invoice-to-cash',
          name: 'Invoice to Cash',
          description: 'Automated invoice processing and cash collection',
          heat: 96,
          painPoints: ['Invoice complexity', 'Payment delays', 'Cash flow management'],
          useCases: ['Invoice automation', 'Payment processing', 'Cash forecasting'],
          personas: ['Accounts Payable', 'Treasury Manager', 'Supplier'],
          kpis: ['Invoice processing time', 'Payment accuracy', 'Cash flow optimization'],
          mappedTo: 'strategic-sourcing',
          demoVideoUrl: 'https://example.com/invoice-to-cash-demo',
          sourceUrls: ['sap.com', 'ariba.com'],
          sapProducts: ['SAP Ariba', 'SAP S/4HANA'],
          opportunities: ['AI invoice processing', 'Blockchain payments', 'Predictive cash flow'],
          adoptionStats: '96% adoption',
          metadataSummary: 'Leading finance practices'
        }
      ]
    },
    {
      id: 'recruit-to-retire',
      name: 'Recruit to Retire',
      description: 'Complete employee lifecycle management',
      accentColor: '#2A9D8F',
      heat: 85,
      mappedTo: ['operations'],
      painPoints: ['Talent acquisition', 'Employee engagement', 'Compliance management'],
      useCases: ['Recruitment automation', 'Performance management', 'Succession planning'],
      kpis: ['Time to hire', 'Employee satisfaction', 'Retention rate'],
      adoptionStats: '85% adoption',
      metadataSummary: 'Talent optimization',
      modules: [
        {
          id: 'talent-acquisition',
          name: 'Talent Acquisition',
          description: 'End-to-end recruitment and onboarding',
          heat: 88,
          painPoints: ['Candidate quality', 'Hiring speed', 'Onboarding efficiency'],
          useCases: ['Job posting', 'Candidate screening', 'Onboarding automation'],
          personas: ['HR Manager', 'Recruiter', 'Candidate'],
          kpis: ['Time to hire', 'Quality of hire', 'Onboarding success'],
          mappedTo: 'process-automation',
          demoVideoUrl: 'https://example.com/talent-acquisition-demo',
          sourceUrls: ['sap.com', 'successfactors.com'],
          sapProducts: ['SAP SuccessFactors', 'SAP S/4HANA'],
          opportunities: ['AI candidate matching', 'Predictive hiring', 'Automated onboarding'],
          adoptionStats: '88% adoption',
          metadataSummary: 'Leading HR practices'
        }
      ]
    }
  ]
};

export const valueChains = [industryValueChain, sapValueChain]; 