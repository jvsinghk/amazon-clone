import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA-5qnPL4AAM1KAge6opt1U7hb0SS9qFO8",
  authDomain: "clone-4afa0.firebaseapp.com",
  databaseURL: "https://clone-4afa0.firebaseio.com",
  projectId: "clone-4afa0",
  storageBucket: "clone-4afa0.appspot.com",
  messagingSenderId: "256183782067",
  appId: "1:256183782067:web:e43087fbf82768ad43fec6",
  measurementId: "G-D12SY24VKQ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
