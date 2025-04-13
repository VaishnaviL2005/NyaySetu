# 🧑‍⚖️ NyaySetu – – AI-Powered Legal Assistant for Citizens

**NyaySetu** is a citizen-facing Legal AI Chatbot designed to assist users in drafting FIRs by identifying relevant sections of Indian law. It helps improve legal awareness and accessibility through automated legal assistance and multilingual support.

---

## ✨ Key Features

- ✅ **Legal AI Chatbot** – Helps citizens draft FIRs and suggests relevant IPC sections
- ✅ **Automated Alerts & Notifications** – Keeps users updated at every stage
- ✅ **FIR Tracking System** – Real-time updates for transparency and trust
- ✅ **AI-powered Legal Assistance** – Simplifies legal terms and concepts
- ✅ **Multilingual Support** – BHASHINI API integration for 9+ Indian languages
- ✅ **Regional Legal Resources** – Access to law summaries in local languages

---

## 🛠️ Tech Stack

- **Frontend**: React.js 
- **Backend**:  Express.js (Node.js) + Firebase 
- **Authentication & Database**: Firebase Auth + Firestore
- **Translation**: Custom translation model + BHASHINI API

---

## 🔐 Firebase Setup Instructions

To run the project with Firebase Authentication and Firestore:

### 1. Create a Firebase Project

- Go to [Firebase Console](https://console.firebase.google.com/)
- Click “Add project” and follow the steps

### 2. Enable Authentication

- In the Firebase Console → Authentication → Sign-in method
- Enable **Email/Password** provider

### 3. Create Firestore Database

- Go to **Firestore Database**
- Click “Create Database” → Start in test mode (for dev) → Choose location

### 4. Add Firebase Config to Project

In your React project, create a file `src/components/firebase.js` and add:

```js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_BUCKET",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
```

---

## 🚀 Running the Project

```bash
# Install dependencies
npm install

# Start the development server
npm start
```

The app will run at localhost

---

## 🤖 Example Prompt for NyayMitra (AI ChatBot)

> "Someone stole my mobile phone in the bus."

```vbnet
Based on your description, this may fall under Section 379 IPC which deals with theft.  
Would you like me to help you draft a basic FIR report for this case?
```
