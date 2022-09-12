import React from "react";
import classes from "../services/PricingPlan.module.css";
import PricingTabs from "./PricingTabs";

const PricingPlan = () => {
  return (
    <>
      <div className={classes.pricingBg}>
        <div className="flex justify-center text-center text-white">
          <div>
            <h3 className="text-5xl font-bold mt-20 mb-5">
              Awesome Pricing Plan
            </h3>
            <p>
              Sit amet consectetur adipiscing elit sed do eiusmod tempor <br />
              incididunt labore dolore magna aliqua suspendisse
            </p>
          </div>
        </div>
        <PricingTabs />
      </div>
    </>
  );
};

export default PricingPlan;
