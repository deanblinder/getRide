import React from 'react';
import { View, Text, Input, Stack, Button } from 'native-base';
import usePresenter, { Props } from './usePresenter';

const EditProfile = (props: Props) => {
  const {
    onFacebookLinkChange,
    onLastNameChange,
    onFirstNameChange,
    updateUser,
  } = usePresenter(props);
  return (
    <View
      style={{
        justifyContent: 'space-between',
        alignItems: 'center',
        display: 'flex',
        // marginTop: '20%',
        flex: 1,
        padding: '5%',
      }}
    >
      <Text>Edit Profile</Text>
      <Stack space={4} w="75%" maxW="300px" mx="auto">
        <Text>first Name</Text>
        <Input onChangeText={onFirstNameChange} />
        <Text>last Name</Text>
        <Input onChangeText={onLastNameChange} />
        <Text>facebook link</Text>
        <Input onChangeText={onFacebookLinkChange} />
      </Stack>
      <Button onPress={updateUser}>Update User</Button>
    </View>
  );
};
export default EditProfile;
