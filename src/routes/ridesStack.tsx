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
import BackButton from '../components/backButton';
import HeaderLogo from '../components/headerLogo';
import UserAvatar from '../components/userAvatar';
import About from '../screens/about';
import { useTheme } from 'native-base';

const Stack = createNativeStackNavigator();

const RidesStack = () => {
  const { colors } = useTheme();

  return (
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen
          name={screenIds.RIDES_SCREEN}
          component={Rides}
          options={{
            headerStyle: { backgroundColor: colors.blue['50'] },
            headerTitle: '',
            headerLeft: () => <HeaderLogo />,
            headerRight: () => <UserAvatar />,
            headerShown: true,
          }}
        />
        <Stack.Screen
          options={{
            headerStyle: { backgroundColor: colors.blue['50'] },
            headerLeft: () => <BackButton />,
            headerTitle: '',
          }}
          name={screenIds.RIDE_SCREEN}
          // @ts-ignore
          component={RideScreen}
        />
        <Stack.Screen
          options={{
            headerStyle: { backgroundColor: colors.blue['50'] },
            presentation: 'modal',
            headerShown: false,
            headerTitle: '',
          }}
          name={screenIds.SEARCH_RIDE_DESTINATION_SCREEN}
          // @ts-ignore
          component={SearchRidesDestination}
        />
        <Stack.Screen
          options={{
            headerStyle: { backgroundColor: colors.blue['50'] },
            presentation: 'modal',
            headerShown: false,
            headerTitle: '',
          }}
          name={screenIds.SEARCH_RIDE_ORIGIN_SCREEN}
          // @ts-ignore
          component={SearchRidesOrigin}
        />
        <Stack.Screen
          options={{
            headerStyle: { backgroundColor: colors.blue['50'] },
            presentation: 'modal',
            headerShown: false,
            headerTitle: '',
          }}
          name={screenIds.OFFERING_PROFILE_SCREEN}
          // @ts-ignore
          component={OfferingProfilePresenter}
        />
        <Stack.Screen
          options={{
            headerStyle: { backgroundColor: colors.blue['50'] },
            headerTitle: '',
            presentation: 'modal',
          }}
          name={screenIds.EDIT_PROFILE_SCREEN}
          // @ts-ignore
          component={EditProfile}
        />
        <Stack.Screen
          options={{
            headerTitle: '',
            headerStyle: { backgroundColor: colors.blue['50'] },
            headerLeft: () => <BackButton />,
            // presentation: 'modal',
          }}
          name={screenIds.OFFER_RIDES_OR_EDIT_RIDES_SCREEN}
          component={OfferOrEditRides}
        />
        <Stack.Screen
          options={{ headerStyle: { backgroundColor: colors.blue['50'] } }}
          name={screenIds.PROFILE_SCREEN}
          component={Profile}
        />
        <Stack.Screen
          name={screenIds.SETTINGS_SCREEN}
          component={About}
          options={{
            headerStyle: { backgroundColor: colors.blue['50'] },
            headerLeft: () => <BackButton dismiss />,
            headerTitle: 'About',
            presentation: 'modal',
          }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default RidesStack;
