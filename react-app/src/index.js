import React from "react";
import { createRoot } from 'react-dom/client';
import App from "./component/App";
import "./css/users.css";


const container = document.getElementById('root');
const root = createRoot(container);
// ReactDOM.render(<App />, document.getElementById("root"));
root.render(<App tab="home" />);
