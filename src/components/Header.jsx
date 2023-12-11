import React from 'react'



function ApartmentHeader(props) {
    console.log("props in apartment header:", props);
  return (
    <div className="header"><div>
      <div className="title" />
      <h1>{props.flat.title}</h1>
      <h2>{props.flat.location}</h2>
      <div className="tags">
        {props.flat.tags.map ((tag)=>(<span>{tag}</span>))}
      </div>
    </div>
    <div className="owner">
      <div className="name-badge">
        <h3>
          <span>Alexandre </span>
          <span>Dumas</span>
        </h3>
        <div className="badge"></div>
      </div>
      <div className="stars">
        <span className="full">★</span>
        <span className="full">★</span>
        <span className="full">★</span>
        <span className="empty">★</span>
        <span className="empty">★</span>
      </div>
    </div>
  </div>
  )
}

export default ApartmentHeader