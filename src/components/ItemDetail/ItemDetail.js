import React, { useState, useContext } from 'react'
import { Card } from 'react-bootstrap'
import { ItemCount } from '../ItemCount/ItemCount'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import './ItemDetail.scss'

export const ItemDetail = ({id, name, price, img, desc, category, stock}) =>{

    const {agregarAlCarrito, isInCart} = useContext(CartContext)

    const navigate = useNavigate()
    const [cantidad, setCantidad] = useState(0)

    const handleVolver = () =>{
        navigate(-1)
    }

    const handleVolverInicio = () =>{
        navigate('/')
    }

    const handleAgregar = () =>{
        if ( cantidad > 0) {
            agregarAlCarrito({
                id,
                name,
                price,
                img,
                cantidad
            })
        }
    }

    return(
            <Card key={id} className="col-6 tarjetaProd" style={{ width: '18rem' }}>
                <img src={img} className="prodImg" variant="top" alt={name}/>
                <Card.Body className="cardBody">
                    <Card.Title className="prodName">{name}</Card.Title>
                    <p className="prodPrice">Precio $. {price}</p>
                    <Card.Text className="prodDesc">{desc}</Card.Text>
                    <p className="prodCat">{category}</p>

                {
                    !isInCart(id)
                    ?   <ItemCount 
                            max={stock}
                            cantidad={cantidad} 
                            setCantidad={setCantidad}
                            onAdd={handleAgregar}
                        />
                    : <Link to="/cart" className="btn btn-success btnTerminarCompra">Terminar mi compra</Link>
                }

                    <button className="btnVolver btn btn-dark" onClick={handleVolver}>Volver</button>
                    <button className="btnVolverInicio btn btn-dark" onClick={handleVolverInicio}>Volver a Inicio</button>
                </Card.Body>
            </Card>
    )
}