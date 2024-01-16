// ❗ You don't need to add extra action creators to achieve MVP
import axios from "axios"
import { MOVE_COUNTERCLOCKWISE, MOVE_CLOCKWISE, SET_IS_FETCHING,SET_QUIZ_INTO_STATE, SET_SELECTED_ANSWER, SET_INFO_MESSAGE, INPUT_CHANGE } from "./action-types"
export function moveClockwise(i) { 
  if (i === 5) {
    i = 0
  } else {
    i += 1
  }
  return {type: MOVE_CLOCKWISE, payload: i}
}

export function moveCounterClockwise(i) { 
  if (i === 0) {
    i = 5; 
  } else {
    i = i - 1
  }
  return {type: MOVE_COUNTERCLOCKWISE, payload: i}
}

export function selectAnswer(selectedAnswer, e) { 
  document.querySelector('.selected').classList.remove('selected')
  e.target.classList.add('selected')
  return {type: SET_SELECTED_ANSWER, payload: selectedAnswer}
}

export function setMessage(message) { 
  return { type: SET_INFO_MESSAGE, payload: message }
}

export function setQuiz(data) { 
  return {type: SET_QUIZ_INTO_STATE, payload: data}
}

export function inputChange(e) {
  return {type: INPUT_CHANGE, payload: {name: e.target.id, value: e.target.value}}
 }

export function resetForm() { 
}

export const setIsFetching = (isFetching) => {
  return {type: SET_IS_FETCHING, payload: isFetching}
}

// ❗ Async action creators
export function fetchQuiz() {
  return function (dispatch) {
    dispatch(setIsFetching(true))
    axios.get('http://localhost:9000/api/quiz/next')
      .then((res) => {
        dispatch(setQuiz(res.data))
      }).catch((err) => {
      console.error(err)
      }).finally(() => dispatch(setIsFetching(false)))
    // First, dispatch an action to reset the quiz state (so the "Loading next quiz..." message can display)
    // On successful GET:
    // - Dispatch an action to send the obtained quiz to its state
  }
}
export function postAnswer(answer_id, quiz_id) {
  return function (dispatch) {
    axios.post('http://localhost:9000/api/quiz/answer', {answer_id: answer_id, quiz_id: quiz_id})
      .then((res) => {
        console.log(res);
        dispatch(setMessage(res.data.message))
        dispatch(fetchQuiz())
      }).catch((err) => {
      console.error(err)
    })
    // On successful POST:
    // - Dispatch an action to reset the selected answer state
    // - Dispatch an action to set the server message to state
    // - Dispatch the fetching of the next quiz
  }
}
export function postQuiz(question, truth, fal) {
  return function (dispatch) {
    axios.post('http://localhost:9000/api/quiz/new', { question_text: question, true_answer_text: truth, false_answer_text: fal })
      .then((res) => {
      console.log(res)
    })
    // On successful POST:
    // - Dispatch the correct message to the the appropriate state
    // - Dispatch the resetting of the form
  }
}
// ❗ On promise rejections, use log statements or breakpoints, and put an appropriate error message in state
