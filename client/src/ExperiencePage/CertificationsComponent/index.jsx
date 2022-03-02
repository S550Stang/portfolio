import React from "react";
import { AiOutlineSafetyCertificate } from "react-icons/ai";

export default function CertificationsComponent() {
  return (
    <div className="flex justify-center items-center font-Lato mb-10 ">
      <div className=" w-48 h-36 sm:w-56 sm:h-56 rounded-3xl flex flex-col justify-center items-center bg-[#6b6e70] gap-3 sm:gap-5">
        <AiOutlineSafetyCertificate className="text-[#86c232]" />
        <p className="text-white">Certifications</p>
        <p className="text-white font-light">6+ Certifications</p>
      </div>
    </div>
  );
}
