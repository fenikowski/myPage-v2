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
import photo11 from "../../img/tfil_booking.png";
import photo12 from "../../img/sneakers_spa_app_5.PNG";
import photo13 from "../../img/mars_photo_4.png";


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { useCallback, useEffect, useMemo, useRef } from "react";
import { getElementDistanceFromTop } from "../../utils/usefullFunctions";

export default function Projects(){

    const photos = [
        photo1,
        photo2,
        photo11,
        photo3,
    ];

    const photos2 = [
        photo4,
        photo5,
        photo6,
        photo13
    ];

    const photos3 = [
        photo7,
        photo8,
        photo12,
        photo9,
        photo10,
    ];

    // refs
    const project1 = useRef(null);
    const project2 = useRef(null);
    const project3 = useRef(null);
    const company1 = useRef(null);
    const company2 = useRef(null);
    const company3 = useRef(null);

    const refs = useMemo(() => [project1, project2, project3], []);
    const refsLogo = useMemo(() => [company1, company2, company3], []);

    // callbacks
    const handleScroll = useCallback(() => {
        refs.forEach((ref, index) => {
            const offsetTop = getElementDistanceFromTop(ref.current);
            if ((window.scrollY + window.innerHeight) > (offsetTop + ref.current.clientHeight / 2)) {
                ref.current.classList.add("active");
                refsLogo[index].current.classList.add("active");
            } else if((window.scrollY + window.innerHeight) < offsetTop) {
                ref.current.classList.remove("active");
                refsLogo[index].current.classList.remove("active");
            }
        })
    }, [refs, refsLogo]);

    // effects
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        // code cleanup
        return () => window.removeEventListener("scroll", handleScroll);
    }, [handleScroll]);

    const photosComponents = (photosArray, photoHeight) => photosArray.map((item, index) => (
        <SwiperSlide key={index}>
            <div className="photo" style={{ backgroundImage: `url(${item})`, height: photoHeight }}/>
        </SwiperSlide>
    ))

    const swiperComponent = (photosArray, slides = [1, 2, 2, 3], photoHeight = '30vh') => (
        <Swiper
            modules={[Autoplay]}
            spaceBetween={"20px"}
            style={{ width: '100%' }}
            loop
            autoplay={{
                delay: 1500,
                disableOnInteraction: true
            }}
            breakpoints={{
                0: {
                    slidesPerView: slides[0],
                },
                400: {
                    slidesPerView: slides[1],
                },
                768: {
                    slidesPerView: slides[2],
                },
                1024: {
                    slidesPerView: slides[3],
                },
            }}
        >
            {photosComponents(photosArray, photoHeight)}
        </Swiper>
    );

    return (
        <section id="projects" className="project-section">
            <div className="project">
                <div ref={company1} className="left">
                    <img src={logo} alt="logo" className="logo"/>
                    <div>
                        <p>Project duration: 1.5 years</p>
                        <p>Team size: 1</p>
                        <p>Link to the web:</p>
                        <a href="https://polite-cliff-01cc56703.5.azurestaticapps.net" target="_blank" rel="noreferrer">www.thefloorislava.es</a>
                    </div>
                </div>
                <div className="right">
                    <div ref={project1} className="photos">
                        {swiperComponent(photos)}
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
                <div ref={company2} className="left">
                    <img src={logo3} alt="logo" className="logo"/>
                    <div>
                        <p>Project duration: 6 months</p>
                        <p>Team size: 1</p>
                        <p>Link to the web:</p>
                        <a href="https://agreeable-mushroom-014b22e03.4.azurestaticapps.net" target="_blank" rel="noreferrer">www.sneakers-spa.es</a>
                    </div>
                </div>
                <div className="right">
                    <div ref={project2} className="photos">
                        {swiperComponent(photos3, [3,3,3,4], '60vmin')}
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
                <div ref={company3} className="left">
                    <img src={logo2} alt="logo" className="logo"/>
                    <div>
                        <p>Project duration: 4 years</p>
                        <p>Team size: 9</p>
                        <p>Link to the web:</p>
                        <a href="https://martico.com/" target="_blank" rel="noreferrer">www.martico.com</a>
                    </div>
                </div>
                <div className="right">
                    <div ref={project3} className="photos">
                        {swiperComponent(photos2)}
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