import React from "react";
import Header from "../components/Header";
import "../styles/pages/Error404.css";

function Error404() {
  return (
    <div>
      <Header />
      <main className="error-page">
        <h1>Erreur 404</h1>
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <a href="/">Retourner sur la page d’accueil</a>
      </main>
    </div>
  );
}

export default Error404;
