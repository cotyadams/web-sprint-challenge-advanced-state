// ❗ You don't need to add extra reducers to achieve MVP
import { MOVE_COUNTERCLOCKWISE, MOVE_CLOCKWISE, SET_QUIZ_INTO_STATE, SET_IS_FETCHING, SET_SELECTED_ANSWER, SET_INFO_MESSAGE, INPUT_CHANGE } from "./action-types"
import { combineReducers } from 'redux'

const initialWheelState = 0
function wheel(state = initialWheelState, action) {
  switch (action.type) {
    case MOVE_COUNTERCLOCKWISE:
      return (action.payload)
    case MOVE_CLOCKWISE:
      return (action.payload)
    default:
      return state
  }
}

const initialQuizState = {
  quiz_id: '',
  question: '',
  answers: [],
  isFetching: false,
  selectedAnswer: {},
  infoMessage: ''
}
function quiz(state = initialQuizState, action) {
  switch (action.type) {
    case SET_IS_FETCHING:
      return { ...state, isFetching: action.payload }
    case SET_QUIZ_INTO_STATE:
      return {
        ...state,
        quiz_id: action.payload.quiz_id,
        answers: action.payload.answers,
        question: action.payload.question
      }
    case SET_SELECTED_ANSWER:
      return {
        ...state,
        selectedAnswer: action.payload
      }
    case SET_INFO_MESSAGE:
      return {
        ...state,
        infoMessage: action.payload
      }
    default:
      return state
  }
}


const initialFormState = {
  newQuestion: '',
  newTrueAnswer: '',
  newFalseAnswer: '',
}
function form(state = initialFormState, action) {
  switch (action.type) {
    case INPUT_CHANGE:
      console.log(action.payload.name)
      return {
        ...state,
        [action.payload.name]: action.payload.value
      }
  }
  return state
}

export default combineReducers({ wheel, quiz, form })
