import React from 'react';
import { StyleSheet, Platform, KeyboardAvoidingView } from 'react-native';
import { Text } from '@rneui/base';
import usePresenter from './usePresenter';
import { Button, Input, Spinner, Stack, ScrollView } from 'native-base';

const Login = () => {
  const { handleLogin, onChangePassword, onChangeEmail, loading } =
    usePresenter();
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <Text h2>Enter Your Details</Text>
        <Stack space={4} w="75%" maxW="300px" mx="auto">
          <Input
            size="lg"
            placeholder="Enter Email"
            onChangeText={onChangeEmail}
          />
          <Input
            size="lg"
            placeholder={'Enter Password'}
            onChangeText={onChangePassword}
            type={'password'}
          />
        </Stack>
        <Button onPress={handleLogin} disabled={loading}>
          {loading ? <Spinner color="emerald.500" /> : 'submit'}
        </Button>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: '10%',
    justifyContent: 'space-around',
    display: 'flex',
    flex: 1,
  },
  scrollViewContainer: {
    flex: 1,
    justifyContent: 'space-around',
  },
});
export default Login;
