import firebase from 'firebase/app';
import 'firebase/firestore';
const firebaseConfig = {
 apiKey: "AIzaSyDs-N_qDZyHrp0sBjZSO2ScbKY9eoEXl7I",
  authDomain: "crud-18a4c.firebaseapp.com",
  projectId: "crud-18a4c",
  storageBucket: "crud-18a4c.appspot.com",
  messagingSenderId: "605655820147",
  appId: "1:605655820147:web:328bdaaaef1791c9404706",
  measurementId: "G-5024DY6S7G"
}
const firebaseApp = firebase.initializeApp(firebaseConfig);
export const db = firebaseApp.firestore();