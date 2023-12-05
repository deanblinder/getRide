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
import BackButton from '../components/backButton';
import About from '../screens/about';
import { useTheme } from 'native-base';
import Settings from '../screens/settings';
import { IS_IOS } from '../screens/offerOrEditRides/usePresenter';
import LanguagesScreen from '../screens/languages';

const Stack = createNativeStackNavigator();

const OfferStack: React.FC = () => {
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
        name={screenIds.OFFER_RIDES_OR_EDIT_RIDES_SCREEN}
        component={OfferOrEditRides}
      />
      <Stack.Screen
        options={{
          headerLeft: () => <BackButton />,
          headerTitle: '',
          presentation: 'modal',
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
          headerStyle: {
            backgroundColor: IS_IOS ? colors.blue['50'] : 'white',
          },
          headerTitle: '',
          presentation: 'modal',
        }}
        name={screenIds.SEARCH_RIDE_ORIGIN_SCREEN}
        // @ts-ignore
        component={SearchRidesOrigin}
      />
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: IS_IOS ? colors.blue['50'] : 'white',
          },
          headerTitle: '',
          presentation: 'modal',
        }}
        name={screenIds.RIDE_SCREEN}
        // @ts-ignore
        component={RideScreen}
      />
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: IS_IOS ? colors.blue['50'] : 'white',
          },
          presentation: 'modal',
        }}
        name={screenIds.OFFERING_PROFILE_SCREEN}
        // @ts-ignore
        component={OfferingProfilePresenter}
      />
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: colors.blue['50'] },
          presentation: 'modal',
        }}
        name={screenIds.EDIT_PROFILE_SCREEN}
        // @ts-ignore
        component={EditProfile}
      />
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: IS_IOS ? colors.blue['50'] : 'white',
          },
        }}
        name={screenIds.PROFILE_SCREEN}
        component={Profile}
      />
      <Stack.Screen
        name={screenIds.SETTINGS_SCREEN}
        component={Settings}
        options={{
          headerStyle: {
            backgroundColor: IS_IOS ? colors.blue['50'] : 'white',
          },
          headerLeft: () => <BackButton dismiss />,
          headerTitle: '',
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
          presentation: 'modal',
        }}
      />
      <Stack.Screen
        name={screenIds.LANGUAGE_SCREEN}
        component={LanguagesScreen}
        options={{
          headerStyle: {
            backgroundColor: IS_IOS ? colors.blue['50'] : 'white',
          },
          headerLeft: () => <BackButton dismiss />,
          headerTitle: '',
          presentation: 'modal',
        }}
      />
    </Stack.Navigator>
  );
};

export default OfferStack;
