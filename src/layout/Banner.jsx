import React, { useState } from 'react';
import "./Banner.scss";

function Banner(props) {
  // Les images du carousel passées en tant que prop
  const pictures = props.pictures;

  // Utilisation du state pour suivre l'index de l'image actuelle
  const [currentSlide, setCurrentSlide] = useState(0);

  // Fonction pour passer à la diapositive suivante
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % pictures.length);
  };

  // Fonction pour passer à la diapositive précédente
  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + pictures.length) % pictures.length);
  };

  return (
    <div className='banner'>
      {/* Vérifier s'il y a des images à afficher */}
      {pictures?.length > 0 && (
        <div key={pictures[currentSlide]} className="image-container">
          {/* Afficher l'image actuelle */}
          <img src={pictures[currentSlide]} alt='' />
          
          {/* Vérifier si les flèches doivent être affichées en fonction de la prop showArrows */}
          {props.showArrows && (
            <>
              {/* Flèche gauche pour passer à la diapositive précédente */}
              <i className="fa-sharp fa-solid fa-chevron-left" onClick={prevSlide}></i>
              {/* Flèche droite pour passer à la diapositive suivante */}
              <i className="fa-sharp fa-solid fa-chevron-right" onClick={nextSlide}></i>
            </>
          )}
        </div>
      )}
      {/* Texte de titre */}
      <h2>Chez vous, partout et ailleurs</h2>
    </div>
  );
}

export default Banner;
