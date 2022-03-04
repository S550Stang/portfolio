import React from "react";
import { motion } from "framer-motion";

export default function VectorGraphics() {
  return (
    <div className="relative w-screen h-80 -z-50">
      {/** Right Side Vector Graphic */}
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
          ease: "easeInOut",
          duration: 2,
          type: "spring",
          stiffness: 100,
          damping: 20,
        }}
        className="absolute right-0 w-20 "
      >
        <svg
          id="Group_56"
          data-name="Group 56"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 355 356"
        >
          <defs>
            <linearGradient
              id="linear-gradient"
              x1="0.043"
              y1="1"
              x2="1"
              gradientUnits="objectBoundingBox"
            >
              <stop offset="0" stop-color="#25af9a" />
              <stop offset="1" stop-color="#2d4b9a" />
            </linearGradient>
            <linearGradient
              id="linear-gradient-2"
              x1="-0.1"
              y1="1.098"
              x2="1.103"
              y2="-0.097"
              xlinkHref="#linear-gradient"
            />
          </defs>
          <path
            id="Path_11"
            data-name="Path 11"
            d="M281,277H0V0H281Z"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_13"
            data-name="Path 13"
            d="M175,350A175,175,0,1,1,350,175,175,175,0,0,1,175,350Z"
            transform="translate(5 6)"
            fill="#0b0c10"
          />
          <circle
            id="Ellipse_2"
            data-name="Ellipse 2"
            cx="146"
            cy="146"
            r="146"
            transform="translate(63 64)"
            fill="url(#linear-gradient-2)"
          />
        </svg>
      </motion.div>
      {/** Left Side Vector Graphic */}
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
          ease: "easeInOut",
          duration: 2,
          type: "spring",
          stiffness: 100,
          damping: 20,
        }}
        className="absolute w-20 -z-50 left-0 bottom-1"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 355 356">
          <defs>
            <linearGradient
              id="linear-gradient"
              x1="0.957"
              x2="0"
              y2="1"
              gradientUnits="objectBoundingBox"
            >
              <stop offset="0" stop-color="#25af9a" />
              <stop offset="1" stop-color="#2d4b9a" />
            </linearGradient>
            <linearGradient
              id="linear-gradient-2"
              x1="1.1"
              y1="-0.098"
              x2="-0.103"
              y2="1.097"
              xlinkHref="#linear-gradient"
            />
          </defs>
          <g
            id="Group_48"
            data-name="Group 48"
            transform="translate(-513 -937)"
          >
            <g
              id="Group_1"
              data-name="Group 1"
              transform="translate(-1267 425)"
            >
              <g id="Group_55" data-name="Group 55">
                <path
                  id="Path_11"
                  data-name="Path 11"
                  d="M0,0H281V277H0Z"
                  transform="translate(1854 591)"
                  fill="url(#linear-gradient)"
                />
                <path
                  id="Path_13"
                  data-name="Path 13"
                  d="M175,0A175,175,0,1,1,0,175,175,175,0,0,1,175,0Z"
                  transform="translate(1780 512)"
                  fill="#0b0c10"
                />
                <circle
                  id="Ellipse_2"
                  data-name="Ellipse 2"
                  cx="146"
                  cy="146"
                  r="146"
                  transform="translate(1780 512)"
                  fill="url(#linear-gradient-2)"
                />
              </g>
            </g>
          </g>
        </svg>
      </motion.div>
    </div>
  );
}
