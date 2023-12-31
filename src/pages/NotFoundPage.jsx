import React from "react";
import { Link } from "react-router-dom";
import Main from '../layout/Main.jsx';
import "./NotFoundPage.scss";

function NotFoundPage() {
  return (
    <>

      <Main>
        <div className="error-page">
          <h1>404</h1>
          <h2>Oups! La page que vous demandez n'existe pas.</h2>
          <Link to="/">Retourner sur la page d’accueil</Link>
        </div>
      </Main>

    </>
  );
}

export default NotFoundPage;
