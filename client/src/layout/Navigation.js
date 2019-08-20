import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/nav.css";
import Data from "../text";

const Navigation = props => {
  let titles = "";
  if (props.language === "es") {
    titles = Data.es.navigation;
  } else if (props.language === "en") {
    titles = Data.en.navigation;
  }

  const navList = [
    {
      id: 0,
      name: titles.start,
      path: "/",
      exact: true
    },
    {
      id: 1,
      name: titles.skills,
      path: "/skills"
    },
    {
      id: 2,
      name: titles.games,
      path: "/games"
    },
    {
      id: 3,
      name: titles.contact,
      path: "/contact"
    }
  ];

  const list = navList.map(nav => (
    <li key={nav.id}>
      <NavLink exact={nav.exact} to={nav.path}>
        {nav.name}
      </NavLink>
    </li>
  ));

  return (
    <nav className="main-navigation">
      <div className="shadow" />
      <ul className="navigation">{list}</ul>
    </nav>
  );
};

export default Navigation;
