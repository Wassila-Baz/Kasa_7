import React from 'react';
import Banner from "../layout/Banner.jsx"
import ApartementGrid from "../components/ApartmentGrid.jsx"
import Main from "../layout/Main.jsx"
import './HomePage.scss';

function HomePage() {
  return (
    <>
      <Main>
        <Banner />
        <ApartementGrid/>
      </Main>
    </>
  );
}

export default HomePage
