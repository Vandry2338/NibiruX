"use client"

import React, { useMemo, useState } from "react";
import { Search, Filter, ChevronDown, ChevronUp } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
// @ts-ignore
const aiCatalogData = require('../../lib/sap_ai_catalog_structured_data.json');

interface UseCase {
  id: string;
  name: string;
  industry: string;
  category: string;
  description: string;
  business_impact: string;
  implementation_complexity: string;
  roi_timeframe: string;
  products: string[];
  pain_points: string[];
  opportunities: string[];
  infosys_relevance: string;
  demo_url?: string;
  publication_date?: string;
  companies_started?: number;
  discovery_center_mission?: boolean;
  partner?: string;
  customer_example?: string;
  industry_example?: string;
  presenter?: string;
  release_date?: string;
  status?: string;
  sapValueChain?: string;
  title?: string;
  tags?: string[];
}

const useCases: UseCase[] = (aiCatalogData.use_cases || aiCatalogData || []);

// Helper to extract unique values for filters
function getUnique<T, K extends keyof T>(arr: T[], key: K): string[] {
  if (!Array.isArray(arr)) return [];
  const set = new Set<string>();
  for (const obj of arr) {
    const value = obj[key];
    if (Array.isArray(value)) {
      value.forEach((v) => v && set.add(v));
    } else if (typeof value === 'string' && value) {
      set.add(value);
    }
  }
  return Array.from(set);
}

const tiers = [1, 2, 3];
const statuses = ["Featured", "New", "Popular", "Standard"];
const infosysRelevance = ["Very High", "High", "Medium", "Low"];

export default function AICatalogPage() {
  // State for filters and toggles
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState<string>("");
  const [selectedValueChain, setSelectedValueChain] = useState<string>("");
  const [selectedSolutionType, setSelectedSolutionType] = useState<string>("");
  const [selectedProduct, setSelectedProduct] = useState<string>("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [videoOnly, setVideoOnly] = useState(false);
  const [newFeatured, setNewFeatured] = useState(false);

  // Helper to extract unique values
  function getUnique<T, K extends keyof T>(arr: T[], key: K): string[] {
    if (!Array.isArray(arr)) return [];
    const set = new Set<string>();
    for (const obj of arr) {
      const value = obj[key];
      if (Array.isArray(value)) {
        value.forEach((v) => v && set.add(v));
      } else if (typeof value === 'string' && value) {
        set.add(value);
      }
    }
    return Array.from(set);
  }

  // Filter options
  const industries = getUnique(useCases, "industry");
  const valueChains = getUnique(useCases, "sapValueChain");
  const solutionTypes = getUnique(useCases, "category");
  const safeUseCases = Array.isArray(useCases) ? useCases : [];
  const products = Array.from(new Set(safeUseCases.flatMap((u) => u.products || []))).sort();
  const tags = Array.from(new Set(safeUseCases.flatMap((u) => u.tags || []))).sort();

  // Filtering logic
  const filteredUseCases = useMemo(() => {
    return safeUseCases.filter((uc) => {
      const matchesSearch = searchTerm === "" ||
        uc.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        uc.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        uc.description?.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesIndustry = !selectedIndustry || uc.industry === selectedIndustry;
      const matchesValueChain = !selectedValueChain || uc.sapValueChain === selectedValueChain;
      const matchesSolutionType = !selectedSolutionType || uc.category === selectedSolutionType;
      const matchesProduct = !selectedProduct || (uc.products && uc.products.includes(selectedProduct));
      const matchesTags = selectedTags.length === 0 || ((uc.tags ?? []).length > 0 && selectedTags.every(tag => (uc.tags ?? []).includes(tag)));
      const matchesVideo = !videoOnly || !!uc.demo_url;
      const matchesNew = !newFeatured || (uc.status && ["New", "Featured"].includes(uc.status));
      return matchesSearch && matchesIndustry && matchesValueChain && matchesSolutionType && matchesProduct && matchesTags && matchesVideo && matchesNew;
    });
  }, [searchTerm, selectedIndustry, selectedValueChain, selectedSolutionType, selectedProduct, selectedTags, videoOnly, newFeatured]);

  // Value Chain count (unique value chains)
  const valueChainCount = new Set(safeUseCases.map(uc => uc.sapValueChain).filter(Boolean)).size;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 font-inter flex flex-col">
      {/* Header */}
      <div className="w-full px-8 py-10 flex flex-col items-center justify-center bg-transparent">
        <h1 className="text-4xl font-bold text-white mb-2 flex items-center gap-2">
          <span className="inline-flex items-center justify-center bg-orange-500 rounded-full w-10 h-10 mr-2">
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M12 2v2m0 16v2m10-10h-2M4 12H2m15.07-7.07l-1.41 1.41M6.34 17.66l-1.41 1.41m12.02 0l-1.41-1.41M6.34 6.34L4.93 4.93" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </span>
          Solution Explorer
        </h1>
        <p className="text-lg text-slate-200 mb-6 text-center max-w-2xl">Discover SAP use cases and value chain solutions with AI-powered insights and interactive exploration</p>
        <div className="flex gap-8 mb-6">
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-orange-400">{useCases.length}</span>
            <span className="text-slate-300 text-xs mt-1">SAP Use Cases</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-blue-400">{valueChainCount}</span>
            <span className="text-slate-300 text-xs mt-1">Value Chains</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-cyan-400">{filteredUseCases.length}</span>
            <span className="text-slate-300 text-xs mt-1">Filtered Results</span>
          </div>
        </div>
      </div>
      {/* Filters */}
      <div className="w-full bg-white/5 px-8 py-4 flex flex-col md:flex-row md:items-center gap-4 border-b border-slate-800">
        <div className="flex-1 flex items-center gap-2">
          <Input
            placeholder="Search solutions..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className="bg-slate-800 text-white border-slate-700"
          />
        </div>
        <div className="flex items-center gap-4 flex-wrap">
          <select value={selectedIndustry} onChange={e => setSelectedIndustry(e.target.value)} className="bg-slate-800 text-white border-slate-700 rounded px-3 py-2">
            <option value="">Industry (0)</option>
            {industries.map(ind => <option key={ind} value={ind}>{ind}</option>)}
          </select>
          <select value={selectedValueChain} onChange={e => setSelectedValueChain(e.target.value)} className="bg-slate-800 text-white border-slate-700 rounded px-3 py-2">
            <option value="">Value Chain Block (0)</option>
            {valueChains.map(vc => <option key={vc} value={vc}>{vc}</option>)}
          </select>
          <select value={selectedSolutionType} onChange={e => setSelectedSolutionType(e.target.value)} className="bg-slate-800 text-white border-slate-700 rounded px-3 py-2">
            <option value="">Solution Type (0)</option>
            {solutionTypes.map(st => <option key={st} value={st}>{st}</option>)}
          </select>
          <select value={selectedProduct} onChange={e => setSelectedProduct(e.target.value)} className="bg-slate-800 text-white border-slate-700 rounded px-3 py-2">
            <option value="">SAP Product/Platform (0)</option>
            {products.map(p => <option key={p} value={p}>{p}</option>)}
          </select>
          <select multiple value={selectedTags} onChange={e => setSelectedTags(Array.from(e.target.selectedOptions, option => option.value))} className="bg-slate-800 text-white border-slate-700 rounded px-3 py-2">
            <option value="">Tags (0)</option>
            {tags.map(tag => <option key={tag} value={tag}>{tag}</option>)}
          </select>
          <div className="flex items-center gap-2">
            <span className="text-slate-300 text-xs">Video/Demo Only</span>
            <input type="checkbox" checked={videoOnly} onChange={e => setVideoOnly(e.target.checked)} className="accent-blue-500" />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-slate-300 text-xs">New/Featured</span>
            <input type="checkbox" checked={newFeatured} onChange={e => setNewFeatured(e.target.checked)} className="accent-orange-500" />
          </div>
        </div>
      </div>
      {/* Use Cases Grid */}
      <div className="flex-1 w-full px-8 py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-y-auto">
        {filteredUseCases.map(uc => (
          <Card key={uc.id} className="bg-slate-800 border-slate-700 hover:border-blue-500 transition-colors">
            <div className="p-6">
              <div className="flex flex-wrap gap-x-2 gap-y-1 mb-2">
                <Badge variant="secondary">{uc.industry}</Badge>
                <Badge variant="secondary">{uc.sapValueChain}</Badge>
                <Badge variant="secondary">{uc.category}</Badge>
                <Badge variant="secondary">{uc.status}</Badge>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{uc.name || uc.title}</h3>
              <p className="text-slate-300 text-sm mb-3">{uc.description}</p>
              {uc.demo_url && (
                <a href={uc.demo_url} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 text-sm">View Demo →</a>
              )}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
} 