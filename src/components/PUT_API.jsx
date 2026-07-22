import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import React, { useState } from 'react';
import axios from 'axios';

const PUT_API = () => {
    const [Update,setUpdate]=useState({id:'',name:'',age:'',email:''});
    const handleInput=(field,value)=>{
        setUpdate({...Update,[field]:value});

    };
    const handleUpdate= async()=>{
        try {
            const response= await axios.put(`http://192.168.1.5:3000/users/${Update.id}`,{
                name:Update.name,
                age:Update.age,
                email:Update.email,
            });
            Alert.alert("Successfull","Data Update Successfully");
            console.log(response.data);
            setUpdate({id:'',name:'',age:'',email:''})
        } catch (error){
             Alert.alert("Error","Failed To Update Data")
        }
    };
  return (
    <View style={styles.Container}>
      <Text style={styles.HeaderText}>PUT_API Method</Text>
      <TextInput style={styles.TextInput}
      placeholder='Enter Your ID'
      value={Update.id}
      placeholderTextColor={'black'}
      onChangeText={(value)=>handleInput('id',value)}
      />
      <TextInput style={styles.TextInput}
      placeholder='Enter Your Name'
      value={Update.name}
      placeholderTextColor={'black'}
      onChangeText={(value)=>handleInput('name',value)}
      />
      <TextInput style={styles.TextInput}
      placeholder='Enter Your Age'
      value={Update.age}
      placeholderTextColor={'black'}
      onChangeText={(value)=>handleInput('age',value)}
      />
      <TextInput style={styles.TextInput}
      placeholder='Enter Your Email'
      value={Update.email}
      placeholderTextColor={'black'}
      onChangeText={(value)=>handleInput('email',value)}
      />
      <TouchableOpacity style={styles.Button} onPress={handleUpdate}>
        <Text style={styles.ButtonText}>
            Update
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
export default PUT_API;