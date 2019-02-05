import React, { Component } from 'react';
import './App.css';
import Dashboard from './Dashboard';
import Display from './Display';
class App extends Component {
  constructor() {
    super();
    this.state = {
      balls: 0,
      strikes: 0,

    }
  }
  reset = () => {
    this.setState({
      balls: 0,
      strikes: 0,
    })
  }
  ball = () => {
    if (this.state.balls < 3) {
      this.setState({
        balls: this.state.balls + 1,
      })
    } else {
      this.reset();
    }
  }
  strikeFoul = () => {
    if (this.state.strikes < 2) {
      this.setState({
        strikes: this.state.strikes + 1,
      })
    } else {
      this.reset();
    }
  }
  render() {
    return (
      <div className="App">
        <Dashboard reset={this.reset} strikeFoul={this.strikeFoul} ball={this.ball} />
        <Display balls={this.state.balls} strikes={this.state.strikes} />
      </div>
    );
  }
}

export default App;
