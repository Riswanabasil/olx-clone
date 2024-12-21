
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCiD89PQMSC9jowF1O1tv10jCVNNiTz-9I",
  authDomain: "olx-clone-d849f.firebaseapp.com",
  projectId: "olx-clone-d849f",
  storageBucket: "olx-clone-d849f.firebasestorage.app",
  messagingSenderId: "735112271794",
  appId: "1:735112271794:web:f5f84d4da1885929ebf6ab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth(app)
export const googleProvider= new GoogleAuthProvider()