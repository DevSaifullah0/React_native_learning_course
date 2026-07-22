import { View } from 'react-native';
import React, { createContext, useState } from 'react';
import Child from './Child';

export const ContextCounter = createContext();
export const CounterContext = ContextCounter;

const Parent = () => {
    const [count, setCount] = useState(0);

    const IncrementCounter = () => {
        setCount(count + 1);
    };

    const IncrementCount = IncrementCounter;

    return (
        <ContextCounter.Provider 
            value={{count, IncrementCounter, IncrementCount}}
        >
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Child />
            </View>
        </ContextCounter.Provider>
    );
};

export default Parent;
