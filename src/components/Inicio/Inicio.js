import React from 'react'
import portada from '../../img/portada.jpg'
import './inicio.scss'

export const Inicio = () => {
    return(
        <div className='portada'>
            <img src={portada}></img>
        </div>
    )
}