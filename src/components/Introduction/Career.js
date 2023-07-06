import React from "react";
import "./styles/career.css";
import Achievement from "./Achievement";
import MarticoLogo from "../../img/MarticoLogo.png";
import ViuLogo from "../../img/ViuLogo.png";
import UwLogo from "../../img/UwLogo.png";
import UvLogo from "../../img/UvLogo.png";
import UdemyLogo from "../../img/UdemyLogo.png";

export default function Career({ text }) {
    const achievements = [
        { title: "Bachelor in Management", logo: UwLogo, logo2: UvLogo, text: text[0], year: "2016-2018" },
        { title: "Full-stack Developer", logo: UdemyLogo, text: text[1], year: "2018" },
        { title: "Software Developer at Martico", logo: MarticoLogo, text: text[2], year: "2019-2020" },
        { title: "Team Lead at Martico", logo: MarticoLogo, text: text[3], year: "2020-2021" },
        { title: "Master in Artificial Intelligence", logo: ViuLogo, text: text[4], year: "2020-2021" },
        { title: "Tech Lead at Martico", logo: MarticoLogo, text: text[5], year: "2021-2023" },
    ];

    const achievementsComponents = achievements
        .map((item, index) => <Achievement key={index} data={item}/>)

    return (
        <section className="career">
            <div className="separator"/>
            <div className="column">
                {achievementsComponents}
            </div>
        </section>
    );
};