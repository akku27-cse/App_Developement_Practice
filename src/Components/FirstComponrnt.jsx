/* eslint-disable react-native/no-inline-styles */
/* eslint-disable semi */
import React, { Component } from 'react'
import { Button, Text, View } from 'react-native'

export class FirstComponrnt extends Component {
  render() {
    return (
      <View>
        <Text style={{fontSize:40}}> textInComponent </Text>
        <Button title="Hello"/>
      </View>
    )
  }
}

export default FirstComponrnt
