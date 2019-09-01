import React from "react";
import "./style/skills.css";
import "./style/projects.css";
import Projects from "./projects";
import Code from "./code";

class Skills extends React.Component {
  state = {};

  componentDidMount() {
    this.scrollChecking(window.sessionStorage.getItem("scrollTo"));
  }

  scrollChecking = scrollTo => {
    if (scrollTo === null) return;

    window.scrollTo(0, 0);

    setTimeout(() => {
      window.scrollTo({
        top: 5000,
        behavior: "smooth"
      });
      window.sessionStorage.removeItem("scrollTo");
    }, 1000);

    // setTimeout(() => {
    //   window.scrollTo({
    //     top: document.querySelector(`div.skill.${scrollTo}`).offsetTop,
    //     behavior: "smooth"
    //   });
    //   window.sessionStorage.removeItem("scrollTo");
    // }, 1000);
  };

  render() {
    return (
      <React.Fragment>
        <Projects language={this.props.language} />
        <Code language={this.props.language} />
      </React.Fragment>
    );
  }
}

export default Skills;
