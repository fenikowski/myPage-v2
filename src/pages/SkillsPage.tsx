import React, { useEffect } from "react";
import "./style/skills.css";
import Projects from "../components/Skills/Projects";

export default function Skills() {
  useEffect(() => {
    scrollChecking(window.sessionStorage.getItem("scrollTo"));
  }, [])

  const scrollChecking = (scrollTo: number | string | null) => {
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
      <Projects/>
    </React.Fragment>
  );
};
