import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartWidget } from './components/CartWidget/CartWidget';
import NavBar from './components/NavBar/NavBar';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faUserAstronaut, faCoffee } from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from './context/CartContext'
import { AppRouter } from './components/AppRouter/AppRouter';

library.add(fab, faUserAstronaut, faCoffee)

function App() {

  return (
    <CartProvider>
      <BrowserRouter>   
        <NavBar>
          <CartWidget/>
        </NavBar>
        <AppRouter/>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;