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
import CustomHeader from '../components/CustomHeader';
import BackButton from '../components/backButton';

const Stack = createNativeStackNavigator();

const RidesStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen
          name={screenIds.RIDES_SCREEN}
          component={Rides}
          options={{
            headerTitle: () => <CustomHeader />,
            headerShown: true,
          }}
        />
        <Stack.Screen
          options={{ headerTitle: '' }}
          name={screenIds.RIDE_SCREEN}
          // @ts-ignore
          component={RideScreen}
        />
        <Stack.Screen
          options={{
            presentation: 'fullScreenModal',
            headerShown: false,
            headerTitle: '',
          }}
          name={screenIds.SEARCH_RIDE_DESTINATION_SCREEN}
          // @ts-ignore
          component={SearchRidesDestination}
        />
        <Stack.Screen
          options={{
            presentation: 'fullScreenModal',
            headerShown: false,
            headerTitle: '',
          }}
          name={screenIds.SEARCH_RIDE_ORIGIN_SCREEN}
          // @ts-ignore
          component={SearchRidesOrigin}
        />
        <Stack.Screen
          options={{
            presentation: 'fullScreenModal',
            headerShown: false,
            headerTitle: '',
          }}
          name={screenIds.OFFERING_PROFILE_SCREEN}
          // @ts-ignore
          component={OfferingProfilePresenter}
        />
        <Stack.Screen
          options={{ headerTitle: '', presentation: 'fullScreenModal' }}
          name={screenIds.EDIT_PROFILE_SCREEN}
          // @ts-ignore
          component={EditProfile}
        />
        <Stack.Screen
          options={{
            headerLeft: () => <BackButton dismiss />,
            headerTitle: '',
            presentation: 'fullScreenModal',
          }}
          name={screenIds.OFFER_RIDES_OR_EDIT_RIDES_SCREEN}
          component={OfferOrEditRides}
        />
        <Stack.Screen name={screenIds.PROFILE_SCREEN} component={Profile} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default RidesStack;
