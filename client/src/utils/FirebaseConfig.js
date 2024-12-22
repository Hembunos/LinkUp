
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAj_AvLWlnHQX4jne0hTxqr0BFgtCPvlHA",
  authDomain: "linkup-ef859.firebaseapp.com",
  projectId: "linkup-ef859",
  storageBucket: "linkup-ef859.firebasestorage.app",
  messagingSenderId: "466648690492",
  appId: "1:466648690492:web:6a22f9ce0880fbf7dbb839",
  measurementId: "G-PEN6DX0R0D"
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);