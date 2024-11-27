import React, { useEffect, useState } from "react";
import bgc1 from "../../img/bgc1.png";
import bgc2 from "../../img/bgc2.png";
import bgc3 from "../../img/bgc3.png";
import bgc4 from "../../img/bgc4.png";
import bgc5 from "../../img/bgc5.png";
import "./style/initial-header.css";

export default function InitialHeader() {
  // states
  const [bgc1Distance, setBgc1Distance] = useState("0px");
  const [bgc2Distance, setBgc2Distance] = useState("0px");
  const [bgc3Distance, setBgc3Distance] = useState("0px");
  const [bgc4Distance, setBgc4Distance] = useState("0px");
  const [bgc5Distance] = useState("0px");
  const [nameDistance, setNameDistance] = useState("17vh");
  const [specialtyDistance, setSpecialtyDistance] = useState("38vh");

  // effects
  useEffect(() => {
    // give styles to the nav
    document
      .querySelectorAll("nav.main-navigation a")
      .forEach(a => (a.style.color = "black"));
    document.querySelector("nav.main-navigation div.shadow").style.boxShadow = "0 0 10vh 2vh white";
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    setBgc1Distance(`${0 + window.scrollY / 1}px`)
    setBgc2Distance(`${0 + window.scrollY / 1.35}px`)
    setBgc3Distance(`${0 + window.scrollY / 2.25}px`)
    setBgc4Distance(`${0 + window.scrollY / 3.75}px`)
    setNameDistance(`${17 + window.scrollY / 15}vh`)
    setSpecialtyDistance(`${38 + window.scrollY / 15}vh`)
  };

  return (
    <div
      className="background-wrapper"
    >
      <img
        className="bgc1"
        style={{ top: bgc1Distance }}
        src={bgc1}
        alt=""
      />
      <img
        className="bgc2"
        style={{ top: bgc2Distance }}
        src={bgc2}
        alt=""
      />
      <img
        className="bgc3"
        style={{ top: bgc3Distance }}
        src={bgc3}
        alt=""
      />
      <img
        className="bgc4"
        style={{ top: bgc4Distance }}
        src={bgc4}
        alt=""
      />
      <img
        className="bgc5"
        style={{ top: bgc5Distance }}
        src={bgc5}
        alt=""
      />
      <h1 className="name" style={{ top: nameDistance }}>
        Igor Fenikowski
      </h1>
      <h2 className="specialty" style={{ top: specialtyDistance }}>
        Software Developer
      </h2>
    </div>
  );
};
