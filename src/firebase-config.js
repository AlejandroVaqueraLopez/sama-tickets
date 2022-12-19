import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
/*import * as dotenv from "dotenv";
dotenv.config();
const key = process.env.FIREBASE_APY_KEY;
*/
const firebaseConfig = {
  //apiKey: key,
  authDomain: "sama-tickets.firebaseapp.com",
  projectId: "sama-tickets",
  storageBucket: "sama-tickets.appspot.com",
  messagingSenderId: "849161135296",
  appId: "1:849161135296:web:dccf4851a15fe4a133f925"
};

//initialize 
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
