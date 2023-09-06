import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from '@rneui/base';
import usePresenter from './usePresenter';
import { Button, Stack, Input, ScrollView, Icon, Spinner } from 'native-base';

// @ts-ignore
import { API_KEY } from '@env';

const Register = () => {
  const {
    handleSignup,
    onChangeEmail,
    onChangePassword,
    onChangePhoneNumber,
    loading,
  } = usePresenter();

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      keyboardDismissMode="interactive"
      keyboardShouldPersistTaps
    >
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
          placeholder={'Phone Number'}
          onChangeText={onChangePhoneNumber}
          size="lg"
        />
      </Stack>
      <Button onPress={handleSignup} disabled={loading}>
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
