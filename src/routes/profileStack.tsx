import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from '../screens/profile';
import screenIds from '../constants/screenIds';
import React from 'react';

const Stack = createNativeStackNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screenIds.PROFILE_SCREEN}
        component={Profile}
        options={{ headerShown: false, presentation: 'modal' }}
      />
    </Stack.Navigator>
  );
};
export default ProfileStack;
