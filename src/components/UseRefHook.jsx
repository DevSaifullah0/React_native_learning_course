import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import React, { useRef } from 'react';

const UseRefHook = () => {
    const EmailRef=useRef(null);
    const PassRef=useRef(null);
    const handleRef=()=>{
        // myRef.current.setNativeProps({
        //     text:'Saifullah',
        //     style:{ color:'white',backgroundColor:'crimson' },
        // });
        EmailRef.current.focus();
    };
  return (
    // <View style={styles.Container}>
    //   <Text style={styles.HeaderText}>UseRefHook</Text>
      <View style={styles.Container}>
        <TextInput
        ref={EmailRef}
        style={styles.Input}
        placeholder='Enter Your Email'
        placeholderTextColor={'#FF0000'}
        keyboardType='email-address'
        autoCapitalize='none'
        />
         <TextInput
        ref={PassRef}
        style={styles.Input}
        placeholder='Enter Your Password'
        placeholderTextColor={'#FF0000'}
        secureTextEntry
        autoCapitalize='none'
        />
        <TouchableOpacity 
        style={styles.Button}
        onPress={handleRef}
        >
            <Text style={styles.ButtonText}>
                Submit
            </Text>
        </TouchableOpacity>
      </View>
    // </View>
  );
};

export default UseRefHook;
const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: 'rgba(246, 202, 234, 0.92)',
        justifyContent:'center',
        alignItems:'center',
        padding:20
    },
    HeaderText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: '#FF0000',
        paddingVertical: 50,
        borderRadius: 30,
        // marginTop:10
        paddingTop: 50
    },
    Input:{
        width:'100%',
        height:50,
        color:'black',
        backgroundColor:'#fff',
        borderRadius:10,
        paddingHorizontal:15,
        fontSize:16,
        borderWidth:1,
        borderColor:'#ccc',
        marginBottom:20
    },
    Button:{
        width:'100%',
        height:50,
        backgroundColor:'#007Bff',
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
    },
    ButtonText:{
        color:'#fff',
        fontSize:18,
        fontWeight:'bold'
    }
});