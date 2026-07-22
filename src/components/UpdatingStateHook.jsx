import { View, Text, Button } from 'react-native';
import React, { useEffect, useState } from 'react';

const UpdatingStateHook = () => {
    const [count, setCount] = useState(0);
    const [score, setScore] = useState(10);

    // useEffect(() => {
    //     console.log("This is the UseEffectHook");
    // }, [count]);
    // [abc] ------> yeh batata hai ki tumhe kis state k leeye apne Hook ko Update krna hai agr mn count p click karunga tou UseEffect use hoga warna nhi
    return (
        <View>

            <Text style={{ fontSize: 30, fontWeight: 'condensedBold', fontStyle: 'italic' }}>UpdatingStateHook</Text>

            <Text style={{ fontSize: 30, fontWeight: 'bold', fontStyle: 'italic' }}>count: {count}</Text>
            <Button title='Count' onPress={() => setCount(count + 1)} />


            <Text style={{ fontSize: 30, fontWeight: 'bold', fontStyle: 'italic' }}>Score: {score}</Text>
            <Button title='score' onPress={() => setScore(score + 10)} />

            <InfoCount counter={count} Score={score}/>
        </View> 
    );
};


const InfoCount = ({counter,Score}) => {
        useEffect(()=>{
            console.log("This is the Child Component")
        },[counter]);
    return (
        <View>
            <Text style={{ fontSize: 30, fontWeight: 'condensedBold', fontStyle: 'italic' }}>UpdatingStateHook</Text>

            <Text style={{ fontSize: 30, fontWeight: 'bold', fontStyle: 'italic' }}>count: {counter}</Text>


            <Text style={{ fontSize: 30, fontWeight: 'bold', fontStyle: 'italic' }}>Score: {Score}</Text>
        </View>
    );

};

export default UpdatingStateHook;