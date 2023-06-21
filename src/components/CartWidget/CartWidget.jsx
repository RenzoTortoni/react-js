import "./CartWidget.css"
import carrito from "./assets/cart-icon.svg"
import { useContext } from "react"
import { cartContext } from "../../App"
import { Link } from "react-router-dom"

const CartWidget = () => {

    const {totalQuantity} = useContext(cartContext)

    return (
        <div className="Cart-Widget-F">
            <Link to="/cart" style={{ display: totalQuantity > 0 ? "block" : "none" }}>
                <img src={carrito} alt="cart-icon" className="Cart-Widget"/>
                { totalQuantity }
            </Link>
        </div>
    )
}

export default CartWidget