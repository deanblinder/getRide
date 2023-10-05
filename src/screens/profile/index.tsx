import React from 'react';
import { StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { View, Avatar, Spinner, Text, Button, Divider } from 'native-base';
import typography from 'native-base/src/theme/base/typography';
import usePresenter, { Props } from './usePresenter';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { screenIds } from '../../constants';
import { Ionicons } from '@expo/vector-icons';

const Profile = (props: Props) => {
  const { navigation } = props;

  const {
    user,
    onAvatarPress,
    profileImage,
    profileImageLoading,
    onEditPress,
    onFacebookPress,
    onInstagramPress,
    onLogoutPress,
  } = usePresenter();
  const CustomHeaderComponent = () => {
    const navigation = useNavigation();

    const onPress = () => {
      // @ts-ignore
      navigation.navigate(screenIds.PROFILE_SCREEN);
    };

    return (
      <TouchableOpacity
        onPress={onPress}
        style={{
          flexDirection: 'row-reverse',
        }}
      >
        <Ionicons name="ios-settings-outline" size={24} color="black" />
      </TouchableOpacity>
    );
  };

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Profile', // Set a custom title
      headerStyle: {},
      headerTintColor: 'white', // Customize the text color
      headerTitleStyle: {
        fontSize: 18, // Customize the text size
      },
      headerRight: () => <CustomHeaderComponent />,
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.topScreen}>
        <View justifyContent={'space-between'}>
          <Text bold fontSize={typography.fontSizes['2xl']}>
            {user?.firstName && user.lastName
              ? user?.firstName + ' ' + user?.lastName
              : user?.email}
          </Text>
          <Button
            width={'70%'}
            borderRadius={100}
            onPress={onEditPress}
            size={'xs'}
          >
            Edit profile
          </Button>
        </View>
        <View flexDirection={'row'}>
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
      </View>
      <Divider marginBottom={'10%'} />
      <ScrollView>
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
      </ScrollView>
      <Button colorScheme={'danger'} variant="outline" onPress={onLogoutPress}>
        log out
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: '5%',
    flex: 1,
  },
  topScreen: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '5%',
  },
});

export default Profile;
