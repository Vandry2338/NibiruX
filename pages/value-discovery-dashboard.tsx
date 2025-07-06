"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Building2, Factory, ShoppingCart, Zap, Users, TrendingUp } from 'lucide-react';
import { industryValueChains } from '@/lib/mock/industry-value-chains';
import { ValueChainBlock } from '@/lib/types/value-chain';

interface ValueDiscoveryDashboardProps {
  activeSection?: string;
}

export default function ValueDiscoveryDashboard({ activeSection = 'value-chain' }: ValueDiscoveryDashboardProps) {
  const [selectedIndustry, setSelectedIndustry] = useState('MFG');
  const [showIndustryDropdown, setShowIndustryDropdown] = useState(false);

  const sections = [
    { id: 'value-chain', name: 'Dual Value Chain Explorer', icon: '🔗' }
  ];

  const industryIcons = {
    MFG: Factory,
    CRL: ShoppingCart,
    SURE: Zap,
    HLS: Users,
    FIN: Building2,
    TMT: TrendingUp
  };

  const selectedIndustryData = industryValueChains.find(chain => chain.industry === selectedIndustry);
  const IndustryIcon = industryIcons[selectedIndustry as keyof typeof industryIcons] || Building2;

  const metrics = [
    { name: 'Total Value Potential', value: '$12.4M', change: '+15%', color: 'text-emerald-400' },
    { name: 'ROI Projection', value: '285%', change: '+8%', color: 'text-blue-400' },
    { name: 'Implementation Timeline', value: '18 months', change: '-2 months', color: 'text-amber-400' },
    { name: 'Risk Score', value: 'Low', change: '-12%', color: 'text-cyan-400' }
  ];

  const renderValueChainBlock = (block: ValueChainBlock, isIndustry: boolean = true) => (
    <motion.div
      key={block.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-slate-800/50 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50 hover:bg-slate-800/70 hover:border-slate-600/50 transition-all duration-300 shadow-xl"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div 
            className="w-3 h-3 rounded-full"
            style={{ backgroundColor: block.accentColor }}
          />
          <h3 className="text-xl font-semibold text-white">{block.name}</h3>
        </div>
        <div className="flex items-center gap-2">
          <div className="text-sm text-slate-300">Heat: {block.heat}</div>
          <div className="w-16 h-2 bg-slate-700 rounded-full overflow-hidden">
            <div 
              className="h-full rounded-full"
              style={{ 
                width: `${block.heat}%`,
                backgroundColor: block.accentColor 
              }}
            />
          </div>
        </div>
      </div>
      
      <p className="text-slate-300 text-sm mb-4">{block.description}</p>
      
      <div className="grid grid-cols-2 gap-4 text-sm">
        <div>
          <div className="text-slate-400 mb-1">Adoption</div>
          <div className="text-white font-medium">{block.adoptionStats}</div>
        </div>
        <div>
          <div className="text-slate-400 mb-1">KPIs</div>
          <div className="text-white font-medium">{block.kpis?.length || 0} metrics</div>
        </div>
      </div>

      {block.modules && block.modules.length > 0 && (
        <div className="mt-4">
          <div className="text-slate-400 text-sm mb-2">Key Modules:</div>
          <div className="flex flex-wrap gap-2">
            {block.modules.slice(0, 3).map((module) => (
              <span 
                key={module.id}
                className="px-2 py-1 bg-slate-700/50 rounded-lg text-xs text-white border border-slate-600/30"
              >
                {module.name}
              </span>
            ))}
            {block.modules.length > 3 && (
              <span className="px-2 py-1 bg-slate-700/50 rounded-lg text-xs text-white border border-slate-600/30">
                +{block.modules.length - 3} more
              </span>
            )}
          </div>
        </div>
      )}
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent mb-4"
          >
            Value Discovery Dashboard
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-300 text-lg"
          >
            Comprehensive analysis of value creation opportunities across industry value chains
          </motion.p>
        </div>

        {/* Industry Selection */}
        <div className="mb-8">
          <div className="relative">
            <button
              onClick={() => setShowIndustryDropdown(!showIndustryDropdown)}
              className="flex items-center gap-3 px-4 py-3 bg-slate-800/50 backdrop-blur-xl rounded-xl border border-slate-700/50 text-white hover:bg-slate-800/70 hover:border-slate-600/50 transition-all duration-300 shadow-lg"
            >
              <IndustryIcon className="w-5 h-5" />
              <span className="font-medium">
                {selectedIndustryData?.label || 'Select Industry'}
              </span>
              <ChevronDown className={`w-4 h-4 transition-transform ${showIndustryDropdown ? 'rotate-180' : ''}`} />
            </button>
            
            {showIndustryDropdown && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute top-full left-0 mt-2 w-64 bg-slate-800/90 backdrop-blur-xl rounded-xl border border-slate-700/50 z-50 shadow-2xl"
              >
                {industryValueChains.map((chain) => {
                  const Icon = industryIcons[chain.industry as keyof typeof industryIcons] || Building2;
                  return (
                    <button
                      key={chain.industry}
                      onClick={() => {
                        setSelectedIndustry(chain.industry);
                        setShowIndustryDropdown(false);
                      }}
                      className="flex items-center gap-3 w-full px-4 py-3 text-left text-white hover:bg-slate-700/50 transition-colors first:rounded-t-xl last:rounded-b-xl"
                    >
                      <Icon className="w-5 h-5" />
                      <span>{chain.label}</span>
                    </button>
                  );
                })}
              </motion.div>
            )}
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-800/50 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50 hover:bg-slate-800/70 hover:border-slate-600/50 transition-all duration-300 shadow-xl"
            >
              <div className={`text-3xl font-bold mb-2 ${metric.color}`}>{metric.value}</div>
              <div className="text-slate-300 mb-2">{metric.name}</div>
              <div className="text-emerald-400 text-sm">{metric.change}</div>
            </motion.div>
          ))}
        </div>

        {/* Dual Value Chain Explorer */}
        {activeSection === 'value-chain' && selectedIndustryData && (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <motion.h2 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent mb-4"
              >
                Dual Value Chain Explorer
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-slate-300 text-lg"
              >
                Compare industry value chains with SAP E2E processes for {selectedIndustryData.label}
              </motion.p>
            </div>

            {/* Industry Value Chain */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <IndustryIcon className="w-6 h-6 text-blue-400" />
                <h3 className="text-2xl font-semibold text-white">{selectedIndustryData.industryChain.name}</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {selectedIndustryData.industryChain.blocks.map((block, index) => (
                  <motion.div
                    key={block.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    {renderValueChainBlock(block, true)}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* SAP Value Chain */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white text-xs font-bold">SAP</span>
                </div>
                <h3 className="text-2xl font-semibold text-white">{selectedIndustryData.sapChain.name}</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {selectedIndustryData.sapChain.blocks.map((block, index) => (
                  <motion.div
                    key={block.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    {renderValueChainBlock(block, false)}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Mapping Legend */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-slate-800/50 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50 shadow-xl"
            >
              <h4 className="text-lg font-semibold text-white mb-4">Industry to SAP Process Mapping</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {selectedIndustryData.mapping?.map((map, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-slate-700/30 rounded-lg border border-slate-600/30">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <div className="text-sm">
                      <div className="text-white font-medium">{map.industryProcess}</div>
                      <div className="text-slate-400">→ {map.sapProcess}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
} 