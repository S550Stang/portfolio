import React from "react";
import { TiTick } from "react-icons/ti";

export default function BackEndSkillComponent() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div>
        <p className="text-lg font-light text-Sulphate mt-10">
          Back-End Development
        </p>
      </div>
      <div className=" w-56 h-52 sm:w-64 sm:h-56 rounded-3xl flex justify-center items-center font-Lato bg-Copper  mt-10 mb-10 px-5 ">
        <div className="  flex flex-col justify-start items-start gap-5  px-3">
          <p className="text-[#100c1a] flex items-center gap-1 mt-0 font-light text-sm">
            <TiTick />
            NODEJS
          </p>
          <p className="text-[#100c1a] flex items-center gap-1 font-light text-sm">
            <TiTick />
            EXPRESS
          </p>
          <p className="text-[#100c1a] flex items-center gap-1 font-light text-sm">
            <TiTick />
            RUBY
          </p>
          <p className="text-[#100c1a] flex items-center gap-1 font-light text-sm">
            <TiTick />
            PYTHON
          </p>
        </div>
        <div className="  flex flex-col justify-start items-start gap-5 px-3 ">
          <p className="text-[#100c1a] flex items-center gap-1 font-light text-sm">
            <TiTick />
            POSTGRESQL
          </p>
          <p className="text-[#100c1a] flex items-center gap-1 font-light text-sm">
            <TiTick />
            MYSQL
          </p>
          <p className="text-[#100c1a] flex items-center gap-1 font-light text-sm">
            <TiTick />
            MONGOdb
          </p>
          <p className="text-[#100c1a] flex items-center gap-1 font-light text-sm">
            <TiTick />
            REST-API'S
          </p>
        </div>
      </div>
    </div>
  );
}
