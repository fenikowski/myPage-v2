import React from "react";
import "./style/introduction.css";
import LocationMap from "../components/Introduction/LocationMap";
import Data from "../text";
// import Technologies from "../components/Introduction/Technologies";
import Code from "../components/Skills/Code";
import CurriculumVitae from "../components/Introduction/CurriculumVitae";
import SectionTitle from "../components/Introduction/SectionTitle";

export default function Introduction({ language }) {
  const { technologies, actualInfo } = Data[language].introduction;
  return (
    <React.Fragment>
      <SectionTitle text="let me introduce myself."/>
      <CurriculumVitae language={language}/>
      <SectionTitle text={technologies}/>
      <Code language={language}/>
      <SectionTitle text="yeah. I know skill bars are quite subjective..."/>
      {/* <Technologies/> */}
      <LocationMap text={actualInfo}/>
    </React.Fragment>
  );
};