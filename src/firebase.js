// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAEP84XyOk3Srxr4nnPjY3KlKKcLHS9S18",
  authDomain: "cook-it-64bd3.firebaseapp.com",
  projectId: "cook-it-64bd3",
  storageBucket: "cook-it-64bd3.appspot.com",
  messagingSenderId: "1090569424791",
  appId: "1:1090569424791:web:5e5de724c98aa09068bed2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);