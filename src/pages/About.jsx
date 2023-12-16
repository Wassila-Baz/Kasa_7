// About.jsx

import React from 'react';
import Banner from '../layout/Banner.jsx';
import Description from './Description.jsx';
import './About.scss';

function About() {
  return (
    <>
      <Banner imageUrl='http://localhost:3000/src/assets/images/montage.jpg?v=12345
      /images/montage.jpg' />
      <div className='about__container'>; 
        <Description title="Fiabilité" content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."/>
        <Description title="Respect" content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme. "/>
        <Description title="Service" content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."/>
        <Description title="Sécurité" content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes. "/>
      </div>
    </>
  );
}

export default About;
