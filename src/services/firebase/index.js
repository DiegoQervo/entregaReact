// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvZz53ZjZ4r5eytDBfuwlp7VlSGM3kCn0",
  authDomain: "ecommerce-42875.firebaseapp.com",
  projectId: "ecommerce-42875",
  storageBucket: "ecommerce-42875.firebasestorage.app",
  messagingSenderId: "879609397635",
  appId: "1:879609397635:web:293dc8209da826f4b4b6b6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);