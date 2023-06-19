import { registerRootComponent } from 'expo';
import { StatusBar } from 'expo-status-bar';
import Welcome from './screens/welcome';
import Home from './screens/home';
import Chat from './screens/chat';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Register from './screens/register';
import Login from './screens/login';
import { navigationService } from './services';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Profile from './screens/profile';
import Rides from './screens/rides';
import { screenIds } from './constants';
import FindRides from './screens/findRides';
import SearchRides from './screens/searchRides';

export default function App() {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  const isLoggedIn = true;

  // options={{ presentation: 'modal' }}
  //  <Stack.Group>
  // </Stack.Group>
  return (
    <NavigationContainer ref={navigationService.setNavigationRef}>
      <StatusBar style="auto" />
      {isLoggedIn ? (
        <Stack.Navigator>
          <Tab.Group>
            <Tab.Screen name={screenIds.HOME_SCREEN} component={Home} />
            <Tab.Screen name={screenIds.RIDES_SCREEN} component={Rides} />
            <Tab.Screen name={screenIds.PROFILE_SCREEN} component={Profile} />
            <Tab.Screen name={screenIds.CHAT_SCREEN} component={Chat} />
          </Tab.Group>
          <Stack.Group>
            <Stack.Screen
              options={{ presentation: 'modal' }}
              name={screenIds.FIND_RIDE_SCREEN}
              component={FindRides}
            />
            <Stack.Screen
              options={{ presentation: 'modal' }}
              name={screenIds.SEARCH_RIDE_SCREEN}
              component={SearchRides}
            />
          </Stack.Group>
        </Stack.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen name={screenIds.WELCOME_SCREEN} component={Welcome} />
          <Stack.Screen name={screenIds.LOGIN_SCREEN} component={Login} />
          <Stack.Screen name={screenIds.REGISTER_SCREEN} component={Register} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}
registerRootComponent(App);
