import React, { useCallback, useEffect, useRef, useState } from "react";
import JavaScriptLogo from "../../img/javaScriptLogo.png";
import PythonLogo from "../../img/PythonLogo.png";
import ReactLogo from "../../img/ReactLogo.png";
import VueLogo from "../../img/VueLogo.png";
import NodeLogo from "../../img/NodeLogo.png";
import MySqlLogo from "../../img/MySqlLogo.png";
import CSSLogo from "../../img/CSSLogo.png";
import vintage_arrow from "../../img/vintage_arrow.png";
import Data from "../../text";
import { getElementDistanceFromTop } from "../../utils/usefullFunctions";
import "./styles/code.css";

type DataType = {
  [language: string]: {
    skills: {
      textTechInfo: string[];
      generalInfo: string;
    }
  }
}

export default function Code({ language } : { language: string }) {
  // refs
  const divCode = useRef(null);

  // states
  const [imgMove, setImageMove] = useState("");
  const [boxRotation, setBoxRotation] = useState("0deg");
  const [stripesAnimation, setStripesAnimation] = useState("");
  const [textOpacity, setTextOpacity] = useState("0");
  const [activeText, setActiveText] = useState(0);
  const [animationFlag, setAnimationFlag] = useState(false);

  // callbacks
  const handleScroll = useCallback(() => {
    const offsetTop = getElementDistanceFromTop(divCode.current);
    if (
      !animationFlag &&
      ((window.scrollY + window.innerHeight) > (offsetTop))
    ) {
      setAnimationFlag(true);
      setImageMove("code");
      setTimeout(() => {
        setBoxRotation("90deg");
      }, 500);
      setTimeout(() => {
        setStripesAnimation("stripe-loading 1s forwards");
        setTextOpacity("1");
      }, 1000);
      setTimeout(() => {
        setAnimationFlag(false);
      }, 1500);
    } else if (
      !animationFlag &&
      ((window.scrollY + window.innerHeight) < (offsetTop))
    ) {
      setAnimationFlag(true);
      setImageMove("");
      setBoxRotation("0deg");
      setStripesAnimation("");
      setTextOpacity("0");
      setTimeout(() => {
        setAnimationFlag(false);
      }, 2000);
    }
  },[animationFlag]);

  const handleMouseEnter = useCallback((index: number) => {
    setActiveText(index)
  }, []);

  // effects
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // cleanup code
    return () => window.removeEventListener("scroll", handleScroll);
  },[handleScroll]);


  const createLevelsComponent = (color: string, experience: string, percentage: number, index: number) => (
    <div 
      className="code-info scene" 
      onMouseEnter={() => handleMouseEnter(index)}
      onClick={() => handleMouseEnter(index)}
      key={index}
    >
      <div
        className="box"
        style={{ transform: `translateZ(-5vh) rotateX(${boxRotation})` }}
      >
        <div className="box__face box__face--front"></div>
        <div className="box__face box__face--bottom">
          <div className="stripe-container">
            <div className="stripe">
              <div
                className="stripe-filling"
                style={{
                  backgroundColor: color,
                  animation: stripesAnimation,
                  right: `${100 - percentage}%`
                }}
              />
              <p>novice</p>
              <p>intermediate</p>
              <p>advanced</p>
            </div>
            <p className="experience">
              experience: {experience}
            </p>
          </div>
        </div>
      </div>
      <img 
        src={vintage_arrow} 
        alt="walking potato"
        className={`vintage-arrow ${activeText === index && imgMove && 'active'}`}
      />
    </div>
  );

  const { textTechInfo, generalInfo } = (Data as DataType)[language].skills;

  const skills = [
    { src: JavaScriptLogo, alt: "JavaScript Logo"},
    { src: ReactLogo, alt: "React Logo"},
    { src: VueLogo, alt: "Vue Logo"},
    { src: CSSLogo, alt: "CSS Logo"},
    { src: NodeLogo, alt: "Node Logo"},
    { src: MySqlLogo, alt: "MySQL Logo"},
    { src: PythonLogo, alt: "Python Logo"},
  ].map(({src, alt}, index) => (
    <img 
      key={index} 
      className={`lng-img ${imgMove}`} 
      src={src} alt={alt} 
      onMouseEnter={() => handleMouseEnter(index)}
    />));

  const levels = [
    { color: "#F7DF1E", experience: "6 years", percentage: 80 },
    { color: "#00D8FF", experience: "6 years", percentage: 80 },
    { color: "#3FB984", experience: "4 years", percentage: 70 },
    { color: "#2277FF", experience: "6 years", percentage: 80 },
    { color: "#90C53F", experience: "6 years", percentage: 90 },
    { color: "#4479A1", experience: "5 years", percentage: 80 },
    { color: "#4587B9", experience: "1 year", percentage: 40 }
  ].map(({color, experience, percentage}, index) => createLevelsComponent(color, experience, percentage, index));

  return (
    <section id="skills" className="code" ref={divCode}>
      <div className="code">
        {skills}
        <div className="levels">
          {levels}
        </div>
        <div className="additional-info">
          <p style={{ opacity: textOpacity }}>
            {textTechInfo[activeText] || generalInfo}
          </p>
        </div>
      </div>
    </section>
  );
};