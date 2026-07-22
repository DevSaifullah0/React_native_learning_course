import { View, Text, Button } from 'react-native';
import React, { useState } from 'react';
import My from "./My"


const HideShowToggle = () => {
    const [status,setStatus]=useState(true);
  return (
    <View>
      <Text style={{fontSize:30,fontWeight:'900',textAlign:'center',color:'red',backgroundColor:'indigo',borderRadius:60,marginHorizontal:20,marginVertical:20,padding:15}}>HideShowToggle</Text>
      {
        status? <My/> :null
      }
        <Button title='Hide' onPress={()=> setStatus(!status)}/>
    </View>
  );
};

export default HideShowToggle;