import React from "react";
import { motion } from "framer-motion";

export default function VectorGraphics() {
  return (
    <motion.div
      animate={{
        x: 0,
        opacity: 1,
      }}
      initial={{
        x: 100,
        opacity: -5,
      }}
      transition={{
        ease: "easeIn",
        duration: 1,
        type: "spring",
        bounce: 0.5,
      }}
      className=""
    ></motion.div>
  );
}
