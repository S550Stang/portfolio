import React from "react";
import HeaderTitle from "./HomePage/HeaderComponent/HeaderTitle";
import AboutPage from "./AboutmePage";
import ExperiencePage from "./ExperiencePage";
import SkillsPage from "./SkillsPage";
import VectorGraphicsPage from "./VectorGraphicsPage";
import LineVectorGraphicsPage from "./LineVectorGraphicsPage";
import SoundBarPage from "./SoundBarPage";

export default function App() {
  return (
    <>
      <HeaderTitle />
      <SoundBarPage />
      <LineVectorGraphicsPage />
      <VectorGraphicsPage />
      <AboutPage />
      <ExperiencePage />
      <SkillsPage />
    </>
  );
}
