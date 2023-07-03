import React from "react";
import "./style/juegos.css";
import JavaScriptLogo from "../img/javaScriptLogo.png";
import GitHubLogo from "../img/githubLogo.png";
import Data from "../text";

export default function Games({ language }) {
  const { games } = Data[language];

  const gamesComponents = games.map((game, index) => (
    <section className="juegos" key={index}>
      <div className="gradient-juegos" />
      <div className="description">
        <h3>{game.h3}</h3>
        <p>{game.p}</p>
      </div>
      <a href={game.links.game} target="_blank" className="gameImage">
        .
      </a>
      <div className="gameInfo">
        <div>
          <img src={JavaScriptLogo} alt="javascript logo" />
          <p>{game.description.one}</p>
        </div>
        <div>
          <img src={game.description.image} alt="" />
          <p>{game.description.two}</p>
        </div>
        <div>
          <p>{game.description.three}</p>
        </div>
        <div>
          <img src={GitHubLogo} alt="github logo" />
          <p>
            {game.description.four} <br />
            <a href={game.links.github} target="_blank">GitHub</a>
          </p>
        </div>
      </div>
    </section>
  ));

  return <div className="gamePage">{gamesComponents}</div>;
};