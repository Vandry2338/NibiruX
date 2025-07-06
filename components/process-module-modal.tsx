import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, PlayCircle, ExternalLink, Users, Target, TrendingUp, Zap, Briefcase, Lightbulb } from 'lucide-react';
import { ProcessModule } from '../lib/types/value-chain';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { cn } from '../lib/utils';

interface ProcessModuleModalProps {
  module: ProcessModule | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProcessModuleModal: React.FC<ProcessModuleModalProps> = ({
  module,
  isOpen,
  onClose
}) => {
  if (!module) return null;

  const getHeatColor = (heat: number) => {
    if (heat >= 90) return 'bg-[#E48400] text-white';
    if (heat >= 80) return 'bg-[#007CC2] text-white';
    if (heat >= 70) return 'bg-[#2A9D8F] text-white';
    return 'bg-gray-500 text-white';
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-[#0A2540] to-[#1B3A5B] rounded-2xl border border-[#007CC2] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="sticky top-0 z-10 bg-gradient-to-r from-[#0A2540] to-[#1B3A5B] rounded-t-2xl border-b border-[#007CC2]/20 p-6">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-2">
                    <h2 className="text-2xl font-bold font-poppins text-[#FAFBFC]">
                      {module.name}
                    </h2>
                    <Badge className={cn("text-sm font-semibold", getHeatColor(module.heat))}>
                      {module.heat}% Heat
                    </Badge>
                  </div>
                  <p className="text-[#FAFBFC]/80 font-inter">
                    {module.description}
                  </p>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={onClose}
                  className="text-[#FAFBFC] hover:bg-[#007CC2]/20"
                >
                  <X className="w-6 h-6" />
                </Button>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">
              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-[#FAFBFC]/10 rounded-xl p-4 border border-[#007CC2]/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="w-4 h-4 text-[#E48400]" />
                    <span className="text-sm font-semibold text-[#FAFBFC]">Personas</span>
                  </div>
                  <span className="text-2xl font-bold text-[#FAFBFC]">{module.personas.length}</span>
                </div>
                <div className="bg-[#FAFBFC]/10 rounded-xl p-4 border border-[#007CC2]/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Target className="w-4 h-4 text-[#2A9D8F]" />
                    <span className="text-sm font-semibold text-[#FAFBFC]">KPIs</span>
                  </div>
                  <span className="text-2xl font-bold text-[#FAFBFC]">{module.kpis.length}</span>
                </div>
                <div className="bg-[#FAFBFC]/10 rounded-xl p-4 border border-[#007CC2]/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Lightbulb className="w-4 h-4 text-[#007CC2]" />
                    <span className="text-sm font-semibold text-[#FAFBFC]">Use Cases</span>
                  </div>
                  <span className="text-2xl font-bold text-[#FAFBFC]">{module.useCases.length}</span>
                </div>
                <div className="bg-[#FAFBFC]/10 rounded-xl p-4 border border-[#007CC2]/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Briefcase className="w-4 h-4 text-[#E48400]" />
                    <span className="text-sm font-semibold text-[#FAFBFC]">SAP Products</span>
                  </div>
                  <span className="text-2xl font-bold text-[#FAFBFC]">{module.sapProducts.length}</span>
                </div>
              </div>

              {/* Demo Video */}
              {module.demoVideoUrl && (
                <div className="bg-[#FAFBFC]/10 rounded-xl p-4 border border-[#007CC2]/20">
                  <div className="flex items-center gap-3 mb-3">
                    <PlayCircle className="w-5 h-5 text-[#E48400]" />
                    <h3 className="text-lg font-semibold font-poppins text-[#FAFBFC]">Demo Video</h3>
                  </div>
                  <Button 
                    className="bg-[#E48400] hover:bg-[#FFA940] text-white"
                    onClick={() => window.open(module.demoVideoUrl, '_blank')}
                  >
                    <PlayCircle className="w-4 h-4 mr-2" />
                    Watch Demo
                  </Button>
                </div>
              )}

              {/* Pain Points */}
              <div className="bg-[#FAFBFC]/10 rounded-xl p-4 border border-[#007CC2]/20">
                <h3 className="text-lg font-semibold font-poppins text-[#FAFBFC] mb-3">
                  Pain Points
                </h3>
                <div className="flex flex-wrap gap-2">
                  {module.painPoints.map((painPoint, idx) => (
                    <Badge 
                      key={idx}
                      variant="outline" 
                      className="bg-red-500/20 text-red-300 border-red-500/30"
                    >
                      {painPoint}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Use Cases */}
              <div className="bg-[#FAFBFC]/10 rounded-xl p-4 border border-[#007CC2]/20">
                <h3 className="text-lg font-semibold font-poppins text-[#FAFBFC] mb-3">
                  Use Cases
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {module.useCases.map((useCase, idx) => (
                    <div key={idx} className="bg-[#FAFBFC]/5 rounded-lg p-3 border border-[#007CC2]/10">
                      <span className="text-[#FAFBFC] text-sm">{useCase}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Personas */}
              <div className="bg-[#FAFBFC]/10 rounded-xl p-4 border border-[#007CC2]/20">
                <h3 className="text-lg font-semibold font-poppins text-[#FAFBFC] mb-3">
                  Target Personas
                </h3>
                <div className="flex flex-wrap gap-2">
                  {module.personas.map((persona, idx) => (
                    <Badge 
                      key={idx}
                      variant="secondary" 
                      className="bg-[#2A9D8F]/20 text-[#2A9D8F] border-[#2A9D8F]/30"
                    >
                      {persona}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* KPIs */}
              <div className="bg-[#FAFBFC]/10 rounded-xl p-4 border border-[#007CC2]/20">
                <h3 className="text-lg font-semibold font-poppins text-[#FAFBFC] mb-3">
                  Key Performance Indicators
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {module.kpis.map((kpi, idx) => (
                    <div key={idx} className="bg-[#FAFBFC]/5 rounded-lg p-3 border border-[#007CC2]/10">
                      <div className="flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-[#E48400]" />
                        <span className="text-[#FAFBFC] text-sm">{kpi}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* SAP Products */}
              <div className="bg-[#FAFBFC]/10 rounded-xl p-4 border border-[#007CC2]/20">
                <h3 className="text-lg font-semibold font-poppins text-[#FAFBFC] mb-3">
                  SAP Products & Solutions
                </h3>
                <div className="flex flex-wrap gap-2">
                  {module.sapProducts.map((product, idx) => (
                    <Badge 
                      key={idx}
                      variant="secondary" 
                      className="bg-[#007CC2]/20 text-[#007CC2] border-[#007CC2]/30"
                    >
                      {product}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Opportunities */}
              <div className="bg-[#FAFBFC]/10 rounded-xl p-4 border border-[#007CC2]/20">
                <h3 className="text-lg font-semibold font-poppins text-[#FAFBFC] mb-3">
                  Opportunities
                </h3>
                <div className="flex flex-wrap gap-2">
                  {module.opportunities.map((opportunity, idx) => (
                    <Badge 
                      key={idx}
                      variant="outline" 
                      className="bg-green-500/20 text-green-300 border-green-500/30"
                    >
                      {opportunity}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Source Links */}
              <div className="bg-[#FAFBFC]/10 rounded-xl p-4 border border-[#007CC2]/20">
                <h3 className="text-lg font-semibold font-poppins text-[#FAFBFC] mb-3">
                  Source Links
                </h3>
                <div className="flex flex-wrap gap-2">
                  {module.sourceUrls.map((url, idx) => (
                    <Button
                      key={idx}
                      variant="outline"
                      size="sm"
                      className="text-[#FAFBFC] border-[#007CC2]/30 hover:bg-[#007CC2]/20"
                      onClick={() => window.open(`https://${url}`, '_blank')}
                    >
                      <ExternalLink className="w-3 h-3 mr-1" />
                      {url}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Adoption Stats */}
              {module.adoptionStats && (
                <div className="bg-[#FAFBFC]/10 rounded-xl p-4 border border-[#007CC2]/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Zap className="w-5 h-5 text-[#E48400]" />
                    <h3 className="text-lg font-semibold font-poppins text-[#FAFBFC]">Adoption Statistics</h3>
                  </div>
                  <p className="text-[#FAFBFC]/80">{module.adoptionStats}</p>
                </div>
              )}

              {/* Metadata Summary */}
              {module.metadataSummary && (
                <div className="bg-[#FAFBFC]/10 rounded-xl p-4 border border-[#007CC2]/20">
                  <h3 className="text-lg font-semibold font-poppins text-[#FAFBFC] mb-2">
                    Summary
                  </h3>
                  <p className="text-[#FAFBFC]/80">{module.metadataSummary}</p>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}; 