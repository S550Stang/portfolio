import React from "react";
import HeaderTitle from "./HomePage/HeaderComponent/HeaderTitle";
import AboutPage from "./AboutmePage";
import ExperiencePage from "./ExperiencePage";
import SkillsPage from "./SkillsPage";

export default function App() {
  return (
    <>
      <HeaderTitle />
      <AboutPage />
      <ExperiencePage />
      <SkillsPage />
    </>
  );
}
