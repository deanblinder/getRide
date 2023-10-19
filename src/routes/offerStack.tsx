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
import RidesStack from './ridesStack';
import HeaderLogo from '../components/headerLogo';
import UserAvatar from '../components/userAvatar';

const Stack = createNativeStackNavigator();

const OfferStack: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerTitle: '',
          headerLeft: () => <HeaderLogo />,
          headerRight: () => <UserAvatar />,
          headerShown: true,
        }}
        name={screenIds.OFFER_RIDES_OR_EDIT_RIDES_SCREEN}
        component={OfferOrEditRides}
      />
      <Stack.Screen
        options={{ presentation: 'fullScreenModal' }}
        name={screenIds.SEARCH_RIDE_DESTINATION_SCREEN}
        // @ts-ignore
        component={SearchRidesDestination}
      />
      <Stack.Screen
        options={{ headerTitle: '', presentation: 'fullScreenModal' }}
        name={screenIds.SEARCH_RIDE_ORIGIN_SCREEN}
        // @ts-ignore
        component={SearchRidesOrigin}
      />
      <Stack.Screen
        options={{ headerTitle: '', presentation: 'fullScreenModal' }}
        name={screenIds.RIDE_SCREEN}
        // @ts-ignore
        component={RideScreen}
      />
      <Stack.Screen name={screenIds.RIDES_SCREEN} component={RidesStack} />
      <Stack.Screen
        options={{ presentation: 'fullScreenModal' }}
        name={screenIds.OFFERING_PROFILE_SCREEN}
        // @ts-ignore
        component={OfferingProfilePresenter}
      />
      <Stack.Screen
        options={{ presentation: 'fullScreenModal' }}
        name={screenIds.EDIT_PROFILE_SCREEN}
        // @ts-ignore
        component={EditProfile}
      />
      <Stack.Screen name={screenIds.PROFILE_SCREEN} component={Profile} />
    </Stack.Navigator>
  );
};

export default OfferStack;
