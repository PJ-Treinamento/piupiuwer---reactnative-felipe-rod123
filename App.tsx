import { StatusBar } from 'expo-status-bar';
import React from 'react';

import {Nunito_400Regular, Nunito_600SemiBold, Nunito_700Bold, useFonts} from '@expo-google-fonts/nunito';
import {Poppins_400Regular, Poppins_600SemiBold, Poppins_700Bold} from '@expo-google-fonts/poppins';

import Login from './src/pages/Login';
import Feed from './src/pages/Feed';

export default function App() {
  useFonts({
    Nunito_400Regular, Nunito_600SemiBold, Nunito_700Bold,
    Poppins_400Regular, Poppins_600SemiBold, Poppins_700Bold
  });

  return (
    <>
      <Feed />
      <StatusBar style="auto"/>
    </>
  );
}

/*
import React from 'react';
import { NativeRouter } from "react-router-native";
import { StatusBar } from 'expo-status-bar';

import Routes from '../mobile/src/routes';
import { AuthProvider } from '../mobile/src/hooks/auth';

import {Nunito_400Regular, Nunito_600SemiBold, Nunito_700Bold, useFonts} from '@expo-google-fonts/nunito';
import {Poppins_400Regular, Poppins_600SemiBold, Poppins_700Bold} from '@expo-google-fonts/poppins';

const App: React.FC = () =>{
  useFonts({
    Nunito_400Regular, Nunito_600SemiBold, Nunito_700Bold,
    Poppins_400Regular, Poppins_600SemiBold, Poppins_700Bold
  });
  
  return (
    <AuthProvider>
      <NativeRouter>
        <StatusBar style="auto"/>
        <Routes/>
      </NativeRouter>
    </AuthProvider>
  );
}

export default App;
*/