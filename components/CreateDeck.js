import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { connect } from 'react-redux'
import { saveDeck } from '../actions'
import Card from './Card'
import CardSection from './CardSection'
import Input from './Input'
import Button from './Button'
import { saveDeckAPI } from '../utils/api'

class CreateDeck extends Component {
  state = {
    title: ''
  }

  handleCreate = () => {
    const { dispatch, navigation } = this.props

    const newDeck = {
      key: this.state.title.replace(/[^a-z0-9]/gmi, ''),
      entry: {
        title: this.state.title,
        questions: []
      }
    }

    dispatch(saveDeck({
      [newDeck.key]: newDeck.entry
    }))

    navigation.navigate('ShowDeck', { deckId: newDeck.key, deckTitle: newDeck.entry.title })

    this.setState({ title: '' })

    saveDeckAPI(newDeck)

  }

  render() {
    const {
      container,
      createDeckContainer,
      titleContainer,
      titleStyle,
      inputContainer,
      buttonContainer
    } = styles

    return (
      <View style={container}>
        <Card>
          <CardSection>
            <View style={createDeckContainer}>
              <View style={titleContainer}>
                <Text style={titleStyle}>What is the title of your new deck?</Text>
              </View>
              <View style={inputContainer}>
                <Input
                  placeholder="Deck title"
                  value={this.state.title}
                  onChangeText={(title) => this.setState({ title }) } />
              </View>
              <View style={buttonContainer}>
                <Button
                  disabled={this.state.title.length ? false : true}
                  onPress={this.handleCreate}
                >
                  Create
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
  createDeckContainer: {
    flex: 1,
    justifyContent: 'space-around',
    height: 300,
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleStyle: {
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

export default connect()(CreateDeck)