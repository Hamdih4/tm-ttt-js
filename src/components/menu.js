import React, { Component } from 'react';
import Game from './game';

export default class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nav: true,
      players: null
    }
  }

  singlePlayerHandler() {
    this.setState({
      nav: false,
      players: 1
    });
  }

  twoPlayersHandler() {
    this.setState({
      nav: false,
      players: 2
    });
  }

  exitGame() {
    this.setState({
      nav: true
    });
  }

  render() {
    return (
      <div className="menu">
        { this.state.nav ?
          <div className="game-intro">
            <div >
              To get started, click on one of the options below:
            </div>          
            <div>
              <button
                onClick={() => this.singlePlayerHandler() }
                className="menu-btn">1. Single Player</button>
            </div>
            <div>
              <button
                onClick={() => this.twoPlayersHandler() }
                className="menu-btn">2. Two Players</button>
            </div>
          </div>
          :
        <div>
          <div className="game-intro">
            To get started, click on one of the squares below:
          </div>
            <Game
              players={ this.state.players }
              exitGame={() => this.exitGame() }
            />
         </div>
        }
      </div>
    );
  }
}
