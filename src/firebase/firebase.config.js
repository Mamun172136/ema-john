// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAA7sqlQ-cAWvLMFBAi7bDVr1p68x2A9RY",
  authDomain: "ecommerce-auth-8bf76.firebaseapp.com",
  projectId: "ecommerce-auth-8bf76",
  storageBucket: "ecommerce-auth-8bf76.appspot.com",
  messagingSenderId: "870211810705",
  appId: "1:870211810705:web:e95ea8ab239cae7feb5630"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;