import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Landing from './src/pages/Landing';
import { AppLoading } from 'expo';

import { Archivo_400Regular, Archivo_700Bold, useFonts } from '@expo-google-fonts/archivo';
import { Poppins_400Regular, Poppins_600SemiBold } from '@expo-google-fonts/poppins';

import AppStack from './src/routes/AppStack';

export default function App() {
  let [fontsLoaded] = useFonts({
    Archivo_400Regular,
    Archivo_700Bold,
    Poppins_400Regular,
    Poppins_600SemiBold
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <>
        <AppStack />
        <StatusBar style="light" />
      </>
    );
  }
}

// npm install expo --global      (expo init mobile -> blank typescript )

// Fonts for expo from google fonts
// expo install expo-font @expo-google-fonts/archivo @expo-google-fonts/poppins

// React navigation (https://reactnavigation.org/   ->  read docs)
// npm install @react-navigation/native
// expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view

// Stack and Tabs navigation
// npm install @react-navigation/stack
// npm install @react-navigation/bottom-tabs

// Conexão com a API
// npm install axios

// Storage on phone
// expo install @react-native-community/async-storage

// Upgrades
// npm install @react-native-community/picker --save
// Para fazer caixas de seleção na aba de listagem de professores