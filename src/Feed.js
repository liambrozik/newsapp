import React, { Component } from 'react';
import './Feed.css';
import News from './News.js';

class Feed extends Component {
    constructor(props) {
        super(props);

        this.state = {
            news: []
        }
    }
  render() {
    return (
      <div className="Feed">
        <h2>{this.props.title}</h2>
        <div className="FeedContent">
        {
            this.state.news.map((news, i) => 
            <News 
                key={i}
                source={news.source.name}
                title={news.title}
                description={news.description}
                url={news.url}
                img={news.urlToImage}
            />
            )
        }
        </div>
      </div>
    );
  }

  componentDidMount() {
    const list = [];
    fetch("https://newsapi.org/v2/top-headlines?category=business&language=en&apiKey=fcc1dacd0b7d4fd8bef4295ca4e04377")
    .then((response) => {
        response.json()
        .then((response) => {
            for (var i = 0; i < 5; i++) {
                list[i] = response.articles[i];
            }
            this.setState({
                news: list
            });
        });
    });

  }
}

export default Feed;
