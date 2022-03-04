import React from "react";
import { AiFillProject } from "react-icons/ai";

export default function ProjectsComponent() {
  return (
    <div className="flex justify-center items-center font-Lato mb-10">
      <div className=" w-52 h-44  sm:w-56 sm:h-56 rounded-3xl flex flex-col justify-center items-center hover:bg-gradient-to-tl hover:from-[#25AF9A] hover:via-[#2D4B9A] hover:to-transparent hover:bg-opacity-4 hover:backdrop-blur-lg bg-[#04060f] border border-[#25AF9A] hover:border-0 gap-3 sm:gap-5">
        <AiFillProject className="text-[#86c232]" />
        <p className="text-white">Projects</p>
        <p className="text-white font-light">10+ Projects</p>
      </div>
    </div>
  );
}
