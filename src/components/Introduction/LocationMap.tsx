import { useCallback, useEffect, useRef } from "react";
import Map from "../../img/map.png";
import "./styles/locationMap.css"

type LocationMapProps = {
    text: string;
};

export default function LocationMap({ text }: LocationMapProps) {
    // refs
    const mapImageRef = useRef<HTMLImageElement | null>(null);
    const mapTextRef = useRef<HTMLParagraphElement | null>(null);
    const mapSection = useRef<HTMLElement | null>(null);

    // callbacks
    const mapAnimation = useCallback(() => {
        if(mapImageRef.current && mapTextRef.current){
            mapImageRef.current.classList.add("active");
            mapTextRef.current.classList.add("active");
        }
    },[]);
    
    const handleScroll = useCallback(() => {
        if (!mapSection.current) return;
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
            </p>
        </section>
    )
}