import React from "react";
import bgcContact from "../../img/examplePhoto.jpg";
import Data from "../../text";
import "./style/contact-header.css";

class HeaderContact extends React.Component {
  state = {
    backgroundImage: bgcContact
  };

  componentDidMount() {
    document
      .querySelectorAll("nav.main-navigation a")
      .forEach(a => (a.style.color = "black"));
    document.querySelector("nav.main-navigation div.shadow").style.boxShadow =
      "0 0 10vh 2vh white";
  }

  render() {
    let titles = "";
    if (this.props.language === "es") {
      titles = Data.es.headers;
    } else if (this.props.language === "en") {
      titles = Data.en.headers;
    }
    return (
      <React.Fragment>
        <div className="background-contact">
          <img src={this.state.backgroundImage} alt="" />
        </div>
        <h1 className="name contact">{titles.contacth1}</h1>
        <h2 className="specialty contact">{titles.contacth2}</h2>
      </React.Fragment>
    );
  }
}

export default HeaderContact;
