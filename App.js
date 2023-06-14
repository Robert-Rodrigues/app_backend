import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import { store } from './screens/store';

import TelaInicial from './screens/TelaInicial';
import TelaSecundaria from './screens/TelaSecundaria';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="TelaInicial" component={TelaInicial} />
          <Stack.Screen name="TelaSecundaria" component={TelaSecundaria} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
