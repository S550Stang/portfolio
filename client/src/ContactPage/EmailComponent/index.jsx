import React from "react";
import { AiOutlineMail } from "react-icons/ai";

export default function EmailComponent() {
  return (
    <div className=" flex flex-col justify-center items-center  w-60 h-52  mt-10 btn-bg hover:bg-[#222629] hover:text-white hover:border hover:border-[#86C232] rounded-3xl mx-auto font-Lato ">
      <div className="flex flex-col justify-center items-center gap-2 ">
        <AiOutlineMail className="w-10 h-10" />
        <p className="text-2xl">Email</p>
        <p className="text-md ">prabhuvardhanrao94@gmail.com</p>
        <a
          href="mailto:prabhuvardhanrao94@gmail.com"
          target="_blank"
          className="text-sm underline cursor-pointer "
        >
          Send a message
        </a>
      </div>
    </div>
  );
}
