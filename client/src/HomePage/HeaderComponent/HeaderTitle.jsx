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
        className="flex flex-col justify-center items-center font-Lato gap-y-1 lg:gap-y-2 2xl:gap-y-3 mt-10 sm:mt-14 md:mt-14 xl:mt-16 2xl:mt-28 "
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
          className="headerTitle text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl "
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
          className="text-white font-light text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl"
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
            className="inline-block btn-bg hover:bg-[#222629] rounded-full font-light hover:font-normal hover:border-[#86C232] hover:border
            w-28 sm:w-32 xl:w-40 mr-2 text-[#2b292a] hover:text-[#86C232]   "
          >
            <a
              href={CV}
              download
              className="flex justify-evenly items-center text-lg sm:text-lg p-1"
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
            className="inline-block btn-bg hover:bg-[#222629] rounded-full font-light hover:font-normal hover:border-[#86C232] hover:border
             w-28 sm:w-32 xl:w-40 text-[#2b292a] hover:text-[#86C232]"
          >
            <a
              href="#contact"
              className="flex justify-evenly items-center p-1 text-lg sm:text-lg "
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
