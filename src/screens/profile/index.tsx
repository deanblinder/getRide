import React from 'react';
import { StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { View, Avatar, Spinner, Text, Button } from 'native-base';
import typography from 'native-base/src/theme/base/typography';
import usePresenter, { Props } from './usePresenter';
import { Entypo } from '@expo/vector-icons';

const Profile = (props: Props) => {
  const { navigation } = props;

  const {
    user,
    onAvatarPress,
    profileImage,
    profileImageLoading,
    onEditPress,
    onFacebookPress,
    onLogoutPress,
  } = usePresenter();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: '', // Set a custom title
      headerStyle: {},
      headerTintColor: 'white', // Customize the text color
      headerTitleStyle: {
        fontSize: 18, // Customize the text size
      },
      headerRight: () => (
        <TouchableOpacity
          onPress={onLogoutPress}
          style={{ flexDirection: 'row' }}
        >
          <Text bold marginRight={'5%'}>
            log out
          </Text>
          <Entypo name="log-out" size={20} />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View>
        {user?.facebookLink && (
          <Entypo
            name="facebook"
            size={44}
            color="blue"
            onPress={onFacebookPress}
          />
        )}
        <View style={styles.avatar}>
          <View>
            <Avatar
              style={{ marginBottom: '5%' }}
              size="xl"
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
                    borderStyle: 'solid',
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
                >
                  <Entypo name="camera" size={15} onPress={onAvatarPress} />
                </Avatar>
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
        </View>
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
    flex: 1,
    justifyContent: 'space-between',
  },
  avatar: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '5%',
  },
});

export default Profile;
