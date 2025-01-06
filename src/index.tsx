import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import './index.css';
import App from './App';
import 'simplebar-react/dist/simplebar.min.css';

// Ensure the 'root' element exists in the DOM
const rootElement = document.getElementById('root');

if (rootElement) {
  const root = createRoot(rootElement); 
  root.render(
    <Router>
      <App />
    </Router>
  );
} else {
  console.error("Root element not found");
}