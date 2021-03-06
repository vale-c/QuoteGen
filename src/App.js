import React, {Component} from 'react';
import './App.css';
import typewriter from './assets/img/typewriter.jpg';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: 'https://cors-anywhere.herokuapp.com/https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en',
      quote: 'Welcome to the Random Quote Generator. Enjoy!',
      author: 'Vale Calabrese'
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleTweetClick = this.handleTweetClick.bind(this);
  }

  componentDidMount() {
    this.handleClick();
  }

  handleClick() {
    fetch(this.state.url)
      .then(function (res) {
        return res.json();
      })
      .then(function (response) {
        this.setState({quote: response.quoteText, author: response.quoteAuthor});
      }.bind(this));
  }

  handleTweetClick() {
    window.open(`https://twitter.com/intent/tweet?text="${this.state.quote}"`)
  }

  render() {
    const quoteStyle = {
      fontFamily: 'Charmonman',
      backgroundColor: '#3E4B59',
      border: 'none',
      fontWeight: 600,
      lineHeight: '200%',
      borderRadius: 4,
      padding: 15,
      margin: '2em'
    }
    const imgStyle = {
      width: '35%',
      height: '35%',
      borderRadius: '15px',
      marginTop: '1em',
      opacity: '0.8'
    }

    
    return (
      <div className="App container">
        <h3 className="appauthor">Quote Machine</h3>
        <div className="container">
          <img
            className="bg-img bounce-in-top"
            src={typewriter}
            alt="typewriter"
            style={imgStyle}></img>
          <blockquote style={quoteStyle} className="text-center mx-auto">
            <q>{this.state.quote}</q>
            <p>{this.state.author}</p>
          </blockquote>
          <div className="btn-group" role="group">
            <button onClick={this.handleClick} className="btn btn-info">New Quote</button>

            <button onClick={this.handleTweetClick} className="btn btn-info">
              <i className="fa fa-twitter" aria-hidden="true"></i>&nbsp;Tweet</button>
          </div>
        </div>
      </div>

    );
  }
}

export default App;
