import React, { Component } from 'react';
import './App.css';

class Dashboard extends Component {

    render() {
        return (
            <div className="dash">
                <button onClick={this.props.strikeFoul}>Strike</button>
                <button onClick={this.props.strikeFoul}>Foul</button>
                <button onClick={this.props.ball}>Ball</button>
                <button onClick={this.props.reset}>Hit</button>
            </div>
        );
    }
}

export default Dashboard;