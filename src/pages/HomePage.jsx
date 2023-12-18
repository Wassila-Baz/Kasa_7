import React from "react";
import Banner from "../layout/Banner.jsx";
import Grid from "../components/Grid.jsx";
import "./HomePage.scss";

function HomePage() {
  return (
    <>
    <Banner imageUrl={process.env.PUBLIC_URL + "/assets/images/Banner.png"} />
      <Grid />
    </>
  );
}

export default HomePage;
