import React, { useCallback, useState, useEffect, useRef } from "react";
import "./style/LoadingPage.css";

export default function LoadingScreen({ imagesLoaded }) {
  // refs
  const textContener = useRef(null);

  // states
  const [loadingAnimationStarted, setLoadingAnimationStarted] = useState(false);
  const [squaresArrayState, setSquaresArrayState] = useState(false);

  // callbacks
  const loadingTextAnimation = useCallback(() => {
    const text = "Loading";
    for (let i = 0; i <= text.length; i++) {
      const letter = document.createElement("div");
      letter.textContent = text[i];
      textContener.current.appendChild(letter);
      letter.style.animation = `letters 2s ${i * 0.3}s ease infinite`;
    };
  },[]);

  const wave = useCallback((index) => {
    const { length } = squaresArrayState;
    if (
      index - 51 <= length &&
      index % 50 !== 0 &&
      index - 51 >= 0
    ) {
      squaresArrayState[index - 51].classList.add("disappear");
    }
    if (index - 50 <= length && index - 50 >= 0) {
      squaresArrayState[index - 50].classList.add("disappear");
    }
    if (
      index - 49 <= length &&
      (index + 1) % 50 !== 0 &&
      index - 49 >= 0
    ) {
      squaresArrayState[index - 49].classList.add("disappear");
    }
    if (index + 1 < length && (index + 1) % 50 !== 0) {
      squaresArrayState[index + 1].classList.add("disappear");
    }
    if (index + 51 < length && (index + 1) % 50 !== 0) {
      squaresArrayState[index + 51].classList.add("disappear");
    }
    if (index + 50 < length) {
      squaresArrayState[index + 50].classList.add("disappear");
    }
    if (index + 49 < length && index % 50 !== 0) {
      squaresArrayState[index + 49].classList.add("disappear");
    }
    if (
      index - 1 <= length &&
      index % 50 !== 0 &&
      index - 1 >= 0
    ) {
      squaresArrayState[index - 1].classList.add("disappear");
    }
  },[squaresArrayState]);
  
  const disappear = useCallback(() => {
    squaresArrayState
      .filter(square => square.className === "square disappear")
      .forEach((item) => {
        wave(parseInt(item.getAttribute("indexNumber")));
      });
  },[squaresArrayState, wave]);

  const whenPageLoaded = useCallback(() => {
    // save page loaded flag in session storage
    sessionStorage.setItem("pageLoaded", true);

    // change text value and animation
    textContener.current.textContent = "CLICK ON THE SCREEN";
    textContener.current.style.animation = "miganie 1s infinite";

    squaresArrayState.forEach(function(square, index) {
      // ON CLICK EVENT LISTENER FOR SQUARES

      square.addEventListener("click", function() {
        square.classList.add("disappear");
        textContener.current.style.animation = "";
        textContener.current.style.opacity = "0";

        //background disappearance
        document.querySelector("div.gradient").style.left = `-100%`;
        setTimeout(() => document.querySelector("div.gradient").style.opacity = "0", 2000);
        setTimeout(() => document.body.classList.remove("stop-scrolling"), 3500);
        setTimeout(() => document.querySelector("div.wrap").remove(), 5000);

        wave(index);

        for (let i = 1; i < 50; i++) {
          setTimeout(disappear, i * 100);
        }
      });
    });
  }, [wave, disappear, squaresArrayState]);


  const createLoadingScreen = useCallback(() => {
    if (sessionStorage.getItem("pageLoaded") === "true") {
      document.querySelector("div.wrap").remove();
    } else {
      window.addEventListener("scroll", window.scrollTo(0, 0));
      document.body.classList.add("stop-scrolling");

      // inicialization

      // loading text animation
      loadingTextAnimation();

      // array for squares
      let squaresArray = [];

      // squares size algorythm
      let squaresSize = 0;
      if (window.innerHeight > window.innerWidth) {
        squaresSize = window.innerHeight / 50 + "px";
      } else {
        squaresSize = window.innerWidth / 50 + "px";
      };

      for (let i = 0; i < (window.innerWidth * window.innerHeight) / 50; i++) {
        const square = document.createElement("div");
        document
          .querySelector("div.loadingScreen div.squares")
          .appendChild(square);
        square.classList.add("square");
        square.style.width = squaresSize;
        square.style.height = squaresSize;
        square.style.background = `conic-gradient(from 40deg, #08091e, #000, #08091e)`;
        square.setAttribute("indexNumber", i);
        squaresArray.push(square);
        if (square.offsetTop > window.innerHeight) break;
      }

      setSquaresArrayState(squaresArray);
    }
  }, [loadingTextAnimation]);
  
  // effects
  useEffect(() => {
    !loadingAnimationStarted && createLoadingScreen();
    setLoadingAnimationStarted(true);
  },[loadingAnimationStarted, createLoadingScreen]);

  useEffect(() => {
    imagesLoaded && !sessionStorage.getItem("pageLoaded") && whenPageLoaded()
  },[imagesLoaded, whenPageLoaded]);

  return (
    <div className="wrap">
      <div className="loadingScreen">
        <div className="gradient"/>
        <div className="squares"/>
        <div className="loading" ref={textContener}/>
      </div>
    </div>
  );
};