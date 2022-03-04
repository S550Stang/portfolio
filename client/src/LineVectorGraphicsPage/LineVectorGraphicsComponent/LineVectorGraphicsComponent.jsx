import React from "react";
import { motion } from "framer-motion";

const icon = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 5,
    pathLength: 1,
  },
};

export default function LineVectorGraphicsComponent() {
  return (
    <motion.div className="fixed -z-50 w-screen h-screen lg:fixed lg:-z-50 lg:top-0">
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 2691.229 1610.621"
      >
        <motion.path
          variants={icon}
          initial="hidden"
          animate="visible"
          transition={{
            default: { duration: 9, ease: "circOut", repeat: "Infinity" },
          }}
          id="Path_14"
          data-name="Path 14"
          d="M-129.736,585.643h1016.7v709.691H2560.994V178.037H1455.7V1044.2H725.717V292.072H304.975V-100.093H1736.413V1509.527h824.58"
          transform="translate(129.736 100.593)"
          fill="none"
          stroke="#66FCF1"
          stroke-width="0.50"
        />
      </motion.svg>
    </motion.div>
  );
}
