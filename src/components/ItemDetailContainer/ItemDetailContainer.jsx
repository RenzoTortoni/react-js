import "./ItemDetailContainer.css"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getItemData } from "../../services/firebase"
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)

    const {itemId} = useParams()

    useEffect(() => {
        getItemData(itemId)
            .then(res => {
                setProduct(res)
                console.log(res)
            })
            .catch(error => {
                console.error(error)
            })
    }, [itemId])

    return (
        <div className="ItemDetailContainer">
            <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailContainer