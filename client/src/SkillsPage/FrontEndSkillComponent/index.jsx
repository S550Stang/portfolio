import React from "react";
import { TiTick } from "react-icons/ti";

export default function FrontEndSkillComponent() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex justify-center items-center">
        <p className="text-lg font-light text-white mt-10">
          Front-End Development
        </p>
      </div>
      <div className=" w-56 h-52 sm:w-64 sm:h-56 rounded-3xl flex justify-center items-center font-Lato bg-[#6b6e70] mt-10 mb-10 ">
        <div className="  flex flex-col justify-start items-start gap-5 text-white">
          <p className=" flex items-center gap-1 mt-0 font-light text-sm">
            <TiTick className="text-[#86c232]" />
            HTML
          </p>
          <p className=" flex items-center gap-1 font-light text-sm">
            <TiTick className="text-[#86c232]" />
            JAVASCRIPT
          </p>
          <p className=" flex items-center gap-1 font-light text-sm">
            <TiTick className="text-[#86c232]" />
            TAILWINDCSS
          </p>
          <p className=" flex items-center gap-1 font-light text-sm">
            <TiTick className="text-[#86c232]" />
            BOOTSTRAP
          </p>
        </div>
        <div className="  flex flex-col justify-start items-start gap-5 text-white">
          <p className=" flex items-center gap-1 font-light text-sm">
            <TiTick className="text-[#86c232]" />
            CSS
          </p>
          <p className=" flex items-center gap-1 font-light text-sm">
            <TiTick className="text-[#86c232]" />
            REACT
          </p>
          <p className=" flex items-center gap-1 font-light text-sm">
            <TiTick className="text-[#86c232]" />
            BULMA
          </p>
          <p className=" flex items-center gap-1 font-light text-sm">
            <TiTick className="text-[#86c232]" />
            MATERIALUI
          </p>
        </div>
      </div>
    </div>
  );
}
