import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const Welcomescreen = () => {
  return (
    <View style={{flex:1,alignItems:'center'}}>
     <Image source={require('../Images/welcome.png')}></Image>
    </View>
  )
}

export default Welcomescreen

const styles = StyleSheet.create({})