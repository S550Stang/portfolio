import React from "react";
import { AiOutlineSafetyCertificate } from "react-icons/ai";

export default function CertificationsComponent() {
  return (
    <div className="flex justify-center items-center font-Lato mb-10 lg:grid lg:col-span-2 ">
      <div className=" w-52 h-44 sm:w-56 sm:h-56 md:w-64 lg:w-96 rounded-3xl flex flex-col justify-center items-center hover:bg-gradient-to-br hover:from-[#25AF9A] hover:via-[#2D4B9A] hover:to-transparent hover:bg-opacity-4 hover:backdrop-blur-lg bg-[#04060f] border border-[#25AF9A] hover:border-0 gap-3 sm:gap-5 ">
        <AiOutlineSafetyCertificate className="text-[#86c232]" />
        <p className="text-white">Certifications</p>
        <p className="text-white font-light">6+ Certifications</p>
      </div>
    </div>
  );
}
