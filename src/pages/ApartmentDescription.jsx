import React from "react";
import "./ApartmentDescription.scss";

export function ApartmentDescription() {
  return (
    <div className="section-apartment">
      <div className="apartment__description">
        <p className="description__header">
          <span>Description</span>
          <i className="fa-solid fa-chevron-down"></i>
        </p>
        <p className="description__content">
          {" "}
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati
          delectus pariatur, cumque, nobis optio dicta repellat placeat mollitia
          totam repellendus incidunt quibusdam molestias aliquam reprehenderit
          adipisci deserunt nisi, voluptate at!Équipements
        </p>
      </div>
      <div className="apartment__description">
        <p className="description__header">
          <span>Description</span>
          <i className="fa-solid fa-chevron-down"></i>
        </p>
        <p className="description__content">Équipements</p>
      </div>
    </div>
  );
}
export default ApartmentDescription;
