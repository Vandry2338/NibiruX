import React from 'react';
import { useSAPUseCases } from '../hooks/useSAPUseCases';

export default function SAPUseCasesDemoPage() {
  const { useCases, loading, error } = useSAPUseCases();

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">SAP Use Cases (Live from Firestore)</h1>
      {loading && <div className="text-blue-500">Loading use cases...</div>}
      {error && <div className="text-red-500">Error: {error}</div>}
      {!loading && !error && useCases.length === 0 && (
        <div className="text-gray-500">No use cases found.</div>
      )}
      <ul className="space-y-4">
        {useCases.map((uc) => (
          <li key={uc.id} className="border rounded-lg p-4 shadow-sm bg-white">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-semibold">{uc.name}</h3>
              <span className="text-sm text-gray-500">{uc.industry}</span>
            </div>
            <p className="text-gray-600 mb-2">{uc.description}</p>
            <div className="flex gap-2">
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">{uc.category}</span>
              <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">{uc.implementation_complexity}</span>
              {uc.companies_started && (
                <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-sm">
                  {uc.companies_started} companies
                </span>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
} 