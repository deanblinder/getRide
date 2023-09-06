import React from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Avatar, Text } from 'native-base';
import typography from 'native-base/src/theme/base/typography';
import usePresenter from './usePresenter';

const Profile = () => {
  const { user, onAvatarPress, profileImage } = usePresenter();

  const birthDate = new Date(user?.birthDate!).toDateString();

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
            <Avatar
              style={{
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
          </TouchableOpacity>
        </View>
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
        {/*<Text*/}
        {/*  style={{ marginBottom: '2%' }}*/}
        {/*  fontSize={typography.fontSizes['2xl']}*/}
        {/*>*/}
        {/*  Address: {user?.address?.formatted_address}*/}
        {/*</Text>*/}
        {/*<Text*/}
        {/*  style={{ marginBottom: '2%' }}*/}
        {/*  fontSize={typography.fontSizes['2xl']}*/}
        {/*>*/}
        {/*  Birth Date: {birthDate}*/}
        {/*</Text>*/}
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
