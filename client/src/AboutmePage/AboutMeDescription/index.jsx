import React from "react";
import ImagePage from "../../ImagePage";
import { motion } from "framer-motion";

export default function AboutMeDescription() {
  return (
    <div className="flex flex-col md:flex-row  md:items-center justify-center items-center mt-10 font-Lato w-screen">
      <ImagePage />
      <div className="flex flex-col justify-center items-center md:flex-col  md:justify-center md:items-start lg:p-5 2xl:p-10 2xl:mr-10 lg:mt-0  2xl:mt-0  font-Lato">
        <p className="inline-block w-48 lg:w-60 xl:w-72 2xl:w-96 mt-10 md:mt-0 text-lg sm:text-lg md:text-sm lg:text-xl xl:text-2xl font-light text-white text-center md:text-left">
          Hey there! Thank you for dropping by, here's a little bit about me, I
          have a{" "}
          <strong className="font-normal headerTitle text-lg sm:text-lg md:text-sm lg:text-xl">
            Bachelors Degree
          </strong>{" "}
          in computer science and a{" "}
          <strong className="font-normal headerTitle text-lg sm:text-lg md:text-sm lg:text-xl">
            Post Graduate Diploma
          </strong>{" "}
          in global business. I am a quick learner, I love to fail just so i
          could raise back up stronger
        </p>
        {/* Lets Talk Button Under About Me Description */}
        <motion.button
          animate={{
            x: 0,
            opacity: 1,
          }}
          initial={{
            x: 100,
            opacity: -5,
          }}
          transition={{
            ease: "easeInOut",
            duration: 2,
            type: "spring",
            stiffness: 100,
            damping: 20,
          }}
          className="inline-block btn-bg hover:bg-[#222629] rounded-full 
          font-light hover:font-normal hover:border-[#86C232] hover:border
          w-28 sm:w-32 xl:w-40 mt-10 text-[#2b292a] hover:text-[#86C232]"
        >
          <a
            href="#contact"
            className="flex justify-evenly items-center p-1 text-lg sm:text-lg "
          >
            Lets Talk
          </a>
        </motion.button>
      </div>
    </div>
  );
}
