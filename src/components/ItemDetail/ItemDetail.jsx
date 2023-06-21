import "./ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount"
import { useContext, useState } from "react"
import { cartContext } from "../../App"
import { Link } from "react-router-dom"

const ItemDetail = ({ name, img, category, description, price, stock, platform}) => {
    
    const [quantityAdded, setQuantityAdded] = useState(0)
    
    const { addItem } = useContext(cartContext)
    
    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item = { id, name, price }

        addItem(item, quantity)
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
                
                <div className="ItemBtnCount">
                    {
                        quantityAdded > 0 ? (
                            <Link to="/cart">Finalizar compra</Link>
                        ) : (
                            <ItemCount initial={1} stock={stock} onAdd={(handleOnAdd) => {
                                Swal.fire({
                                    position: 'top-center',
                                    icon: 'success',
                                    title: 'Agregaste ' + quantity + ': ' + name + ' al carrito',
                                    showConfirmButton: false,
                                    timer: 2200
                                })
                            }
                            }/>
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

// import "./ItemDetail.css"
// import ItemCount from "../ItemCount/ItemCount"

// const ItemDetail = ({ name, img, category, description, price, stock, platform}) => {
    
//     return (
//         <article className="ItemCardDetail">
//             <img src={img} alt={name} className="ItemImgDetail"/>

//             <div className="ItemBuyDetail">
//                 <h2 className="ItemNameDetail">
//                     {name}
//                 </h2>
                
//                 <p className="ItemPriceDetail">
//                         Precio: ${price}
//                 </p>
                
//                 <div className="ItemBtnCount">
//                     <ItemCount initial = {1} stock = {stock} onAdd={(quantity) => {
//                         Swal.fire({
//                             position: 'top-center',
//                             icon: 'success',
//                             title: 'Cantidad agregada = ' + quantity,
//                             showConfirmButton: false,
//                             timer: 2200
//                           })
//                         }
//                     }/>
//                 </div>
//             </div>

//             <div className="ItemInfoDetail">
//                 <p className="ItemCategoryDetail">
//                     Categoria: {category}
//                 </p>

//                 <p className="ItemCategoryDetail">
//                     Plataforma: {platform}
//                 </p>
                
//                 <p className="ItemDescriptionDetail">
//                     Descripción: {description}
//                 </p>
//             </div>
//         </article>  
//     )
// }

// export default ItemDetail