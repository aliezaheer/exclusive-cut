import React from "react";
import { FaPlay } from "react-icons/fa";

const Hero = () => {
  return (
    <>
      <div className="flex justify-around items-center">
        <div className="text-white">
          <h1 className="text-8xl font-semibold mb-3 leading-tight">
            BARBERS & <br /> HAIR CUTTING
          </h1>
          <p className="text-lg tracking-wider mb-6">
            Sit amet consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut
            <br /> labore et dolore magna aliqua suspendisse ultrices gravida
          </p>
          <button id="nav-btn" className="flex px-7 py-4 text-white rounded-md">
            Explore Our Services
          </button>
        </div>
        <div>
          <div className="play-btn">
            <FaPlay className="fa-play" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
