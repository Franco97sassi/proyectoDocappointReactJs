import db from "./firebase-config.js";
import { collection, addDoc } from "firebase/firestore";
import doctores from "../doctores.js";

const itemsCollectionRef = collection(db, "doctores");

const promises = doctores.map((doctor) => addDoc(itemsCollectionRef, doctor));

Promise.all(promises).then(() => {
  console.log("All done!");
  process.exit(0);
});