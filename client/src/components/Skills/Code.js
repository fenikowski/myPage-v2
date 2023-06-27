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

  // effects
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // cleanup code
    return () => window.removeEventListener("scroll", handleScroll);
  },[handleScroll]);


  const createLevelsComponent = (color, experience, width, text) => (
    <div className="code-info scene">
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
                  right: `${100 - width}%`
                }}
              />
              <p>novice</p>
              <p>intermediate</p>
              <p>advanced</p>
            </div>
            <p className="experience">
              {text.experience} {experience}
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const text = Data[language].skills;

  return (
    <section className="code">
      <div className="code" ref={divCode}>
        <img className={imgMove} src={JavaScriptLogo} alt="JavaScript Logo"/>
        <img className={imgMove} src={ReactLogo} alt="React Logo"/>
        <img className={imgMove} src={VueLogo} alt="Vue Logo"/>
        <img className={imgMove} src={CSSLogo} alt="CSS Logo"/>
        <img className={imgMove} src={NodeLogo} alt="Node Logo"/>
        <img className={imgMove} src={MySqlLogo} alt="MySQL Logo"/>
        <img className={imgMove} src={PythonLogo} alt="Python Logo"/>
        <div className="levels">
          {createLevelsComponent("#F7DF1E", "5 years", 80, text)}
          {createLevelsComponent("#00D8FF", "5 years", 70, text)}
          {createLevelsComponent("#3FB984", "4 years", 90, text)}
          {createLevelsComponent("#2277FF", "5 years", 70, text)}
          {createLevelsComponent("#90C53F", "5 years", 65, text)}
          {createLevelsComponent("#4479A1", "4 years", 80, text)}
          {createLevelsComponent("#4587B9", "1 year", 50, text)}
        </div>
        <div className="additional-info">
          <p style={{ opacity: textOpacity }}>{text.info}</p>
        </div>
      </div>
    </section>
  );
};