import React from "react";
import { TiTick } from "react-icons/ti";

export default function FrontEndSkillComponent() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex justify-center items-center">
        <p className="text-lg font-light text-Sulphate mt-10">
          Front-End Development
        </p>
      </div>
      <div className=" w-56 h-52 sm:w-64 sm:h-56 rounded-3xl flex justify-center items-center font-Lato bg-Copper  mt-10 mb-10 ">
        <div className="  flex flex-col justify-start items-start gap-5">
          <p className="text-[#100c1a] flex items-center gap-1 mt-0 font-light text-sm">
            <TiTick />
            HTML
          </p>
          <p className="text-[#100c1a] flex items-center gap-1 font-light text-sm">
            <TiTick />
            JAVASCRIPT
          </p>
          <p className="text-[#100c1a] flex items-center gap-1 font-light text-sm">
            <TiTick />
            TAILWINDCSS
          </p>
          <p className="text-[#100c1a] flex items-center gap-1 font-light text-sm">
            <TiTick />
            BOOTSTRAP
          </p>
        </div>
        <div className="  flex flex-col justify-start items-start gap-5">
          <p className="text-[#100c1a] flex items-center gap-1 font-light text-sm">
            <TiTick />
            CSS
          </p>
          <p className="text-[#100c1a] flex items-center gap-1 font-light text-sm">
            <TiTick />
            REACT
          </p>
          <p className="text-[#100c1a] flex items-center gap-1 font-light text-sm">
            <TiTick />
            BULMA
          </p>
          <p className="text-[#100c1a] flex items-center gap-1 font-light text-sm">
            <TiTick />
            MATERIALUI
          </p>
        </div>
      </div>
    </div>
  );
}
