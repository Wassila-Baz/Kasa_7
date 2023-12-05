import React from 'react'
import "./Apartment.scss"
import { Link } from "react-router-dom";


function Apartment() {
  return (
    <div className='apartment'>
      <Link to="/apartment">
        <h3 className='apartment__subtitle'>Titre de la location</h3>
      </Link>
    </div>
  );
}

export default Apartment