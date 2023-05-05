import carrito from "./assets/cart-icon.svg"
import "./CartWidget.css"

function CartWidget() {
    return (
        <div className="Cart-Widget-F">
            <img src={carrito} alt="cart-icon" className="Cart-Widget"/>
            0
        </div>
    )
}

export default CartWidget