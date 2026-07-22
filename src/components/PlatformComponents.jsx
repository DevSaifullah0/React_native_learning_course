import { View, Text, StyleSheet, Platform, TouchableOpacity } from 'react-native';
import React from 'react';

const PlatformComponents = ({navigation}) => {
  return (
    <View style={styles.Container}>
      <Text style={styles.HeaderText}>PlatformComponents</Text>
       <View style={styles.InnerView}>
      <Text style={styles.welcomeText}>{
        Platform.OS === 'ios' ? 'Welcome IOS User!':'Welcome Android User!'
        }</Text>
      <Text style={styles.PlatformText}>{
        Platform.select({
            ios:'You are using IOS Devices',
            android:'You are using Android Devices',
        })
        }</Text>
        <TouchableOpacity onPress={()=>navigation.navigate('Login')} style={styles.Button}>
            <Text style={styles.ButtonText}>Next</Text>
        </TouchableOpacity>
    </View>
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
    InnerView:{
        flex:2,
        alignItems:'center',
        justifyContent:'center',
    },
    welcomeText:{
        fontSize:24,
        color:Platform.OS ==='ios' ? 'red':'#004d40',
        marginBottom:20,
    },
    PlatformText:{
        fontSize:16,
        color:Platform.select({
            ios:'#fbf73bff',
            android:'#000'
        }),
        fontWeight:'900'
    },
    Button:{
        backgroundColor:'#FFD000',
        padding:15,
        width:100,
        height:50,
        marginTop:25,
        borderRadius:18,
        elevation:10,
        shadowOffset:{
            height:40,
            width:20,
        },
        shadowColor:'#FFD000'
    },
    ButtonText:{
        fontSize:17,
        fontWeight:'900',
        textAlign:'center'
    }
});
export default PlatformComponents;