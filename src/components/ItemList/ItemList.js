import React from 'react'
import { Item } from '../Item/Item'
import './ItemList.scss'

export const ItemList = ({productos}) => {

    return(
        <div className="contenedorProductos">
            {productos.map((prod) => <Item prod={prod}/>)}
        </div>
    )
}
