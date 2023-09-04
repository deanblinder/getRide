import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from '@rneui/base';
import usePresenter from './usePresenter';
import { Button, Stack, Input, ScrollView, Icon, Spinner } from 'native-base';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

// @ts-ignore
import { API_KEY } from '@env';
import RNDateTimePicker from '@react-native-community/datetimepicker';

const Register = () => {
  const {
    handleSignup,
    onChangeEmail,
    onChangePassword,
    onChangeFirstName,
    onChangeLastName,
    onChangeAddress,
    onChangePhoneNumber,
    pickImageAsync,
    birthDate,
    onChangeBirthDate,
    profileImage,
    loading,
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
          onPressIn={pickImageAsync}
          placeholder={
            profileImage ? 'Edit Profile Image' : 'Add Profile Image'
          }
          size="lg"
          InputRightElement={
            profileImage ? (
              <Icon
                as={<MaterialIcon name="check" />}
                size={5}
                ml="2"
                color="muted.400"
              />
            ) : undefined
          }
        />
        <Input
          placeholder={'Phone Number'}
          onChangeText={onChangePhoneNumber}
          size="lg"
        />
        {/*<Input*/}
        {/*  placeholder={'Date of Birth'}*/}
        {/*  onChangeText={onChangeBirthDate}*/}
        {/*  size="lg"*/}
        {/*/>*/}
        <View
          style={{
            display: 'flex',
            flexDirection: 'row-reverse',
            direction: 'rtl',
            width: '100%',
            alignItems: 'center',
            borderStyle: 'solid',
            borderColor: 'grey',
            borderWidth: 1,
          }}
        >
          <Text style={{ marginRight: '5%' }}>Add birthdate</Text>
          <RNDateTimePicker
            value={birthDate}
            onChange={onChangeBirthDate}
            display="default"
          />
        </View>
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
      </Stack>
      <Button onPress={handleSignup}>
        {loading ? <Spinner color="emerald.500" /> : 'submit'}
      </Button>
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
