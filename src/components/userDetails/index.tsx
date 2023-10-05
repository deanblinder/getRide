import { Text, View } from 'native-base';
import typography from 'native-base/src/theme/base/typography';
import React from 'react';
import { User } from '../../typing';
import { Linking } from 'react-native';

type Props = {
  user: User;
};

const UserDetails = (props: Props) => {
  const { user } = props;

  const onFacebookPress = () => {
    Linking.openURL(user?.facebookLink!);
  };

  const onInstagramPress = () => {
    Linking.openURL(user?.instagramLink!);
  };

  return (
    <View>
      <View>
        <Text fontSize={typography.fontSizes['md']}>First Name</Text>
        <Text
          style={{ marginBottom: '2%' }}
          fontSize={typography.fontSizes['md']}
        >
          {user?.firstName || 'not published'}
        </Text>
        <Text fontSize={typography.fontSizes['md']}>Last Name</Text>
        <Text
          style={{ marginBottom: '2%' }}
          fontSize={typography.fontSizes['md']}
        >
          {user?.lastName || 'not published'}
        </Text>
        <Text fontSize={typography.fontSizes['md']}>Email</Text>
        <Text
          style={{ marginBottom: '2%' }}
          fontSize={typography.fontSizes['md']}
        >
          {user?.email.toLowerCase() || 'not published'}
        </Text>
        <Text fontSize={typography.fontSizes['md']}>Phone</Text>
        <Text
          style={{ marginBottom: '2%' }}
          fontSize={typography.fontSizes['md']}
        >
          {user?.phoneNumber || 'not published'}
        </Text>
        <Text fontSize={typography.fontSizes['md']}>Age</Text>
        <Text
          style={{ marginBottom: '2%' }}
          fontSize={typography.fontSizes['md']}
        >
          {user?.birthDate || 'not published'}
        </Text>
        <Text fontSize={typography.fontSizes['md']}>Gender</Text>
        <Text
          style={{ marginBottom: '2%' }}
          fontSize={typography.fontSizes['md']}
        >
          {user?.gender || 'not published'}
        </Text>
      </View>
      <Text fontSize={typography.fontSizes['md']}>Facebook</Text>
      <Text
        style={{ marginBottom: '2%' }}
        fontSize={typography.fontSizes['md']}
        onPress={onFacebookPress}
      >
        {user?.facebookLink || 'not published'}
      </Text>
      <Text fontSize={typography.fontSizes['md']}>Instagram</Text>
      <Text
        style={{ marginBottom: '2%' }}
        fontSize={typography.fontSizes['md']}
        onPress={onInstagramPress}
      >
        {user?.instagramLink || 'not published'}
      </Text>
    </View>
  );
};

export default UserDetails;
