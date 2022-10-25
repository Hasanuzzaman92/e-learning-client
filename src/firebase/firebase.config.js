// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0OHCxDf0pSg6KgSJVkF8K8VPN67nsuIM",
  authDomain: "e-learning-client.firebaseapp.com",
  projectId: "e-learning-client",
  storageBucket: "e-learning-client.appspot.com",
  messagingSenderId: "639573029403",
  appId: "1:639573029403:web:c24a858c1d100efce77ebe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;