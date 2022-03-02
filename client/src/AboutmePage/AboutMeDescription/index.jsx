import React from "react";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

export default function AboutMeDescription() {
  const { ref, inView } = useInView();
  const animation = useAnimation();

  useEffect(() => {
    inView
      ? animation.start({
          x: 0,
          opacity: 1,
          transition: {
            ease: "easeOut",
            duration: 2,
            type: "tween",
            stiffness: 100,
            damping: 20,
          },
        })
      : animation.start({
          x: -100,
          opacity: -5,
        });
  }, [inView, animation]);

  return (
    <motion.div
      ref={ref}
      animate={animation}
      className="flex flex-col justify-center items-center mt-10 font-Lato"
    >
      <p className="inline-block w-48  text-xs sm:text-lg font-thin text-white text-center leading-4">
        Hey there! Thank you for dropping by, heres a little bit about me.. I
        have a{" "}
        <strong className="text-xs sm:text-lg font-light text-[#86c232]">
          Bachelors Degree
        </strong>{" "}
        in computer science and a{" "}
        <strong className="text-xs sm:text-lg font-light text-[#86c232]">
          Post Graduate Diploma
        </strong>{" "}
        in global business. I am a quick learner, I love to fail just so i could
        raise back up stronger
      </p>
      {/* Lets Talk Button Under About Me Description */}
      <button className="inline-block bg-[#86c232] px-1 w-24 mt-10 mb-10 sm:w-28 rounded-full font-light text-sm">
        <a href="#contact" className="text-slate-900">
          Lets Talk
        </a>
      </button>
    </motion.div>
  );
}
