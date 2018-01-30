import React, { Component } from 'react';
import Board from './board';

export default class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <div className="score">Score: 0</div>
          <div className="turn">Player: X</div>
          <Board />
        </div>
        <button className="restart-btn">Start Over</button>
      </div>
    );
  }
}
