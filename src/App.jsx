import "./App.css"
import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import Footer from "./components/Footer/Footer"
import Cart from "./components/Cart/Cart"
import Checkout from "./components/Checkout/Checkout"
import OrderId from "./components/OrderID/OrderID"

import { BrowserRouter, Routes, Route } from "react-router-dom"
import CartProvider from "./context/CartContext"

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar/>
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:categoryId" element={<ItemListContainer />} />
            <Route path="/item/:itemId" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/cart/checkout" element={<Checkout />} />
            <Route path="/orderId/:orderId" element={<OrderId />} />
            <Route path="*" element={<p>404 NOT FOUND</p>} />
          </Routes>
        <Footer/>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App