import "./ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({ id, name, img, category, description, price, stock, platform }) => {
    
    return (
        <article className="ItemCardDetail">
            <h2 className="ItemNameDetail">
                {name}
            </h2>

            <img src={img} alt={name} className="ItemImgDetail"/>

            <div className="ItemInfoDetail">
                <p className="ItemCategoryDetail">
                    Categoria: {category}
                </p>

                <div className="ItemBtnCount">
                    <ItemCount initial = {1} stock = {stock} onAdd={(quantity) => alert("Cantidad agregada = ", quantity)}/>
                </div>
                
                <p className="ItemPriceDetail">
                    Precio: ${price}
                </p>
            </div>
            
            <p className="ItemDescriptionDetail">
                Descripción: {description}
            </p>

            <p>Referencia: {id}</p>
        </article>  
    )
}

export default ItemDetail