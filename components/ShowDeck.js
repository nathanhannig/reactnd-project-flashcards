import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { connect } from 'react-redux'
import Card from './Card'
import CardSection from './CardSection'
import Button from './Button'

class ShowDeck extends Component {
  static navigationOptions = ({navigation}) => {
    const { deckTitle } = navigation.state.params

    return {
      title: `${deckTitle}`
    }
  }

  render() {
    const {
      container,
      deckContainer,
      startQuizContainer,
      titleContainer,
      titleStyle,
      cardCountStyle,
      buttonContainer,
      quizButton,
      buttonText,
      noCardsText
    } = styles
    const { deckId } = this.props.navigation.state.params
    const deck = this.props.decks[deckId]

    return (
      <View style={container}>
          <Card>
            <CardSection>
              <View style={deckContainer}>
                <View style={titleContainer}>
                  <Text style={titleStyle}>{deck.title}</Text>
                  <Text style={cardCountStyle}>{deck.questions.length} cards</Text>
                </View>
                <View style={buttonContainer}>
                  <Button
                    onPress={() => this.props.navigation.navigate('CreateCard', { deckId: deckId, deckTitle: deck.title })}>
                    Add Card
                  </Button>
                </View>
              </View>
            </CardSection>
          </Card>
          <Card>
            <CardSection>
              <View style={startQuizContainer}>
                {deck.questions.length
                  ? <Button
                      overrideButton={quizButton} overrideText={buttonText}
                      onPress={() => this.props.navigation.navigate('ShowQuiz', { deckId: deckId, deckTitle: deck.title })}>
                      Start Quiz
                    </Button>
                  : <Text style={noCardsText}>
                      There are no cards in this deck, please add a card to Start Quiz
                    </Text>
                }
              </View>
            </CardSection>
          </Card>
      </View >
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
  },
  deckContainer: {
    flex: 1,
    height: 300,
    justifyContent: 'space-around',
  },
  startQuizContainer: {
    flex: 1,
    justifyContent: 'space-around',
    height: 80,
  },
  titleContainer: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleStyle: {
    fontSize: 30,
    textAlign:'center',
  },
  cardCountStyle: {
    fontSize: 16,
    color: '#757575',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quizButton: {
    backgroundColor: '#007aff',
    borderColor: '#007aff',
  },
  buttonText: {
    color: '#fff',
  },
  noCardsText: {
    marginHorizontal: 20,
    textAlign: 'center',
    color: '#757575'
  },
})

function mapStateToProps (state) {
  return {
    decks: state
  }
}

export default connect(
  mapStateToProps,
)(ShowDeck)