// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnz7AQPrYteJaG7aDI7Y9K3rMtTwFdqqo",
  authDomain: "shopnexus-3946f.firebaseapp.com",
  projectId: "shopnexus-3946f",
  storageBucket: "shopnexus-3946f.appspot.com",
  messagingSenderId: "737283022885",
  appId: "1:737283022885:web:5c0b46e69a16b50934dfcc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
