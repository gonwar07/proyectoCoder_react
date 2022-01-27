import React, { useContext } from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { CartContext } from '../../context/CartContext'
import './CartWidget.scss'

export const CartWidget = () => {

    const {totalCantidad} = useContext(CartContext)

    return(
        <div>
            <FaShoppingCart className="cartWidget"/>
            <span className="cartCount">{totalCantidad()}</span>
        </div>
    )
}

