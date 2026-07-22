import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import React, { useState } from 'react';
import axios from 'axios';

const POST_API = () => {
  const [FormData ,setFormData]=useState({id:'',name:'',age:'',email:''});
  const handleInput=(field,value)=>{
    setFormData({...FormData,[field]:value})
  };
  const handleSubmit= async()=>{
    try{
       const response=await axios.post("http://192.168.1.5:3000/users",FormData);
       Alert.alert("Successfull","Data Submit Successfully");
       setFormData({id:'',name:'',age:'',email:''});
    } catch(error){
      Alert.alert("Error","failed To Suhmit")
    }
  }
  return (
    <View style={styles.Container}>
      <Text style={styles.HeaderText}>POST_API Calling</Text>
      <TextInput style={styles.TextInput}
      placeholder='Enter ID'
      value={FormData.id}
      placeholderTextColor={'black'}
      onChangeText={(value)=>handleInput('id',value)}

      />
       <TextInput style={styles.TextInput}
      placeholder='Enter Your Name'
      value={FormData.name}
      placeholderTextColor={'black'}
      onChangeText={(value)=>handleInput('name',value)}
      
      />
      <TextInput style={styles.TextInput}
      placeholder='Enter Your Age'
      value={FormData.age}
      placeholderTextColor={'black'}
      onChangeText={(value)=>handleInput('age',value)}
      
      />
       <TextInput style={styles.TextInput}
      placeholder='Enter Your Email'
      value={FormData.email}
      placeholderTextColor={'black'}
      onChangeText={(value)=>handleInput('email',value)}
      
      />
      
      <TouchableOpacity style={styles.Button} onPress={handleSubmit}>
        <Text style={styles.ButtonText}>
          Submit
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
export default POST_API;