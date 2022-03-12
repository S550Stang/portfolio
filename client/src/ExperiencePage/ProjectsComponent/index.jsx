import React from "react";
import { AiFillProject } from "react-icons/ai";

export default function ProjectsComponent() {
  return (
    <div className="flex justify-center items-center font-Lato mb-10">
      <div className=" w-52 h-44  sm:w-56 sm:h-56 md:w-64 xl:w-80 2xl:w-96 rounded-3xl flex flex-col justify-center items-center hover:bg-gradient-to-tl hover:from-[#bf9f37] hover:via-[#2b292a] hover:to-[#f39881] hover:bg-opacity-4 hover:backdrop-blur-lg bg-[#2b292a] border border-[#bf9f37] hover:border-0 gap-3 sm:gap-5">
        <AiFillProject className="text-[#bf9f37]" />
        <p className="text-[#f7f7f7]">Projects</p>
        <p className="text-[#f7f7f7] font-light">10+ Projects</p>
      </div>
    </div>
  );
}
