import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import React, { useState } from 'react';
import { registerUser } from '../services/auth';

const Register = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setconfirmPassword] = useState('');
    const [message, setMessage]=useState('');
    const [messageType, setMessageType] =useState('');


    const handleRegister = async () => {
        if (!email || !password || !confirmPassword) {
            // Alert.alert("Error", "Please fill all fields");
            setMessage('❌ Please fill all fields');
            setMessageType('Error');
        }
        if (password !== confirmPassword) {
            // Alert.alert('Error', 'Password do not match.');
            setMessage('❌ Password does not match');
            setMessageType('Error');
            return;
        }
        try {
            await registerUser(email, password);
            // Alert.alert('Success', 'Verfication email has been sent to you email.')
            setMessage('Verification email has been sent to your email');
            setMessageType('Success');
            setEmail('');
            setPassword('');
            setconfirmPassword('');
        } catch (error) {
            // Alert.alert('Error', 'Error registering user:')
            setMessage('❌ Error registering user');
            setMessageType('Error');
        }
    };

    return (
        <View className='justify-center items-center flex-1 bg-gray-100'>
            <View className='bg-white p-8 rounded-xl shadow-lg w-96 '>
                <Text className='text-3xl font-extrabold text-yellow-600 mb-8 text-center'>Create Account</Text>
                <Text className='mb-2 font-bold'>Email :</Text>
                <TextInput className='border border-gray-300 p-4 w-full mb-4 rounded-lg focus:border-yellow-600'
                    placeholder='Enter your email'
                    placeholderTextColor={'black'}
                    value={email}
                    onChangeText={setEmail}
                    keyboardType='email-address'
                    autoCapitalize='none'
                />

                <Text className='mb-2 font-bold'>Password :</Text>
                <TextInput className='border border-gray-300 p-4 w-full mb-4 rounded-lg focus:border-yellow-600 text-black'
                    placeholder='Enter your Password'
                    placeholderTextColor={'black'}
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />

                <Text className='mb-2 font-bold'>Confirm Password :</Text>
                <TextInput className='border border-gray-300 p-4 w-full mb-4 rounded-lg focus:border-yellow-600 text-black'
                    placeholder='Confirm Password'
                    placeholderTextColor={'black'}
                    value={confirmPassword}
                    onChangeText={setconfirmPassword}
                    secureTextEntry
                />
                {message ?(
                    <Text className={`font-semibold ${messageType === 'Success'
                        ? 'text-green-600'
                        : 'text-red-600'
                    }`}>
                        {message}
                    </Text>
                ):null}

                <View className='flex-row gap-20'>

                    <TouchableOpacity
                        className="bg-yellow-500 rounded-xl p-4 mt-6 px-7"
                        onPress={() => navigation.goBack()}>
                        <Text className='items-center justify-center font-semibold mt-1'>Go Back
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity className='bg-yellow-500 rounded-xl p-5 mt-6 px-8'
                        onPress={handleRegister} >
                        <Text className='items-center justify-center font-semibold'>Sign up</Text>
                    </TouchableOpacity>

                    
                </View>

                <TouchableOpacity className='items-center justify-center mt-10'
                    onPress={() => navigation.navigate('Login')} >
                    <Text className='items-center justify-center font-semibold text-yellow-600'>Already have an account ?</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Register;
