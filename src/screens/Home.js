import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';


const Home = ({ navigation }) => {
    const myButton = {
        backgroundColor: "dodgerblue",
        padding: 20,
        marginTop: 20,
        borderRadius: 30,
        textAlign: "center",
        color: "white"
    }

    const container = {
        padding: 20
    }
    return (
        <View style={container}>
            <TouchableOpacity onPress={() => { navigation.navigate('ColorPallete') }}>
                <Text style={myButton}>Hello World</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { navigation.navigate('ColorList') }}>
                <Text style={myButton}>Colors</Text>
            </TouchableOpacity>
        </View>
    )
}


export default Home