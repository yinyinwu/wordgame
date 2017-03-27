import React from 'react';
import './styles.css';
import { getTileString } from '../../config/TileState'

const TileLayout = (props) => {
  let tileClass = getTileString(props.tileState)
  console.log(`${tileClass} props: ${props.tileState}`)
  //let tileClass = _getTileClass(props.tileState)
  return (
    <div onClick={props.flipTile} className={['Tile', tileClass].join(' ')}>
      <div className='Letter'>{props.letter}</div>
    </div>
  )
}

export default TileLayout;
