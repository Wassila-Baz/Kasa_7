/* eslint-disable react/jsx-no-undef */
import React from "react";
import { useLocation } from 'react-router-dom';
import "./AprtPage.scss";
import Description from "./Description";
import ImageBanner from "../components/ImageBanner";

function ApartmentPage() {
  const location = useLocation();
  console.log ("location", location)
  return (
    <div className="apartment-page">
      <div>
      <ImageBanner  />
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
      <div className="container-description">
        <Description />
        <Description />
      </div>
    </div>
  );
}

export default ApartmentPage;