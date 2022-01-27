import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Item.scss'

export const Item = ({prod}) =>{

    return(

        <Card key={prod.id} className="col-6 tarjetaProd" style={{ width: '18rem' }}>
            <img src={prod.img} className="prodImg" variant="top" alt={prod.name}/>
            <Card.Body className="cardBody">
                <Card.Title className="prodName">{prod.name}</Card.Title>
                <p className="prodPrice">Precio $. {prod.price}</p>
                <Card.Text className="prodDesc">{prod.desc}</Card.Text>
                <Link to={`/detail/${prod.id}`} className="btn btn-primary">Ver más</Link>
            </Card.Body>
        </Card>
    )
}