import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDjYrnxwFtaEi5A5EYEp_hC09hN9yz0ov8",
  authDomain: "finanzas-1c142.firebaseapp.com",
  projectId: "finanzas-1c142",
  storageBucket: "finanzas-1c142.appspot.com",
  messagingSenderId: "94005217",
  appId: "1:94005217:web:8be26208ccf4bec90c14a0",
  measurementId: "G-VXMVC0PBWQ",
};

firebase.initializeApp(firebaseConfig);

const auth = getAuth();

//registrar usuario
const signupForm = document.querySelector(".signup");
signupForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = signupForm.email.value;
  const password = signupForm.password.value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((cred) => {
      console.log("user created", cred.user);
      signupForm.reset();
    })
    .catch((err) => {
      console.log(err.message);
    });
});
