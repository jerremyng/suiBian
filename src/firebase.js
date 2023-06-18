//file contains firebase functions and constants

import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithRedirect, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import { useAuthState } from 'react-firebase-hooks/auth'
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBtCKR5oHaQcmb4ff8LVXZDt8XP2vl6RLc",
  authDomain: "suibian-6654f.firebaseapp.com",
  databaseURL: "https://suibian-6654f-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "suibian-6654f",
  storageBucket: "suibian-6654f.appspot.com",
  messagingSenderId: "272835399367",
  appId: "1:272835399367:web:bd4dd1d1a10a4b9bfbf8e2",
  measurementId: "G-95Z540EN96"
};

export const app = initializeApp(firebaseConfig);
export const fireBaseAuth = getAuth();
export const fireBaseStore = getFirestore()