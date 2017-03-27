import React from 'react';
//import Letters from '../../config/Letters'
import Tile from '../Tile/TileContainer'
import './styles.css';

const BoardLayout = (props) => {
  var tiles = props.tiles.map((letter, index) => {
    return <Tile handleTileClick={props.handleTileClick} letter={letter} idx={index} key={index} />
  })
  return (
    <div className='Board'>
      { tiles }
    </div>
  )
}

export default BoardLayout;
