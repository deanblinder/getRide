import React, { useEffect } from 'react';
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
import { setUser } from './redux/auth/authActions';
import { auth } from './config/firebase';
import { getUserById } from './actions/users';
import { getUserLocationAsync } from './actions/common';
const GetRide = () => {
  const dispatch = useDispatch();

  const Tab = createBottomTabNavigator();
  const user = useSelector((state: AuthState) => state.user);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const loggedUser = await getUserById(user.uid);
        dispatch(setUser(loggedUser));
        getUserLocationAsync();
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
            headerShown: true,
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
