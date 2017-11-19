import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import Card from './Card'
import CardSection from './CardSection'
import Input from './Input'
import Button from './Button'

const CreateDeck = (props) => {
  const { container, createDeckContainer, titleContainer, titleStyle, inputContainer, buttonContainer } = styles

  return (
    <View style={container}>
      <Card>
        <CardSection>
          <View style={createDeckContainer}>
            <View style={titleContainer}>
              <Text style={titleStyle}>What is the title of your new deck?</Text>
            </View>
            <View style={inputContainer}>
              <Input placeholder="Deck title"
                value={''}
                onChangeText={() => {return true}} />
            </View>
            <View style={buttonContainer}>
              <Button
              onPress={() => props.navigation.goBack()}>
                Create
              </Button>
            </View>
          </View>
        </CardSection>
      </Card>
    </View>
  )
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

export default CreateDeck