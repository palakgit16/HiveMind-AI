import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "hivemind-ai-d2b0f.firebaseapp.com",
  projectId: "hivemind-ai-d2b0f",
  storageBucket: "hivemind-ai-d2b0f.firebasestorage.app",
  messagingSenderId: "75494352835",
  appId: "1:75494352835:web:5a4adb6b12a04ad1e27f76"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();