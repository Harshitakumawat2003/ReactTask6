import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-P07RlVm3TxelNGItdo63XY60P9ib3-A",
  authDomain: "mobztask6.firebaseapp.com",
  databaseURL: "https://mobztask6-default-rtdb.firebaseio.com",
  projectId: "mobztask6",
  storageBucket: "mobztask6.appspot.com",
  messagingSenderId: "278366660333",
  appId: "1:278366660333:web:fc580a51e444474d3e0ee4",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// here

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
