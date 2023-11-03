import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyDtKjxjACBT_Uv7u2NA16fOhuwZ8zGAnz8",
  authDomain: "underhits-9d19b.firebaseapp.com",
  projectId: "underhits-9d19b",
  storageBucket: "underhits-9d19b.appspot.com",
  messagingSenderId: "147292333984",
  appId: "1:147292333984:web:55ce421bcf6c041cc866c5",
};

// Initialize Firebase
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
