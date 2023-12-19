/* eslint-disable react/jsx-no-undef */
import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import "./AprtPage.scss";
import Description from "./Description";
import Banner from "../layout/Banner";
import ApartmentHeader from "../components/Header";


function ApartmentPage() {
  const location = useLocation();
  const [selectedFlat, setselectedFlat] = useState(null); // Ajout de la virgule ici

  useEffect(fetchApartmentData, []);

  function fetchApartmentData() {
    fetch("logements.json")
      .then((res) => res.json())
      .then((flats) => {
        const selectedFlat = flats.find((flat) => flat.id === location.state.apartmentId);
        setselectedFlat(selectedFlat);
      })
      .catch(console.error);
  }
if (selectedFlat==null) 
return (
  <div className="loding"/>
)
  return (
    <div className="apartment-page">
        <Banner pictures={selectedFlat.pictures} showArrows={true} /> 
        <ApartmentHeader flat={selectedFlat}/>
      <div className="container-description">
        <Description title="Description" content={selectedFlat.description}/>
        <Description title="Équipements" 
        content={selectedFlat.equipments.map((eq)=>(
          <li>{eq}</li> //
        ))}/>
      </div>
    </div>
  );
}

export default ApartmentPage;
