import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LogementBanner from "../components/LogementBanner";
import LogementTitle from "../components/LogementTitle";
import LogementHost from "../components/LogementHost";
import Tag from "../components/Tag";
import Rate from "../components/Rate";
import Collapse from "../components/Collapse";
import "../styles/pages/LogementProfile.css";
function LogementProfile() {
  return (
    <div>
      <Header />
      <LogementBanner imgSrc={""} title="Bannière" />
      <div className="title-and-host">
        <LogementTitle title="Titre" location="Localisation" />
        <LogementHost hostPicture={""} hostName="Nom" />
      </div>
      <div className="tag-and-rate-zone">
        <Tag tag="tag" />
        <Rate color="colored" />
      </div>
      <div className="description-zone">
        <Collapse label="test" description="testeur" openByDefault="true" />
        <Collapse label="test" description="testeur" openByDefault="true" />
      </div>
      <Footer />
    </div>
  );
}

export default LogementProfile;
