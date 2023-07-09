// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth} from 'firebase/auth'
import { collection } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDBPMQ7ZbgIjp5Usm_QOpvv2Bdh6QQ8pvg",
  authDomain: "attendance-8a491.firebaseapp.com",
  projectId: "attendance-8a491",
  storageBucket: "attendance-8a491.appspot.com",
  messagingSenderId: "417315174434",
  appId: "1:417315174434:web:6cd3a9a31185434ee3727b",
  measurementId: "G-LVRRP7PFYR"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const userRef=collection(db, "users");