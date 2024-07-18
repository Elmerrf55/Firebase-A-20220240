// SignInScreen.js
import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import { auth } from '../config/firebase'; // Ajusta la ruta según sea necesario
import {signInWithEmailAndPassword}  from 'firebase/auth'

export default function SignInScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignIn = () => {
   signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('Signed in with:', user.email);
        navigation.navigate('Home');
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  const resgitre = () =>{
    navigation.navigate('SignUp');
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
      <Text style={styles.label}>Email:</Text>
      <TextInput style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      </View>
      <View style={styles.buttonContainer}>
      <Button  title="Ingresar" onPress={handleSignIn} />
      {error ? <Text>{error}</Text> : null}

      <Button title="Registrarse" onPress={resgitre} />
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
