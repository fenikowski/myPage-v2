import { useCallback, useEffect, useRef, useState } from "react";
import Data from "../../text.js"
import Bio from "./Bio.js";
import Career from "./Career.js";
import { getElementDistanceFromTop } from "../../utils/usefullFunctions.js";

export default function CurriculumVitae({ language }) {
    // refs
    const bioSection = useRef(null);
  
    // states
    const [flag, setFlag] = useState(false);
    
    // callback
    const handleScroll = useCallback(() => {
        const offsetTop = getElementDistanceFromTop(bioSection.current);
        if (
            (window.scrollY + window.innerHeight) > 
            (offsetTop) &&
            !flag
        ) {
            setFlag(true);

            // border div
            document
            .querySelectorAll("div.border div")
            .forEach(div => div.classList.add("active"));

        } else if (window.scrollY < 100) {
            setFlag(false);
        }
    }, [flag]);

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

    const { text, career } = Data[language].introduction;

    return (
        <section className="introduction" ref={bioSection}>
            {border}
            <Bio text={text}/>
            <Career text={career}/>
        </section>
    )
}