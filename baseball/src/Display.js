import React, { Component } from 'react';
import './App.css';

class Display extends Component {

    render() {
        return (
            <div className="App">
                <h1 data-testid="heading">At Bat:</h1>
                <ul>
                    <li data-testid="ballcount">Balls:{this.props.balls}</li>
                    <li data-testid="strikecount">Strikes:{this.props.strikes}</li>
                </ul>
            </div>
        );
    }
}

export default Display;