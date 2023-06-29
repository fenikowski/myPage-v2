import React from "react";
import "./style/introduction.css";
import Career from "../components/Introduction/Career";
import LocationMap from "../components/Introduction/LocationMap";
import Data from "../text";
// import Technologies from "../components/Introduction/Technologies";
import Bio from "../components/Introduction/Bio";
import Code from "../components/Skills/Code";

export default function Introduction({ language }) {
  const { text, technologies, actualInfo, career } = Data[language].introduction;
  return (
    <React.Fragment>
      <Bio text={text}/>
      <Career text={career}/>
      <div className="section-title">
        <p>{technologies}</p>
      </div>
      <Code language={language}/>
      <div className="section-title">
        <p>yeah I know skill bars are quite subjective...</p>
      </div>
      {/* <Technologies/> */}
      <LocationMap text={actualInfo}/>
    </React.Fragment>
  );
};