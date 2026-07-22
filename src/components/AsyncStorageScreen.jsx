import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";

const AsyncStorageScreen = () => {
    const [username,setUsername]=useState('');
    const [storedUsername,setStoredUsername] = useState('');
    const saveUsername= async()=>{
        await AsyncStorage.setItem('username',username);
        setUsername('')
        Alert.alert('Saved!','Username has been stored');
    }

    const removeUsername= async()=>{
        await AsyncStorage.removeItem('username');
        setStoredUsername('')
        Alert.alert('Deleted!','Data is Been Removed');
    }


    const getUsername= async()=>{
        const SavedItem=await AsyncStorage.getItem('username');
        if (SavedItem) {
            setStoredUsername(SavedItem);
        }
        else{
            Alert.alert('Username not found');
        }
    };
    useEffect(()=>{
        getUsername();
    },[]);

  return (
    <View style={styles.Container}>
      <Text style={styles.HeaderText}>AsyncStorage</Text>
      <TextInput style={styles.TextInput}
      placeholder='Enter Full Name'
      placeholderTextColor={'#000'}
      value={username}
      onChangeText={setUsername}
      />


      <TouchableOpacity style={styles.Button} onPress={saveUsername}>
        <Text style={styles.ButtonText}>Save</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.Button} onPress={removeUsername}>
        <Text style={styles.ButtonText}>Delete</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.Button} onPress={getUsername}> 
        <Text style={styles.ButtonText}>Get</Text>
      </TouchableOpacity>

      <Text style={styles.HeaderText}>Username:{storedUsername}</Text>
    </View>
  );
};



const styles= StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor:'#fffefeff'
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
      borderRadius:10,
      margin:30,
      backgroundColor:'pink',
      paddingHorizontal:15,
      paddingVertical:15,
      height:60,

    },
    Button:{
      backgroundColor:'#03dace',
      padding:16,
      borderRadius:13,
      marginHorizontal:140,
      elevation:30,
      marginBottom:10
    },
    ButtonText:{
      fontSize:20,
      fontWeight:'900',
      textAlign:'center'
    },
});
export default AsyncStorageScreen;