import React from "react";
import Banner from "../layout/Banner.jsx";
import ApartmentDescription from "./ApartmentDescription.jsx";
import "./About.scss";

function About() {
  return (
    <>
      <Banner />
      <div className="about__container">
        <ApartmentDescription />
        <ApartmentDescription />
        <ApartmentDescription />
        <ApartmentDescription />
      </div>
    </>
  );
}

export default About;
