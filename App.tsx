import 'react-native-gesture-handler';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import {Nunito_400Regular, Nunito_600SemiBold, Nunito_700Bold, useFonts} from '@expo-google-fonts/nunito';
import {Poppins_400Regular, Poppins_600SemiBold, Poppins_700Bold} from '@expo-google-fonts/poppins';

import Routes from './src/hooks';
import { AuthProvider } from './src/hooks/auth';

export default function App() {
  useFonts({
    Nunito_400Regular, Nunito_600SemiBold, Nunito_700Bold,
    Poppins_400Regular, Poppins_600SemiBold, Poppins_700Bold
  });

  return (
    <NavigationContainer>
      <AuthProvider>
        <Routes />
      </AuthProvider> 
    </NavigationContainer>   
  );
}
