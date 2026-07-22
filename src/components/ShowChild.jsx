import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';

const ShowChild = () => {
    useEffect(()=>{
        // console.log("This is Child Component");
        return()=>{
            console.log("This is the Child Component");
        }
    });
  return (
    <View>
      <Text style={{fontSize:30,fontStyle:'italic',fontWeight:'900'}}>Child Component </Text>
    </View>
  );
};

export default ShowChild;