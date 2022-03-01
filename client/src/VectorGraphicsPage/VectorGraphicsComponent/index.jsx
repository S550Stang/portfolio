import React from "react";
import { motion } from "framer-motion";

export default function VectorGraphics() {
  return (
    <div>
      {/* Right-Side Vector Graphic*/}
      <motion.div
        animate={{
          x: 0,
          opacity: 1,
        }}
        initial={{
          x: 100,
          opacity: -5,
        }}
        transition={{
          ease: "easeIn",
          duration: 1,
          type: "spring",
          bounce: 0.5,
        }}
        className="flex w-full h-44 ml-auto justify-end sm:w-72 sm:h-72 sm:ml-auto sm:mt-0 sm:relative sm:top-0 md:w-full md:relative md:-top-20 lg:relative lg:right-10 xl:relative xl:right-10 xl:w-96 xl:h-96 2xl:relative 2xl:right-20 3xl:relative 3xl:right-40 4xl:relative 4xl:right-40"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1212.703 1199.711">
          <g
            id="Group_47"
            data-name="Group 47"
            transform="translate(-1207.648 -272.645)"
          >
            <line
              id="Line_2"
              data-name="Line 2"
              y1="1199"
              x2="1212"
              transform="translate(1208 273)"
              fill="none"
              stroke="#707070"
              strokeWidth="1"
            />
            <g id="Group_2" data-name="Group 2" transform="translate(1979 400)">
              <g
                id="Rectangle_1"
                data-name="Rectangle 1"
                fill="#917171"
                stroke="#707070"
                strokeWidth="1"
              >
                <rect width="281" height="277" stroke="none" />
                <rect x="0.5" y="0.5" width="280" height="276" fill="none" />
              </g>
              <circle
                id="Ellipse_1"
                data-name="Ellipse 1"
                cx="175"
                cy="175"
                r="175"
                fill="#917171"
              />
              <g
                id="Ellipse_2"
                data-name="Ellipse 2"
                transform="translate(29 29)"
                fill="#211b2f"
                stroke="#707070"
                strokeWidth="1"
              >
                <circle cx="146" cy="146" r="146" stroke="none" />
                <circle cx="146" cy="146" r="145.5" fill="none" />
              </g>
            </g>
          </g>
        </svg>
      </motion.div>
      {/* Left-Side Vector Graphic*/}
      <motion.div
        animate={{
          x: 0,
          opacity: 1,
        }}
        initial={{
          x: -100,
          opacity: -5,
        }}
        transition={{
          ease: "easeIn",
          duration: 1,
          type: "spring",
          bounce: 0.5,
        }}
        className="flex w-28 mr-auto mt-20 justify-start sm:mt-0 sm:w-60 sm:h-44 sm:mr-auto sm:relative sm:-top-32 md:w-full md:relative md:-top-52 lg:relative lg:left-10 xl:left-10 xl:w-96 xl:h-56 2xl:relative 2xl:left-20 3xl:relative 3xl:left-40 4xl:relative 4xl:left-40 "
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 654.698 638.716">
          <g
            id="Group_48"
            data-name="Group 48"
            transform="translate(-154.151 -872.142)"
          >
            <line
              id="Line_1"
              data-name="Line 1"
              y1="638"
              x2="654"
              transform="translate(154.5 872.5)"
              fill="none"
              stroke="#707070"
              strokeWidth="1"
            />
            <g
              id="Group_1"
              data-name="Group 1"
              transform="translate(-1486 468)"
            >
              <g
                id="Rectangle_1"
                data-name="Rectangle 1"
                transform="translate(1854 591)"
                fill="#917171"
                stroke="#707070"
                strokeWidth="1"
              >
                <rect width="281" height="277" stroke="none" />
                <rect x="0.5" y="0.5" width="280" height="276" fill="none" />
              </g>
              <circle
                id="Ellipse_1"
                data-name="Ellipse 1"
                cx="175"
                cy="175"
                r="175"
                transform="translate(1785 518)"
                fill="#917171"
              />
              <g
                id="Ellipse_2"
                data-name="Ellipse 2"
                transform="translate(1814 547)"
                fill="#211b2f"
                stroke="#707070"
                strokeWidth="1"
              >
                <circle cx="146" cy="146" r="146" stroke="none" />
                <circle cx="146" cy="146" r="145.5" fill="none" />
              </g>
            </g>
          </g>
        </svg>
      </motion.div>
    </div>
  );
}
