import React from "react";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <div id="footer-bg" className="bg-dGray py-20">
      <div className="flex justify-evenly align-middle space-x-24">
        <img className="h-full pt-4" src={logo} alt="" />
        <div className="bg-white w-100 ">
          <input name="email" placeholder="Eneter you email" />
          <button className="px-12 py-7 text-white bg-myPeach">
            Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
