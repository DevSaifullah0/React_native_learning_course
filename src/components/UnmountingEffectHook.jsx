import { View, Text, Button } from 'react-native';
import React, { useState } from 'react';
import ShowChild from "./ShowChild"
import { Color } from 'react-native/types_generated/Libraries/Animated/AnimatedExports';

const UnmountingEffectHook = () => {
    const [Child,setShowChild]=useState(true);
  return (
    <View>
      <Text style={{fontSize:30,fontStyle:'italic',fontWeight:'900'}}>Parent Component</Text>
      {
        Child ? <ShowChild/> : null
      }
      <Button title='Toggle' color={'red'}  onPress={()=>setShowChild(!Child)}/>
    </View>
  );
};

export default UnmountingEffectHook;