import React, { useCallback } from "react";
import { Redirect } from "react-router";
import { useState, useEffect, useRef } from "react";
import JavaScriptLogo from "../../img/javaScriptLogo.png";
import PythonLogo from "../../img/PythonLogo.png";
import VueLogo from "../../img/VueLogo.png";
import ReactLogo from "../../img/ReactLogo.png";
import NativeLogo from "../../img/NativeLogo.jpg";
import GitLogo from "../../img/GitLogo.png";
import NodeLogo from "../../img/NodeLogo.png";
import MySqlLogo from "../../img/MySqlLogo.png";

export default function Technologies() {
    // states
    const [cubesLaunched, setCubesLaunched] = useState(false);
    const [redirect, setRedirect] = useState(false);

    // refs
    const technologiesSection = useRef(null);

    // callbacks
    const handleScroll = useCallback(() => {
        const heightReached = window.scrollY + window.innerHeight >
            technologiesSection.current.offsetTop +
            technologiesSection.current.offsetHeight / 2;

        if (!cubesLaunched && heightReached) {
            setCubesLaunched(true);
            document.querySelectorAll("div.cube").forEach(cube => {
                let counter = 0;
                let prevNumber = 0;

                function switching() {
                    counter++;

                    let number = Math.floor(Math.random() * 6);
                    while (prevNumber === number) {
                    number = Math.floor(Math.random() * 6);
                    }

                    prevNumber = number;

                    if (counter === 3 || cube.className === "cube show-front") return (cube.className = "cube show-front");

                    switch (number) {
                    case 0:
                        cube.className = "cube show-front";
                        break;
                    case 1:
                        cube.className = "cube show-top";
                        break;
                    case 2:
                        cube.className = "cube show-bottom";
                        break;
                    case 3:
                        cube.className = "cube show-left";
                        break;
                    case 4:
                        cube.className = "cube show-right";
                        break;
                    case 5:
                        cube.className = "cube show-back";
                        break;
                    default:
                        cube.className = "cube show-front";
                        break;
                    }

                    if (number !== 0) {
                    setTimeout(switching, 500);
                    }
                }

                switching();
            });
        };
    
    },[cubesLaunched]);
    
    // effects
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    
        // cleanup code
        return () => window.removeEventListener("scroll", handleScroll);
    },[handleScroll]);

    const handleOnClick = () => {
        setRedirect(true);
    };

    if (redirect) {
        return <Redirect push to="/projects" />;
    }

    const cube = (logo, name) => (
        <div className="cube-holder">
          <div className="scene">
            <div className="cube show-back">
              <div className="cube__face cube__face--front">
                <img
                  src={logo}
                  alt="logo"
                  onClick={() => {
                    if (name) {
                      sessionStorage.setItem("scrollTo", name);
                      handleOnClick();
                    }
                  }}
                />
              </div>
              <div className="cube__face cube__face--back" />
              <div className="cube__face cube__face--right" />
              <div className="cube__face cube__face--left" />
              <div className="cube__face cube__face--top" />
              <div className="cube__face cube__face--bottom" />
            </div>
          </div>
        </div>
    );

    return (
        <section className="technologies" ref={technologiesSection}>
            <div className="cubes-holder">
                {cube(JavaScriptLogo, "javascript")}
                {cube(ReactLogo, "react")}
                {cube(NativeLogo, "react")}
                {cube(PythonLogo, "react")}
                {cube(VueLogo, "gimp")}
                {cube(NodeLogo, "node")}
                {cube(MySqlLogo, "node")}
                {cube(GitLogo, "git")}
            </div>
        </section>
    )
}