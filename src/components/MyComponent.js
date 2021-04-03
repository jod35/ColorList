import React from 'react';
import { Text, View, StyleSheet } from 'react-native';


const MyComponent = ({ name, color }) => {

    const colorBox = {
        backgroundColor: color,
        padding: 20,

    }

    return (
        <View style={colorBox}>
            <Text style={styles.boxText}>{name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    boxText: {
        color: 'white'
    }
})
export default MyComponent