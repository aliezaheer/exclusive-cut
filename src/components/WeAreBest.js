import React from "react";
import { motion } from "framer-motion";
import AboutLeft from "../assets/about-left.jpg";
import AboutRight from "../assets/about-right.jpg";
import Author from "../assets/author.jpg";
import Signature from "../assets/signature.png";

const WeAreBest = () => {
  return (
    <div className="flex items-center mt-40">
      <motion.div
        class="w-100"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <img className="" src={AboutLeft} alt="Hiar Cutting Experience" />
      </motion.div>
      <div className="text-center px-28 mt-3 w-8/12">
        <h3 className="text-5xl font-bold text-black leading-tight tracking-normal mb-8">
          WE’RE BEST BARBERS & HAIR <br /> CUTTING SALON
        </h3>
        <p className=" leading-10 tracking-wide text-xl ">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt.
        </p>
        <div className="flex justify-center mt-16">
          <img src={Author} alt="the author" />
          <h4 className="ml-4 mt-2 font-bold text-lg text-black">
            Randall J. Goodamn
            <img src={Signature} alt="Auther signature" />
          </h4>
        </div>
      </div>
      <motion.div
        class="w-100"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={2}
      >
        <img className="" src={AboutRight} alt="Hair salon " />
      </motion.div>
    </div>
  );
};

export default WeAreBest;
