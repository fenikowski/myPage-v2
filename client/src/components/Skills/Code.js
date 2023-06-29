import React, { useCallback, useEffect, useRef, useState } from "react";
import JavaScriptLogo from "../../img/javaScriptLogo.png";
import PythonLogo from "../../img/PythonLogo.png";
import ReactLogo from "../../img/ReactLogo.png";
import VueLogo from "../../img/VueLogo.png";
import NodeLogo from "../../img/NodeLogo.png";
import MySqlLogo from "../../img/MySqlLogo.png";
import CSSLogo from "../../img/CSSLogo.png";
import Data from "../../text";
import "./styles/code.css";

export default function Code({ language }) {
  // refs
  const divCode = useRef(null);

  // states
  const [imgMove, setImageMove] = useState("");
  const [boxRotation, setBoxRotation] = useState("0");
  const [stripesAnimation, setStripesAnimation] = useState("");
  const [textOpacity, setTextOpacity] = useState("0");
  const [activeText, setActiveText] = useState(0);

  // callbacks
  const handleScroll = useCallback(() => {
    if (
      window.scrollY >
      window.innerHeight + divCode.current.offsetHeight / 2 + divCode.current.offsetTop
    ) {
      setTimeout(() => {
        setImageMove("code");
      }, 1000);
      setTimeout(() => {
        setBoxRotation("90deg");
      }, 2000);
      setTimeout(() => {
        setStripesAnimation("stripe-loading 1s forwards");
        setTextOpacity("1");
      }, 2500);
    }
  },[]);

  const handleMouseEnter = useCallback((index) => {
    setActiveText(index)
  }, []);

  // effects
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // cleanup code
    return () => window.removeEventListener("scroll", handleScroll);
  },[handleScroll]);


  const createLevelsComponent = (color, experience, percentage, index) => (
    <div 
      className="code-info scene" 
      onMouseEnter={() => handleMouseEnter(index)}
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
    </div>
  );

  const { textTechInfo, generalInfo } = Data[language].skills;

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
      className={imgMove} 
      src={src} alt={alt} 
      onMouseEnter={() => handleMouseEnter(index)}
    />));

  const levels = [
    { color: "#F7DF1E", experience: "5 years", percentage: 80 },
    { color: "#00D8FF", experience: "5 years", percentage: 70 },
    { color: "#3FB984", experience: "4 years", percentage: 90 },
    { color: "#2277FF", experience: "5 years", percentage: 70 },
    { color: "#90C53F", experience: "5 years", percentage: 65 },
    { color: "#4479A1", experience: "4 years", percentage: 80 },
    { color: "#4587B9", experience: "1 year", percentage: 50 }
  ].map(({color, experience, percentage}, index) => createLevelsComponent(color, experience, percentage, index));

  return (
    <section className="code">
      <div className="code" ref={divCode}>
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