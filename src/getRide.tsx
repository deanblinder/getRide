import React, { useEffect } from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import OfferStack from './routes/offerStack';
import SearchStack from './routes/searchStack';
import RidesStack from './routes/ridesStack';
import { View, Avatar, Text, StatusBar } from 'native-base';
import { TouchableOpacity } from 'react-native';
import { screenIds } from './constants';
import { useDispatch, useSelector } from 'react-redux';
import { AuthState } from './redux/auth/authReducer';
import WelcomeStack from './routes/welcomeStack';
import { setUser, setUserLocation } from './redux/auth/authActions';
import { auth } from './config/firebase';
import { getUserById } from './actions/users';
import { getUserLocationAsync } from './actions/common';
import { Feather, Ionicons, AntDesign } from '@expo/vector-icons';

const GetRide = () => {
  const dispatch = useDispatch();

  const Tab = createBottomTabNavigator();
  const user = useSelector((state: AuthState) => state.user);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const loggedUser = await getUserById(user.uid);
        dispatch(setUser(loggedUser));
        const userLocation = await getUserLocationAsync();
        userLocation &&
          dispatch(
            setUserLocation({
              lat: userLocation.coords.latitude,
              lng: userLocation.coords.longitude,
            })
          );
      } else {
        console.log('### logged out');
      }
    });

    return () => unsubscribe();
  }, []);

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
        <Text bold italic fontSize={'2xl'} color={'blue.700'}>
          GET TREMP
        </Text>
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
      <StatusBar barStyle="dark-content" />

      {user ? (
        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerTitle: () => <CustomHeaderComponent />,
            headerShown: true,
          })}
        >
          <Tab.Screen
            name="Search"
            component={SearchStack}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Feather name={'search'} size={size} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Offer"
            component={OfferStack}
            options={{
              tabBarIcon: ({ color }) => (
                <Ionicons name={'add'} size={35} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Rides"
            component={RidesStack}
            options={{
              tabBarIcon: ({ focused, color, size }) => (
                <AntDesign name={'car'} size={size} color={color} />
              ),
            }}
          />
        </Tab.Navigator>
      ) : (
        <WelcomeStack />
      )}
    </NavigationContainer>
  );
};
export default GetRide;
