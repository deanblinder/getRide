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
import BackButton from '../components/backButton';
import UserAvatar from '../components/userAvatar';
import HeaderLogo from '../components/headerLogo';

const Stack = createNativeStackNavigator();

const SearchStack: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerTitle: '',
          headerLeft: () => <HeaderLogo />,
          headerRight: () => <UserAvatar />,
          headerShown: true,
        }}
        name={screenIds.SEARCH_RIDE_SCREEN}
        component={SearchRides}
      />
      <Stack.Screen
        headerTitle=""
        options={{ presentation: 'fullScreenModal', headerTitle: '' }}
        name={screenIds.SEARCH_RIDE_DESTINATION_SCREEN}
        // @ts-ignore
        component={SearchRidesDestination}
      />
      <Stack.Screen
        options={{ presentation: 'fullScreenModal', headerTitle: '' }}
        name={screenIds.SEARCH_RIDE_ORIGIN_SCREEN}
        // @ts-ignore
        component={SearchRidesOrigin}
      />
      <Stack.Screen
        options={{ headerLeft: () => <BackButton />, headerTitle: '' }}
        name={screenIds.RIDE_SCREEN}
        // @ts-ignore
        component={RideScreen}
      />
      <Stack.Screen
        options={{ presentation: 'fullScreenModal', headerTitle: '' }}
        name={screenIds.OFFERING_PROFILE_SCREEN}
        // @ts-ignore
        component={OfferingProfilePresenter}
      />
      <Stack.Screen
        options={{ presentation: 'fullScreenModal', headerTitle: '' }}
        name={screenIds.EDIT_PROFILE_SCREEN}
        // @ts-ignore
        component={EditProfile}
      />
      <Stack.Screen
        name={screenIds.PROFILE_SCREEN}
        component={Profile}
        options={{ headerLeft: () => <BackButton /> }}
      />
    </Stack.Navigator>
  );
};

export default SearchStack;
