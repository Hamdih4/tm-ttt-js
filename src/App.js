import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './components/components.css';
import Game from './components/game'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Tic-Tac-Toe Game</h1>
        </header>
        <p className="App-intro">
          To get started, click on one of the squares below:
        </p>

        <Game />
      </div>
    );
  }
}

export default App;
