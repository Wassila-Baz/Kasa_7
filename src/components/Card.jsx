import React from 'react';
import "./Card.scss";
import { Link } from "react-router-dom";

function Card(props) {
  console.log('Card props:', props); // Ajoutez cette ligne

  const state = {
    pathname: "/flat",
    state: {
      userId: "ben"
    }
  };

  return (
    <Link to="/flat" state={state}>
      <div className='apartment'>
        <img src={props.imageUrl} alt="" />
        <h3 className='apartment__subtitle'>{props.title}</h3>
      </div>
    </Link>
  );
}

export default Card;
