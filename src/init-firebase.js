import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB47G-ecEqZynea8YUEWHmw42ojnN5kVN0",
    authDomain: "web-usados.firebaseapp.com",
    projectId: "web-usados",
    storageBucket: "web-usados.appspot.com",
    messagingSenderId: "254677569242",
    appId: "1:254677569242:web:717c6d27fe9cd46600dfe3",
    measurementId: "G-YXK0G06CZ4"
  };
  
  // Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);

export const db = fb.firestore();
  