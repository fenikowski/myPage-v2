import React, { useEffect, useRef, useState } from "react";

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

import "./styles/projects.css"

export default function Projects() {
  // refs
  const projectsSection = useRef(null);

  // states
  const [hover, setHover] = useState<string | number>("none");
  const [pictures, setPictures] = useState(Array(9).fill(0));

  // effects
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // cleanup code
    return () => window.removeEventListener("scroll", handleScroll);
  },[]);

  const handleScroll = () => {
    const divArray = document.querySelectorAll("section.projects div.project") as NodeListOf<HTMLDivElement>;
    
    divArray.forEach(div => {
      if (div.offsetTop + div.offsetHeight < window.scrollY) {
        div.style.transform = "none";
      } else if (window.scrollY === 0) {
        div.style.transform = "translate(0, 100vh)";
      }
    });
  };

  const onProjectHover = (display: string | number) => {
    setHover(display);
  };

  const projects = [
    {
      title: "Charity website",
      pictures: [CharityScreen, CharityScreen2, CharityScreen3],
      technologies: [JavaSriptLogo, ReactLogo],
      link: "https://template-charity-tayga.herokuapp.com/en/",
      date: "September 2019"
    },
    {
      title: "Tayga website",
      pictures: [TaygaScreen, TaygaScreen2],
      technologies: [ReactLogo, JavaSriptLogo, NodeLogo, MySQLLogo],
      link: "http://app.tayga.a2hosted.com/",
      date: "October 2019"
    },
    {
      title: "Oldschool barber website",
      pictures: [NiceBarber, NiceBarber2],
      technologies: [ReactLogo, JavaSriptLogo],
      link: "https://barber-template2-tayga.herokuapp.com/",
      date: "October 2019"
    },
    {
      title: "Designer barber website",
      pictures: [DesignerBarber, DesignerBarber2],
      technologies: [ReactLogo, JavaSriptLogo],
      link: "https://taygaa09jdad.herokuapp.com/",
      date: "October 2019"
    },
    {
      title: "ToDoApp",
      pictures: [ToDoScreen],
      technologies: [JavaSriptLogo, NodeLogo, MongoLogo],
      link: "http://www.todoapp.fenikowski.site/",
      date: "July 2019",
      github: "https://github.com/fenikowski/todoapp"
    },
    {
      title: "Accounting Office Site",
      pictures: [BiuroScreen, BiuroScreen2],
      technologies: [ReactLogo, NodeLogo, MongoLogo],
      link: "http://www.biurokonfort.pl/",
      date: "August 2019",
      github: "https://github.com/fenikowski/AccountOfficeWebsite"
    },
    {
      title: "MyPage",
      pictures: [MyPageScreen, MyPageScreen3, MyPageScreen2],
      technologies: [ReactLogo, NodeLogo, MongoLogo],
      link: "http://www.fenikowski.site/",
      date: "May 2019",
      github: "https://github.com/fenikowski/myPage-v2"
    },
    {
      title: "Super Potato Bros",
      pictures: [SuperPotatoBros, SuperPotatoBros4, SuperPotatoBros2, SuperPotatoBros3 ],
      technologies: [JavaSriptLogo, GimpLogo],
      link: "http://fenikowski.site/SuperPotatoBros/stage1.html",
      date: "April 2019",
      github: "https://github.com/fenikowski/SuperPotatoBros"
    }
  ];

  const addClassOnHover = (index: number | "none") => {
    switch (hover) {
      case index:
        return "hover-project";

      case "none":
        return "";

      default:
        return "hover-hide";
    }
  };

  const slide = (index: number, side: string, lenght: number) => {
    let newPictureValue;
    if (side === "right") {
      newPictureValue = pictures[index] === lenght - 1 ? 0 : pictures[index] + 1;
    } else if (side === "left") {
      newPictureValue= pictures[index] === 0 ? lenght - 1 : pictures[index] - 1;
    };
    setPictures([...pictures.slice(0,index), newPictureValue,...pictures.slice(index + 1)]);
  };

  const projectsComponents = projects.map((project, index) => (
    <div
      className={`project ${addClassOnHover(index)}`}
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
      <button onClick={() => {}} className="show-more"/>
      <button onClick={() => slide(index,"right",project.pictures.length)} className="slide right">
        <i className="fas fa-chevron-right"></i>
      </button>
    </div>
  ));

  return <section className="projects" ref={projectsSection}>{projectsComponents}</section>;
};