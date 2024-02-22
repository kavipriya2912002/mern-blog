// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-ce856.firebaseapp.com",
  projectId: "mern-blog-ce856",
  storageBucket: "mern-blog-ce856.appspot.com",
  messagingSenderId: "771569095319",
  appId: "1:771569095319:web:bdad79dbba7bc784c7cfd2"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);