import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const ContextAPI = () => {
  return (
    <View style={styles.Container}>
      <Text style={styles.HeaderText}>ContextAPI</Text>
    </View>
  );
};

export default ContextAPI;

const styles = StyleSheet.create({
    Container: {
        flex: 1,
    },

    HeaderText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: '900',
        textAlign: 'center',
        backgroundColor: '#03dace',
        paddingVertical: 50,
        borderRadius: 30,
        // marginTop:10
        paddingTop: 50,
    },

    TextInput:{
      color:'black',
      borderRadius:10,
      margin:30,
      backgroundColor:'pink',
      paddingHorizontal:5,
      paddingVertical:15,
      height:60,
    },

    Button:{
      backgroundColor:'#03dace',
      padding:16,
      borderRadius:13,
      marginHorizontal:140,
      elevation:30,
    },

    ButtonText:{
      fontSize:20,
      fontWeight:'900',
      textAlign:'center'
    },
    
});