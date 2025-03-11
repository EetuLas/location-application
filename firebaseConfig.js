import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDth2twutaJHJCogc3i63q6TVKmyZ7NGf0",
  authDomain: "location-application-160c2.firebaseapp.com",
  projectId: "location-application-160c2",
  storageBucket: "location-application-160c2.firebasestorage.app",
  messagingSenderId: "203781470765",
  appId: "1:203781470765:web:02da159369997acc3596a4"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };