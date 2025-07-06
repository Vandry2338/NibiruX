import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, Zap, ArrowRight, Layers, Eye, EyeOff, BarChart3 } from 'lucide-react';
import { ValueChainBlock } from '../components/value-chain-block';
import { ProcessModuleModal } from '../components/process-module-modal';
import { AskAgentButton } from '../components/AskAgentButton';
import { AskAgentModal } from '../components/AskAgentModal';
import { industryValueChain, sapValueChain } from '../lib/mock/value-chain-data';
import { ValueChainViewMode, ProcessModule, ValueChainBlock as ValueChainBlockType } from '../lib/types/value-chain';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { cn } from '../lib/utils';

export default function ValueChainExplorerPage() {
  const [viewMode, setViewMode] = useState<ValueChainViewMode>('both');
  const [expandedBlocks, setExpandedBlocks] = useState<Set<string>>(new Set());
  const [selectedModule, setSelectedModule] = useState<ProcessModule | null>(null);
  const [isModuleModalOpen, setIsModuleModalOpen] = useState(false);
  const [agentOpen, setAgentOpen] = useState(false);
  const [hoveredBlock, setHoveredBlock] = useState<string | null>(null);

  // Toggle block expansion
  const toggleBlock = (blockId: string) => {
    const newExpanded = new Set(expandedBlocks);
    if (newExpanded.has(blockId)) {
      newExpanded.delete(blockId);
    } else {
      newExpanded.add(blockId);
    }
    setExpandedBlocks(newExpanded);
  };

  // Handle module click
  const handleModuleClick = (module: ProcessModule) => {
    setSelectedModule(module);
    setIsModuleModalOpen(true);
  };

  // Get mapped blocks for highlighting
  const getMappedBlocks = (blockId: string, chainType: 'industry' | 'sap') => {
    const currentChain = chainType === 'industry' ? industryValueChain : sapValueChain;
    const otherChain = chainType === 'industry' ? sapValueChain : industryValueChain;
    
    const currentBlock = currentChain.blocks.find(b => b.id === blockId);
    if (!currentBlock?.mappedTo) return [];
    
    return currentBlock.mappedTo;
  };

  // Check if block should be highlighted
  const isBlockHighlighted = (blockId: string, chainType: 'industry' | 'sap') => {
    if (!hoveredBlock) return false;
    
    const mappedBlocks = getMappedBlocks(hoveredBlock, chainType === 'industry' ? 'sap' : 'industry');
    return mappedBlocks.includes(blockId);
  };

  // Filter blocks based on view mode
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
    <div className="min-h-screen bg-gradient-to-br from-[#F8FAFC] to-[#E2E8F0] font-inter">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-[#007CC2]/10 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Left: Logo + Title */}
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-[#007CC2] to-[#2A9D8F] flex items-center justify-center">
                <Layers className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold font-poppins text-[#101B2D]">
                  Value Chain Explorer
                </h1>
                <p className="text-sm text-[#101B2D]/60 font-inter">
                  Industry & SAP E2E Process Mapping
                </p>
              </div>
            </div>

            {/* Right: View Mode Toggle */}
            <div className="flex items-center gap-4">
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
                  <Zap className="w-3 h-3 mr-1" />
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
                  <BarChart3 className="w-3 h-3 mr-1" />
                  Both
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Legend */}
        <div className="mb-8 bg-white rounded-2xl p-6 border border-[#007CC2]/20 shadow-sm">
          <h2 className="text-lg font-semibold font-poppins text-[#101B2D] mb-4">
            Value Chain Legend
          </h2>
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
            <motion.div
              key={chain.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: chainIndex * 0.1 }}
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
                        <Zap className="h-5 w-5 text-white" />
                      )}
                    </div>
                    <div>
                      <h2 className="text-xl font-bold font-poppins text-[#101B2D]">
                        {chain.name}
                      </h2>
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
                    <motion.div
                      key={block.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: blockIndex * 0.05 }}
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

        {/* Mapping Visualization (when both chains are visible) */}
        {viewMode === 'both' && hoveredBlock && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="mt-8 bg-white rounded-2xl p-6 border border-[#007CC2]/20 shadow-sm"
          >
            <h3 className="text-lg font-semibold font-poppins text-[#101B2D] mb-4">
              Process Mapping
            </h3>
            <div className="flex items-center justify-center gap-4 text-sm text-[#101B2D]/60">
              <span>Industry Process</span>
              <ArrowRight className="w-4 h-4 text-[#007CC2]" />
              <span>SAP E2E Process</span>
            </div>
            <div className="mt-4 p-4 bg-[#FAFBFC] rounded-xl border border-[#007CC2]/10">
              <p className="text-center text-sm text-[#101B2D]/80">
                Hover over blocks to see cross-chain mappings and relationships
              </p>
            </div>
          </motion.div>
        )}

        {/* Empty State */}
        {visibleChains.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#007CC2]/10 flex items-center justify-center">
              <EyeOff className="w-8 h-8 text-[#007CC2]" />
            </div>
            <h3 className="text-lg font-semibold text-[#101B2D] mb-2">
              No Value Chains Selected
            </h3>
            <p className="text-[#101B2D]/60">
              Choose a view mode to explore value chains
            </p>
          </div>
        )}
      </main>

      {/* Ask Agent Button */}
      <AskAgentButton onClick={() => setAgentOpen(true)} />

      {/* Modals */}
      <ProcessModuleModal
        module={selectedModule}
        isOpen={isModuleModalOpen}
        onClose={() => {
          setIsModuleModalOpen(false);
          setSelectedModule(null);
        }}
      />

      <AskAgentModal
        open={agentOpen}
        onClose={() => setAgentOpen(false)}
      />
    </div>
  );
} 