import React, { useState, useMemo } from 'react';
import { SolutionTile } from '../components/SolutionTile';
import { SolutionDetailModal } from '../components/SolutionDetailModal';
import { AskAgentButton } from '../components/AskAgentButton';
import { AskAgentModal } from '../components/AskAgentModal';
import { SolutionFilterBar } from '../components/solution-filter-bar';
import { mockSolutions } from '../lib/mock/solution-explorer-data';
import { SolutionTile as SolutionTileType } from '../lib/types/solution-explorer';
import { Search, Star, TrendingUp, PlayCircle, CheckCircle, Layers, Building2, Sparkles, Target, Zap } from 'lucide-react';
import { cn } from '../lib/utils';
import { useSAPUseCases } from '../hooks/useSAPUseCases';
import { motion } from 'framer-motion';

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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 font-inter">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden"
      >
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 via-slate-800/30 to-slate-900/50"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
        
        {/* Header Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-[#E48400] to-[#FFA940] flex items-center justify-center">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <h1 className="text-5xl font-extrabold font-poppins text-white tracking-tight">
                Solution Explorer
              </h1>
            </div>
            <p className="text-xl text-slate-300 font-inter max-w-3xl mx-auto leading-relaxed">
              Discover SAP use cases and value chain solutions with AI-powered insights and interactive exploration
            </p>
            
            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center justify-center gap-8 mt-8"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-[#E48400] font-poppins">
                  {useCases.length}
                </div>
                <div className="text-sm text-slate-400 font-inter">SAP Use Cases</div>
              </div>
              <div className="w-px h-12 bg-slate-600"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#007CC2] font-poppins">
                  {visibleChains.length}
                </div>
                <div className="text-sm text-slate-400 font-inter">Value Chains</div>
              </div>
              <div className="w-px h-12 bg-slate-600"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#2A9D8F] font-poppins">
                  {filteredSolutions.length}
                </div>
                <div className="text-sm text-slate-400 font-inter">Filtered Results</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Filter Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="sticky top-0 z-20 bg-slate-800/80 backdrop-blur-xl border-b border-slate-700/50"
      >
        <SolutionFilterBar
          filters={filters}
          onFiltersChange={setFilters}
          availableOptions={availableOptions}
        />
      </motion.div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12 space-y-16">
        
        {/* Value Chain Explorer Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {/* Value Chain Header */}
          <div className="mb-12 bg-slate-800/50 backdrop-blur-xl rounded-3xl p-8 border border-slate-700/50 shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-3xl font-bold font-poppins text-white mb-3 flex items-center gap-3">
                  <Target className="h-8 w-8 text-[#E48400]" />
                  Value Chain Explorer
                </h2>
                <p className="text-slate-300 font-inter text-lg">
                  Industry & SAP E2E Process Mapping with Interactive Intelligence
                </p>
              </div>
              
              {/* View Mode Toggle */}
              <div className="flex items-center gap-2 bg-slate-700/50 rounded-xl p-1 border border-slate-600/50">
                <Button
                  variant={viewMode === 'industry' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('industry')}
                  className={cn(
                    "text-sm font-semibold transition-all duration-200",
                    viewMode === 'industry' 
                      ? "bg-gradient-to-r from-[#007CC2] to-[#2A9D8F] text-white shadow-lg" 
                      : "text-slate-300 hover:bg-slate-600/50 hover:text-white"
                  )}
                >
                  <Building2 className="w-4 h-4 mr-2" />
                  Industry
                </Button>
                <Button
                  variant={viewMode === 'sap' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('sap')}
                  className={cn(
                    "text-sm font-semibold transition-all duration-200",
                    viewMode === 'sap' 
                      ? "bg-gradient-to-r from-[#E48400] to-[#FFA940] text-white shadow-lg" 
                      : "text-slate-300 hover:bg-slate-600/50 hover:text-white"
                  )}
                >
                  <Layers className="w-4 h-4 mr-2" />
                  SAP
                </Button>
                <Button
                  variant={viewMode === 'both' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('both')}
                  className={cn(
                    "text-sm font-semibold transition-all duration-200",
                    viewMode === 'both' 
                      ? "bg-gradient-to-r from-[#2A9D8F] to-[#007CC2] text-white shadow-lg" 
                      : "text-slate-300 hover:bg-slate-600/50 hover:text-white"
                  )}
                >
                  <Zap className="w-4 h-4 mr-2" />
                  Both
                </Button>
              </div>
            </div>

            {/* Legend */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-lg bg-gradient-to-br from-[#E48400] to-[#FFA940] shadow-lg"></div>
                <span className="text-sm text-slate-300 font-inter">High Heat (90%+)</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-lg bg-gradient-to-br from-[#007CC2] to-[#2A9D8F] shadow-lg"></div>
                <span className="text-sm text-slate-300 font-inter">Medium Heat (70-89%)</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-lg bg-gradient-to-br from-[#2A9D8F] to-[#007CC2] shadow-lg"></div>
                <span className="text-sm text-slate-300 font-inter">Low Heat (50-69%)</span>
              </div>
            </div>
          </div>

          {/* Value Chains */}
          <div className="space-y-8">
            {visibleChains.map((chain, chainIndex) => (
              <motion.div
                key={chain.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 * chainIndex }}
                className="bg-slate-800/50 backdrop-blur-xl rounded-3xl border border-slate-700/50 shadow-2xl overflow-hidden"
              >
                {/* Chain Header */}
                <div className={cn(
                  "p-8 border-b border-slate-700/50",
                  chain.type === 'industry' 
                    ? "bg-gradient-to-r from-[#007CC2]/10 to-[#2A9D8F]/10" 
                    : "bg-gradient-to-r from-[#E48400]/10 to-[#FFA940]/10"
                )}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={cn(
                        "h-14 w-14 rounded-2xl flex items-center justify-center shadow-lg",
                        chain.type === 'industry' 
                          ? "bg-gradient-to-br from-[#007CC2] to-[#2A9D8F]" 
                          : "bg-gradient-to-br from-[#E48400] to-[#FFA940]"
                      )}>
                        {chain.type === 'industry' ? (
                          <Building2 className="h-7 w-7 text-white" />
                        ) : (
                          <Layers className="h-7 w-7 text-white" />
                        )}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold font-poppins text-white">
                          {chain.name}
                        </h3>
                        <p className="text-slate-300 font-inter">
                          {chain.type === 'industry' ? 'Industry Reference Model' : 'SAP E2E Processes'}
                        </p>
                      </div>
                    </div>
                    <Badge 
                      variant="secondary" 
                      className={cn(
                        "text-sm font-semibold px-4 py-2",
                        chain.type === 'industry' 
                          ? "bg-[#007CC2]/20 text-[#007CC2] border-[#007CC2]/30"
                          : "bg-[#E48400]/20 text-[#E48400] border-[#E48400]/30"
                      )}
                    >
                      {chain.blocks.length} Process Blocks
                    </Badge>
                  </div>
                </div>

                {/* Chain Blocks */}
                <div className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                    {chain.blocks.map((block, blockIndex) => (
                      <motion.div
                        key={block.id}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: 0.1 * blockIndex }}
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
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Use Cases/Solutions Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <div className="mb-12">
            <h2 className="text-3xl font-bold font-poppins text-white mb-4 flex items-center gap-3">
              <Sparkles className="h-8 w-8 text-[#E48400]" />
              SAP Use Cases & Solutions
            </h2>
            {loading && (
              <p className="text-slate-300 font-inter text-lg">
                Loading SAP use cases from Firestore...
              </p>
            )}
            {error && (
              <p className="text-red-400 font-inter text-lg">
                Error loading data: {error}
              </p>
            )}
            {!loading && !error && (
              <p className="text-slate-300 font-inter text-lg">
                {filteredSolutions.length} SAP use cases found
              </p>
            )}
          </div>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * i }}
                  className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 animate-pulse"
                >
                  <div className="h-4 bg-slate-700 rounded mb-4"></div>
                  <div className="h-6 bg-slate-700 rounded mb-2"></div>
                  <div className="h-4 bg-slate-700 rounded mb-4"></div>
                  <div className="h-4 bg-slate-700 rounded mb-2"></div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredSolutions.map((useCase, index) => (
                <motion.div
                  key={useCase.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  className={cn(
                    'group bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 p-6 flex flex-col',
                    'cursor-pointer hover:scale-[1.02] hover:border-slate-600/50',
                    'relative overflow-hidden'
                  )}
                  tabIndex={0}
                  role="button"
                  aria-label={`View details for ${useCase.name}`}
                  onClick={() => setSelectedSolution(useCase as any)}
                  onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') setSelectedSolution(useCase as any); }}
                >
                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#E48400]/5 to-[#007CC2]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Card Header: Industry + Category Tags */}
                  <div className="flex items-center justify-between mb-4 relative z-10">
                    <div className="flex flex-wrap gap-2">
                      {useCase.industry && (
                        <span className="bg-[#007CC2]/20 text-[#007CC2] font-semibold px-3 py-1 rounded-full text-xs font-inter border border-[#007CC2]/30">
                          {useCase.industry}
                        </span>
                      )}
                      {useCase.category && (
                        <span className="bg-[#E48400]/20 text-[#E48400] font-semibold px-3 py-1 rounded-full text-xs font-inter border border-[#E48400]/30">
                          {useCase.category}
                        </span>
                      )}
                      {useCase.implementation_complexity && (
                        <span className="bg-[#2A9D8F]/20 text-[#2A9D8F] font-semibold px-3 py-1 rounded-full text-xs font-inter border border-[#2A9D8F]/30">
                          {useCase.implementation_complexity}
                        </span>
                      )}
                    </div>
                    {/* ROI Timeframe Badge */}
                    {useCase.roi_timeframe && (
                      <span className="bg-[#E48400]/20 text-[#E48400] font-semibold px-3 py-1 rounded-full text-xs font-inter border border-[#E48400]/30">
                        ROI: {useCase.roi_timeframe}
                      </span>
                    )}
                  </div>
                  
                  {/* Title & Description */}
                  <h2 className="text-xl font-bold font-poppins text-white mb-3 leading-tight line-clamp-2 relative z-10">
                    {useCase.name}
                  </h2>
                  <p className="text-base text-slate-300 font-inter mb-4 leading-relaxed line-clamp-3 relative z-10">
                    {useCase.description}
                  </p>
                  
                  {/* Business Impact Section */}
                  {useCase.business_impact && (
                    <div className="mb-4 relative z-10">
                      <div className="text-sm font-bold font-poppins text-white mb-2 flex items-center gap-2">
                        <TrendingUp className="text-[#2A9D8F]" size={18} /> Business Impact
                      </div>
                      <p className="text-sm text-slate-300 font-inter">{useCase.business_impact}</p>
                    </div>
                  )}
                  
                  {/* Companies Started Section */}
                  {useCase.companies_started && (
                    <div className="flex items-center justify-between bg-gradient-to-r from-[#007CC2]/10 via-[#2A9D8F]/10 to-[#E48400]/10 rounded-xl px-4 py-3 mb-4 border border-slate-600/30 relative z-10">
                      <div className="text-lg font-bold text-[#007CC2] font-poppins">
                        {useCase.companies_started}
                      </div>
                      <div className="text-sm text-[#2A9D8F] font-semibold font-inter">Companies Started</div>
                    </div>
                  )}
                  
                  {/* Customer Example Section */}
                  {useCase.customer_example && (
                    <div className="mb-4 relative z-10">
                      <div className="text-sm font-bold font-poppins text-white mb-2 flex items-center gap-2">
                        <Building2 className="text-[#2A9D8F]" size={18} /> Customer Example
                      </div>
                      <p className="text-sm text-slate-300 font-inter">{useCase.customer_example}</p>
                    </div>
                  )}
                  
                  {/* Footer Section */}
                  <div className="mt-auto pt-4 border-t border-slate-700/50 relative z-10">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-slate-400">
                        <span>SAP Use Case</span>
                      </div>
                      {useCase.infosys_relevance && (
                        <span className="text-sm text-[#007CC2] font-semibold">
                          {useCase.infosys_relevance}
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </motion.section>
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