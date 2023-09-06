import React, { useEffect, useState } from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import OfferStack from './routes/offerStack';
import SearchStack from './routes/searchStack';
import RidesStack from './routes/ridesStack';
import { View, Avatar } from 'native-base';
import { TouchableOpacity } from 'react-native';
import { screenIds } from './constants';
import { useDispatch, useSelector } from 'react-redux';
import { AuthState } from './redux/auth/authReducer';
import WelcomeStack from './routes/welcomeStack';
import { usersActions } from './actions';
import { setUser } from './redux/auth/authActions';

const GetRide = () => {
  const dispatch = useDispatch();

  const Tab = createBottomTabNavigator();
  const user = useSelector((state: AuthState) => state.user);
  console.log('###user', user);
  const [profileImage, setProfileImage] = useState('');

  // useEffect(() => {
  //   getUser();
  // }, []);
  //
  // const getUser = async () => {
  //   const user = await usersActions.getUserById('LdjM9Tk4UwVXW5b4EKqeGIAdtlH3');
  //   user && dispatch(setUser(user));
  // };

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
          justifyContent: 'flex-end',
        }}
      >
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
