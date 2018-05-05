import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import HangGames from './pages/hangGames/HangGames';
import Login from './pages/login/Login';
import Home from './pages/home/Home';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Login} />
          <Route path="/home" component={Home} />
          <Route path="/games/:id" component={HangGames} />
        </div>
      </Router>
    );
  }
}

export default App;
