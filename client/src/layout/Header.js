import React from "react";
import "../styles/header.css";
import InitialHeader from "../components/InitialHeader";
import HeaderGames from "../components/HeaderGames";
import HeaderContact from "../components/HeaderContact";
import HeaderSkills from "../components/HeaderSkills";
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
        path="/skills"
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
