import React from "react";
import { AiFillProject } from "react-icons/ai";

export default function ProjectsComponent() {
  return (
    <div className="flex justify-center items-center font-Lato mb-10">
      <div className=" w-48 h-36 sm:w-56 sm:h-56 rounded-3xl flex flex-col justify-center items-center bg-[#6b6e70] gap-3 sm:gap-5">
        <AiFillProject className="text-[#86c232]" />
        <p className="text-white">Projects</p>
        <p className="text-white font-light">10+ Projects</p>
      </div>
    </div>
  );
}
