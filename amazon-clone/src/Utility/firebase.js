import firebase from "firebase/comppat/app";
//auth
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbS36-gBn9E4vK_tgi1QqKf_7bin5gS-s",
  authDomain: "clone-85937.firebaseapp.com",
  projectId: "clone-85937",
  storageBucket: "clone-85937.appspot.com",
  messagingSenderId: "432267273513",
  appId: "1:432267273513:web:3fedab32caed39d9520338",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();
