import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import React, { useState } from 'react';



const LoginForm = () => {
  //   const [email,setEmail]=useState('');
  //   const [password,setPassword]=useState('');
  //   const handleLogin=()=>{
  //       console.log('Email: ',email);
  //       console.log('Paswword: ',password);


  //       setEmail('');
  //       setPassword('');
  //   }

  // return (
  //   <View>
  //     <Text>Log in</Text>
  //     <TextInput
  //     placeholder='email'
  //     value={email}
  //     onChangeText={setEmail}
  //     keyboardType="email-address"
  //     autoCapitalize="none"
  //     placeholderColor='#999'
  //     />

  //     <TextInput
  //     placeholder='password'
  //     value={password}
  //     onChangeText={setPassword}
  //     autoCapitalize="none"
  //     placeholderColor='#999'
  //     secureTextEntry
  //     />

  //     <TouchableOpacity onPress={handleLogin}>
  //       <Text>Login</Text>
  //     </TouchableOpacity>
  //   </View>
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = () => {
    console.log("Email : ", email);
    console.log("Password : ", password);

    setEmail('');
    setPassword('');
  }
  return (
    // <View style={{backgroundColor:'pink'}}>
    <View style={styles.container}>
      <Text style={styles.heading}>
        Login Page
      </Text>
      <TextInput style={styles.input}
        placeholder='Enter Email'
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        placeholderColor='#999'
        autoCapitalize='none'
      />

      <TextInput style={styles.input}
        placeholder='password'
        value={password}
        onChangeText={setPassword}
        placeholderColor='#999'
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>
          LOG IN
        </Text>
      </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingTop: 40,
    backgroundColor: '#f0f0f0',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
    color: '#333',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 15,
    borderRadius: 10,
    backgroundColor: '#fff',
    fontSize: 16,
    color: '#333'
  },
  button: {
    backgroundColor: '#6200EE',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    color: '#fff'

  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'gold'
  }

});

export default LoginForm;