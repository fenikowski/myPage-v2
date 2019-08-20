import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./layout/App";
import * as serviceWorker from "./serviceWorker";
import "simplebar"; // or "import SimpleBar from 'simplebar';" if you want to use it manually.
import "simplebar/dist/simplebar.css";

ReactDOM.render(
  <Router>
    <App />
  </Router>,

  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// let flag = false;
// if (document.querySelector("div.background-wrapper") !== undefined) {

//   window.addEventListener("scroll", function() {

//     if (window.scrollY < 2500 && flag === false) {
//       // flag = true;
//       name.style.top = `${170 + window.scrollY / 1.2}px`;
//       specialty.style.top = `${323 + window.scrollY / 1.2}px`;
//     } else {
//       // name.style.top = "1500px";
//       // specialty.style.top = "1600px";
//       // name.style.animation = "";
//       // specialty.style.animation = "";
//     }

//   });
// }
