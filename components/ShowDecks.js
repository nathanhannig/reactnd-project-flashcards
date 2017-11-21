import React, { Component } from 'react'
import { StyleSheet, FlatList, View, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { AppLoading} from 'expo'
import { receiveDecks } from '../actions'
import Card from './Card'
import CardSection from './CardSection'
import { getDecksAPI } from '../utils/api'
// import {AsyncStorage} from 'react-native'

class ShowDecks extends Component {
  state = {
    ready: false,
  }

  componentDidMount() {
    const { dispatch } = this.props

    // AsyncStorage.removeItem('Flashcards:decks')

    getDecksAPI()
      .then((decks) => dispatch(receiveDecks(decks)))
      .then(() => this.setState(() => ({ready: true})))
  }

  render() {
    const { titleContainer, titleStyle, cardCountStyle } = styles
    const { decks } = this.props
    const { ready } = this.state

    if (ready === false) {
      return <AppLoading />
    }

    const flattenData = Object.keys(this.props.decks).map((deckId) => {
      return {
        key: deckId,
        title: this.props.decks[deckId].title,
        cardCount: this.props.decks[deckId].questions.length,
      }
    })

    return (
      <View>
        <Card>
          <FlatList
            data={flattenData}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('ShowDeck', { deckId: item.key, deckTitle: item.title })}>
                  <CardSection>
                    <View style={titleContainer}>
                      <Text style={titleStyle}>{item.title}</Text>
                      <Text style={cardCountStyle}>{item.cardCount} cards</Text>
                    </View>
                  </CardSection>
                </TouchableOpacity>
              )
            }}
          />
        </Card>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 60,
  },
  titleStyle: {
    fontSize: 26,
    textAlign: 'center',
  },
  cardCountStyle: {
    fontSize: 16,
    color: '#757575',
  },
})

function mapStateToProps (state) {
  return {
    decks: state
  }
}

export default connect(
  mapStateToProps,
)(ShowDecks)