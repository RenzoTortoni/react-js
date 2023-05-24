import "./ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({ id, name, img, category, description, price, stock, platform }) => {
    return (
        <article className="ItemCard">
            <h2 className="ItemName">
                {name}
            </h2>

            <img src={img} alt={name} className="ItemImg"/>

            <div className="ItemInfo">
                <p className="ItemCategory">
                    Categoria: {category}
                </p>
                
                <p className="ItemDescription">
                    Descripción: {description}
                </p>
                
                <p className="ItemPrice">
                    Precio: ${price}
                </p>
            </div>

            <ItemCount initial = {1} stock = {stock} onAdd={(quantity) => console.log("Cantidad agregada = ", quantity)} />
        </article>
    )
}

export default ItemDetail