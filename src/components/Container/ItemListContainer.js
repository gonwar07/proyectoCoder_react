import React, { useEffect, useState } from 'react'
import {ItemList} from '../ItemList/ItemList'
import './ItemListContainer.scss'
import { useParams } from 'react-router'
import { Loader } from '../Loader/Loader'
import { collection, getDocs, query, where} from 'firebase/firestore/lite'
import { db } from '../../firebase/config'

export const ItemListContainer = () => {

    const [loading, setLoading] = useState(false)
    const [productos, setProductos] = useState([])

    const { catId } = useParams()

    console.log(catId)

    useEffect(() => {
        setLoading(true)

        //1.- armar la referencia
        const productosRef = collection(db, 'productos')

        const q = catId ? query(productosRef, where('category', '==', catId)) : productosRef

        //2.- GET a esa ref
        getDocs(q)
            .then((collection) =>{
                const productos = collection.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }))
                console.log(productos)

                setProductos(productos)
            })
            .finally(() => {
                setLoading(false)
            })


    }, [catId])


    return(
        <div className="divContainer">
            <h2>PRODUCTOS</h2>
            <>
                {
                    loading
                    ? <Loader/>
                    : <ItemList productos ={productos}/>
                }
            </>
        </div>
    )
}

export default ItemListContainer