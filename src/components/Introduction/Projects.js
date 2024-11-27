import "./styles/projects.css";
import logo from "../../img/tfil_full.png";
import photo1 from "../../img/lava_rush_2.jpeg";
import photo2 from "../../img/tfil_web.png";
import photo3 from "../../img/tfil_tablet.jpeg";
import logo2 from "../../img/mars_logo.png";
import photo4 from "../../img/mars_photo_1.png";
import photo5 from "../../img/mars_photo_2.png";
import photo6 from "../../img/mars_photo_3.png";
import logo3 from "../../img/sneakers_spa_logo.png";
import photo7 from "../../img/sneakers_spa_app.PNG";
import photo8 from "../../img/sneakers_spa_app_2.PNG";
import photo9 from "../../img/sneakers_spa_app_3.PNG";
import photo10 from "../../img/sneakers_spa_app_4.PNG";

export default function Projects(){

    const photos = [
        photo1,
        photo2,
        photo3
    ];

    const photos2 = [
        photo4,
        photo5,
        photo6
    ];

    const photos3 = [
        photo7,
        photo8,
        photo9,
        photo10
    ];

    const photosComponents = (photosArray) => photosArray.map((item, index) => (
        <div key={index} className="photo" style={{ backgroundImage: `url(${item})` }}/>
    ))

    return (
        <section id="projects" className="project-section">
            <div className="project">
                <div className="left">
                    <img src={logo} alt="logo" className="logo"/>
                    <div>
                        <p>Project duration: 1.5 years</p>
                        <p>Team size: 1</p>
                    </div>
                </div>
                <div className="right">
                    <div className="photos">
                        {photosComponents(photos)}
                    </div>
                    <h3>The Floor Is Lava Ecosystem</h3>
                    <ul>
                        <li>Next.js website for clients with booking, Stripe payments and access to games rankings.</li>
                        <li>Next.js app for employees with booking creation/management, inventory management, PoS with cash payments and integrated Stripe terminal for card payments, attractions management through Azure Hybrid Connections.</li>
                        <li>Node.js + MySQL backend with a custom, made by me booking system, online and in person card payments with Stripe and EPSON ticket printer, PDF tickets generation, games’ data and rankings and many others.</li>
                        <li>Node.js backend app with 5 games for LED floors, integrated QR code scanner for booking verification, connected through Socket.io with tablet for user input and a tv for score/game status display.</li>
                        <li>React Native app for team creation/selection, game/level selection, booking verification, game status displaying.</li>
                        <li>React Native app with a LED floor gameboard simulator and game creator.</li>
                        <li>Next.js frontend app for a display with score and game status. </li>
                    </ul>
                </div>
            </div>
            <div className="project" style={{ borderTop: "solid 1px #333" }}>
                <div className="left">
                    <img src={logo3} alt="logo" className="logo"/>
                    <div>
                        <p>Project duration: 6 months</p>
                        <p>Team size: 1</p>
                    </div>
                </div>
                <div className="right">
                    <div className="photos">
                        {photosComponents(photos3)}
                    </div>
                    <h3>Sneakers Spa - Android and iOS app</h3>
                    <ul>
                        <li>React Native app for clients and employees, with Stripe payments, handling creation of new orders, payments, status of made orders, managing offered services and its pricing.</li>
                        <li>Next.js website for clients, with business info and contact form.</li>
                        <li>Node.js + MySQL backend deployed in Azure for managing all business logic.</li>
                        <li>Application went through verification process and got listed in Apple App Store and Google's Play Store.</li>
                    </ul>
                </div>
            </div>
            <div className="project" style={{ borderTop: "solid 1px #333" }}>
                <div className="left">
                    <img src={logo2} alt="logo" className="logo"/>
                    <div>
                        <p>Project duration: 4 years</p>
                        <p>Team size: 9</p>
                    </div>
                </div>
                <div className="right">
                    <div className="photos">
                        {photosComponents(photos2)}
                    </div>
                    <h3>Mars - ERP for logistics company</h3>
                    <ul>
                        <li>Vue.js + Electron.js frontend app for employees of a logistics company.</li>
                        <li>Node.js + MySQL backend with microservice infrastructure deployed in multiple instances in Azure.</li>
                        <li>Application is being used worldwide for managing contracts and its status, tracking containers, synchronizing data with 3rd party software, managing clients, budget, financial results, goals, KPIs, client base and advanced statistics.</li>
                        <li>Contains a custom security system with different roles and access right for each user.</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};