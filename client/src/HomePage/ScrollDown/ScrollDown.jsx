import React from "react";
import { motion } from "framer-motion";

export default function ScrollDown() {
  return (
    <motion.div
      className="fixed center right-2 top-60"
      animate={{
        x: 0,
        opacity: 1,
      }}
      initial={{
        x: 100,
        opacity: -5,
      }}
      transition={{
        ease: "easeOut",
        duration: 2,
        type: "tween",
        stiffness: 100,
        damping: 20,
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="300"
        viewBox="0 0 18 340"
      >
        <g id="Group_23" data-name="Group 23" transform="translate(-338 -293)">
          <text
            id="Scroll_Down"
            data-name="Scroll Down"
            transform="translate(343 293) rotate(90)"
            fill="#917171"
            font-size="20"
            font-family="AppleSymbols, Apple Symbols"
          >
            <tspan x="0" y="0">
              Scroll Down
            </tspan>
          </text>
          <line
            id="Line_3"
            data-name="Line 3"
            y2="248"
            transform="translate(347 385)"
            fill="none"
            stroke="#917171"
            stroke-width="1"
          />
        </g>
      </svg>
    </motion.div>
  );
}
