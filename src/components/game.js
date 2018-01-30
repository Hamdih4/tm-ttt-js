import React, { Component } from 'react';
import Board from './board';

export default class Game extends Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <button className="restart-btn">Start Over</button>
      </div>
    );
  }
}
