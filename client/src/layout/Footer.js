import React from "react";
import "../styles/Footer.css";
import Data from "../text";
import { Route } from "react-router";

class Footer extends React.Component {
  state = { boxRotation: "0" };

  componentDidMount() {
    this.footerSwitch();
  }

  location = text => {
    if (window.location.pathname === "/") return <span>{text.main}</span>;
    else return <span>{window.location.pathname}</span>;
  };

  footerSwitch = () => {
    setTimeout(() => {
      if (document.querySelector("div.author.scene div")) {
        let boxRotation = this.state.boxRotation;
        boxRotation = parseInt(boxRotation) - 90 + "deg";

        this.setState({
          boxRotation
        });
      }

      this.footerSwitch();
    }, 3000);
  };

  render() {
    let text = "";
    if (this.props.language === "es") {
      text = Data.es.footer;
    } else if (this.props.language === "en") {
      text = Data.en.footer;
    }
    return (
      <div className="footer">
        <div className="localization">
          {text.localization}
          <Route path="/" exact render={props => this.location(text)} />
          <Route path="/skills" exact render={props => this.location(text)} />
          <Route path="/games" exact render={props => this.location(text)} />
          <Route path="/contact" exact render={props => this.location(text)} />
        </div>
        <div className="author scene">
          <div
            className="box"
            style={{
              transform: `translateZ(-5vh) rotateX(${this.state.boxRotation})`
            }}
          >
            <div className="box__face box__face--front">
              {text.design} <span>Igor Fenikowski</span>
            </div>
            <div className="box__face box__face--top">
              {text.author}
              <span>Igor Fenikowski</span>
            </div>
            <div className="box__face box__face--back">
              {text.code}{" "}
              <span>
                <a href="https://github.com/fenikowski/myPage-v2">
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
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <i className="fas fa-angle-down" />
          </button>
        </div>
      </div>
    );
  }
}

export default Footer;
