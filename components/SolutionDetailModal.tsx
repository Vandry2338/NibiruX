import React from 'react';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from './ui/dialog';
import { SolutionTile as SolutionTileType } from '../lib/types/solution-explorer';

interface SolutionDetailModalProps {
  open: boolean;
  onClose: () => void;
  solution?: any; // Replace 'any' with SolutionTileType when available
}

export const SolutionDetailModal: React.FC<SolutionDetailModalProps> = ({ open, onClose, solution }) => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl bg-gradient-to-br from-[#0A2540] to-[#1B3A5B] border-[#007CC2] glassmorphism">
        <DialogTitle className="font-poppins text-2xl text-[#FAFBFC]">{solution?.name || 'Solution Name'}</DialogTitle>
        <DialogDescription className="text-[#FAFBFC] opacity-80 mb-4">{solution?.summary || 'Solution summary goes here.'}</DialogDescription>
        <div className="text-[#E48400] font-semibold mb-2">{solution?.status || 'Status'}</div>
        <div className="text-[#2A9D8F] mb-2">{solution?.industry || 'Industry'}</div>
        {/* Add more fields as needed */}
      </DialogContent>
    </Dialog>
  );
}; 