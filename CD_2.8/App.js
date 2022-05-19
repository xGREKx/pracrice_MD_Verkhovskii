import React from 'react';

import Login from './screens/Login';
import Register from './screens/Regist';
import NewUser from './screens/NewUser';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
            name="Registration"
            component={Register} />
        <Stack.Screen
          name="Login"
          component={Login}
        />
        <Stack.Screen
          name="NewUser"
          component={NewUser}
        />
      </Stack.Navigator>
    </NavigationContainer>
    );
}

