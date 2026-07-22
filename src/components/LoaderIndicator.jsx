import { View, Text, StyleSheet, ActivityIndicator, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

const LoaderIndicator = () => {
    const [Loader, setLoader] = useState(false);
    const toggleLoader = () => {
        setLoader(!Loader);
    };

    return (
//     <View>
//       <Text style={styles.Header}>LoaderIndicator</Text>
//       <ActivityIndicator style={styles.Loader} size={"large"} color={"#000"} />
//       <Text style={styles.LoaderText}>Loading...</Text>
//     </View>
//   );
// };

// const styles=StyleSheet.create({
//     Header:{
//         backgroundColor:'#FF0000',
//         justifyContent:'center',
//         alignItems:'center',
//         borderRadius:30,
//         padding:40,
//         color:'#FFFFFF',
//         fontSize:30,
//         fontWeight:'bold',
//         textAlign:'center'
//     },
//     Loader:{
//         justifyContent:'center',
//         alignItems:'center',
//         marginTop: 325
//     },
//     LoaderText:{
//         justifyContent:'center',
//         alignItems:'center',
//         fontSize:20,
//         fontWeight:'bold',
//         textAlign:'center'
//     }
// })
    <View>
        <Text style={styles.Header}>Loader Indicator</Text>
    <View style={styles.Container}>
        
        <TouchableOpacity style={styles.button} onPress={toggleLoader}>
            <Text style={styles.buttonText}>
                {Loader ? 'Hide Loader': 'Show Loader'}
            </Text>
        </TouchableOpacity>
        {
            Loader && (
                <View style={styles.LoaderContainer}>
                    <ActivityIndicator size={"large"} color={"#FF0000"} />
                    <Text>Loading...</Text>
                </View>
            )
        }
    </View>
    </View>
    );
};

const styles = StyleSheet.create({
    Container: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0'
    },
    button: {
        position: 'absolute',
        top: 250,
        backgroundColor: '#FF0000',
        padding: 10,
        borderRadius: 5,
        marginBottom: 20
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold'
    },
    LoaderContainer: {
        position: 'absolute',
        top: 300,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        padding: 20,
        borderRadius: 10,
        height: 120,
        width: 120,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 20
    },
    Header:{
        backgroundColor:'#FF0000',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:30,
        padding:40,
        color:'#FFFFFF',
        fontSize:40,
        fontWeight:'bold',
        textAlign:'center'
    },

});
export default LoaderIndicator;