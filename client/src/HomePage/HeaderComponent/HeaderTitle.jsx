import { React, useState } from "react";
import { motion } from "framer-motion";
import Socials from "../Socials/Socials";
import ScrollDown from "../ScrollDown/ScrollDown";
import CV from "../../assets/Prabhu.DOCX";
import HamburgerToggle from "../HamburgerToggle/HamburgerToggle";

export default function HeaderTitle() {
  const [boolean, setBoolean] = useState(false);
  return (
    <div className="relative flex flex-col justify-center items-center font-Lato gap-y-1 mt-12">
      <motion.h1
        animate={{
          y: 0,
          opacity: 1,
        }}
        initial={{
          y: -20,
          opacity: 0,
        }}
        transition={{
          ease: "easeInOut",
          duration: 2,
          type: "spring",
          stiffness: 100,
          damping: 20,
        }}
        className="text-xl text-Copper "
      >
        Prabhu Vardhan Pilli
      </motion.h1>
      <motion.h4
        animate={{
          opacity: 1,
          y: 0,
        }}
        initial={{
          opacity: -1,
          y: 20,
        }}
        transition={{
          ease: "easeInOut",
          duration: 2,
          type: "spring",
          stiffness: 100,
          damping: 20,
        }}
        className="text-xs font-normal text-Sulphate"
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
          className="inline-block bg-Copper px-1 w-24 rounded-full font-light text-sm mr-2"
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
          className="inline-block bg-Copper px-1 w-24 rounded-full font-light text-sm"
        >
          <a href="#contact">Lets Talk</a>
        </motion.button>
      </div>

      {/* HamBurger Menu*/}
      {boolean ? <HamburgerToggle /> : null}

      <motion.div
        className="fixed top-2 right-2 cursor-pointer z-50"
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
              stroke-width="1"
            />
            <line
              id="Line_5"
              data-name="Line 5"
              x2="30"
              transform="translate(334.5 20.5)"
              fill="none"
              stroke="#707070"
              stroke-width="1"
            />
            <line
              id="Line_6"
              data-name="Line 6"
              x2="30"
              transform="translate(334.5 26.5)"
              fill="none"
              stroke="#707070"
              stroke-width="1"
            />
          </g>
        </svg>
      </motion.div>
      {/* End Of HamBurger Menu*/}
      <motion.div
        className="fixed center -right-6 top-32"
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
          width="154.683"
          height="144.73"
          viewBox="0 0 154.683 144.73"
        >
          <g
            id="Group_22"
            data-name="Group 22"
            transform="translate(-248.379 -148.635)"
          >
            <g
              id="Rectangle_1"
              data-name="Rectangle 1"
              transform="translate(390.48 186.385) rotate(97)"
              fill="#917171"
              stroke="#707070"
              stroke-width="1"
            >
              <rect width="81" height="90" stroke="none" />
              <rect x="0.5" y="0.5" width="80" height="89" fill="none" />
            </g>
            <ellipse
              id="Ellipse_1"
              data-name="Ellipse 1"
              cx="50"
              cy="50"
              rx="50"
              ry="50"
              transform="translate(402.721 168.745) rotate(97)"
              fill="#917171"
            />
            <g
              id="Ellipse_2"
              data-name="Ellipse 2"
              transform="translate(391.577 177.452) rotate(97)"
              fill="#211b2f"
              stroke="#707070"
              stroke-width="1"
            >
              <ellipse cx="40" cy="40" rx="40" ry="40" stroke="none" />
              <ellipse cx="40" cy="40" rx="39.5" ry="39.5" fill="none" />
            </g>
            <line
              id="Line_1"
              data-name="Line 1"
              y1="144"
              x2="154"
              transform="translate(248.721 149)"
              fill="none"
              stroke="#707070"
              stroke-width="1"
            />
          </g>
        </svg>
      </motion.div>
      <motion.div
        className="fixed  -left-14 bottom-1"
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
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="212.681"
          height="197.733"
          viewBox="0 0 212.681 197.733"
        >
          <g
            id="Group_24"
            data-name="Group 24"
            transform="translate(85.34 -430.634)"
          >
            <g
              id="Rectangle_1"
              data-name="Rectangle 1"
              transform="translate(-31.48 554.894) rotate(-83)"
              fill="#917171"
              stroke="#707070"
              stroke-width="1"
            >
              <rect width="81" height="90" stroke="none" />
              <rect x="0.5" y="0.5" width="80" height="89" fill="none" />
            </g>
            <circle
              id="Ellipse_1"
              data-name="Ellipse 1"
              cx="50"
              cy="50"
              r="50"
              transform="translate(-43.721 572.534) rotate(-83)"
              fill="#917171"
            />
            <g
              id="Ellipse_2"
              data-name="Ellipse 2"
              transform="translate(-32.577 563.827) rotate(-83)"
              fill="#211b2f"
              stroke="#707070"
              stroke-width="1"
            >
              <circle cx="40" cy="40" r="40" stroke="none" />
              <circle cx="40" cy="40" r="39.5" fill="none" />
            </g>
            <line
              id="Line_2"
              data-name="Line 2"
              y1="197"
              x2="212"
              transform="translate(-85 431)"
              fill="none"
              stroke="#707070"
              stroke-width="1"
            />
          </g>
        </svg>
      </motion.div>
      <Socials />
      <ScrollDown />
    </div>
  );
}
