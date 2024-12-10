
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyBvu0QL6oQKQazDIhbTEieI8FeEAmUEkBg",
  authDomain: "sociogram-lite.firebaseapp.com",
  projectId: "sociogram-lite",
  storageBucket: "sociogram-lite.firebasestorage.app",
  messagingSenderId: "202217541403",
  appId: "1:202217541403:web:73abcb36292741fc45cdbe",
  measurementId: "G-PJQ9B04M3X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {app, db}
