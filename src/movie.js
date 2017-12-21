import React, {Component} from 'react';

class Movie extends Component {
  render(){
    return (
      <div>
        <h1>The Lord of the Rings: A Trilogy</h1>
        <p>4h 37min</p>
        <ul>
        <li>Title: {this.props.title}</li>
        <li>Hours: {this.props.hours}</li>
        <li>Minutes: {this.props.minutes}</li>
        </ul>
      </div>
    )
  }
}

export default Movie
