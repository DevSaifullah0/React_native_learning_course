import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import React, { useState } from 'react';
import axios from 'axios';

const Delete_API = () => {
    const [id,setId]=useState();
    const handleDelete= async()=>{
        try {
            const response= await axios.delete(`http://192.168.1.5:3000/users/${id}`);
            Alert.alert("Successfull","Data Deleted Successfully")
            console.log(response.data);
            setId('');
        } catch (error) {
            Alert.alert("Error","Failed to Delete Data")
        }
    }

  return (
    <View style={styles.Container}>
      <Text style={styles.HeaderText}>Delete_API</Text>
      <TextInput style={styles.TextInput}
      placeholder='Enter Your ID'
      placeholderTextColor={'black'}
      value={id}
      onChangeText={(value)=>setId(value)}
      />

      {/* <TextInput
      placeholder='Enter Your Name'
      placeholderTextColor={'black'}
      />

      <TextInput
      placeholder='Enter Your Age'
      placeholderTextColor={'black'}
      />

      <TextInput
      placeholder='Enter Your Email'
      placeholderTextColor={'black'}
      /> */}
      <TouchableOpacity style={styles.Button} onPress={handleDelete}>
        <Text style={styles.ButtonText}>
            Delete
        </Text>
      </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor:'#fff'
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
    }
});
export default Delete_API;