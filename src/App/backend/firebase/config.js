import React from "react";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDjczdWv9C4el7hN-SQ_3pgFT92LCQnsSU",
  authDomain: "clone-a3d67.firebaseapp.com",
  projectId: "clone-a3d67",
  storageBucket: "clone-a3d67.appspot.com",
  messagingSenderId: "248435472904",
  appId: "1:248435472904:web:50567e13e07c357e236fbd",
  measurementId: "G-Z7WHN3676Z",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);
export { db, auth, storage };
