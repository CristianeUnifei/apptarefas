import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TelaInicial from './src/componentes/TelaInicial';
import TelaBemVindo from './src/componentes/TelaBemVindo';
import TelaResultados from './src/componentes/TelaResultado';
import TelaTarefas from './src/componentes/TelaTarefas';

const Stack = createNativeStackNavigator();

export default function App() {
  return (

    <NavigationContainer>

      <Stack.Navigator initialRouteName="TelaInicial">
        <Stack.Screen name="TelaInicial" component={TelaInicial}  />
        <Stack.Screen name="TelaBemVindo" component={TelaBemVindo} />
        <Stack.Screen name="TelaResultados" component={TelaResultados} />
        <Stack.Screen name="TelaTarefas" component={TelaTarefas} />

      </Stack.Navigator>

    </NavigationContainer>

  );
}
