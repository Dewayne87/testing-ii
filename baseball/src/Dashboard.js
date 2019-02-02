import React, { Component } from 'react';
import './App.css';

class Dashboard extends Component {

    render() {
        return (
            <div className="dash">
                <button onClick={this.props.strike}>Strike</button>
                <button onClick={this.props.foulBall}>Foul</button>
                <button onClick={this.props.foulBall}>Ball</button>
                <button onClick={this.props.reset}>Hit</button>
            </div>
        );
    }
}

export default Dashboard;