import { View, Text, StyleSheet ,ScrollView, TouchableOpacity} from 'react-native';
import React, { useEffect, useState } from 'react';
import axios  from 'axios';

const API = () => {
  const [Data, setData] = useState([]);
  useEffect(() => {
    // fetch('http://10.0.2.2:3000/users').then((response)=>{
    //   response.json().then((result)=>{
    //     console.log(result);
    //   });
    // });
    axios.get("http://192.168.1.5:3000/users").then((result) => {
      // console.log(result.data);
      
      setData(result.data);
    });
  }, []);
  const ShowAlert=(item)=>{
    alert(`Name: ${item.name}`);
  }


  const colors = [
  "red",
  "green",
  "blue",
  "orange",
  "purple",
  "pink",
  "brown"
];


  return (
    <View style={styles.Container}>
      <Text style={styles.HeaderText}>Get API Method</Text>
      <ScrollView>
      
      {
        Data.map((item,index)=>(
          <TouchableOpacity onPress={()=>ShowAlert(item)} key={item.id}>
          <Text style={[styles.Text,
            {
              color:colors[index%colors.length],
            },
          ]}>
            
            {item.name}
          </Text>
          </TouchableOpacity>
        ))
      }
      
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#fff'
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
  Text:{
    fontSize:20,
    fontWeight:'900',
    textAlign:'center',
    margin:20,
    backgroundColor:'#03dace',
    padding:10,
    borderRadius:20,
    marginHorizontal:120
  }
});
export default API;