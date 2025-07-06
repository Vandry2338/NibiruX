import React from 'react';
// Placeholder for SolutionTileType, replace with actual import
// import { SolutionTile as SolutionTileType } from '../lib/types/solution-explorer';

interface SolutionTileProps {
  solution: any; // Replace 'any' with SolutionTileType when available
  onClick?: () => void;
}

export const SolutionTile: React.FC<SolutionTileProps> = ({ solution, onClick }) => {
  return (
    <div
      className="rounded-2xl bg-gradient-to-br from-[#0A2540] to-[#1B3A5B] shadow-xl border border-[#007CC2] p-6 cursor-pointer hover:scale-[1.03] transition-transform duration-200 glassmorphism"
      onClick={onClick}
      role="button"
      tabIndex={0}
      aria-label={`View details for ${solution?.name || 'solution'}`}
    >
      <div className="font-poppins text-xl font-bold text-[#FAFBFC] mb-2">{solution?.name || 'Solution Name'}</div>
      <div className="text-[#E48400] text-sm font-semibold mb-1">{solution?.status || 'Status'}</div>
      <div className="text-[#2A9D8F] text-xs mb-2">{solution?.industry || 'Industry'}</div>
      <div className="text-[#FAFBFC] text-sm opacity-80">{solution?.summary || 'Solution summary goes here.'}</div>
    </div>
  );
}; 