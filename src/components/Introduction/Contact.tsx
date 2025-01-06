import React, { useEffect, useRef } from "react";
import GitHub from "../../img/githubLogo.png";
import Phone from "../../img/contact2.png";
import Mail from "../../img/contact1.png";
import Facebook from "../../img/contact3.png";
import LinkedIn from "../../img/contact5.png";
import "./styles/contact.css";
import Data from "../../text";
import CVenglish from "../../downloads/igor_fenikowski_cv.pdf";
import presentationPDF from "../../downloads/lava.pdf";

type ContactProps = {
  language: string;
};

type DataType = {
  [language: string]: {
    contact: {
      copied: string;
      clipboard: string;
      cvEnglish: string;
    }
  }
};

export default function Contact({ language }: ContactProps) {

  // refs
  const tooltip1 = useRef<HTMLSpanElement | null>(null);
  const tooltip2 = useRef<HTMLSpanElement | null>(null);

  // effects
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // code cleanup
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    const boxes: NodeListOf<HTMLElement> = document.querySelectorAll("div.address *");
    boxes.forEach((box) => {
      const boxTop = box.offsetTop;
      if (window.scrollY + window.innerHeight > boxTop) {
        box.classList.add("active");
      };
    });
  };

  const text = (Data as DataType)[language].contact;

  const handleAddressClick = (node: string) => {
    const copyText = document.querySelector(node) as HTMLInputElement | null;

    if(copyText && tooltip1.current && tooltip2.current){
      copyText.select();
      document.execCommand("copy");
  
      tooltip1.current.innerHTML = text.copied;
      tooltip2.current.innerHTML = text.copied;
    }
  };

  const handleMouseOut = () => {
    if(tooltip1.current && tooltip2.current){
      tooltip1.current.innerHTML = text.clipboard;
      tooltip2.current.innerHTML = text.clipboard;
    }
  };

  return (
    <div id="contact" className="contact-component">
      <section className="documents">
        <div className="spoken-languages">
          <p className="title">Spoken Languages:</p>
          <p>Polish: Native</p>
          <p>English: Fluent (C1)</p>
          <p>Spanish: Fluent (C1)</p>
        </div>
        <div className="spoken-languages">
          <p className="title">Documents:</p>
          <a href={CVenglish} className="cv" download>
            <i className="fas fa-file-download"/>
            <p>{text.cvEnglish}</p>
          </a>
          <a href={presentationPDF} className="cv" download>
            <i className="fas fa-file-download"/>
            <p>click here to download my last project's presentation</p>
          </a>
        </div>
      </section>
      <section className="contact">
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
          <a href="https://github.com/fenikowski" className="address-box" target="_blank" rel="noreferrer">
            <img src={GitHub} className="github-contact" alt="" />
            <p>/fenikowski</p>
          </a>
          <a
            href="https://www.facebook.com/igor.fenikowski"
            className="address-box"
            target="_blank" rel="noreferrer"
          >
            <img src={Facebook} alt="" />
            <p>/igor.fenikowski</p>
          </a>
          <a
            href="https://www.linkedin.com/in/fenikowski/"
            className="address-box"
            target="_blank" rel="noreferrer"
          >
            <img src={LinkedIn} alt="" />
            <p>/in/fenikowski</p>
          </a>
        </div>
      </section>
    </div>
  );
};