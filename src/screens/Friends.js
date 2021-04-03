import React from 'react';
import { Text, View, FlatList } from 'react-native';

const COLORS = [
    {
        name: 'yellow',
        hexcolor: '#ffbff0'
    },
    {
        name: 'orange',
        hexcolor: '#ff9c38'
    },
    {
        name: 'purple',
        hexcolor: '#800080'
    },
    {
        name: 'blue',
        hexcolor: '#008080'
    },
    {
        name: 'gray',
        hexcolor: '#506c5c'
    },
    {
        name: 'lightgreen',
        hexcolor: '#8ab671'
    },
    {
        name: 'lightgray',
        hexcolor: 'cbbeb5'
    },
    {
        name: 'white',
        hexcolor: 'ffffff'
    }
]

const Box = ({ name, hexcolor }) => {

    const boxStyle = {
        padding: 20,
        backgroundColor: hexcolor,
        color: 'white',
        fontWeight: 'bold'
    }
    return (
        <View>
            <Text style={boxStyle}>{name} : {hexcolor}</Text>
        </View>
    )
}

const ColorList = () => {

    return (
        <FlatList
            data={COLORS}
            keyExtractor={item => item.name}
            renderItem={({ item }) => (
                <Box name={item.name} hexcolor={item.hexcolor} />
            )}


        />
    )
}





export default ColorList