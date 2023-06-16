import React from "react";
import { Switch, Route } from "react-router-dom";
import Introduction from "../pages/introduction.js";
import Juegos from "../components/juegos.js";
import Contact from "../pages/contact.js";
import Skills from "../components/skills";
import Admin from "../pages/admin.js";
import Login from "../pages/login.js";
import Error from "../pages/error.js";

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
