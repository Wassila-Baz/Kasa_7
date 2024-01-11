
import React from 'react';
import "./ApartmentDetail";
import Tags from "../components/Tags"

function ApartmentDetail(props) {

  const id = props.flat;
  const name = id.host.name;
  

  const [firstName, lastName] = name.split(" ");


  return (
    <div className="header">
      <div>
 
        <div className="title" />
        <h1>{id.title}</h1>
        <p>{id.location}</p>
        <Tags tags={id.tags} /> 
      </div>
      <div className="owner">
        <div className="name-badge">
          <h3>
            <span>{firstName} </span>
            <span>{lastName}</span>
          </h3>
          <div className="badge">
            <img src={id.host.picture} alt="" />
          </div>
        </div>
        <div className="stars">
          {[1, 2, 3, 4, 5].map((number) => (
            <span key={number} className={props.flat.rating >= number ? "full" : ""}>★</span>
          ))}
        </div>      
      </div>
    </div>
  );
}


export default ApartmentDetail;
