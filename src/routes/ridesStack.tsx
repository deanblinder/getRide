import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RideScreen from '../screens/ride';
import screenIds from '../constants/screenIds';
import Rides from '../screens/upcomingRides';
import React from 'react';
import Profile from '../screens/profile';
import EditRide from '../screens/editRide';

const Stack = createNativeStackNavigator();

const RidesStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen
          name={screenIds.RIDES_SCREEN}
          component={Rides}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          options={{ presentation: 'modal' }}
          name={screenIds.RIDE_SCREEN}
          component={RideScreen}
        />
        <Stack.Screen
          options={{ presentation: 'modal' }}
          name={screenIds.PROFILE_SCREEN}
          component={Profile}
        />
        <Stack.Screen
          options={{ presentation: 'modal' }}
          name={screenIds.EDIT_RIDE_SCREEN}
          component={EditRide}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default RidesStack;
