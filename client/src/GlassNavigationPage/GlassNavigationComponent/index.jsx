import React from "react";
import { motion } from "framer-motion";
import { AiFillHome } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { FaBook } from "react-icons/fa";
import { GiHeartBattery } from "react-icons/gi";
import { RiMessage2Fill } from "react-icons/ri";

export default function GlassNavigationComponent() {
  return (
    <motion.div
      animate={{
        y: 0,
      }}
      initial={{
        y: "100vh",
      }}
      transition={{
        ease: "easeInOut",
        type: "spring",
        duration: 2,
        bounce: 0.3,
      }}
      className="flex justify-evenly items-center sm:fixed sm:w-96 sm:z-50 sm:bottom-2 sm:mx-auto sm:left-0 sm:right-0  sm:h-14  sm:rounded-lg sm:bg-gradient-to-br sm:from-[#86c232] sm:to-transparent  sm:bg-opacity-20 sm:backdrop-blur-sm "
    >
      <a href="#Home">
        <AiFillHome className="invisible sm:visible sm:hover:text-white hover:cursor-pointer" />
      </a>

      <a href="#AboutMe">
        <CgProfile className="hover:cursor-pointer invisible sm:visible sm:hover:text-white" />
      </a>

      <a href="#Skills">
        <FaBook className="hover:cursor-pointer invisible sm:visible sm:hover:text-white" />
      </a>
      <GiHeartBattery className="hover:cursor-pointer invisible sm:visible sm:hover:text-white" />
      <RiMessage2Fill className="hover:cursor-pointer invisible sm:visible sm:hover:text-white" />
    </motion.div>
  );
}
