import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA8eCt0sK94WcWxzsKGA5mRd6RvkjY5s2s",
  authDomain: "mini-paint-8e1e0.firebaseapp.com",
  projectId: "mini-paint-8e1e0",
  storageBucket: "mini-paint-8e1e0.appspot.com",
  messagingSenderId: "461997523405",
  appId: "1:461997523405:web:a3d1f6e13ecba3d8168484",
  measurementId: "G-660R1H9NZ4",
};
const app = firebase.initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };
