import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyDp3ZAp3J94o8PkwGw-f5ftJeZD-2xoS7Y",
  authDomain: "pr71-9d15e.firebaseapp.com",
  projectId: "pr71-9d15e",
  storageBucket: "pr71-9d15e.appspot.com",
  messagingSenderId: "1041712613201",
  appId: "1:1041712613201:web:fbcceb29e128e4b298f570"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
