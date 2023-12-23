import React from 'react';
import "./Banner.scss";

function Banner({ pictures }) {
  return (
    <div className='banner'>
      <img src={pictures[0]} alt="Banner" />
      <h2>Chez vous, partout et ailleurs</h2>
    </div>
  );
}

export default Banner;
