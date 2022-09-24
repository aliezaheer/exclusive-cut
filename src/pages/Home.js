import React from "react";
import Header from "../components/header/Header";
import GalleySec from "../components/HomeGallery/GalleySec";
import PricingPlan from "../components/services/PricingPlan";
import ServicesOffers from "../components/services/ServicesOffers";
import WeAreBest from "../components/WeAreBest";
import WhatWeDo from "../components/WhatWeDo";

import { motion } from "framer-motion";

const Home = () => {
  return (
    <>
      <Header />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <WhatWeDo className="z-10" />
      </motion.div>
      <WeAreBest />

      <ServicesOffers />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <PricingPlan />
      </motion.div>
      <GalleySec />
    </>
  );
};

export default Home;
