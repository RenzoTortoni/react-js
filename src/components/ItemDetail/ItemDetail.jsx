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

                <div className="ItemBtnCount">
                    <ItemCount initial = {1} stock = {stock} onAdd={(quantity) => alert("Cantidad agregada = ", quantity)}/>
                </div>
                
                <p className="ItemPrice">
                    Precio: ${price}
                </p>
            </div>
            
            <p className="ItemDescription">
                Descripción: {description}
            </p>
            
        </article>
    )
}

export default ItemDetail