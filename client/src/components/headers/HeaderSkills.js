import React, { useCallback, useEffect, useMemo, useState } from "react";
import bgcSkills from "../../img/galaxy.jpg";
import trees from "../../img/trees.png";
import JavaScriptLogo from "../../img/javaScriptLogo.png";
import MySqlLogo from "../../img/MySqlLogo.png";
import GimpLogo from "../../img/GimpLogo.png";
import ReactLogo from "../../img/ReactLogo.png";
import NativeLogo from "../../img/NativeLogo.jpg";
import GitLogo from "../../img/GitLogo.png";
import NodeLogo from "../../img/NodeLogo.png";
import MongoLogo from "../../img/MongoLogo.png";
import CSSLogo from "../../img/CSSLogo.png";
import HTMLLogo from "../../img/HTMLLogo.png";
import "./style/abilities-header.css";
import Data from "../../text";

export default function HeaderProjects({ language, mobile }) {
  const [numberOfBalls, setNumberOfBalls] = useState(0);

  const scroll = function(reference) {
    return () => window.scrollTo({
      top: document.querySelector(reference).offsetTop,
      behavior: "smooth"
    });
  };

  const bgcImages = useMemo(() => ([
    { img: JavaScriptLogo, scroll: scroll("div.skill.javascript")},
    { img: MySqlLogo, scroll: scroll("div.skill.react")},
    { img: GimpLogo, scroll: scroll("div.skill.gimp")},
    { img: ReactLogo, scroll: scroll("div.skill.react")},
    { img: NativeLogo, scroll: scroll("div.skill.react")},
    { img: GitLogo, scroll: scroll("div.skill.git")},
    { img: NodeLogo, scroll: scroll("div.skill.node")},
    { img: MongoLogo, scroll: scroll("div.skill.node")},
    { img: CSSLogo },
    { img: HTMLLogo }
  ]),[]);

  // callbacks
  const createBall = useCallback(() => {
    const ballStage = document.createElement("div");
    ballStage.className = "ball-stage";

    const size = Math.floor(Math.random() * 10) + 5;
    ballStage.style.width = size + "vh";
    ballStage.style.height = size + "vh";
    ballStage.style.top = "-" + size + "vh";

    const left = Math.floor(Math.random() * 90);
    ballStage.style.left = left + "vw";
    ballStage.style.animation = `falling ${size}s linear`;

    if (document.querySelector(".background-abilities") === null) return;
    document.querySelector(".background-abilities").appendChild(ballStage);

    const ball = document.createElement("figure");
    ball.className = "ball";

    const ballImage = document.createElement("span");
    ballImage.className = "ball-image";

    // image randomizing
    const randomImg = Math.floor(Math.random() * 10);
    ballImage.style.backgroundImage = `url(${bgcImages[randomImg].img})`;

    // action randomazing
    ballStage.addEventListener("click", () => {
      bgcImages[randomImg].scroll?.();
    });

    //z-index randomizing
    const zIndexRandom = Math.floor(Math.random() * 3);
    switch (zIndexRandom) {
      case 0:
        ballStage.style.zIndex = 0;
        break;
      case 1:
        ballStage.style.zIndex = 5;
        break;
      case 2:
        ballStage.style.zIndex = 7;
        break;
      default:
        break;
    };

    ball.appendChild(ballImage);
    ballStage.appendChild(ball);

    setNumberOfBalls(prev => prev + 1);

    setTimeout(() => {ballStage.remove()}, size * 1000);

    setTimeout(createBall, Math.floor(Math.random() * 10) * (mobile ? 200 : 100));
  }, [bgcImages, mobile]);

  useEffect(() => {
    // give styles to the nav
    document
      .querySelectorAll("nav.main-navigation a")
      .forEach(a => (a.style.color = "white"));
    document.querySelector("nav.main-navigation div.shadow").style.boxShadow = "none";

    // start the animation if it hasn't started yet
    !numberOfBalls && createBall();

    // cleanup code
    return () => {
      for (let i = 0; i <= numberOfBalls * 2 + 10; i++) {
        clearTimeout(i);
      }
    }
  }, [createBall, numberOfBalls]);

  const titles = Data[language].headers;

  return (
    <div className="background-abilities">
      <img src={bgcSkills} alt="night sky background"/>
      <img src={trees} alt="trees shadow"/>
      <h1 className="name skills" style={{zIndex: 6}}>{titles.skillsh1}</h1>
      <h2 className="specialty skills" style={{zIndex: 4}}>{titles.skillsh2}</h2>
    </div>
  );
};