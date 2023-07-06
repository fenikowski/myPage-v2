import React, { useEffect } from "react";
import bgcContact from "../../img/examplePhoto.jpg";
import Data from "../../text";
import "./style/contact-header.css";

export default function HeaderContact({ language }) {
  useEffect(() => {
    // give styles to the nav
    document
      .querySelectorAll("nav.main-navigation a")
      .forEach(a => (a.style.color = "black"));
    document.querySelector("nav.main-navigation div.shadow").style.boxShadow = "0 0 10vh 2vh white";
  });

  const titles = Data[language].headers;

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