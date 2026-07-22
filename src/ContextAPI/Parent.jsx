import { View } from 'react-native';
import React, { createContext, useState } from 'react';
import Child from './Child';


// TO Remember ContextAPI (Create, Provide, Use)
export const ContextCounter = createContext();




const Parent = () => {
    const [count, setCount] = useState(0);
    const IncrementCounter =() =>{
        setCount(count+1);
    }
    return (
        <ContextCounter.Provider value={{count,IncrementCounter}}>
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Child/>
            </View>
        </ContextCounter.Provider>
    );
};

export default Parent;