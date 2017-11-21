import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { connect } from 'react-redux'
import { saveDeck } from '../actions'
import Card from './Card'
import CardSection from './CardSection'
import Input from './Input'
import Button from './Button'
import { saveDeckAPI } from '../utils/api'

class CreateCard extends Component {
  static navigationOptions = ({ navigation }) => {
    const { deckTitle } = navigation.state.params

    return {
      title: `Add ${deckTitle} Card`
    }
  }

  state = {
    question: '',
    answer: ''
  }

  handleAdd = () => {
    const { dispatch, navigation } = this.props
    const { deckId } = this.props.navigation.state.params
    const deck = this.props.decks[deckId]

    const replacementDeck = {
      key: deckId,
      entry: { ...deck }
    }

    replacementDeck.entry.questions.push({
      question: this.state.question,
      answer: this.state.answer
    })

    dispatch(saveDeck({
      [replacementDeck.key]: replacementDeck.entry
    }))

    navigation.goBack()

    saveDeckAPI(replacementDeck)
  }

  render() {
    const {
      container,
      createCardContainer,
      questionContainer,
      answerContainer,
      questionStyle,
      answerStyle,
      inputContainer,
      buttonContainer
    } = styles

    return (
      <View style={container}>
        <Card>
          <CardSection>
            <View style={createCardContainer}>
              <View style={questionContainer}>
                <Text style={questionStyle}>What is the question?</Text>
              </View>
              <View style={inputContainer}>
                <Input placeholder="Question"
                  value={this.state.question}
                  onChangeText={(question) => this.setState({ question }) } />
              </View>
              <View style={answerContainer}>
                <Text style={answerStyle}>What is the answer?</Text>
              </View>
              <View style={inputContainer}>
                <Input placeholder="Answer"
                  value={this.state.answer}
                  onChangeText={(answer) => this.setState({ answer }) } />
              </View>
              <View style={buttonContainer}>
                <Button
                disabled={this.state.question.length && this.state.answer.length ? false : true}
                  onPress={this.handleAdd}>
                  Add
                </Button>
              </View>
            </View>
          </CardSection>
        </Card>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
  },
  createCardContainer: {
    flex: 1,
    justifyContent: 'space-around',
    height: 400,
  },
  questionContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  answerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  questionStyle: {
    fontSize: 30,
    lineHeight: 50,
    textAlign:'center',
  },
  answerStyle: {
    fontSize: 30,
    lineHeight: 50,
    textAlign:'center',
  },
  inputContainer: {
    flex: 1,
  },
  buttonContainer: {
    height: 50,
  },
})

function mapStateToProps (state) {
  return {
    decks: state
  }
}

export default connect(
  mapStateToProps,
)(CreateCard)