import React from "react";
import SkillsHeaderTitleComponent from "./SkillsHeaderTitleComponent";
import FrontEndSkillComponent from "./FrontEndSkillComponent";
import BackEndSkillComponent from "./BackEndSkillComponent";

export default function SkillsPage() {
  return (
    <div>
      <SkillsHeaderTitleComponent />
      <FrontEndSkillComponent />
      <BackEndSkillComponent />
    </div>
  );
}
