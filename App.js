import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import TelaInicial from './screens/TelaInicial';
import TelaSecundaria from './screens/TelaSecundaria';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

const AppNavigator = createStackNavigator(
  {
    TelaInicial: {
      screen: TelaInicial,
      navigationOptions: {
        title: 'MyCircle',
        headerShown: true,
        headerTitleAlign: 'center',
      },
    },
    TelaSecundaria: {
      screen: TelaSecundaria,
      navigationOptions: {
        title: 'Fotos',
        headerShown: true,
        headerTitleAlign: 'center',
      },
    },
  },
  {
    initialRouteName: 'TelaInicial',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#6750a4',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);

const theme = {
  ...DefaultTheme,
};

const AppContainer = createAppContainer(AppNavigator);

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <AppContainer />
    </PaperProvider>
  );
}
