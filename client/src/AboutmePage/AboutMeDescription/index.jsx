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
          transition: { type: "spring", bounce: 0.3, duration: 1 },
        })
      : animation.start({
          x: "-100vw",
        });
  }, [inView]);
  return (
    <motion.div
      ref={ref}
      animate={animation}
      className="flex justify-center items-center mt-10 font-Lato"
    >
      <p className="inline-block w-48 h-48 text-xs font-thin text-Sulphate text-center leading-4">
        Hey there! Thank you for dropping by, heres a little bit about me.. I
        have a <strong className="text-xs font-light">Bachelors Degree</strong>{" "}
        in computer science and a{" "}
        <strong className="text-xs font-light">Post Graduate Diploma</strong> in
        global business. I am a quick learner, I love to fail just so i could
        raise back up stronger
      </p>
    </motion.div>
  );
}
