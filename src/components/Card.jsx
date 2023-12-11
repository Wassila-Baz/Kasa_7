import React from 'react'
import "./Card.scss"
import { Link } from "react-router-dom";


function Card(props) {
  console.log('Card props:', props); // Ajoutez cette ligne
  return (
    <div className='apartment'>
      <Link to="/flat" 
      state={{ //1 evaluer et 2e objet
        apartmentId: props.id //passe un id a chacun pour pouvoir les identifeir
      }}>
        <img src={props.imageUrl} alt=""/>
        <h3 className='apartment__subtitle'>{props.title}</h3>
      </Link>
    </div>
  );
}

export default Card