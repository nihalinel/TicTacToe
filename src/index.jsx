// This file is the bridge between the component you created in the App.js file and the web browser

import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client"; //React’s library to talk to web browsers (React DOM)
import "./styles.css"; //The styles for your components

import App from "./App"; //The component you created in App.js

// Brings all the pieces together and injects the final product into index.html in the public folder.
const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
