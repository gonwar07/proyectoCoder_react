import './NavBar.scss'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { CartWidget } from '../CartWidget/CartWidget'
import { NavDropdown } from 'react-bootstrap'


const NavBar = () => {

    return(
    
    <header className="header bg-dark">
        <nav className="menu">

            <Link to="/"><FontAwesomeIcon className="logo" icon={['fab', 'react']}></FontAwesomeIcon></Link>            
            <li><Link to="/">Inicio</Link></li>
                <NavDropdown className="productosDropDown" title="Productos" id="nav-dropdown">
                    <Link to="/productos"><li className="linkDrop" eventKey="4.1">Todos</li></Link>
                    <Link to="/productos/remeras"><li className="linkDrop" eventKey="4.1">Remeras</li></Link>
                    <Link to="/productos/buzos"><li className="linkDrop" eventKey="4.2">Buzos</li></Link>
                    <Link to="/productos/pantalones"><li className="linkDrop" eventKey="4.3">Pantalones</li></Link>
                    <Link to="/productos/zapatillas"><li className="linkDrop" eventKey="4.4">Zapatillas</li></Link>
                </NavDropdown>
            <li><Link to="cart">Carrito</Link></li>
            <li><Link to="contacto">Contacto</Link></li>
            <Link to="/cart"><CartWidget/></Link>

        </nav>
    </header>)

}

export default NavBar
