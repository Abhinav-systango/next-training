import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDNpVunMDfNN5J9863VUEGPdM1w35vXPzg",
  authDomain: "ecom-f69c5.firebaseapp.com",
  projectId: "ecom-f69c5",
  storageBucket: "ecom-f69c5.appspot.com",
  messagingSenderId: "269304729532",
  appId: "1:269304729532:web:1d9e88ef183b92ebe8a5b9",
  measurementId: "G-0N4857YRZY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getDatabase();

export { auth, db }