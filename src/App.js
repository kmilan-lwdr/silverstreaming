import React, { useState, useEffect } from 'react';
import './App.css';
import { Route, Switch, Redirect, HashRouter, Link } from 'react-router-dom'
import ViewContainer from './Containers/ViewContainer';
import BroadcastContainer from './Containers/BroadcastContainer';
import LandingContainer from './Containers/LandingContainer';

function App() {

  const [viewerMode, setMode] = useState(true);

  function handleClick(e) {
    e.preventDefault();
    setMode(!viewerMode);
  }

  return (
    <div className="App">
      <HashRouter basename="/">
        <Link to='/' className="AppHeader">
          Silverstreaming Demo
        </Link>
      
        <Switch>
          <Route path="/home" component={LandingContainer} />
          <Route path="/watch/:id" component={ViewContainer} />
          <Route exact path="/" render={() => (<Redirect to="/home" />)} />           
          <Route path="/broadcast/:id" component={BroadcastContainer}/>      
          <Route path="*" render={() => (<Redirect to="/home" />)} />
        </Switch>
      </HashRouter>
      
    </div>
  );
}

export default App;
