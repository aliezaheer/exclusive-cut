import React from "react";

import WhatWeDoImg from "../assets/what-we-do.jpg";

const OverviewServices = (props) => {
  return (
    <div className="flex justify-center items-center m-auto pr-12 z-10 bg-white text-black space-x-8 -mt-28 relative z-6">
      <div className="">
        <img className="" src={WhatWeDoImg} alt="Guy hairstyles at salon" />
      </div>

      <div className="">
        <h3 className="text-4xl font-bold uppercase mb-3">{props.title}</h3>
        <div className="leading-relaxed mb-10">{props.detail}</div>
        <div className="flex items-center space-x-8">
          <div className=" flex items-center border-grayBorder border-solid border rounded-md px-9 py-10 mb-5">
            <img
              src={props.icon}
              alt="hair cutting at barber shop"
              className="relative w-12 h-12 mr-3"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewServices;
