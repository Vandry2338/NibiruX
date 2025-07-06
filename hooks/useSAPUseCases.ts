import { useState, useEffect } from 'react';
import { 
  getAllSAPUseCases, 
  searchUseCases,
  getUseCaseById,
  getAllPainPoints,
  getAllRecommendations,
  getAllTopazAgents,
  getAllSAPAppStoreSolutions,
  getAllValueChains,
  getMetadata,
  type SAPUseCase,
  type SAPPainPoint,
  type SAPRecommendation,
  type SAPTopazAgent,
  type SAPAppStoreSolution,
  type SAPValueChain
} from '../lib/firestore';

export function useSAPUseCases() {
  const [useCases, setUseCases] = useState<SAPUseCase[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadUseCases();
  }, []);

  const loadUseCases = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getAllSAPUseCases();
      setUseCases(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load use cases');
    } finally {
      setLoading(false);
    }
  };

  const searchUseCasesData = async (searchTerm: string) => {
    try {
      setLoading(true);
      setError(null);
      const data = await searchUseCases(searchTerm);
      setUseCases(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to search use cases');
    } finally {
      setLoading(false);
    }
  };

  return {
    useCases,
    loading,
    error,
    loadUseCases,
    searchUseCases: searchUseCasesData,
    getUseCaseById,
    getAllPainPoints,
    getAllRecommendations,
    getAllTopazAgents,
    getAllSAPAppStoreSolutions,
    getAllValueChains,
    getMetadata
  };
} 