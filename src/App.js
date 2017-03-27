import React, { Component } from 'react';
import './App.css';
import BoardContainer from './routes/Board/BoardContainer'
import Scoreboard from './routes/Scoreboard/ScoreboardContainer'
import Controls from './routes/Controls/ControlsContainer'
import Game from './routes/Game/GameContainer'

class App extends Component {
  render() {
    return (
      <Game />
    );
  }
}

export default App;
