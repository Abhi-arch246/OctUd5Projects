import './App.css'
import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Login from './Login'
import Home from './Home'

function App() {



  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/home" component={() => <Home />} />
      </Switch>
    </Router>
  );
}

export default App;
