import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './movie.js';

class App extends Component {
  render() {
    return (
      <div>
        <Movie title="The Fellowship of the ring" hours="2" minutes="58"></Movie>
        {this.props.body}
      </div>
    );
  }
}

export default App;
