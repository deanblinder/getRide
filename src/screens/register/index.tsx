import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Text } from '@rneui/base';
import usePresenter from './usePresenter';
import { Button, Stack, Input, ScrollView } from 'native-base';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
// @ts-ignore
import { API_KEY } from '@env';

const Register = () => {
  const {
    handleSignup,
    onChangeEmail,
    onChangePassword,
    onChangeFirstName,
    onChangeLastName,
    onChangeAddress,
    onChangePhoneNumber,
    onChangeProfileImage,
    onChangeBirthDate,
    onChangeFacebookLink,
  } = usePresenter();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text h2>Enter Your Details</Text>
      <Stack space={5} w="75%" maxW="300px" mx="auto">
        <Input
          placeholder={'Enter Email'}
          onChangeText={onChangeEmail}
          size="lg"
        />
        <Input
          placeholder={'Enter Password'}
          onChangeText={onChangePassword}
          size="lg"
          type={'password'}
        />
        <Input
          placeholder={'First Name'}
          onChangeText={onChangeFirstName}
          size="lg"
        />
        <Input
          placeholder={'Last Name'}
          onChangeText={onChangeLastName}
          size="lg"
        />
        <Input
          placeholder={'Profile Image'}
          onChangeText={onChangeProfileImage}
          size="lg"
        />
        <Input
          placeholder={'Phone Number'}
          onChangeText={onChangePhoneNumber}
          size="lg"
        />
        <Input
          placeholder={'Date of Birth'}
          onChangeText={onChangeBirthDate}
          size="lg"
        />
        <GooglePlacesAutocomplete
          placeholder="Home Address"
          fetchDetails={true}
          onPress={(data, details = null) => {
            onChangeAddress(details);
            // 'details' is provided when fetchDetails = true
            console.log(data, details);
          }}
          styles={{
            textInput: styles.googleTextInput,
            height: 50,
            backgroundColor: 'white',
            marginTop: 20,
          }}
          query={{
            key: API_KEY,
            language: 'en',
          }}
        />
        <Input
          placeholder={'FaceBook link'}
          onChangeText={onChangeFacebookLink}
          size="lg"
        />
      </Stack>
      <Button onPress={handleSignup}>Submit</Button>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: '5%',
    justifyContent: 'space-between',
    display: 'flex',
    flexGrow: 1,
  },
  inputs: {
    display: 'flex',
  },
  googleTextInput: {
    height: 40,
    backgroundColor: 'trasparent',
    marginVertical: 5,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'grey',
  },
});
export default Register;
