import "./styles/achievement.css"
import React, { useCallback, useEffect, useRef } from "react";

export default function Achievement({ data }) {
    const { title, logo, logo2, text, year } = data;

    // refs
    const achievementDiv = useRef(null);

    // callbacks
    const handleScroll = useCallback(() => {
        if ((window.scrollY + window.innerHeight) > (achievementDiv.current.offsetTop + achievementDiv.current.offsetHeight)) {
            achievementDiv.current.classList.add("active");
        } else {
            achievementDiv.current.classList.remove("active");
        }
    },[]);

    // effects
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        // code cleanup
        return () => window.removeEventListener("scroll", handleScroll);
    }, [handleScroll]);
    
    return (
        <div className="achievement" ref={achievementDiv}>
            <div className="left">
                <div style={{display: "flex", flexDirection: "column"}}>
                    <img src={logo} alt="logo"/>
                    { logo2 && <img src={logo2} alt="logo" style={{marginTop: "5px", borderTop: "1px black solid"}}/>}
                </div>
                <p className="year">{year}</p>
            </div>
            <div className="right">
                <p className="title">{title}</p>
                <p className="description">{text}</p>
            </div>
        </div>
    );
};