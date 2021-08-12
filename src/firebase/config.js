import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import "firebase/functions";
import "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCxUL2rAY3Vja2U2sD7iRIYVdKcazxA5bI",
  authDomain: "cesar-83182.firebaseapp.com",
  databaseURL: "https://cesar-83182.firebaseio.com",
  projectId: "cesar-83182",
  storageBucket: "cesar-83182.appspot.com",
  messagingSenderId: "708546811434",
  appId: "1:708546811434:web:b1f2ddfe1b47c818d3d553",
  measurementId: "G-38J3R32LJB",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
const functions = firebase.functions();

export { projectStorage, projectFirestore, timestamp, auth, functions };
