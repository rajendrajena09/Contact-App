// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMudTf4Asc8tQPXifYxyB3iJjaMXVCdXo",
  authDomain: "vite-contact-ac265.firebaseapp.com",
  projectId: "vite-contact-ac265",
  storageBucket: "vite-contact-ac265.appspot.com",
  messagingSenderId: "750248848600",
  appId: "1:750248848600:web:fec58f375f4945254d3bad",
  measurementId: "G-7MFV6BTG9L"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);