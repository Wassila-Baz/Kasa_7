// Importez toutes les dépendances nécessaires au niveau supérieur
import React, { useEffect, useState } from "react";
import "./AprtPage.scss";
import ImageBanner from '../components/ImageBanner';
import Header from "../components/Header";
import Description from "./Description";
import { useLocation } from "react-router-dom";

// Déclarez votre composant
function ApartmentPage() {
  const location = useLocation();
  const [flat, setFlat] = useState(null);

  useEffect(() => {
    fetchApartmentData();
  }, []);

  function fetchApartmentData() {
    fetch("logements.json")
      .then((res) => res.json())
      .then((flats) => {
        console.log('Fetched flats:', flats);
        const apartmentId = location.state?.apartmentId;
        const flat = flats.find((flat) => flat.id === apartmentId);
        setFlat(flat);
      })
      .catch(console.error);
  }

  if (!flat) {
    return <div>Loading...</div>;
  }

  return (
    <div className="apartment-page">
      selected flat:{JSON.stringify(flat)}
      <ImageBanner imageUrl={flat.cover} />
      <Header title={flat.title} />
      <div className="container-description">
        <Description />
        <Description />
      </div>
    </div>
  );
}

// Exportez votre composant à la fin du fichier
export default ApartmentPage;
