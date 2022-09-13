import React from "react";
import { FaPlay } from "react-icons/fa";
import { motion } from "framer-motion";

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
          <motion.div
            className="play-btn"
            animate={{
              scale: [1, 2, 2, 1, 1],
              rotate: [0, 0, 270, 270, 0],
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaPlay className="fa-play" />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Hero;
