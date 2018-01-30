import React, { Component } from 'react';
import Square from './square';

const TURNS = ['X', 'O'];

export default class Board extends Component {
  constructor(props) {
    super(props);

    this.matrix = Array(9).fill(null);

    this.state = {
      turn: TURNS[0],
      matrix: this.matrix
    };
  }

  onSquareClick(index) {
    this.matrix[index] = this.state.turn;
    this.setState({
      matrix: this.matrix,
      turn: this.state.turn === TURNS[0] ? TURNS[1] : TURNS[0],
    });
  }

  renderSquare(index) {
    return <Square 
      onClick={ () => this.onSquareClick(index) }
      value={ this.state.matrix[index] }/>
  }

  render() {
    return (
      <div className="status">
        <div className="score">Score: 0</div>
        <div className="turn">
          Player: { this.state.turn }
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
      </div>
    );
  }
}
