import React from "react";
import WhatWeDoImg from "../assets/what-we-do.jpg";

const WhatWeDo = () => {
  return (
    <div className="flex justify-center items-center m-auto pr-12 z-10 bg-white text-black space-x-8 -mt-28 relative z-6">
      <div className="">
        <img className="" src={WhatWeDoImg} alt="Guy hairstyles at salon" />
      </div>
      <div className="">
        <h3 className="text-4xl font-bold uppercase mb-3">What We Do</h3>
        <div className="leading-relaxed mb-10">
          Sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt
          <br />
          labore dolore magna aliqua suspendisse
        </div>
        <div className="flex items-center space-x-8">
          <div className=" flex items-center border-grayBorder border-solid border rounded-md px-9 py-10 mb-5">
            <img
              src="https://cdn-icons-png.flaticon.com/512/94/94055.png"
              alt="hair cutting at barber shop"
              className="relative w-12 h-12 mr-3"
            />
            <div>
              <h4 className="font-bold text-2xl">Hair Cutting</h4>
              <p className="text-pText">
                Quis autem vel eumu reres <br /> ender quiea voluptate
              </p>
            </div>
          </div>
          <div className="flex items-center border-grayBorder border-solid border rounded-md px-9 py-10 mb-5">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2810/2810424.png"
              alt="hair cutting at barber shop"
              className="relative w-12 h-12 mr-3"
            />
            <div>
              <h4 className="font-bold text-2xl">Shaving Style</h4>
              <p className="text-pText">
                Quis autem vel eumu reres <br /> ender quiea voluptate
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-8">
          <div className="flex items-center border-grayBorder border-solid border rounded-md px-9 py-10  mb-5">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3465/3465261.png"
              alt="hair cutting at barber shop"
              className="relative w-12 h-12 mr-3"
            />
            <div>
              <h4 className="font-bold text-2xl">Spa & GYM</h4>
              <p className="text-pText">
                Quis autem vel eumu reres <br /> ender quiea voluptate
              </p>
            </div>
          </div>
          <div className="flex items-center border-grayBorder border-solid border rounded-md px-9 py-10  mb-5">
            <img
              src="https://cdn-icons-png.flaticon.com/512/436/436512.png"
              alt="hair cutting at barber shop"
              className="relative w-12 h-12 mr-3"
            />
            <div>
              <h4 className="font-bold text-2xl">Body Treatment</h4>
              <p className="text-pText">
                Quis autem vel eumu reres <br /> ender quiea voluptate
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
