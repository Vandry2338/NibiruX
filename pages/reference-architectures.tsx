import React, { useState } from "react";
// @ts-ignore
const refArchData = require('../lib/SAP_ref_architecture.json');
const architectures: any[] = refArchData.architectures || refArchData || [];

export default function ReferenceArchitecturesPage() {
  // State for filters
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedDomain, setSelectedDomain] = useState<string>("");
  const [selectedPartner, setSelectedPartner] = useState<string>("");

  // Helper to extract unique values
  function getUnique(arr: any[], key: string): string[] {
    if (!Array.isArray(arr)) return [];
    const set = new Set<string>();
    for (const obj of arr) {
      const value = obj[key];
      if (Array.isArray(value)) {
        value.forEach((v: string) => v && set.add(v));
      } else if (typeof value === 'string' && value) {
        set.add(value);
      }
    }
    return Array.from(set);
  }

  const domains = getUnique(architectures, "domain");
  const partners = getUnique(architectures, "partners");

  // Filtering logic
  const filteredArchitectures = architectures.filter((arch: any) => {
    const matchesSearch = searchTerm === "" ||
      arch.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      arch.description?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDomain = !selectedDomain || arch.domain === selectedDomain;
    const matchesPartner = !selectedPartner || (arch.partners && arch.partners.includes(selectedPartner));
    return matchesSearch && matchesDomain && matchesPartner;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 font-inter flex flex-col">
      {/* Filters */}
      <div className="w-full px-8 py-8 flex flex-col md:flex-row md:items-center gap-4 border-b border-slate-800 bg-white/5">
        <div className="flex-1 flex items-center gap-2">
          <input
            placeholder="Search architectures..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className="bg-slate-800 text-white border-slate-700 rounded px-3 py-2 w-full"
          />
        </div>
        <select value={selectedDomain} onChange={e => setSelectedDomain(e.target.value)} className="bg-slate-800 text-white border-slate-700 rounded px-3 py-2">
          <option value="">Technology Domains</option>
          {domains.map((domain: string) => <option key={domain} value={domain}>{domain}</option>)}
        </select>
        <select value={selectedPartner} onChange={e => setSelectedPartner(e.target.value)} className="bg-slate-800 text-white border-slate-700 rounded px-3 py-2">
          <option value="">Technology Partners</option>
          {partners.map((partner: string) => <option key={partner} value={partner}>{partner}</option>)}
        </select>
      </div>
      {/* Architectures Grid */}
      <div className="flex-1 w-full px-8 py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredArchitectures.map((arch: any) => {
          const tags = arch.tags || [];
          const visibleTags = tags.slice(0, 3);
          const extraTagCount = tags.length > 3 ? tags.length - 3 : 0;
          return (
            <div key={arch.id as string} className="bg-slate-800 border border-slate-700 rounded-2xl shadow-lg flex flex-col h-full">
              {/* Card header bar */}
              <div className="h-2 rounded-t-2xl bg-gradient-to-r from-orange-500 via-blue-500 to-cyan-400" />
              <div className="flex-1 flex flex-col p-6">
                <h3 className="text-xl font-bold text-white mb-2 leading-tight">{arch.name}</h3>
                <p className="text-slate-200 text-sm mb-4 line-clamp-3">{arch.description}</p>
                {/* Show image only for Joule Studio architecture */}
                {arch.name === "Extend Joule with Joule Studio" && (
                  <img
                    src="/joule-studio-architecture.svg"
                    alt="Joule Studio Reference Architecture"
                    className="rounded-lg shadow mb-4 max-h-56 w-auto mx-auto border border-slate-700 bg-white"
                    style={{ objectFit: 'contain' }}
                  />
                )}
                <div className="flex flex-wrap gap-2 mb-4">
                  {visibleTags.map((tag: string) => (
                    <span key={tag} className="bg-blue-700 text-white text-xs px-2 py-1 rounded font-medium">{tag}</span>
                  ))}
                  {extraTagCount > 0 && (
                    <span className="bg-slate-600 text-white text-xs px-2 py-1 rounded font-medium">+{extraTagCount}</span>
                  )}
                </div>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-700">
                  <span className="text-xs text-slate-400">Last Update: {arch.lastUpdate}</span>
                  {arch.architectureUrl && (
                    <a href={arch.architectureUrl as string} target="_blank" rel="noopener noreferrer" className="ml-2 text-blue-400 hover:text-blue-300">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeWidth="2" d="M7 17l10-10M17 7h-6m6 0v6"/></svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
} 