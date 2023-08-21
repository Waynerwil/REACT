import React from 'react';
import './Navigation.css'

function Navigation({isSessionStarted}) {
    return (
        <nav className="App-nav">
        <ul>
          <a href="#inicio">Inicio</a>
          <a href="#sesion">{isSessionStarted ? 'Cerrar sesión' : 'Iniciar sesión'}</a>
        </ul>
      </nav>
      );
}

export default Navigation;
