import {useContext} from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import { CartItem } from './CartItem'
import './CartView.scss'

export const CartView = () =>{

    const {carrito, vaciarCarrito, totalCompra} = useContext(CartContext)

    if(carrito.length === 0){
        return (
            <div className="cartViewVacio">
                <h2>No agregaste productos a tu carrito aún</h2>
                <hr/>
                <Link to="/" className="btn btn-dark">Volver</Link>
            </div>
        )
    }

    return(
        <div className="container my-5 cartView">
                <h2>Cart View</h2>
                <hr/>
                <section>
                    {
                        carrito.map((prod) => <CartItem key={prod.id} {...prod}/>)
                    }
                </section>
                <hr/>
                <div>
                    <p className='totalCompra'>TOTAL: $ {totalCompra()}</p>
                    <button className="btn btn-danger" onClick={vaciarCarrito}>Vaciar carrito</button>
                    <Link to="/checkout" className="btn btn-success mx-2">Terminar mi compra</Link>
                </div>
        </div>
    )
}