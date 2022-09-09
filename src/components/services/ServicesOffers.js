import React from "react";
import ServiceBlock from "./ServiceBlock";
import ctaBG from "../../assets/cta-bg.png";

const ServicesOffers = () => {
  const servicesOffers = [
    {
      id: 1,
      title: "Hair Cutting Style",
      description:
        "Sit amet consectetur adipisci elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      icon: "https://cdn-icons-png.flaticon.com/512/372/372204.png",
    },
    {
      id: 2,
      title: "Hair Washing",
      description:
        "Sit amet consectetur adipisci elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      icon: "https://cdn-icons-png.flaticon.com/512/3461/3461906.png",
    },
    {
      id: 3,
      title: "Body Treatments",
      description:
        "Sit amet consectetur adipisci elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      icon: "https://cdn-icons-png.flaticon.com/512/436/436512.png",
    },
    {
      id: 4,
      title: "Beauty And Spa",
      description:
        "Sit amet consectetur adipisci elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      icon: "https://cdn-icons-png.flaticon.com/512/3465/3465261.png",
    },
    {
      id: 5,
      title: "Stylist Shaving",
      description:
        "Sit amet consectetur adipisci elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      icon: "https://cdn-icons-png.flaticon.com/512/1905/1905795.png",
    },
    {
      id: 6,
      title: "Multi Hair Color",
      description:
        "Sit amet consectetur adipisci elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      icon: "https://cdn-icons-png.flaticon.com/512/7979/7979076.png",
    },
  ];

  const allServices = servicesOffers.map((ser) => {
    const { id, title, description, icon } = ser;
    <li className="indv-item" key={ser.id}>
      <ServiceBlock
        id={id}
        title={title}
        description={description}
        icon={icon}
      />
    </li>;
  });

  return (
    <>
      <div className="relative text-center">
        <img className="bg-myPeach w-full h-32" src={ctaBG} alt="" />
        <div className="flex absolute top-1/3 bottom-1/2 translate-x-3/4 z-9">
          <h3 className=" text-white text-5xl font-bold ">
            Ready To get our Service ?
          </h3>
          <button className="flex items-center px-14 py-6 text-white bg-none rounded-md ml-7 mt-1 border border-white borer-solid ">
            Appointment
          </button>
        </div>
      </div>

      <div className="">
        <ul className="flex flex-wrap basis-6/12 items-center justify-center text-center mt-16 space-x-12 mx-12">
          {allServices}
        </ul>
      </div>
    </>
  );
};

export default ServicesOffers;
