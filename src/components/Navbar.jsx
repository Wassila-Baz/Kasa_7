import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import "./Navbar.scss";
import img from "../../src/assets/images/LOGO.svg";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/"> 
        <div className='navbar__logo'>
          <img src={img} alt='logo'/>
        </div>
      </Link>
      <div className='link'>
        <NavLink to="/" activeClassName="active"><div>Accueil</div></NavLink> 
        <NavLink to="/about" activeClassName="active"><div>À propos</div></NavLink>
     </div>
    </nav>
  );
}

export default Navbar;
