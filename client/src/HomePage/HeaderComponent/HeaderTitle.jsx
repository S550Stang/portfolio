import { React, useState } from "react";
import { motion } from "framer-motion";
import Socials from "../Socials/Socials";
import ScrollDown from "../ScrollDown/ScrollDown";
import CV from "../../assets/Prabhu.DOCX";
import HamburgerToggle from "../HamburgerToggle/HamburgerToggle";

export default function HeaderTitle() {
  const [boolean, setBoolean] = useState(false);
  return (
    <div>
      <div className="flex flex-col justify-center items-center font-Lato gap-y-1 mt-12">
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
          className="text-xl sm:text-2xl text-Copper "
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
          className="text-xs sm:text-sm font-normal text-Sulphate"
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
            className="inline-block bg-Copper px-1 w-24 sm:w-28 rounded-full font-light text-sm  mr-2"
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
            className="inline-block bg-Copper px-1 w-24 sm:w-28 rounded-full font-light text-sm"
          >
            <a href="#contact">Lets Talk</a>
          </motion.button>
        </div>
      </div>

      {/* HamBurger Menu*/}
      {boolean ? <HamburgerToggle /> : null}

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
              stroke="#707070"
              strokeWidth="1"
            />
            <line
              id="Line_5"
              data-name="Line 5"
              x2="30"
              transform="translate(334.5 20.5)"
              fill="none"
              stroke="#707070"
              strokeWidth="1"
            />
            <line
              id="Line_6"
              data-name="Line 6"
              x2="30"
              transform="translate(334.5 26.5)"
              fill="none"
              stroke="#707070"
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
