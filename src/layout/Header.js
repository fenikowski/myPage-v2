import React from "react";
import "./style/Header.css";
import InitialHeader from "../components/headers/InitialHeader";
import HeaderGames from "../components/headers/HeaderGames";
import HeaderContact from "../components/headers/HeaderContact";
import HeaderSkills from "../components/headers/HeaderSkills";
import { Switch, Route } from "react-router";

export default function Header({ language, mobile }) {
  return (
    <Switch>
      <Route path="/" exact component={InitialHeader} />
      <Route
        path="/games"
        render={() => <HeaderGames language={language} />}
      />
      <Route
        path="/projects"
        render={() => (
          <HeaderSkills language={language} mobile={mobile} />
        )}
      />
      <Route
        path="/contact"
        render={() => <HeaderContact language={language} />}
      />
    </Switch>
  );
};
