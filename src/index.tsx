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


export default function App() {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  const isLoggedIn = true;
 

// screenOptions={{ presentation: 'modal' }}
//  <Stack.Group>
// </Stack.Group>
  return (
    <NavigationContainer ref={navigationService.setNavigationRef}>
      <StatusBar style="auto" />
      {
        isLoggedIn ? 
        <Tab.Navigator>
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Chat" component={Chat} />
          <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
        :
        <Stack.Navigator>
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="Login" component={Login} /> 
          <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>   
        }
    </NavigationContainer>
  );
}
registerRootComponent(App);
