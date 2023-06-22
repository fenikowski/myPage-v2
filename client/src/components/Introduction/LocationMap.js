import { useCallback, useEffect, useRef } from "react";
import Map from "../../img/map.png";

export default function LocationMap({ text }) {
    // refs
    const mapImageRef = useRef(null);
    const mapTextRef = useRef(null);
    const mapSection = useRef(null);

    // callbacks
    const mapAnimation = useCallback(() => {
        mapImageRef.current.classList.add("active");
        mapTextRef.current.classList.add("active");
    },[]);
    
    const handleScroll = useCallback(() => {
        if (
            window.scrollY + window.innerHeight >
            mapSection.current.offsetTop +
            mapSection.current.offsetHeight / 2
        ) {
            mapAnimation();
        }
    },[mapAnimation]);

    // effects
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        // cleanup code
        return () => window.removeEventListener("scroll", handleScroll);
    },[handleScroll]);

    return (
        <section className="map" ref={mapSection}>
            <img src={Map} alt="valencia map" className="map" ref={mapImageRef}/>
            <p ref={mapTextRef}>
                {text}
                <span>contact.</span>
            </p>
        </section>
    )
}