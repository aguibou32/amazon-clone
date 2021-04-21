import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChQgJg0q8SeEaRQVt-gta6M2vaKxANYI4",
  authDomain: "challenge-1911f.firebaseapp.com",
  projectId: "challenge-1911f",
  storageBucket: "challenge-1911f.appspot.com",
  messagingSenderId: "1027316246472",
  appId: "1:1027316246472:web:f5d7be7add8edb3c5a42fd",
  measurementId: "G-SHG0WBVHCW",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
