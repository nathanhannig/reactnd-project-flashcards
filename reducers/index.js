import { RECEIVE_DECKS, SAVE_DECK } from '../actions'

function decks (state = {}, action) {
  switch (action.type) {
    case RECEIVE_DECKS :
      return {
        ...state,
        ...action.decks,
      }
    case SAVE_DECK :
      return {
        ...state,
        ...action.deck
      }
    default :
      return state
  }
}

export default decks