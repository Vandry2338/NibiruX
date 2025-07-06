import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, TrendingUp, Users, Target, Zap } from 'lucide-react';
import { ValueChainBlock as ValueChainBlockType, ProcessModule } from '../lib/types/value-chain';
import { Badge } from './ui/badge';
import { cn } from '../lib/utils';

interface ValueChainBlockProps {
  block: ValueChainBlockType;
  isExpanded: boolean;
  onToggle: () => void;
  onModuleClick: (module: ProcessModule) => void;
  isHighlighted?: boolean;
  mappedBlocks?: string[];
}

export const ValueChainBlock: React.FC<ValueChainBlockProps> = ({
  block,
  isExpanded,
  onToggle,
  onModuleClick,
  isHighlighted = false,
  mappedBlocks = []
}) => {
  const getHeatColor = (heat: number) => {
    if (heat >= 90) return 'from-[#E48400] to-[#FFA940]';
    if (heat >= 80) return 'from-[#007CC2] to-[#2A9D8F]';
    if (heat >= 70) return 'from-[#2A9D8F] to-[#007CC2]';
    return 'from-gray-400 to-gray-500';
  };

  const getHeatIntensity = (heat: number) => {
    return Math.max(0.3, heat / 100);
  };

  return (
    <motion.div
      className={cn(
        "relative bg-[#FAFBFC] rounded-2xl border-2 transition-all duration-300 cursor-pointer",
        "hover:shadow-xl hover:scale-[1.02]",
        isHighlighted 
          ? "border-[#E48400] shadow-lg shadow-[#E48400]/20" 
          : "border-[#007CC2]/20 hover:border-[#007CC2]"
      )}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onToggle}
      layout
    >
      {/* Heatmap Overlay */}
      <motion.div
        className={cn(
          "absolute inset-0 rounded-2xl opacity-20",
          `bg-gradient-to-br ${getHeatColor(block.heat)}`
        )}
        initial={{ opacity: 0 }}
        animate={{ opacity: getHeatIntensity(block.heat) }}
        transition={{ duration: 0.5 }}
      />

      {/* Main Content */}
      <div className="relative z-10 p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-xl font-bold font-poppins text-[#101B2D] mb-2">
              {block.name}
            </h3>
            <p className="text-sm text-[#101B2D]/70 font-inter mb-3">
              {block.description}
            </p>
            
            {/* Heat Score */}
            <div className="flex items-center gap-2 mb-3">
              <div className="flex items-center gap-1">
                <TrendingUp className="w-4 h-4 text-[#E48400]" />
                <span className="text-sm font-semibold text-[#101B2D]">
                  Heat: {block.heat}%
                </span>
              </div>
              <Badge 
                variant="secondary" 
                className="bg-[#007CC2]/10 text-[#007CC2] border-[#007CC2]/20"
              >
                {block.adoptionStats}
              </Badge>
            </div>

            {/* Quick Stats */}
            <div className="flex items-center gap-4 text-xs text-[#101B2D]/60">
              <div className="flex items-center gap-1">
                <Users className="w-3 h-3" />
                <span>{block.useCases.length} Use Cases</span>
              </div>
              <div className="flex items-center gap-1">
                <Target className="w-3 h-3" />
                <span>{block.kpis.length} KPIs</span>
              </div>
              <div className="flex items-center gap-1">
                <Zap className="w-3 h-3" />
                <span>{block.modules.length} Modules</span>
              </div>
            </div>
          </div>

          {/* Expand/Collapse Icon */}
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.2 }}
            className="ml-4"
          >
            {isExpanded ? (
              <ChevronUp className="w-6 h-6 text-[#007CC2]" />
            ) : (
              <ChevronDown className="w-6 h-6 text-[#007CC2]" />
            )}
          </motion.div>
        </div>

        {/* Pain Points Preview */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-[#101B2D] mb-2">Key Pain Points</h4>
          <div className="flex flex-wrap gap-2">
            {block.painPoints.slice(0, 2).map((painPoint, idx) => (
              <Badge 
                key={idx}
                variant="outline" 
                className="text-xs bg-red-50 text-red-700 border-red-200"
              >
                {painPoint}
              </Badge>
            ))}
            {block.painPoints.length > 2 && (
              <Badge variant="outline" className="text-xs">
                +{block.painPoints.length - 2} more
              </Badge>
            )}
          </div>
        </div>

        {/* Mapping Indicator */}
        {mappedBlocks.length > 0 && (
          <div className="mb-4">
            <Badge 
              variant="secondary" 
              className="bg-[#2A9D8F]/10 text-[#2A9D8F] border-[#2A9D8F]/20"
            >
              Mapped to {mappedBlocks.length} SAP process{mappedBlocks.length > 1 ? 'es' : ''}
            </Badge>
          </div>
        )}
      </div>

      {/* Process Modules */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="border-t border-[#007CC2]/10 bg-[#FAFBFC]/50 p-6">
              <h4 className="text-lg font-semibold font-poppins text-[#101B2D] mb-4">
                Process Modules
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {block.modules.map((module) => (
                  <motion.div
                    key={module.id}
                    className="bg-white rounded-xl border border-[#007CC2]/20 p-4 cursor-pointer hover:shadow-md transition-all duration-200"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      onModuleClick(module);
                    }}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h5 className="font-semibold text-[#101B2D] text-sm">
                        {module.name}
                      </h5>
                      <Badge 
                        variant="secondary" 
                        className={cn(
                          "text-xs",
                          module.heat >= 90 
                            ? "bg-[#E48400]/10 text-[#E48400] border-[#E48400]/20"
                            : "bg-[#007CC2]/10 text-[#007CC2] border-[#007CC2]/20"
                        )}
                      >
                        {module.heat}%
                      </Badge>
                    </div>
                    
                    <p className="text-xs text-[#101B2D]/70 mb-3 line-clamp-2">
                      {module.description}
                    </p>

                    <div className="flex items-center justify-between text-xs text-[#101B2D]/60">
                      <span>{module.useCases.length} use cases</span>
                      <span>{module.kpis.length} KPIs</span>
                    </div>

                    {module.demoVideoUrl && (
                      <div className="mt-2">
                        <Badge variant="outline" className="text-xs bg-green-50 text-green-700 border-green-200">
                          Demo Available
                        </Badge>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}; 