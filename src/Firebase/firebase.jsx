
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDI60CdFBGh16Qh_2sglBCiAR12j47auW0",
  authDomain: "streamsync-cfe23.firebaseapp.com",
  projectId: "streamsync-cfe23",
  storageBucket: "streamsync-cfe23.appspot.com",
  messagingSenderId: "721682474556",
  appId: "1:721682474556:web:09d00a6f1238966b160539",
  measurementId: "G-YV1HXZX3NY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const analytics = getAnalytics(app);
export {app}