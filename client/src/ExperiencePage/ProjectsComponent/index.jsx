import React from "react";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { AiFillProject } from "react-icons/ai";

export default function ProjectsComponent() {
  const { ref, inView } = useInView();
  const animation = useAnimation();
  useEffect(() => {
    inView
      ? animation.start({
          x: 0,
          transition: { type: "spring", bounce: 0.3, duration: 1 },
        })
      : animation.start({
          x: -100,
        });
  }, [inView, animation]);

  return (
    <motion.div
      ref={ref}
      animate={animation}
      className="flex justify-center items-center font-Lato mb-10"
    >
      <div className=" w-48 h-36 rounded-3xl flex flex-col justify-center items-center bg-Copper gap-3">
        <AiFillProject />
        <p className="text-[#100c1a]">Projects</p>
        <p className="text-[#100c1a] font-light">10+ Projects</p>
      </div>
    </motion.div>
  );
}
