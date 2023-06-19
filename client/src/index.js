import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import 'simplebar-react/dist/simplebar.min.css';

const root = createRoot(document.getElementById("root"));
root.render(
  // <StrictMode>
    <Router>
      <App/>
    </Router>
  // </StrictMode>
);
