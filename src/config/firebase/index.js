// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDDTFCPHJ9pUXrhy6duaSUu-SaPt61INsQ",
  authDomain: "notes-d8b3f.firebaseapp.com",
  projectId: "notes-d8b3f",
  storageBucket: "notes-d8b3f.appspot.com",
  messagingSenderId: "486374724654",
  appId: "1:486374724654:web:43965db90a4fd23a493bbf",
  measurementId: "G-D9TN1WKGCY"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
//Initialize firebase authentication
export const auth = getAuth(app);
//Initialize firebase databse
export const database = getDatabase(app)
