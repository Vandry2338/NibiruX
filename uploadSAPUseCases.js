const admin = require('firebase-admin');
const fs = require('fs');

// Initialize Firebase Admin
const serviceAccount = require('./serviceAccountKey.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

async function uploadSAPUseCases() {
  try {
    console.log('Starting SAP use cases upload...');
    
    // Read the JSON file
    const jsonData = JSON.parse(fs.readFileSync('./all_sap_use_cases_consolidated.json', 'utf8'));
    
    console.log('JSON data loaded successfully');
    console.log('Metadata:', jsonData.metadata);
    console.log('Use cases count:', jsonData.use_cases.length);
    
    // Upload each use case as a separate document
    const collectionRef = db.collection('sap_use_cases');
    
    for (let i = 0; i < jsonData.use_cases.length; i++) {
      const useCase = jsonData.use_cases[i];
      
      // Add upload timestamp
      useCase.uploaded_at = admin.firestore.FieldValue.serverTimestamp();
      
      // Use the use case ID as document ID, or generate one
      const docId = useCase.id || `use_case_${i + 1}`;
      
      await collectionRef.doc(docId).set(useCase);
      
      if ((i + 1) % 50 === 0) {
        console.log(`Uploaded ${i + 1} use cases...`);
      }
    }
    
    // Upload metadata
    await db.collection('metadata').doc('sap_use_cases_metadata').set({
      ...jsonData.metadata,
      uploaded_at: admin.firestore.FieldValue.serverTimestamp(),
      total_uploaded: jsonData.use_cases.length
    });
    
    console.log(`✅ Successfully uploaded ${jsonData.use_cases.length} SAP use cases!`);
    console.log('Collection name: sap_use_cases');
    console.log('Metadata document: metadata/sap_use_cases_metadata');
    
  } catch (error) {
    console.error('❌ Error uploading SAP use cases:', error);
  }
}

uploadSAPUseCases(); 