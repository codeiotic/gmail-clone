import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0-tC4ywDKpnejqFP6UV55qOZo7yOZaIg",
  authDomain: "clone-ee1b1.firebaseapp.com",
  projectId: "clone-ee1b1",
  storageBucket: "clone-ee1b1.appspot.com",
  messagingSenderId: "790650299024",
  appId: "1:790650299024:web:d6340898fab352f68cee15",
  measurementId: "G-MF60R2TRN7",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
