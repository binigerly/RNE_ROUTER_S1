import { useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Index() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Say hello to your new{'\n'}app</Text>
      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => router.push('/login')}
      >
        <Text style={styles.loginButtonText}>Log In</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.signupButton}
        onPress={() => router.push('/signup')}
      >
        <Text style={styles.signupButtonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 24,
  },
  title: {
    fontSize: 30,
    color: '#ff77ff',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 40,
  },
  loginButton: {
    backgroundColor: '#ff77ff',
    borderRadius: 24,
    paddingVertical: 12,
    paddingHorizontal: 60,
    marginBottom: 16,
    width: '80%',
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  signupButton: {
    borderColor: '#2e86de',
    borderWidth: 2,
    borderRadius: 24,
    paddingVertical: 12,
    paddingHorizontal: 60,
    width: '80%',
    alignItems: 'center',
  },
  signupButtonText: {
    color: '#2e86de',
    fontSize: 18,
    fontWeight: 'bold',
  },
});