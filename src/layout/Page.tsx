import React from "react";
import { Routes, Route } from "react-router-dom";
import Introduction from "../pages/IntroductionPage";
// import Juegos from "../pages/GamesPage";
// import Contact from "../pages/ContactPage";
// import Skills from "../pages/SkillsPage";
// import Admin from "../pages/AdminPage";
// import Login from "../pages/LoginPage";
import Error from "../pages/ErrorPage";

export default function Page({ language }: { language: string }) {
  return (
    <div className="page">
        <Routes>
          <Route
            path="/"
            element={<Introduction language={language} />}
          />
          {/* <Route
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
          /> */}
          <Route element={<Error language={language} />} />
        </Routes>
    </div>
  );
};
