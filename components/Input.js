import React from 'react'
import { StyleSheet, TextInput, View, Text } from 'react-native'

const Input = ({ placeholder, value, onChangeText }) => {
  const { inputStyle, containerStyle } = styles

  return (
    <View style={containerStyle}>
      <TextInput
        style={inputStyle}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    flex: 1,
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    height: 40,
  },
  containerStyle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
  },
})

export default Input