import React from "react";
import ReactDOM from "react-dom/client";

import "./components/css/Main.css";

import App from "./App";

const root = document.querySelector("#root");

if (root) ReactDOM.createRoot(root).render(<App />);
