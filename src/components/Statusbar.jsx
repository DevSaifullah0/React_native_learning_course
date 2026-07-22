import { View, Text, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';
import React from 'react';

const Statusbar = () => {
    const handleEvent = () => {
        alert('Welcome Back')
    };
    return (
        <View style={styles.Container}>
            <StatusBar
                barStyle={'dark-content'}
                backgroundColor="blue"
                hidden={false}
                translucent={true}
            />
            <Text style={styles.HeaderText}>StatusBar</Text>
            <View>
                <TouchableOpacity onPress={handleEvent}>
                    <Text style={styles.LowerText}>
                        Hello World
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: 'rgba(246, 202, 234, 0.92)',
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
    LowerText: {
        fontSize: 20,
        fontWeight: '900',
        textAlign: 'center',
        backgroundColor: '#fefe',
        padding: 40,
        marginHorizontal: 120,
        borderRadius: 30,
        marginTop: 200,
        elevation: 50,

    }
});
export default Statusbar;