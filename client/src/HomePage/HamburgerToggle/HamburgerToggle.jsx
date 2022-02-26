import React from "react";
import { motion } from "framer-motion";

export default function HamburgerToggle() {
  return (
    <motion.div
      animate={{
        x: 0,
      }}
      initial={{
        x: 20,
      }}
      transition={{
        ease: "easeIn",
        duration: 1,
        type: "spring",
      }}
      className="fixed top-0 -right-6 z-50 w-40 h-full flex  justify-center items-center bg-gradient-to-tr from-Copper to-transparent bg-opacity-0 backdrop-blur-sm shadow-xl rounded-xl"
    >
      <ul className="flex flex-col justify-between items-center font-Lato text-xs font-normal text-Sulphate gap-6 mt-44">
        <li>
          <a href="#AboutMe" className="cursor-pointer hover:underline">
            About Me
          </a>
        </li>
        <li>
          <a href="#Skills" className="cursor-pointer hover:underline">
            Skills
          </a>
        </li>
        <li>
          <a href="#Projects" className="cursor-pointer hover:underline">
            Projects
          </a>
        </li>
        <li>
          <a href="#Portfolio" className="cursor-pointer hover:underline">
            Portfolio
          </a>
        </li>
        <li>
          <a href="#Contact" className="cursor-pointer hover:underline">
            Contact
          </a>
        </li>
      </ul>
    </motion.div>
  );
}
