// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdK1yxgUltTJG3-CjHRpS4H-0nij6MZfg",
  authDomain: "rate-my-pet-softuni.firebaseapp.com",
  projectId: "rate-my-pet-softuni",
  storageBucket: "rate-my-pet-softuni.firebasestorage.app",
  messagingSenderId: "1042454478651",
  appId: "1:1042454478651:web:5cb83a1d1474f2f4d1c11e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

setPersistence(auth, browserLocalPersistence)
  .then(() => {
    // return signInWithEmailAndPassword(auth, email, password);
  })
  .catch((error) => {
    console.error(`Persistance Error: ${error.message}`);
  });

export default app;
