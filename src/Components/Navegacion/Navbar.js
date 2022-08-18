import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css';

const navbar = () => {
  return (
    <div class="nav-bg">
      <nav class="navegacion contenedor">
        <Link to="/Home"><img src="./images/Logo.png" alt="" width="30" height="30" />
          Inicio</Link>
        <Link to="/Agenda">Agenda</Link>
        <Link to="/Perfil">Proyecto</Link>
      </nav>
    </div>
  )
}

export default navbar