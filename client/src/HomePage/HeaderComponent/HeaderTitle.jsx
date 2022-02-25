import React from "react";
import { motion } from "framer-motion";
import CV from "../../assets/Prabhu.DOCX";

export default function HeaderTitle() {
  return (
    <div className="flex flex-col justify-center items-center font-Lato gap-y-1 mt-12">
      <motion.h1
        animate={{
          y: 0,
          opacity: 1,
        }}
        initial={{
          y: -20,
          opacity: 0,
        }}
        transition={{
          ease: "easeInOut",
          duration: 1,
          type: "spring",
          stiffness: 100,
          damping: 20,
        }}
        className="text-xl text-Copper "
      >
        Prabhu Vardhan Pilli
      </motion.h1>
      <motion.h4
        animate={{
          opacity: 1,
          y: 0,
        }}
        initial={{
          opacity: -1,
          y: 10,
        }}
        transition={{
          ease: "easeInOut",
          duration: 0,
          type: "spring",
          stiffness: 100,
          damping: 20,
        }}
        className="text-xs font-normal text-Sulphate"
      >
        FullStack Developer
      </motion.h4>
      <div className="flex justify-center items-center mt-2">
        <motion.button
          animate={{
            x: 0,
            opacity: 1,
          }}
          initial={{
            x: -50,
            opacity: -1,
          }}
          transition={{
            ease: "easeInOut",
            duration: 0,
            type: "spring",
            stiffness: 100,
            damping: 20,
          }}
          className="inline-block bg-Copper px-1 w-24 rounded-full font-light text-sm mr-2"
        >
          <a href={CV} download>
            Download CV
          </a>
        </motion.button>
        <motion.button
          animate={{
            x: 0,
            opacity: 1,
          }}
          initial={{
            x: 50,
            opacity: -1,
          }}
          transition={{
            ease: "easeInOut",
            duration: 0,
            type: "spring",
            stiffness: 100,
            damping: 20,
          }}
          className="inline-block bg-Copper px-1 w-24 rounded-full font-light text-sm"
        >
          <a href="#contact">Lets Talk</a>
        </motion.button>
      </div>
    </div>
  );
}
