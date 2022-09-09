import React, { useState } from "react";
import formLeft from "../../assets/form-left.jpg";
import formRight from "../../assets/form-right.jpg";

import classes from "./Form.module.css";

const Form = () => {
  const [storeName, setStoreName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [message, setMessage] = useState("");

  const [customer, setCustomer] = useState([]);

  const submitHandler = (event) => {
    event.preventDefault();

    const newCustomer = {
      storeName,
      email,
      phone,
      category,
      date,
      message,
    };

    setCustomer([...customer, newCustomer]);

    setStoreName("");
    setEmail("");
    setPhone("");
    setCategory("");
    setDate("");
    setMessage("");
  };

  return (
    <>
      <div className="flex justify-center mt-24">
        <img src={formLeft} alt="" />

        <div id="formBg" className="bg-myPeach py-16 w-5/12">
          <h3 className="pt-20 text-5xl text-center text-white font-bold ">
            Make Appointment
          </h3>
          <p className="text-white text-center leading-9">
            Sit amet consectetur adipiscing elit sed do eiusmod tempor
            incididunt labore dolore magna aliqua suspendisse
          </p>
          <div className="flex justify-center mt-10">
            <form onSubmit={submitHandler}>
              <div>
                <input
                  name="Full Name"
                  placeholder="Full Name"
                  value={storeName}
                  onChange={(event) => setStoreName(event.target.value)}
                />
                <input
                  name="Email"
                  placeholder="Email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>
              <div>
                <input
                  name="Phone Number"
                  placeholder="Phone Number"
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                />

                <select
                  value={category}
                  onChange={(event) => setCategory(event.target.value)}
                >
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
                value={date}
                onChange={(event) => setDate(event.target.value)}
              />
              <div>
                <input
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  className={classes.msgArea}
                  name="Text Message"
                  placeholder="Text Message"
                />
              </div>

              <button type="submit">Submit</button>
            </form>
          </div>
        </div>

        <img src={formRight} alt="" />
      </div>
    </>
  );
};

export default Form;
