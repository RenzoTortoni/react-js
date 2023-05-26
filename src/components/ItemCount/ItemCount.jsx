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
                <button  className="ItemBtnCount" onClick={decrement}> - </button>
                <p className="ItemNumber"> {quantity} </p>
                <button className="ItemBtnCount" onClick={increment}> + </button>
            </div>

            <div>
                <button className="ItemBtnCount" onClick={() => onAdd(quantity)}>
                    Agregar al carrito
                </button>
            </div>

        </div>
    )
}

export default ItemCount