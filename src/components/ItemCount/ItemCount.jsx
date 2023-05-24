import "./ItemCount.css"
import { useState } from "react";

const ItemCount = ({initial, stock, onAdd}) => {
    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if(quantity < stock) {
            setQuantity(quantity + 1)
        }
    }

    const decrement = () => {
        if(quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    return(
        <div className="ItemCounter">
            
            <div className="ItemControls">
                <button className="ItemBtn" onClick={decrement}> - </button>
                <p className="ItemNumber"> {quantity} </p>
                <button className="ItemBtn" onClick={increment}> + </button>
            </div>

            <div>
                <button className="ItemBtn" onClick={() => onAdd(quantity)} disabled = {!stock}>
                    Agregar al carrito
                </button>
            </div>

        </div>
    )
}

export default ItemCount