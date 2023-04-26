import React from "react";
import DescriptionZone from "../components/DescriptionZone";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LogementBanner from "../components/LogementBanner";
import TagAndRate from "../components/TagAndRate";
import TitleAndHost from "../components/TitleAndHost";
function LogementProfile() {
  return (
    <div>
      <Header />
      <LogementBanner />
      <TitleAndHost />
      <TagAndRate />
      <DescriptionZone />
      <Footer />
    </div>
  );
}

export default LogementProfile;
