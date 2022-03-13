import React from "react";

export default function AboutmeHeader() {
  return (
    <div
      id="AboutMe"
      className="flex flex-col justify-center items-center font-Lato mt-10"
    >
      <h1 className="headerTitle text-md sm:text-lg lg:text-xl 2xl:text-2xl">
        Get to Know
      </h1>
      <h4 className="text-md sm:text-sm lg:text-xl 2xl:text-xl font-normal text-white">
        About Me
      </h4>
    </div>
  );
}
