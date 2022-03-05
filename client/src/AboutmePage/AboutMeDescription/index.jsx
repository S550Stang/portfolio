import React from "react";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import ImagePage from "../../ImagePage";

export default function AboutMeDescription() {
  const { ref, inView } = useInView();
  const animation = useAnimation();

  useEffect(() => {
    inView
      ? animation.start({
          x: 0,

          transition: {
            ease: "easeOut",
            duration: 1,
            type: "spring",
            bounce: 0.3,
          },
        })
      : animation.start({
          x: "-100vw",
        });
  }, [inView, animation]);

  return (
    <motion.div
      ref={ref}
      animate={animation}
      className="flex flex-col md:flex-row  md:items-center justify-center items-center mt-10 font-Lato w-screen"
    >
      <ImagePage />
      <div className="flex flex-col justify-center items-center md:flex-col  md:justify-center md:items-start lg:p-5 2xl:p-10 2xl:mr-10  lg:mt-10 2xl:mt-0  font-Lato">
        <p className="inline-block w-48 lg:w-60 xl:w-72 2xl:w-96   mt-10 md:mt-0 lg:mt-0 xl:mt-0 2xl:mt-0  text-lg sm:text-lg md:text-sm lg:text-xl xl:text-2xl 2xl:text-3xl  font-light text-white text-center md:text-left leading-5">
          Hey there! Thank you for dropping by, heres a little bit about me.. I
          have a{" "}
          <strong className="text-lg sm:text-lg md:text-sm lg:text-xl xl:font-thin 2xl:text-3xl font-normal text-[#66FCF1]">
            Bachelors Degree
          </strong>{" "}
          in computer science and a{" "}
          <strong className="text-lg sm:text-lg md:text-sm lg:text-xl xl:font-thin  2xl:text-3xl font-normal text-[#66FCF1]">
            Post Graduate Diploma
          </strong>{" "}
          in global business. I am a quick learner, I love to fail just so i
          could raise back up stronger
        </p>
        {/* Lets Talk Button Under About Me Description */}
        <button
          className="inline-block hover:bg-gradient-to-r hover:from-[#25AF9A]   hover:to-[#2D4B9A] hover:bg-opacity-4 hover:backdrop-blur-lg hover:bg-[#25AF9A]
            text-[#66FCF1]  border border-[#66FCF1]  px-1 w-24 mt-10 mb-10 md:mb-0 md:mt-5 sm:w-28 rounded-full font-light text-lg md:text-sm lg:text-xl xl:text-2xl xl:w-32"
        >
          <a href="#contact" className="text-[#66FCF1] hover:text-black ">
            Lets Talk
          </a>
        </button>
      </div>
    </motion.div>
  );
}
