import React, { useState } from 'react';
import "./Carousel.scss";

function Carousel(props) {
  // Récupère les images de la propriété 'pictures' passée en tant que props
  const pictures = props.pictures;

  // Utilise le Hook d'État pour suivre l'index de la diapositive actuelle
  const [currentSlide, setCurrentSlide] = useState(0);

  // Calcule le nombre total d'images dans le carousel
  const totalImages = pictures.length;

  // Fonction pour passer à la diapositive suivante
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => {
      // Calcule l'index de la prochaine diapositive tout en bouclant si nécessaire
      const nextSlide = prevSlide + 1;
      return nextSlide < totalImages ? nextSlide : 0; // nextSlide est inférieur à totalImages, la fonction retourne nextSlide, sinon, elle retourne 0
    });
  };

  // Fonction pour passer à la diapositive précédente
  const prevSlide = () => {
    setCurrentSlide((prevSlide) => {
      // Calcule l'index de la diapositive précédente tout en bouclant si nécessaire
      const nextSlide = prevSlide - 1;
      return nextSlide >= 0 ? nextSlide : totalImages - 1;// nextSlide est supérieur ou égal à zéro, la fonction retournera simplement nextSlide. Sinon, elle retournera totalImages - 1
    });
  };

  return (
    <div className='Carousel'>
      {/* Vérifie s'il y a des images avant de rendre le composant */}
      {pictures?.length > 0 && (
        <div key={pictures[currentSlide]} className="image-container">
          {/* Affiche l'image de la diapositive actuelle */}
          <img src={pictures[currentSlide]} alt='' />

          {/* Affiche les contrôles de navigation si le nombre d'images est supérieur à 1 */}
          {totalImages > 1 && (
            <>
              <i className="fa-sharp fa-solid fa-chevron-left" onClick={prevSlide}></i>
              <span>{`${currentSlide + 1}/${totalImages}`}</span>
              <i className="fa-sharp fa-solid fa-chevron-right" onClick={nextSlide}></i>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default Carousel;
