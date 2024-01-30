// LoginScreen.tsx
import React, { useState } from 'react';
import { GoogleSignin, GoogleSigninButton } from '@react-native-community/google-signin';
import { View, Text, TextInput, Button, TouchableOpacity, Switch } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';

const LoginScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailFocused, setEmailFocused] = useState(false);
  const [remindMe, setRemindMe] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
    navigation.navigate('Home');
  };
  const toggleRemindMe = () => {
    setRemindMe(!remindMe);
  };


  return (
    // <LinearGradient
    //   colors={['#000006', '#cbdcff', '#192f6a']}
    //   style={{ flex: 1, justifyContent: 'center', paddingLeft: 10, paddingRight: 10 }}
    // >
      <View style={{ flex: 1, justifyContent: 'center', paddingLeft: 10, paddingRight: 10 }}>
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
        <View>
          <Text style={{ color: 'black', marginBottom: 8, marginLeft: 10 }}>Email:</Text>

          <TextInput
            placeholder="Email"
            placeholderTextColor={'gray'}
            onChangeText={(text) => setEmail(text)}
            value={email}
            keyboardType="email-address"
            autoCapitalize="none"    // </LinearGradient>
            style={{ borderWidth: 1, padding: 8, margin: 8, borderRadius: 10, color: 'white', backgroundColor: 'white' }}
          />
        </View>
        <View>
          <Text style={{ color: 'black', marginBottom: 8, marginLeft: 10 }}>Password:</Text>
          <TextInput
            placeholder="Password"
            placeholderTextColor={'gray'}
            onChangeText={(text) => setPassword(text)}
            value={password}
            secureTextEntry
            style={{ borderWidth: 1, padding: 8, margin: 8, borderRadius: 10, color: 'white', backgroundColor: 'white' }}
          />
          <TouchableOpacity onPress={() => console.log('Forgot Password pressed')} style={{ alignSelf: 'flex-end', marginRight: 10 }}>
            <Text style={{ color: 'black', textDecorationLine: 'underline' }}>Forgot Password?</Text>
          </TouchableOpacity>
          <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: 8, justifyContent:'space-between' }}>
            <Text style={{ color: 'blue', marginLeft: 10 }}>Remind Me Next Time</Text>
            <TouchableOpacity style={{ alignSelf: 'flex-end', marginRight: 10 }}>
              <Switch
                trackColor={{ false: 'black', true: 'blue' }}
                thumbColor={remindMe ? 'white' : 'gray'}
                ios_backgroundColor="gray"
                onValueChange={toggleRemindMe}
                value={remindMe}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{
          padding: 10
        }}>
          <View
            style={{
              display: 'flex',
              gap: 10
            }}>
            <TouchableOpacity style={{ borderRadius: 8, overflow: 'hidden' }}>
              <Button title="Login" onPress={handleLogin} />
            </TouchableOpacity>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 16 }}>
              <View style={{ flex: 1, height: 1, backgroundColor: 'black', marginRight: 8 }} />
              <Text style={{ color: 'blue' }}>OR</Text>
              <View style={{ flex: 1, height: 1, backgroundColor: 'black', marginLeft: 8 }} />
            </View>
            <TouchableOpacity style={{ borderRadius: 8, overflow: 'hidden' }}>
              <Button title="Signup" onPress={() => navigation.navigate('Signup')} />
            </TouchableOpacity>
          </View>

        </View>
      </View>
    // </LinearGradient>
  );
};

export default LoginScreen;
