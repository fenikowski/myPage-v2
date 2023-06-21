import React, { useCallback, useEffect, useRef, useState } from "react";
import JavaScriptLogo from "../../img/javaScriptLogo.png";
import GimpLogo from "../../img/GimpLogo.png";
import ReactLogo from "../../img/ReactLogo.png";
import GitLogo from "../../img/GitLogo.png";
import NodeLogo from "../../img/NodeLogo.png";
import MongoLogo from "../../img/MongoLogo.png";
import CSSLogo from "../../img/CSSLogo.png";
import Data from "../../text";
import "./styles/code.css";

export default function Code({ language }) {
  // refs
  const divCode = useRef(null)

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
        style={{
          transform: `translateZ(-5vh) rotateX(${boxRotation})`
        }}
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
                  right: width
                }}
              ></div>
            </div>
            <p>
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
        <img className={imgMove} src={JavaScriptLogo} alt="" />
        <img className={imgMove} src={ReactLogo} alt="" />
        <img className={imgMove} src={NodeLogo} alt="" />
        <img className={imgMove} src={MongoLogo} alt="" />
        <img className={imgMove} src={GimpLogo} alt="" />
        <img className={imgMove} src={CSSLogo} alt="" />
        <img className={imgMove} src={GitLogo} alt="" />
        <div className="levels">
          {createLevelsComponent("#F7DF1E", "0.5yr", "40%", text)}
          {createLevelsComponent("#00D8FF", "0.5yr", "40%", text)}
          {createLevelsComponent("#90C53F", "0.5yr", "60%", text)}
          {createLevelsComponent("#6BB059", "0.5yr", "60%", text)}
          {createLevelsComponent("#5B5442", "6yr", "70%", text)}
          {createLevelsComponent("#2277FF", "0.5yr", "40%", text)}
          {createLevelsComponent("#F05033", "0.5yr", "70%", text)}
        </div>
        <div className="additional-info">
          <p
            style={{
              opacity: textOpacity
            }}
          >
            {text.info}
          </p>
        </div>
      </div>
    </section>
  );
};