import React from "react";
import "./style/Nav.css";
import Data from "../text";

type DataType = {
  [language: string]: {
    navigation: {
      start: string;
      skills: string;
      contact: string;
    }
  }
}

type NavType = {
  id: number;
  name: string;
  path: string;
  exact?: boolean;
}

export default function Navigation({ language } : { language: string }) {
  const titles = (Data as DataType)[language].navigation;

  const navList = [
    {
      id: 0,
      name: titles.start,
      path: "/",
      exact: true
    },
    {
      id: 1,
      name: "Career",
      path: "/#career"
    },
    {
      id: 2,
      name: "Skills",
      path: "/#skills"
    },
    {
      id: 3,
      name: titles.skills,
      path: "/#projects"
    },
    {
      id: 4,
      name: titles.contact,
      path: "/#contact"
    }
  ];

  const handleClick = (item: NavType) => {
    const hash = item.path.split('#')[1];
    const section = document.getElementById(hash);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" }); // Smooth scroll
    }
  }

  const list = navList.map(nav => (
    <li key={nav.id}>
      {/* eslint-disable-next-line */}
      <a onClick={() => handleClick(nav)}>
        {nav.name}
      </a>
    </li>
  ));

  return (
    <nav style={{ display: "none" }} className="main-navigation">
      <div className="shadow" />
      <ul className="navigation">{list}</ul>
    </nav>
  );
};
