// "use client";  // 파일 맨 위에 붙여도 됨 (보조적)

import { getApps, getApp, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const config = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY!,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN!,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID!,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET!,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID!,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID!,
};

export function getFirebase() {
  if (typeof window === "undefined") {
    throw new Error("Firebase client SDK must run in the browser");
  }
  const app = getApps().length ? getApp() : initializeApp(config);
  return {
    db: getFirestore(app),
    auth: getAuth(app),
  };
}
