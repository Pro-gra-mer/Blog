import React from "react";
import ReactDOM from "react-dom/client";
import { initializeApp } from "firebase/app";
import App from "./App.jsx";

// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsk_PfPSAPPWPmSOsbe0cNuz1vrK5SIUY",
  authDomain: "curso-react-auth-53a84.firebaseapp.com",
  projectId: "curso-react-auth-53a84",
  storageBucket: "curso-react-auth-53a84.appspot.com",
  messagingSenderId: "1059799870999",
  appId: "1:1059799870999:web:07d97f7750600191d4b652",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
