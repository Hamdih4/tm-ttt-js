import React, { Component } from 'react';
import Square from './square';

export default class Board extends React.Component {
  constructor(props) {
    super(props);

    this.matrix = Array(9).fill(null);
    this.players = ['X','O'];

    this.state = {
      turn: null,
      matrix: this.matrix
    };
  }

  nextPlayer() {
    if (this.state.turn === this.players[0]) {
      this.setState({value: this.players[1]})
    } else {
      this.setState({value: this.players[0]})
    }
  }

  onSquareClick(index) {
    this.matrix[index] = 'X';
    this.setState({matrix: this.matrix});
  }

  renderSquare(index) {
    return <Square 
      onClick={ () => this.onSquareClick(index) }
      value={ this.state.matrix[index] }/>
  }

  render() {
    return (
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
    );
  }
}
