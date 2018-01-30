import React, { Component } from 'react';
import Square from './square';

const TURNS = ['X', 'O'];

export default class Game extends Component {
  constructor(props) {
    super(props);

    this.init();
  }

  init() {
    this.matrix = Array(9).fill(null);
    this.winner = null;

    this.state = {
      turn: TURNS[0],
      matrix: this.matrix
    };
  }

  onSquareClick(index) {
    if (this.winner) {
      return;
    }

    if (this.matrix[index] === null) {
      this.matrix[index] = this.state.turn;

      this.setState({
        matrix: this.matrix,
        turn: this.state.turn === TURNS[0] ? TURNS[1] : TURNS[0],
      });
    }
  }

  isSolved() {
    let solutions = [[0,4,8],[2,4,6]];
    let i = solutions.length;

    for (var x=0; x<=6; x+=3) {
      solutions[i++] = [x, x+1, x+2];
    }

    for (var y=0; y<=2; y+=1) {
      solutions[i++] = [y, y+3, y+6];
    }

    for (var j=0; j < solutions.length; j++) {
      let [a, b, c] = solutions[j];
      let [x, y, z] = [
        this.matrix[a],
        this.matrix[b],
        this.matrix[c]
      ];

      if (x && x === y && y === z) {
        this.winner = x;
        return true;
      }
    }

    return false;
  }

  renderSquare(index) {
    return <Square 
      onClick={ () => this.onSquareClick(index) }
      value={ this.state.matrix[index] }/>
  }

  render() {
    return (
      <div className="status">
        <div className="turn">
          { this.isSolved() ? 
            'Winner: ' + this.winner 
            : 'Player: ' + this.state.turn } 
        </div>

        <div className="board">
          <div className="board-row">
            { this.renderSquare(0) }
            { this.renderSquare(1) }
            { this.renderSquare(2) }
          </div>
          <div className="board-row">
            { this.renderSquare(3) }
            { this.renderSquare(4) }
            { this.renderSquare(5) }
          </div>
          <div className="board-row">
            { this.renderSquare(6) }
            { this.renderSquare(7) }
            { this.renderSquare(8) }
          </div>
        </div>
        <button
          onClick={ () => this.init() }
          className="restart-btn">
          Start Over
        </button>
      </div>
    );
  }
}
