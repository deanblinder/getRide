import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RideScreen from '../screens/ride';
import screenIds from '../constants/screenIds';
import Rides from '../screens/upcomingRides';
import React from 'react';
import Profile from '../screens/profile';
import SearchRidesDestination from '../screens/searchDestination';
import SearchRidesOrigin from '../screens/searchOrigin';
import OfferingProfilePresenter from '../screens/offeringProfile';
import EditProfile from '../screens/editProfile';
import OfferOrEditRides from '../screens/offerOrEditRides/offerOrEditRides';

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
          options={{ presentation: 'modal', headerShown: false }}
          name={screenIds.SEARCH_RIDE_DESTINATION_SCREEN}
          component={SearchRidesDestination}
        />
        <Stack.Screen
          options={{ presentation: 'modal', headerShown: false }}
          name={screenIds.SEARCH_RIDE_ORIGIN_SCREEN}
          component={SearchRidesOrigin}
        />
        <Stack.Screen
          options={{ presentation: 'modal', headerShown: false }}
          name={screenIds.OFFERING_PROFILE_SCREEN}
          component={OfferingProfilePresenter}
        />
        <Stack.Screen
          options={{ presentation: 'modal' }}
          name={screenIds.EDIT_PROFILE_SCREEN}
          component={EditProfile}
        />
        <Stack.Screen
          options={{ presentation: 'modal' }}
          name={screenIds.OFFER_RIDES_OR_EDIT_RIDES_SCREEN}
          component={OfferOrEditRides}
        />
        <Stack.Screen
          options={{ presentation: 'modal' }}
          name={screenIds.PROFILE_SCREEN}
          component={Profile}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default RidesStack;
