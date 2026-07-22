import { View, Text, StyleSheet, Pressable } from 'react-native';
import React from 'react';

const PressableButtonComponent = () => {
    const user = "Saifullah";
    const handlePress=()=>{
        alert(`Welcome ${user}`)
    };
    const handlePressIn=()=>{
        alert(`Button Pressed In`)
    };
    const handlePressOut=()=>{
        alert(`Button Pressed Out`)
    };
    const handlePressLong=()=>{
        alert(`Button Pressed Long`)
    }
  return (
    <View style={styles.Container}>
      <Text style={styles.HeaderText}>
        Topic: PressableButtonComponent
        Course: React-Native
        </Text>
        <Pressable style={styles.Button} 
        // onPress={handlePress}
        // onPressIn={handlePressIn}
        // onPressOut={handlePressOut}
        onLongPress={handlePressLong}
        delayLongPress={5000}
        
        >
            <Text style={styles.ButtonText}>
                Press me
            </Text>
        </Pressable>
    </View>
  );
};
const styles=StyleSheet.create({
    Container:{
        flex:1,
        backgroundColor:'#fff',
    },
    HeaderText:{
        color:'#fff',
        fontSize:20,
        fontWeight:'bold',
        textAlign:'center',
        backgroundColor:'#FF0000',
        paddingVertical:50,
        borderRadius:30,
        // marginTop:10
        paddingTop:50
    },
    Button:{
        backgroundColor:'#ff0000ff',
        padding:10,
        borderRadius:5,
        marginTop:20,
        alignItems:'right',
        justifyContent:'right',
        borderRadius:30,
        padding:15,
        // marginHorizontal:120,
        marginLeft:250,
        marginRight:10,
        
    },
    ButtonText:{
        color:'#fff',
        fontSize:20,
        fontWeight:'bold',
        textAlign:'center'
    }
});
export default PressableButtonComponent;