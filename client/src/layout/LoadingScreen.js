import React from "react";
import { useEffect } from "react";
import "./style/LoadingPage.css";

export default function LoadingScreen() {
  useEffect(() => {
    createLoadingScreen();
    // eslint-disable-next-line
  },[]);

  const createLoadingScreen = function() {
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
      }

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

      let newArray = [];

      // AFTER LOADED
      function whenPageLoaded() {
        sessionStorage.setItem("pageLoaded", true);
        document.querySelector("div.loading").textContent = "CLICK ON THE SCREEN";
        document.querySelector("div.loading").style.animation = "miganie 1s infinite";

        squaresArray.forEach(function(square, index) {
          // ON CLICK EVENT LISTENER FOR SQUARES

          square.addEventListener("click", function() {
            square.classList.add("disappear");
            document.querySelector("div.loading").style.animation = "";
            document.querySelector("div.loading").style.opacity = "0";

            //background disappearance
            document.querySelector("div.gradient").style.left = `-100%`;
            setTimeout(function() {
              document.querySelector("div.gradient").style.opacity = "0";
            }, 2000);
            setTimeout(function() {
              document.body.classList.remove("stop-scrolling");
            }, 3500);
            setTimeout(function() {
              document.querySelector("div.wrap").remove();
            }, 5000);

            wave(index);

            for (let i = 1; i < 50; i++) {
              setTimeout(disappear, i * 100);
            }
          });
        });

        // DISAPPEARANCE FUNCTIONs FOR SQUARES

        function disappear() {
          squaresArray.forEach(function(square) {
            if (square.className === "square disappear") {
              newArray.push(square);
            }
          });

          newArray.forEach(function(item) {
            wave(parseInt(item.getAttribute("indexNumber")));
          });

          newArray = [];
        }

        function wave(index) {
          if (
            index - 51 <= squaresArray.length &&
            index % 50 !== 0 &&
            index - 51 >= 0
          ) {
            squaresArray[index - 51].classList.add("disappear");
          }
          if (index - 50 <= squaresArray.length && index - 50 >= 0) {
            squaresArray[index - 50].classList.add("disappear");
          }
          if (
            index - 49 <= squaresArray.length &&
            (index + 1) % 50 !== 0 &&
            index - 49 >= 0
          ) {
            squaresArray[index - 49].classList.add("disappear");
          }
          if (index + 1 < squaresArray.length && (index + 1) % 50 !== 0) {
            squaresArray[index + 1].classList.add("disappear");
          }
          if (index + 51 < squaresArray.length && (index + 1) % 50 !== 0) {
            squaresArray[index + 51].classList.add("disappear");
          }
          if (index + 50 < squaresArray.length) {
            squaresArray[index + 50].classList.add("disappear");
          }
          if (index + 49 < squaresArray.length && index % 50 !== 0) {
            squaresArray[index + 49].classList.add("disappear");
          }
          if (
            index - 1 <= squaresArray.length &&
            index % 50 !== 0 &&
            index - 1 >= 0
          ) {
            squaresArray[index - 1].classList.add("disappear");
          }
        }
      }

      // flag is set to delay loading screen dissapearance by 2s
      let flagForLoading = false;

      setTimeout(() => {
        flagForLoading = true;
      }, 2000);

      const readyStateCheckInterval = setInterval(function() {
        if (document.readyState === "complete" && flagForLoading === true) {
          clearInterval(readyStateCheckInterval);
          whenPageLoaded();
        }
      }, 100);
    }
  };

  const loadingTextAnimation = () => {
    const textContener = document.querySelector("div.loading");
    const text = "Loading";
    for (let i = 0; i <= text.length; i++) {
      const letter = document.createElement("div");
      letter.textContent = text[i];
      textContener.appendChild(letter);
      letter.style.animation = `letters 2s ${i * 0.3}s ease infinite`;
    }
  };

  return (
    <div className="wrap">
      <div className="loadingScreen">
        <div className="gradient"/>
        <div className="squares"/>
        <div className="loading"/>
      </div>
    </div>
  );
};
