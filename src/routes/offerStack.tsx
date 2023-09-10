import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { screenIds } from '../constants';
import SearchRidesDestination from '../screens/searchDestination';
import SearchRidesOrigin from '../screens/searchOrigin';
import RideScreen from '../screens/ride';
import Profile from '../screens/profile';
import OfferOrEditRides from '../screens/offerOrEditRides/offerOrEditRides';
import OfferingProfilePresenter from '../screens/offeringProfile';
import EditProfile from '../screens/editProfile';

const Stack = createNativeStackNavigator();

const OfferStack: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ presentation: 'modal', headerShown: false }}
        name={screenIds.OFFER_RIDES_OR_EDIT_RIDES_SCREEN}
        component={OfferOrEditRides}
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
        name={screenIds.RIDE_SCREEN}
        component={RideScreen}
      />
      <Stack.Screen
        options={{ presentation: 'modal' }}
        name={screenIds.PROFILE_SCREEN}
        component={Profile}
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
    </Stack.Navigator>
  );
};

export default OfferStack;
