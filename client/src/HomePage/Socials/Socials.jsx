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
      className="flex flex-col justify-between items-center gap-3 text-white hover:text-[#86c232] fixed left-2 top-1/3 cursor-pointer sm:gap-1 sm:top-52 "
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
        <AiOutlineInstagram className="cursor-pointer sm:w-6 sm:h-10" />
      </a>
      <a href="https://github.com/S550Stang">
        <AiOutlineGithub className="cursor-pointer sm:w-6 sm:h-10" />
      </a>
      <a href="https://www.linkedin.com/in/prabhuvardhanraopilli/">
        <AiOutlineLinkedin className="cursor-pointer sm:w-6 sm:h-10" />
      </a>
    </motion.div>
  );
}
