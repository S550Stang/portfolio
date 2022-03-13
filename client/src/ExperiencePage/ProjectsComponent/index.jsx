import React from "react";
import { AiFillProject } from "react-icons/ai";

export default function ProjectsComponent() {
  return (
    <div className="flex justify-center items-center font-Lato mb-10">
      <div className=" w-52 h-44  sm:w-56 sm:h-56 md:w-64 xl:w-80 2xl:w-96 rounded-3xl flex flex-col justify-center items-center  bg-[#222629] border border-[#86C232]  gap-3 sm:gap-5">
        <AiFillProject className="headerTitle" />
        <p className="text-[#f7f7f7]">Projects</p>
        <p className="text-[#f7f7f7] font-light">10+ Projects</p>
      </div>
    </div>
  );
}
