import { View } from 'react-native';
import React from 'react';
import GrandChild from './GrandChild';
import SubChild from './SubChild';

const Child = () => {
  return (
    <View>
      <GrandChild />
      <SubChild />
    </View>
  );
};

export default Child;
