import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { screenIds } from '../constants';
import Welcome from '../screens/welcome';
import Register from '../screens/register';
import Login from '../screens/login';

const Stack = createNativeStackNavigator();

const WelcomeStack: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={screenIds.WELCOME_SCREEN} component={Welcome} />
      <Stack.Screen name={screenIds.REGISTER_SCREEN} component={Register} />
      <Stack.Screen name={screenIds.LOGIN_SCREEN} component={Login} />
    </Stack.Navigator>
  );
};

export default WelcomeStack;
