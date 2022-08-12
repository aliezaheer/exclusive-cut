import React from "react";
import Header from "../components/header/Header";
import GalleySec from "../components/HomeGallery/GalleySec";
import PricingPlan from "../components/services/PricingPlan";
import ServicesOffers from "../components/services/ServicesOffers";
import WeAreBest from "../components/WeAreBest";
import WhatWeDo from "../components/WhatWeDo";

const Home = () => {
  return (
    <>
      <Header />
      <WhatWeDo className="z-10" />
      <WeAreBest />
      <ServicesOffers />
      <PricingPlan />
      <GalleySec />
    </>
  );
};

export default Home;
