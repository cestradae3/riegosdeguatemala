// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCO1yDKL-GxN3UuShnlugafpIUr3X2O_Bk",
  authDomain: "umg-curso.firebaseapp.com",
  projectId: "umg-curso",
  storageBucket: "umg-curso.appspot.com",
  messagingSenderId: "691290362099",
  appId: "1:691290362099:web:56c91e5b9540d67a6ae786"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);