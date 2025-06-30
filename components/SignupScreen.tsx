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
      <Text style={styles.title}>Create new account</Text>

      <TextInput
        placeholder="Full Name"
        value={fullname}
        onChangeText={setFullname}
        style={styles.input}
      />
      <TextInput
        placeholder="Phone Number"
        value={phonenumber}
        onChangeText={setPhonenumber}
        style={styles.input}
        keyboardType="phone-pad"
      />
      <TextInput
        placeholder="E-mail Address"
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

      <Pressable style={styles.signupButton} onPress={handleSignup}>
        <Text style={styles.signupButtonText}>Sign Up</Text>
      </Pressable>
    </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    padding: 24,
    backgroundColor: '',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#ff77ff', 
    textAlign: 'left',
    marginBottom: 125,
  },
  input: {
    height: 48,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  signupButton: {
    backgroundColor: '#ff77ff',
    paddingVertical: 14,
    borderRadius: 25,
    marginTop: 10,
  },
  signupButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
});