import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from "../ItemList/ItemList"
import "./ItemListContainer.css"

import { getProducts, getProductsByCategory } from '../AsyncMock/AsyncMock'
import { getData } from '../../services/firebase'

const ItemListContainer = ({}) => {
    const [products, setProducts] = useState([])

    const {categoryId} = useParams()

    useEffect(() => {
        getData()
            .then((res) => {
                if (categoryId) {
                    const filterProducts = res.filter(
                        (item) => item.category === categoryId
                    )
                    setProducts(filterProducts)
                } else {
                    setProducts(res)
                }
            })
    }, [categoryId])


    // useEffect(() => {     
    //     getData()
    //         .then((res) => {
    //             if (categoryId) {
    //                 const filterProducts = respuesta.filter(
    //                     (item) => item.category === categoryId
    //                 )
    //                 setProducts(filterProducts)
    //             } else {
    //                 setProducts(res)
    //             }
    //         }, [categoryId])
            
            

        // const asyncFunc = categoryId ? getProductsByCategory : getProducts

        // asyncFunc(categoryId)
        //     .then(res => {
        //         setProducts(res)
        //     })
        //     .catch(error => {
        //         console.error(error)
        //     })
        // }, [categoryId])

        return (
            <div>
                <div className="ItemListContainer">
                    <h1>Bienvenido a Gaming Fast Store</h1>
                    <p>Comprá juegos rápido y seguro</p>
                </div>

                <ItemList products = {products}/>
            </div>
        )
}

export default ItemListContainer
