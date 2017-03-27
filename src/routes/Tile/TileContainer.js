import TileLayout from '../Tile/TileLayout'
import React, { Component } from 'react';
import { TileState } from '../../config/TileState'

class TileContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tileState: TileState.unflipped
    }

    this.flipTile = this.flipTile.bind(this)
  }

  flipTile(index) {
    //console.log(`flipped tile: ${index}`)
    this.props.handleTileClick(index)
    if (this.state.tileState === TileState.unflipped) {
      this.setState({
        tileState: TileState.flipped
      })
    } else if (this.state.tileState === TileState.flipped) {
      this.setState({
        tileState: TileState.used
      })
    }
  }

  render(){
    return (
      <TileLayout flipTile={() => this.flipTile(this.props.idx)}  tileState={this.state.tileState} letter={this.props.letter}/>
    )
  }

}

export default TileContainer