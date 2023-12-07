import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Main from "../layout/Main";
import Footer from "../layout/Footer.jsx";
import "./NotFoundPage.scss";

function NotFoundPage() {
  return (
    <>
      <Navbar />
      <Main>
        <div className="error-page">
          <h1>404</h1>
          <h2>Oups! La page que vous demandez n'existe pas.</h2>
          <Link to="/">Retourner sur la page d’accueil</Link>
        </div>
      </Main>
      <Footer />
    </>
  );
}

export default NotFoundPage;
