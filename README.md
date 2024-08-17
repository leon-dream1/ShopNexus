# Frontend - React with Vite

# ShopNexus | Find Your Favorite Product

- Live Link: https://shopnexus-3946f.web.app/

This is the frontend of the project, built using React with Vite. It provides a responsive and interactive user interface for the application.

## Project Setup

### Prerequisites

- Node.js (version 14 or above)
- npm or Yarn

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/leon-dream1/ShopNexus.git
   cd ShopNexus

   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Environment Variables**
   You need to set up a .env.local file in the root directory of your frontend project with your Firebase configuration:

   ```bash
   VITE_FIREBASE_API_KEY=yourFirebaseApiKey
   VITE_FIREBASE_AUTH_DOMAIN=yourFirebaseAuthDomain
   VITE_FIREBASE_PROJECT_ID=yourFirebaseProjectId
   VITE_FIREBASE_STORAGE_BUCKET=yourFirebaseStorageBucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=yourFirebaseMessagingSenderId
   VITE_FIREBASE_APP_ID=yourFirebaseAppId
   VITE_API_URL=https://shop-nexus-server.vercel.app
   ```

### Running the Project

1. **Start the development server:**
   ```bash
   npm run dev
   ```
