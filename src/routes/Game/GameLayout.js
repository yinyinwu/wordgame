/*
Clear the settings 
Game Over */

import Board from '../Board/BoardContainer'
import Scoreboard from '../Scoreboard/ScoreboardContainer'
import Controls from '../Controls/ControlsContainer'
import React, { Component } from 'react';

const GameLayout = (props) => {
  return (
    <div>
      <Board handleTileClick={props.handleTileClick} />
      <Scoreboard />
      <Controls />
    </div>
  )
}

export default GameLayout