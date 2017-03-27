const TileState = {
  used: 0,
  flipped: 1, 
  unflipped: 2
}

const getTileString = (tileState) => {
  switch(tileState) {
    case TileState.flipped: 
      return "FlippedTile"
    case TileState.unflipped:
      return "UnflippedTile"
    case TileState.used:
      return "UsedTile"
    default: 
      return null
  }
}

module.exports = { TileState, getTileString } 