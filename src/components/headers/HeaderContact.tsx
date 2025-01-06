import React, { useEffect } from "react";
import bgcContact from "../../img/examplePhoto.jpg";
import Data from "../../text";
import "./style/contact-header.css";

type HeaderContactProps = {
  language: string
};

// Define the type for `Data`
type DataType = {
  [language: string]: {
    headers: {
      contacth1: string;
      contacth2: string;
    };
  };
};

export default function HeaderContact({ language }: HeaderContactProps) {
  useEffect(() => {
    // give styles to the nav
    document
      .querySelectorAll("nav.main-navigation a")
      .forEach(a => (a as HTMLElement).style.color = "black");

    const box = document.querySelector("nav.main-navigation div.shadow") as HTMLElement | null;
    
    if(box){
      box.style.boxShadow = "0 0 10vh 2vh white";
    };
  });

  // Ensure `Data` has the correct structure
  const titles = (Data as DataType)[language]?.headers;

  return (
    <React.Fragment>
      <div className="background-contact">
        <img src={bgcContact} alt="" />
      </div>
      <h1 className="name contact">{titles.contacth1}</h1>
      <h2 className="specialty contact">{titles.contacth2}</h2>
    </React.Fragment>
  );
};