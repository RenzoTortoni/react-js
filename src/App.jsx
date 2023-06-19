import "./App.css"
import NavBar from "./components/navbar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import Footer from "./components/Footer/Footer"

import { BrowserRouter, Routes, Route } from "react-router-dom"
import { getData } from "./services/firebase"

getData()

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:categoryId" element={<ItemListContainer />} />
            <Route path="/item/:itemId" element={<ItemDetailContainer />} />
            <Route path="*" element={<p>404 NOT FOUND</p>}/>
          </Routes>
          <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App