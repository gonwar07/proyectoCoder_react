// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0JUsFIyHGdAkouCSBOskBpeHaDw7Yvdk",
  authDomain: "proyecto-react-93a5c.firebaseapp.com",
  projectId: "proyecto-react-93a5c",
  storageBucket: "proyecto-react-93a5c.appspot.com",
  messagingSenderId: "887393338069",
  appId: "1:887393338069:web:d83ff1af5f05bf6c6dd85c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)