/* eslint-disable react/jsx-no-undef */
import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import "./AprtPage.scss";
import Collapse from "../components/Collapse";
import Carousel from "../components/Carousel";
import ApartmentHeader from "../components/Header";


function ApartmentPage() {
  const location = useLocation(); //est utilisé pour obtenir l'objet location qui contient des informations sur l'URL actuelle.
  const [selectedFlat, setselectedFlat] = useState(null); 

  useEffect(fetchApartmentData, []);//Comment faire pour exécuter un effet uniquement après le premier render de mon composant ? Par exemple, si je veux récupérer des données sur une API ? useEffect   nous permet d'effectuer notre effet une fois le rendu du composant terminé
  //le premier paramètre passé à useEffect est une fonction.
  //Le deuxième paramètre de  useEffect   accepte un tableau noté entre crochets : il s'agit du tableau de dépendances.

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
        <Carousel pictures={selectedFlat.pictures} showArrows={true} /> 
        <ApartmentHeader flat={selectedFlat}/>
      <div className="container-description">
        <Collapse title="Description" content={selectedFlat.description}/>
        <Collapse title="Équipements" 
        content={selectedFlat.equipments.map((eq)=>(
          <li>{eq}</li> //
        ))}/>
      </div>
    </div>
  );
}

export default ApartmentPage;
