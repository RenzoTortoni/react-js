import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from "../ItemList/ItemList"
import "./ItemListContainer.css"

import { getCategoryData, getData } from '../../services/firebase'

const ItemListContainer = ({ }) => {
    const [products, setProducts] = useState([])

    const { categoryId } = useParams()

    const fetchData = categoryId === undefined ? getData : getCategoryData

    useEffect(() => {
        fetchData(categoryId)
            .then(res => setProducts(res))
    }, [categoryId])

    // useEffect(() => {
    //     getData()
    //         .then((res) => {
    //             if (categoryId) {
    //                 const filterProducts = res.filter(
    //                     (item) => item.category === categoryId
    //                 )
    //                 setProducts(filterProducts)
    //             } else {
    //                 setProducts(res)
    //             }
    //         })
    // }, [categoryId])

    return (
        <div>
            <div className="ItemListContainer">
                <h1>Bienvenido a Gaming Fast Store</h1>
                <p>Comprá juegos rápido y seguro</p>
            </div>

            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer
