import React from 'react';
import Home from './pages/Home';
import temaDefault from './global/themes/default' 
import { ThemeProvider } from 'styled-components/native';
import {useFonts, Roboto_100Thin, Roboto_400Regular, Roboto_700Bold} from '@expo-google-fonts/roboto'
import {BebasNeue_400Regular} from '@expo-google-fonts/bebas-neue'
import AppLoading from 'expo-app-loading'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import { Detail } from './pages/Details';

export default function App() {
  const stack = createNativeStackNavigator()

  const [carregou] = useFonts({ Roboto_100Thin, Roboto_400Regular, Roboto_700Bold, BebasNeue_400Regular })
  
  if(!carregou){
    return <AppLoading />
  }

  return(
    <ThemeProvider theme={temaDefault}>
      <NavigationContainer>
        <stack.Navigator screenOptions= {{headerShown: false}}>
          <stack.Screen name= "Home" component={Home}/>
          <stack.Screen name= "Details" component={Detail}/>
        </stack.Navigator>
      </NavigationContainer> 
    </ThemeProvider>
  )}