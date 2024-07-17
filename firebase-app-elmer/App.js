// App.js o componente principal
import React from 'react';
import Navigation from './src/navigation/Navigation';
import { auth } from './src/config/firebase'; // Ajusta la ruta según sea necesario

export default function App() {
  return (
    <Navigation />
  );
}

