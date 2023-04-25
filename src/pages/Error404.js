import React from "react";
import Header from "../components/Header";
import "../styles/pages/Error404.css";
import { NavLink } from "react-router-dom";

function Error404() {
  return (
    <div>
      <Header />
      <main className="error404">
        <h1>404</h1>
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <NavLink to="/">
          <span>Retourner sur la page d’accueil</span>
        </NavLink>
      </main>
    </div>
  );
}

export default Error404;
