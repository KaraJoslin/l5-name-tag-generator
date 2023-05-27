import React from "react";
import ReactDOM from "react-dom";
import NameTag from "./NameTag.js";
import "./styles.css";

const App = () => (
  <div className="App">
    <h1>Name Tag Generator</h1>
    <NameTag name="May May" />
    <NameTag name="Morgan" />
    <NameTag name="SteveO" />
    <NameTag name="Jodi" />
    <NameTag name="Ann Marie" />
    <NameTag name="Alisha" />
  </div>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
