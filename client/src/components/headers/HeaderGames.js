import React from "react";
import gif1 from "../../img/gif1.gif";
import gif2 from "../../img/gif2.gif";
import Data from "../../text";
import "./style/games-header.css";

class HeaderGames extends React.Component {
  state = {
    backgroundImage: gif1
  };

  componentDidMount() {
    document
      .querySelectorAll("nav.main-navigation a")
      .forEach(a => (a.style.color = "white"));
    document.querySelector("nav.main-navigation div.shadow").style.boxShadow =
      "none";
  }

  fire = e => {
    if (this.state.backgroundImage === gif1) {
      this.setState({
        backgroundImage: gif2
      });
    } else {
      this.setState({
        backgroundImage: gif1
      });
    }
  };

  render() {
    let titles = "";
    if (this.props.language === "es") {
      titles = Data.es.headers;
    } else if (this.props.language === "en") {
      titles = Data.en.headers;
    }
    return (
      <React.Fragment>
        <div className="background-games" onClick={this.fire}>
          <img src={this.state.backgroundImage} alt="" />
        </div>
        <h1 className="name juegos" onClick={this.fire}>
          {titles.gamesh1}
        </h1>
        <h2 className="specialty juegos" onClick={this.fire}>
          {titles.gamesh2}
        </h2>
      </React.Fragment>
    );
  }
}

export default HeaderGames;
