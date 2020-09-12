import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { DonationsList } from './src/screens/DonationsList'
import { DonationType } from './src/screens/DonationType'
import { RegularForm } from './src/screens/RegularForm'
import { TargetForm } from './src/screens/TargetForm'
import { OtherTargetForm } from './src/screens/OtherTargetForm'

const Stack = createStackNavigator();

const theme = {
  colors: {
    dark: '#050505',
    light: '#FFF',
    button: '#1B9AAA',
    textLight: '#FFFFFF',
    textDark: '#000000',
    input: '#DDDBCB',
  }
}


export default function App() {
  const [header, setHeader] = useState('Пожертвования');
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          cardStyle: { backgroundColor: theme.colors.light }
        }}>
        <Stack.Screen
          name="Пожертвования"
          component={DonationsList}
          options={{
            headerTintColor: theme.colors.textDark,
            headerStyle: { backgroundColor: theme.colors.light },
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 20
            },
          }}
        />
         <Stack.Screen
          name="Тип сбора"
          component={DonationType}
          options={{
            headerTintColor: theme.colors.textDark,
            headerStyle: { backgroundColor: theme.colors.light },
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 20
            },
          }}
        />
         <Stack.Screen
          name="Целевой сбор"
          component={TargetForm}
          options={{
            headerTintColor: theme.colors.textDark,
            headerStyle: { backgroundColor: theme.colors.light },
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 20
            },
          }}
        />
        <Stack.Screen
          name="Продолжение"
          component={OtherTargetForm}
          options={{
            headerTintColor: theme.colors.textDark,
            headerStyle: { backgroundColor: theme.colors.light },
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 20
            },
          }}
        />
         <Stack.Screen
          name="Регулярный сбор"
          component={RegularForm}
          options={{
            headerTintColor: theme.colors.textDark,
            headerStyle: { backgroundColor: theme.colors.light },
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 20
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}