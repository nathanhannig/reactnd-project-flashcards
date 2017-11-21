import React, { Component } from 'react'
import { StyleSheet, ScrollView, View, Text } from 'react-native'
import { connect } from 'react-redux'
import Card from './Card'
import CardSection from './CardSection'
import Button from './Button'

class ShowQuiz extends Component {
  static navigationOptions = ({ navigation }) => {
    const { deckTitle } = navigation.state.params

    return {
      title: `${deckTitle} Quiz`
    }
  }

  state = {
    screen: 'question',
    question: 1,
    correct: 0,
  }

  handleSwitch = () => {
    this.setState(() => {
      if(this.state.screen === 'answer'){
        return {screen: 'question'}
      }

      return {screen: 'answer'}
    })
  }

  handleCorrect = () => {
    const { deckId } = this.props.navigation.state.params
    const deck = this.props.decks[deckId]

    this.setState((prevState) => {
      //Check if no more questions, send to score screen
      if(this.state.question === deck.questions.length) {
        return {
          screen: 'score',
          correct: prevState.correct + 1
        }
      }

      return {
        screen: 'question',
        question: prevState.question + 1,
        correct: prevState.correct + 1
      }
    })
  }

  handleIncorrect = () => {
    const { deckId } = this.props.navigation.state.params
    const deck = this.props.decks[deckId]

    this.setState((prevState) => {
      //Check if no more questions, send to score screen
      if(this.state.question === deck.questions.length) {
        return {
          screen: 'score'
        }
      }

      return {
        screen: 'question',
        question: prevState.question + 1
      }
  })
  }

  handleRestart = () => {
    this.setState(() => {
      return {
        screen: 'question',
        question: 1,
        correct: 0
      }
    })
  }

  quizScreen = () => {
    const {
      container,
      topContainer,
      bottomContainer,
      questionContainer,
      questionStyle,
      headerStyle,
      buttonContainer,
      correctButton,
      incorrectButton,
      buttonText
    } = styles
    const { deckId } = this.props.navigation.state.params
    const deck = this.props.decks[deckId]

    return (
      <View style={container}>
        <Card>
          <CardSection>
            <View style={topContainer}>
              <View style={questionContainer}>
                <ScrollView contentContainerStyle={{flexGrow : 1, justifyContent : 'center'}}>
                  <Text style={headerStyle}>
                    {this.state.screen === 'question'
                    ? 'Question '
                    : 'Answer '}
                    {this.state.question} of {deck.questions.length}
                    </Text>
                  <Text style={questionStyle}>
                    {this.state.screen === 'question'
                    ? deck.questions[this.state.question-1].question
                    : deck.questions[this.state.question-1].answer}
                  </Text>
                </ScrollView>
              </View>
              <View style={buttonContainer}>
                <Button
                  onPress={this.handleSwitch}>
                  Show
                  {this.state.screen === 'question'
                    ? ' Answer'
                    : ' Question'}
                </Button>
              </View>
            </View>
          </CardSection>
        </Card>
        <Card>
          <CardSection>
            <View style={bottomContainer}>
              <View style={buttonContainer}>
                <Button
                  overrideButton={correctButton}
                  overrideText={buttonText}
                  onPress={this.handleCorrect}>
                  Correct
                </Button>
                <Button
                  overrideButton={incorrectButton}
                  overrideText={buttonText}
                  onPress={this.handleIncorrect}>
                  Incorrect
                </Button>
              </View>
            </View>
          </CardSection>
        </Card>
      </View >
    )
  }

  scoreScreen = () => {
    const {
      container,
      topContainer,
      bottomContainer,
      scoreContainer,
      buttonContainer,
      deckButton,
      buttonText,
      percentageStyle,
      percentSymbol,
      scoreStyle
    } = styles

    const { deckId } = this.props.navigation.state.params
    const deck = this.props.decks[deckId]

    return (
      <View style={container}>
        <Card>
          <CardSection>
            <View style={topContainer}>
              <View style={scoreContainer}>
              <Text style={percentageStyle}>
                {Math.round((this.state.correct/deck.questions.length) * 100)}<Text style={percentSymbol}>%</Text>
              </Text>
              <Text style={scoreStyle}>You answered {this.state.correct} of {deck.questions.length} correct</Text>
              </View>
              <View style={buttonContainer}>
              <Button
                onPress={this.handleRestart}>
                Restart Quiz
              </Button>
            </View>
            </View>
          </CardSection>
        </Card>
        <Card>
          <CardSection>
            <View style={bottomContainer}>
              <View style={buttonContainer}>
                <Button
                  overrideButton={deckButton}
                  overrideText={buttonText}
                  onPress={() => { this.props.navigation.goBack() }}>
                  Back to Deck
                </Button>
              </View>
            </View>
          </CardSection>
        </Card>
      </View >
    )
  }

  render() {
    if(this.state.screen === 'score') {
      return (
        this.scoreScreen()
      )
    }

    return (
      this.quizScreen()
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
  bottomContainer: {
    flex: 1,
    justifyContent: 'space-around',
    height: 100,
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
    color: '#757575',
    textAlign:'center',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  correctButton: {
    backgroundColor: '#61B329',
    borderColor: '#61B329',
    marginVertical: 6,
  },
  incorrectButton: {
    backgroundColor: '#b71845',
    borderColor: '#b71845',
  },
  deckButton: {
    backgroundColor: '#007aff',
    borderColor: '#007aff',
  },
  buttonText: {
    color: '#fff',
  },
  scoreContainer: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    height: 400,
  },
  percentageStyle: {
    fontSize: 46,
    textAlign:'center',
    color: '#757575',
    marginBottom: 20,
  },
  percentSymbol: {
    fontSize: 32,
  },
  scoreStyle: {
    fontSize: 24,
    textAlign:'center',
  },
})

function mapStateToProps (state) {
  return {
    decks: state
  }
}

export default connect(
  mapStateToProps,
)(ShowQuiz)