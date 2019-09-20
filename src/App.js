import React from 'react';
import { Route, Link } from "react-router-dom";
import './App.css';
import { createBrowserHistory } from 'history';

import Home from "./view/";
import About from "./view/about";
import LogIn from "./view/login";
import Library from './view/library';
import Explore from './view/explore';
import Search from './view/search';
import Notification from './view/notification';
import Profile from './view/profile';
import Konto from './view/konto';
import Settings from './view/settings';

const history = createBrowserHistory()

function App() {
  // console.log(Route)
  return (
    <div className="App">
      <header className="App-header">
        <Link to="/">Home</Link>
        <Link to="/About">About Page</Link>
        <Link to="/Login">Login page</Link>

        <div history={history}>
          <Route path="/" exact component={Home} />
          <Route path="/About" component={About} />
          <Route path="/Login" component={LogIn} />
          <Route path="/Library" component={Library} />
          <Route path="/Explore" component={Explore} />
          <Route path="/Search" component={Search} />
          <Route path="/Notification" component={Notification} />
          <Route path="/Profile" component={Profile} />
          <Route path="/Konto" component={Konto} />
          <Route path="/Settings" component={Settings} />
        </div>


      </header>
    </div>
  );
}

export default App;
