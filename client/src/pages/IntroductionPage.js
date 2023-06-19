import React from "react";
import { useState, useEffect, useRef } from "react";
import "./style/introduction.css";
// import Career from "../components/career";
import LocationMap from "../components/Introduction/LocationMap";
import Data from "../text";
import Technologies from "../components/Introduction/Technologies";

export default function Introduction({ language }) {
  // refs
  const introductionSection = useRef(null);

  // states
  const [passedText, setPassedText] = useState("");
  const [text, setText] = useState("");
  const [activeLetter, setActiveLetter] = useState(-15);
  const [photoClass, setPhotoClass] = useState("");

  useEffect(() => {
    setText(Data[language].introduction.text);
    window.addEventListener("scroll", handleScroll);

    // cleanup code
    return () => window.removeEventListener("scroll", handleScroll);
    // eslint-disable-next-line
  },[]);

  const addLetter = () => {
    if (activeLetter < text.length) {
      if (activeLetter >= 0) {
        setPassedText(passedText + text[activeLetter]);
      }

      setActiveLetter(activeLetter + 1);

      // ends the method when all the letters passed
      if (text.length === activeLetter) return;

      // prevents doble launching
      if (window.scrollY < 100) return;

      // sets interval (recursive function)
      setTimeout(addLetter, 15);
    }
  };

  const handleScroll = () => {
    if (
      (window.scrollY + window.innerHeight) > 
      (introductionSection.current.offsetTop + introductionSection.current.offsetHeight / 2) &&
      (photoClass === "" && passedText === "")
    ) {

      addLetter();
      setPhotoClass("active-profile-photo");

      // border div
      document
        .querySelectorAll("div.border div")
        .forEach(div => div.classList.add("active"));

    } else if (window.scrollY < 100) {
      setPassedText("");
      setActiveLetter(-15);
      setPhotoClass("");
      setPassedText("");
    }
  };

  const border = (
    <div className="border">
      <div className="initial"/>
      <div className="top1"/>
      <div className="top2"/>
      <div className="left"/>
      <div className="right"/>
    </div>
  );

  return (
    <React.Fragment>
      <section className="introduction" ref={introductionSection}>
        {border}
        <div className={`profile-photo ${photoClass}`}/>
        <div className="description">
          <p>{passedText}</p>
          <span className={`cursor`}>|</span>
        </div>
      </section>
      {/* <Career/> */}
      <div className="section-title">
        <p>{Data[language].introduction.technologies}</p>
      </div>
      <Technologies/>
      <LocationMap text={Data[language].introduction.actualInfo}/>
    </React.Fragment>
  );
};