import { useNavigation } from '@react-navigation/native';
import { screenIds } from '../../constants';
import { Avatar, Text, View } from 'native-base';
import { TouchableOpacity } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import { AuthState } from '../../redux/auth/authReducer';

const CustomHeaderComponent = () => {
  const navigation = useNavigation();
  const user = useSelector((state: AuthState) => state.user);

  const onPress = () => {
    // @ts-ignore
    navigation.navigate(screenIds.PROFILE_SCREEN);
  };

  return (
    <View
      flexDirection={'row'}
      alignItems={'center'}
      width={'97%'}
      justifyContent={'space-between'}
    >
      <Text bold italic fontSize={'2xl'} color={'blue.700'}>
        GET TREMP
      </Text>
      <TouchableOpacity onPress={onPress}>
        <Avatar
          // marginRight={'5%'}
          size={'sm'}
          source={{
            uri: user?.profileImage,
          }}
        >
          {user?.email.slice(0, 2).toUpperCase()}
        </Avatar>
      </TouchableOpacity>
    </View>
  );
};

export default CustomHeaderComponent;
