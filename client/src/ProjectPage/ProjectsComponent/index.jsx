import React from "react";
import LoadashCloneComponent from "../LoadashCloneComponent";
import MemoirsComponent from "../MemoirsComponent";
import PasswordKeeprComponent from "../PasswordKeeprComponent";
import RubyOnRailsComponent from "../RubyOnRailsComponent";
import BitlyCloneComponent from "../BitlyCloneComponent";
import TwitterCloneComponent from "../TwitterCloneComponent";

export default function ProjectsComponent() {
  return (
    <div className="lg:grid lg:grid-cols-2 xl:grid-cols-3 ">
      <PasswordKeeprComponent />
      <RubyOnRailsComponent />
      <MemoirsComponent />
      <LoadashCloneComponent />
      <BitlyCloneComponent />
      <TwitterCloneComponent />
    </div>
  );
}
