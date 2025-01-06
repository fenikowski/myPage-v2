import React from "react";
import "./style/juegos.css";
import JavaScriptLogo from "../img/javaScriptLogo.png";
import GitHubLogo from "../img/githubLogo.png";
import Data from "../text";

type game = {
  h3: string;
  p: string;
  description: {
    one: string;
    two: string;
    three: string;
    four: string;
    image: string;
  };
  links: {
    game: string;
    github: string;
  };
};

type DataType = {
  [language: string]: {
    games: game[]
  }
}

export default function Games({ language } : { language: string }) {
  const { games } = (Data as DataType)[language];

  const gamesComponents = games.map((game, index) => (
    <section className="juegos" key={index}>
      <div className="gradient-juegos" />
      <div className="description">
        <h3>{game.h3}</h3>
        <p>{game.p}</p>
      </div>
      <a href={game.links.game} target="_blank" rel="noreferrer" className="gameImage">
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
            <a href={game.links.github} target="_blank" rel="noreferrer">GitHub</a>
          </p>
        </div>
      </div>
    </section>
  ));

  return <div className="gamePage">{gamesComponents}</div>;
};