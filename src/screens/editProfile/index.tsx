import React from 'react';
import { View, Text, Input, Stack, Button, FormControl } from 'native-base';
import usePresenter, { Props } from './usePresenter';
import typography from 'native-base/src/theme/base/typography';

const EditProfile = (props: Props) => {
  const {
    onFacebookLinkChange,
    onLastNameChange,
    onFirstNameChange,
    updateUser,
    firstName,
    lastName,
    facebookLink,
    instagramLink,
    age,
    gender,
    onInstagramLinkChange,
    onAgeChange,
    onGenderChange,
  } = usePresenter(props);
  return (
    <View padding={'5%'} justifyContent={'space-between'} flex={1}>
      <Stack space={4} w="90%" maxW="300px" mx="auto">
        <Text fontSize={typography.fontSizes['lg']} bold>
          Edit Your Personal Info
        </Text>
        <FormControl maxW="300px">
          <FormControl.Label>First Name</FormControl.Label>
          <Input
            placeholder={'First Name'}
            onChangeText={onFirstNameChange}
            value={firstName}
            variant={'underlined'}
          />
        </FormControl>
        <FormControl maxW="300px">
          <FormControl.Label>Last Name</FormControl.Label>
          <Input
            placeholder={'Last Name'}
            onChangeText={onLastNameChange}
            value={lastName}
            variant={'underlined'}
          />
        </FormControl>
        <FormControl maxW="300px">
          <FormControl.Label>Facebook link</FormControl.Label>
          <Input
            placeholder={'Facebook link'}
            onChangeText={onFacebookLinkChange}
            value={facebookLink}
            variant={'underlined'}
          />
        </FormControl>
        <FormControl maxW="300px">
          <FormControl.Label>Instagram link</FormControl.Label>
          <Input
            placeholder={'Instagram link'}
            onChangeText={onInstagramLinkChange}
            value={instagramLink}
            variant={'underlined'}
          />
        </FormControl>
        <FormControl maxW="300px">
          <FormControl.Label>Age</FormControl.Label>
          <Input
            placeholder={'Age'}
            onChangeText={onAgeChange}
            value={age?.toString()}
            variant={'underlined'}
          />
        </FormControl>
        <FormControl maxW="300px">
          <FormControl.Label>Gender</FormControl.Label>
          <Input
            placeholder={'Gender'}
            onChangeText={onGenderChange}
            value={gender}
            variant={'underlined'}
          />
        </FormControl>
      </Stack>
      <Button onPress={updateUser}>Update User</Button>
    </View>
  );
};

export default EditProfile;
