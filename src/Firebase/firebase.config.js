// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVUQIk9lfsIVqMkbiSnVYbqbctvav7ax0",
  authDomain: "task-management-platform-682d4.firebaseapp.com",
  projectId: "task-management-platform-682d4",
  storageBucket: "task-management-platform-682d4.appspot.com",
  messagingSenderId: "211282025520",
  appId: "1:211282025520:web:40dbfcb4b5ee964b0ee1f5",
  measurementId: "G-6HRBQ8XBNF"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);