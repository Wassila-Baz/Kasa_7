/* eslint-disable react/jsx-no-undef */
import React from "react";
import "./ApartmentPage.scss";
import ApartmentDescription from "./ApartmentDescription";

import img from "../assets/images/Banner.png";

function ApartmentPage() {
  return (
    <div className="apartment-page">
      <div>
        <img src={img} alt="" />
      </div>
      <div className="header">
        <div>
          <div className="title" />
          <h1>Cozy loft on the Canal Saint-Martin Paris, Île-de-France</h1>
          <h2>Paris, Île-de-France</h2>
          <div className="tags">
            <span>Cozy</span>
            <span>Canal</span>
            <span>Paris 10</span>
          </div>
        </div>
        <div className="owner">
          <div className="name-badge">
            <h3>
              <span>Alexandre </span>
              <span>Dumas</span>
            </h3>
            <div className="badge"></div>
          </div>
          <div className="stars">
            <span className="full">★</span>
            <span className="full">★</span>
            <span className="full">★</span>
            <span className="empty">★</span>
            <span className="empty">★</span>
          </div>
        </div>
      </div>
      <ApartmentDescription />
    </div>
  );
}

export default ApartmentPage;
