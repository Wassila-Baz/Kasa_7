import React from 'react'
import "./ApartmentPage.scss"
import img from "../assets/images/Banner.png"

function ApartmentPage() {
  return (
    <div className='apartment-page'>
    <div>
     <img src={img} alt=""/>
    </div>
    <div className='title'/>
        <h1>Cozy loft on the Canal Saint-Martin Paris, Île-de-France</h1>
        <h2>Paris, Île-de-France</h2>
        <div className='tags'>
            <span>Cozy</span>
            <span>Canal</span>
            <span>Paris 10</span>
        </div>
    <div className="owner">
        <h3>Alexandre Dumas</h3>
        <div className="badge"></div>
        <div className="stars">
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
        </div>
    </div> 
    <div className="description">
        <p>Description</p>
        <p>Description</p>
    </div>
</div>

  )
}

export default ApartmentPage