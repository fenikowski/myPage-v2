/* eslint-disable no-useless-escape */
import React from "react";
import { useState, useEffect } from "react";
import LoadingScreen from "./layout/LoadingScreen";
import Navigation from "./layout/Navigation";
import Footer from "./layout/Footer";
import Page from "./layout/Page";
import Header from "./layout/Header";
import Cookies from "universal-cookie";
import axios from "axios";
import "./styles/App.css";

export default function App() {
  const [language, setLanguage] = useState("en");
  const [isMobile, setIsMobile] = useState(false);

  // effects
  useEffect(() => {
    checkIfMobile();
    recoverLanguageFromSessionStorage();
    saveVisitForStatistics();
  }, []);

  const changeLanguage = function(language) {
    window.sessionStorage.setItem("language", language);
    setLanguage(language);
  };

  const recoverLanguageFromSessionStorage = function() {
    switch (window.sessionStorage.getItem("language")) {
      case "es":
        setLanguage("es");
        break;
      case "en":
        setLanguage("en");
        break;
      default:
        setLanguage("en");
        break;
    }
  };

  const saveVisitForStatistics = function() {
    const cookie = new Cookies();
    if (!cookie.get("visited")) {
      cookie.set("visited", true, { maxAge: 60 * 60 * 1000 });
      axios.post("/api/noteVisit", { referrer: document.referrer });
    }
  };

  const checkIfMobile = function() {
    setIsMobile(/Mobi|Android/i.test(navigator.userAgent));
  };

  return (
    <React.Fragment>
      <LoadingScreen/>
      <button className="language US" onClick={() => changeLanguage("en")}/>
      <button className="language ES" onClick={() => changeLanguage("es")}/>
      <Navigation language={language}/>
      <Header language={language} mobile={isMobile}/>
      <Page language={language}/>
      <Footer language={language}/>
    </React.Fragment>
  );
};