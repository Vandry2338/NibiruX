import React from 'react';
import { Dialog, DialogContent } from './ui/dialog';
import { Badge } from './ui/badge';
import { SolutionTile as SolutionTileType } from '../lib/types/solution-explorer';

interface SolutionDetailDrawerProps {
  open: boolean;
  solution: SolutionTileType | null;
  onClose: () => void;
}

export const SolutionDetailDrawer: React.FC<SolutionDetailDrawerProps> = ({ open, solution, onClose }) => {
  if (!solution) return null;
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl bg-gradient-to-br from-[#1A2740]/95 to-[#232F47]/95 text-white border border-white/10 shadow-2xl">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2 mb-2">
            <h2 className="text-3xl font-bold flex-1">{solution.title}</h2>
            <Badge className="bg-orange-500/90 text-white">{solution.status}</Badge>
            {solution.lastUpdated && <Badge className="bg-white/10 text-xs text-white">Updated</Badge>}
          </div>
          <div className="text-slate-200 mb-2">{solution.description}</div>
          <div className="flex flex-wrap gap-2 mb-2">
            {solution.tags.map((tag) => (
              <Badge key={tag} className="bg-blue-600/80 text-white text-xs">{tag}</Badge>
            ))}
          </div>
          <div className="flex flex-wrap gap-2 mb-2">
            {solution.sapProducts.map((prod) => (
              <Badge key={prod} className="bg-gradient-to-r from-blue-400 to-orange-400 text-white text-xs">{prod}</Badge>
            ))}
          </div>
          {solution.demoVideoUrl && (
            <div className="mb-2">
              <iframe
                src={solution.demoVideoUrl.replace('watch?v=', 'embed/')}
                title="Demo Video"
                className="w-full h-56 rounded-lg border border-white/10"
                allowFullScreen
              />
            </div>
          )}
          <div className="grid grid-cols-2 gap-4 mb-2">
            <div>
              <div className="font-semibold text-blue-300 mb-1">Personas</div>
              <div className="flex flex-wrap gap-1">
                {solution.personas.map((p) => (
                  <Badge key={p} className="bg-white/10 text-white text-xs">{p}</Badge>
                ))}
              </div>
            </div>
            <div>
              <div className="font-semibold text-blue-300 mb-1">KPIs</div>
              <div className="flex flex-wrap gap-1">
                {solution.kpis.map((k) => (
                  <Badge key={k} className="bg-white/10 text-white text-xs">{k}</Badge>
                ))}
              </div>
            </div>
            <div>
              <div className="font-semibold text-orange-300 mb-1">Pain Points</div>
              <div className="flex flex-wrap gap-1">
                {solution.painPoints.map((p) => (
                  <Badge key={p} className="bg-orange-500/20 text-orange-200 text-xs">{p}</Badge>
                ))}
              </div>
            </div>
            <div>
              <div className="font-semibold text-green-300 mb-1">Opportunities</div>
              <div className="flex flex-wrap gap-1">
                {solution.opportunities.map((o) => (
                  <Badge key={o} className="bg-green-500/20 text-green-200 text-xs">{o}</Badge>
                ))}
              </div>
            </div>
          </div>
          {solution.adoptionStats && (
            <div className="text-blue-400 font-semibold">Adoption: {solution.adoptionStats}</div>
          )}
          {solution.roadmap && solution.roadmap.length > 0 && (
            <div className="mt-2">
              <div className="font-semibold text-purple-300 mb-1">Roadmap</div>
              <ul className="list-disc list-inside text-slate-200 text-sm">
                {solution.roadmap.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          )}
          <div className="mt-2 flex flex-wrap gap-2">
            {solution.sourceUrls.map((url, idx) => (
              <a
                key={idx}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-blue-400 hover:text-orange-400 text-xs"
              >
                Source {idx + 1}
              </a>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}; 