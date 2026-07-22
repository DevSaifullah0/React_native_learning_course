import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const GetAPI_FlatList = () => {
    const [myData,setData]= useState([]);
    const ViewData=(item)=>{
        Alert.alert("Information ",`UserID : ${item.id}`   
        )
    }
    const renderItem=({item})=>(
        <View style={styles.card}>
        <TouchableOpacity onPress={()=>ViewData(item)}>
            <Text style={styles.name}>Name: {item.name}</Text>
            <Text style={styles.age}>Age: {item.age}</Text>
            <Text style={styles.email}>Email: {item.email}</Text>
        </TouchableOpacity>
        </View>
    )
    useEffect(()=>{
        axios.get('http://192.168.1.5:3000/users').then((response)=>{
            setData(response.data);
        });
    },[]);
  return (
    <View style={styles.Container}>
      <Text style={styles.HeaderText}>GetAPI_FlatList</Text>
      <Text style={styles.Head}>Users</Text>
      <FlatList
      data={myData}
      renderItem={renderItem}
      keyExtractor={(item)=>item.id.toString()}
      />
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
    },
    Head:{
        color:'#004d40',
        fontSize:30,
        textAlign:'center',
        fontWeight:'800',
        margin:20,
        // transform: [{ translateX: 130 }],
    },
    card:{
        backgroundColor:"#fff",
        padding:15,
        marginBottom:10,
        borderRadius:10,
        shadowColor:'#000',
        shadowOffset:{width:0,height:4},
        shadowOpacity:0.4,
        shadowRadius:10,
        elevation:10,
        borderLeftWidth:5,
        borderColor:'#00796b',
        marginHorizontal:16
    },
    name:{
        fontSize:20,
        fontWeight:'600',
        color:'#004d40',
        marginBottom:5,
    },
    age:{
        fontSize:16,
        color:'#004d40',
    },
    email:{
        fontSize:16,
        color:'#004d40',
    }
});
export default GetAPI_FlatList;