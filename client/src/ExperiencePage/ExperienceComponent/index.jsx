import React from "react";
import { AiFillSafetyCertificate } from "react-icons/ai";

export default function ExperienceComponent() {
  return (
    <div className="flex justify-center items-center font-Lato mb-10 ">
      <div className=" w-48 h-36 sm:w-56 sm:h-56 rounded-3xl flex flex-col justify-center items-center bg-Copper gap-3 sm:gap-5">
        <AiFillSafetyCertificate />
        <p className="text-[#100c1a]">Expereince</p>
        <p className="text-[#100c1a] font-light">4+ Years</p>
      </div>
    </div>
  );
}
