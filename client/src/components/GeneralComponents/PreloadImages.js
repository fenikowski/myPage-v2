import React, { useEffect, useState } from 'react';
import image_20190130_225004 from "../../img/20190130_225004.jpg"
import charity2 from "../../img/charity2.png"
import examplePhoto from "../../img/examplePhoto.jpg"
import gif2 from "../../img/gif2.gif"
import MongoLogo from "../../img/MongoLogo.png"
import potatoWalking from "../../img/potatoWalking.gif"
import UdemyLogo from "../../img/UdemyLogo.png"
import bgc0 from "../../img/bgc0.png"
import charity3 from "../../img/charity3.png"
import flagES from "../../img/flagES.png"
import GimpLogo from "../../img/GimpLogo.png"
import myPageScreen from "../../img/myPageScreen.png"
import PythonLogo from "../../img/PythonLogo.png"
import UvLogo from "../../img/UvLogo.png"
import bgc1 from "../../img/bgc1.png"
import chromeLogoJPG from "../../img/chromeLogo.jpg"
import flagUS from "../../img/flagUS.png"
import githubLogo from "../../img/githubLogo.png"
import myPageScreen2 from "../../img/myPageScreen2.png"
import ReactLogo from "../../img/ReactLogo.png"
import UwLogo from "../../img/UwLogo.png"
import bgc2 from "../../img/bgc2.png"
import chromeLogoPNG from "../../img/chromeLogo.png"
import galaxy from "../../img/galaxy.jpg"
import GitLogo from "../../img/GitLogo.png"
import myPageScreen3 from "../../img/myPageScreen3.png"
import ReactScreen from "../../img/ReactScreen.png"
import vintage_arrow from "../../img/vintage_arrow.png"
import bgc3 from "../../img/bgc3.png"
import contact1 from "../../img/contact1.png"
import game1off from "../../img/game1off.gif"
import GitScreen from "../../img/GitScreen.png"
import mysql from "../../img/mysql.svg"
import ReduxLogo from "../../img/ReduxLogo.png"
import ViuLogo from "../../img/ViuLogo.png"
import bgc4 from "../../img/bgc4.png"
import contact2 from "../../img/contact2.png"
import game1on from "../../img/game1on.gif"
import HTMLLogo from "../../img/HTMLLogo.png"
import MySqlLogo from "../../img/MySqlLogo.png"
import SuperBrosScreen from "../../img/SuperBrosScreen.png"
import VueLogo from "../../img/VueLogo.png"
import bgc5 from "../../img/bgc5.png"
import contact3 from "../../img/contact3.png"
import game2off from "../../img/game2off.gif"
import javaScriptLogo from "../../img/javaScriptLogo.png"
import NativeLogo from "../../img/NativeLogo.jpg"
import SuperBrosScreen2 from "../../img/SuperBrosScreen2.png"
import white_background from "../../img/white_background.jfif"
import biuroScreen from "../../img/biuroScreen.png"
import contact5 from "../../img/contact5.png"
import game2on from "../../img/game2on.gif"
import JavaScriptScreen from "../../img/JavaScriptScreen.png"
import nicebarber1 from "../../img/nicebarber1.png"
import tayga1 from "../../img/tayga1.png"
import yummy from "../../img/yummy.gif"
import biuroScreen2 from "../../img/biuroScreen2.png"
import CSSLogo from "../../img/CSSLogo.png"
import game3off from "../../img/game3off.gif"
import loading from "../../img/loading.gif"
import nicebarber2 from "../../img/nicebarber2.png"
import tayga2 from "../../img/tayga2.png"
import browsers from "../../img/browsers.png"
import designerbarber1 from "../../img/designerbarber1.png"
import game3on from "../../img/game3on.gif"
import map from "../../img/map.png"
import nodeImage from "../../img/nodeImage.jpg"
import todolistscreen from "../../img/todolistscreen.png"
import charity1 from "../../img/charity1.png"
import designerbarber2 from "../../img/designerbarber2.png"
import gif1 from "../../img/gif1.gif"
import MarticoLogo from "../../img/MarticoLogo.png"
import NodeLogo from "../../img/NodeLogo.png"
import trees from "../../img/trees.png"


export default function PreloadImages({ setImagesLoaded }){
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setImagesLoaded(isLoaded);
  }, [setImagesLoaded, isLoaded]);

  useEffect(() => {
    const imageUrls = [ image_20190130_225004, charity2, examplePhoto, gif2, MongoLogo, potatoWalking, UdemyLogo, bgc0, charity3, flagES, GimpLogo, myPageScreen, PythonLogo, UvLogo, bgc1, chromeLogoJPG, flagUS, githubLogo, myPageScreen2, ReactLogo, UwLogo, bgc2, chromeLogoPNG, galaxy, GitLogo, myPageScreen3, ReactScreen, vintage_arrow, bgc3, contact1, game1off, GitScreen, mysql, ReduxLogo, ViuLogo, bgc4, contact2, game1on, HTMLLogo, MySqlLogo, SuperBrosScreen, VueLogo, bgc5, contact3, game2off, javaScriptLogo, NativeLogo, SuperBrosScreen2, white_background, biuroScreen, contact5, game2on, JavaScriptScreen, nicebarber1, tayga1, yummy, biuroScreen2, CSSLogo, game3off, loading, nicebarber2, tayga2, browsers, designerbarber1, game3on, map, nodeImage, todolistscreen, charity1, designerbarber2, gif1, MarticoLogo, NodeLogo, trees
    ];

    let loadedCount = 0;

    const loadImage = (url) => {
      const img = new Image();
      img.onload = () => {
        loadedCount++;
        if (loadedCount === imageUrls.length) {
          setIsLoaded(true);
        }
      };
      img.src = url;
    };

    imageUrls.forEach((url) => loadImage(url));
  }, []);

  return (<></>);
};