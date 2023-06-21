import React, { useEffect, useState } from "react";
import gif1 from "../../img/gif1.gif";
import gif2 from "../../img/gif2.gif";
import Data from "../../text";
import "./style/games-header.css";

export default function HeaderGames({ language }) {
  const [backgroundImage, setBackgroundImage] = useState(gif1);

  useEffect(() => {
    // give styles to the nav
    document
      .querySelectorAll("nav.main-navigation a")
      .forEach(a => (a.style.color = "white"));
    document.querySelector("nav.main-navigation div.shadow").style.boxShadow = "none";
  });

  const fire = () => {
    if (backgroundImage === gif1) {
      setBackgroundImage(gif2);
    } else {
      setBackgroundImage(gif1);
    }
  };

  const titles = Data[language].headers;

  return (
    <React.Fragment>
      <div className="background-games" onClick={fire}>
        <img src={backgroundImage} alt="" />
      </div>
      <h1 className="name juegos" onClick={fire}>
        {titles.gamesh1}
      </h1>
      <h2 className="specialty juegos" onClick={fire}>
        {titles.gamesh2}
      </h2>
    </React.Fragment>
  );
};
