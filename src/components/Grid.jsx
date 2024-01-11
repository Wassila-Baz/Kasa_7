// Importation des modules React nécessaires et du style pour le composant Grid
import React, { useState, useEffect } from "react";
import "../components/Grid.scss";              
import Card from "./Card.jsx";


function Grid() {
  // Utilisation de l'état local pour stocker la liste des appartements
  const [apartments, setApartments] = useState([]);

  // Utilisation de useEffect pour effectuer une action après le rendu initial du composant
  useEffect(fetchApartments, []);

 
  function fetchApartments() { // Fonction pour récupérer la liste des appartements à partir du fichier JSON
    fetch("logements copie.json")// Appel à fetch pour récupérer les données du fichier JSON
      .then((res) => res.json())
      .then((res) => setApartments(res))
      .catch(console.error); 
  }

  return (  // Rendu du composant Grid
    <div className="grid">
      {/* Mapping à travers la liste des appartements et rendu de chaque carte (Card) */}
      {apartments.map((apartment) => (
        <Card
          title={apartment.title}
          imageUrl={apartment.cover}
          id={apartment.id}
          key={apartment.id}
        />
      ))}
    </div>
  );
}

// Exportation du composant Grid en tant que composant par défaut
export default Grid;
