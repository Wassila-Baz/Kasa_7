import React from 'react';
import "./Banner.scss";

function Banner({ pictures,text }) {
  return (
    <div className='banner'>
      <img src={pictures[0]} alt="Banner" />
      <h2>{text}</h2>
    </div>
  );
}

export default Banner;
