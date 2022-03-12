import React from "react";
import SkillsHeaderTitleComponent from "./SkillsHeaderTitleComponent";
import FrontEndSkillComponent from "./FrontEndSkillComponent";
import BackEndSkillComponent from "./BackEndSkillComponent";

export default function SkillsPage() {
  return (
    <div>
      <SkillsHeaderTitleComponent />
      <div className="lg:grid lg:grid-cols-2 ">
        <FrontEndSkillComponent />
        <BackEndSkillComponent />
      </div>
    </div>
  );
}
