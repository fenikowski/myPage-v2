import React from "react";
import bgcSkills from "../img/galaxy.jpg";
import trees from "../img/trees.png";
import JavaScriptLogo from "../img/javaScriptLogo.png";
import ReduxLogo from "../img/ReduxLogo.png";
import GimpLogo from "../img/GimpLogo.png";
import ReactLogo from "../img/ReactLogo.png";
import NativeLogo from "../img/NativeLogo.jpg";
import GitLogo from "../img/GitLogo.png";
import NodeLogo from "../img/NodeLogo.png";
import MongoLogo from "../img/MongoLogo.png";
import CSSLogo from "../img/CSSLogo.png";
import HTMLLogo from "../img/HTMLLogo.png";
import "../styles/abilities-header.css";
import Data from "../text";

class HeaderProjects extends React.Component {
  state = {
    backgroundImage: bgcSkills,
    trees,
    numberOfBalls: 0,
    bgcImages: [
      {
        img: JavaScriptLogo,
        scroll: () => {
          window.scrollTo({
            top: document.querySelector("div.skill.javascript").offsetTop,
            behavior: "smooth"
          });
        }
      },
      {
        img: ReduxLogo,
        scroll: () => {
          window.scrollTo({
            top: document.querySelector("div.skill.react").offsetTop,
            behavior: "smooth"
          });
        }
      },
      {
        img: GimpLogo,
        scroll: () => {
          window.scrollTo({
            top: document.querySelector("div.skill.gimp").offsetTop,
            behavior: "smooth"
          });
        }
      },
      {
        img: ReactLogo,
        scroll: () => {
          window.scrollTo({
            top: document.querySelector("div.skill.react").offsetTop,
            behavior: "smooth"
          });
        }
      },
      {
        img: NativeLogo,
        scroll: () => {
          window.scrollTo({
            top: document.querySelector("div.skill.react").offsetTop,
            behavior: "smooth"
          });
        }
      },
      {
        img: GitLogo,
        scroll: () => {
          window.scrollTo({
            top: document.querySelector("div.skill.git").offsetTop,
            behavior: "smooth"
          });
        }
      },
      {
        img: NodeLogo,
        scroll: () => {
          window.scrollTo({
            top: document.querySelector("div.skill.node").offsetTop,
            behavior: "smooth"
          });
        }
      },
      {
        img: MongoLogo,
        scroll: () => {
          window.scrollTo({
            top: document.querySelector("div.skill.node").offsetTop,
            behavior: "smooth"
          });
        }
      },
      { img: CSSLogo },
      { img: HTMLLogo }
    ]
  };

  componentDidMount() {
    document
      .querySelectorAll("nav.main-navigation a")
      .forEach(a => (a.style.color = "white"));
    document.querySelector("nav.main-navigation div.shadow").style.boxShadow =
      "none";
    // document.querySelector("h1.name").style.position = "fixed";
    document.querySelector("h1.name").style.zIndex = 6;
    // document.querySelector("h2.specialty").style.position = "fixed";
    document.querySelector("h2.specialty").style.zIndex = 4;

    this.createBall();
  }

  createBall = () => {
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
    ballImage.style.backgroundImage = `url(${
      this.state.bgcImages[randomImg].img
    })`;

    // action randomazing
    ballStage.addEventListener("click", () => {
      if (this.state.bgcImages[randomImg].scroll) {
        this.state.bgcImages[randomImg].scroll();
      }
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
    }

    ball.appendChild(ballImage);
    ballStage.appendChild(ball);

    this.setState(prevState => ({
      numberOfBalls: prevState.numberOfBalls + 1
    }));

    setTimeout(() => {
      ballStage.remove();
    }, size * 1000);

    if (this.props.mobile) {
      setTimeout(this.createBall, Math.floor(Math.random() * 10) * 200);
    } else {
      setTimeout(this.createBall, Math.floor(Math.random() * 10) * 100);
    }
  };

  componentWillUnmount() {
    for (let i = 0; i <= this.state.numberOfBalls * 2 + 10; i++) {
      clearTimeout(i);
    }
  }

  render() {
    let titles = "";
    if (this.props.language === "es") {
      titles = Data.es.headers;
    } else if (this.props.language === "en") {
      titles = Data.en.headers;
    }
    return (
      <div className="background-abilities">
        <img src={this.state.backgroundImage} alt="" />
        <img src={this.state.trees} alt="" />
        <h1 className="name skills">{titles.skillsh1}</h1>
        <h2 className="specialty skills">{titles.skillsh2}</h2>
      </div>
    );
  }
}

export default HeaderProjects;
