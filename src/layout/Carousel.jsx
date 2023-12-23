import React, { useState } from 'react';
import "./Carousel.scss";

function Carousel(props) {
  const pictures = props.pictures;
  const [currentSlide, setCurrentSlide] = useState(0);

  const totalImages = pictures.length;

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => {
      const nextSlide = prevSlide + 1;
      return nextSlide < totalImages ? nextSlide : 0;
    });
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => {
      const nextSlide = prevSlide - 1;
      return nextSlide >= 0 ? nextSlide : totalImages - 1;
    });
  };

  return (
    <div className='Carousel'>
      {pictures?.length > 0 && (
        <div key={pictures[currentSlide]} className="image-container">
          <img src={pictures[currentSlide]} alt='' />

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
