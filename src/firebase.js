import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/analytics";
import "firebase/storage";

const firebaseConfig = {
      apiKey: "AIzaSyC-_EUK2yZvdX-bQPP7jKDzpv8yBZBuU88",
      authDomain: "hospital-3daac.firebaseapp.com",
      databaseURL: "https://hospital-3daac-default-rtdb.firebaseio.com",
      projectId: "hospital-3daac",
      storageBucket: "hospital-3daac.appspot.com",
      messagingSenderId: "457784836577",
      appId: "1:457784836577:web:36bbf611bc13c72c3e12a0",
      measurementId: "G-G1NFLRGVWN"
  };
  
const firebaseInstance = firebase.initializeApp(firebaseConfig);
const db = firebaseInstance.firestore();
const auth = firebase.auth();
const analytics = firebase.analytics();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();


export { auth, db, analytics, provider, storage };
