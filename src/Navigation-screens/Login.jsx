import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { Eye, EyeOff, Lock, Mail } from 'lucide-react-native';


const Login = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [secureText, setSecureText] = useState()
    return (
        <View style={styles.Container}>
            <Text style={{ fontSize: 15, fontWeight: 'bold', marginLeft: 25, marginBottom: 7 }}>Email :</Text>
            <View style={styles.inputWrapper}>
                <Mail size={20} color={'#9d9c9cff'} />
                <TextInput style={styles.input}
                    placeholder='Enter Your Email'
                    placeholderTextColor={'#000'}
                    keyboardType='email-address'
                    value={email}
                    onChangeText={setEmail}
                />
            </View>
            <Text style={{ fontSize: 15, fontWeight: 'bold', marginLeft: 25, marginBottom: 7 }}>Password :</Text>
            <View style={styles.inputWrapper}>
                <Lock size={20} color={'#9d9c9cff'} />
                <TextInput style={styles.input}
                    placeholder='Enter Your Password'
                    placeholderTextColor={'#000'}
                    secureTextEntry={!secureText}
                    autoCapitalize='none'
                    value={password}
                    onChangeText={setPassword}
                />
                <TouchableOpacity
                    onPress={() => setSecureText(!secureText)}
                >
                    {secureText ? (
                        <EyeOff size={20} color="#999" />
                    ) : (
                        <Eye size={20} color="#999" />
                    )}
                </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Home', { "email": email, "password": password })} style={styles.Button}>
                <Text style={styles.ButtonText}>
                    Login
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.PreviousButton}>
                <Text style={styles.ButtonText}>
                    Previous
                </Text>
            </TouchableOpacity>

        </View>
    );
};

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: 'rgba(249, 249, 249, 0.98)',
        justifyContent: 'center'
    },
    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#E5E5EA',
        borderRadius: 20,
        paddingHorizontal: 16,
        height: 56,
        backgroundColor: '#FFF',
        marginHorizontal: 20,
        marginBottom: 20
    },

    input: {
        flex: 1,
        fontSize: 15,
        color: '#000',
        marginLeft: 10,
        paddingVertical: 3,
    },
    Button: {
        height: 50,
        borderRadius: 14,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 4,
        backgroundColor: '#FFD000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        marginLeft: 210,
        marginRight: 20,
        marginTop: 30,
    },
    PreviousButton:{
        height: 50,
        borderRadius: 14,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 4,
        backgroundColor: '#FFD000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        // marginHorizontal: 140,
        marginLeft:200,
        marginRight:40,
        transform:[{translateX:-170},{translateY:-50}]
    },
    ButtonText: {
        fontSize: 20,
        fontWeight: '600'
    },
});

export default Login;