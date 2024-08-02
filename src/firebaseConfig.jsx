// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyATSPpKpQP92pmFDNIoYGHRvBPkiJfC08s",
    authDomain: "react-firebase-b8c8b.firebaseapp.com",
    projectId: "react-firebase-b8c8b",
    storageBucket: "react-firebase-b8c8b.appspot.com",
    messagingSenderId: "145399109131",
    appId: "1:145399109131:web:9ac433cce4c454ce33990e"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db }; // Named exports