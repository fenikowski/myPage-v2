import React from "react";
import "./style/Header.css";
import InitialHeader from "../components/headers/InitialHeader";
import HeaderGames from "../components/headers/HeaderGames";
import HeaderContact from "../components/headers/HeaderContact";
import HeaderSkills from "../components/headers/HeaderSkills";
import { Switch, Route } from "react-router";

const Header = props => {
  return (
    <Switch>
      <Route path="/" exact component={InitialHeader} />
      <Route
        path="/games"
        render={() => <HeaderGames language={props.language} />}
      />
      <Route
        path="/projects"
        render={() => (
          <HeaderSkills language={props.language} mobile={props.mobile} />
        )}
      />
      <Route
        path="/contact"
        render={() => <HeaderContact language={props.language} />}
      />
    </Switch>
  );
};

export default Header;
