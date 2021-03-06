import React from 'react';
import { View, Text, FlatList, SafeAreaView } from 'react-native'
import Box from '../components/FriendList'


const FRIENDS = [
    { name: 'Perez', age: 23 },
    { name: 'Paul', age: 23 },
    { name: 'Leti', age: 24 },
    { name: 'Jona', age: 25 },
    { name: 'Jerry', age: 26 },
    { name: 'Jacob', age: 27 },
    { name: 'Opoka', age: 35 },
    { name: 'Mandy', age: 23 },
    { name: 'Owen', age: 23 },
    { name: 'Peter', age: 23 },
    { name: 'Joseph', age: 23 },
    { name: 'Ryan', age: 23 },
    { name: 'Dan', age: 23 },
    { name: 'Drake', age: 23 },
]




const ColorPallete = () => {

    return (
        <SafeAreaView>
            <FlatList
                data={FRIENDS}
                keyExtractor={item => item.name}
                renderItem={({ item }) => (
                    <Box name={item.name} age={item.age} />
                )
                }
            />

        </SafeAreaView>
    )
}

export default ColorPallete