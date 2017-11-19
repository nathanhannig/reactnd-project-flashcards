import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import Card from './Card'
import CardSection from './CardSection'
import Input from './Input'
import Button from './Button'

class CreateCard extends Component {
  static navigationOptions = () => {
    return {
      title: 'Add Card'
    }
  }

  render() {
    const {
      container,
      createCardContainer,
      titleContainer,
      titleStyle,
      inputContainer,
      buttonContainer
    } = styles

    return (
      <View style={container}>
        <Card>
          <CardSection>
            <View style={createCardContainer}>
              <View style={titleContainer}>
                <Text style={titleStyle}>What is the question?</Text>
              </View>
              <View style={inputContainer}>
                <Input placeholder="Question"
                  value={''}
                  onChangeText={() => {return true}} />
              </View>
              <View style={titleContainer}>
                <Text style={titleStyle}>What is the answer?</Text>
              </View>
              <View style={inputContainer}>
                <Input placeholder="Answer"
                  value={''}
                  onChangeText={() => {return true}} />
              </View>
              <View style={buttonContainer}>
                <Button
                  onPress={() => this.props.navigation.goBack()}>
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

export default CreateCard