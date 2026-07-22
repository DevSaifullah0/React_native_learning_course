import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { styles } from '../style/style2';

const ContactItem = ({name,city,id}) => {
  return (
    <View style={styles.item}>
     {/* <View style={{backgroundColor:'crimson',marginHorizontal:90,margin:20,borderRadius:20,alignItems:'center',borderColor:'black',padding:1,}}> */}
      <Text style={styles.id}> ID: {id}</Text>
      <Text style={styles.name}>Name: {name}</Text>
      <Text style={styles.city}> City: {city}</Text>
{/* 
      <TouchableOpacity>
        <Text style={{color:'#ffff',fontSize:20}}>ID: {id}</Text>
      <Text style={{color:'#ffff',fontSize:20}}>Name: {name}</Text>
      <Text style={{color:'#ffff',fontSize:20}}>City: {city}</Text>
      
      </TouchableOpacity> */}
      
      
    </View>
  );
};

export default ContactItem;