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
      className="flex justify-evenly items-center sm:fixed sm:bottom-2 sm:left-0 sm:right-0
      sm:mx-auto w-1/2 h-14 sm:z-50 sm:rounded-full sm:bg-gradient-to-br sm:from-[#25AF9A] sm:to-transparent sm:bg-opacity-40 sm:backdrop-blur-sm"
    >
      <a href="#Home">
        <AiFillHome
          className="invisible sm:visible sm:hover:text-white hover:cursor-pointer
        sm:text-sm md:text-md lg:text-lg xl:text-lg 2xl:text-2xl"
        />
      </a>

      <a href="#AboutMe">
        <CgProfile
          className="hover:cursor-pointer invisible sm:visible sm:hover:text-white
          sm:text-sm md:text-md lg:text-lg xl:text-lg 2xl:text-2xl"
        />
      </a>

      <a href="#Skills">
        <FaBook
          className="hover:cursor-pointer invisible sm:visible sm:hover:text-white
          sm:text-sm md:text-md lg:text-lg xl:text-lg 2xl:text-2xl"
        />
      </a>
      <GiHeartBattery
        className="hover:cursor-pointer invisible sm:visible sm:hover:text-white
        sm:text-sm md:text-md lg:text-lg xl:text-lg 2xl:text-2xl"
      />
      <RiMessage2Fill
        className="hover:cursor-pointer invisible sm:visible sm:hover:text-white
        sm:text-sm md:text-md lg:text-lg xl:text-lg 2xl:text-2xl"
      />
    </motion.div>
  );
}
