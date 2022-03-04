import React from "react";
import { motion } from "framer-motion";
import {
  AiOutlineInstagram,
  AiOutlineGithub,
  AiOutlineLinkedin,
} from "react-icons/ai";

export default function Socials() {
  return (
    <motion.div
      className="flex flex-col justify-between items-center gap-3 text-white  fixed left-1 top-60 cursor-pointer text-xl sm:gap-1 sm:top-52 3xl:top-72 3xl:gap-12 3xl:left-16 "
      animate={{
        x: 0,
        opacity: 1,
      }}
      initial={{
        x: -100,
        opacity: -5,
      }}
      transition={{
        ease: "easeOut",
        duration: 2,
        type: "tween",
        stiffness: 100,
        damping: 20,
      }}
    >
      <a href="https://www.instagram.com/prabhu.vardhan.pilli/">
        <AiOutlineInstagram className="cursor-pointer sm:w-6 sm:h-10 3xl:w-7 3xl:h-7  hover:text-[#86c232]" />
      </a>
      <a href="https://github.com/S550Stang">
        <AiOutlineGithub className="cursor-pointer sm:w-6 sm:h-10 3xl:w-7 3xl:h-7 hover:text-[#86c232]" />
      </a>
      <a href="https://www.linkedin.com/in/prabhuvardhanraopilli/">
        <AiOutlineLinkedin className="cursor-pointer sm:w-6 sm:h-10 3xl:w-7 3xl:h-7 hover:text-[#86c232]" />
      </a>
    </motion.div>
  );
}
