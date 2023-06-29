import React from "react";
import "./style/introduction.css";
import Career from "../components/Introduction/Career";
import LocationMap from "../components/Introduction/LocationMap";
import Data from "../text";
import Technologies from "../components/Introduction/Technologies";
import Bio from "../components/Introduction/Bio";

export default function Introduction({ language }) {
  const { text, technologies, actualInfo, career } = Data[language].introduction;
  return (
    <React.Fragment>
      <div className="white-bcg">
        <Bio text={text}/>
        <Career text={career}/>
      </div>
      <div className="section-title">
        <p>{technologies}</p>
      </div>
      <Technologies/>
      <LocationMap text={actualInfo}/>
    </React.Fragment>
  );
};