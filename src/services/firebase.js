import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc, query, where, addDoc, orderBy } from "firebase/firestore"
import products from "../data/products"

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
const productsCollectionRef = collection(db, "products")

export async function getData() {
  const q = query(productsCollectionRef, orderBy("index"))
  const productsSnapshot = await getDocs(q)
  const arrayDocs = productsSnapshot.docs
  
  const dataDocs = arrayDocs.map((doc) => {
    return { ...doc.data(), id: doc.id }
  } )

  return dataDocs
}

export async function getItemData(idUrl) {
  const docRef = doc(db, "products", idUrl)
  const docSnapshot = await getDoc(docRef)
  return { id: docSnapshot.id, ...docSnapshot.data() }
}

export async function getCategoryData(idCategory) {
  const q = query(productsCollectionRef, where("category", "==", idCategory))

  const productsSnapshot = await getDocs(q)
  const arrayDocs = productsSnapshot.docs
  
  const dataDocs = arrayDocs.map((doc) => {
    return { ...doc.data(), id: doc.id }
  } )

  return dataDocs
}

export async function createOrder(data) {
  const ordersCollectionRef = collection(db, "orders")
  
  const response = await addDoc(ordersCollectionRef, data)
  return response.id
}

// export async function exportData() {

//   for(let item of products) {
//     item.index = item.id
//     delete item.id
//     await addDoc(productsCollectionRef, item)
//     console.log("documento creado:", res.id)
//   }
// }

export async function exportData() {
  try {
    for (let item of products) {
      const newItem = { ...item };
      // Copia del objeto para eliminar la propiedad "id"

      // Eliminar la propiedad "id" del objeto antes de enviarlo a Firebase
      delete newItem.id;

      const res = await addDoc(productsCollectionRef, newItem);
      console.log("Documento creado:", res.id);
    }
  } catch (error) {
    console.error("Error al exportar datos:", error);
  }
}
