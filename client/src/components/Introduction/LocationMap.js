import { useEffect, useRef } from "react";
import Map from "../../img/map.png";
import "./styles/locationMap.css"

export default function LocationMap({ text }) {
    // refs
    const mapImageRef = useRef(null);
    const mapTextRef = useRef(null);
    const mapSection = useRef(null);

    // effects
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        // cleanup code
        return () => window.removeEventListener("scroll", handleScroll);
        // eslint-disable-next-line
    },[]);

    const handleScroll = () => {
        if (
            window.scrollY + window.innerHeight >
            mapSection.current.offsetTop +
            mapSection.current.offsetHeight / 2
        ) {
            mapAnimation();
        }
    };
    
    const mapAnimation = () => {
        mapImageRef.current.classList.add("active");
        mapTextRef.current.classList.add("active");
    };

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