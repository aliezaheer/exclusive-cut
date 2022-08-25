import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Form from "../Form/Form";

import classes from "./GallerySec.module.css";
import GalleyArea from "./GalleyArea";

const GalleySec = () => {
  return (
    <>
      <div className="flex justify-around mt-24 ">
        <div>
          <h3 className="text-4xl text-black mb-3 font-bold">
            Latest Photo Gallery
          </h3>
          <p className="tracking-wider leading-relaxed ">
            Sit amet consectetur adipiscing elit sed do eiusmod tempor <br />
            incididunt labore dolore magna aliqua suspendisse
          </p>
        </div>
        <div>
          <button
            id="nav-btn"
            className="flex px-7 py-4 text-white rounded-md mt-12"
          >
            Appointment <FaArrowRight className={classes.arrow} />
          </button>
        </div>
      </div>
      <GalleyArea />
      <Form />
    </>
  );
};

export default GalleySec;
