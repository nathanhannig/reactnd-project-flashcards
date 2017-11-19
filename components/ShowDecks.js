import React, { Component } from 'react'
import { StyleSheet, FlatList, View, Text, TouchableOpacity } from 'react-native'
import Card from './Card'
import CardSection from './CardSection'

const ShowDecks = (props) => {
  const { titleContainer, titleStyle, cardCountStyle } = styles

  return (
    <View>
      <Card>
        <FlatList
          data={[
            { key: '1', name: 'React' },
            { key: '2', name: 'Redux' },
            { key: '3', name: 'HTML' },
            { key: '4', name: 'Javascript' },
            { key: '5', name: 'HTML' },
            { key: '6', name: 'Python' },
            { key: '7', name: 'CSS' },
            { key: '8', name: 'Historical Figures of the 1600s' },
            { key: '9', name: 'Computer Games' },
            { key: '10', name: 'Mathematics' }]}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() => props.navigation.navigate('ShowDeck', { deckName: item.name })}>
                <CardSection>
                  <View style={titleContainer}>
                    <Text style={titleStyle}>{item.name}</Text>
                    <Text style={cardCountStyle}>{item.key} cards</Text>
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
    color: 'gray',
  },
})

export default ShowDecks