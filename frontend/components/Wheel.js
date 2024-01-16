import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import {moveCounterClockwise, moveClockwise} from '../state/action-creators'
const mapStateToProps = (state) => {
  return {
    index: state.wheel
  }
}
function Wheel(props) {
  return (
    <div id="wrapper">
      <div id="wheel">
        <div
          className={`cog ${props.index === 0  ? 'active': ''}`}
          style={{ "--i": 0 }}
          id='0'
        >{props.index === 0  ? 'B': ''}</div>
        <div
          className={`cog ${props.index === 1 ? 'active': ''}`}
          style={{ "--i": 1 }}
          id='1'
        >{props.index === 1  ? 'B': ''}</div>
        <div
          className={`cog ${props.index === 2 ? 'active': ''}`}
          style={{ "--i": 2 }}
          id='2'
        >{props.index === 2  ? 'B': ''}</div>
        <div
          className={`cog ${props.index === 3 ? 'active': ''}`}
          style={{ "--i": 3 }}
          id='3'
        >{props.index === 3  ? 'B': ''}</div>
        <div
          className={`cog ${props.index === 4 ? 'active': ''}`}
          style={{ "--i": 4 }}
          id='4'
        >{props.index === 4  ? 'B': ''}</div>
        <div
          className={`cog ${props.index === 5 ? 'active': ''}`}
          style={{ "--i": 5 }}
          id='5'
        >{props.index === 5 ? 'B': ''}</div>{/* --i is a custom CSS property, no need to touch that nor the style object */}
      </div>
      <div id="keypad">
        <button id="counterClockwiseBtn" onClick={() => props.moveCounterClockwise(props.index)}>Counter clockwise</button>
        <button id="clockwiseBtn" onClick={() => props.moveClockwise(props.index)}>Clockwise</button>
      </div>
    </div>
  )
}
export default connect(mapStateToProps, { moveCounterClockwise, moveClockwise })(Wheel)