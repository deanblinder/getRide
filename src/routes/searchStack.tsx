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
import About from '../screens/about';
import { useTheme } from 'native-base';
import Settings from '../screens/settings';
import { IS_IOS } from '../screens/offerOrEditRides/usePresenter';

const Stack = createNativeStackNavigator();

const SearchStack: React.FC = () => {
  const { colors } = useTheme();
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerTitle: '',
          headerLeft: () => <HeaderLogo />,
          headerRight: () => <UserAvatar />,
          headerShown: true,
          headerStyle: {
            backgroundColor: IS_IOS ? colors.blue['50'] : 'white',
          },
        }}
        name={screenIds.SEARCH_RIDE_SCREEN}
        component={SearchRides}
      />
      <Stack.Screen
        headerTitle=""
        options={{
          presentation: 'modal',
          headerTitle: '',
          headerStyle: {
            backgroundColor: IS_IOS ? colors.blue['50'] : 'white',
          },
        }}
        name={screenIds.SEARCH_RIDE_DESTINATION_SCREEN}
        // @ts-ignore
        component={SearchRidesDestination}
      />
      <Stack.Screen
        options={{
          presentation: 'modal',
          headerTitle: '',
          headerStyle: {
            backgroundColor: IS_IOS ? colors.blue['50'] : 'white',
          },
        }}
        name={screenIds.SEARCH_RIDE_ORIGIN_SCREEN}
        // @ts-ignore
        component={SearchRidesOrigin}
      />
      <Stack.Screen
        options={{
          headerLeft: () => <BackButton />,
          headerTitle: '',
          headerStyle: {
            backgroundColor: IS_IOS ? colors.blue['50'] : 'white',
          },
        }}
        name={screenIds.RIDE_SCREEN}
        // @ts-ignore
        component={RideScreen}
      />
      <Stack.Screen
        options={{
          presentation: 'modal',
          headerTitle: '',
          headerStyle: {
            backgroundColor: IS_IOS ? colors.blue['50'] : 'white',
          },
        }}
        name={screenIds.OFFERING_PROFILE_SCREEN}
        // @ts-ignore
        component={OfferingProfilePresenter}
      />
      <Stack.Screen
        options={{
          presentation: 'modal',
          headerTitle: '',
          headerStyle: {
            backgroundColor: IS_IOS ? colors.blue['50'] : 'white',
          },
        }}
        name={screenIds.EDIT_PROFILE_SCREEN}
        // @ts-ignore
        component={EditProfile}
      />
      <Stack.Screen
        name={screenIds.PROFILE_SCREEN}
        component={Profile}
        options={{
          headerLeft: () => <BackButton />,
          headerStyle: {
            backgroundColor: IS_IOS ? colors.blue['50'] : 'white',
          },
        }}
      />
      <Stack.Screen
        name={screenIds.SETTINGS_SCREEN}
        component={Settings}
        options={{
          headerLeft: () => <BackButton dismiss />,
          headerTitle: 'Settings',
          headerStyle: {
            backgroundColor: IS_IOS ? colors.blue['50'] : 'white',
          },
        }}
      />
      <Stack.Screen
        name={screenIds.ABOUT_SCREEN}
        component={About}
        options={{
          headerStyle: {
            backgroundColor: IS_IOS ? colors.blue['50'] : 'white',
          },
          headerLeft: () => <BackButton dismiss />,
          headerTitle: 'Settings',
          presentation: 'modal',
        }}
      />
    </Stack.Navigator>
  );
};

export default SearchStack;
