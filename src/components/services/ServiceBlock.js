import React from "react";

const ServiceBlock = (props) => {
  return (
    <div>
      <div className="flex items-center justify-center text-center mt-12">
        <div className="shadow-xl w-9/12 py-12 px-7">
          <img className="w-12 m-auto" src={props.icon} alt="" />
          <h4 className="py-3 text-black text-lg font-bold">{props.title}</h4>
          <p>{props.description}</p>
          <button>
            <img
              className="w-11 p-3 rounded bg-myPeach mt-6"
              src="https://cdn-icons.flaticon.com/png/512/3031/premium/3031716.png?token=exp=1659962412~hmac=bbea0cd4c996ca517b92a57e5d04e244"
              alt=""
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceBlock;
