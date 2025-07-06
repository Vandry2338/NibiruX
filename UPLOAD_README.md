# SAP Use Cases Firestore Upload

This script uploads the comprehensive SAP use cases data to Firebase Firestore for the NibiruX platform.

## 📋 Prerequisites

1. **Firebase Project Setup**
   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
   - Enable Firestore Database
   - Set up security rules (initially allow read/write for testing)

2. **Service Account Key**
   - Go to Project Settings > Service Accounts
   - Click "Generate new private key"
   - Download the JSON file
   - Rename it to `serviceAccountKey.json`
   - Place it in the project root directory

## 🚀 Installation & Setup

1. **Install Dependencies**
   ```bash
   npm install firebase-admin
   ```

2. **Verify Files**
   - `seedData.json` - Contains all 250 SAP use cases
   - `uploadFirestoreSeed.js` - Upload script
   - `serviceAccountKey.json` - Your Firebase service account key

3. **Run the Upload**
   ```bash
   node uploadFirestoreSeed.js
   ```

## 📊 Data Structure

The script creates the following Firestore collections:

### 1. `metadata` Collection
- **Document ID**: `sap_use_cases`
- **Content**: Overall metadata about the dataset
- **Fields**: title, version, total_use_cases, last_updated, description, uploaded_at

### 2. `use_cases` Collection
- **Document ID**: Use case ID (e.g., `accelerate_financial_planning_analysis`)
- **Content**: Individual use case data
- **Fields**: All use case properties + `uploaded_at` timestamp

### 3. `industries` Collection
- **Document ID**: Industry name (lowercase, underscores)
- **Content**: Industry groupings for easier querying
- **Fields**: name, use_case_count, use_cases (array of IDs), uploaded_at

### 4. `categories` Collection
- **Document ID**: Category name (lowercase, underscores)
- **Content**: Category groupings for easier querying
- **Fields**: name, use_case_count, use_cases (array of IDs), uploaded_at

### 5. `analysis` Collection
- **Document ID**: `infosys_relevance`
- **Content**: Analysis of Infosys relevance across use cases
- **Fields**: total_use_cases, high_relevance, very_high_relevance, medium_relevance, low_relevance, uploaded_at

## 🔍 Sample Queries

After upload, you can query the data:

```javascript
// Get all use cases
const useCases = await db.collection('use_cases').get();

// Get use cases by industry
const financialServices = await db.collection('use_cases')
  .where('industry', '==', 'Financial Services')
  .get();

// Get high relevance use cases
const highRelevance = await db.collection('use_cases')
  .where('infosys_relevance', 'array-contains', 'High')
  .get();

// Get industry summary
const industrySummary = await db.collection('industries')
  .doc('financial_services')
  .get();
```

## 📈 Expected Output

The script will show:
```
🚀 Starting Firestore upload...

✅ Uploaded metadata: sap_use_cases
📊 Starting upload of 250 use cases...
✅ Uploaded use case: accelerate_financial_planning_analysis - Accelerate Financial Planning and Analysis
✅ Uploaded use case: integrated_enterprise_performance_management - Drive Business with Integrated Enterprise Performance Management (EPM)
...

📈 Upload Summary:
   ✅ Successfully uploaded: 250 use cases
   ❌ Failed uploads: 0 use cases
   📊 Total processed: 250 use cases

🏭 Uploading industry groupings...
✅ Uploaded industry: Financial Services (8 use cases)
✅ Uploaded industry: Supply Chain Management (4 use cases)
...

📂 Uploading category groupings...
✅ Uploaded category: Strategic Finance Transformation (3 use cases)
✅ Uploaded category: AI-Powered Supply Chain Intelligence (2 use cases)
...

✅ Uploaded Infosys relevance analysis

🎉 Upload complete!

📋 Collections created:
   - metadata (1 document)
   - use_cases (250 documents)
   - industries (10+ documents)
   - categories (15+ documents)
   - analysis (1 document)
```

## 🔧 Troubleshooting

### Common Issues:

1. **"Cannot find module 'firebase-admin'"**
   ```bash
   npm install firebase-admin
   ```

2. **"Cannot find module './serviceAccountKey.json'"**
   - Ensure you've downloaded the service account key from Firebase Console
   - Rename it to `serviceAccountKey.json`
   - Place it in the project root

3. **"Permission denied"**
   - Check Firestore security rules
   - Ensure service account has proper permissions
   - Verify project ID in service account key

4. **"Cannot find module './seedData.json'"**
   - Ensure `seedData.json` is in the project root
   - Check file permissions

### Security Rules (for testing):
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if true;
    }
  }
}
```

## 🎯 Next Steps

After successful upload:

1. **Update Security Rules** - Implement proper authentication and authorization
2. **Test Queries** - Verify data retrieval works as expected
3. **Integrate with Frontend** - Connect to your NibiruX application
4. **Monitor Usage** - Set up Firebase Analytics and monitoring

## 📞 Support

For issues or questions:
- Check Firebase Console logs
- Review Firestore security rules
- Verify service account permissions
- Ensure all required files are present

---

**Note**: This script uploads 250 comprehensive SAP use cases with detailed metadata, pain points, opportunities, and Infosys relevance analysis. The data is structured for optimal querying and integration with the NibiruX platform. 