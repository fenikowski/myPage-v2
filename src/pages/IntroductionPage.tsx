import React from "react";
import "./style/introduction.css";
// import LocationMap from "../components/Introduction/LocationMap";
import Data from "../text";
// import Technologies from "../components/Introduction/Technologies";
import Code from "../components/Skills/Code";
import CurriculumVitae from "../components/Introduction/CurriculumVitae";
import SectionTitle from "../components/Introduction/SectionTitle";
import Projects from "../components/Introduction/Projects";
import Contact from "../components/Introduction/Contact";

type DataType = {
  [language: string]: {
    introduction: {
      technologies: string
    }
  }
}

export default function Introduction({ language } : { language: string }) {
  const { technologies } = (Data as DataType)[language].introduction;
  
  return (
    <React.Fragment>
      <SectionTitle text="let me introduce myself."/>
      <CurriculumVitae language={language}/>
      <SectionTitle text={technologies}/>
      <Code language={language}/>
      <SectionTitle text="let me show you my last projects"/>
      <Projects/>
      <SectionTitle text="get in touch with me"/>
      {/* <LocationMap text={actualInfo}/> */}
      <Contact language={language}/>
    </React.Fragment>
  );
};