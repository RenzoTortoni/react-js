import "./ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({ id, name, img, category, description, price, stock, platform, quantity }) => {
    
    return (
        <article className="ItemCardDetail">
            <img src={img} alt={name} className="ItemImgDetail"/>

            <div className="ItemBuyDetail">
                <h2 className="ItemNameDetail">
                    {name}
                </h2>
                <p className="ItemPriceDetail">
                        Precio: ${price}
                </p>
                <div className="ItemBtnCount">
                    <ItemCount initial = {1} stock = {stock} onAdd={(quantity) => {
                        Swal.fire({
                            position: 'top-center',
                            icon: 'success',
                            title: 'Cantidad agregada = ' + quantity,
                            showConfirmButton: false,
                            timer: 2200
                          })
                        }
                    }/>
                </div>
            </div>

            <div className="ItemInfoDetail">
                <p className="ItemCategoryDetail">
                    Categoria: {category}
                </p>

                <p className="ItemCategoryDetail">
                    Plataforma: {platform}
                </p>
                
                <p className="ItemDescriptionDetail">
                    Descripción: {description}
                </p>

                <div className="ItemBtnCount">
                </div>
                
                
            </div>
        </article>  
    )
}

export default ItemDetail