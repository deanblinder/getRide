import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar, useColorMode, View } from 'native-base';
import { useDispatch, useSelector } from 'react-redux';
import { AuthState } from './redux/auth/authReducer';
import WelcomeStack from './routes/welcomeStack';
import { setUser, setUserLocation } from './redux/auth/authActions';
import { auth } from './config/firebase';
import { getUserById } from './actions/users';
import { getUserLocationAsync } from './actions/common';
import SplashScreen from './screens/splashScreen';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigator from './tabs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import i18next from 'i18next';

const GetRide = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: AuthState) => state.user);

  const [isLoading, setIsLoading] = useState(true);

  const loadSelectedLanguage = async () => {
    try {
      // Retrieve the selected language from AsyncStorage
      const language = await AsyncStorage.getItem('selectedLanguage');
      await i18next.changeLanguage(language || 'he');
    } catch (error) {
      console.error('Error loading language:', error);
    }
  };

  useEffect(() => {
    loadSelectedLanguage();
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        console.log('### user', user);
        const loggedUser = await getUserById(user.uid);
        if (!loggedUser) {
          console.log('### user not found');
          setIsLoading(false);
          return;
        }
        console.log('### logged in', loggedUser);
        dispatch(setUser(loggedUser));
        setIsLoading(false);
        const userLocation = await getUserLocationAsync();
        userLocation &&
          dispatch(
            setUserLocation({
              lat: userLocation.coords.latitude,
              lng: userLocation.coords.longitude,
            })
          );
      } else {
        console.log('### logged outt');
      }
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (isLoading) return <SplashScreen />;

  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      {user ? (
        <Stack.Navigator>
          <Stack.Screen
            name="Main"
            component={TabNavigator}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      ) : (
        <WelcomeStack />
      )}
    </NavigationContainer>
  );
};
export default GetRide;
