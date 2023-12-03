import { Text, View, Image } from 'native-base';
import typography from 'native-base/src/theme/base/typography';
import React from 'react';
import { User } from '../../typing';
import { Linking, TouchableOpacity } from 'react-native';

const instagramIcon = require('../../../assets/icons/instagram.png');
const facebookIcon = require('../../../assets/icons/facebook.png');

type Props = {
  user: User;
  showDataUserData?: boolean;
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
          <TouchableOpacity onPress={onFacebookPress}>
            <Image
              width={44}
              height={44}
              source={facebookIcon}
              marginRight={'5%'}
            />
          </TouchableOpacity>
        )}
        {user?.instagramLink && (
          <TouchableOpacity onPress={onInstagramPress}>
            <Image width={44} height={44} source={instagramIcon} />
          </TouchableOpacity>
        )}
      </View>
      <View>
        <Text fontSize={typography.fontSizes['md']} color={'grey'}>
          First Name
        </Text>
        <Text
          style={{ marginBottom: '2%' }}
          fontSize={typography.fontSizes['md']}
        >
          {user?.firstName || 'not published'}
        </Text>
        <Text fontSize={typography.fontSizes['md']} color={'grey'}>
          Last Name
        </Text>
        <Text
          style={{ marginBottom: '2%' }}
          fontSize={typography.fontSizes['md']}
        >
          {user?.lastName || 'not published'}
        </Text>
        {showDataUserData && (
          <>
            <Text fontSize={typography.fontSizes['md']} color={'grey'}>
              Email
            </Text>
            <Text
              style={{ marginBottom: '2%' }}
              fontSize={typography.fontSizes['md']}
            >
              {user?.email || 'not published'}
            </Text>
          </>
        )}
        <Text fontSize={typography.fontSizes['md']} color={'grey'}>
          Phone
        </Text>
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
