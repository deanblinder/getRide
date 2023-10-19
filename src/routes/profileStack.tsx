import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from '../screens/profile';
import screenIds from '../constants/screenIds';
import React from 'react';
import OfferingProfilePresenter from '../screens/offeringProfile';

const Stack = createNativeStackNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screenIds.PROFILE_SCREEN}
        component={Profile}
        options={{ headerShown: false, presentation: 'modal' }}
      />
      <Stack.Screen
        options={{ presentation: 'modal', headerShown: false }}
        name={screenIds.OFFERING_PROFILE_SCREEN}
        // @ts-ignore
        component={OfferingProfilePresenter}
      />
    </Stack.Navigator>
  );
};
export default ProfileStack;
