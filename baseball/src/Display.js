import React, { Component } from 'react';
import './App.css';
import Dashboard from './Dashboard';

class Display extends Component {
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
    foulBall = () => {
        if(this.state.balls < 3){
        this.setState({
            balls: this.state.balls + 1,
        })}else{
            this.reset();
        }
    }
    strike = () => {
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
                <h1>At Bat:</h1>
                <ul>
                    <li>Balls:{this.state.balls}</li>
                    <li>Strikes:{this.state.strikes}</li>
                </ul>
                <Dashboard reset={this.reset} strike={this.strike} foulBall={this.foulBall}/>
            </div>
        );
    }
}

export default Display;