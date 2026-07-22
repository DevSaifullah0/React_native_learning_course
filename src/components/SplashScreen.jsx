import React, { useEffect } from 'react';
import { View, Text, Image } from 'react-native';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Login');
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View className="flex-1 bg-white justify-center items-center">
      <Image
        source={require('../assets/image.png')}
        className="w-60 h-60"
      />

      <Text className="text-yellow-500 text-3xl font-extrabold mt-5">
        Authentication System
      </Text>

      <Text className="text-yellow-500 mt-4 text-base font-semibold">
        Safe and Secure Authentication System
      </Text>
    </View>
  );
};

export default SplashScreen;