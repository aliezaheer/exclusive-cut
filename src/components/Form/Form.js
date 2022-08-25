import React from "react";
import formLeft from "../../assets/form-left.jpg";
import formRight from "../../assets/form-right.jpg";

import classes from "./Form.module.css";

const Form = () => {
  return (
    <>
      <div className="flex justify-center mt-24">
        <img src={formLeft} alt="" />

        <div className="bg-myPeach py-16 w-5/12">
          <div className={classes.formBg}>
            <h3 className="pt-20 text-5xl text-center text-white font-bold ">
              Make Appointment
            </h3>
            <p className="text-white text-center leading-9">
              Sit amet consectetur adipiscing elit sed do eiusmod tempor
              incididunt labore dolore magna aliqua suspendisse
            </p>
            <div className="flex justify-center mt-10">
              <form>
                <div>
                  <input name="Full Name" placeholder="Full Name" />
                  <input name="Email" placeholder="Email" />
                </div>
                <div>
                  <input name="Phone Number" placeholder="Phone Number" />

                  <select>
                    <option>Select The Category</option>
                    <option>Beauty</option>
                    <option>Spa</option>
                    <option>Shaving</option>
                    <option>Facial</option>
                  </select>
                </div>
                <input
                  className={classes.selectDate}
                  name="Select Date"
                  placeholder="Select Date"
                />
                <div>
                  <input
                    className={classes.msgArea}
                    name="Text Message"
                    placeholder="Text Message"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>

        <img src={formRight} alt="" />
      </div>
    </>
  );
};

export default Form;
