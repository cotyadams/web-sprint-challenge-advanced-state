import React from 'react'
import { connect } from 'react-redux'
const mapStateToProps = (state) => {
  return {
    infoMessage: state.quiz.infoMessage
  }
}
function Message(props) {
  return <div id="message">{props.infoMessage}</div>
}
export default connect(mapStateToProps, {})(Message)
