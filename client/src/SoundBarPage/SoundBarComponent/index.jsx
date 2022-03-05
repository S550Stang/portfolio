import { React, useState, useRef } from "react";
import { motion } from "framer-motion";
import Stranger from "../../assets/Stranger.mp3";
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai";

export default function SoundBarComponent() {
  const ref = useRef(null);
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);

    if (!click) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  };

  return (
    <motion.div
      onClick={() => {
        handleClick();
      }}
      animate={{
        x: 0,
        opacity: 1,
      }}
      initial={{
        x: -100,
        opacity: -5,
      }}
      transition={{
        ease: "easeOut",
        duration: 2,
        type: "tween",
        stiffness: 100,
        damping: 20,
      }}
      className="text-white  fixed left-2 sm:left-3 md:left-4 lg:left-5 xl:left-6 top-60  text-xl hover:text-[#86c232] sm:top-44 md:top-48 xl:top-44  2xl:top-48 3xl:top-52  3xl:left-16 cursor-pointer top "
    >
      {click ? (
        <AiFillPauseCircle className=" 3xl:w-7 3xl:h-7 sm:w-6 sm:h-10" />
      ) : (
        <AiFillPlayCircle className=" 3xl:w-7 3xl:h-7 sm:w-6 sm:h-10" />
      )}

      <audio src={Stranger} ref={ref} loop />
    </motion.div>
  );
}
