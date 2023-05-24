import "./Item.css"
import { Link } from "react-router-dom"

const Item = ({id, name, img, category, description, price, stock, platform}) => {

    return (
        <article className="ItemCard">
            
            <h2 className="ItemName">
                {name}
            </h2>

            <img src={img} alt={name} className="ItemImg"/>
            
            <div>
                <p className="ItemPrice">
                    Precio: ${price}
                </p>
                <p className="ItemStock">
                    Stock: {stock}
                </p>
            </div>

            <div className="ItemDetail">
                <Link to={`/item/${id}`} className="ItemBtn">Ver detalle</Link>
            </div>

        </article>
    )
}

export default Item