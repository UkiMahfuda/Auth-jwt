const { initializeApp } = require("firebase/app");
const { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, sendEmailVerification } = require("firebase/auth");

const firebaseConfig = {
  apiKey: "AIzaSyALjg8aAoosUmUmmjaVjCCtv4JRdkXwwec",
  authDomain: "rapidapps-2f89b.firebaseapp.com",
  projectId: "rapidapps-2f89b",
  storageBucket: "rapidapps-2f89b.firebasestorage.app",
  messagingSenderId: "174467478896",
  appId: "1:174467478896:web:0e4fed7b0a4f043c71cbb5",
  measurementId: "G-PKMXNK5EN7",
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
