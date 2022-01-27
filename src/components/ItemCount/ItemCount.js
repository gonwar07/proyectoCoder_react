import React from 'react'
import { btnConfig } from './btnConfig'
import './ItemCount.scss'

export const ItemCount = ( {max, setCantidad, cantidad, onAdd} ) => {

    const sumarProd = () => {
        cantidad < max && setCantidad(cantidad + 1)
    }

    const restarProd = () => {
        cantidad > 1 && setCantidad(cantidad - 1)
    }

    const config = btnConfig(cantidad, max, restarProd, sumarProd)

    return(
        <div className="contenedorCardProd">
            <div className="divContadorProd">
                <button {...config.restar}>
                        -
                </button>

                <p className="numProd"> {cantidad} </p>

                <button {...config.sumar}>
                        +
                </button>
            </div>
            <button 
                className="btnAgregarProd btn btn-dark" 
                disable={cantidad === 0}
                onClick={onAdd}>Agregar al carrito
            </button>
        </div>
    )
}