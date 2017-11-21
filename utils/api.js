import { AsyncStorage } from 'react-native'

const DECKS_STORAGE_KEY = 'Flashcards:decks'

function formatDecksResults (results) {
  const dummyData = {
    React: {
      title: 'React',
      questions: [
        {
          question: 'What is React?',
          answer: 'A library for managing user interfaces'
        },
        {
          question: 'Where do you make Ajax requests in React?',
          answer: 'The componentDidMount lifecycle event'
        }
      ]
    },
    JavaScript: {
      title: 'JavaScript',
      questions: [
        {
          question: 'What is a closure?',
          answer: 'The combination of a function and the lexical environment within which that function was declared.'
        }
      ]
    }
  }

  if(results === null) {
    AsyncStorage.mergeItem(
      DECKS_STORAGE_KEY,
      JSON.stringify(dummyData)
    )
  }

  return results === null
    ? dummyData
    : JSON.parse(results)
}

export function getDecksAPI () {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
    .then(formatDecksResults)
}

export function saveDeckAPI ({ entry, key }) {
  return AsyncStorage.mergeItem(
    DECKS_STORAGE_KEY,
    JSON.stringify({
      [key]: entry
    })
  )
}
