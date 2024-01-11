// Dans HomePage.jsx
import React from 'react';
import Banner from '../layout/Banner.jsx';
import Grid from "../components/Grid.jsx";
import "./HomePage.scss";

function HomePage() {
  const pictures = ["/Banner.png"];
  
  return (
    <>
      <Banner pictures={pictures}  text={"Chez vous, partout et ailleurs"}  />
      <Grid />
    </>
  );
}

export default HomePage;
