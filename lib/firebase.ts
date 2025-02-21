import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "drive-bb202.firebaseapp.com",
  projectId: "drive-bb202",
  storageBucket: "drive-bb202.firebasestorage.app",
  messagingSenderId: "31719034945",
  appId: "1:31719034945:web:85f7ef4c2baa2a0b5976c0"
};

!getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
export { db }