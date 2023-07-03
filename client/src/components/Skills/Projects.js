import React, { useEffect, useRef, useState } from "react";

// import ReactScreen from "../../img/ReactScreen.png";
import ToDoScreen from "../../img/todolistscreen.png";
import BiuroScreen from "../../img/biuroScreen.png";
import BiuroScreen2 from "../../img/biuroScreen2.png";
import MyPageScreen from "../../img/myPageScreen.png";
import MyPageScreen2 from "../../img/myPageScreen2.png";
import MyPageScreen3 from "../../img/myPageScreen3.png";
import SuperPotatoBros from "../../img/game3off.gif";
import SuperPotatoBros2 from "../../img/SuperBrosScreen.png";
import SuperPotatoBros3 from "../../img/SuperBrosScreen2.png";
import SuperPotatoBros4 from "../../img/gif2.gif";
import TaygaScreen from "../../img/tayga1.png";
import TaygaScreen2 from "../../img/tayga2.png";
import CharityScreen from "../../img/charity1.png";
import CharityScreen2 from "../../img/charity2.png";
import CharityScreen3 from "../../img/charity3.png";
import DesignerBarber from "../../img/designerbarber1.png";
import DesignerBarber2 from "../../img/designerbarber2.png";
import NiceBarber from "../../img/nicebarber1.png";
import NiceBarber2 from "../../img/nicebarber2.png";

import ReactLogo from "../../img/ReactLogo.png";
import NodeLogo from "../../img/NodeLogo.png";
import MongoLogo from "../../img/MongoLogo.png";
import JavaSriptLogo from "../../img/javaScriptLogo.png";
import GimpLogo from "../../img/GimpLogo.png";
import MySQLLogo from "../../img/mysql.svg";

import Data from "../../text";

import "./styles/projects.css"

export default function Projects({ language }) {
  // refs
  const projectsSection = useRef(null);

  // states
  const [show, setShow] = useState("all");
  const [hover, setHover] = useState("none");
  const [pictures, setPictures] = useState(Array(9).fill(0));

  // effects
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // cleanup code
    return () => window.removeEventListener("scroll", handleScroll);
  },[]);

  const handleScroll = () => {
    document.querySelectorAll("section.projects div.project").forEach(div => {
      if (div.offsetTop + div.offsetHeight < window.scrollY) {
        div.style.transform = "none";
      } else if (window.scrollY === 0) {
        div.style.transform = "translate(0, 100vh)";
      }
    });
  };

  const onProjectClick = display => {
    setShow(display);

    if (typeof display === "number") {
      window.scrollTo({
        top: projectsSection.current.offsetTop,
        behaviour: "smooth"
      });
    }
  };

  const onProjectHover = display => {
    setHover(display);
  };

  const projects = [
    {
      title: "Charity website",
      pictures: [CharityScreen, CharityScreen2, CharityScreen3],
      technologies: [JavaSriptLogo, ReactLogo],
      link: "https://template-charity-tayga.herokuapp.com/en/",
      date: "September 2019",
      state: "In development",
      github: "",
      design: "Igor Fenikowski",
      code: "Igor Fenikowski",
      language: "eng",
      frameworks: "react",
      description: `A template of a webiste made for a charity.`
    },
    {
      title: "Tayga website",
      pictures: [TaygaScreen, TaygaScreen2],
      technologies: [ReactLogo, JavaSriptLogo, NodeLogo, MySQLLogo],
      link: "http://app.tayga.a2hosted.com/",
      date: "October 2019",
      state: "In development",
      github: "",
      design: "Igor Fenikowski",
      code: "Igor Fenikowski",
      language: "eng",
      frameworks: "express, react, react router",
      description: `Website for IT company startup`
    },
    {
      title: "Oldschool barber website",
      pictures: [NiceBarber, NiceBarber2],
      technologies: [ReactLogo, JavaSriptLogo],
      link: "https://barber-template2-tayga.herokuapp.com/",
      date: "October 2019",
      state: "Finished",
      github: "",
      design: "Igor Fenikowski",
      code: "Igor Fenikowski",
      language: "en",
      frameworks: "react, react router",
      description: `Website template for a hairdresser`
    },
    {
      title: "Designer barber website",
      pictures: [DesignerBarber, DesignerBarber2],
      technologies: [ReactLogo, JavaSriptLogo],
      link: "https://taygaa09jdad.herokuapp.com/",
      date: "October 2019",
      state: "Finished",
      github: "",
      design: "Igor Fenikowski",
      code: "Igor Fenikowski",
      language: "es",
      frameworks: "react, react router",
      description: `Website template for a hairdresser`
    },
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
      pictures: [
        SuperPotatoBros,
        SuperPotatoBros4,
        SuperPotatoBros2,
        SuperPotatoBros3
      ],
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
    // {
    //   title: "projectName",
    //   pictures: [ReactScreen],
    //   technologies: [ReactLogo, NodeLogo],
    //   link: "test",
    //   date: "test",
    //   state: "test",
    //   github: "test",
    //   design: "test",
    //   code: "test",
    //   language: "test",
    //   frameworks: "test",
    //   description: "test"
    // }
  ];

  const addClass = index => {
    switch (show) {
      case index:
        return "show-project";

      case "all":
        return "";

      default:
        return "hidden";
    }
  };

  const addClassOnHover = index => {
    if (show === "all") {
      switch (hover) {
        case index:
          return "hover-project";

        case "none":
          return "";

        default:
          return "hover-hide";
      }
    }
  };

  const slide = (index, side, lenght) => {
    let newPictureValue;
    if (side === "right") {
      newPictureValue = pictures[index] === lenght - 1 ? 0 : pictures[index] + 1;
    } else if (side === "left") {
      newPictureValue= pictures[index] === 0 ? lenght - 1 : pictures[index] - 1;
    };
    setPictures([...pictures.slice(0,index), newPictureValue,...pictures.slice(index + 1)]);
  };
  
  const text = Data[language].projects;

  const projectsComponents = projects.map((project, index) => (
    <div
      className={`project ${addClass(index)} ${addClassOnHover(index)}`}
      style={{
        backgroundImage: `url(${
          project.pictures[pictures[index]]
        })`
      }}
      onMouseMove={() => onProjectHover(index)}
      onMouseLeave={() => onProjectHover("none")}
      key={index}
      data-key={index}
    >
      <button
        onClick={() => slide(index,"left",project.pictures.length)}
        className="slide left"
      >
        <i className="fas fa-chevron-left"></i>
      </button>
      <button onClick={show === "all" ? () => onProjectClick(index) : () => {}} className="show-more"/>
      <button onClick={() => slide(index,"right",project.pictures.length)} className="slide right">
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
          <a href={project.link} target="_blank" rel="noreferrer">{project.link}</a>
        </p>
        <p>
          Github:
          <a href={project.github} target="_blank" rel="noreferrer">{project.github}</a>
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
        onClick={() => onProjectClick("all")}
      >
        <i className="fas fa-times"></i>
      </button>
      <div className="project-footer">
        <p>{project.title}</p>
        {project.technologies.map((pic, index) => (<img src={pic} key={index} alt="" />))}
      </div>
    </div>
  ));

  return <section className="projects" ref={projectsSection}>{projectsComponents}</section>;
};