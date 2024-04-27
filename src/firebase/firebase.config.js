// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBERcZ9dsXpejyjjmNZHY93gQUeEkBy5jc",
  authDomain: "your-travel-e09d9.firebaseapp.com",
  projectId: "your-travel-e09d9",
  storageBucket: "your-travel-e09d9.appspot.com",
  messagingSenderId: "274182529476",
  appId: "1:274182529476:web:ab1da46fb31ebb60438491",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;