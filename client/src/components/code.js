import React from "react";

import JavaScriptLogo from "../img/javaScriptLogo.png";
import GimpLogo from "../img/GimpLogo.png";
import ReactLogo from "../img/ReactLogo.png";
import GitLogo from "../img/GitLogo.png";
import NodeLogo from "../img/NodeLogo.png";
import MongoLogo from "../img/MongoLogo.png";
import CSSLogo from "../img/CSSLogo.png";

import Data from "../text";

import "./style/code.css";

class Code extends React.Component {
  state = {
    imgMove: "",
    boxRotation: "0",
    stripesAnimatiom: "",
    textOpacity: "0"
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    const divCode = document.querySelector("section.code div.code");
    if (
      window.scrollY >
      window.innerHeight + divCode.offsetHeight / 2 + divCode.offsetTop
    ) {
      setTimeout(() => {
        this.setState({ imgMove: "code" });
      }, 1000);
      setTimeout(() => {
        this.setState({ boxRotation: "90deg" });
      }, 2000);
      setTimeout(() => {
        this.setState({
          stripesAnimatiom: "stripe-loading 1s forwards",
          textOpacity: "1"
        });
      }, 2500);
    }
  };

  createLevelsComponent = (color, expirience, width, text) => (
    <div className="code-info scene">
      <div
        className="box"
        style={{
          transform: `translateZ(-5vh) rotateX(${this.state.boxRotation})`
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
                  animation: this.state.stripesAnimatiom,
                  right: width
                }}
              ></div>
            </div>
            <p>
              {text.expirience} {expirience}
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  render() {
    let text = "";
    if (this.props.language === "es") {
      text = Data.es.skills;
    } else if (this.props.language === "en") {
      text = Data.en.skills;
    }

    return (
      <section className="code">
        <div className="code">
          <img className={this.state.imgMove} src={JavaScriptLogo} alt="" />
          <img className={this.state.imgMove} src={ReactLogo} alt="" />
          <img className={this.state.imgMove} src={NodeLogo} alt="" />
          <img className={this.state.imgMove} src={MongoLogo} alt="" />
          <img className={this.state.imgMove} src={GimpLogo} alt="" />
          <img className={this.state.imgMove} src={CSSLogo} alt="" />
          <img className={this.state.imgMove} src={GitLogo} alt="" />
          <div className="levels">
            {this.createLevelsComponent("#F7DF1E", "0.5yr", "40%", text)}
            {this.createLevelsComponent("#00D8FF", "0.5yr", "40%", text)}
            {this.createLevelsComponent("#90C53F", "0.5yr", "60%", text)}
            {this.createLevelsComponent("#6BB059", "0.5yr", "60%", text)}
            {this.createLevelsComponent("#5B5442", "6yr", "70%", text)}
            {this.createLevelsComponent("#2277FF", "0.5yr", "40%", text)}
            {this.createLevelsComponent("#F05033", "0.5yr", "70%", text)}
          </div>
          <div className="additional-info">
            <p
              style={{
                opacity: this.state.textOpacity
              }}
            >
              {text.info}
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default Code;
