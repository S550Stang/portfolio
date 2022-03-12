import React from "react";
import { motion } from "framer-motion";
import {
  AiOutlineInstagram,
  AiOutlineGithub,
  AiOutlineLinkedin,
} from "react-icons/ai";

import SoundBarPage from "../../SoundBarPage";

export default function Socials() {
  return (
    <motion.div
      className="flex flex-col items-center gap-3
      fixed  left-2 
      md:left-6 xl:left-8"
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
      <SoundBarPage />
      <a href="https://www.instagram.com/prabhu.vardhan.pilli/">
        <AiOutlineInstagram className="mt-3 cursor-pointer text-white  hover:text-[#bf9f37] text-xl md:text-2xl" />
      </a>
      <a href="https://github.com/S550Stang">
        <AiOutlineGithub className="cursor-pointer text-white hover:text-[#bf9f37] text-xl md:text-2xl" />
      </a>
      <a href="https://www.linkedin.com/in/prabhuvardhanraopilli/">
        <AiOutlineLinkedin className="cursor-pointer text-white hover:text-[#bf9f37] text-xl md:text-2xl" />
      </a>
    </motion.div>
  );
}
