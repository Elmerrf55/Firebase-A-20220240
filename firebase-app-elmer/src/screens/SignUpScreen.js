// SignUpScreen.js
import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import { auth } from '../config/firebase';
import {createUserWithEmailAndPassword} from 'firebase/auth'

export default function SignUpScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignUp = () => {
createUserWithEmailAndPassword( auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('User registered with:', user.email);
        navigation.navigate('SignIn');
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  const login = () => {
    navigation.navigate('SignIn');
  }

  return (
    <View>
      <View style={styles.inputContainer}>
      <Text style={styles.label}>Email:</Text>
      <TextInput style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      </View>
      <View style={styles.inputContainer}>
      <Text style={styles.label}>Contraseña:</Text>
      <TextInput style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      </View>
      
      <View style={styles.buttonContainer}>
      <Button title="Registrarse" onPress={handleSignUp} />
      {error ? <Text>{error}</Text> : null}

      <Button title="Inicio de sesion" onPress={login} />
      {error ? <Text>{error}</Text> : null}
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
    marginLeft: 10,
    marginBottom: 10,
},
inputContainer: {
  width: '100%',
  padding: 16,
  backgroundColor: '#f8f9fa',
  marginBottom: 16,
},
input: {
  height: 40,
  borderColor: '#ccc',
  borderWidth: 1,
  borderRadius: 4,
  paddingLeft: 8,
  backgroundColor: '#fff',
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.1,
  shadowRadius: 5,
  elevation: 2,
  width: '100%'
},
});