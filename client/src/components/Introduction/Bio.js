import React from "react";
import { useState, useEffect, useRef } from "react";

export default function Bio({ text }) {
    // refs
    const introductionSection = useRef(null);
  
    // states
    const [passedText, setPassedText] = useState("");
    const [activeLetter, setActiveLetter] = useState(-15);
    const [photoClass, setPhotoClass] = useState("");

    // effects
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    
        // cleanup code
        return () => window.removeEventListener("scroll", handleScroll);
        // eslint-disable-next-line
    },[activeLetter]);

    const addLetter = () => {
        if (activeLetter < text.length) {
            if (activeLetter >= 0) {
                setPassedText(passedText + text[activeLetter]);
            }

            setActiveLetter(activeLetter + 1);

            // ends the recursion when all the letters passed
            if (text.length === activeLetter) return;

            // prevents doble launching
            if (window.scrollY < 100) return;

            // sets interval (recursive function)
            setTimeout(addLetter, 15);
        };
    };
    
    const handleScroll = () => {
        if (
            (window.scrollY + window.innerHeight) > 
            (introductionSection.current.offsetTop + introductionSection.current.offsetHeight / 2) &&
            (photoClass === "" && passedText === "")
        ) {

            addLetter();
            setPhotoClass("active-profile-photo");

            // border div
            document
            .querySelectorAll("div.border div")
            .forEach(div => div.classList.add("active"));

        } else if (window.scrollY < 100) {
            setPassedText("");
            setActiveLetter(-15);
            setPhotoClass("");
            setPassedText("");
        }
    };

    const border = (
        <div className="border">
            <div className="initial"/>
            <div className="top1"/>
            <div className="top2"/>
            <div className="left"/>
            <div className="right"/>
        </div>
    );

    return (
        <section className="introduction" ref={introductionSection}>
            {border}
            <div className={`profile-photo ${photoClass}`}/>
            <div className="description">
            <p>{passedText}</p>
            <span className={`cursor`}>|</span>
            </div>
        </section>
    );
}