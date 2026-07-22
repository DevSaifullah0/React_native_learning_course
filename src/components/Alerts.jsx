import { View, Text, StyleSheet, Button, Alert, TouchableOpacity } from 'react-native';
import React from 'react';

const ShowAlerts=()=>{
    Alert.alert(
        'Emergency Alert',
        'World War III has been declared. Please stay calm, follow official government instructions, and rely on trusted news sources for verified updates.',
        [
            {
                text:'Cancel',
                onPress: ()=> console.log('OK'),
                style:'cancel',
            },
            {
                text:'OK',
                onPress: ()=> console.log('OK'),

            }
        ],
        {cancelable:false}
    )
}
const Alerts = () => {
  return (
    <View style={styles.Container}>
      <Text style={styles.HeaderText}>Alerts</Text>
      {/* <Button title='Show Alerts' onPress={ShowAlerts}/> */}
      <TouchableOpacity onPress={ShowAlerts} style={styles.Button}>
        <Text style={styles.ButtonText}>Show Alerts</Text>
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
    Button:{
        backgroundColor: '#03dace',
        padding:10,
        borderRadius: 20,
        // marginLeft:270,
        marginHorizontal:140,
        marginTop:290,
        elevation: 5,
    },
    ButtonText:{
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign:'center'
    }
});
export default Alerts;