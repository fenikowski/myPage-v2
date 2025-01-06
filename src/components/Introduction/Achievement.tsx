import React, { useCallback, useEffect, useRef, useState } from "react";
import { getElementDistanceFromTop } from "../../utils/usefullFunctions";
import "./styles/achievement.css"

type AchievementProps = {
    data: {
        title: string;
        logo: string;
        logo2?: string;
        text: string;
        year: string;
    }
}

type rotationType = {
    x: number;
    y: number;
}

type shinePositionType = {
    x: number;
    y: number;
}

export default function Achievement({ data }: AchievementProps) {
    const { title, logo, logo2, text, year } = data;

    // refs
    const achievementDiv = useRef<HTMLDivElement | null>(null);

    // states
    const [ rotation, setRotation ] = useState<rotationType>({ x:0, y:0 });
    const [ shinePosition, setShinePosition ] = useState<shinePositionType>({ x:0, y:0 });
    const [ transition, setTransition ] = useState<number>(0.4);
    const [ opacity, setOpacity ] = useState<number>(0);

    // callbacks
    const handleScroll = useCallback(() => {
        if (achievementDiv.current) {
            const offsetTop = getElementDistanceFromTop(achievementDiv.current);
            if ((window.scrollY + window.innerHeight) > (offsetTop + achievementDiv.current.clientHeight / 2)) {
                achievementDiv.current.classList.add("active");
            } else if((window.scrollY + window.innerHeight) < offsetTop) {
                achievementDiv.current.classList.remove("active");
            }
        }
    },[]);

    const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        if (!achievementDiv.current){
            return;
        };
        
        const { offsetLeft, clientWidth, clientHeight } = achievementDiv.current;

        // opacity
        setOpacity(0.85);

        // transition
        if(transition !== 0){
            setTransition(oldVal => oldVal - 0.01);
        };

        // rotation
        const offsetTop = getElementDistanceFromTop(achievementDiv.current);
        const rotationY = (e.pageX - (offsetLeft + clientWidth / 2)) / clientWidth;
        const rotationX = (e.pageY - (offsetTop + clientHeight / 2)) / clientHeight;
        setRotation({ x: rotationX * 20, y:rotationY * 10 * -1 });

        // set shine position
        setShinePosition({ x: rotationY * 500, y: rotationX * 500 })
    },[transition]);

    const handleMouseLeave = useCallback(() => {
        setTransition(0.4);
        setRotation({ x:0, y:0 });
        setOpacity(0);
    },[]);

    // effects
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        // code cleanup
        return () => window.removeEventListener("scroll", handleScroll);
    }, [handleScroll]);
    
    return (
        <div className="achievement" 
            ref={achievementDiv} 
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                transform: `perspective(700px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
                transition: `${transition}s`
            }}
        >
            <div className="left">
                <div style={{display: "flex", flexDirection: "column"}}>
                    <img src={logo} alt="logo"/>
                    { logo2 && <img src={logo2} alt="logo" style={{marginTop: "5px", borderTop: "1px #818891 solid"}}/>}
                </div>
                <p className="year">{year}</p>
            </div>
            <div className="right">
                <p className="title">{title}</p>
                <p className="description">{text}</p>
            </div>
            <div 
                className="shine" 
                style={{
                    transform: `translate(calc(-50% + ${shinePosition.x}px), calc(-50% + ${shinePosition.y}px)`,
                    opacity: opacity
                }}
            />
        </div>
    );
};