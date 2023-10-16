import React from 'react';
import { StyleSheet, Platform, KeyboardAvoidingView } from 'react-native';
import usePresenter from './usePresenter';
import {Button, Text, Input, Spinner, Stack, ScrollView, View, FormControl} from 'native-base';

const Login = () => {
  const { handleLogin, onChangePassword, onChangeEmail, loading } =
    usePresenter();
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView keyboardDismissMode="interactive" contentContainerStyle={styles.container}>
        <View>
        <Text fontSize={'3xl'} marginBottom={'10%'}>Enter Your Details</Text>
        <Stack space={4} w="100%" maxW="300px" mx="auto">
          <FormControl maxW="300px">
            <Input
                size={'xl'}
                placeholder={'Enter Email'}
                onChangeText={onChangeEmail}
                variant={'underlined'}
            />
          </FormControl>
          <FormControl maxW="300px">
            <Input
                size={'xl'}
                placeholder={'Enter Password'}
                onChangeText={onChangePassword}
                variant={'underlined'}
                type={'password'}

            />
          </FormControl>
        </Stack>
        </View>
        <Button onPress={handleLogin} disabled={loading}>
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
    flex: 1,
  },
});
export default Login;
