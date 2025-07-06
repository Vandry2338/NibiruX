import { useState, useEffect } from 'react';
import { useSAPUseCases } from '../hooks/useSAPUseCases';
import { getAllPainPoints, getAllRecommendations, getAllTopazAgents, getAllSAPAppStoreSolutions, getAllValueChains, getMetadata } from '../lib/firestore';

export default function FirebaseDebug() {
  const { useCases, loading, error } = useSAPUseCases();
  const [metadata, setMetadata] = useState<any>(null);
  const [painPoints, setPainPoints] = useState<any[]>([]);
  const [recommendations, setRecommendations] = useState<any[]>([]);
  const [topazAgents, setTopazAgents] = useState<any[]>([]);
  const [sapSolutions, setSapSolutions] = useState<any[]>([]);
  const [valueChains, setValueChains] = useState<any[]>([]);

  useEffect(() => {
    const loadAllData = async () => {
      try {
        const [meta, pain, rec, agents, solutions, chains] = await Promise.all([
          getMetadata(),
          getAllPainPoints(),
          getAllRecommendations(),
          getAllTopazAgents(),
          getAllSAPAppStoreSolutions(),
          getAllValueChains()
        ]);
        
        setMetadata(meta);
        setPainPoints(pain);
        setRecommendations(rec);
        setTopazAgents(agents);
        setSapSolutions(solutions);
        setValueChains(chains);
      } catch (err) {
        console.error('Error loading data:', err);
      }
    };

    loadAllData();
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Firebase Debug Page</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Use Cases */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Use Cases</h2>
          {loading ? (
            <p className="text-gray-600">Loading...</p>
          ) : error ? (
            <p className="text-red-600">Error: {error}</p>
          ) : (
            <div>
              <p className="text-2xl font-bold text-blue-600">{useCases.length}</p>
              <p className="text-sm text-gray-600">Total use cases found</p>
              {useCases.length > 0 && (
                <div className="mt-2">
                  <p className="text-sm font-medium">Sample use case:</p>
                  <p className="text-xs text-gray-600">{useCases[0]?.name}</p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Pain Points */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Pain Points</h2>
          <div>
            <p className="text-2xl font-bold text-green-600">{painPoints.length}</p>
            <p className="text-sm text-gray-600">Total pain points found</p>
            {painPoints.length > 0 && (
              <div className="mt-2">
                <p className="text-sm font-medium">Sample pain point:</p>
                <p className="text-xs text-gray-600">{painPoints[0]?.name}</p>
              </div>
            )}
          </div>
        </div>

        {/* Recommendations */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Recommendations</h2>
          <div>
            <p className="text-2xl font-bold text-purple-600">{recommendations.length}</p>
            <p className="text-sm text-gray-600">Total recommendations found</p>
            {recommendations.length > 0 && (
              <div className="mt-2">
                <p className="text-sm font-medium">Sample recommendation:</p>
                <p className="text-xs text-gray-600">{recommendations[0]?.name}</p>
              </div>
            )}
          </div>
        </div>

        {/* Topaz Agents */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Topaz Agents</h2>
          <div>
            <p className="text-2xl font-bold text-orange-600">{topazAgents.length}</p>
            <p className="text-sm text-gray-600">Total Topaz agents found</p>
            {topazAgents.length > 0 && (
              <div className="mt-2">
                <p className="text-sm font-medium">Sample agent:</p>
                <p className="text-xs text-gray-600">{topazAgents[0]?.name}</p>
              </div>
            )}
          </div>
        </div>

        {/* SAP Solutions */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">SAP Solutions</h2>
          <div>
            <p className="text-2xl font-bold text-red-600">{sapSolutions.length}</p>
            <p className="text-sm text-gray-600">Total SAP solutions found</p>
            {sapSolutions.length > 0 && (
              <div className="mt-2">
                <p className="text-sm font-medium">Sample solution:</p>
                <p className="text-xs text-gray-600">{sapSolutions[0]?.name}</p>
              </div>
            )}
          </div>
        </div>

        {/* Value Chains */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Value Chains</h2>
          <div>
            <p className="text-2xl font-bold text-indigo-600">{valueChains.length}</p>
            <p className="text-sm text-gray-600">Total value chains found</p>
            {valueChains.length > 0 && (
              <div className="mt-2">
                <p className="text-sm font-medium">Sample value chain:</p>
                <p className="text-xs text-gray-600">{valueChains[0]?.name}</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Metadata */}
      {metadata && (
        <div className="mt-6 bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Metadata</h2>
          <pre className="text-xs bg-gray-100 p-2 rounded overflow-auto">
            {JSON.stringify(metadata, null, 2)}
          </pre>
        </div>
      )}

      {/* Sample Use Case Details */}
      {useCases.length > 0 && (
        <div className="mt-6 bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Sample Use Case Details</h2>
          <div className="space-y-2">
            <p><strong>ID:</strong> {useCases[0].useCaseId}</p>
            <p><strong>Name:</strong> {useCases[0].name}</p>
            <p><strong>Description:</strong> {useCases[0].description.substring(0, 200)}...</p>
            <p><strong>SAP Solutions:</strong> {useCases[0].recommendedSapAppStoreSolutionsRefs.length} references</p>
            <p><strong>Topaz Agents:</strong> {useCases[0].relatedTopazAgentsRefs.length} references</p>
          </div>
        </div>
      )}
    </div>
  );
} 