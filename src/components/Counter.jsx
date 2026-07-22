import React from "react";
import {View,Text,TouchableOpacity,StyleSheet} from "react-native";

import { useDispatch, useSelector } from "react-redux";
import {Increment,decrement,reset,} from "../Redux/Slice/CounterSlice";

const Counter = () => {
  const Count = useSelector((state) => state.counter.value);

  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Counter : {Count}</Text>
    <View style={styles.ButtonContainer}>
      <TouchableOpacity
        style={styles.ButtonOpacity}
        onPress={() => dispatch(Increment())}>
        <Text style={styles.ButtonText}>Increment</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.ButtonOpacity}
        onPress={() => dispatch(decrement())}>
        <Text style={styles.ButtonText}>Decrement</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.ButtonOpacity}
        onPress={() => dispatch(reset())}>
        <Text style={styles.ButtonText}>Reset</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};

export default Counter;

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