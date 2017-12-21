import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './movie.js';

class App extends Component {
  render() {
    return (
      <div>
        <h2>Lord of the Rings movies:</h2>
        <Movie title="The Fellowship of the ring" hours="2" minutes="58"></Movie>
        <Movie title="The Two Towers" hours="2" minutes="59"></Movie>
        <Movie title="The Return of the King" hours="3" minutes="21"></Movie>
      </div>
    );
  }
}

export default App;
