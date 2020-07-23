import React from "react";
import { HashRouter, Route } from "react-router-dom";

import "./App.css";

import Home from "./routes/Home";
import About from "./routes/About";
import Navigation from "./components/Navigation";

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home}></Route>
      <Route path="/about" exact={true} component={About}></Route>
    </HashRouter>
  );
}

export default App;
