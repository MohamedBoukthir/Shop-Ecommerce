import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'


const firebaseConfig = {
  apiKey: "AIzaSyDlatpiMGtCgt7O8_8eV0Sm6Vt0flmlPC4",
  authDomain: "e-commerce-5eac7.firebaseapp.com",
  projectId: "e-commerce-5eac7",
  storageBucket: "e-commerce-5eac7.appspot.com",
  messagingSenderId: "78547782869",
  appId: "1:78547782869:web:671de835bb2b2396ffa65c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)

export default app