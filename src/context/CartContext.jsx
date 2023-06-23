import { createContext, useState } from 'react';
import { useContext } from 'react';

export const CartContext = createContext();

export const useCartContext = () => useContext (CartContext);

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  const addItem = (item, quantity) => {
    if (!isInCart(item.id)) {
      setCart(prev => [...prev, { ...item, quantity }])
    } else {
      console.error("El producto ya ha sido agregado al carrito")
    }
  }

  const removeItem = (itemId) => {
    const cartUpdated = cart.filter(prod => prod.id !== itemId)
    setCart(cartUpdated)
  }

  const clearCart = () => {
    setCart([])
  }

  const isInCart = (itemId) => {
    return cart.some(prod => prod.id === itemId)
  }

  const totalPrice = () => {
    return cart.reduce((total, prod) => total + prod.price * prod.quantity, 0)
  }

  return (
    <CartContext.Provider value = {{ cart, addItem, removeItem, clearCart, totalPrice }}>
      { children }
    </CartContext.Provider>
  )
}

export default CartProvider