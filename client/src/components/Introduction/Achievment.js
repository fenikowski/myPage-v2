import "./styles/achievment.css"
import React, { useCallback, useEffect, useRef } from "react";

export default function Achievment({ data }) {
    const { title, logo, text, year } = data;

    // refs
    const achievmentDiv = useRef(null);

    // callbacks
    const handleScroll = useCallback(() => {
        if ((window.scrollY + window.innerHeight) > (achievmentDiv.current.offsetTop + achievmentDiv.current.offsetHeight)) {
            achievmentDiv.current.classList.add("active");
        } else {
            achievmentDiv.current.classList.remove("active");
        }
    },[]);

    // effects
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        // code cleanup
        return () => window.removeEventListener("scroll", handleScroll);
    }, [handleScroll]);
    
    return (
        <div className="achievment" ref={achievmentDiv}>
            <div className="left">
                <img src={logo} alt="logo"/>
                <p className="year">{year}</p>
            </div>
            <div className="right">
                <p className="title">{title}</p>
                <p className="description">{text}</p>
            </div>
        </div>
    );
};