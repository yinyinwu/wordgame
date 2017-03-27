import React, { Component } from 'react';
import ControlsLayout from './ControlsLayout'
import isWord from '../../config/WordsCheck'
import store from '../Store/store'

class ControlsContainer extends Component {
  constructor(props){
    super(props)
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.checkWord = this.checkWord.bind(this);
    this.updateWord = this.updateWord.bind(this);
    this.isPossible = this.isPossible.bind(this);
    this.state = { value: "", isWord: null }
    this.initStore();
  }

  handleKeyPress(e){
    if (e.key === 'Enter') {
      this.checkWord()
    }
  }

  updateWord(e) {
    console.log(`curr word: ${e.target.value}`)
    this.setState({value: e.target.value, isWord: null})
  }

  isPossible(){
    return true;
  }

  checkWord(){
    this.setState({value: "", isWord: this.isPossible() && isWord(this.state.value)})
  }

  initStore(){
    store.subscribe(() => {
      console.log("store changed: ", store.getState())
      this.setState({storeState: store.getState()})
    })
   
  }

  handleIncrement() {
    console.log("incrementing")
    store.dispatch({type: "INCREMENT"})
  }

  render(){
    return (
      <ControlsLayout isWord={this.state.isWord} value={this.state.value} onChange={this.updateWord} onKeyPress={this.handleKeyPress} onIncrement={this.handleIncrement}
      storeState={this.state.storeState}/>
    )
  }
}

export default ControlsContainer