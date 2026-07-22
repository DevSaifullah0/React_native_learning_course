import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';

const GrandChild = () => {
  return (
    <View>
      <Text>GrandChild</Text>
      <TouchableOpacity style={styles.Button}>
        <Text>+ Count</Text>
      </TouchableOpacity>
    </View>
  );
};

export default GrandChild;
const styles=StyleSheet.create({
    Button:{
        backgroundColor:'#F5A623',
        paddingHorizontal:170,
        marginTop:20,
    }
});