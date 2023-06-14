import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDsmok36iGfa0vGlF8HS8qoaP_URJ70l74",
  authDomain: "react-43210-9eb58.firebaseapp.com",
  projectId: "react-43210-9eb58",
  storageBucket: "react-43210-9eb58.appspot.com",
  messagingSenderId: "505989823500",
  appId: "1:505989823500:web:f796ab7e1c0e2652a6c229"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp)

function getData() {
    const querySnapshot = await getDocs(collection(db, "products"))
}

function getItemData() {

}

function getCategoryData() {

}