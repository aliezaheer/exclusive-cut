import React from "react";
import firstImg from "../../assets/gallery1.jpg";
import secondImg from "../../assets/gallery2.jpg";
import thirdImg from "../../assets/gallery3.jpg";
import fourthImg from "../../assets/gallery4.jpg";
import { motion } from "framer-motion";

const GalleyArea = () => {
  return (
    <>
      <div className="flex justify-center mr-auto ml-auto mt-14 space-x-5">
        <motion.img
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="w-3/12"
          src={firstImg}
          alt=""
        />
        <motion.img
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="w-3/12"
          src={secondImg}
          alt=""
        />
        <motion.img
          initial={{ scale: 0 }}
          animate={{ rotate: 360, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
          className="w-3/12"
          src={thirdImg}
          alt=""
        />
        <motion.img
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="w-3/12"
          src={fourthImg}
          alt=""
        />
      </div>
    </>
  );
};

export default GalleyArea;
