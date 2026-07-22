import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react-native';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secureText, setSecureText] = useState(true);

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.innerContainer}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >

        {/* Email */}
        <View style={styles.inputGroup}>
          {/* <LinearGradient
            colors={['#FFFFFF', '#FFFFFF']}
            style={styles.Loginheader}
          >
            <Text
              style={styles.LoginText}
            >
              Login
            </Text>
          </LinearGradient> */}
          <Text style={styles.label}>Email</Text>

          <View style={styles.inputWrapper}>
            <Mail size={20} color="#999" />

            <TextInput
              style={styles.input}
              placeholder="Enter Your Email"
              placeholderTextColor="#999"
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              value={email}
              onChangeText={setEmail}
            />
          </View>
        </View>

        {/* Password */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Password</Text>

          <View style={styles.inputWrapper}>
            <Lock size={20} color="#999" />

            <TextInput
              style={styles.input}
              placeholder="Enter Your Password"
              placeholderTextColor="#999"
              secureTextEntry={secureText}
              autoCapitalize="none"
              autoCorrect={false}
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
        </View>

        {/* Forgot Password */}

        <TouchableOpacity style={styles.forgotContainer}>
          <Text style={styles.forgotText}>
            Forgot Password?
          </Text>
        </TouchableOpacity>

        {/* Login Button */}

        <TouchableOpacity activeOpacity={0.8}>
          <LinearGradient
            colors={['#FFD000', '#F5A623']}
            style={styles.loginButton}
          >
            <Text style={styles.loginText}>
              Login
            </Text>
          </LinearGradient>
        </TouchableOpacity>

        {/* Footer */}

        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Don't have an account?
          </Text>

          <TouchableOpacity>
            <Text style={styles.signUp}>
              {' '}Sign Up
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>navigation.goBack()}>
            <Text style={styles.signUp}>
              {' '} Go-back
            </Text>
          </TouchableOpacity>
        </View>

      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  Loginheader: {
    transform:[{translateY:-100}],
    borderRadius:15,
    padding:10,
    marginHorizontal:90,
    shadowColor:'#000',
    elevation:60,
    // borderWidth:0.2
  },
  LoginText:{
    fontSize:30,
    fontWeight:'600',
    textAlign:'center',

  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
  },

  inputGroup: {
    marginBottom: 20,
  },

  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginBottom: 8,
  },

  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E5E5EA',
    borderRadius: 12,
    paddingHorizontal: 16,
    height: 56,
    backgroundColor: '#FFF',
  },

  input: {
    flex: 1,
    fontSize: 15,
    color: '#000',
    marginLeft: 10,
    paddingVertical: 0,
  },

  forgotContainer: {
    alignSelf: 'flex-end',
    marginBottom: 30,
  },

  forgotText: {
    color: '#F5A623',
    fontSize: 14,
    fontWeight: '600',
  },

  loginButton: {
    height: 56,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',

    elevation: 4,

    shadowColor: '#F5A623',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },

  loginText: {
    color: '#000',
    fontWeight: '700',
    fontSize: 16,
  },

  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 25,
  },

  footerText: {
    color: '#000',
    fontSize: 14,
  },

  signUp: {
    color: '#F5A623',
    fontSize: 14,
    fontWeight: '700',
  },

});