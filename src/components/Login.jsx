import { View, Text, TextInput, TouchableOpacity, Alert, Keyboard, ActivityIndicator, } from 'react-native';
import React, { useState } from 'react';
import { LoginUser } from '../services/auth';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  const handleLogin = async () => {
    if (!email.trim() || !password) {
      // Alert.alert('Error', 'Please fill all fields');
      setMessage('❌ Please fill all fields');
      setMessageType('Error');
      return;
    }

    setLoading(true);
    Keyboard.dismiss();

    try {
      const user = await LoginUser(email.trim(), password);

      if (user.emailVerified) {
        // Alert.alert('Success', 'Login Successful');
        setMessage('Login Successfull');
        setMessageType('Success')
        setEmail('');
        setPassword('');
        navigation.replace('UserCRUD')
      } else {
        // Alert.alert(
        //   'Email Not Verified',
        //   'Please verify your email before logging in.',
        // );
        setMessage('❌ Please Verify your email before logging in');
        setMessageType('Email not Verified');
        setPassword('');
      }
    } catch (error) {
      // Alert.alert('Login Failed', error.message);
      setMessage(error.message)
      setPassword('Error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View className="flex-1 justify-center items-center bg-gray-100">
      <View className="bg-white p-8 rounded-xl shadow-lg w-96">

        <Text className="text-3xl font-extrabold text-yellow-600 mb-24 text-center">
          Login
        </Text>

        <Text className="font-bold mb-2">Email</Text>

        <TextInput
          className="border border-gray-300 rounded-lg p-4 mb-5 focus:border-yellow-600"
          placeholder="Enter your email"
          placeholderTextColor="gray"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          autoComplete="email"
          textContentType="emailAddress"
        />

        <Text className="font-bold mb-2">Password</Text>

        <TextInput
          className="border border-gray-300 rounded-lg p-4 mb-5 text-black focus:border-yellow-600"
          placeholder="Enter your password"
          placeholderTextColor="gray"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          autoComplete="password"
          textContentType="password"
        />
        {message ? (
          <Text
            className={`mb-4 font-semibold ${messageType === 'Success'
                ? 'text-green-600'
                : 'text-red-600'
              }`}>
            {message}
          </Text>
        ) : null}
        {/* <View className='flex-row gap-12'> */}
          {/* <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text className='mt-4 text-center text-yellow-600 font-semibold'> Create account ? </Text>
          </TouchableOpacity> */}



          <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
            <Text className='mt-4 text-right text-yellow-600 font-semibold '>Forget Password ?</Text>
          </TouchableOpacity>

        {/* </View> */}

        <TouchableOpacity
          disabled={loading}
          onPress={handleLogin}
          className={`rounded-xl p-4 items-center mx-24 mt-16 mb-4 ${loading ? 'bg-gray-400' : 'bg-yellow-500 '
            }`}>

          {loading ? (
            <ActivityIndicator color="white" />
          ) : (
            <Text className="text-black font-semibold text-lg">
              Login
            </Text>
          )}
        </TouchableOpacity>
          <View className='flex-row  justify-center'>
        <Text className='font-semibold'>Don't have an account? </Text>
         <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text className=' text-center text-yellow-600 font-semibold'>Signup </Text>
          </TouchableOpacity>

          </View>


      </View>
    </View>
  );
};

export default Login;