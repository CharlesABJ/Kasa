import React from "react";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";

function About() {
  return (
    <div>
      <Header />
      <Banner imgSrc="./assets/banner-about.png" />
      <ul>
        <li>Fiabilité</li>
        <li>Respect</li>
        <li>Service</li>
        <li>Sécurité</li>
      </ul>
      <Footer />
    </div>
  );
}

export default About;
