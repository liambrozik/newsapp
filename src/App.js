import React, { Component } from 'react';
import './App.css';
import Dashboard from './Dashboard.js';
import HolyShitMeter from './HolyShitMeter.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="header">
          <h1>HolyShit<span>News</span></h1>
        </header>
        <Dashboard title="Home" />
        <HolyShitMeter />
      </div>
    );
  }
}

export default App;
