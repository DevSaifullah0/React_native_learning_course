import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'
import Child from './Child'


const Props = () => {
    const [count, setCount] = useState(0);
    // const arr = ['Bannana', 'Apple', 'Mango'];
    // const [item, setItem] = useState(arr);
    return (
        <View>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Props</Text>
            <Button title="Counter" onPress={() => setCount(count + 1)} />
            <Child data={count} />
            {/* <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Item Details </Text> */}
            {/* <Button title="Purchase" onPress={() => setItem(arr + " Purchased")} /> */}
            {/* <Child item={item} /> */}

        </View>
    );
};

export default Props