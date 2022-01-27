import React from 'react'
import { Navigate, useRoutes } from 'react-router'
import { CartView } from '../../components/CartView/CartView'
import { Checkout } from '../../components/Checkout/Checkout'
import { ItemDetailContainer } from '../../components/ItemDetailContainer/ItemDetailContainer'
import { ItemListContainer } from '../../components/Container/ItemListContainer'
import { Inicio } from '../Inicio/Inicio'
import { Contacto } from '../Contacto/Contacto'

export const AppRouter = () => {

    const routes = useRoutes([
        {path: "/", element: <Inicio/>},
        {path: "/productos", element: <ItemListContainer/>},
        {path: "/productos/:catId", element: <ItemListContainer/>},
        {path: "/detail/:itemId", element: <ItemDetailContainer/>},
        {path: "/cart", element: <CartView/>},
        {path: "/checkout", element: <Checkout/>},
        {path: "/contacto", element: <Contacto/>},
        {path: "*", element: <Navigate to="/"/>}
    ])

    return routes
}