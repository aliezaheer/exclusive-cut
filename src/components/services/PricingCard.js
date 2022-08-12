import * as React from "react";

const PricingCard = (props) => {
  return (
    <div className="flex items-center justify-center bg-cardsBg text-black w-2/2 py-6 px-16 rounded-sm mt-10 shadow-sm">
      <img className="" src={props.icon} alt="" />
      <div className="ml-6">
        <div className="text-xl font-bold">{props.title}</div>
        <p className="text-pText mt-2">{props.description}</p>
      </div>
    </div>
  );
};

export default PricingCard;
