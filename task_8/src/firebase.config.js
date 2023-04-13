import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBOCuULC8WeOjVCK0fq47TeGALMqWLI59I",
  authDomain: "clever-todo-list-bc7bb.firebaseapp.com",
  databaseURL: "https://clever-todo-list-bc7bb-default-rtdb.firebaseio.com",
  projectId: "clever-todo-list-bc7bb",
  storageBucket: "clever-todo-list-bc7bb.appspot.com",
  messagingSenderId: "513645990095",
  appId: "1:513645990095:web:0db2944c453b35a54967ba",
  measurementId: "G-W7DN2W9YN6",
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default db;
