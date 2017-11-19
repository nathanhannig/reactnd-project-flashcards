import React from 'react'
import { StyleSheet, View } from 'react-native'

const CardSection = (props) => {
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  )
}

const styles = StyleSheet.create({
  containerStyle: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    padding: 5,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
})

export default CardSection