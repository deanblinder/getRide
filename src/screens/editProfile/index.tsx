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
import usePresenter, { Props } from './usePresenter';
import { useNavigation } from '@react-navigation/native';
import { KeyboardAvoidingView, Platform } from 'react-native';
import BackButton from '../../components/backButton';

const EditProfile = (props: Props) => {
  const {
    onFacebookLinkChange,
    onLastNameChange,
    onFirstNameChange,
    updateUser,
    updatedUser,
    onPhoneChange,
    onInstagramLinkChange,
    isLoading,
  } = usePresenter(props);
  const navigation = useNavigation();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: '', // Set a custom title
      headerLeft: () => <BackButton dismiss />,
      headerRight: () => (
        <Button variant="ghost" colorScheme={'gray'} onPress={updateUser}>
          {isLoading ? <Spinner color="grey.500" /> : 'Update'}
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
        contentContainerStyle={{
          padding: '10%',
          justifyContent: 'space-between',
          backgroundColor: 'white',
          height: '100%',
        }}
      >
        <Stack space={5} w="100%" maxW="300px" mx="auto">
          <Text fontSize={'2xl'} marginBottom={'5%'}>
            Edit Your Personal Info
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
        </Stack>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default EditProfile;
