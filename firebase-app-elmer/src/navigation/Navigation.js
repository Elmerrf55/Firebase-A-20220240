import React, { useState, useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { firebase } from '../config/firebase'; // Asegúrate de importar tu configuración de Firebase
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import Home from '../screens/Home';
import Add from '../screens/Add';
import {onAuthStateChanged} from 'firebase/auth'

const Stack = createNativeStackNavigator();

const Navigation = () => {


  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='SignIn'>
            <Stack.Screen name="Home" component={Home} options={{ title: 'Home' }} />
            <Stack.Screen
              name="Add"
              component={Add}
              options={{ presentation: 'modal', title: 'Agregar productos' }}
            />
            <Stack.Screen name="SignIn" component={SignInScreen} options={{ title: 'Sign In' }} />
            <Stack.Screen name="SignUp" component={SignUpScreen} options={{ title: 'Sign Up' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
