import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCNGZCeD2JMR3JJkiJ6M0C-CU3EEVenoJs",
    authDomain: "radioescola-7c9f8.firebaseapp.com",
    projectId: "radioescola-7c9f8",
    storageBucket: "radioescola-7c9f8.firebasestorage.app",
    messagingSenderId: "260716687816",
    appId: "1:260716687816:web:691c9812e3df36a7ba50fd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

// DOM Elements
const loginButton = document.getElementById("loginButton");
const loginModal = document.getElementById("loginModal");
const closeModal = document.getElementById("closeModal");
const loginSubmit = document.getElementById("loginSubmit");
const googleLoginButton = document.getElementById("googleLoginButton");
const emailInput = document.getElementById("emailInput");
const passwordInput = document.getElementById("passwordInput");
const createAccountButton = document.getElementById("createAccountButton");

// Show login modal
loginButton.addEventListener("click", () => {
  loginModal.classList.remove("hidden");
});

// Close login modal
closeModal.addEventListener("click", () => {
  loginModal.classList.add("hidden");
});

// Handle Google login
googleLoginButton.addEventListener("click", async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const user = result.user;
    alert(`Welcome, ${user.displayName}`);
    loginModal.classList.add("hidden");
  } catch (error) {
    alert(`Error: ${error.message}`);
  }
});

// Monitor authentication state
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is logged in
    loginButton.textContent = "Logout";
    loginButton.classList.remove("bg-blue-500", "hover:bg-blue-600", "bg-red-500", "hover:bg-red-600");
    loginButton.classList.add("bg-gray-700", "hover:bg-gray-800");
    loginButton.onclick = async () => {
      await signOut(auth);
    };
  } else {
    // User is logged out
    loginButton.textContent = "Login";
    loginButton.classList.remove("bg-gray-700", "hover:bg-gray-800");
    loginButton.classList.add("bg-gray-700", "hover:bg-gray-800");
    loginButton.onclick = () => {
      loginModal.classList.remove("hidden");
    };
  }
});

// Handle account creation
createAccountButton.addEventListener("click", async () => {
  const email = emailInput.value;
  const password = passwordInput.value;

  try {
    await createUserWithEmailAndPassword(auth, email, password);
    loginModal.classList.add("hidden");
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
});

// Handle email/password login
loginSubmit.addEventListener("click", async () => {
  const email = emailInput.value;
  const password = passwordInput.value;

  try {
    await signInWithEmailAndPassword(auth, email, password);
    loginModal.classList.add("hidden");
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
});
