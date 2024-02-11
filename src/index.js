import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Search from "./search";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Search />);
