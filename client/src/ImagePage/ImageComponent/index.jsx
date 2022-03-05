import React from "react";
import { motion } from "framer-motion";
import Me from "../../assets/ME.jpg";

export default function DisplayPicture() {
  return (
    <motion.div
      animate={{
        opacity: 1,
      }}
      initial={{
        opacity: -5,
      }}
      transition={{
        ease: "easeOut",
        duration: 2,
        type: "tween",
        stiffness: 100,
        damping: 20,
      }}
      className=" md:p-5 xl:p-10 2xl:p-20 "
    >
      <img
        className=" w-52 h-52 sm:w-56 sm:h-56 lg:w-72 lg:h-72 xl:w-96 xl:h-96 2xl:w-full rounded-3xl"
        src={Me}
        alt="myProfilePicture"
      />
    </motion.div>
  );
}
