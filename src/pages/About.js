import React from "react";
import Banner from "../components/Banner";
import CollapseZone from "../components/CollapseZone";
import Footer from "../components/Footer";
import Header from "../components/Header";

function About() {
  return (
    <div>
      <Header />
      <Banner imgSrc="../../assets/banner-about.png" />
      <CollapseZone />
      <Footer />
    </div>
  );
}

export default About;
