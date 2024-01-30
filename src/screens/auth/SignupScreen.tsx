// SignupScreen.tsx
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, TouchableOpacity, Text } from 'react-native';

const SignupScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <View>
        <Text
          style={{
            color: 'black',
            fontSize: 24,
            fontWeight: 'bold',
            marginBottom: 16,
            alignSelf: 'center',
            textAlign: 'center'
          }}>
          DOCBOOKER
        </Text>
      </View>
      {/* Email Input */}
      <TextInput
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        value={email}
        keyboardType="email-address"
        autoCapitalize="none"
        style={styles.input}
      />

      {/* Password Input */}
      <TextInput
        placeholder="Password"
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry
        style={styles.input}
      />

      {/* Confirm Password Input */}
      <TextInput
        placeholder="Confirm Password"
        onChangeText={(text) => setConfirmPassword(text)}
        value={confirmPassword}
        secureTextEntry
        style={styles.input}
      />

      {/* Sign Up Button */}
      <TouchableOpacity
        style={[styles.buttonStyle, { backgroundColor: 'blue' }]}
        onPress={handleSignup}
      >
        <Text style={{ color: 'white', textAlign: 'center' }}>Sign Up</Text>
      </TouchableOpacity>

      {/* OR Divider */}
      <View style={styles.orDivider}>
        <View style={styles.dividerLine} />
        <Text style={styles.orText}>OR</Text>
        <View style={styles.dividerLine} />
      </View>

      {/* Login Button */}
      <TouchableOpacity
        style={[styles.buttonStyle, { backgroundColor: 'blue' }]}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={{ color: 'white', textAlign: 'center' }}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 16,
    borderRadius: 10,
    color: 'white', 
    backgroundColor: 'white'
  },
  buttonStyle: {
    borderRadius: 10,
    padding: 10,
    marginVertical: 8,
  },
  orDivider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 16,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: 'black',
    marginHorizontal: 8,
  },
  orText: {
    color: 'blue',
    fontSize: 16,
  },
});

export default SignupScreen;
