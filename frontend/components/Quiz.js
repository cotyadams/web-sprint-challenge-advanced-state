import React from 'react'
import { connect } from 'react-redux';
import { selectAnswer, fetchQuiz, postAnswer } from '../state/action-creators';
function Quiz(props) {
  console.log(props)
  if (!props.quiz_id) {
    props.fetchQuiz();
  }
  return (
    <div id="wrapper">
      {
        // quiz already in state? Let's use that, otherwise render "Loading next quiz..."
        !props.isFetching ? (
          <>
            <h2>{props.question}</h2>

            <div id="quizAnswers">
              <div
                className={props.answers && props.answers[0] == props.selectedAnswer ? 'answer selected' : 'answer'}
                onClick={(e) => props.selectAnswer(props.answers[0], e)}
              >
                {props.answers && props.answers[0] ? props.answers[0].text : ''}
                <button
                  onClick={(e) => props.selectAnswer(props.answers[0], e)}
                >
                  {props.answers && props.answers[0] == props.selectedAnswer ? 'SELECTED': 'Select'}
                </button>
              </div>

              <div
                className={props.answers && props.answers[1] == props.selectedAnswer ? 'answer selected' : 'answer'}
                onClick={(e) => props.selectAnswer(props.answers[1], e)}
              >
                {props.answers && props.answers[1] ? props.answers[1].text : ''}
                <button
                  onClick={(e) => props.selectAnswer(props.answers[1], e)}
                >
                  {props.answers && props.answers[1] == props.selectedAnswer ? 'SELECTED': 'Select'}
                </button>
              </div>
            </div>

            <button
              id="submitAnswerBtn"
            onClick={() => props.postAnswer(props.selectedAnswer.answer_id, props.quiz_id)} disabled={!props.selectedAnswer.text}>Submit answer</button>
          </>
        ) : 'Loading next quiz...'
      }
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    isFetching: state.quiz.isFetching,
    question: state.quiz.question,
    quiz_id: state.quiz.quiz_id,
    answers: state.quiz.answers,
    infoMessage: state.infoMessage,
    selectedAnswer: state.quiz.selectedAnswer
  }
}
export default connect(mapStateToProps, {selectAnswer, fetchQuiz, postAnswer})(Quiz)
