import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Avatar, Text } from 'native-base';
import typography from 'native-base/src/theme/base/typography';
import usePresenter from './usePresenter';

const Profile = () => {
  const { user } = usePresenter();
  console.log('### date ', user);

  const birthDate = new Date(user?.birthDate.seconds).toDateString();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.avatar}>
        <Avatar
          style={{ marginBottom: '5%' }}
          size="xl"
          bg="green.500"
          source={{
            uri: user?.profileImage,
          }}
        />
        <Text fontSize={typography.fontSizes['2xl']}>
          {user?.firstName + ' ' + user?.lastName}
        </Text>
      </View>
      <View>
        <Text
          style={{ marginBottom: '2%' }}
          fontSize={typography.fontSizes['2xl']}
        >
          Email: {user?.email.toLowerCase()}
        </Text>
        <Text
          style={{ marginBottom: '2%' }}
          fontSize={typography.fontSizes['2xl']}
        >
          Phone: {user?.phoneNumber}
        </Text>
        <Text
          style={{ marginBottom: '2%' }}
          fontSize={typography.fontSizes['2xl']}
        >
          Address: {user?.address?.formatted_address}
        </Text>
        <Text
          style={{ marginBottom: '2%' }}
          fontSize={typography.fontSizes['2xl']}
        >
          Birth Date: {birthDate}
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: '5%',
  },
  avatar: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '5%',
  },
});

export default Profile;
