import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import Card from './Card'
import CardSection from './CardSection'
import Button from './Button'

class ShowDeck extends Component {
  static navigationOptions = ({ navigation }) => {
    const { deckName } = navigation.state.params

    return {
      title: `${deckName}`
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
      buttonText
    } = styles

    return (
      <View style={container}>
          <Card>
            <CardSection>
              <View style={deckContainer}>
                <View style={titleContainer}>
                  <Text style={titleStyle}>Historical Figures of the 1600s</Text>
                  <Text style={cardCountStyle}>2 cards</Text>
                </View>
                <View style={buttonContainer}>
                  <Button
                  onPress={() => this.props.navigation.navigate('CreateCard')}>
                  Add Card</Button>
                </View>
              </View>
            </CardSection>
          </Card>
          <Card>
            <CardSection>
              <View style={startQuizContainer}>
                <Button
                  overrideButton={quizButton} overrideText={buttonText}
                  onPress={() => this.props.navigation.navigate('ShowQuiz', { deckName: 'Redux' })}>
                  Start Quiz
                </Button>
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
    color: 'gray',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quizButton: {
    backgroundColor: 'blue',
    borderColor: 'blue',
  },
  buttonText: {
    color: 'white',
  },
})

export default ShowDeck