import React from "react";
import HeaderTitle from "./HomePage/HeaderComponent/HeaderTitle";
import AboutPage from "./AboutmePage";
import ExperiencePage from "./ExperiencePage";
import SkillsPage from "./SkillsPage";
import VectorGraphicsPage from "./VectorGraphicsPage";
import LineVectorGraphicsPage from "./LineVectorGraphicsPage";

export default function App() {
  return (
    <>
      <HeaderTitle />
      <LineVectorGraphicsPage />
      <VectorGraphicsPage />
      <AboutPage />
      <ExperiencePage />
      <SkillsPage />
    </>
  );
}
