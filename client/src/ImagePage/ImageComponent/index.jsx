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
      className="flex justify-center items-center mt-16"
    >
      <img className="w-48 h-48 rounded-lg" src={Me} alt="myProfilePicture" />
    </motion.div>
  );
}
