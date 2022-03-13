import { React, useState, useRef } from "react";
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
    <div
      onClick={() => {
        handleClick();
      }}
    >
      {click ? (
        <AiFillPauseCircle className="text-white text-xl md:text-2xl cursor-pointer hover:text-[#86C232]" />
      ) : (
        <AiFillPlayCircle className="text-white text-xl md:text-2xl cursor-pointer hover:text-[#86C232] " />
      )}

      <audio src={Stranger} ref={ref} loop />
    </div>
  );
}
