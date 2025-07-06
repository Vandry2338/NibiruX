import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../lib/firebase';

export default function FirebaseTest() {
  const [testResults, setTestResults] = useState<any>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    testFirebaseConnection();
  }, []);

  const testFirebaseConnection = async () => {
    const results: any = {};
    
    try {
      // Test 1: Check if Firebase is initialized
      results.firebaseInitialized = !!db;
      results.projectId = db?.app?.options?.projectId;
      
      // Test 2: Try to access the useCases collection
      try {
        const useCasesCollection = collection(db, 'useCases');
        const querySnapshot = await getDocs(useCasesCollection);
        results.useCasesCount = querySnapshot.size;
        results.useCasesFound = true;
        
        // Get sample document
        if (!querySnapshot.empty) {
          const firstDoc = querySnapshot.docs[0];
          results.sampleUseCase = {
            id: firstDoc.id,
            data: firstDoc.data()
          };
        }
      } catch (error) {
        results.useCasesError = error instanceof Error ? error.message : 'Unknown error';
        results.useCasesFound = false;
      }
      
      // Test 3: Try to access other collections
      const collections = ['painPoints', 'recommendations', 'topazAgents', 'sapAppStoreSolutions', 'valueChains'];
      
      for (const collectionName of collections) {
        try {
          const col = collection(db, collectionName);
          const snapshot = await getDocs(col);
          results[`${collectionName}Count`] = snapshot.size;
        } catch (error) {
          results[`${collectionName}Error`] = error instanceof Error ? error.message : 'Unknown error';
        }
      }
      
    } catch (error) {
      results.generalError = error instanceof Error ? error.message : 'Unknown error';
    }
    
    setTestResults(results);
    setLoading(false);
  };

  if (loading) {
    return (
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Firebase Connection Test</h1>
        <p>Testing Firebase connection...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Firebase Connection Test</h1>
      
      <div className="space-y-6">
        {/* Firebase Status */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Firebase Status</h2>
          <div className="space-y-2">
            <p><strong>Initialized:</strong> {testResults.firebaseInitialized ? '✅ Yes' : '❌ No'}</p>
            <p><strong>Project ID:</strong> {testResults.projectId || 'Not set'}</p>
          </div>
        </div>

        {/* Use Cases Test */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Use Cases Collection Test</h2>
          <div className="space-y-2">
            <p><strong>Collection Found:</strong> {testResults.useCasesFound ? '✅ Yes' : '❌ No'}</p>
            <p><strong>Document Count:</strong> {testResults.useCasesCount || 0}</p>
            {testResults.useCasesError && (
              <p className="text-red-600"><strong>Error:</strong> {testResults.useCasesError}</p>
            )}
            {testResults.sampleUseCase && (
              <div className="mt-2">
                <p className="text-sm font-medium">Sample Document:</p>
                <pre className="text-xs bg-gray-100 p-2 rounded overflow-auto">
                  {JSON.stringify(testResults.sampleUseCase, null, 2)}
                </pre>
              </div>
            )}
          </div>
        </div>

        {/* Other Collections */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Other Collections</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p><strong>Pain Points:</strong> {testResults.painPointsCount || 0}</p>
              {testResults.painPointsError && <p className="text-red-600 text-sm">{testResults.painPointsError}</p>}
            </div>
            <div>
              <p><strong>Recommendations:</strong> {testResults.recommendationsCount || 0}</p>
              {testResults.recommendationsError && <p className="text-red-600 text-sm">{testResults.recommendationsError}</p>}
            </div>
            <div>
              <p><strong>Topaz Agents:</strong> {testResults.topazAgentsCount || 0}</p>
              {testResults.topazAgentsError && <p className="text-red-600 text-sm">{testResults.topazAgentsError}</p>}
            </div>
            <div>
              <p><strong>SAP Solutions:</strong> {testResults.sapAppStoreSolutionsCount || 0}</p>
              {testResults.sapAppStoreSolutionsError && <p className="text-red-600 text-sm">{testResults.sapAppStoreSolutionsError}</p>}
            </div>
            <div>
              <p><strong>Value Chains:</strong> {testResults.valueChainsCount || 0}</p>
              {testResults.valueChainsError && <p className="text-red-600 text-sm">{testResults.valueChainsError}</p>}
            </div>
          </div>
        </div>

        {/* General Error */}
        {testResults.generalError && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
            <strong>General Error:</strong> {testResults.generalError}
          </div>
        )}

        {/* Raw Results */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Raw Test Results</h2>
          <pre className="text-xs bg-gray-100 p-2 rounded overflow-auto">
            {JSON.stringify(testResults, null, 2)}
          </pre>
        </div>
      </div>
    </div>
  );
} 