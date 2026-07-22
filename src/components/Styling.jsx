import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import Styles from '../style/Style';


const style=StyleSheet.create({
    textStyle:{
        fontWeight: 'bold',
        fontStyle: 'italic',
        color: 'white',
        marginHorizontal: 110,
        backgroundColor: 'crimson',
        borderWidth: 3,
        marginVertical:5,
        padding:40,
        textAlign: 'center',
        borderColor: 'black',
        borderWidth: 2,
    },
})

const Styling = () => {
  return (
    <View>
        {/* Inline Css Or Styling */}
      <Text style={{ fontSize: 20, fontWeight: 'bold' ,backgroundColor: 'orange',borderWidth: 3,borderColor: 'black',padding:10}}>Inline CSS</Text>

        {/* Internal Styling Or Css in Developers Wording */}
      <Text style={style.textStyle}>Internal CSS</Text>

       {/* External Styling Or Css in Developers Wording */}

      <Text style={Styles.ExternalStyles}>External CSS</Text>
    </View>
  );
};

export default Styling;