import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

const Button = ({ disabled, onPress, overrideButton, overrideText, children }) => {
  const { buttonStyle, textStyle } = styles

  return (
    <TouchableOpacity disabled={disabled} onPress={onPress} style={[buttonStyle, overrideButton]}>
      <Text style={[textStyle, overrideText]}>
        {children}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  buttonStyle: {
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5,
  },
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10,
  },
})

export default Button