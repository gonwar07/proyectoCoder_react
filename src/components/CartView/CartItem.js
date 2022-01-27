import React, { useContext } from 'react'
import { BsFillTrashFill } from 'react-icons/bs'
import { CartContext } from '../../context/CartContext'
import './CartItem.scss'

export const CartItem = ({name, price, cantidad, id, img}) => {

    const {removerDelCarrito} = useContext(CartContext)

    return (
        <div className="cartItem">
            <h3>{name}</h3>
            <p>Cantidad: {cantidad}</p>
            <p>Precio: $. {price}</p>
            <img className='imgCart' src={img}/>
            <button className="btn-btn-danger divIconoBasura" onClick={() => {removerDelCarrito(id) }}>
                <BsFillTrashFill className="iconoBasura"/>
            </button>
        </div>
    )
}
