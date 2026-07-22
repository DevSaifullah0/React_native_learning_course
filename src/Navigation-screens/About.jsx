import { View, Text ,TouchableOpacity } from 'react-native';
import React from 'react';

const About = ({navigation}) => {
  return (
    <View>
      <TouchableOpacity onPress={()=>navigation.navigate('SearchBar')}>
              <Text style={{backgroundColor:'#ff3d',borderRadius:40,textAlign:'center',padding:15,marginHorizontal:120,marginTop:300,fontWeight:'600'}}>SearchBar Screen</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate('DialogBox')}>
        <Text style={{backgroundColor:'#ff3d',borderRadius:40,textAlign:'center',padding:15,marginHorizontal:120,marginTop:5,fontWeight:'600'}}>Dialoge Box</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>navigation.navigate('StyledLoginForm')}>
        <Text style={{backgroundColor:'#ff3d',borderRadius:40,textAlign:'center',padding:15,marginHorizontal:120,marginTop:5,fontWeight:'600'}}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.goBack()}>
        <Text style={{backgroundColor:'#ff3d',borderRadius:40,textAlign:'center',padding:15,marginHorizontal:20,marginTop:5,fontWeight:'900',fontSize:20}}>Previous</Text>
      </TouchableOpacity>
    </View>
  );
};

export default About;