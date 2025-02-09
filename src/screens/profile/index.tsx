import React from 'react';
import {
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';
import { View, Avatar, Spinner, Text, Button, Divider } from 'native-base';
import typography from 'native-base/src/theme/base/typography';
import usePresenter, { Props } from './usePresenter';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { screenIds } from '../../constants';
import { Ionicons } from '@expo/vector-icons';
import UserDetails from '../../components/userDetails';
import BackButton from '../../components/backButton';
import { useTranslation } from 'react-i18next';

const Profile = (props: Props) => {
  const { navigation } = props;
  const {
    user,
    onAvatarPress,
    profileImage,
    profileImageLoading,
    onEditPress,
    onLogoutPress,
  } = usePresenter();
  const { t } = useTranslation();

  const WheelIcon = () => {
    const navigation = useNavigation();

    const onPress = () => {
      // @ts-ignore
      navigation.navigate(screenIds.SETTINGS_SCREEN);
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
      title: '',
      headerRight: () => <WheelIcon />,
      headerLeft: () => <BackButton />,
    });
  }, [navigation]);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
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
            backgroundColor={'blue.400'}
          >
            {t('PROFILE_PAGE.EDIT_PROFILE_BUTTON')}
          </Button>
        </View>
        <View flexDirection={'row'}>
          <Avatar
            style={{ marginBottom: '5%' }}
            size="xl"
            source={{
              uri: profileImage,
            }}
          >
            {user?.email.slice(0, 2).toUpperCase()}
          </Avatar>
          <TouchableOpacity onPress={onAvatarPress}>
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
              bg="blue.400"
            >
              {profileImageLoading ? (
                <Spinner color="emerald.500" />
              ) : (
                <Entypo name="camera" size={15} onPress={onAvatarPress} />
              )}
            </Avatar>
          </TouchableOpacity>
        </View>
      </View>
      <Divider marginBottom={'10%'} />
      <ScrollView keyboardDismissMode={'interactive'}>
        <UserDetails user={user!} showDataUserData />
      </ScrollView>
      <Button
        size={'lg'}
        colorScheme={'danger'}
        variant="link"
        _text={{ color: 'red.400' }}
        onPress={onLogoutPress}
      >
        {t('PROFILE_PAGE.LOGOUT_BUTTON')}
      </Button>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: '5%',
    flex: 1,
    backgroundColor: 'white',
  },
  topScreen: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '5%',
  },
});

export default Profile;
