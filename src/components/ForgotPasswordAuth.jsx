import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    ActivityIndicator,
    Alert,
} from 'react-native';
import { sendPasswordResetEmail } from '../services/auth';

const ForgotPasswordAuth = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [messageType, setMessageType] = useState('');

    const handleForgetPassword = async () => {
        if (!email.trim()) {
            //   Alert.alert('Error', 'Please enter your email.');
            setMessage('❌ Please enter your email First');
            setMessageType('Error');
            return;
        }

        setLoading(true);

        try {
            await sendPasswordResetEmail(email.trim());

            //   Alert.alert(
            //     'Success',
            //     'Password reset link has been sent to your email.',
            //   );
            setMessage('Password Reset link has been sent to your email');
            setMessageType('Success');

            setEmail('');
        } catch (error) {
            // Alert.alert('Error', error.message);
            setMessage(error.message);
            setMessageType('Error');
        } finally {
            setLoading(false);
        }
    };

    return (
        <View className="flex-1 justify-center items-center bg-gray-100">
            <View className="bg-white p-8 rounded-xl shadow-lg w-96">

                <Text className="text-3xl font-extrabold text-center text-yellow-600 mb-8">
                    Reset Password
                </Text>

                <Text className="font-bold mb-2">
                    Email
                </Text>

                <TextInput
                    className="border border-gray-300 rounded-lg p-4 mb-6 focus:border-yellow-600"
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
                {message ? (
                    <Text className={`mb-4 font-semibold ${messageType === 'Success'
                    ? 'text-green-600'
                    : 'text-red-600'
                    }`}>
                        {message}
                    </Text>
                ):null}

                <View className="flex-row justify-between">

                    <TouchableOpacity
                        className="bg-yellow-500 rounded-lg px-5 py-4"
                        onPress={() => navigation.goBack()}>
                        <Text className="text-white font-bold">
                            Go Back
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        disabled={loading}
                        onPress={handleForgetPassword}
                        className={`rounded-lg px-5 py-4 ${loading ? 'bg-gray-400' : 'bg-yellow-500'
                            }`}>

                        {loading ? (
                            <ActivityIndicator color="white" />
                        ) : (
                            <Text className="text-white font-bold">
                                Reset Password
                            </Text>
                        )}
                    </TouchableOpacity>

                </View>

            </View>
        </View>
    );
};

export default ForgotPasswordAuth;