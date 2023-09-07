import React from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Avatar, Spinner, Text } from 'native-base';
import typography from 'native-base/src/theme/base/typography';
import usePresenter from './usePresenter';
import { Button } from '@rneui/base';

const Profile = () => {
  const {
    user,
    onAvatarPress,
    profileImage,
    profileImageLoading,
    onEditPress,
    onFacebookPress,
  } = usePresenter();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.avatar}>
        <View>
          <Avatar
            style={{ marginBottom: '5%' }}
            size="xl"
            bg="green.500"
            source={{
              uri: profileImage,
            }}
          />
          <TouchableOpacity onPress={onAvatarPress}>
            {profileImageLoading ? (
              <Spinner
                style={{
                  marginBottom: '5%',
                  position: 'absolute',
                  right: 5,
                  bottom: 5,
                }}
                color="emerald.500"
              />
            ) : (
              <Avatar
                // @ts-ignore
                style={{
                  borderStyle: 'soled',
                  borderWidth: 3,
                  borderColor: 'white',
                  marginBottom: '5%',
                  position: 'absolute',
                  right: 5,
                  bottom: 5,
                }}
                size="sm"
                bg="blue.500"
                source={{
                  uri: 'profileImage',
                }}
              />
            )}
          </TouchableOpacity>
        </View>
        {(user?.firstName || user?.lastName) && (
          <Text fontSize={typography.fontSizes['2xl']}>
            {user?.firstName + ' ' + user?.lastName}
          </Text>
        )}
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
        {user?.facebookLink && (
          <Button onPress={onFacebookPress}>go to faceBook profile</Button>
        )}
      </View>
      <Button style={{ display: 'flex' }} onPress={onEditPress}>
        Edit
      </Button>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: '5%',
    justifyContent: 'space-between',
  },
  avatar: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '5%',
  },
});

export default Profile;
