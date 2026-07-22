import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

const MyLogin = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
  return (
    <View className='flex-2 bg-gray-900 p-5'>
      <Text className='text-3xl font-bold text-white mb-32 px-5 mt-44 text-center'>Welcome Back</Text>
      <TextInput
      placeholder='Enter Email'
      placeholderTextColor={'#fff'}
      className="w-full h-12 bg-gray-800 rounded-xl px-4 p-9 mb-6"
      style={{color:'white'}}
      value={email}
      onChangeText={setEmail}
      keyboardType='email-address'
      autoCapitalize='none'
      />

      <TextInput
      placeholder='Enter Password'
      placeholderTextColor={'#fff'}
      className="w-full h-12 bg-gray-800 rounded-xl px-4 p-9 text-white mb-4"
      value={password}
      onChangeText={setPassword}
      secureTextEntry
      />
      <TouchableOpacity>
        <Text className='text-yellow-200 text-lg w-4/5 font-semibold mx-10 px-48'>
            forget password?
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
      className="w-40 bg-indigo-500 rounder-xl rounded-full mt-14 py-5 self-center" 
      >
        <Text className='text-gray-100 text-lg text-center font-semibold'>
            Login
        </Text>
      </TouchableOpacity>
      <View className='flex-row ' style={{color:'#fff'}}>
        <TouchableOpacity>
        <Text className='mt-10 text-lg text-yellow-200'>Don't have an account?</Text>
        </TouchableOpacity>
         <TouchableOpacity>
        <Text className='mb-60 mt-10 text-lg ml-12 text-yellow-200'>Already Have?</Text>
        </TouchableOpacity>
      </View>

      
    </View>
  );
};

export default MyLogin;