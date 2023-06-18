 import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';

 const firebaseConfig = {
  apiKey: "AIzaSyBIBWbEnX2uY2X6wVDDLHEDM0jyz_KNVRs",
  authDomain: "doctores-bf873.firebaseapp.com",
  projectId: "doctores-bf873",
  storageBucket: "doctores-bf873.appspot.com",
  messagingSenderId: "582782970559",
  appId: "1:582782970559:web:63f2e000ae192cebdb340a"
};

 const app = initializeApp(firebaseConfig);
 const db=getFirestore(app);
    export default db;
