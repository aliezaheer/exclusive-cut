import React from "react";
import logo from "../../assets/logo.png";
import { FaArrowRight } from "react-icons/fa";

import classes from "./Header.module.css";
import Hero from "../Hero";
import HomeTopBanner from "../HomeTopBanner";

const Header = () => {
  return (
    <>
      <div className={classes.hero}>
        <HomeTopBanner />
        <div className="flex justify-evenly w-screen pt-8 items-center">
          <img src={logo} alt="Qutter Hair Salon" />
          <ul className="flex">
            <li>Home</li>
            <li>Services</li>
            <li>Portfolio</li>
            <li>Pages</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
          <button
            id="nav-btn"
            className="flex px-7 py-4 text-white rounded-md hover:bg-white"
          >
            Appointment <FaArrowRight className={classes.arrow} />
          </button>
        </div>
        <div className="pt-36">
          <Hero />
        </div>
      </div>
    </>
  );
};

export default Header;
