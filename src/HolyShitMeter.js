import React, { Component } from 'react';
import './HolyShitMeter.css';

class HolyShitMeter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      slider: 0
    }
  }
  render() {
    return (
      <div className="HolyShitMeter">
            <div>HolyShit<span>Meter</span></div>
          <label htmlFor="slider">{this.state.slider}</label>
          <input onChange={() => this.sliderChange()}
          id="slider" type="range" min="0" max="100" step="1" defaultValue="0"/>
      </div>
    );
  }

  sliderChange() {
    this.setState({
      slider: document.getElementById("slider").value
    });
  }
}

export default HolyShitMeter;
