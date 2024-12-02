// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCB76sX7QFeDWd6LFJNNOcrCPQBPDfjtJs",
  authDomain: "coffee-store-15888.firebaseapp.com",
  projectId: "coffee-store-15888",
  storageBucket: "coffee-store-15888.firebasestorage.app",
  messagingSenderId: "128321930420",
  appId: "1:128321930420:web:5a7a5565fe7e81a96303e1"
};

/// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth ;
