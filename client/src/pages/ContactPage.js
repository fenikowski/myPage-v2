import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import GitHub from "../img/githubLogo.png";
import Phone from "../img/contact2.png";
import Mail from "../img/contact1.png";
import Facebook from "../img/contact3.png";
import LinkedIn from "../img/contact5.png";
import NodeJS from "../img/NodeLogo.png";
import Mongo from "../img/MongoLogo.png";
import "./style/contact.css";
import Data from "../text";
import CVspanish from "../Downloads/Igor Fenikowski CV es.pdf";
import CVenglish from "../Downloads/Igor Fenikowski CV en.pdf";

export default function Contact({ language }) {
  // states
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [info, setInfo] = useState("");

  // refs
  const tooltip1 = useRef();
  const tooltip2 = useRef();

  // effects
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // code cleanup
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    const boxes = document.querySelectorAll("div.address *");
    boxes.forEach((box) => {
      const boxTop = box.offsetTop;
      if (window.scrollY + window.innerHeight > boxTop) {
        box.classList.add("active");
      };
    });
  };

  const handleInput = e => {
    switch (e.target.id) {
      case "userName":
        setUserName(e.target.value)
        break;
      case "email":
        setEmail(e.target.value)
        break;
      case "message":
        setMessage(e.target.value)
        break;
      default:
        break;
    };
  };

  const handleClick = () => {
    axios
      .post("/api/message", { userName, email, message })
      .then(data => {
        if (data.data.sent) {
          setInfo("Message sent!")
        } else {
          setInfo("Failed to send.")
        }
      })
      .finally(() => {
        setUserName("");
        setEmail("");
        setInfo("");
      });
  };

  const text = Data[language].contact;

  const handleAddressClick = node => {
    const copyText = document.querySelector(node);
    copyText.select();
    document.execCommand("copy");

    tooltip1.innerHTML = text.copied;
    tooltip2.innerHTML = text.copied;
  };

  const handleMouseOut = () => {
    tooltip1.innerHTML = text.clipboard;
    tooltip2.innerHTML = text.clipboard;
  };

  return (
    <>
      <section className="documents">
        <a href={CVenglish} className="cv" download>
          <i className="fas fa-file-download" />
          <p>{text.cvEnglish}</p>
        </a>
        <a href={CVspanish} className="cv" download>
          <i className="fas fa-file-download" />
          <p>{text.cvSpanish}</p>
        </a>
      </section>
      <section className="contact">
        <div className="form">
          <input
            type="text"
            id="userName"
            placeholder={text.name}
            value={userName}
            onChange={handleInput}
            data-
          />
          <input
            type="text"
            id="email"
            placeholder={text.email}
            value={email}
            onChange={handleInput}
          />
          <textarea
            type="textarea"
            id="message"
            placeholder={text.message}
            value={message}
            onChange={handleInput}
          />
          <button onClick={handleClick}>{text.button}</button>
          <p className="message-info">
            <span>{info}</span> powered by{" "}
            <img src={NodeJS} alt="" />
            <img src={Mongo} alt="" />
          </p>
        </div>
        <div className="address">
          <div
            className="address-box tooltip"
            onClick={() => handleAddressClick("div.address-box:nth-of-type(1) input")}
            onMouseOut={handleMouseOut}
          >
            <span className="tooltiptext" id="myTooltip" ref={tooltip1}>
              {text.clipboard}
            </span>
            <img src={Mail} alt="" />
            <p>fenikowski@gmail.com</p>
            <input type="text" defaultValue="fenikowski@gmail.com" />
          </div>
          <div
            className="address-box tooltip"
            onClick={() => handleAddressClick("div.address-box:nth-of-type(2) input")}
            onMouseOut={handleMouseOut}
          >
            <span className="tooltiptext" id="myTooltip2" ref={tooltip2}>
              {text.clipboard}
            </span>
            <img src={Phone} alt="" />
            <p>+48 510 046 987</p>
            <input type="text" defaultValue="+48 510 046 987" />
          </div>
          <a href="https://github.com/fenikowski" className="address-box">
            <img src={GitHub} className="github-contact" alt="" />
            <p>/fenikowski</p>
          </a>
          <a
            href="https://www.facebook.com/igor.fenikowski"
            className="address-box"
          >
            <img src={Facebook} alt="" />
            <p>/igor.fenikowski</p>
          </a>
          <a
            href="https://www.linkedin.com/in/fenikowski/"
            className="address-box"
          >
            <img src={LinkedIn} alt="" />
            <p>/in/fenikowski</p>
          </a>
        </div>
      </section>
    </>
  );
};