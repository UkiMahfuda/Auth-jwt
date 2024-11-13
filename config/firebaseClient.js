const { initializeApp } = require("firebase/app");
const { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, sendEmailVerification } = require("firebase/auth");

const firebaseConfig = {
  apiKey: "AIzaSyClyLHeAwFrJtylmx1FeGEW6VLp3KkOlfk",
  authDomain: "capstone-rapidapps.firebaseapp.com",
  projectId: "capstone-rapidapps",
  storageBucket: "capstone-rapidapps.firebasestorage.app",
  messagingSenderId: "863241185352",
  appId: "1:863241185352:web:0d8be8b2e0eceda3c3907d",
  measurementId: "G-6C0ZG39W5F",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

module.exports = {
  auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  sendEmailVerification,
};
