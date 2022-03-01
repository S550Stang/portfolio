import React from "react";
import { GrCertificate } from "react-icons/gr";

export default function CertificationsComponent() {
  return (
    <div className="flex justify-center items-center font-Lato mb-10 ">
      <div className=" w-48 h-36 sm:w-56 sm:h-56 rounded-3xl flex flex-col justify-center items-center bg-Copper gap-3 sm:gap-5">
        <GrCertificate />
        <p className="text-[#100c1a]">Certifications</p>
        <p className="text-[#100c1a] font-light">6+ Certifications</p>
      </div>
    </div>
  );
}
