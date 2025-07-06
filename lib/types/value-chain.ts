export type Industry = 'MFG' | 'CRL' | 'SURE' | 'FS' | 'HIL' | 'CMT';

export type ValueChain = {
  id: string;
  name: string;
  type: 'industry' | 'sap';
  industry?: Industry;
  blocks: ValueChainBlock[];
};

export type ValueChainBlock = {
  id: string;
  name: string;
  description: string;
  accentColor: string;
  heat: number; // 0-100
  percent: number; // 0-100 for visual representation
  modules: ProcessModule[];
  mappedTo?: string[]; // ids of blocks in the other chain
  painPoints: string[];
  useCases: string[];
  kpis: string[];
  adoptionStats?: string;
  metadataSummary?: string;
  icon?: string; // optional icon name
  overlayMappings?: string[]; // for SAP overlay mode
};

export type ProcessModule = {
  id: string;
  name: string;
  description: string;
  heat: number; // 0-100
};

export type ValueChainViewMode = 'industry' | 'sap' | 'both';

export type IndustryValueChainData = {
  industry: Industry;
  label: string;
  industryChain: ValueChain;
  sapChain: ValueChain;
}; 