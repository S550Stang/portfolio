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
      <div className=" w-56 h-52 sm:w-64 sm:h-56 rounded-3xl flex justify-center items-center font-Lato bg-[#6b6e70]  mt-10 mb-10 px-5 ">
        <div className="  flex flex-col justify-start items-start gap-5  px-3 text-white">
          <p className=" flex items-center gap-1 mt-0 font-light text-sm">
            <TiTick className="text-[#86c232]" />
            NODEJS
          </p>
          <p className=" flex items-center gap-1 font-light text-sm">
            <TiTick className="text-[#86c232]" />
            EXPRESS
          </p>
          <p className=" flex items-center gap-1 font-light text-sm">
            <TiTick className="text-[#86c232]" />
            RUBY
          </p>
          <p className=" flex items-center gap-1 font-light text-sm">
            <TiTick className="text-[#86c232]" />
            PYTHON
          </p>
        </div>
        <div className="  flex flex-col justify-start items-start gap-5 px-3 text-white">
          <p className=" flex items-center gap-1 font-light text-sm">
            <TiTick className="text-[#86c232]" />
            POSTGRESQL
          </p>
          <p className=" flex items-center gap-1 font-light text-sm">
            <TiTick className="text-[#86c232]" />
            MYSQL
          </p>
          <p className=" flex items-center gap-1 font-light text-sm">
            <TiTick className="text-[#86c232]" />
            MONGOdb
          </p>
          <p className=" flex items-center gap-1 font-light text-sm">
            <TiTick className="text-[#86c232]" />
            REST-API'S
          </p>
        </div>
      </div>
    </div>
  );
}
