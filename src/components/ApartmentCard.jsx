import React from 'react'
import "./ApartmentCard.scss"
import { Link } from "react-router-dom";


function ApartmentCard(props) {
  return (
    <div className='apartment'>
      <Link to="/apartment">
        <img src={props.imageUrl} alt=""/>
        <h3 className='apartment__subtitle'>{props.title}</h3>
      </Link>
    </div>
  );
}

export default ApartmentCard