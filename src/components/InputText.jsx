import { View, Text, TextInput,Button } from 'react-native'
import React, { useState } from 'react'

const InputText = () => {
    const [username, setUsername] = useState('');
    return (
        <View>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>InputText</Text>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Username: {username}</Text>
            
            <TextInput style={{ borderWidth: 3, borderColor: 'orange', padding: 10, backgroundColor: 'white', borderRadius: 20,margin: 20 }} value={username}placeholder="Enter text here..." onChangeText={(text) => setUsername(text)} />

            <Button title="Submit" onPress={() => setUsername('')} />
        </View>
    )
}

export default InputText