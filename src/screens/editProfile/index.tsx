import React from 'react';
import {
  View,
  Text,
  Input,
  Stack,
  Button,
  FormControl,
  ScrollView,
  Spinner,
} from 'native-base';
import usePresenter from './usePresenter';
import { useNavigation } from '@react-navigation/native';
import { KeyboardAvoidingView, Platform } from 'react-native';
import BackButton from '../../components/backButton';
import { useTranslation } from 'react-i18next';

const EditProfile = () => {
  const {
    onFacebookLinkChange,
    onLastNameChange,
    onFirstNameChange,
    updateUser,
    updatedUser,
    onPhoneChange,
    onInstagramLinkChange,
    isLoading,
  } = usePresenter();
  const { t, i18n } = useTranslation();

  const navigation = useNavigation();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: '', // Set a custom title
      headerLeft: () => <BackButton dismiss />,
      headerRight: () => (
        <Button variant="ghost" colorScheme={'gray'} onPress={updateUser}>
          {isLoading ? (
            <Spinner color="grey.500" />
          ) : (
            t('EDIT_PROFILE_PAGE.UPDATE')
          )}
        </Button>
      ),
    });
  }, [navigation, updatedUser, isLoading]);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView
        keyboardDismissMode={'interactive'}
        style={{
          flexGrow: 1,
        }}
        contentContainerStyle={{
          paddingVertical: '5%',
          backgroundColor: 'white',
        }}
      >
        <Stack space={5} w="100%" maxW="300px" mx="auto">
          <Text
            textAlign={i18n.language === 'he' ? 'right' : 'left'}
            fontSize={'2xl'}
          >
            {t('EDIT_PROFILE_PAGE.TITLE')}
          </Text>
          <Text
            textAlign={i18n.language === 'he' ? 'right' : 'left'}
            fontSize={'lg'}
            marginBottom={'5%'}
          >
            {t('EDIT_PROFILE_PAGE.SUBTITLE')}
          </Text>
          <FormControl maxW="300px">
            <FormControl.Label>First Name</FormControl.Label>
            <Input
              size={'lg'}
              placeholder={'First Name'}
              onChangeText={onFirstNameChange}
              value={updatedUser.firstName}
              variant={'underlined'}
            />
          </FormControl>
          <FormControl maxW="300px">
            <FormControl.Label>Last Name</FormControl.Label>
            <Input
              size={'lg'}
              placeholder={'Last Name'}
              onChangeText={onLastNameChange}
              value={updatedUser.lastName}
              variant={'underlined'}
            />
          </FormControl>
          <FormControl maxW="300px">
            <FormControl.Label>Phone</FormControl.Label>
            <Input
              size={'lg'}
              placeholder={'Phone'}
              onChangeText={onPhoneChange}
              value={updatedUser.phoneNumber}
              variant={'underlined'}
            />
          </FormControl>
          <FormControl maxW="300px">
            <FormControl.Label>Facebook link</FormControl.Label>
            <Input
              size={'xl'}
              placeholder={'Facebook link'}
              onChangeText={onFacebookLinkChange}
              value={updatedUser.facebookLink}
              variant={'underlined'}
            />
          </FormControl>
          <FormControl maxW="300px">
            <FormControl.Label>Instagram link</FormControl.Label>
            <Input
              size={'lg'}
              placeholder={'Instagram link'}
              onChangeText={onInstagramLinkChange}
              value={updatedUser.instagramLink}
              variant={'underlined'}
            />
          </FormControl>
          <View height={150} />
        </Stack>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default EditProfile;
