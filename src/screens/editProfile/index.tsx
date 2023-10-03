import React from 'react';
import { View, Text, Input, Stack, Button } from 'native-base';
import usePresenter, { Props } from './usePresenter';

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
    <View
      padding={'5%'}
      marginTop={'10%'}
      justifyContent={'space-between'}
      flex={1}
    >
      <Stack space={4} w="90%" maxW="300px" mx="auto">
        <Input
          placeholder={'First Name'}
          onChangeText={onFirstNameChange}
          value={firstName}
        />
        <Input
          placeholder={'Last Name'}
          onChangeText={onLastNameChange}
          value={lastName}
        />
        <Input
          placeholder={'Facebook link'}
          onChangeText={onFacebookLinkChange}
          value={facebookLink}
        />
        <Input
          placeholder={'Instagram link'}
          onChangeText={onInstagramLinkChange}
          value={instagramLink}
        />
        <Input
          placeholder={'Age'}
          onChangeText={onAgeChange}
          value={age.toString()}
        />
        <Input
          placeholder={'Gender'}
          onChangeText={onGenderChange}
          value={gender}
        />
      </Stack>
      <Button onPress={updateUser}>Update User</Button>
    </View>
  );
};

export default EditProfile;
