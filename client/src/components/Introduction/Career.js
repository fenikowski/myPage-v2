import React from "react";
import "./styles/career.css";
import Achievment from "./Achievment";
import MarticoLogo from "../../img/MarticoLogo.png";
import ViuLogo from "../../img/ViuLogo.png";
import UwLogo from "../../img/UwLogo.png";
import UdemyLogo from "../../img/UdemyLogo.png";

export default function Career() {
    const someRandomTexts = [
        "Ex sint consequat duis cupidatat elit mollit est irure occaecat ad nisi consectetur ipsum. Aliqua velit consectetur eu mollit culpa laboris anim aliqua cupidatat officia consectetur ullamco proident aute. Ea cillum exercitation ex proident. Aliquip ut voluptate cupidatat est dolor proident.",
        "Ea id cupidatat id duis magna sunt ipsum amet deserunt. Deserunt tempor exercitation sunt non dolore commodo eu. Et ullamco tempor veniam reprehenderit consequat. Esse reprehenderit labore quis in.",
        "Laboris sint occaecat ea magna. Culpa ea qui consectetur ullamco qui ad laborum ullamco exercitation est minim occaecat. In amet magna pariatur ullamco anim ex proident eiusmod anim ipsum consequat qui. Esse magna anim ullamco anim magna duis Lorem.",
        "Esse nostrud sunt incididunt labore aliqua. Culpa officia incididunt esse est anim. Quis ullamco in ullamco minim ea Lorem incididunt cillum. Laborum quis dolore ea occaecat culpa dolor magna ipsum adipisicing ullamco anim anim. Consectetur laborum tempor et aute aliqua id. Nisi enim ullamco est ad minim consequat elit cupidatat pariatur ea veniam deserunt proident.",
        "Cillum sit quis labore qui ullamco. Id et amet qui cupidatat tempor ullamco consectetur ea dolore ipsum proident laborum aute. Eu ea ad et enim elit dolore ipsum dolore sit ex sunt ad anim nulla. Duis adipisicing est laboris pariatur dolore nostrud duis pariatur nisi culpa quis irure minim est.",
        "Cupidatat fugiat id qui eiusmod non ex consectetur sunt. Deserunt ut mollit nulla Lorem veniam adipisicing cillum esse duis aliqua et velit. Qui non ad eiusmod ex enim et amet proident ex laborum. Non ut officia laboris velit est ut sit esse officia fugiat incididunt quis. Commodo duis laborum exercitation non duis laborum. Incididunt anim duis ea nisi tempor quis commodo cillum eu. Amet voluptate tempor elit ad et ex incididunt deserunt sunt ex voluptate."
    ]
    const achievments = [
        { title: "Tech Lead at Martico", logo: MarticoLogo, text: someRandomTexts[0], year: 2021 },
        { title: "Master in Artificial Intelligence", logo: ViuLogo, text: someRandomTexts[1], year: 2021 },
        { title: "Team Lead at Martico", logo: MarticoLogo, text: someRandomTexts[2], year: 2020 },
        { title: "Software Developer at Martico", logo: MarticoLogo, text: someRandomTexts[3], year: 2019 },
        { title: "Programming Courses", logo: UdemyLogo, text: someRandomTexts[4], year: 2018 },
        { title: "Bachelor in Management", logo: UwLogo, text: someRandomTexts[5], year: 2018 },
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