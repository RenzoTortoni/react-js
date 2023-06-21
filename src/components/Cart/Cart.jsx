import "./Cart.css"
import { useContext } from "react"
import { cartContext } from "../../App"
import { Link } from "react-router-dom"

const Cart = () => {
    const { cart, clearCart, totalQuantity, total } = useContext(cartContext)

    if (totalQuantity === 0) {
        return (
            <div>
                <p>No hay items en el carrito</p>
                <Link to="/">Productos</Link>
            </div>
        )
    }

    return (
        <div>
            { cart.map(p => <CartItem key={p.id} {...p}/>) }
        </div>
    )

}

export default Cart