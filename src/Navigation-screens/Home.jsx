import { View, Text, Button, TouchableOpacity } from 'react-native';
import React from 'react';

const Home = ({navigation,route}) => {
  const {email,password}=route.params;
  // console.log(route.params)
  return (
    <View>
      <Text style={{fontSize:20,fontWeight:'600',textAlign:'center',color:'#000',marginTop:60}}>Email : {email}</Text>
      <Text style={{fontSize:20,fontWeight:'600',textAlign:'center',color:'#000',marginTop:60}}>Password : {password}</Text>
      <TouchableOpacity onPress={()=>navigation.navigate('About')}>
        <Text style={{backgroundColor:'#ff3d',borderRadius:40,textAlign:'center',padding:15,marginHorizontal:120,marginTop:380}}>Go To About</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>navigation.goBack()}>
        <Text style={{backgroundColor:'#ff3d',borderRadius:40,textAlign:'center',padding:15,marginHorizontal:120,marginTop:20}}>Previous</Text>
      </TouchableOpacity>
      {/* <Button title='Go Back' onPress={()=>navigation.goBack()}/> */}
    </View>
  );
};

export default Home;