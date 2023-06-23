import "./ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount"
import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"

const ItemDetail = ({ id, name, img, category, description, price, stock, platform }) => {
    
    const [quantityAdded, setQuantityAdded] = useState(0)
    
    const { addItem } = useContext(CartContext)
    
    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item = { id, name, price, img }

        addItem(item, quantity)

        Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'Agregaste ' + quantity + ': ' + name + ' al carrito',
            showConfirmButton: false,
            timer: 2000
        })
    }
    
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
                
                <div>
                    {
                        quantityAdded > 0 ? (
                            <Link to="/cart" className="ItemBtn ItemBtnDetail">Ir al carrito</Link>
                        ) : (
                            <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}/>
                        )
                    }
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
            </div>
        </article>
    )
} 

export default ItemDetail