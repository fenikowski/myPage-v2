import React from "react";
import { Switch, Route } from "react-router-dom";
import Introduction from "../pages/IntroductionPage.js";
import Juegos from "../pages/GamesPage.js";
import Contact from "../pages/ContactPage.js";
import Skills from "../pages/SkillsPage.js";
import Admin from "../pages/AdminPage.js";
import Login from "../pages/LoginPage.js";
import Error from "../pages/ErrorPage.js";

const Page = props => {
  return (
    <div className="page">
      <Switch>
        <Route
          path="/"
          exact
          render={() => <Introduction language={props.language} />}
        />
        <Route
          path="/projects"
          render={() => <Skills language={props.language} />}
        />
        <Route
          path="/games"
          render={() => <Juegos language={props.language} />}
        />
        <Route
          path="/contact"
          render={() => <Contact language={props.language} />}
        />
        <Route
          path="/admin"
          render={() => <Admin language={props.language} />}
        />
        <Route
          path="/login"
          render={() => <Login language={props.language} />}
        />
        <Route render={() => <Error language={props.language} />} />
      </Switch>
    </div>
  );
};

export default Page;
