import React from "react";
import "../styles/juegos.css";
import JavaScriptLogo from "../img/javaScriptLogo.png";
import GitHubLogo from "../img/githubLogo.png";
import Data from "../text";

const Juegos = props => {
  let games = "";
  if (props.language === "es") {
    games = Data.es.games;
  } else if (props.language === "en") {
    games = Data.en.games;
  }

  games = games.map((game, index) => (
    <section className="juegos" key={index}>
      <div className="gradient-juegos" />
      <div className="description">
        <h3>{game.h3}</h3>
        <p>{game.p}</p>
      </div>
      <a href={game.links.game} className="gameImage">
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
            El código disponible en <br />
            <a href={game.links.github}>GitHub</a>
          </p>
        </div>
      </div>
    </section>
  ));

  return <div className="gamePage">{games}</div>;
};

export default Juegos;
