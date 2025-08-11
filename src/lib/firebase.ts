// src/lib/firebase.ts
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY!,        // ← 변경
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN!,// ← 변경
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID!,  // ← 변경
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET!, // ← 변경
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID!, // ← 변경
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID!,          // ← 변경
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
