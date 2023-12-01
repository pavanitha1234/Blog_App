// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkQyYB-Kb5FpQDRaJ39OUFhC07jo66BSQ",
  authDomain: "blogproject-8e8e8.firebaseapp.com",
  projectId: "blogproject-8e8e8",
  storageBucket: "blogproject-8e8e8.appspot.com",
  messagingSenderId: "747022467749",
  appId: "1:747022467749:web:39cbbbfd3ec11a11a6034c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();