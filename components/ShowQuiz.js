import React, { Component } from 'react'
import { StyleSheet, ScrollView, View, Text } from 'react-native'
import Card from './Card'
import CardSection from './CardSection'
import Button from './Button'

class ShowQuiz extends Component {
  static navigationOptions = ({ navigation }) => {
    const { deckName } = navigation.state.params

    return {
      title: `${deckName} Quiz`
    }
  }

  render() {
    const {
      container,
      topContainer,
      guessContainer,
      questionContainer,
      questionStyle,
      headerStyle,
      buttonContainer,
      correctButton,
      incorrectButton,
      buttonText
    } = styles

    return (
      <View style={container}>
          <Card>
            <CardSection>
              <View style={topContainer}>
                <View style={questionContainer}>
                  <ScrollView contentContainerStyle={{flexGrow : 1, justifyContent : 'center'}}>
                    <Text style={headerStyle}>Question</Text>
                    <Text style={questionStyle}>This is a a real long question that will go on and on until the screen can no longer hold it's contents because the question is far to long for a small screen?< /Text>
                  </ScrollView>
                </View>
                <View style={buttonContainer}>
                  <Button>
                    Show Answer
                  </Button>
                </View>
              </View>
            </CardSection>
          </Card>
          <Card>
            <CardSection>
              <View style={guessContainer}>
                <View style={buttonContainer}>
                  <Button overrideButton={correctButton} overrideText={buttonText}>
                    Correct
                  </Button>
                  <Button overrideButton={incorrectButton} overrideText={buttonText}>
                    Incorrect
                  </Button>
                </View>
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
  topContainer: {
    flex: 1,
    height: 400,
    justifyContent: 'space-around',
  },
  guessContainer: {
    flex: 1,
    justifyContent: 'space-around',
    height: 110,
  },
  questionContainer: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  questionStyle: {
    fontSize: 26,
    textAlign:'center',
  },
  headerStyle: {
    fontSize: 16,
    color: 'gray',
    textAlign:'center',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  correctButton: {
    backgroundColor: 'green',
    borderColor: 'green',
    marginVertical: 6,
  },
  incorrectButton: {
    backgroundColor: 'red',
    borderColor: 'red',
  },
  buttonText: {
    color: 'white',
  },
})

export default ShowQuiz