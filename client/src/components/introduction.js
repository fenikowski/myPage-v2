import React from "react";
import { Redirect } from "react-router";
import "../styles/introduction.css";
import Data from "../text";
import JavaScriptLogo from "../img/javaScriptLogo.png";
import ReduxLogo from "../img/ReduxLogo.png";
import GimpLogo from "../img/GimpLogo.png";
import ReactLogo from "../img/ReactLogo.png";
import NativeLogo from "../img/NativeLogo.jpg";
import GitLogo from "../img/GitLogo.png";
import NodeLogo from "../img/NodeLogo.png";
import MongoLogo from "../img/MongoLogo.png";
import Map from "../img/map.png";

class Introduction extends React.Component {
  state = {
    passedText: "",
    text: "",
    activeLetter: -15,
    photoClass: "",
    cursorClass: "",
    cubesLaunched: false
  };

  componentDidMount() {
    let text = "";
    if (this.props.language === "es") {
      text = Data.es.introduction.text;
    } else if (this.props.language === "en") {
      text = Data.en.introduction.text;
    }

    this.setState({ text });

    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount = () => {
    window.removeEventListener("scroll", this.handleScroll);
  };

  addLetter = () => {
    let text = "";
    if (this.props.language === "es") {
      text = Data.es.introduction.text;
    } else if (this.props.language === "en") {
      text = Data.en.introduction.text;
    }

    if (this.state.activeLetter < text.length) {
      if (this.state.activeLetter >= 0) {
        this.setState(prevState => ({
          passedText: prevState.passedText + text[prevState.activeLetter]
        }));
        if (document.querySelector("section.introduction div.description p")) {
          document.querySelector(
            "section.introduction div.description p"
          ).textContent = this.state.passedText;
        }
      }
      this.setState(prevState => ({
        activeLetter: prevState.activeLetter + 1
      }));

      // ends the method when all the letters passed
      if (text.length === this.state.activeLetter) return;

      // prevents doble launching
      if (window.scrollY < 100) return;

      // sets interval
      setTimeout(this.addLetter, 15);
    }
  };

  handleScroll = () => {
    if (
      window.scrollY + window.innerHeight >
        document.querySelector("section.introduction").offsetTop +
          document.querySelector("section.introduction").offsetHeight / 2 &&
      this.state.photoClass === "" &&
      this.state.passedText === ""
    ) {
      this.addLetter();
      this.setState({
        photoClass: "active-profile-photo"
      });

      // border div

      document
        .querySelectorAll("div.border div")
        .forEach(div => div.classList.add("active"));
    } else if (window.scrollY < 100) {
      document.querySelector(
        "section.introduction div.description p"
      ).textContent = "";
      this.setState({
        activeLetter: -15,
        photoClass: "",
        passedText: ""
      });
    }
    if (
      window.scrollY + window.innerHeight >
      document.querySelector("section.technologies").offsetTop +
        document.querySelector("section.technologies").offsetHeight / 2
    ) {
      this.cubeRotation();
    }
    if (
      window.scrollY + window.innerHeight >
      document.querySelector("section.map").offsetTop +
        document.querySelector("section.map").offsetHeight / 2
    ) {
      this.mapAnimation();
    }
  };

  cubeRotation = () => {
    if (this.state.cubesLaunched === false) {
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

          if (counter === 5) return (cube.className = "cube show-front");

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
    }

    this.setState({
      cubesLaunched: true
    });
  };

  mapAnimation = () => {
    document.querySelector("section.map img").classList.add("active");
    document.querySelector("section.map p").classList.add("active");
  };

  handleOnClick = () => {
    this.setState({ redirect: true });
  };

  render() {
    if (this.state.redirect) {
      return <Redirect push to="/skills" />;
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
                    this.handleOnClick();
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

    const border = (
      <div className="border">
        <div className="initial" />
        <div className="top1" />
        <div className="top2" />
        <div className="left" />
        <div className="right" />
      </div>
    );

    return (
      <React.Fragment>
        <section className="introduction">
          {border}
          <div className={`profile-photo ${this.state.photoClass}`} />
          <div className="description">
            <p />
            <span className={`cursor ${this.state.cursorClass}`}>|</span>
          </div>
        </section>
        <div className="section-title">
          <p>
            {this.props.language === "en"
              ? Data.en.introduction.technologies
              : Data.es.introduction.technologies}
          </p>
        </div>
        <section className="technologies">
          <div className="cubes-holder">
            {cube(JavaScriptLogo, "javascript")}
            {cube(ReactLogo, "react")}
            {cube(NativeLogo, "react")}
            {cube(ReduxLogo, "react")}
            {cube(GimpLogo, "gimp")}
            {cube(NodeLogo, "node")}
            {cube(MongoLogo, "node")}
            {cube(GitLogo, "git")}
          </div>
        </section>
        <section className="map">
          <img src={Map} alt="" className="map" />
          <p>
            {this.props.language === "en"
              ? Data.en.introduction.actualInfo
              : Data.es.introduction.actualInfo}
            <span>contact.</span>
          </p>
        </section>
      </React.Fragment>
    );
  }
}

export default Introduction;
