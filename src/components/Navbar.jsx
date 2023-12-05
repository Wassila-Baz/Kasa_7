import React from 'react';
import { NavLink } from "react-router-dom";
import "./Navbar.scss"
import img from "../../src/assets/images/LOGO.svg"

function Navbar() {
   return (
    <nav className="navbar">
      <div className='navbar__logo'>
        <img src={img} alt='logo'/>
      </div>
        <NavLink to="/"><div>Accueil</div></NavLink>
        <NavLink to="/about"><div>À propos</div></NavLink>
    </nav>
   )
  }
  export default Navbar