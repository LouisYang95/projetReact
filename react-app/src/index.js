import React from "react";
import { createRoot } from 'react-dom/client';
import App from "./component/App";
import "./css/index.css";

//react 18.6.0
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App tab="home" />);

// ReactDOM.render(<App />, document.getElementById("root")); // old version of react
