import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { screenIds } from '../constants';
import Register from '../screens/register';
import Login from '../screens/login';
import { useTheme } from 'native-base';

const Stack = createNativeStackNavigator();

const WelcomeStack: React.FC = () => {
  const { colors } = useTheme();

  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerTitle: 'REGISTER',
          headerStyle: { backgroundColor: colors.blue['50'] },
        }}
        name={screenIds.REGISTER_SCREEN}
        component={Register}
      />
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: colors.blue['50'] },
          headerTitle: 'LOGIN',
        }}
        name={screenIds.LOGIN_SCREEN}
        component={Login}
      />
    </Stack.Navigator>
  );
};

export default WelcomeStack;
