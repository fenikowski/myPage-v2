import React from "react";

import ReactScreen from "../img/ReactScreen.png";
import ToDoScreen from "../img/todolistscreen.png";
import BiuroScreen from "../img/biuroScreen.png";
import BiuroScreen2 from "../img/biuroScreen2.png";
import MyPageScreen from "../img/myPageScreen.png";
import MyPageScreen2 from "../img/myPageScreen2.png";
import MyPageScreen3 from "../img/myPageScreen3.png";
import SuperPotatoBros from "../img/game3off.gif";
import SuperPotatoBros2 from "../img/SuperBrosScreen.png";
import SuperPotatoBros3 from "../img/SuperBrosScreen2.png";

import ReactLogo from "../img/ReactLogo.png";
import NodeLogo from "../img/NodeLogo.png";
import MongoLogo from "../img/MongoLogo.png";
import JavaSriptLogo from "../img/javaScriptLogo.png";
import GimpLogo from "../img/GimpLogo.png";

import Data from "../text";

class Projects extends React.Component {
  state = {
    show: "all",
    hover: "none",
    pictures: []
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);

    let pictures = [];
    for (let i = 0; i <= this.projects.length; i++) {
      pictures[i] = 0;
    }
    this.setState({ pictures });
  }

  componentWillUnmount = () => {
    window.removeEventListener("scroll", this.handleScroll);
  };

  handleScroll = () => {
    document.querySelectorAll("section.projects div.project").forEach(div => {
      if (div.offsetTop + div.offsetHeight < window.scrollY) {
        div.style.transform = "none";
      } else if (window.scrollY === 0) {
        div.style.transform = "translate(0, 100vh)";
      }
    });
  };

  onProjectClick = display => {
    this.setState({ show: display });

    if (typeof display === "number") {
      window.scrollTo({
        top: document.querySelector(`section.projects`).offsetTop,
        behaviour: "smooth"
      });
    }
  };

  onProjectHover = display => {
    this.setState({ hover: display });
  };

  styleAll = {
    height: "",
    display: ""
  };

  projects = [
    {
      title: "ToDoApp",
      pictures: [ToDoScreen],
      technologies: [JavaSriptLogo, NodeLogo, MongoLogo],
      link: "http://www.todoapp.fenikowski.site/",
      date: "July 2019",
      state: "Finished",
      github: "https://github.com/fenikowski/todoapp",
      design: "Igor Fenikowski",
      code: "Igor Fenikowski",
      language: "eng",
      frameworks: "express, mongodb",
      description: `Simple 'to do' app written in node js with a use of mongo database.`
    },
    {
      title: "Accounting Office Site",
      pictures: [BiuroScreen, BiuroScreen2],
      technologies: [ReactLogo, NodeLogo, MongoLogo],
      link: "http://www.biurokonfort.pl/",
      date: "August 2019",
      state: "In progress",
      github: "https://github.com/fenikowski/AccountOfficeWebsite",
      design: "Igor Fenikowski",
      code: "Igor Fenikowski",
      language: "pl",
      frameworks:
        "axios, react, react-cookie, react-dom, react-router-dom, react-scripts, universal-cookie, body-parser, cors, express, mongodb, morgan, nodemailer",
      description:
        "Freelance contract project - a website for accounting office. Not finished yet."
    },
    {
      title: "MyPage",
      pictures: [MyPageScreen, MyPageScreen3, MyPageScreen2],
      technologies: [ReactLogo, NodeLogo, MongoLogo],
      link: "http://www.fenikowski.site/",
      date: "May 2019",
      state: "Finished",
      github: "https://github.com/fenikowski/myPage-v2",
      design: "Igor Fenikowski",
      code: "Igor Fenikowski",
      language: "esp & eng",
      frameworks:
        "axios, react, react-cookie, react-dom, react-router-dom, react-scripts, react-simplebar, body-parser, cors, express, mongodb, morgan, nodemailer",
      description: `My portfolio.`
    },
    {
      title: "Super Potato Bros",
      pictures: [SuperPotatoBros, SuperPotatoBros2, SuperPotatoBros3],
      technologies: [JavaSriptLogo, GimpLogo],
      link: "http://fenikowski.site/SuperPotatoBros/stage1.html",
      date: "April 2019",
      state: "Developing",
      github: "https://github.com/fenikowski/SuperPotatoBros",
      design: "Igor Fenikowski",
      code: "Igor Fenikowski",
      language: "eng",
      frameworks: "No frameworks used",
      description:
        "A game written as a part of my growth as a javascript programmer. An idea of my beloved girlfriend materialised."
    },
    {
      title: "projectName",
      pictures: [ReactScreen],
      technologies: [ReactLogo, NodeLogo],
      link: "test",
      date: "test",
      state: "test",
      github: "test",
      design: "test",
      code: "test",
      language: "test",
      frameworks: "test",
      description: "test"
    }
  ];

  addClass = index => {
    switch (this.state.show) {
      case index:
        return "show-project";

      case "all":
        return "";

      default:
        return "hidden";
    }
  };

  addClassOnHover = index => {
    if (this.state.show === "all") {
      switch (this.state.hover) {
        case index:
          return "hover-project";

        case "none":
          return "";

        default:
          return "hover-hide";
      }
    }
  };

  slide = (index, side, lenght) => {
    let pictures = this.state.pictures;

    if (side === "right") {
      pictures[index] = pictures[index] + 1;
      if (pictures[index] === lenght) {
        pictures[index] = 0;
      }
      this.setState({ pictures });
    } else if (side === "left") {
      pictures[index] = pictures[index] - 1;
      if (pictures[index] < 0) {
        pictures[index] = lenght - 1;
      }
      this.setState({ pictures });
    }
  };

  render() {
    let text = "";
    if (this.props.language === "es") {
      text = Data.es.projects;
    } else if (this.props.language === "en") {
      text = Data.en.projects;
    }

    const projectsComponents = this.projects.map((project, index) => (
      <div
        className={`project ${this.addClass(index)} ${this.addClassOnHover(
          index
        )}`}
        style={{
          backgroundImage: `url(${
            project.pictures[this.state.pictures[index]]
          })`
        }}
        onMouseMove={this.onProjectHover.bind(this, index)}
        onMouseLeave={this.onProjectHover.bind(this, "none")}
        key={index}
        data-key={index}
      >
        <button
          onClick={this.slide.bind(
            this,
            index,
            "left",
            project.pictures.length
          )}
          className="slide left"
        >
          <i className="fas fa-chevron-left"></i>
        </button>
        <button
          onClick={
            this.state.show === "all"
              ? this.onProjectClick.bind(this, index)
              : () => {}
          }
          className="show-more"
        ></button>
        <button
          onClick={this.slide.bind(
            this,
            index,
            "right",
            project.pictures.length
          )}
          className="slide right"
        >
          <i className="fas fa-chevron-right"></i>
        </button>
        <div className="info-to-show">
          <p>
            {text.title}
            {project.title}
          </p>
          <p>
            {text.date}
            {project.date}
          </p>
          <p>
            {text.state}
            {project.state}
          </p>
          <p>
            {text.link}
            <a href={project.link}>{project.link}</a>
          </p>
          <p>
            Github:
            <a href={project.github}>{project.github}</a>
          </p>
          <p>
            {text.language}
            {project.language}
          </p>
          <p>
            {text.code}
            {project.code}
          </p>
          <p>
            {text.design}
            {project.design}
          </p>
          <p>Frameworks: {project.frameworks}</p>
          <p>
            {text.description}
            {project.description}
          </p>
        </div>
        <button
          className="close-project"
          onClick={this.onProjectClick.bind(this, "all")}
        >
          <i className="fas fa-times"></i>
        </button>
        <div className="project-footer">
          <p>{project.title}</p>
          {project.technologies.map((pic, index) => (
            <img src={pic} key={index} alt="" />
          ))}
        </div>
      </div>
    ));

    return <section className="projects">{projectsComponents}</section>;
  }
}

export default Projects;
