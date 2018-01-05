import React, { Component } from 'react';
import './News.css';

class News extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hover: null
        }
    }
  render() {
    return (
      <div className="News" 
        onClick={() => window.open(this.props.url,'_blank')}
        onMouseEnter={() => this.setState({hover: "hover"})}
        onMouseLeave={() => this.setState({hover: null})}>
        <div className="source">
            {this.props.source}
        </div>
        <div style={{
            backgroundImage: 'url(' + this.props.img + ')',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '100%',
            height: '250px'     
            }}></div>
        <div className={"text " + this.state.hover}>
            <h3>{this.props.title}</h3>
        
            <p className={"desc " + this.state.hover}>{this.props.description}</p>
            
        </div>
      </div>
    );
  }
}

export default News;
