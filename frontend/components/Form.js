import React from 'react'
import { connect } from 'react-redux'
import { inputChange, postQuiz } from '../state/action-creators'

export function Form(props) {

  const onChange = evt => {
    props.inputChange(evt);
  }

  const onSubmit = evt => {
    evt.preventDefault();
    props.postQuiz(props.newQuestion, props.newTrueAnswer, props.newFalseAnswer);
  }

  return (
    <form id="form" onSubmit={onSubmit}>
      <h2>Create New Quiz</h2>
      <input
        maxLength={50}
        onChange={onChange}
        id="newQuestion"
        placeholder="Enter question"
        value={props.newQuestion}
      />
      <input
        maxLength={50}
        onChange={onChange}
        id="newTrueAnswer"
        placeholder="Enter true answer"
        value={props.newTrueAnswer}
      />
      <input
        maxLength={50}
        onChange={onChange}
        id="newFalseAnswer"
        placeholder="Enter false answer"
        value={props.newFalseAnswer}
      />
      <button
        id="submitNewQuizBtn"
        type='submit'
        disabled={!(props.newFalseAnswer.trim() && props.newTrueAnswer.trim() && props.newQuestion.trim())}>Submit new quiz</button>
    </form>
  )
}
const mapStateToProps = (state) => {
  return {
    newFalseAnswer: state.form.newFalseAnswer,
    newTrueAnswer: state.form.newTrueAnswer,
    newQuestion: state.form.newQuestion
  }
}
export default connect(mapStateToProps, {inputChange, postQuiz})(Form)
