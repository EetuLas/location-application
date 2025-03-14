import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Import Firestore

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDth2twutaJHJCogc3i63q6TVKmyZ7NGf0",
  authDomain: "location-application-160c2.firebaseapp.com",
  projectId: "location-application-160c2",
  storageBucket: "location-application-160c2.firebasestorage.app",
  messagingSenderId: "203781470765",
  appId: "1:203781470765:web:02da159369997acc3596a4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db }; // Export Firestore instance