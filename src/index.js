import { initializeApp } from "firebase/app"
import {
    getFirestore, collection, getDocs, onSnapshot
} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDjYrnxwFtaEi5A5EYEp_hC09hN9yz0ov8",
    authDomain: "finanzas-1c142.firebaseapp.com",
    projectId: "finanzas-1c142",
    storageBucket: "finanzas-1c142.appspot.com",
    messagingSenderId: "94005217",
    appId: "1:94005217:web:8be26208ccf4bec90c14a0",
    measurementId: "G-VXMVC0PBWQ"
  };

  firebasa.initializeApp(firebaseConfig)

  const db = getFirestore()

  const colRef = collection(db, "Meta")

  getDocs(colRef)
    .then((snapshot) => {
        console.log(snapshot.docs)
    })

