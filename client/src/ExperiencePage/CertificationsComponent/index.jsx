import React from "react";
import { AiOutlineSafetyCertificate } from "react-icons/ai";

export default function CertificationsComponent() {
  return (
    <div className="flex justify-center items-center font-Lato mb-10 lg:grid lg:col-span-2 ">
      <div className=" w-52 h-44 sm:w-56 sm:h-56 md:w-64 lg:w-96 rounded-3xl flex flex-col justify-center items-center  bg-[#222629] border border-[#86C232] gap-3 sm:gap-5 ">
        <AiOutlineSafetyCertificate className="headerTitle" />
        <p className="text-[#f7f7f7]">Certifications</p>
        <p className="text-[#f7f7f7] font-light">6+ Certifications</p>
      </div>
    </div>
  );
}
