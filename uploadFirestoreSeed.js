// uploadFirestoreSeed.js
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const fs = require('fs');

// Load your Firebase service account key
// Make sure to place your serviceAccountKey.json in the project root
const serviceAccount = require('./serviceAccountKey.json');

// Initialize Firebase Admin
initializeApp({
  credential: cert(serviceAccount),
});

const db = getFirestore();

// Read from all_sap_use_cases_consolidated.json
const seedData = JSON.parse(fs.readFileSync('./all_sap_use_cases_consolidated.json', 'utf8'));

// Upload metadata
async function uploadMetadata() {
  if (!seedData.metadata) {
    console.error('No metadata found in seedData.json');
    return;
  }
  
  try {
    await db.collection('metadata').doc('sap_use_cases').set({
      ...seedData.metadata,
      uploaded_at: new Date(),
      total_use_cases: seedData.use_cases ? seedData.use_cases.length : 0
    });
    console.log('✅ Uploaded metadata: sap_use_cases');
  } catch (error) {
    console.error('❌ Error uploading metadata:', error);
  }
}

// Upload use cases
async function uploadUseCases() {
  if (!seedData.use_cases || !Array.isArray(seedData.use_cases)) {
    console.error('No use_cases array found in all_sap_use_cases_consolidated.json');
    return;
  }

  console.log(`📊 Starting upload of ${seedData.use_cases.length} use cases...`);
  
  let successCount = 0;
  let errorCount = 0;

  for (const useCase of seedData.use_cases) {
    try {
      await db.collection('all_sap_use_cases_consolidated').doc(useCase.id).set(useCase);
      console.log(`✅ Uploaded use case: ${useCase.id} - ${useCase.name}`);
      successCount++;
    } catch (error) {
      console.error(`❌ Error uploading use case ${useCase.id}:`, error.message);
      errorCount++;
    }
  }

  console.log(`\n📈 Upload Summary:`);
  console.log(`   ✅ Successfully uploaded: ${successCount} use cases`);
  console.log(`   ❌ Failed uploads: ${errorCount} use cases`);
  console.log(`   📊 Total processed: ${seedData.use_cases.length} use cases`);
}

// Upload by industry (for easier querying)
async function uploadUseCasesByIndustry() {
  if (!seedData.use_cases) return;

  const industryGroups = {};
  
  // Group use cases by industry
  seedData.use_cases.forEach(useCase => {
    const industry = useCase.industry || 'Cross-Industry';
    if (!industryGroups[industry]) {
      industryGroups[industry] = [];
    }
    industryGroups[industry].push(useCase);
  });

  console.log(`\n🏭 Uploading industry groupings...`);

  for (const [industry, useCases] of Object.entries(industryGroups)) {
    try {
      await db.collection('industries').doc(industry.toLowerCase().replace(/\s+/g, '_')).set({
        name: industry,
        use_case_count: useCases.length,
        use_cases: useCases.map(uc => uc.id),
        uploaded_at: new Date()
      });
      console.log(`✅ Uploaded industry: ${industry} (${useCases.length} use cases)`);
    } catch (error) {
      console.error(`❌ Error uploading industry ${industry}:`, error.message);
    }
  }
}

// Upload by category (for easier querying)
async function uploadUseCasesByCategory() {
  if (!seedData.use_cases) return;

  const categoryGroups = {};
  
  // Group use cases by category
  seedData.use_cases.forEach(useCase => {
    const category = useCase.category || 'Uncategorized';
    if (!categoryGroups[category]) {
      categoryGroups[category] = [];
    }
    categoryGroups[category].push(useCase);
  });

  console.log(`\n📂 Uploading category groupings...`);

  for (const [category, useCases] of Object.entries(categoryGroups)) {
    try {
      await db.collection('categories').doc(category.toLowerCase().replace(/\s+/g, '_').replace(/[^a-z0-9_]/g, '')).set({
        name: category,
        use_case_count: useCases.length,
        use_cases: useCases.map(uc => uc.id),
        uploaded_at: new Date()
      });
      console.log(`✅ Uploaded category: ${category} (${useCases.length} use cases)`);
    } catch (error) {
      console.error(`❌ Error uploading category ${category}:`, error.message);
    }
  }
}

// Upload Infosys relevance analysis
async function uploadInfosysAnalysis() {
  if (!seedData.use_cases) return;

  const relevanceAnalysis = {
    total_use_cases: seedData.use_cases.length,
    high_relevance: seedData.use_cases.filter(uc => uc.infosys_relevance?.includes('High')).length,
    very_high_relevance: seedData.use_cases.filter(uc => uc.infosys_relevance?.includes('Very High')).length,
    medium_relevance: seedData.use_cases.filter(uc => uc.infosys_relevance?.includes('Medium')).length,
    low_relevance: seedData.use_cases.filter(uc => uc.infosys_relevance?.includes('Low')).length,
    uploaded_at: new Date()
  };

  try {
    await db.collection('analysis').doc('infosys_relevance').set(relevanceAnalysis);
    console.log(`✅ Uploaded Infosys relevance analysis`);
  } catch (error) {
    console.error(`❌ Error uploading Infosys analysis:`, error.message);
  }
}

// Main upload function
async function uploadAll() {
  console.log('🚀 Starting Firestore upload...\n');
  
  try {
    await uploadMetadata();
    await uploadUseCases();
    await uploadUseCasesByIndustry();
    await uploadUseCasesByCategory();
    await uploadInfosysAnalysis();
    
    console.log('\n🎉 Upload complete!');
    console.log('\n📋 Collections created:');
    console.log('   - metadata (1 document)');
    console.log('   - all_sap_use_cases_consolidated (250 documents)');
    console.log('   - industries (10+ documents)');
    console.log('   - categories (15+ documents)');
    console.log('   - analysis (1 document)');
    
  } catch (error) {
    console.error('❌ Upload failed:', error);
  }
  
  process.exit(0);
}

// Handle errors
process.on('unhandledRejection', (error) => {
  console.error('❌ Unhandled rejection:', error);
  process.exit(1);
});

// Run the upload
uploadAll(); 