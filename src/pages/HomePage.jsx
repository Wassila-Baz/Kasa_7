import React from "react";
import Banner from "../layout/Banner.jsx";
import ApartementGrid from "../components/Grid.jsx";
import "./HomePage.scss";

function HomePage() {
  return (
    <>
      <Banner />
      <ApartementGrid />
    </>
  );
}

export default HomePage;
