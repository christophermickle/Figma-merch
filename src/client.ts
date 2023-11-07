import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyATY_5303m-QXEHmHWz1oR1P3u03WqjN9o",
  authDomain: "figmamerch.firebaseapp.com",
  projectId: "figmamerch",
  storageBucket: "figmamerch.appspot.com",
  messagingSenderId: "919725169336",
  appId: "1:919725169336:web:5a76bb610232615586f24d"
};

export const app = initializeApp(firebaseConfig);