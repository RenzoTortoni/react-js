import "./Checkout.css"
import React, { useState, useContext } from 'react';
import { createOrder } from "../../services/firebase"
import { CartContext } from '../../context/CartContext';
import { useNavigate } from "react-router-dom";

const Checkout = () => {
    const { cart, clearCart, totalPrice } = useContext(CartContext)
    const navigateTo = useNavigate()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [postalCode, setPostalCode] = useState('')
  
    const handleSubmit = async (e) => {
      e.preventDefault()
  
      const order = {
        items: cart,
        buyer: {
          name: "Renzo",
          email: "renzo@gmail.com",
          address: "123",
          city: "123",
          postalCode: "123",
        },
        date: new Date(),
        price: totalPrice()
      };
  
      const id = await createOrder(order)
      navigateTo(`/OrderId/${id}`)
  
      setName('')
      setEmail('')
      setAddress('')
      setCity('')
      setPostalCode('')

      clearCart()
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <div className="FormHeader Grid">
            <p className="FormHeaderText">Formulario de compra</p>
        </div>

        <div className="Grid">
          <label className="LabelGrid" htmlFor="name">Nombre completo:</label>
          <input
            className="InputGrid"
            placeholder="Nombre y apellido"
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="Grid">
          <label className="LabelGrid" htmlFor="email">Correo electrónico:</label>
          <input
            className="InputGrid"
            placeholder="GamingFastStore@gmail.com"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="Grid">
          <label className="LabelGrid" htmlFor="address">Dirección:</label>
          <input
            className="InputGrid"
            placeholder="Rivadavia número 250"
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>

        <div className="Grid">
          <label className="LabelGrid" htmlFor="city">Ciudad:</label>
          <input
            className="InputGrid"
            placeholder="CABA"
            type="text"
            id="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
        </div>

        <div className="Grid">
          <label className="LabelGrid" htmlFor="postalCode">Código postal:</label>
          <input
            className="InputGrid"
            placeholder="B1228"
            type="text"
            id="postalCode"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
            required
          />
        </div>

        <div className="Grid">
            <button type="submit" className="ItemBtn FormSubmit">Crear orden de compra</button>
        </div>
      
      </form>
    );
};
  
export default Checkout;