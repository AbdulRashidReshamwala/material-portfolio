import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBZ53r8lXALP3s7DcN1YUQOGKS4TRgN_MM",
  authDomain: "v2-portfolio.firebaseapp.com",
  databaseURL: "https://v2-portfolio.firebaseio.com",
  projectId: "v2-portfolio",
  storageBucket: "v2-portfolio.appspot.com",
  messagingSenderId: "756138693606",
  appId: "1:756138693606:web:f11e9da8ddb15a7bbcbc27",
  measurementId: "G-4Y08PHQ8Z0",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const db = firebase.firestore();
export default db;
