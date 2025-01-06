import React from "react";
import "./style/Header.css";
import InitialHeader from "../components/headers/InitialHeader";
import HeaderGames from "../components/headers/HeaderGames";
import HeaderContact from "../components/headers/HeaderContact";
import HeaderSkills from "../components/headers/HeaderSkills";
import { Routes, Route } from "react-router-dom";

export default function Header({ language, mobile } : { language: string; mobile: boolean; }) {
  return (
    <Routes>
      <Route path="/" element={<InitialHeader/>} />
      <Route
        path="/games"
        element={<HeaderGames language={language} />}
      />
      <Route
        path="/projects"
        element={<HeaderSkills language={language} mobile={mobile} />}
      />
      <Route
        path="/contact"
        element={<HeaderContact language={language} />}
      />
    </Routes>
  );
};
