import 'react-native-gesture-handler';
import React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native'
import MyComponent from './src/components/MyComponent'
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/screens/Home'
import ColorPallete from './src/screens/ColorPallete'
import ColorList from './src/screens/Friends'
import { createStackNavigator } from '@react-navigation/stack'

const stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name='Home' component={Home} />
        <stack.Screen name='ColorPallete' component={ColorPallete} />
        <stack.Screen name='ColorList' component={ColorList} />
      </stack.Navigator>
    </NavigationContainer>

  )
}

const styles = StyleSheet.create({
  container: {
    padding: 5
  },
  text: {
    fontWeight: 'bold',
    padding: 20,
    color: 'white',
    backgroundColor: 'blue'
  }
})