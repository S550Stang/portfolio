import React from "react";
import ExperienceComponent from "./ExperienceComponent";
import ProjectsComponent from "./ProjectsComponent";
import CertificationsComponent from "./CertificationsComponent";

export default function ExperiencePage() {
  return (
    <div className="lg:grid lg:grid-cols-2 mt-10 ">
      <ExperienceComponent />
      <ProjectsComponent />
      <CertificationsComponent />
    </div>
  );
}
