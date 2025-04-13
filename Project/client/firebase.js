import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// import { getAnalytics } from "firebase/analytics";



// Firebase configuration from your Firebase Console
const firebaseConfig = {
  apiKey: "AIzaSyC_z3cdnZXTIt8qRPzD7564Fk6eYvS6Go4",
  authDomain: "law-and-justice-242f2.firebaseapp.com",
  projectId: "law-and-justice-242f2",
  storageBucket: "law-and-justice-242f2.firebasestorage.app",
  messagingSenderId: "353003760715",
  appId: "1:353003760715:web:99b64290edb3c46c2831ce",
  measurementId: "G-E8STFRQDB1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Initialize Firebase services
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };