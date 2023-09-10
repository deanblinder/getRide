import React, { useEffect, useState } from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import OfferStack from './routes/offerStack';
import SearchStack from './routes/searchStack';
import RidesStack from './routes/ridesStack';
import { View, Avatar, Text } from 'native-base';
import { TouchableOpacity } from 'react-native';
import { screenIds } from './constants';
import { useDispatch, useSelector } from 'react-redux';
import { AuthState } from './redux/auth/authReducer';
import WelcomeStack from './routes/welcomeStack';
import { setUser, setUserLocation } from './redux/auth/authActions';
import * as Location from 'expo-location';
import { auth } from './config/firebase';
import { getUserById } from './actions/users';
import { usersActions } from './actions';

const GetRide = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const dispatch = useDispatch();

  const Tab = createBottomTabNavigator();
  const user = useSelector((state: AuthState) => state.user);

  // useEffect(() => {
  //   // getUser();
  //   getLocationAsync();

  useEffect(() => {
    getLocationAsync();
    // Listen for authentication state changes
    // const unsubscribe = auth.onAuthStateChanged((user) => {
    //   if (user) {
    //     console.log('### logged in', user);
    //     setIsLoggedIn(true);
    //     const loggedUser = getUserById(user.uid);
    //     // dispatch(setUser(loggedUser));
    //     // User is signed in. You can navigate to the main app screen.
    //   } else {
    //     console.log('### logged out');
    //     // User is not signed in. You may want to display the login screen.
    //   }
    // });
    //
    // // Cleanup the listener when the component unmounts
    // return () => unsubscribe();
  }, []);

  const getUser = async () => {
    const user = await usersActions.getUserById('2hTc7yXcN4SoyyTbQbdLNgj0gwW2');
    user && dispatch(setUser(user));
  };

  const getLocationAsync = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      console.log('Permission to access location was denied');
      return;
    }

    const location = await Location.getCurrentPositionAsync({});
    dispatch(
      setUserLocation({
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      })
    );
  };

  // useEffect(() => {
  //   user?.profileImage && setProfileImage(user?.profileImage);
  // }, [user?.profileImage]);

  const CustomHeaderComponent = () => {
    const navigation = useNavigation();

    const onPress = () => {
      // @ts-ignore
      navigation.navigate(screenIds.PROFILE_SCREEN);
    };

    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Text>Tremp</Text>
        <TouchableOpacity onPress={onPress}>
          <Avatar
            size={'sm'}
            source={{
              uri: user?.profileImage,
            }}
          />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <NavigationContainer>
      {user ? (
        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerTitle: () => <CustomHeaderComponent />,
          })}
        >
          <Tab.Screen name="Search" component={SearchStack} />
          <Tab.Screen name="Offer" component={OfferStack} />
          <Tab.Screen name="Rides" component={RidesStack} />
        </Tab.Navigator>
      ) : (
        <WelcomeStack />
      )}
    </NavigationContainer>
  );
};
export default GetRide;
