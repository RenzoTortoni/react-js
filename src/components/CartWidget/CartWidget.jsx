import "./CartWidget.css"
import carrito from "./assets/cart-icon.svg"
import { Link } from "react-router-dom"

import { useCartContext } from '../../context/CartContext';

const CartWidget = () => {

    const { cart } = useCartContext();
    const totalQuantity = cart.reduce((total, prod) => total + prod.quantity, 0);

    return (
        <div>
            <Link to="/cart" className="CartWidgetContainer">
                <img src={carrito} alt="cart-icon" className="CartWidgetIcon"/>
                <p className="CartWidgetQuantity">{ totalQuantity }</p>
            </Link>
        </div>
    )
}

export default CartWidget