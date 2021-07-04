import { StatusBar } from 'expo-status-bar';
import React from 'react';

import {Nunito_400Regular, Nunito_600SemiBold, Nunito_700Bold, useFonts} from '@expo-google-fonts/nunito';
import {Poppins_400Regular, Poppins_600SemiBold, Poppins_700Bold} from '@expo-google-fonts/poppins';

import Login from './src/pages/Login';

export default function App() {
  useFonts({
    Nunito_400Regular, Nunito_600SemiBold, Nunito_700Bold,
    Poppins_400Regular, Poppins_600SemiBold, Poppins_700Bold
  });

  return (
    <>
      <Login />
      <StatusBar style="auto"/>
    </>
  );
}