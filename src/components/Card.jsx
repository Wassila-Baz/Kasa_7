import React from 'react';
import "./Card.scss";
import { Link } from "react-router-dom";

function Card(props) {
  return (
    <Link
      to="/flat"
      state={{
        apartmentId: props.id
      }}
    >
      <div className="apartment">
        <img src={props.imageUrl} alt="" />
        <div className="apartment__subtitle">{props.title}</div>
      </div>
    </Link>
  );
}
export default Card;
