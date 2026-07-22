import { View, Text } from 'react-native';
import React from 'react';
import GrandChild from './GrandChild';

const Child = () => {
  return (
    <View>
        <GrandChild/>
    </View>
  );
};

export default Child;