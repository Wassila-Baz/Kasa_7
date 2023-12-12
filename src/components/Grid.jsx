import React, { useState, useEffect } from "react";
import "../components/Grid.scss";
import Card from "./Card.jsx";

function Grid() {
  const [apartments, setApartments] = useState([]);

  useEffect(fetchApartments,[]);
 


  function fetchApartments() {
    fetch("logements.json")
      .then((res) => res.json())
      .then((res) => setApartments(res))
      .catch(console.error);
  }
  

  return (
    <div className="grid">
      {apartments.map((apartment) => (
        <Card key={apartment.title} imageUrl={apartment.cover} id={apartment.id} />
      ))}
    </div>
  );
}
export default Grid;
