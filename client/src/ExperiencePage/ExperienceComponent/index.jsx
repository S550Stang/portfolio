import React from "react";
import { AiFillSafetyCertificate } from "react-icons/ai";

export default function ExperienceComponent() {
  return (
    <div className="flex justify-center items-center font-Lato mb-10 ">
      <div className=" w-52 h-44  sm:w-56 sm:h-56 rounded-3xl flex flex-col justify-center items-center bg-[#6b6e70] gap-3 sm:gap-5">
        <AiFillSafetyCertificate className="text-[#86c232]" />
        <p className="text-white">Expereince</p>
        <p className="text-white font-light">4+ Years</p>
      </div>
    </div>
  );
}
