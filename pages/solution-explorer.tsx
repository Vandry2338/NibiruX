import React, { useState, useMemo } from 'react';
import { SolutionTile } from '../components/SolutionTile';
import { SolutionDetailModal } from '../components/SolutionDetailModal';
import { AskAgentButton } from '../components/AskAgentButton';
import { AskAgentModal } from '../components/AskAgentModal';
import { SolutionFilterBar } from '../components/solution-filter-bar';
import { mockSolutions } from '../lib/mock/solution-explorer-data';
import { SolutionTile as SolutionTileType } from '../lib/types/solution-explorer';
import { Search, Star, TrendingUp, PlayCircle, CheckCircle, Layers, Building2 } from 'lucide-react';
import { cn } from '../lib/utils';
import { useSAPUseCases } from '../hooks/useSAPUseCases';

// Import Value Chain components
import { ValueChainBlock } from '../components/value-chain-block';
import { ProcessModuleModal } from '../components/process-module-modal';
import { industryValueChain, sapValueChain } from '../lib/mock/value-chain-data';
import { ValueChainViewMode, ProcessModule } from '../lib/types/value-chain';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';

const statusBadge = (status: string) => {
  if (status === 'Featured') return { color: 'bg-[#E48400] text-white', icon: <Star size={16} /> };
  if (status === 'In Progress') return { color: 'bg-[#007CC2] text-white', icon: <TrendingUp size={16} /> };
  if (status === 'New') return { color: 'bg-[#2A9D8F] text-white', icon: <Star size={16} /> };
  return { color: 'bg-gray-200 text-gray-700', icon: null };
};

export default function SolutionExplorerPage() {
  const { useCases, loading, error } = useSAPUseCases();
  const [selectedSolution, setSelectedSolution] = useState<SolutionTileType | null>(null);
  const [agentOpen, setAgentOpen] = useState(false);
  const [filters, setFilters] = useState({
    industries: [] as string[],
    valueChainBlocks: [] as string[],
    solutionTypes: [] as string[],
    sapProducts: [] as string[],
    tags: [] as string[],
    videoOnly: false,
    newFeatured: false,
    search: ''
  });

  // Value Chain states
  const [viewMode, setViewMode] = useState<ValueChainViewMode>('both');
  const [expandedBlocks, setExpandedBlocks] = useState<Set<string>>(new Set());
  const [selectedModule, setSelectedModule] = useState<ProcessModule | null>(null);
  const [isModuleModalOpen, setIsModuleModalOpen] = useState(false);
  const [hoveredBlock, setHoveredBlock] = useState<string | null>(null);

  // Extract available options from SAP use cases data
  const availableOptions = useMemo(() => {
    const industries = [...new Set(useCases.map(uc => uc.industry))];
    const valueChainBlocks = [...new Set(useCases.map(uc => uc.category))];
    const solutionTypes = [...new Set(useCases.map(uc => uc.implementation_complexity))];
    const sapProducts = [...new Set(useCases.map(uc => uc.category))];
    const tags = [...new Set(useCases.map(uc => uc.infosys_relevance).filter(Boolean))];
    
    return {
      industries,
      valueChainBlocks,
      solutionTypes,
      sapProducts,
      tags
    };
  }, [useCases]);

  // Apply filters to SAP use cases
  const filteredSolutions = useMemo(() => {
    return useCases.filter((useCase) => {
      // Search filter
      if (filters.search && !useCase.name.toLowerCase().includes(filters.search.toLowerCase()) &&
          !useCase.description.toLowerCase().includes(filters.search.toLowerCase())) {
        return false;
      }

      // Industry filter
      if (filters.industries.length > 0 && !filters.industries.includes(useCase.industry)) {
        return false;
      }

      // Category filter (Value Chain Block)
      if (filters.valueChainBlocks.length > 0 && !filters.valueChainBlocks.includes(useCase.category)) {
        return false;
      }

      // Implementation complexity filter (Solution Type)
      if (filters.solutionTypes.length > 0 && !filters.solutionTypes.includes(useCase.implementation_complexity)) {
        return false;
      }

      // Category filter (SAP Products)
      if (filters.sapProducts.length > 0 && !filters.sapProducts.includes(useCase.category)) {
        return false;
      }

      // Infosys relevance filter (Tags)
      if (filters.tags.length > 0 && useCase.infosys_relevance && !filters.tags.includes(useCase.infosys_relevance)) {
        return false;
      }

      return true;
    });
  }, [filters, useCases]);

  // Value Chain functions
  const toggleBlock = (blockId: string) => {
    const newExpanded = new Set(expandedBlocks);
    if (newExpanded.has(blockId)) {
      newExpanded.delete(blockId);
    } else {
      newExpanded.add(blockId);
    }
    setExpandedBlocks(newExpanded);
  };

  const handleModuleClick = (module: ProcessModule) => {
    setSelectedModule(module);
    setIsModuleModalOpen(true);
  };

  const getMappedBlocks = (blockId: string, chainType: 'industry' | 'sap') => {
    const currentChain = chainType === 'industry' ? industryValueChain : sapValueChain;
    const otherChain = chainType === 'industry' ? sapValueChain : industryValueChain;
    
    const currentBlock = currentChain.blocks.find(b => b.id === blockId);
    if (!currentBlock?.mappedTo) return [];
    
    return currentBlock.mappedTo;
  };

  const isBlockHighlighted = (blockId: string, chainType: 'industry' | 'sap') => {
    if (!hoveredBlock) return false;
    
    const mappedBlocks = getMappedBlocks(hoveredBlock, chainType === 'industry' ? 'sap' : 'industry');
    return mappedBlocks.includes(blockId);
  };

  const visibleChains = useMemo(() => {
    switch (viewMode) {
      case 'industry':
        return [industryValueChain];
      case 'sap':
        return [sapValueChain];
      case 'both':
        return [industryValueChain, sapValueChain];
      default:
        return [industryValueChain, sapValueChain];
    }
  }, [viewMode]);

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-inter">
      {/* Header Section */}
      <header className="w-full bg-white shadow-sm" style={{ minHeight: 88 }}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-[88px] gap-4">
          {/* Left: Logo + Title */}
          <div className="flex items-center gap-4 min-w-0">
            <img src="/infosys-logo.svg" alt="Infosys Consulting Logo" className="h-12 w-auto" />
            <h1 className="text-3xl font-extrabold font-poppins text-[#101B2D] tracking-tight whitespace-nowrap">Solution Explorer</h1>
          </div>
          {/* Right: Ask Agent */}
          <div className="flex items-center gap-4">
            <AskAgentButton onClick={() => setAgentOpen(true)} />
          </div>
        </div>
      </header>

      {/* Filter Bar */}
      <SolutionFilterBar
        filters={filters}
        onFiltersChange={setFilters}
        availableOptions={availableOptions}
      />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8 space-y-12">
        
        {/* Value Chain Explorer Section */}
        <section>
          {/* Value Chain Header */}
          <div className="mb-8 bg-white rounded-2xl p-6 border border-[#007CC2]/20 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-2xl font-bold font-poppins text-[#101B2D] mb-2">
                  Value Chain Explorer
                </h2>
                <p className="text-[#101B2D]/60 font-inter">
                  Industry & SAP E2E Process Mapping
                </p>
              </div>
              
              {/* View Mode Toggle */}
              <div className="flex items-center gap-2 bg-[#FAFBFC] rounded-lg p-1 border border-[#007CC2]/20">
                <Button
                  variant={viewMode === 'industry' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('industry')}
                  className={cn(
                    "text-xs font-semibold",
                    viewMode === 'industry' 
                      ? "bg-[#007CC2] text-white" 
                      : "text-[#101B2D] hover:bg-[#007CC2]/10"
                  )}
                >
                  <Building2 className="w-3 h-3 mr-1" />
                  Industry
                </Button>
                <Button
                  variant={viewMode === 'sap' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('sap')}
                  className={cn(
                    "text-xs font-semibold",
                    viewMode === 'sap' 
                      ? "bg-[#E48400] text-white" 
                      : "text-[#101B2D] hover:bg-[#E48400]/10"
                  )}
                >
                  <Layers className="w-3 h-3 mr-1" />
                  SAP
                </Button>
                <Button
                  variant={viewMode === 'both' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('both')}
                  className={cn(
                    "text-xs font-semibold",
                    viewMode === 'both' 
                      ? "bg-[#2A9D8F] text-white" 
                      : "text-[#101B2D] hover:bg-[#2A9D8F]/10"
                  )}
                >
                  <Layers className="w-3 h-3 mr-1" />
                  Both
                </Button>
              </div>
            </div>

            {/* Legend */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 rounded bg-gradient-to-br from-[#E48400] to-[#FFA940]"></div>
                <span className="text-sm text-[#101B2D]">High Heat (90%+)</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 rounded bg-gradient-to-br from-[#007CC2] to-[#2A9D8F]"></div>
                <span className="text-sm text-[#101B2D]">Medium Heat (70-89%)</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 rounded bg-gradient-to-br from-[#2A9D8F] to-[#007CC2]"></div>
                <span className="text-sm text-[#101B2D]">Low Heat (50-69%)</span>
              </div>
            </div>
          </div>

          {/* Value Chains */}
          <div className="space-y-8">
            {visibleChains.map((chain, chainIndex) => (
              <div
                key={chain.id}
                className="bg-white rounded-2xl border border-[#007CC2]/20 shadow-sm overflow-hidden"
              >
                {/* Chain Header */}
                <div className={cn(
                  "p-6 border-b border-[#007CC2]/10",
                  chain.type === 'industry' 
                    ? "bg-gradient-to-r from-[#007CC2]/5 to-[#2A9D8F]/5" 
                    : "bg-gradient-to-r from-[#E48400]/5 to-[#FFA940]/5"
                )}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={cn(
                        "h-10 w-10 rounded-xl flex items-center justify-center",
                        chain.type === 'industry' 
                          ? "bg-gradient-to-br from-[#007CC2] to-[#2A9D8F]" 
                          : "bg-gradient-to-br from-[#E48400] to-[#FFA940]"
                      )}>
                        {chain.type === 'industry' ? (
                          <Building2 className="h-5 w-5 text-white" />
                        ) : (
                          <Layers className="h-5 w-5 text-white" />
                        )}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold font-poppins text-[#101B2D]">
                          {chain.name}
                        </h3>
                        <p className="text-sm text-[#101B2D]/60">
                          {chain.type === 'industry' ? 'Industry Reference Model' : 'SAP E2E Processes'}
                        </p>
                      </div>
                    </div>
                    <Badge 
                      variant="secondary" 
                      className={cn(
                        "text-sm font-semibold",
                        chain.type === 'industry' 
                          ? "bg-[#007CC2]/10 text-[#007CC2] border-[#007CC2]/20"
                          : "bg-[#E48400]/10 text-[#E48400] border-[#E48400]/20"
                      )}
                    >
                      {chain.blocks.length} Process Blocks
                    </Badge>
                  </div>
                </div>

                {/* Chain Blocks */}
                <div className="p-6">
                  <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                    {chain.blocks.map((block, blockIndex) => (
                      <div
                        key={block.id}
                        onMouseEnter={() => setHoveredBlock(block.id)}
                        onMouseLeave={() => setHoveredBlock(null)}
                      >
                        <ValueChainBlock
                          block={block}
                          isExpanded={expandedBlocks.has(block.id)}
                          onToggle={() => toggleBlock(block.id)}
                          onModuleClick={handleModuleClick}
                          isHighlighted={isBlockHighlighted(block.id, chain.type)}
                          mappedBlocks={getMappedBlocks(block.id, chain.type)}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Use Cases/Solutions Section */}
        <section>
          <div className="mb-8">
            <h2 className="text-2xl font-bold font-poppins text-[#101B2D] mb-2">
              SAP Use Cases & Solutions
            </h2>
            {loading && (
              <p className="text-[#101B2D]/60 font-inter">
                Loading SAP use cases from Firestore...
              </p>
            )}
            {error && (
              <p className="text-red-500 font-inter">
                Error loading data: {error}
              </p>
            )}
            {!loading && !error && (
              <p className="text-[#101B2D]/60 font-inter">
                {filteredSolutions.length} SAP use cases found
              </p>
            )}
          </div>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="bg-white border border-gray-200 rounded-xl p-6 animate-pulse">
                  <div className="h-4 bg-gray-200 rounded mb-4"></div>
                  <div className="h-6 bg-gray-200 rounded mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded mb-2"></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredSolutions.map((useCase) => (
                <div
                  key={useCase.id}
                  className={cn(
                    'group bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200 p-6 flex flex-col',
                    'cursor-pointer',
                    'relative'
                  )}
                  tabIndex={0}
                  role="button"
                  aria-label={`View details for ${useCase.name}`}
                  onClick={() => setSelectedSolution(useCase as any)}
                  onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') setSelectedSolution(useCase as any); }}
                >
                  {/* Card Header: Industry + Category Tags */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex flex-wrap gap-2">
                      {useCase.industry && (
                        <span className="bg-[#F0F6FA] text-[#007CC2] font-semibold px-3 py-1 rounded-full text-xs font-inter">{useCase.industry}</span>
                      )}
                      {useCase.category && (
                        <span className="bg-[#FFF7E6] text-[#E48400] font-semibold px-3 py-1 rounded-full text-xs font-inter">{useCase.category}</span>
                      )}
                      {useCase.implementation_complexity && (
                        <span className="bg-[#E6F7F4] text-[#2A9D8F] font-semibold px-3 py-1 rounded-full text-xs font-inter">{useCase.implementation_complexity}</span>
                      )}
                    </div>
                    {/* ROI Timeframe Badge */}
                    {useCase.roi_timeframe && (
                      <span className="bg-[#E48400]/10 text-[#E48400] font-semibold px-3 py-1 rounded-full text-xs font-inter">
                        ROI: {useCase.roi_timeframe}
                      </span>
                    )}
                  </div>
                  {/* Title & Description */}
                  <h2 className="text-xl font-bold font-poppins text-[#101B2D] mb-2 leading-tight line-clamp-2">{useCase.name}</h2>
                  <p className="text-base text-gray-600 font-inter mb-4 leading-relaxed line-clamp-3">{useCase.description}</p>
                  
                  {/* Business Impact Section */}
                  {useCase.business_impact && (
                    <div className="mb-4">
                      <div className="text-sm font-bold font-poppins text-[#101B2D] mb-2 flex items-center gap-2">
                        <TrendingUp className="text-[#2A9D8F]" size={18} /> Business Impact
                      </div>
                      <p className="text-sm text-gray-700 font-inter">{useCase.business_impact}</p>
                    </div>
                  )}
                  
                  {/* Companies Started Section */}
                  {useCase.companies_started && (
                    <div className="flex items-center justify-between bg-gradient-to-r from-[#E6F0FA] via-[#E6F7F4] to-[#F0F6FA] rounded-lg px-4 py-3 mb-4">
                      <div className="text-lg font-bold text-[#007CC2] font-poppins">
                        {useCase.companies_started}
                      </div>
                      <div className="text-sm text-[#2A9D8F] font-semibold font-inter">Companies Started</div>
                    </div>
                  )}
                  
                  {/* Customer Example Section */}
                  {useCase.customer_example && (
                    <div className="mb-4">
                      <div className="text-sm font-bold font-poppins text-[#101B2D] mb-2 flex items-center gap-2">
                        <Building2 className="text-[#2A9D8F]" size={18} /> Customer Example
                      </div>
                      <p className="text-sm text-gray-700 font-inter">{useCase.customer_example}</p>
                    </div>
                  )}
                  
                  {/* Footer Section */}
                  <div className="mt-auto pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <span>SAP Use Case</span>
                      </div>
                      {useCase.infosys_relevance && (
                        <span className="text-sm text-[#007CC2] font-semibold">
                          {useCase.infosys_relevance}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </main>

      {/* Modals */}
      <SolutionDetailModal
        open={!!selectedSolution}
        onClose={() => setSelectedSolution(null)}
        solution={selectedSolution}
      />

      <ProcessModuleModal
        module={selectedModule}
        isOpen={isModuleModalOpen}
        onClose={() => {
          setIsModuleModalOpen(false);
          setSelectedModule(null);
        }}
      />

      <AskAgentModal open={agentOpen} onClose={() => setAgentOpen(false)} />
    </div>
  );
} 