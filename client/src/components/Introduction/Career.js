import React from "react";
import "./styles/career.css";
import Achievment from "./Achievment";
import MarticoLogo from "../../img/MarticoLogo.png";
import ViuLogo from "../../img/ViuLogo.png";
import UwLogo from "../../img/UwLogo.png";
import UdemyLogo from "../../img/UdemyLogo.png";

export default function Career() {
    const someRandomText = "assadd aasdasd aasds asd asdsad wqedwfs dfsdf sdf asdasd fdg dfg dfwwefweffdsf sdf sdf wef sdf";
    const achievments = [
        { title: "Tech Lead at Martico", logo: MarticoLogo, text: someRandomText, year: 2021 },
        { title: "Master in Artificial Intelligence", logo: ViuLogo, text: someRandomText, year: 2021 },
        { title: "Team Lead at Martico", logo: MarticoLogo, text: someRandomText, year: 2020 },
        { title: "Software Developer at Martico", logo: MarticoLogo, text: someRandomText, year: 2019 },
        { title: "Programming Courses", logo: UdemyLogo, text: someRandomText, year: 2018 },
        { title: "Bachelor in Management", logo: UwLogo, text: someRandomText, year: 2018 },
    ];

    const leftColumn = achievments
        .filter((_,index) => index % 2 === 0)    
        .map((item, index) => <Achievment key={index} data={item}/>)
    const rightColumn = achievments
        .filter((_,index) => index % 2 !== 0)    
        .map((item, index) => <Achievment key={index} data={item}/>)

    return (
        <section className="career">
            <div className="left">
                <div className="column">
                    {leftColumn}
                </div>
            </div>
            <div className="separator">

            </div>
            <div className="right">
                <div className="column">
                    {rightColumn}
                </div>
            </div>
        </section>
    );
};