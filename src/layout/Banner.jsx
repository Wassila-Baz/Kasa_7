import React, { useState } from 'react';
import "./Banner.scss";

function Banner(props) {
  const pictures = props.pictures;

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % pictures.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + pictures.length) % pictures.length);
  };

  return (
    <div className='banner'>
      {pictures?.length > 0 && (
        <div key={pictures[currentSlide]} className="image-container">
          <img src={pictures[currentSlide]} alt='' />
          <i className="fa-sharp fa-solid fa-chevron-left" onClick={prevSlide}></i>
          <i className="fa-sharp fa-solid fa-chevron-right" onClick={nextSlide}></i>
        </div>
      )}
      <h2>Chez vous, partout et ailleurs</h2>
    </div>
  );
}

export default Banner;
