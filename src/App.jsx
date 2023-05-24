import "./App.css"
import NavBar from "./components/navbar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"


import { BrowserRouter, Routes, Route } from "react-router-dom"
import { getProductsById } from "./components/AsyncMock/AsyncMock"
import ItemDetail from "./components/ItemDetail/ItemDetail"


function App() {
  return (
    <div className="App">
      {/* <NavBar/>
      <ItemListContainer greeting={"Bienvenido a Gaming Fast Store"}/>

      <ItemCount initial = {1} stock = {5} onAdd={(quantity) => console.log("Cantidad de productos agregados:", quantity)}/> */}

      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          <Route path="*" element={<p>404 NOT FOUND</p>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App