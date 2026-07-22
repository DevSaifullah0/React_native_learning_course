import { View, Text,Button } from 'react-native';
import React, { useEffect, useState } from 'react';

const UseEffectHook = () => {
  const [count,setCount]=useState(0);
  useEffect(() => {
    console.log("this is Use Effect Hook")
  },[]);
  // to pass the Blank Array Dependency mean your hook will be mounting only 1 time
  return (
    <View>
      <Text style={{ fontSize: 20, fontStyle: 'italic', fontWeight: '600' }}>UseEffectHook</Text>
      <Text style={{ fontSize: 20, fontStyle: 'italic', fontWeight: '600' }}>Counter: {count}</Text>
      <Button title='Counter' onPress={()=> setCount(count+1)}/>
    </View>
  );
};

export default UseEffectHook;