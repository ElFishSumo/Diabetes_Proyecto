import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';


import Navegacion from './Components/Navegacion/Navbar'
import Home from './Components/Paginas/Home'
import Perfil from './Components/Paginas/Perfil'
import Agenda from './Components/Paginas/Agenda'

function App() {
  return (
    <body>
      
      {/* Barra de navegación */}
      <Router>
        <Navegacion />

        <Routes>
          <Route exact path='/Home' element={<Home/>} />
          <Route exact path='/Perfil' element={<Perfil/>} />
          <Route exact path='/Agenda' element={<Agenda/>} />
        </Routes>

      </Router>

    </body>
  );
}

export default App;
