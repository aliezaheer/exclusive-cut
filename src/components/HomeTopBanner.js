import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaClock,
  FaPhone,
} from "react-icons/fa";

const HomeTopBanner = () => {
  return (
    <div className=" flex justify-around bg-white w-9/12 py-2 rounded-br-3xl rounded-bl-3xl m-auto">
      <div className=" flex text-black">
        <FaPhone className="mt-1 mr-2 text-myPeach" /> Call Us : 012 (345) 67
        895
      </div>
      <div className="flex text-black ">
        <FaClock className="mt-1 mr-2 text-myPeach" /> Opening Hour : Sunday -
        Friday, 08 am - 09 pm
      </div>
      <div className="flex text-black">
        <FaFacebookF className="m-1" />
        <FaTwitter className="m-1" />
        <FaYoutube className="m-1" />
      </div>
    </div>
  );
};

export default HomeTopBanner;
