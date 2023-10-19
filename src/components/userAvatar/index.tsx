import { Avatar } from 'native-base';
import React from 'react';
import { useSelector } from 'react-redux';
import { AuthState } from '../../redux/auth/authReducer';
import { screenIds } from '../../constants';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const UserAvatar = () => {
  const user = useSelector((state: AuthState) => state.user);
  const navigation = useNavigation();

  const onPress = () => {
    // @ts-ignore
    navigation.navigate(screenIds.PROFILE_SCREEN);
  };

  return (
    <TouchableOpacity onPress={onPress}>
      <Avatar
        size={'sm'}
        source={{
          uri: user?.profileImage,
        }}
      >
        {user?.email.slice(0, 2).toUpperCase()}
      </Avatar>
    </TouchableOpacity>
  );
};
export default UserAvatar;
