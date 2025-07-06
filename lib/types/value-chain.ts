export type ValueChain = {
  id: string;
  name: string;
  type: 'industry' | 'sap';
  blocks: ValueChainBlock[];
};

export type ValueChainBlock = {
  id: string;
  name: string;
  description: string;
  accentColor: string;
  heat: number; // 0-100
  modules: ProcessModule[];
  mappedTo?: string[]; // ids of blocks in the other chain
  painPoints: string[];
  useCases: string[];
  kpis: string[];
  adoptionStats?: string;
  metadataSummary?: string;
};

export type ProcessModule = {
  id: string;
  name: string;
  description: string;
  heat: number;
  painPoints: string[];
  useCases: string[];
  personas: string[];
  kpis: string[];
  mappedTo?: string; // id of process in other chain
  demoVideoUrl?: string;
  sourceUrls: string[];
  sapProducts: string[];
  opportunities: string[];
  adoptionStats?: string;
  metadataSummary?: string;
};

export type ValueChainViewMode = 'industry' | 'sap' | 'both'; 