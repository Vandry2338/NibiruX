// lib/firestore.ts
import { collection, getDocs, doc, getDoc, query, where, orderBy, limit } from 'firebase/firestore';
import { db } from './firebase';

// Updated interface to match the new schema structure
export interface SAPUseCase {
  useCaseId: string;
  name: string;
  description: string;
  recommendedSapAppStoreSolutionsRefs: string[];
  relatedTopazAgentsRefs: string[];
  uploaded_at?: Date;
}

// New interfaces for the complete schema
export interface SAPPainPoint {
  painPointId: string;
  name: string;
  description: string;
  relatedRecommendationsRefs: string[];
  uploaded_at?: Date;
}

export interface SAPRecommendation {
  recommendationId: string;
  name: string;
  description: string;
  kpiRefs: string[];
  uploaded_at?: Date;
}

export interface SAPTopazAgent {
  agentId: string;
  name: string;
  description: string;
  uploaded_at?: Date;
}

export interface SAPAppStoreSolution {
  solutionId: string;
  name: string;
  description: string;
  link: string;
  uploaded_at?: Date;
}

export interface SAPValueChain {
  valueChainId: string;
  name: string;
  industry: string;
  valueChainBlocks: any[];
  uploaded_at?: Date;
}

// Collection names matching the new schema
export const COLLECTIONS = {
  USE_CASES: 'useCases',
  PAIN_POINTS: 'painPoints',
  RECOMMENDATIONS: 'recommendations',
  TOPAZ_AGENTS: 'topazAgents',
  SAP_APP_STORE_SOLUTIONS: 'sapAppStoreSolutions',
  VALUE_CHAINS: 'valueChains',
  USERS: 'users',
  PROJECTS: 'projects',
  PERSONAS: 'personas',
  KPIS: 'kpis',
  METADATA: 'metadata'
};

// Get all SAP use cases from the new schema
export async function getAllSAPUseCases(): Promise<SAPUseCase[]> {
  try {
    console.log('Fetching SAP use cases from new schema...');
    const querySnapshot = await getDocs(collection(db, COLLECTIONS.USE_CASES));
    
    if (querySnapshot.empty) {
      console.log('No use cases found in collection:', COLLECTIONS.USE_CASES);
      return [];
    }
    
    const useCases: SAPUseCase[] = [];
    
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      useCases.push({
        useCaseId: data.useCaseId || doc.id,
        name: data.name || '',
        description: data.description || '',
        recommendedSapAppStoreSolutionsRefs: data.recommendedSapAppStoreSolutionsRefs || [],
        relatedTopazAgentsRefs: data.relatedTopazAgentsRefs || [],
        uploaded_at: data.uploaded_at
      });
    });
    
    console.log(`Found ${useCases.length} use cases from new schema`);
    return useCases;
  } catch (error) {
    console.error('Error fetching SAP use cases:', error);
    throw error;
  }
}

// Get all pain points
export async function getAllPainPoints(): Promise<SAPPainPoint[]> {
  try {
    const querySnapshot = await getDocs(collection(db, COLLECTIONS.PAIN_POINTS));
    return querySnapshot.docs.map(doc => ({
      painPointId: doc.data().painPointId || doc.id,
      name: doc.data().name || '',
      description: doc.data().description || '',
      relatedRecommendationsRefs: doc.data().relatedRecommendationsRefs || [],
      uploaded_at: doc.data().uploaded_at
    }));
  } catch (error) {
    console.error('Error fetching pain points:', error);
    throw error;
  }
}

// Get all recommendations
export async function getAllRecommendations(): Promise<SAPRecommendation[]> {
  try {
    const querySnapshot = await getDocs(collection(db, COLLECTIONS.RECOMMENDATIONS));
    return querySnapshot.docs.map(doc => ({
      recommendationId: doc.data().recommendationId || doc.id,
      name: doc.data().name || '',
      description: doc.data().description || '',
      kpiRefs: doc.data().kpiRefs || [],
      uploaded_at: doc.data().uploaded_at
    }));
  } catch (error) {
    console.error('Error fetching recommendations:', error);
    throw error;
  }
}

// Get all Topaz agents
export async function getAllTopazAgents(): Promise<SAPTopazAgent[]> {
  try {
    const querySnapshot = await getDocs(collection(db, COLLECTIONS.TOPAZ_AGENTS));
    return querySnapshot.docs.map(doc => ({
      agentId: doc.data().agentId || doc.id,
      name: doc.data().name || '',
      description: doc.data().description || '',
      uploaded_at: doc.data().uploaded_at
    }));
  } catch (error) {
    console.error('Error fetching Topaz agents:', error);
    throw error;
  }
}

// Get all SAP App Store solutions
export async function getAllSAPAppStoreSolutions(): Promise<SAPAppStoreSolution[]> {
  try {
    const querySnapshot = await getDocs(collection(db, COLLECTIONS.SAP_APP_STORE_SOLUTIONS));
    return querySnapshot.docs.map(doc => ({
      solutionId: doc.data().solutionId || doc.id,
      name: doc.data().name || '',
      description: doc.data().description || '',
      link: doc.data().link || '',
      uploaded_at: doc.data().uploaded_at
    }));
  } catch (error) {
    console.error('Error fetching SAP App Store solutions:', error);
    throw error;
  }
}

// Get all value chains
export async function getAllValueChains(): Promise<SAPValueChain[]> {
  try {
    const querySnapshot = await getDocs(collection(db, COLLECTIONS.VALUE_CHAINS));
    return querySnapshot.docs.map(doc => ({
      valueChainId: doc.data().valueChainId || doc.id,
      name: doc.data().name || '',
      industry: doc.data().industry || '',
      valueChainBlocks: doc.data().valueChainBlocks || [],
      uploaded_at: doc.data().uploaded_at
    }));
  } catch (error) {
    console.error('Error fetching value chains:', error);
    throw error;
  }
}

// Search use cases
export async function searchUseCases(searchTerm: string): Promise<SAPUseCase[]> {
  try {
    const allUseCases = await getAllSAPUseCases();
    return allUseCases.filter(useCase => 
      useCase.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      useCase.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  } catch (error) {
    console.error('Error searching use cases:', error);
    throw error;
  }
}

// Get a specific use case by ID
export async function getUseCaseById(id: string): Promise<SAPUseCase | null> {
  try {
    const docRef = doc(db, COLLECTIONS.USE_CASES, id);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      const data = docSnap.data();
      return {
        useCaseId: data.useCaseId || docSnap.id,
        name: data.name || '',
        description: data.description || '',
        recommendedSapAppStoreSolutionsRefs: data.recommendedSapAppStoreSolutionsRefs || [],
        relatedTopazAgentsRefs: data.relatedTopazAgentsRefs || [],
        uploaded_at: data.uploaded_at
      };
    } else {
      return null;
    }
  } catch (error) {
    console.error('Error fetching use case by ID:', error);
    throw error;
  }
}

// Get metadata
export async function getMetadata(): Promise<any> {
  try {
    const docRef = doc(db, COLLECTIONS.METADATA, 'sap_data_overview');
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      return null;
    }
  } catch (error) {
    console.error('Error fetching metadata:', error);
    throw error;
  }
} 