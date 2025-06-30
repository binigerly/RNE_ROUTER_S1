import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

const SignupScreen: React.FC = () => {
  const [fullname, setFullname] = useState('');
  const [phonenumber, setPhonenumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    console.log('Signing up with:', fullname, phonenumber, email, password);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>

      <TextInput
        placeholder="E-mail or phone number"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        keyboardType="email-address"
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        style={styles.input}
        secureTextEntry
      />

      <Pressable style={styles.loginButton} onPress={handleSignup}>
        <Text style={styles.loginButtonText}>Log in</Text>
      </Pressable>

      <Text style={styles.orText}>OR</Text>

      <Pressable style={styles.fbButton}>
        <Text style={styles.fbButtonText}>Login with Facebook</Text>
      </Pressable>
    </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#fff',
  
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#ff77ff',
    textAlign: 'left',
    marginBottom: 200,
  },
  input: {
    height: 48,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  loginButton: {
    backgroundColor: '#ff77ff',
    paddingVertical: 14,
    borderRadius: 25,
    marginTop: 10,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  orText: {
    textAlign: 'center',
    marginVertical: 16,
    fontWeight: '500',
    color: '#888',
  },
  fbButton: {
    backgroundColor: '#2e86de',
    paddingVertical: 14,
    borderRadius: 25,
  },
  fbButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
});