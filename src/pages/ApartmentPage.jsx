import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import "./AprtPage.scss";
import Collapse from "../components/Collapse";
import Carousel from "../components/Carousel";
import ApartmentHeader from "../components/Header";
import logementsData from '../logements.json';

function ApartmentPage() {
  const { id } = useParams();
  const [selectedFlat, setselectedFlat] = useState(null);

  useEffect(() => {
    fetchApartmentData();
  }, []);

  function fetchApartmentData() {
    // Utilise les données directement de logementsData
    const foundApartment = logementsData.find((flat) => flat.id === id);
    setselectedFlat(foundApartment);
  }

  if (selectedFlat === null)
    return <div className="loading" />;

  return (
    <div className="apartment-page">
      <Carousel pictures={selectedFlat.pictures} showArrows={true} />
      <ApartmentHeader flat={selectedFlat} />
      <div className="container-description">
        <Collapse title="Description" content={selectedFlat.description} />
        <Collapse
          title="Équipements"
          content={selectedFlat.equipments.map((eq, index) => (
            <li key={index}>{eq}</li>
          ))}
        />
      </div>
    </div>
  );
}

export default ApartmentPage;
