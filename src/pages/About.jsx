import React from "react";
import Banner from "../layout/Banner.jsx";
import Description from "./Description.jsx";
import "./About.scss";

function About() {
  return (
    <>
      <Banner />
      <div className="about__container">
        <Description />
        <Description />
        <Description />
        <Description />
      </div>
    </>
  );
}

export default About;
