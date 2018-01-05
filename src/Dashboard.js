import React, { Component } from 'react';
import './Dashboard.css';
import Feed from './Feed.js';

class Dashboard extends Component {
  render() {
    return (
      <div className="Dashboard">
        <Feed title="Business" />
        <Feed title="Tech" />
        <Feed title="Art" />
      </div>
    );
  }
}

export default Dashboard;
