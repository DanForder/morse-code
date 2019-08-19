import * as firebase from "firebase/app";

// Basic firebase configuration linking web application to database - see firebase documentation

const firebaseConfig = {
  apiKey: "AIzaSyCKy75Sj-pCaCRPNYpvNapqIEFpRQ2BrX8",
  authDomain: "morse-code-36e88.firebaseapp.com",
  databaseURL: "https://morse-code-36e88.firebaseio.com",
  projectId: "morse-code-36e88",
  storageBucket: "",
  messagingSenderId: "103241766280",
  appId: "1:103241766280:web:9642e1a6a40cd14b"
};

// Initialising firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
