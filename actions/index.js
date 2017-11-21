export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const SAVE_DECK = 'ADD_DECK'

export function receiveDecks (decks) {
  return {
    type: RECEIVE_DECKS,
    decks,
  }
}

export function saveDeck (deck) {
  return {
    type: SAVE_DECK,
    deck,
  }
}

export function addCard (deck) {
  return {
    type: ADD_CARD,
    deck,
  }
}