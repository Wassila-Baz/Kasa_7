import React from 'react';
import "./Navbar.css"
import img from "../../src/assets/images/LOGO.svg"

function Navbar() {
   return (
    <nav className="navbar">
      <div className='navbar__logo'>
        <img src={img} alt='logo'/>
      </div>
      <div>Accueil</div>
      <div>À propos</div>
    </nav>
   )
  }
  export default Navbar