import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom'; // Importez useNavigate de react-router-dom
import "./ApartmentPage.scss";
import Collapse from "../components/Collapse";
import Carousel from "../components/Carousel";
import ApartmentDetail from "../components/ApartmentDetail";
import logementsData from '../logements.json';

function ApartmentPage() {
  const { id } = useParams();
  const [selectedFlat, setselectedFlat] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchApartmentData();
  }, []);

  function fetchApartmentData() {
    const foundApartment = logementsData.find((flat) => flat.id === id);

    // Si aucun appartement n'est trouvé, effectue la redirection vers NotFoundPage
    if (!foundApartment) {
      // Effectue la redirection avec useNavigate
      navigate('/logement-non-trouvé');
      return;
    }

    setselectedFlat(foundApartment);
  }

  if (selectedFlat === null) {
    return null; // 
  }

  return (
    <div className="apartment-page">
      <Carousel pictures={selectedFlat.pictures} showArrows={true} />
      <ApartmentDetail flat={selectedFlat} />
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
