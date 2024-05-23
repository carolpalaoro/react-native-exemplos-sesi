// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6rqxtjwxtwNxf_3iHjBVmDifiF7qCG8k",
  authDomain: "lista-de-linguagens-34d99.firebaseapp.com",
  databaseURL: "https://lista-de-linguagens-34d99-default-rtdb.firebaseio.com",
  projectId: "lista-de-linguagens-34d99",
  storageBucket: "lista-de-linguagens-34d99.appspot.com",
  messagingSenderId: "868555948019",
  appId: "1:868555948019:web:b7490b4016b5e76096dc86",
  measurementId: "G-MT5T56B4X0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);