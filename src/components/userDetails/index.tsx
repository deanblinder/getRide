import { Text, View } from 'native-base';
import typography from 'native-base/src/theme/base/typography';
import React from 'react';
import { User } from '../../typing';
import { Linking } from 'react-native';
import {Entypo} from "@expo/vector-icons";

type Props = {
  user: User;
  showDataUserData: boolean;
};

const UserDetails = (props: Props) => {
  const { user, showDataUserData = false } = props;

  const onFacebookPress = () => {
    Linking.openURL(user?.facebookLink!);
  };

  const onInstagramPress = () => {
    Linking.openURL(user?.instagramLink!);
  };

  const onPhonePress = () => {
    const url = `tel:${user?.phoneNumber}`;
    try {
      Linking.openURL(url);
    } catch (error) {
      console.error('Error opening phone app:', error);
    }
  };

  return (
    <View>
        <View flexDirection={'row'} marginBottom={'5%'}>
        {user?.facebookLink && (
            <Entypo
                marginRight={'5%'}
                name="facebook"
                size={44}
                color="blue"
                onPress={onFacebookPress}
            />
        )}
        {user?.instagramLink && (
            <Entypo
                marginRight={'5%'}
                name="instagram"
                size={44}
                color="brown"
                onPress={onInstagramPress}
            />
        )}
        </View>
      <View>
        <Text fontSize={typography.fontSizes['md']} color={'grey'}>First Name</Text>
        <Text
          style={{ marginBottom: '2%' }}
          fontSize={typography.fontSizes['md']}
        >
          {user?.firstName || 'not published'}
        </Text>
        <Text fontSize={typography.fontSizes['md']} color={'grey'}>Last Name</Text>
        <Text
          style={{ marginBottom: '2%' }}
          fontSize={typography.fontSizes['md']}
        >
          {user?.lastName || 'not published'}
        </Text>
        {showDataUserData &&
          <>
          <Text fontSize={typography.fontSizes['md']} color={'grey'}>Email Name</Text>
          <Text
            style={{ marginBottom: '2%' }}
            fontSize={typography.fontSizes['md']}
          >
          {user?.email || 'not published'}
        </Text></>}
        <Text fontSize={typography.fontSizes['md']} color={'grey'} >Phone</Text>
        <Text
          style={{ marginBottom: '2%' }}
          fontSize={typography.fontSizes['md']}
          onPress={onPhonePress}
        >
          {user?.phoneNumber || 'not published'}
        </Text>
      </View>
    </View>
  );
};

export default UserDetails;
