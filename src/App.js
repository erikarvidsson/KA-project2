import React from 'react';
import { Route, Switch, Link } from "react-router-dom";
import './App.css';

import Home from "./view/";
import About from "./view/about";
import LogIn from "./view/login";
function App() {
  // console.log(Route)
  return (
    <div className="App">
      <header className="App-header">
        <Link to="/">Home</Link>
        <Link to="/About">About Page</Link>
        <Link to="/Login">Login page</Link>


        <Route path="/" exact component={Home} />
        <Route path="/About" component={About} />
        <Route path="/Login" component={LogIn} />
      </header>
    </div>
  );
}

export default App;
