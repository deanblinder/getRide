import React from 'react';
import {
  View,
  Text,
  Input,
  Stack,
  Button,
  FormControl,
  ScrollView,
} from 'native-base';
import usePresenter, { Props } from './usePresenter';
import typography from 'native-base/src/theme/base/typography';
import { useNavigation } from '@react-navigation/native';
import {KeyboardAvoidingView, Platform} from "react-native";

const EditProfile = (props: Props) => {
  const {
    onFacebookLinkChange,
    onLastNameChange,
    onFirstNameChange,
    updateUser,
    updatedUser,
    onPhoneChange,
    onInstagramLinkChange,
  } = usePresenter(props);
  const navigation = useNavigation();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: '', // Set a custom title
      headerRight: () => (
        <Button variant="ghost" colorScheme={'gray'} onPress={updateUser}>
          Update
        </Button>
      ),
    });
  }, [navigation, updatedUser]);

  return (
      <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
    <ScrollView
        keyboardDismissMode={'interactive'}
        contentContainerStyle={{ padding: '5%', justifyContent: 'space-between' }}
    >
      <Stack space={5} w="100%" maxW="300px" mx="auto">
        <Text fontSize={'3xl'} marginBottom={'10%'}>
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
