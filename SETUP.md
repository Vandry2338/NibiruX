# NibiruX Setup Instructions

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```bash
# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key_here
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

## Service Account Key

For server-side Firebase operations, place your `serviceAccountKey.json` in the root directory. This file is automatically ignored by git for security.

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

## Testing

```bash
# Type checking
npm run test:type-check

# Linting
npm run test:lint

# Build test
npm run test:build
```

## Code Quality

```bash
# Format code
npm run format

# Check formatting
npm run format:check

# Lint code
npm run lint
``` 