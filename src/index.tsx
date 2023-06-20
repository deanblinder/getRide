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
import { useSelector } from 'react-redux';
import {State} from './redux/auth/authReducer';
import { View } from 'react-native';
import SearchRidesOrigin from './screens/searchOrigin';
import SearchRidesDestination from './screens/searchDestination';

const App = () => {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  
  const isLoggedIn = useSelector((state: State) => state.isLoggedIn);

  const SearchRideStack = () => {
    return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen options={{presentation:'modal'}} name={screenIds.SEARCH_RIDE_SCREEN} component={SearchRides} />
      <Stack.Screen options={{presentation:'modal'}} name={screenIds.SEARCH_RIDE_ORIGIN_SCREEN} component={SearchRidesOrigin} />
      <Stack.Screen options={{presentation:'modal'}} name={screenIds.SEARCH_RIDE_DESTINATION_SCREEN} component={SearchRidesDestination} />
    </Stack.Navigator>
    );
  }
  
  const HomeStack = () => {
    return (
    <Stack.Navigator>
      <Stack.Screen name={screenIds.HOME_SCREEN} component={Home}/>
      <Stack.Screen options={{presentation:'modal'}} name={screenIds.FIND_RIDE_SCREEN} component={FindRides} />
      <Stack.Screen options={{presentation:'modal'}} name={screenIds.SEARCH_RIDE_ORIGIN_SCREEN} component={SearchRideStack} />
      <Stack.Screen name={screenIds.SEARCH_RIDE_DESTINATION_SCREEN} component={SearchRidesDestination} />
    </Stack.Navigator>
    );
  }

  const RidesStack = () => {
    return (
    <Stack.Navigator>
      <Stack.Screen name={screenIds.RIDES_SCREEN} component={Rides}/>
    </Stack.Navigator>
    );
  }

  const ProfileStack = () => {
    return (
    <Stack.Navigator>
      <Stack.Screen name={screenIds.PROFILE_SCREEN} component={Profile}/>
    </Stack.Navigator>
    );
  }

  const ChatStack = () => {
    return (
    <Stack.Navigator>
      <Stack.Screen name={screenIds.CHAT_SCREEN} component={Chat}/>
    </Stack.Navigator>
    );
  }
  

  return (
    <NavigationContainer ref={navigationService.setNavigationRef}>
      <StatusBar style="auto" />
      {isLoggedIn ? (
        <Tab.Navigator screenOptions={{headerShown:false}}>
          <Tab.Screen name="Home" component={HomeStack}/>
          <Tab.Screen name="Rides" component={RidesStack} />
          <Tab.Screen name="Profile" component={ProfileStack} />
          <Tab.Screen name="Chat" component={ChatStack} />
        </Tab.Navigator>
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
export default App;