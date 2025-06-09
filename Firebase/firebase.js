// filepath: /path/to/firebase.js
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCNGZCeD2JMR3JJkiJ6M0C-CU3EEVenoJs",
    authDomain: "radioescola-7c9f8.firebaseapp.com",
    projectId: "radioescola-7c9f8",
    storageBucket: "radioescola-7c9f8.firebasestorage.app",
    messagingSenderId: "260716687816",
    appId: "1:260716687816:web:691c9812e3df36a7ba50fd",
};

const app = initializeApp(firebaseConfig);
export default app;