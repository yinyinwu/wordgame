import React from 'react';
import '../../../public/style.css'
import './styles.css'

const ControlsLayout = (props) => {
  // allow for default case where there isn't a word
  let isWord = ""
  if (props.isWord === true) isWord = "yes";
  if (props.isWord === false) isWord = "no";
  return (
    <div>
      <div className='Button'>New Game</div>
      <input placeholder='Enter word' value={props.value} onChange={props.onChange} onKeyPress={props.onKeyPress} className='textInput' autoFocus></input>
      <div style={{marginTop: 10}}>{isWord}</div>
      <div>Store State: {props.storeState}</div>
      <div className='Button' onClick={props.onIncrement}>Increment</div>

    </div>
  )
}

export default ControlsLayout