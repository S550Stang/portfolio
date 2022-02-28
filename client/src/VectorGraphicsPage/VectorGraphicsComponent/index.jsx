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
        className="flex justify-end"
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
              strokeWidth="1"
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
            <line
              id="Line_1"
              data-name="Line 1"
              y1="144"
              x2="154"
              transform="translate(248.721 149)"
              fill="none"
              stroke="#707070"
              strokeWidth="1"
            />
            <g
              id="Ellipse_2"
              data-name="Ellipse 2"
              transform="translate(391.577 177.452) rotate(97)"
              fill="#211b2f"
              stroke="#707070"
              strokeWidth="1"
            >
              <ellipse cx="40" cy="40" rx="40" ry="40" stroke="none" />
              <ellipse cx="40" cy="40" rx="39.5" ry="39.5" fill="none" />
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
        className="flex justify-start mt-28"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="154.683"
          height="144.73"
          viewBox="0 0 154.683 144.73"
        >
          <g
            id="Group_25"
            data-name="Group 25"
            transform="translate(0.341 0.365)"
          >
            <g
              id="Rectangle_1"
              data-name="Rectangle 1"
              transform="translate(12.241 106.615) rotate(-83)"
              fill="#917171"
              stroke="#707070"
              strokeWidth="1"
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
              transform="translate(0 124.255) rotate(-83)"
              fill="#917171"
            />
            <line
              id="Line_1"
              data-name="Line 1"
              x1="154"
              y2="144"
              fill="none"
              stroke="#707070"
              strokeWidth="1"
            />
            <g
              id="Ellipse_2"
              data-name="Ellipse 2"
              transform="translate(11.144 115.548) rotate(-83)"
              fill="#211b2f"
              stroke="#707070"
              strokeWidth="1"
            >
              <ellipse cx="40" cy="40" rx="40" ry="40" stroke="none" />
              <ellipse cx="40" cy="40" rx="39.5" ry="39.5" fill="none" />
            </g>
          </g>
        </svg>
      </motion.div>
    </div>
  );
}
