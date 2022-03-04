import { React, useState } from "react";
import { motion } from "framer-motion";
import Socials from "../Socials/Socials";
import ScrollDown from "../ScrollDown/ScrollDown";
import CV from "../../assets/Prabhu.DOCX";
import HamburgerToggle from "../HamburgerToggle/HamburgerToggle";
import GlassNavigationPage from "../../GlassNavigationPage";

export default function HeaderTitle() {
  const [boolean, setBoolean] = useState(false);
  return (
    <div>
      <div
        id="Home"
        className="flex flex-col justify-center items-center font-Lato gap-y-1 sm:gap-y-2 md:gap-y-3 lg:gap-y-4 xl:gap-y-5 2xl:gap-y-6 3xl:gap-y-7 4xl:gap-y-8 mt-12 3xl:mt-24"
      >
        <motion.h1
          animate={{
            y: 0,
            opacity: 1,
          }}
          initial={{
            y: -20,
            opacity: -2,
          }}
          transition={{
            ease: "easeIn",
            duration: 1,
            type: "spring",
          }}
          className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl 3xl:text-5xl  4xl:text-8xl text-[#66FCF1] 3xl:font-normal"
        >
          Prabhu Vardhan Pilli
        </motion.h1>
        <motion.h4
          animate={{
            opacity: 1,
            y: 0,
          }}
          initial={{
            opacity: -2,
            y: 20,
          }}
          transition={{
            ease: "easeIn",
            duration: 1,
            type: "spring",
          }}
          className="text-md sm:text-sm md:text-lg lg:text-xl xl:text-xl 2xl:text-2xl 3xl:text-2xl 4xl:text-4xl font-normal 3xl:font-light text-white"
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
              x: -100,
              opacity: -5,
            }}
            transition={{
              ease: "easeInOut",
              duration: 2,
              type: "spring",
              stiffness: 100,
              damping: 20,
            }}
            className="inline-block bg-[#04060F] hover:bg-gradient-to-r hover:from-[#25AF9A]   hover:to-[#2D4B9A] hover:bg-opacity-4 hover:backdrop-blur-lg hover:bg-[#25AF9A]
             text-[#66FCF1] hover:text-black px-1 rounded-lg font-light border border-[#66FCF1] text-lg md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl 4xl:text-5xl w-28 sm:w-28 md:w-32 lg:w-36 xl:w-40 2xl:w-44 3xl:w-48 3xl:p-1 4xl:w-52   mr-2 3xl:mr-6"
          >
            <a
              href={CV}
              download
              className="flex justify-evenly items-center 3xl:text-xl"
            >
              Resume
            </a>
          </motion.button>
          <motion.button
            animate={{
              x: 0,
              opacity: 1,
            }}
            initial={{
              x: 100,
              opacity: -5,
            }}
            transition={{
              ease: "easeInOut",
              duration: 2,
              type: "spring",
              stiffness: 100,
              damping: 20,
            }}
            className="inline-block bg-[#04060F] hover:bg-gradient-to-r hover:from-[#25AF9A]   hover:to-[#2D4B9A] hover:bg-opacity-4 hover:backdrop-blur-lg hover:bg-[#25AF9A]
            text-[#66FCF1] hover:text-black px-1 rounded-lg font-light border border-[#66FCF1] text-lg md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl 4xl:text-5xl w-28 sm:w-28 md:w-32 lg:w-36 xl:w-40 2xl:w-44 3xl:w-48 3xl:p-1 4xl:w-52"
          >
            <a
              href="#contact"
              className="flex justify-evenly items-center 3xl:text-xl"
            >
              Lets Talk
            </a>
          </motion.button>
        </div>
      </div>

      {/* HamBurger Menu*/}
      {boolean ? <HamburgerToggle /> : null}
      <GlassNavigationPage />

      <motion.div
        className="fixed top-2 right-2 cursor-pointer z-50 sm:hidden"
        onClick={() => setBoolean(!boolean)}
        animate={{
          x: 0,
          opacity: 1,
        }}
        initial={{
          x: 100,
          opacity: -5,
        }}
        transition={{
          ease: "easeInOut",
          duration: 2,
          type: "spring",
          stiffness: 100,
          damping: 20,
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="13"
          viewBox="0 0 30 13"
        >
          <g
            id="Group_21"
            data-name="Group 21"
            transform="translate(-334.5 -14)"
          >
            <line
              id="Line_4"
              data-name="Line 4"
              x2="30"
              transform="translate(334.5 14.5)"
              fill="none"
              stroke="white"
              strokeWidth="1"
            />
            <line
              id="Line_5"
              data-name="Line 5"
              x2="30"
              transform="translate(334.5 20.5)"
              fill="none"
              stroke="#86c232"
              strokeWidth="1"
            />
            <line
              id="Line_6"
              data-name="Line 6"
              x2="30"
              transform="translate(334.5 26.5)"
              fill="none"
              stroke="white"
              strokeWidth="1"
            />
          </g>
        </svg>
      </motion.div>
      {/* End Of HamBurger Menu */}
      {/* Rectangle right side vector graphic and scroll down graphic*/}

      {/* end of Rectangle right side vector graphic and scroll down graphic*/}
      <ScrollDown />
      {/* end of Rectangle left side vector graphic */}
      <Socials />
    </div>
  );
}
