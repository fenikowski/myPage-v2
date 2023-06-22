import React from "react";
import { Switch, Route } from "react-router-dom";
import Introduction from "../pages/IntroductionPage.js";
import Juegos from "../pages/GamesPage.js";
import Contact from "../pages/ContactPage.js";
import Skills from "../pages/SkillsPage.js";
import Admin from "../pages/AdminPage.js";
import Login from "../pages/LoginPage.js";
import Error from "../pages/ErrorPage.js";

export default function Page({language}) {
  return (
    <div className="page">
      <Switch>
        <Route
          path="/"
          exact
          render={() => <Introduction language={language} />}
        />
        <Route
          path="/projects"
          render={() => <Skills language={language} />}
        />
        <Route
          path="/games"
          render={() => <Juegos language={language} />}
        />
        <Route
          path="/contact"
          render={() => <Contact language={language} />}
        />
        <Route
          path="/admin"
          render={() => <Admin language={language} />}
        />
        <Route
          path="/login"
          render={() => <Login language={language} />}
        />
        <Route render={() => <Error language={language} />} />
      </Switch>
    </div>
  );
};
