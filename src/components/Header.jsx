import React from 'react';

function ApartmentHeader(props) {
  const id = props.flat;
  const name = id.host.name;
  const [firstName, lastName] = name.split("");

  console.log("props in apartment header:", props);

  return (
    <div className="header">
      <div>
        <div className="title" />
        <h1>{id.title}</h1>
        <h2>{id.location}</h2>
        <div className="tags">
          {id.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
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
          <span className="full">★</span>
          <span className="full">★</span>
          <span className="full">★</span>
          <span >★</span>
          <span >★</span>
        </div>
      </div>
    </div>
  );
}

export default ApartmentHeader;
