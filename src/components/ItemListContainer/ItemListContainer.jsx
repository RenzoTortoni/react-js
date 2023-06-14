import { useState, useEffect } from 'react'
import { getProducts, getProductsByCategory } from '../AsyncMock/AsyncMock'
import { useParams } from 'react-router-dom'
import ItemList from "../ItemList/ItemList"
import "./ItemListContainer.css"

const ItemListContainer = ({}) => {
    const [products, setProducts] = useState([])

    const {categoryId} = useParams()

    useEffect(() => {
        const asyncFunc = categoryId ? getProductsByCategory : getProducts

        asyncFunc(categoryId)
            .then(res => {
                setProducts(res)
            })
            .catch(error => {
                console.error(error)
            })
        }, [categoryId])

        return (
            <div>
                <h1 className="ItemListContainerText">Productos</h1>
                <ItemList products = {products}/>
            </div>
        )
}

export default ItemListContainer
