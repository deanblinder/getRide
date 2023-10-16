import React from 'react';
import { View, StyleSheet, Platform, KeyboardAvoidingView } from 'react-native';
import usePresenter from './usePresenter';
import {Text, Button, Stack, FormControl, Input, ScrollView, Icon, Spinner } from 'native-base';

// @ts-ignore
import { API_KEY } from '@env';
import {screenIds} from "../../constants";
import {useNavigation} from "@react-navigation/native";

const Register = () => {
  const {
    handleSignup,
    onChangeEmail,
    onChangePassword,
    onChangePhoneNumber,
    onChangeFacebookLink,
    loading,
  } = usePresenter();
  const navigation = useNavigation();

  const onHaveAccountPressed = () => {
    // @ts-ignore
    navigation.navigate(screenIds.LOGIN_SCREEN, {});
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardDismissMode="interactive"
        keyboardShouldPersistTaps
      >
        <View>
        <Text fontSize={'3xl'} marginBottom={'10%'}>Enter Your Details</Text>
        <Stack space={5} w="100%" maxW="300px" mx="auto">
          <FormControl maxW="300px">
            <Input
                size={'xl'}
                placeholder={'Email'}
                onChangeText={onChangeEmail}
                variant={'underlined'}
            />
          </FormControl>
          <FormControl maxW="300px">
            <Input
                size={'xl'}
                placeholder={'Enter Password'}
                type={'password'}
                onChangeText={onChangePassword}
                variant={'underlined'}
            />
          </FormControl>
          <FormControl maxW="300px">
            <Input
                size={'xl'}
                placeholder={'Phone Number'}
                onChangeText={onChangePhoneNumber}
                variant={'underlined'}
            />
          </FormControl>
          <FormControl maxW="300px">
            <Input
                size={'xl'}
                placeholder={'Facebook Link'}
                onChangeText={onChangeFacebookLink}
                variant={'underlined'}
            />
            <FormControl.HelperText>Enter link so people see who you are.</FormControl.HelperText>
          </FormControl>
          <Button variant={'link'} colorScheme={'secondary'} onPress={onHaveAccountPressed}>Already have an account?</Button>
        </Stack>
        </View>
        <Button onPress={handleSignup} disabled={loading}>
          {loading ? <Spinner color="emerald.500" /> : 'submit'}
        </Button>
      </ScrollView>
    </KeyboardAvoidingView>
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
