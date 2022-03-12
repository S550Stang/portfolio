import React from "react";
import { TiTick } from "react-icons/ti";

export default function BackEndSkillComponent() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div>
        <p className="text-lg font-light text-white mt-10">
          Back-End Development
        </p>
      </div>
      <div className=" w-64 h-64 sm:w-72 2xl:w-96 rounded-3xl flex justify-center items-center font-Lato hover:bg-gradient-to-tl  hover:from-[#bf9f37] hover:via-[#2b292a] hover:to-[#f39881] hover:bg-opacity-4 hover:backdrop-blur-lg bg-[#2b292a] border border-[#bf9f37] hover:border-0  mt-10 mb-10 lg:space-x-7 xl:space-x-10 2xl:space-x-20 ">
        <div className="  flex flex-col justify-start items-start gap-5  px-3 text-white">
          <p className=" flex items-center gap-1 mt-0 font-light text-sm">
            <TiTick className="text-[#bf9f37]" />
            NODEJS
          </p>
          <p className=" flex items-center gap-1 font-light text-sm">
            <TiTick className="text-[#bf9f37]" />
            EXPRESS
          </p>
          <p className=" flex items-center gap-1 font-light text-sm">
            <TiTick className="text-[#bf9f37]" />
            RUBY
          </p>
          <p className=" flex items-center gap-1 font-light text-sm">
            <TiTick className="text-[#bf9f37]" />
            PYTHON
          </p>
        </div>
        <div className="  flex flex-col justify-start items-start gap-5 px-3 text-white">
          <p className=" flex items-center gap-1 font-light text-sm">
            <TiTick className="text-[#bf9f37]" />
            POSTGRESQL
          </p>
          <p className=" flex items-center gap-1 font-light text-sm">
            <TiTick className="text-[#bf9f37]" />
            MYSQL
          </p>
          <p className=" flex items-center gap-1 font-light text-sm">
            <TiTick className="text-[#bf9f37]" />
            MONGOdb
          </p>
          <p className=" flex items-center gap-1 font-light text-sm">
            <TiTick className="text-[#bf9f37]" />
            REST-API'S
          </p>
        </div>
      </div>
    </div>
  );
}
