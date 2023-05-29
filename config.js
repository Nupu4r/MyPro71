import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
  apiKey: "AIzaSyD6G5QinKrmNiUXuzxN3POOfSAYAx0PsNQ",
  authDomain: "e-rideapp-31363.firebaseapp.com",
  projectId: "e-rideapp-31363",
  storageBucket: "e-rideapp-31363.appspot.com",
  messagingSenderId: "484512136130",
  appId: "1:484512136130:web:12ea43d1b52f3ccac7f45b"
};

//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
