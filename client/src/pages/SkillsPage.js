import React, { useEffect } from "react";
import "./style/skills.css";
import Projects from "../components/Skills/Projects";

export default function Skills({ language }) {
  useEffect(() => {
    scrollChecking(window.sessionStorage.getItem("scrollTo"));
  }, [])

  const scrollChecking = scrollTo => {
    if (scrollTo === null) return;

    window.scrollTo(0, 0);

    setTimeout(() => {
      window.scrollTo({
        top: 5000,
        behavior: "smooth"
      });
      window.sessionStorage.removeItem("scrollTo");
    }, 1000);
  };

  return (
    <React.Fragment>
      <Projects language={language}/>
    </React.Fragment>
  );
};
