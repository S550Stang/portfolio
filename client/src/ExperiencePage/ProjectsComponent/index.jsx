import React from "react";
import { AiFillProject } from "react-icons/ai";

export default function ProjectsComponent() {
  return (
    <div className="flex justify-center items-center font-Lato mb-10">
      <div className=" w-48 h-36 sm:w-56 sm:h-56 rounded-3xl flex flex-col justify-center items-center bg-Copper gap-3 sm:gap-5">
        <AiFillProject />
        <p className="text-[#100c1a]">Projects</p>
        <p className="text-[#100c1a] font-light">10+ Projects</p>
      </div>
    </div>
  );
}
