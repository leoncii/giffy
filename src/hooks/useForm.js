import { useReducer } from 'react'
const ACTIONS = {
  UPDATE_KEYWORD: 'update_keyword',
  UPDATE_RATING: 'update_rating'
}

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.UPDATE_KEYWORD:
      return {
        ...state,
        keyword: action.payload
      }
    case ACTIONS.UPDATE_RATING:
      return {
        ...state,
        rating: action.payload
      }
    default:
      return state
  }
}

export const useForm = ({ initialRating, initialkeyword }) => {
  const [state, dispatch] = useReducer(reducer, {
    keyword: decodeURIComponent(initialRating),
    rating: initialRating,
    times: 0
  })

  const { keyword, times, rating } = state
  return {
    keyword,
    times,
    rating,
    updateKeyword: keyword => dispatch({ type: ACTIONS.UPDATE_KEYWORD, payload: keyword }),
    updateRating: rating => dispatch({ type: ACTIONS.UPDATE_RATING, payload: rating })
  }
}