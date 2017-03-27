import React, { Component } from 'react';
import BoardLayout from '../Board/BoardLayout'
import Letters from '../../config/Letters'

class BoardContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tiles: Letters.getLetters()
    }
  }

  render() {
    return (
      <BoardLayout handleTileClick={this.props.handleTileClick} tiles={this.state.tiles} />
    )
  }
}

export default BoardContainer;