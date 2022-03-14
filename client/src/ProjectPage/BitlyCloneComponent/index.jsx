import React from "react";
import image from "../../assets/unsplash.jpg";

export default function BitlyCloneComponent() {
  return (
    <div className="w-60 h-80 mt-10 btn-bg hover:bg-[#222629] hover:border hover:border-[#86C232] rounded-3xl mx-auto font-Lato ">
      <div className="flex flex-col justify-center items-center hover:text-white gap-1">
        <img
          src={image}
          alt="passwordKeepr"
          className="w-full p-2 rounded-3xl"
        />
        <p className="text-2xl ">Bitly Clone </p>
        <button className="text-black inline-block border border-black text-lg lg:text-xl rounded-3xl w-20 btn-bg">
          <a href="https://github.com/S550Stang/tinyApp">Github</a>
        </button>
      </div>
    </div>
  );
}
