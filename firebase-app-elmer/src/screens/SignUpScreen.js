// SignUpScreen.js
import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { firebase } from '../config/firebase';

export default function SignUpScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignUp = () => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('User registered with:', user.email);
        navigation.navigate('SignInScreen');
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <View>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <Button title="Sign Up" onPress={handleSignUp} />
      {error ? <Text>{error}</Text> : null}
    </View>
  );
}
