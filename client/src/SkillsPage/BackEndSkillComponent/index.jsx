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
      <div className=" w-64 h-64 sm:w-72 2xl:w-96 rounded-3xl flex justify-center items-center font-Lato  bg-[#222629] border border-[#86C232]  mt-10 mb-10 lg:space-x-7 xl:space-x-10 2xl:space-x-20 ">
        <div className="  flex flex-col justify-start items-start gap-5  px-3 text-white">
          <p className=" flex items-center gap-1 mt-0 font-light text-sm">
            <TiTick className="headerTitle" />
            NODEJS
          </p>
          <p className=" flex items-center gap-1 font-light text-sm">
            <TiTick className="headerTitle" />
            EXPRESS
          </p>
          <p className=" flex items-center gap-1 font-light text-sm">
            <TiTick className="headerTitle" />
            RUBY
          </p>
          <p className=" flex items-center gap-1 font-light text-sm">
            <TiTick className="headerTitle" />
            PYTHON
          </p>
        </div>
        <div className="  flex flex-col justify-start items-start gap-5 px-3 text-white">
          <p className=" flex items-center gap-1 font-light text-sm">
            <TiTick className="headerTitle" />
            POSTGRESQL
          </p>
          <p className=" flex items-center gap-1 font-light text-sm">
            <TiTick className="headerTitle" />
            MYSQL
          </p>
          <p className=" flex items-center gap-1 font-light text-sm">
            <TiTick className="headerTitle" />
            MONGOdb
          </p>
          <p className=" flex items-center gap-1 font-light text-sm">
            <TiTick className="headerTitle" />
            REST-API'S
          </p>
        </div>
      </div>
    </div>
  );
}
