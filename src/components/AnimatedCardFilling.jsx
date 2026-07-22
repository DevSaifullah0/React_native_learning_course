import { View, Text,Image, TouchableOpacity } from 'react-native';
import React from 'react';
import Animated,{useSharedValue,useAnimatedStyle,withSpring} from 'react-native-reanimated';

const AnimatedCardFilling = () => {
    const Flip = useSharedValue(0);
    const FrontImage=require('../images/Mine.jpeg');
    const BackImage=require('../images/Sunset.jpeg');

    const AnimatedStyleFront= useAnimatedStyle(()=>{
        return{
            transform:[
                {perspective : 600},
                {rotateY:`${Flip.value}deg`},
            ],
            opacity: Flip.value < 90 ? 1 : 0,
        };
    });

    const AnimatedStyleBack= useAnimatedStyle(()=>{
        return{
            transform:[
                {perspective : 600},
                {rotateY:`${Flip.value + 180}deg`},
            ],
            opacity: Flip.value >= 90 ? 1 : 0,
        };
    });
    
    const HandleFlip=()=>{
        Flip.value=withSpring(Flip.value === 0 ? 180 : 0)
    };

  return (
    <View className='flex-1 justify-center items-center bg-[#f0f4fa]'>
        <View className='w-96 h-96 relative'>
            <Animated.View
            style={[AnimatedStyleFront]}
            className='absolute w-full h-full bg-white rounded-3xl shadow-xl justify-center items-center'
            >
                <Image source={FrontImage}
                className='w-80 h-64 rounded-lg'
                resizeMode='cover'
                />
                <Text className='text-lg font-semibold mt-3 text-[#333]'>Product Title.  Front</Text>
                <Text className='text-sm text-gray-600 mt-1 '>This is Front Side</Text>
            </Animated.View>
            <Animated.View style={[AnimatedStyleBack]}
            className='absolute w-full h-full bg-white rounded-3xl shadow-xl justify-center items-center'
            >
                <Image 
                source={BackImage}
                className='w-80 h-64 rounded-lg'
                resizeMode='cover'
                />
                <Text className='text-lg font-semibold mt-3 text-[#333]'>Product Title.  Back</Text>
                <Text className='text-sm text-gray-600 mt-1 '>This is Back Side</Text>
            </Animated.View>
        </View>
        <TouchableOpacity className='mt-8 px-8 py-3 bg-[#ffb923] rounded-xl w-32 h-16' onPress={HandleFlip}>
            <Text className='text-center text-2xl'>Flip</Text>
        </TouchableOpacity>
    </View>
  );
};

export default AnimatedCardFilling;