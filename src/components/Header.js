import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/components/Header.css";
function Header() {
  return (
    <header>
      <nav>
        <div className="logo">
          <NavLink to="/">
            <img src="../../assets/logo.svg" alt="Logo Kasa" />
          </NavLink>
        </div>
        <ul>
          <NavLink
            to="/"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li>Accueil</li>
          </NavLink>
          <NavLink
            to="/about"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li>À Propos</li>
          </NavLink>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
