import React from 'react';
import "./Card.scss";
import { Link } from "react-router-dom";

function Card(props) {
  return (
    <div>
      <Link to="/flat" state={{apartmentId: props.id}}> 
        <div className="apartment">
          <img src={props.imageUrl} alt="" />
          <p className="apartment__subtitle">{props.title}</p>
        </div>
      </Link>
    </div>
  );
}

export default Card;
