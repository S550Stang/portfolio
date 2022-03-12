import React from "react";
import { motion } from "framer-motion";

export default function HamburgerToggle() {
  return (
    <motion.div
      animate={{
        x: 0,
      }}
      initial={{
        x: 100,
      }}
      transition={{
        ease: "easeInOut",
        duration: 1,
        type: "spring",
      }}
      className="fixed top-0 -right-1 z-50 w-40 h-full flex  justify-center items-center bg-gradient-to-br from-[#22202a]  to-transparent bg-opacity-40  backdrop-blur-md shadow-xl rounded-xl "
    >
      <ul className="flex flex-col justify-between items-center font-Lato text-md font-normal text-[#efd267]  gap-6 mt-44">
        <li>
          <a
            href="#AboutMe"
            className="cursor-pointer hover:underline hover:text-white "
          >
            About Me
          </a>
        </li>
        <li>
          <a
            href="#Skills"
            className="cursor-pointer hover:underline hover:text-white"
          >
            Skills
          </a>
        </li>
        <li>
          <a
            href="#Projects"
            className="cursor-pointer hover:underline hover:text-white"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#Portfolio"
            className="cursor-pointer hover:underline hover:text-white"
          >
            Portfolio
          </a>
        </li>
        <li>
          <a
            href="#Contact"
            className="cursor-pointer hover:underline hover:text-white"
          >
            Contact
          </a>
        </li>
      </ul>
    </motion.div>
  );
}
