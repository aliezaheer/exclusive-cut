import React from "react";
import firstImg from "../../assets/gallery1.jpg";
import secondImg from "../../assets/gallery2.jpg";
import thirdImg from "../../assets/gallery3.jpg";
import fourthImg from "../../assets/gallery4.jpg";

const GalleyArea = () => {
  return (
    <>
      <div className="flex justify-center mr-auto ml-auto mt-14 space-x-5">
        <img className="w-3/12" src={firstImg} alt="" />
        <img className="w-3/12" src={secondImg} alt="" />
        <img className="w-3/12" src={thirdImg} alt="" />
        <img className="w-3/12" src={fourthImg} alt="" />
      </div>
    </>
  );
};

export default GalleyArea;
