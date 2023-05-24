// import { useState, useEffect } from 'react'
// import { getProducts } from '../AsyncMock/AsyncMock'
// import ItemList from "../ItemList/ItemList"

// const ItemListContainer = ({greeting}) => {
//     const [products, setProducts] = useState([])

//     useEffect(() => {
//         getProducts()
//             .then(res => {
//                 setProducts(res)
//             })
//             .catch(error => {
//                 console.error(error)
//             })
//     }, [])

//     return (
//         <div>
//             <h1>{greeting}</h1>
//             <ItemList products = {products}/>
//         </div>
//     )
// }

// export default ItemListContainer

import { useState, useEffect } from 'react'
import { getProducts, getProductsByCategory } from '../AsyncMock/AsyncMock'
import { useParams } from 'react-router-dom'
import ItemList from "../ItemList/ItemList"

const ItemListContainer = ({greeting}) => {
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
                <h1>{greeting}</h1>
                <ItemList products = {products}/>
            </div>
        )
}

export default ItemListContainer
