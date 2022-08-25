import React from "react";
import firstImg from "../../assets/gallery1.jpg";
import secondImg from "../../assets/gallery2.jpg";
import thirdImg from "../../assets/gallery3.jpg";
import fourthImg from "../../assets/gallery4.jpg";

const GalleyArea = () => {
  return (
    <>
      <div className="flex justify-center mt-14 space-x-7">
        <img src={firstImg} alt="" />
        <img src={secondImg} alt="" />
        <img src={thirdImg} alt="" />
        <img src={fourthImg} alt="" />
      </div>
    </>
  );
};

export default GalleyArea;
