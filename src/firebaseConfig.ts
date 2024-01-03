// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyAIEVEYqqucTQZvgSRUtG_7FG5GLceiYeA",
  authDomain: "lm-10-1d5cd.firebaseapp.com",
  projectId: "lm-10-1d5cd",
  storageBucket: "lm-10-1d5cd.appspot.com",
  messagingSenderId: "360385201512",
  appId: "1:360385201512:web:bb53736ddb985d3f5a02dd"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export {db}