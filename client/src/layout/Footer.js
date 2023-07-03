import React, { useCallback, useEffect, useState } from "react";
import "./style/Footer.css";
import Data from "../text";
import { Route } from "react-router";

export default function Footer({ language }) {
  // states
  const [boxRotation, setBoxRotation] = useState(0); 

  // callbacks
  const footerSwitch = useCallback(() => {
    setTimeout(() => {
      if (document.querySelector("div.author.scene div")) {
        setBoxRotation((prevValue) => parseInt(prevValue) - 90 + "deg");
      }

      footerSwitch();
    }, 3000);
  },[]);

  // effects
  useEffect(() => {
    footerSwitch()
  },[footerSwitch]);

  const location = textArg => {
    if (window.location.pathname === "/") return <span>{textArg.main}</span>;
    else return <span>{window.location.pathname}</span>;
  };

  const text = Data[language].footer;

  return (
    <div className="footer">
      <div className="localization">
        {text.localization}
        <Route path="/" exact render={() => location(text)} />
        <Route path="/projects" exact render={() => location(text)} />
        <Route path="/games" exact render={() => location(text)} />
        <Route path="/contact" exact render={() => location(text)} />
      </div>
      <div className="author scene">
        <div
          className="box"
          style={{  transform: `translateZ(-5vh) rotateX(${boxRotation})` }}
        >
          <div className="box__face box__face--front">
            {text.code}{" "}
            <span>
              <a href="https://github.com/fenikowski/myPage-v2" target="_blank">
                {text.link}
              </a>
            </span>
          </div>
          <div className="box__face box__face--top">
            {text.design} <span>Igor Fenikowski</span>
          </div>
          <div className="box__face box__face--back">
            {text.code}{" "}
            <span>
              <a href="https://github.com/fenikowski/myPage-v2" target="_blank">
                {text.link}
              </a>
            </span>
          </div>
          <div className="box__face box__face--bottom">
            {text.author} <span>Igor Fenikowski</span>
          </div>
        </div>
      </div>
      <div className="go-up">
        {text.up}
        <button
          className="arrow"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <i className="fas fa-angle-down" />
        </button>
      </div>
    </div>
  );
};