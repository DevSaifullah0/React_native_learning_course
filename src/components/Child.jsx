import { View, Text } from 'react-native'
import React from 'react'

const Child = (props) => {
    // console.log(props.data)
    return (
        <View>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Child</Text>
            <Text style={{ fontSize: 20, fontWeight: 'bold' ,color: 'purple',alignContent: 'center',}}>Counter: {props.data}</Text>
            {/* <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Item from Parent 2: {props.item}</Text> */}
        </View>
    )
}

export default Child