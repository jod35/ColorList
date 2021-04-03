import React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native'
import MyComponent from './src/components/MyComponent'
import FriendList from './src/components/FriendList'



export default function App() {

  return (

    <View  >
      <Text style={styles.text}>List of Colors</Text>
      <ScrollView style={styles.container}>

        <MyComponent name="JOnathan" color="red" />
        <MyComponent name="JANE" color="orange" />
        <MyComponent name="Jean" color="yellow" />
        <MyComponent name="JOn" color="brown" />
        <MyComponent name="JOnathan" color="blue" />
        <MyComponent name="JOnathan" color="indigo" />
        <MyComponent name="JOnathan" color="violet" />
        <MyComponent name="JOnathan" color="cyan" />
        <MyComponent name="JANE" color="orange" />
        <MyComponent name="Jean" color="yellow" />
        <MyComponent name="JOn" color="green" />
        <MyComponent name="JOnathan" color="blue" />
        <MyComponent name="JOnathan" color="indigo" />
        <MyComponent name="JOnathan" color="violet" />
        <MyComponent name="JOnathan" color="red" />
        <MyComponent name="JANE" color="orange" />
        <MyComponent name="Jean" color="yellow" />
        <MyComponent name="JOn" color="brown" />
        <MyComponent name="JOnathan" color="blue" />
        <MyComponent name="JOnathan" color="indigo" />
        <MyComponent name="JOnathan" color="violet" />
        <MyComponent name="JOnathan" color="cyan" />
        <MyComponent name="JANE" color="orange" />
        <MyComponent name="Jean" color="yellow" />
        <MyComponent name="JOn" color="green" />
        <MyComponent name="JOnathan" color="blue" />
        <MyComponent name="JOnathan" color="indigo" />
        <MyComponent name="JOnathan" color="violet" />
        <Text style={{
          fontWeight: "bold", padding: 20
        }}>A list of friends</Text>
        <FriendList />
      </ScrollView>

    </View>

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