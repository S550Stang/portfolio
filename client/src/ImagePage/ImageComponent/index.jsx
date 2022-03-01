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
      className="flex justify-center items-center mt-10"
    >
      <img
        className="w-48 h-48 sm:w-56 sm:h-56 rounded-3xl"
        src={Me}
        alt="myProfilePicture"
      />
    </motion.div>
  );
}
