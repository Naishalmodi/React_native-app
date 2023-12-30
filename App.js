import { StyleSheet, Text, View } from 'react-native';
import React from 'react'
// import { NavigationContainer } from '@react-navigation/native'
// import { createNativeStackNavigator } from '@react-navigation/native-stack'
// import Welcomescreen from './screens/welcomescreen';

// import Stacknavigator from './Stacknavigator';

export default function App() {

    // const Stack = createNativeStackNavigator();
    return (
      <View>
        <Text>
          Hello Worlds
        </Text>
      </View>
        
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
