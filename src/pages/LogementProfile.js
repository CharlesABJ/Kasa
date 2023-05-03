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
import { logementList } from "../datas/logementList";
import { useParams } from "react-router-dom";
import Error404 from "./Error404";

function LogementProfile() {
  const { id } = useParams();
  const rates = [1, 2, 3, 4, 5];
  const logement = logementList.find((logement) => logement.id === id);
  if (!logement) {
    return <Error404 />;
  }

  return (
    <div>
      <Header />
      {logement.pictures.map((e, index) => (
        <LogementBanner key={index} imgSrc={e} title="Bannière" />
      ))}
      <div className="description-zone">
        <div className="logement-title-and-description">
          <LogementTitle title={logement.title} location={logement.location} />{" "}
          <div className="tag-zone">
            {logement.tags.map((e, index) => (
              <Tag key={index} tag={e} />
            ))}
          </div>
        </div>
        <div className="logement-host-and-rates">
          <div className="host-zone">
            <LogementHost
              hostPicture={logement.host.picture}
              hostName={logement.host.name}
            />
          </div>
          <div className="rates-zone">
            {rates.map((e, index) => (
              <Rate
                key={index}
                color={parseInt(logement.rating) >= e ? "colored" : ""}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="collapses">
        <Collapse
          label="Description"
          description={logement.description}
          openByDefault="true"
        />
        <Collapse
          label="Équipements"
          description={logement.equipments.map((e, index) => (
            <span key={index}>{e}</span>
          ))}
          openByDefault="true"
        />
      </div>
      <Footer />
    </div>
  );
}

export default LogementProfile;
