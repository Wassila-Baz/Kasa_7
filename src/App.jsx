import React from 'react';
import Navbar from "./components/Navbar.jsx";
import Banner from "./components/Banner.jsx"
import ApartementGrid from "./components/ApartmentGrid.jsx"
import Main from "./components/Main.jsx"
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <Main>
        <Banner />
        <ApartementGrid/>
      </Main>
    </div>
  );
}

export default App
