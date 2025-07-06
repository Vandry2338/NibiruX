import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from './ui/badge';
import { SolutionTile as SolutionTileType } from '../lib/types/solution-explorer';

interface SolutionTileProps {
  solution: SolutionTileType;
  onClick: () => void;
}

export const SolutionTile: React.FC<SolutionTileProps> = ({ solution, onClick }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03, boxShadow: '0 8px 32px 0 rgba(16,27,45,0.25)' }}
      whileTap={{ scale: 0.98 }}
      className="relative cursor-pointer rounded-2xl bg-gradient-to-br from-[#1A2740]/80 to-[#232F47]/80 shadow-xl border border-white/10 backdrop-blur-lg p-6 flex flex-col min-h-[320px] transition-all group"
      onClick={onClick}
      tabIndex={0}
      aria-label={`Open details for ${solution.title}`}
    >
      <div className="flex items-center gap-2 mb-2">
        {solution.status === 'Featured' && <Badge className="bg-orange-500/90 text-white">Featured</Badge>}
        {solution.status === 'New' && <Badge className="bg-blue-500/90 text-white">New</Badge>}
        {solution.status === 'Deprecated' && <Badge className="bg-gray-500/80 text-white">Deprecated</Badge>}
        {solution.lastUpdated && <Badge className="bg-white/10 text-xs text-white ml-auto">Updated</Badge>}
      </div>
      <h2 className="text-2xl font-bold mb-2 text-white drop-shadow-lg leading-tight group-hover:text-blue-300 transition-colors">
        {solution.title}
      </h2>
      <div className="text-sm text-slate-200 mb-3 line-clamp-3">{solution.description}</div>
      <div className="flex flex-wrap gap-2 mb-3">
        {solution.tags.map((tag) => (
          <Badge key={tag} className="bg-blue-600/80 text-white text-xs">{tag}</Badge>
        ))}
      </div>
      <div className="flex items-center gap-2 mt-auto">
        {solution.sapProducts.map((prod) => (
          <Badge key={prod} className="bg-gradient-to-r from-blue-400 to-orange-400 text-white text-xs">{prod}</Badge>
        ))}
        {solution.demoVideoUrl && (
          <span className="ml-auto text-orange-400 font-semibold flex items-center gap-1">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M4 4l12 6-12 6V4z" /></svg>
            Demo
          </span>
        )}
      </div>
      <div className="absolute right-4 top-4">
        {solution.valueChainBlock?.map((block) => (
          <Badge key={block} className="bg-gradient-to-r from-blue-500 to-orange-400 text-white text-xs mr-1">
            {block}
          </Badge>
        ))}
      </div>
    </motion.div>
  );
}; 