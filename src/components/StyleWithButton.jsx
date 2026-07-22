import { View, Text, Button, TouchableOpacity, StyleSheet, TouchableHighlight } from 'react-native';
import React from 'react';

const StyleWithButton = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button backgroundColor='red' title='Submit' onPress={() => console.log('Button pressed')} />
      <TouchableOpacity style={style.TouchableOpacity} onPress={() => console.log('TouchableOpacity pressed')} activeOpacity={0.5}>
        <Text style={style.buttonText}>Submit</Text>
      </TouchableOpacity>

      <TouchableHighlight styles={style.TouchableHighlight} underlayColor="#F5A623" onPress={() => console.log('Highlight pressed')}>
        <Text style={style.buttonText}>
            Submit HighLight
        </Text>
      </TouchableHighlight>
    </View>
  );
};

const style=StyleSheet.create({
    TouchableOpacity:{
        backgroundColor: '#F5A623',
        padding: 10,
        borderRadius: 12,
        marginTop: 10,
        width: 100,
        alignItems: 'center',
        // elevation: 5,
    },
    TouchableHighlight:{
      backgroundColor: '#F5A623',
        padding: 10,
        borderRadius: 20,
        marginTop: 10,
        width: 100,
        alignItems: 'center',
    },
    buttonText:{
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    }
});
export default StyleWithButton;