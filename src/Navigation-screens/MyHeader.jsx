import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';

const MyHeader = ({navigation}) => {
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate('Welcome')}>
        <Text style={{ backgroundColor: '#ff3d', borderRadius: 40, textAlign: 'center',justifyContent:'center', padding: 15, marginHorizontal: 120, marginTop: 300, fontWeight: '600' }}>Go WelcomePage</Text>
      </TouchableOpacity>
    </View>
  );
};


export default MyHeader;