import React, { Component } from 'react';
import GameLayout from './GameLayout'
import Letters from '../../config/Letters'
//import store from '../Store/store'

class GameContainer extends Component {
  constructor(props){
    super(props)
    /*this.state({
      players: [],
      gameStatus: STARTED.NEW
    })*/
    //this.initStore();

    this._initBoard = this._initBoard.bind(this)
    this._initPlayers = this._initPlayers.bind(this)
    this.initGame = this.initGame.bind(this)
    this.handleTileClick = this.handleTileClick.bind(this)

    /*this.state = {
      tiles: Letters.getLetters()
    }*/
    this.originalTiles = Letters.getLetters();
    this.currentTiles = Array.apply(null, Array(3)).map(x => "")
  }

  _initPlayers(){
    
  }

  _initBoard(){
    /*this.setState({
      tiles: Letters.getLetters()
    })*/
  }

  initGame(){
    this._initPlayers();
    this._initBoard();
  }

  handleTileClick(index) {
    console.log(`tile flipped in game container: ${this.originalTiles[index]}`)
    if (this.currentTiles[index] === ""){
      this.currentTiles[index] = this.originalTiles[index]
    } 
    /*this.setState({
      tiles: tiles
    })*/
  }

  checkWord(word) {
    return true;
  }

  /*isPossible(word){
    var isPossible = true;
    const currentTilesCopy = currentTiles.slice(0).join("")
    word.split("").forEach((letter, index) => {
      if(currentTilesCopy.indexOf(letter) > 0){
        currentTilesCopy
      } else {

      }
    })
  }*/

  render(){
    return (
      <GameLayout handleTileClick={this.handleTileClick} />
    )
  }
}

export default GameContainer