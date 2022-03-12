import React from "react";
import { TiTick } from "react-icons/ti";

export default function BackEndSkillComponent() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div>
        <p className="text-lg font-light text-white mt-10">
          Front-End Development
        </p>
      </div>
      <div className=" w-64 h-64 sm:w-72  2xl:w-96  rounded-3xl flex justify-center items-center font-Lato hover:bg-gradient-to-bl hover:from-[#25AF9A] hover:via-[#2D4B9A] hover:to-transparent hover:bg-opacity-4 hover:backdrop-blur-lg bg-[#04060f] border border-[#25AF9A] hover:border-0  mt-10 mb-10 lg:space-x-7 xl:space-x-10 2xl:space-x-20  ">
        <div className="  flex flex-col justify-start items-start gap-5  text-white">
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
        <div className="  flex flex-col justify-start items-start gap-5 px-3 text-white">
          <p className=" flex items-center gap-1 font-light text-sm">
            <TiTick className="text-[#86c232]" />
            CSS
          </p>
          <p className=" flex items-center gap-1 font-light text-sm">
            <TiTick className="text-[#86c232]" />
            SASS/SCSS
          </p>
          <p className=" flex items-center gap-1 font-light text-sm">
            <TiTick className="text-[#86c232]" />
            REACT
          </p>
          <p className=" flex items-center gap-1 font-light text-sm">
            <TiTick className="text-[#86c232]" />
            BULMA
          </p>
        </div>
      </div>
    </div>
  );
}
