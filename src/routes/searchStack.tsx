import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchRides from '../screens/searchRides';
import { screenIds } from '../constants';
import SearchRidesDestination from '../screens/searchDestination';
import SearchRidesOrigin from '../screens/searchOrigin';
import RideScreen from '../screens/ride';
import Profile from '../screens/profile';
import OfferingProfilePresenter from '../screens/offeringProfile';
import EditProfile from '../screens/editProfile';

const Stack = createNativeStackNavigator();

const SearchStack: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ presentation: 'modal', headerShown: false }}
        name={screenIds.SEARCH_RIDE_SCREEN}
        component={SearchRides}
      />
      <Stack.Screen
        options={{ presentation: 'modal', headerShown: false }}
        name={screenIds.SEARCH_RIDE_DESTINATION_SCREEN}
        // @ts-ignore
        component={SearchRidesDestination}
      />
      <Stack.Screen
        options={{ presentation: 'modal', headerShown: false }}
        name={screenIds.SEARCH_RIDE_ORIGIN_SCREEN}
        // @ts-ignore
        component={SearchRidesOrigin}
      />
      <Stack.Screen
        options={{ presentation: 'modal', headerShown: false }}
        name={screenIds.RIDE_SCREEN}
        // @ts-ignore
        component={RideScreen}
      />
      <Stack.Screen
        options={{ presentation: 'modal', headerShown: false }}
        name={screenIds.OFFERING_PROFILE_SCREEN}
        // @ts-ignore
        component={OfferingProfilePresenter}
      />
      <Stack.Screen
        options={{ presentation: 'modal' }}
        name={screenIds.EDIT_PROFILE_SCREEN}
        // @ts-ignore
        component={EditProfile}
      />
      <Stack.Screen
        options={{ presentation: 'modal' }}
        name={screenIds.PROFILE_SCREEN}
        component={Profile}
      />
    </Stack.Navigator>
  );
};

export default SearchStack;
