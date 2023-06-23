import "./Cart.css"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"

const Cart = () => {
    const { cart, removeItem, clearCart, totalPrice } = useContext(CartContext)

    return (
        <div className="">
            {
                cart.map((prod) =>
                    <div className="CartContainer key={prod.id}">
                        <div className="ImgCartColumn">
                            <img src={prod.img} alt={prod.name} className="CartImg" />
                        </div>
                        <div className="NameCartColumn">
                            <h3>{prod.name}</h3>
                        </div>
                        <div className="QuantityCartColumn">
                            <p>Cantidad: {prod.quantity}</p>
                        </div>
                        <div className="SubtotalCartColumn">
                            <p>Subtotal: ${(prod.price * prod.quantity).toFixed(2)}</p>
                        </div>
                        <button className="RemoveCartColumn" onClick={removeItem}>
                            eliminar
                        </button>
                    </div>
                )
            }

            {
                cart.length > 0 ?
                    <div className="CartSiItems">
                        <p>Precio total: ${(totalPrice().toFixed(2))}</p>

                        <div className="CartBtnComprar">
                            <button onClick={clearCart} className="ItemBtnVaciar">Vaciar carrito</button>

                            <Link to="./Checkout" className="ItemBtnComprar">Proceder a pagar</Link>
                        </div>
                    </div>
                    :
                    <div className="CartNoItems">
                        <p>No hay items en el carrito</p>

                        <Link to="/" className="ItemBtn">Productos</Link>
                    </div>
            }
        </div>
    )
}

export default Cart