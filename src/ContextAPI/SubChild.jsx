import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React, { useContext } from 'react';
import { CounterContext } from './Parent';

const SubChild = () => {
  const {count,IncrementCount}=useContext(CounterContext)
  return (
    <View>
      <Text style={styles.text}>Counter: {count}</Text>
      <TouchableOpacity style={styles.ButtonOpacity} activeOpacity={0.6} onPress={IncrementCount}>
        <Text style={styles.ButtonText}>
          Counter
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SubChild;

const styles=StyleSheet.create({
  text:{
    backgroundColor:'rgba(0, 255, 255, 1)',
    padding:50,
    textAlign:'center',
    fontWeight:'900',
    fontSize:24,
    color:'#fff',
    borderRadius:20,
    marginBottom:30,

  },
  ButtonOpacity:{
    backgroundColor:'#ffe600ff',
    padding:17,
    marginHorizontal:140,
    borderRadius:20,
  },
  ButtonText:{
    fontSize:17,
    textAlign:'center',
    fontWeight:'600',
  },
  
})