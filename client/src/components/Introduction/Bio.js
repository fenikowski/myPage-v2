import React, { useCallback } from "react";
import { useState, useEffect, useRef } from "react";

export default function Bio({ text }) {
    // refs
    const introductionSection = useRef(null);
  
    // states
    const [passedText, setPassedText] = useState("");
    const [photoClass, setPhotoClass] = useState("");
    const [textAnimationActivated, setTextAnimationActivated] = useState(false);
    
    // callbacks
    const addLetter = useCallback((activeLetterParameter = -15) => {
        if ((activeLetterParameter < text.length) && window.scrollY >= 100) {
            
            // starts adding letters if counter equal or bigger than 0
            if (activeLetterParameter >= 0) {
                setPassedText((prevPassedText) => prevPassedText + text[activeLetterParameter]);
            }

            // ends the recursion when all the letters passed
            if (text.length === activeLetterParameter) return;

            // sets interval (recursive function)
            setTimeout(() => addLetter(activeLetterParameter + 1), 10);
        };
    }, [text]);
    
    const handleScroll = useCallback(() => {
        if (
            (window.scrollY + window.innerHeight) > 
            (introductionSection.current.offsetTop + introductionSection.current.offsetHeight / 2) &&
            !textAnimationActivated
        ) {
            !textAnimationActivated && addLetter();
            setTextAnimationActivated(true);
            setPhotoClass("active-profile-photo");

            // border div
            document
            .querySelectorAll("div.border div")
            .forEach(div => div.classList.add("active"));

        } else if (window.scrollY < 100) {
            setPassedText("");
            setPhotoClass("");
            setPassedText("");
            setTextAnimationActivated(false);
        }
    }, [textAnimationActivated, addLetter]);

    // effects
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    
        // cleanup code
        return () => window.removeEventListener("scroll", handleScroll);
    },[handleScroll]);

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
                <p style={{opacity: 0}}>{text}</p>
                <p style={{position: "absolute", top: 0, left: 0}}>{passedText}<span className="cursor">|</span></p>
            </div>
        </section>
    );
}