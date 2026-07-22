import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import {useCounterStore} from '../Zustand/store'

const ZustandTwo = () => {
    const {count,Increment,Decrement}=useCounterStore()
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Counter: {count}</Text>
      <View style={styles.ButtonContainer}>
      <TouchableOpacity style={styles.ButtonOpacity}
      onPress={Increment}
      >
        <Text style={styles.ButtonText}>
            Increment
        </Text>
      </TouchableOpacity>


      <TouchableOpacity style={styles.ButtonOpacity}
      onPress={Decrement}
      >
        <Text style={styles.ButtonText}>
            Decrement
        </Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};

export default ZustandTwo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },

  text: {
    backgroundColor: "cyan",
    padding: 40,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 28,
    color: "#fff",
    borderRadius: 20,
    marginBottom: 30,
  },
  ButtonContainer:{
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 20,
  }, 
  ButtonOpacity: {
    backgroundColor: "#ffe600",
    padding: 16,
    borderRadius: 20,
  },

  ButtonText: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "700",
  },
});